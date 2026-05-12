import { motion } from "motion/react";
import { Terminal, Database, Cpu, Atom, Cloud, BarChart3, ChartScatter, Code, Braces, FileTerminal, CloudCog, MonitorCog, BetweenHorizontalEnd, Container, MonitorSmartphone, ChevronRight, ListTodo } from "lucide-react";

const skills = [
  { name: "Python", icon: <Terminal size={32} /> },
  { name: "SQL", icon: <Database size={32} /> },
  { name: "PyTorch", icon: <Cpu size={32} /> },
  { name: "React", icon: <Atom size={32} /> },
  { name: "AWS", icon: <Cloud size={32} /> },
  { name: "PowerBI", icon: <ChartScatter size={32} />, },
  { name: "Tableau", icon: <BarChart3 size={32} />, },
  { name: "Java", icon: <ChevronRight size={32} />, },
  { name: "JavaScript", icon: <Code size={32} />, },
  { name: "HTML/CSS", icon: <Braces size={32} />, },
  { name: "Node.js", icon: <FileTerminal size={32} />, },
  { name: "Firebase", icon: <CloudCog size={32} />, },
  { name: "Azure", icon: <MonitorCog size={32} />, },
  { name: "Apache", icon: <BetweenHorizontalEnd size={32} />, },
  { name: "Github", icon: <Container size={32} />, },
  { name: "Jira", icon: <MonitorSmartphone size={32} />, },
  { name: "Linux", icon: <MonitorSmartphone size={32} />, },
  { name: "SAS", icon: <ListTodo size={32} />, }
];

export default function Skills() {
  return (
    <section className="py-24 px-8 bg-surface-container-low/50 relative" id="skills">
      <div className="absolute inset-0 studio-light-2 opacity-50 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="font-headline text-4xl font-extrabold tracking-tighter mb-16 text-center">
          The <span className="text-secondary">Stack.</span>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              whileHover={{ borderColor: "rgba(190, 194, 255, 0.4)" }}
              className="p-6 glass-card rounded-lg border border-outline-variant/10 flex flex-col items-center gap-4 group transition-colors"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 flex items-center justify-center text-primary transition-transform"
              >
                {skill.icon}
              </motion.div>
              <span className="font-headline text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
