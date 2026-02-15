import { motion } from "framer-motion";

export default function Research() {
  return (
    <section
     id="research"
      style={{
        minHeight: "80vh",
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
          Research Publication
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            marginTop: "50px",
            padding: "32px",
            borderRadius: "18px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <h3 style={{ fontSize: "1.3rem", fontWeight: "600" }}>
            Neural Network-Based Image Segmentation for Tumor Detection in Medical Imaging
          </h3>

          <p style={{ color: "#c4b5fd", marginTop: "6px" }}>
            YMER Journal • Volume 24, Issue 06 • June 2025
          </p>

          <p
            style={{
              marginTop: "16px",
              color: "#e5e7eb",
              lineHeight: "1.7",
              fontSize: "0.95rem",
            }}
          >
            This research presents a U-Net based deep learning approach for accurate
            tumor segmentation in brain MRI images. The work focuses on pixel-level
            segmentation using annotated datasets and optimization techniques to
            improve accuracy and reliability in medical imaging applications.
          </p>

          <p
            style={{
              marginTop: "12px",
              color: "#e5e7eb",
              lineHeight: "1.7",
              fontSize: "0.95rem",
            }}
          >
            Published in a peer-reviewed, UGC Care Group–II, Scopus-active journal,
            under the School of Computer Science and Engineering, Galgotias University.
          </p>
        </motion.div>
      </div>
    </section>
  );
}