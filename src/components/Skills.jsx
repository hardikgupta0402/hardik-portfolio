import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming & Core CS",
    skills: ["Java", "Python", "C", "C++", "Data Structures", "Problem Solving"],
  },
  {
    title: "Web & Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Machine Learning & Deep Learning",
    skills: ["CNN", "RNN", "U-Net Architecture", "TensorFlow", "Model Evaluation"],
  },
  {
    title: "Databases & Tools",
    skills: ["MySQL", "MongoDB", "Git", "GitHub", "REST APIs", "LaTeX"],
  },
  {
    title: "Enterprise & CRM Experience",
    skills: [
      "CRM Systems",
      "Business Workflow Analysis",
      "Application Configuration",
      "Enterprise Software Exposure",
      "Requirement Understanding",
    ],
  },
];

export default function Skills() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "80px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ fontSize: "2.5rem", fontWeight: "700" }}
      >
        Skills
      </motion.h2>

      <div
        style={{
          marginTop: "50px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px",
          maxWidth: "1100px",
          width: "100%",
        }}
      >
        {skillGroups.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
              padding: "24px",
              borderRadius: "16px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                marginBottom: "14px",
                color: "#c4b5fd",
              }}
            >
              {group.title}
            </h3>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {group.skills.map((skill, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "0.95rem",
                    color: "#e5e7eb",
                    marginBottom: "8px",
                  }}
                >
                  • {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
