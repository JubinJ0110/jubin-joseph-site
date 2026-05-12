import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full"
      >
        <h2 className="font-headline font-extrabold text-4xl md:text-5xl tracking-tighter text-on-surface mb-8">
          About <span className="text-primary">Me.</span>
        </h2>
        
        <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
          <p>
            I’m a Junior Analyst at Agilant Solutions in Naperville with a background in Computer Science and 
            Data Science from Lewis University. My work focuses on building Python-driven 
            automation and turning complex data into clear, actionable stories. With expertise 
            spanning frontend frameworks like React and Vue, to backend technologies including 
            Node.js, Python, and cloud infrastructure, I bridge the gap between user experience 
            and system architecture.
          </p>
          
          <p>
            When I’m not at my desk, I’m usually reading, hitting the gym, or exploring new 
            corners of the world. I recently traveled through Bosnia, Italy, France, Spain, 
            and Portugal. I find that the same curiosity needed to navigate a new city is 
            exactly what helps me untangle a difficult technical problem. Outside of that, 
            you'll find me exploring new technologies, I'm always eager to take on 
            challenging problems that push the boundaries of what's possible.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-lg bg-surface-container-low border border-outline-variant/10"
          >
            <h3 className="font-headline font-bold text-xl text-primary mb-2">60+ Public Speaking Competitions</h3>
            <p className="text-on-surface-variant">over 4 years</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-lg bg-surface-container-low border border-outline-variant/10"
          >
            <h3 className="font-headline font-bold text-xl text-primary mb-2">Muliple SAS Projects</h3>
            <p className="text-on-surface-variant">delivered successfully</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-lg bg-surface-container-low border border-outline-variant/10"
          >
            <h3 className="font-headline font-bold text-xl text-primary mb-2">Leadership Experience</h3>
            <p className="text-on-surface-variant">from heading multiple organizations</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}