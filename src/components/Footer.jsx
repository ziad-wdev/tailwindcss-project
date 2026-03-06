export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-6 text-white/50">
      <div className="container mx-auto flex items-center justify-between px-8">
        <p className="text-sm">&copy; 2024 DigitalPro. All rights reserved.</p>

        <div className="flex gap-4">
          <a href="#" className="text-xl hover:text-white">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" className="text-xl hover:text-white">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="text-xl hover:text-white">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#" className="text-xl hover:text-white">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
