import Image from 'next/image';

const experiences = [
  {
    img: '/assets/img/tutors-fi-logo.webp',
    title: 'Tutors Finland Oy',
    role: 'Software Developer',
    duration: 'March 2024 - Present',
  },
  {
    img: '/assets/img/health-os-logo.webp',
    title: 'HealthOS Ltd',
    role: 'Software Developer',
    duration: 'September 2023 - March 2024',
  },
  {
    img: '/assets/img/repliq-ltd-logo.webp',
    title: 'REPLIQ Limited',
    role: 'Software Developer',
    duration: 'Jun 2023 - March 2024',
  },
  {
    img: '/assets/img/themespell-logo.webp',
    title: 'Themespell',
    role: 'Full Stack Developer',
    duration: 'November 2020 - September 2021',
  },
];

export default function About() {
  return (
    <section className='max-w-full lg:max-w-[70%] mx-auto py-14 px-4 lg:px-0 space-y-8'>
      <div>
        <h1 className='text-3xl font-semibold border-b pb-6 mb-6'>About</h1>
        <div className='space-y-6'>
          <p className='text-lg/8 text-custom-tertiary'>
            Hi there, I&apos; Mahmud Hasan Imran. I&apos;m a dedicated software
            developer with a passion for crafting innovative solutions using
            Next.js, React, and Express.js.
          </p>
          <p className='text-lg/8 text-custom-tertiary'>
            I&apos;m currently working with Tutors Finland Oy, a Finland-based
            company, where I&apos;m contributing to Nedu AI—an AI-powered job
            platform. Nedu AI features smart profiles that users can create and
            edit via an AI chatbot, alongside intelligent job matching and
            application tools designed to simplify the job search process.
            Before this, I worked with a healthcare company on a procurement
            project, optimizing workflows with technology, and its sister
            concern, where I built a SaaS e-commerce platform for medicine.
          </p>
          <p className='text-lg/8 text-custom-tertiary'>
            Earlier in my career, I was part of a product-based company,
            developing LocalPress, a subscription-based WordPress theme powered
            by PHP. Beyond that, I&apos;ve completed over 20 freelance projects,
            mostly leveraging Next.js and React.js, with a few websites built
            using WordPress and Elementor. No matter the project, my focus is
            always on delivering tools and experiences that people find
            intuitive and valuable.
          </p>
          <p className='text-lg/8 text-custom-tertiary '>
            I love blending creativity with code and am always eager to tackle
            new challenges. If you&apos;re interested in collaborating on a
            freelance project or just want to connect, feel free to reach out at
            <span className='text-blue-600 block'>devmhimran@gmail.com</span>.
          </p>
        </div>
      </div>
      <div>
        <h1 className='text-3xl font-semibold border-b pb-6 mb-6'>
          Experience
        </h1>
        <div className='divide-y divide-slate-200'>
          {experiences.map((experience, index) => (
            <div key={index}>
              <div className='flex items-start gap-6 my-6'>
                <div className='bg-white rounded-lg'>
                  <Image
                    src={experience.img}
                    alt={experience.title}
                    className='w-[60px] h-[60px] rounded-lg'
                    width={60}
                    height={60}
                  />
                </div>
                <div>
                  <h2 className='text-xl font-semibold'>{experience.title}</h2>
                  <p className='text-lg text-custom-tertiary'>
                    {experience.role}
                  </p>
                  <p className='text-sm text-custom-tertiary mt-3'>
                    {experience.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className='text-3xl font-semibold border-b pb-6 mb-6'>Education</h3>
        <div className='flex items-start gap-6 my-6'>
          <div className='bg-white rounded-lg shrink-0'>
            <Image
              src='/assets/img/bubt-logo.webp'
              alt='bubt logo'
              className='w-[60px] rounded-lg p-2 '
              width={60}
              height={60}
            />
          </div>
          <div>
            <h2 className='text-xl font-semibold'>
              Bangladesh University of Business and Technology (BUBT
            </h2>
            <p className='text-lg text-custom-tertiary'>
              Computer Science & Engineering
            </p>
            <p className='text-sm text-custom-tertiary mt-3'>
              February 2018 - Jun 2022
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
