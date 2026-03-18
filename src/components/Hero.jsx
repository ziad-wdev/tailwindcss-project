export default function Hero() {
  return (
    <section id='home' className='h-screen bg-linear-to-br from-blue-50 to-purple-50 py-20'>
      <div className='container mx-auto flex h-full flex-col-reverse items-center justify-center gap-8 px-8 lg:flex-row lg:justify-between'>
        <div className='flex flex-col gap-6 text-center sm:text-left'>
          <h2 className='text-4xl leading-tight font-bold tracking-tight sm:text-5xl md:text-6xl'>
            We Create <span className='text-blue-600'>Digital Success</span> For Your Brand
          </h2>

          <p className='text-lg text-slate-500'>
            We provide integrated marketing solutions that help your company grow and increase sales through innovative
            strategies.
          </p>

          <ul className='flex flex-wrap items-center justify-center gap-4 text-slate-500 sm:justify-start'>
            <li className='flex items-center gap-1'>
              <i class='fa-solid fa-circle-check text-xl text-green-500'></i> 10+ Years Experience
            </li>
            <li className='flex items-center gap-1'>
              <i class='fa-solid fa-circle-check text-xl text-green-500'></i> +500 Clients
            </li>
            <li className='flex items-center gap-1'>
              <i class='fa-solid fa-circle-check text-xl text-green-500'></i> Professional Team
            </li>
          </ul>

          <div className='flex flex-col items-center gap-4 sm:flex-row'>
            <button className='cursor-pointer rounded-xl bg-blue-500 px-6 py-3 text-lg font-medium text-white transition-all hover:bg-blue-600 hover:shadow-2xl'>
              Start Your Journey Now
            </button>
            <button className='cursor-pointer rounded-xl border-2 border-slate-500 px-6 py-3 text-lg font-medium transition-all hover:border-blue-500 hover:text-blue-500'>
              <i class='fa-solid fa-play'></i> Watch The Video
            </button>
          </div>
        </div>

        <div className='relative aspect-video w-full rounded-4xl bg-linear-to-br from-blue-400 to-purple-400 shadow-lg lg:aspect-auto lg:h-100'>
          <i class='fa-solid fa-chart-line absolute top-1/2 left-1/2 -translate-1/2 text-8xl text-white/50'></i>
          <div className='absolute top-1/8 right-1/8 aspect-square h-2/10 rounded-full bg-white/15'></div>
          <div className='absolute bottom-1/8 left-1/8 aspect-square h-2/6 rounded-full bg-white/15'></div>
          <div className='absolute -bottom-4 -left-4 flex items-center gap-2 rounded-2xl bg-white p-4 shadow-lg'>
            <div className='flex aspect-square rounded-full bg-green-500/25 p-4 text-green-600'>
              <i class='fa-solid fa-users'></i>
            </div>
            <div>
              <p className='text-sm text-slate-500'>Happy Clients</p>
              <p className='text-xl font-black'>+500</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
