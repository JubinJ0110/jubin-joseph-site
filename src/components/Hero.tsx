import { motion } from "motion/react";
import profpic from "./images/profpic.jpeg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-8 overflow-hidden">
      <div className="absolute inset-0 studio-light-1 pointer-events-none"></div>
      <div className="absolute inset-0 studio-light-2 pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl w-full text-center space-y-8"
      >

        <div className="flex items-center justify-center gap-8">
          <img 
            src={profpic} 
            alt="My Site Logo" 
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-primary/30 shadow-lg"
          />
          
          <div className="text-left">
            <h1 className="font-headline font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tighter text-on-surface leading-tight">
              Jubin <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Joseph</span>
            </h1>
            
            <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed font-light mt-2">
              Bridging the gap between scalable software architecture and high-dimensional data analysis with technical precision.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <motion.a 
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(190,194,255,0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-gradient-to-br from-primary to-primary-container text-background px-8 py-4 rounded-lg font-headline font-bold text-base transition-all"
            href="https://github.com/JubinJ0110"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project Archive
          </motion.a>
          <motion.a
            whileHover={{ backgroundColor: "var(--color-surface-container-high)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto border border-outline-variant/20 px-8 py-4 rounded-lg font-headline font-bold text-base transition-colors"
            href="https://docs.google.com/document/d/1FwbI0nY2eVCBlgbRdLlTHK-atp_kfe9GWVdit3lGCw8/edit?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </motion.a>
        </div>
      </motion.div>

      {/* Decorative Element: Abstract Data Nodes */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-4 opacity-20 pointer-events-none">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
        <div className="w-[1px] h-48 bg-gradient-to-b from-transparent via-secondary to-transparent translate-y-8"></div>
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-primary to-transparent -translate-y-4"></div>
      </div>
    </section>
  );
}
