import { motion } from "motion/react";

const experiences = [
  {
    period: "January 2026 - PRESENT",
    role: "Junior Analyst",
    company: "Agilant Solutions",
    description: [
      "Analyzed and resolved 40-50 technical data points daily, identifying recurring system bottlenecks and providing root-cause analysis to improve enterprise workflow efficiency.",
      "Managed and categorized large datasets of incident reports within TOGa and EaseeDesk ticketing systems, ensuring data integrity and SLA compliance for organizational reporting.",
      "Identified trends in hardware and network failures to proactively escalate high-impact infrastructure issues, utilizing diagnostic data to minimize enterprise-wide downtime.",
      "Leveraged remote diagnostic tools to extract and interpret system performance metrics, resolving connectivity issues through evidence-based technical troubleshooting.",
      "Utilized structured documentation practices to maintain a clean repository of incident data, facilitating seamless hand-offs and historical trend analysis for Tier 2 teams."
    ],
    skills: ["PowerBI", "Windows", "TOGa", "EaseeDesk", "Entra"],
    active: true
  },
  {
    period: "November 2025 - PRESENT",
    role: "IT Analyst",
    company: "Digiteam",
    description: [
      "Managed the end-to-end data lifecycle for donated hardware, including secure sanitization and strategic backup creation for end-users.",
      "Maintained an asset database, logging new inventory and performing data audits to ensure 100% tracking accuracy.",
      "Configured and maintained enterprise servers, implementing routine maintenance and system snapshots to ensure high availability.",
      "Acted as a Technical Consultant for business relocation, conducting needs assessments to design a secure, functional office network.",
      "Optimized server and inventory spaces, improving physical organization and streamlining hardware processing workflows."
    ],
    skills: ["Windows Server", "Linux", "Database Management", "Network Configuration"],
    active: true
  },
  {
    period: "May 2024 - May 2025",
    role: "IT Support Specialist",
    company: "Lewis University",
    description: [
      "Resolved password resets daily for approximately 10 end-users, ensuring minimal downtime.",
      "Provided expert technical assistance and troubleshooting for software, hardware, and network issues.",
      "Documented all support interactions within IT's TDX ticketing systems.",
      "Collaborated with cross-functional teams to escalate tickets and resolve issues.",
      "Communicated technical information effectively to non-technical users."
    ],
    skills: ["TDX", "Windows", "Active Directory", "Okta"],
    active: false
  },
  {
    period: "May 2022 - August 2022",
    role: "Undergraduate researcher",
    company: "Lewis University",
    description: [
      "Researched network topology, identifying structural roles in any field where network graph representation is applicable.",
      "Conducted in-depth research on network nodes and clustering.",
      "Collaborated with faculty and peers to develop innovative solutions and update project progress.",
      "Attended seminars such as practicing research techniques held by professors from Lewis University.",
      "Presented the outcomes of the research project to an audience of professors and classmates."
    ],
    skills: ["Python", "Excel", "Microsoft Office"],
    active: false
  }
];

export default function Experience() {
  return (
    <section className="py-24 px-8 bg-surface-container-low/30" id="experience">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 sticky top-32 h-fit">
            <h2 className="font-headline text-4xl font-extrabold tracking-tighter mb-6">
              Work <br/><span className="text-secondary">History.</span>
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              A dual-threat approach combining robust software engineering foundations with advanced statistical modeling.
            </p>
          </div>
          
          <div className="lg:col-span-8 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l border-outline-variant/20 group"
              >
                <div className={`absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full transition-all ${exp.active ? 'bg-primary shadow-[0_0_10px_#bec2ff]' : 'bg-outline-variant group-hover:bg-primary'}`}></div>
                <div className="space-y-2">
                  <span className={`font-headline text-sm font-bold tracking-widest ${exp.active ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-headline font-bold">{exp.role}</h3>
                  <p className="text-on-surface font-medium">{exp.company}</p>
                  <ul className="text-on-surface-variant text-sm max-w-xl space-y-2">
                    {exp.description.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 text-[10px] bg-surface-container-high rounded text-on-surface-variant">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
