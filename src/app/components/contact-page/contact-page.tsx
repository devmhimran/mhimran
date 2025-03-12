'use client';

import { Button } from '@/app/components';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

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

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (form.current)
      emailjs
        .sendForm(
          `${process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE}`,
          `${process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE}`,
          form.current,
          `${process.env.NEXT_PUBLIC_EMAIL_JS_KEY}`
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success('Successfully Send!');
            (e.target as HTMLFormElement).reset();
            setLoading(false);
          },
          (error) => {
            console.log(error.text);
            toast.error('Failed to send message');
            setLoading(false);
          }
        );
  };

  console.log({ id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID });

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
            <p className='text-custom-tertiary'>{item.value}</p>
          </div>
        ))}
      </div>
      <form className='space-y-4' ref={form} onSubmit={sendEmail}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              className='border w-full p-2 rounded-lg bg-[#F8FAFC]'
              type='text'
              name='name'
              id='name'
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              className='border w-full p-2 rounded-lg bg-[#F8FAFC]'
              type='email'
              name='email'
              id='email'
            />
          </div>
        </div>
        <div className='space-y-3'>
          <label htmlFor='message'>Message</label>
          <textarea
            className='border w-full p-2 rounded-lg bg-[#F8FAFC] resize-none h-32'
            name='message'
            id='message'
          />
          <Button type='submit' disabled={loading}>
            Send
          </Button>
        </div>
      </form>
    </section>
  );
}
