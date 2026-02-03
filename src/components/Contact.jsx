import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      style={{
        minHeight: "70vh",
        padding: "80px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "900px", width: "100%", textAlign: "center" }}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ fontSize: "2.5rem", fontWeight: "700" }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            marginTop: "20px",
            fontSize: "1.1rem",
            color: "#d1d5db",
            lineHeight: "1.7",
          }}
        >
          I’m open to opportunities, collaborations, and discussions related to
          software development, web technologies, and machine learning. Feel free
          to reach out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {/* Email */}
          <a
            href="mailto:hardikgupta2516@gmail.com"
            style={{
              padding: "20px",
              borderRadius: "14px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              textDecoration: "none",
              color: "#e5e7eb",
              fontSize: "1rem",
            }}
          >
            📧 Email  
            <div style={{ marginTop: "6px", color: "#c4b5fd" }}>
              hardikgupta2516@gmail.com
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hardik-gupta-221332266/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "20px",
              borderRadius: "14px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              textDecoration: "none",
              color: "#e5e7eb",
              fontSize: "1rem",
            }}
          >
            💼 LinkedIn  
            <div style={{ marginTop: "6px", color: "#c4b5fd" }}>
              hardik-gupta
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/hardikgupta0402"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "20px",
              borderRadius: "14px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              textDecoration: "none",
              color: "#e5e7eb",
              fontSize: "1rem",
            }}
          >
            🐙 GitHub  
            <div style={{ marginTop: "6px", color: "#c4b5fd" }}>
              hardikgupta0402
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
