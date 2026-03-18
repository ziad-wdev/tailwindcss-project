export default function Contact() {
  return (
    <section id='contact' className='bg-slate-900 py-20 text-white'>
      <div className='container mx-auto flex flex-col items-start justify-between gap-16 px-8 lg:flex-row'>
        <form className='w-full space-y-4 rounded-2xl bg-slate-800 p-8 shadow-lg'>
          <h2 className='text-2xl font-bold'>Contact Us</h2>
          <input
            type='text'
            placeholder='Full Name'
            className='w-full rounded-md bg-slate-700 p-4 focus:ring-4 focus:ring-blue-600 focus:outline-none'
          />
          <input
            type='email'
            placeholder='Email Address'
            className='w-full rounded-md bg-slate-700 p-4 focus:ring-4 focus:ring-blue-600 focus:outline-none'
          />
          <textarea
            placeholder='Your Message...'
            rows='4'
            className='w-full rounded-md bg-slate-700 p-4 focus:ring-4 focus:ring-blue-600 focus:outline-none'
          />
          <input
            type='submit'
            value='Send Message'
            className='w-full cursor-pointer rounded-md bg-blue-500 p-4 font-bold hover:bg-blue-600 focus:ring-4 focus:ring-blue-600 focus:outline-none'
          />
        </form>

        <div className='w-full space-y-8'>
          <h2 className='text-2xl font-bold'>Contact Information</h2>

          <div className='space-y-4'>
            <div className='flex gap-4'>
              <div className='flex size-12 items-center justify-center rounded-lg bg-blue-500/25 text-xl text-blue-500'>
                <i class='fa-solid fa-location-dot'></i>
              </div>
              <div>
                <p className='text-sm text-white/50'>Address</p>
                <p className='font-medium'>Cairo, Egypt</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='flex size-12 items-center justify-center rounded-lg bg-blue-500/25 text-xl text-blue-500'>
                <i class='fa-solid fa-phone'></i>
              </div>
              <div>
                <p className='text-sm text-white/50'>Phone</p>
                <p className='font-medium'>+20 123 456 7890</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='flex size-12 items-center justify-center rounded-lg bg-blue-500/25 text-xl text-blue-500'>
                <i class='fa-solid fa-envelope'></i>
              </div>
              <div>
                <p className='text-sm text-white/50'>Email</p>
                <p className='font-medium'>info@digitalpro.com</p>
              </div>
            </div>
          </div>

          <div className='w-full rounded-2xl bg-linear-to-br from-blue-800 to-purple-800 p-18 text-center'>
            <p className='text-2xl text-white/75'>
              <i class='fa-solid fa-map'></i> Site Map
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
