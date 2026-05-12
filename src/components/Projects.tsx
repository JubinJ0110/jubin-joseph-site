import { motion } from "motion/react";
import { ArrowUpRight, Database, Braces, BarChart3, Cpu, Palette, Code, LayoutGrid } from "lucide-react";
import diabeto from "./images/diabeto.png";


export default function Projects() {
  return (
    <section className="py-24 px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-headline text-4xl font-extrabold tracking-tighter mb-4">
              Selected <span className="text-primary">Works.</span>
            </h2>
            <p className="text-on-surface-variant">
              A curated showcase of projects that blend data science and software engineering to drive real-world impact.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Project Card */}
          <motion.div 
            whileHover={{ y: -8, scale: 1.01, boxShadow: "0 20px 40px rgba(190, 194, 255, 0.1)" }}
            className="md:col-span-2 lg:col-span-2 glass-card rounded-xl overflow-hidden group transition-all"
          >
            <div className="aspect-video w-full relative">
              <img 
                alt="Data visualization dashboard" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" 
                src={diabeto}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
            </div>
            <div className="p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="text-secondary"><BarChart3 size={24} /></div>
                <h3 className="text-2xl font-headline font-bold">Diabetes Prediction Web App</h3>
              </div>
              <p className="text-on-surface-variant text-sm max-w-2xl">
                Developed a predictive healthcare application that utilizes a Gradient Boosting machine learning model to assess diabetes risk and provide personalized exercise regimens.
              </p>
              <p className="text-on-surface-variant text-sm max-w-2xl">
                Engineered a seamless full-stack experience using Flask and Node.js, processing over 250,000 CDC data points to deliver data-driven health recommendations via a highly responsive Magic UI frontend.
              </p>
              <motion.a href="https://diabetespredictor-b6701.web.app/"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-primary cursor-pointer hover:gap-4 transition-all uppercase tracking-widest">
               Take a Look <ArrowUpRight size={14} />
              </motion.a>
            </div>
          </motion.div>

          {/* Secondary Card 1 */}
          <motion.div 
            whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px rgba(190, 194, 255, 0.1)" }}
            className="glass-card rounded-xl p-8 space-y-6 group transition-all"
          >
            <div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center text-primary">
              <Braces size={24} />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-headline font-bold">Coding Kickstart</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Developed a scalable, full-stack educational platform designed to boost CS students' career readiness through interactive quizzing.
              </p>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Architected a responsive frontend using React and a RESTful Node.js backend, powered by Firebase/Firestore for seamless NoSQL data management.
              </p>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Engineered a robust testing suite using Selenium, Postman, and JMeter to ensure high performance and UI reliability, while securing user data through OAuth/SSO integration.
              </p>
            </div>
            <div className="pt-4 flex gap-3 text-on-surface-variant text-xs font-medium">

            </div>
          </motion.div>

          {/* Secondary Card 2 */}
          <motion.div 
            whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px rgba(190, 194, 255, 0.1)" }}
            className="glass-card rounded-xl p-8 space-y-6 group transition-all"
          >
            <div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center text-secondary">
              <Database size={24} />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-headline font-bold">ASA Datafest</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Synthesized complex real estate datasets under a high pressure 24 hour deadline, delivering actionable next steps.
              </p>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Translated technical findings into a high-impact, 2 slide presentation for a panel of judges, focusing on data-driven business rules and trend forecasting.
              </p>
            </div>
          </motion.div>

          {/* Featured Product Card */}
          <motion.div 
            whileHover={{ y: -8, scale: 1.01, boxShadow: "0 20px 40px rgba(190, 194, 255, 0.1)" }}
            className="md:col-span-2 lg:col-span-2 glass-card rounded-xl overflow-hidden group transition-all flex flex-col md:flex-row"
          >
            <div className="md:w-1/2 p-8 space-y-6">
              <h3 className="text-3xl font-headline font-bold">Trawler</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Collaborated with the DataSAIL team to build a web application that mines Reddit comments for ticker mentions to forecast market trends.
              </p>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Engineered a data pipeline using the Alpha Vantage API and Linux Cron Daemons to automate real-time data collection and price correlation, providing a unique lens into retail investor sentiment.
              </p>
            </div>
            <div className="md:w-1/2 bg-surface-container-low/50 relative p-8 flex items-center justify-center overflow-hidden">
              <div className="w-32 h-32 rounded-full bg-primary/20 blur-3xl absolute"></div>
              <div className="relative z-10 grid grid-cols-3 gap-2">
                <div className="w-12 h-12 bg-surface-container-highest rounded-lg shadow-xl flex items-center justify-center">
                  <Cpu className="text-primary" size={20} />
                </div>
                <div className="w-12 h-12 bg-surface-container-highest rounded-lg shadow-xl flex items-center justify-center translate-y-4">
                  <Palette className="text-secondary" size={20} />
                </div>
                <div className="w-12 h-12 bg-surface-container-highest rounded-lg shadow-xl flex items-center justify-center">
                  <Code className="text-primary" size={20} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
