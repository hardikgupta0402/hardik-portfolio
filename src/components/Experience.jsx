import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
    id="experience"
      style={{
        minHeight: "100vh",
        padding: "80px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "900px", width: "100%" }}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Experience
        </motion.h2>

        {/* BusinessNext */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            marginTop: "50px",
            padding: "28px",
            borderRadius: "16px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <h3 style={{ fontSize: "1.3rem", fontWeight: "600" }}>
            Apprentice Software Engineer
          </h3>
          <p style={{ color: "#c4b5fd", marginTop: "4px" }}>
            BusinessNext
          </p>

          <ul
            style={{
              marginTop: "16px",
              paddingLeft: "18px",
              color: "#e5e7eb",
              lineHeight: "1.7",
              fontSize: "0.95rem",
            }}
          >
            <li>
              Working on enterprise CRM systems, gaining exposure to real-world
              business workflows and application configurations.
            </li>
            <li>
              Assisting in understanding system requirements, configuring
              modules, and supporting application-level problem solving.
            </li>
            <li>
              Collaborating with team members to analyze issues and contribute
              to system improvements in a production environment.
            </li>
          </ul>
        </motion.div>

        {/* Virtual Internship */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            marginTop: "30px",
            padding: "28px",
            borderRadius: "16px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <h3 style={{ fontSize: "1.3rem", fontWeight: "600" }}>
            Virtual Intern — Project Management
          </h3>
          <p style={{ color: "#c4b5fd", marginTop: "4px" }}>
            Accenture Virtual Experience
          </p>

          <ul
            style={{
              marginTop: "16px",
              paddingLeft: "18px",
              color: "#e5e7eb",
              lineHeight: "1.7",
              fontSize: "0.95rem",
            }}
          >
            <li>
              Managed project plans and tracked tasks using tools such as Asana,
              Trello, and Jira across multiple simulated projects.
            </li>
            <li>
              Improved task tracking accuracy and workflow efficiency through
              structured planning and coordination.
            </li>
            <li>
              Collaborated within a team-based environment, gaining exposure to
              professional project management practices.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}