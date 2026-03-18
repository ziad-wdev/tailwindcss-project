export default function Stats() {
  return (
    <section id='services' className='relative overflow-hidden bg-linear-to-r from-blue-600 to-purple-600 py-20'>
      <div className='absolute top-0 left-0 size-64 -translate-1/2 rounded-full bg-white/15'></div>
      <div className='absolute right-0 bottom-0 size-92 translate-1/2 rounded-full bg-white/15'></div>
      <div className='container mx-auto flex flex-wrap items-center justify-evenly gap-16 px-8'>
        <div className='w-50 space-y-4 text-center text-white'>
          <h2 className='text-6xl font-bold'>+500</h2>
          <p className='text-md font-medium tracking-wide uppercase'>Happy Clients</p>
        </div>
        <div className='w-50 space-y-4 text-center text-white'>
          <h2 className='text-6xl font-bold'>+1000</h2>
          <p className='text-md font-medium tracking-wide uppercase'>Projects Completed</p>
        </div>
        <div className='w-50 space-y-4 text-center text-white'>
          <h2 className='text-6xl font-bold'>+50</h2>
          <p className='text-md font-medium tracking-wide uppercase'>Marketing Experts</p>
        </div>
        <div className='w-50 space-y-4 text-center text-white'>
          <h2 className='text-6xl font-bold'>+10</h2>
          <p className='text-md font-medium tracking-wide uppercase'>Years of Experience</p>
        </div>
      </div>
    </section>
  );
}
