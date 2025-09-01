'use client';

import { Button } from '@/app/components';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { useRef, useState } from 'react';
import Link from 'next/link';

type FormInputs = {
  user_name: string;
  user_email: string;
  message: string;
};

const contact = [
  {
    name: 'email',
    value: 'devmhimran@gmail.com',
  },
  {
    name: 'facebook',
    value: 'facebook.com/devmhimran01',
  },
  {
    name: 'linkedin',
    value: 'linkedin.com/in/devmhimran',
  },
  {
    name: 'github',
    value: 'github.com/devmhimran',
  },
];

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const checkSubmissionLimit = () => {
    const today = new Date().toDateString();
    const submissionData = JSON.parse(
      localStorage.getItem('formSubmissions') || '{"date": "", "count": 0}'
    );

    if (submissionData.date !== today) {
      return { canSubmit: true, newCount: 1 };
    }

    return {
      canSubmit: submissionData.count < 2,
      newCount: submissionData.count + 1,
    };
  };

  const updateSubmissionCount = (count: number) => {
    const today = new Date().toDateString();
    localStorage.setItem(
      'formSubmissions',
      JSON.stringify({ date: today, count })
    );
  };

  const sendEmail: SubmitHandler<FormInputs> = (data) => {
    const restrictedEmails = [
      'devmhimran@gmail.com',
      'mahmud.bubt.150@gmail.com',
    ];

    if (restrictedEmails.includes(data.user_email.toLowerCase())) {
      toast.error(
        'This email address belongs to the site owner. Please use a different email address.'
      );
      return;
    }

    const { canSubmit, newCount } = checkSubmissionLimit();

    if (!canSubmit) {
      toast.error('Submission limit reached (2 messages per day)');
      return;
    }

    if (!form.current) return;

    setLoading(true);
    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE}`,
        `${process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE}`,
        form.current,
        `${process.env.NEXT_PUBLIC_EMAIL_JS_KEY}`
      )
      .then(
        () => {
          toast.success('Successfully Sent!');
          reset();
          updateSubmissionCount(newCount);
          setLoading(false);
        },
        (error) => {
          toast.error('Failed to send message');
          setLoading(false);
        }
      );
  };

  return (
    <section className='max-w-full lg:max-w-[70%] mx-auto py-14 px-4 lg:px-0 space-y-8'>
      <div>
        <h1 className='text-3xl font-semibold border-b pb-6 mb-6'>Contact</h1>
        <p className='text-lg/8 text-custom-primary'>
          If you&apos;d like to get in touch, feel free to reach out using the
          details below. I&apos;m always excited to discuss potential freelance
          projects or collaborations!
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {contact.map((item) => (
          <div key={item.name}>
            <p className='text-xl capitalize font-semibold text-custom-primary'>
              {item.name}
            </p>
            {item.value === 'email' ? (
              <Link href={`mailto:${item.value}`} target='_blank'>
                <p className='text-custom-tertiary'>{item.value}</p>
              </Link>
            ) : (
              <Link
                href={`https://${item.value}`}
                target='_blank'
                className='hover:underline text-custom-tertiary'
              >
                {item.value}
              </Link>
            )}
          </div>
        ))}
      </div>
      <form className='space-y-4' ref={form} onSubmit={handleSubmit(sendEmail)}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div>
            <label htmlFor='user_name'>Name</label>
            <input
              className={`border w-full p-2 rounded-lg bg-[#F8FAFC] ${
                errors.user_name ? 'border-red-500' : 'border-gray-300'
              }`}
              type='text'
              id='user_name'
              {...register('user_name', {
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters',
                },
              })}
            />
            {errors.user_name && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.user_name.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor='user_email'>Email</label>
            <input
              className={`border w-full p-2 rounded-lg bg-[#F8FAFC] ${
                errors.user_email ? 'border-red-500' : 'border-gray-300'
              }`}
              type='email'
              id='user_email'
              {...register('user_email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.user_email && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.user_email.message}
              </p>
            )}
          </div>
        </div>
        <div className='space-y-3'>
          <label htmlFor='message'>Message</label>
          <textarea
            className={`border w-full p-2 rounded-lg bg-[#F8FAFC] resize-none h-32 ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            id='message'
            {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters',
              },
            })}
          />
          {errors.message && (
            <p className='text-red-500 text-sm mt-1'>
              {errors.message.message}
            </p>
          )}
          <Button type='submit' disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </Button>
        </div>
      </form>
    </section>
  );
}
