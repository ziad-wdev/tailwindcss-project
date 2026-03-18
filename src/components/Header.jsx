import { useEffect, useRef } from 'react';

export default function Header() {
  const links = useRef([]);

  useEffect(() => {
    const linksArray = links.current;

    function handleLinkClick(e) {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    linksArray.forEach(link => {
      if (link) link.addEventListener('click', handleLinkClick);
    });

    return () => {
      linksArray.forEach(link => {
        if (link) link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  return (
    <header className='fixed top-0 right-0 left-0 z-10 bg-white shadow-md'>
      <div className='container mx-auto flex items-center justify-between p-4'>
        <div className='flex items-center gap-2'>
          <h1 className='text-3xl font-bold text-blue-600'>DigitalPro</h1>
          <span className='hidden rounded-full bg-blue-500/15 px-2 py-1 text-xs text-blue-600 sm:inline-block'>
            Marketing Agency
          </span>
        </div>
        <nav className='hidden items-center gap-6 lg:flex'>
          <a
            href='#home'
            ref={el => (links.current[0] = el)}
            className='font-medium transition-colors hover:text-blue-600'
          >
            Home
          </a>
          <a
            href='#services'
            ref={el => (links.current[1] = el)}
            className='font-medium transition-colors hover:text-blue-600'
          >
            Services
          </a>
          <a
            href='#team'
            ref={el => (links.current[2] = el)}
            className='font-medium transition-colors hover:text-blue-600'
          >
            Our Team
          </a>
          <a
            href='#contact'
            ref={el => (links.current[3] = el)}
            className='font-medium transition-colors hover:text-blue-600'
          >
            Contact Us
          </a>
        </nav>
        <button className='cursor-pointer rounded-lg bg-blue-500 px-6 py-2 font-medium text-white transition-all hover:bg-blue-600 hover:shadow-xl'>
          Get a Consultation
        </button>
      </div>
    </header>
  );
}
