import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tighter text-[#e2e2e2] font-headline">
          Jubin Joseph
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="font-headline tracking-tight text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors" href="#">Home</a>
          <a className="font-headline tracking-tight text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors" href="#about">About</a>
          <a className="font-headline tracking-tight text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors" href="#experience">Experience</a>
          <a className="font-headline tracking-tight text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors" href="#projects">Projects</a>
          <a className="font-headline tracking-tight text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors" href="#skills">Skills</a>
        </div>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-br from-primary to-primary-container text-background px-6 py-2 rounded-lg font-headline text-sm font-medium transition-transform"
          href="https://dot.cards/jubin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </motion.a>
      </div>
    </nav>
  );
}
