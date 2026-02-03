import { motion } from "framer-motion";

const projects = [
  {
    title: "Neural Network-Based Image Segmentation",
    subtitle: "Medical Imaging • Research Project",
    description:
      "Developed a deep learning-based tumor segmentation system using U-Net architecture for precise pixel-level detection in brain MRI scans.",
    tech: [
      "Python",
      "TensorFlow",
      "CNN",
      "U-Net",
      "Medical Imaging",
      "Kaggle Dataset",
    ],
  },
  {
    title: "Cryptocurrency Tracker",
    subtitle: "Web Application",
    description:
      "Built a real-time cryptocurrency tracking platform with advanced filtering, insights, and optimized API handling for high-volume data.",
    tech: [
      "React",
      "JavaScript",
      "Redux Toolkit",
      "Rapid API",
      "REST APIs",
    ],
  },
  {
    title: "Weather Forecasting Web Application",
    subtitle: "Frontend Web Project",
    description:
      "Created a weather forecasting web application with geolocation-based updates, city search, and dynamic weather visuals.",
    tech: ["React", "HTML", "CSS", "OpenWeather API"],
  },
];

export default function Projects() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "80px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "1100px", width: "100%" }}>
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
          Projects
        </motion.h2>

        <div
          style={{
            marginTop: "50px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                padding: "28px",
                borderRadius: "18px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <h3 style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                {project.title}
              </h3>

              <p style={{ color: "#c4b5fd", marginTop: "6px" }}>
                {project.subtitle}
              </p>

              <p
                style={{
                  marginTop: "14px",
                  color: "#e5e7eb",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  marginTop: "16px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "0.75rem",
                      padding: "6px 10px",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,0.08)",
                      color: "#e5e7eb",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
