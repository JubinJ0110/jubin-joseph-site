export default function Footer() {
  return (
    <footer className="bg-[#131313] w-full py-12 border-t border-on-surface-variant/15">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-8">
        <div className="space-y-2 text-center md:text-left">
          <p className="font-headline text-lg font-bold tracking-tighter text-on-surface">Jubin Joseph</p>
          <p className="text-xs text-on-surface-variant opacity-80">© 2026 Jubin Joseph. All rights reserved.</p>
        </div>
        <div className="flex gap-8">
          <a className="text-xs text-on-surface-variant hover:text-primary transition-colors duration-200" href="https://www.linkedin.com/in/jubin-joseph/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-xs text-on-surface-variant hover:text-primary transition-colors duration-200" href="https://github.com/JubinJ0110" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="text-xs text-on-surface-variant hover:text-primary transition-colors duration-200" href="https://x.com/joobington?s=21" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a className="text-xs text-on-surface-variant hover:text-primary transition-colors duration-200" href="mailto:jubinjos0110@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
        </div>
      </div>
    </footer>
  );
}
