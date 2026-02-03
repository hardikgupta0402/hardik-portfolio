import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{
          maxWidth: "800px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "700" }}>
          About Me
        </h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#d1d5db",
          }}
        >
          I am a Computer Science Engineering graduate currently working as an Apprentice
Software Engineer at BusinessNext. In my current role, I am gaining hands-on
experience with enterprise systems, particularly in the CRM domain, where I
work closely with real-world business workflows, configurations, and
application-level problem solving.

        </p>

        <p
          style={{
            marginTop: "16px",
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#d1d5db",
          }}
        >
         I enjoy building modern web applications and exploring interactive interfaces,
including 3D experiences and animated user interfaces. I focus on writing
clean, maintainable code, understanding systems from the ground up, and
continuously improving my technical skills while working on practical,
industry-oriented problems.

        </p>
      </motion.div>
    </section>
  );
}
