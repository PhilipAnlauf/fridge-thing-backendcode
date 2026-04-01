"use client";

import React from "react";
import MacroCard from "./MacroCard";

export default function MacroSummary({ macroData }) {
  return (
    <section style={styles.section}>
      <div style={styles.sectionHeaderRow}>
        <h2 style={styles.sectionTitle}>Macro Goals</h2>
        <span style={styles.sectionTag}>Today</span>
      </div>

      <div style={styles.macroGrid}>
        {macroData.map((macro) => (
          <MacroCard
            key={macro.title}
            title={macro.title}
            current={macro.current}
            goal={macro.goal}
            unit={macro.unit}
          />
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: "#ffffff",
    borderRadius: "18px",
    padding: "28px",
    marginBottom: "24px",
    boxShadow: "0 8px 24px rgba(36, 59, 90, 0.06)",
  },

  sectionHeaderRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    gap: "12px",
    flexWrap: "wrap",
  },

  sectionTitle: {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#243b5a",
    margin: 0,
  },

  sectionTag: {
    backgroundColor: "#eef7f1",
    color: "#38c96b",
    padding: "8px 12px",
    borderRadius: "999px",
    fontWeight: 600,
    fontSize: "0.9rem",
  },

  macroGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px",
  },
};