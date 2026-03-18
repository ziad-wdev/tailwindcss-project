import ServiceCard from './ServiceCard';

export default function Services() {
  const services = [
    {
      title: 'SEO Optimization',
      description:
        'We ensure your website appears on the first pages of search engines and increases qualified visitors.',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Technical SEO'],
      icon: 'fa-solid fa-chart-line',
      index: 0
    },
    {
      title: 'Social Media Marketing',
      description:
        'We create and manage your social media presence to engage your audience and increase brand awareness.',
      features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Analytics & Reporting'],
      icon: 'fa-brands fa-facebook',
      index: 1
    },
    {
      title: 'Website Design & Development',
      description: 'We design and develop beautiful, responsive websites that help you achieve your business goals.',
      features: ['Custom Design', 'Responsive Development', 'E-commerce Solutions', 'Maintenance & Support'],
      icon: 'fa-solid fa-code',
      index: 2
    }
  ];

  return (
    <section id='services' className='py-20'>
      <div className='container mx-auto px-8 text-center'>
        <h2 className='mb-4 text-4xl font-bold'>Our Integrated Services</h2>
        <p className='mb-4 text-lg text-slate-500'>
          We offer a comprehensive range of digital solutions to grow your business.
        </p>
        <div className='mx-auto h-1 w-20 rounded-full bg-blue-500'></div>

        <div className='mt-12 flex flex-wrap justify-center gap-8'>
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
