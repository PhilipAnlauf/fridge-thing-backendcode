"use client";

import React from "react";

export default function QuickActions() {
  return (
    <section style={styles.sectionCard}>
      <div style={styles.sectionHeaderRow}>
        <h2 style={styles.sectionTitle}>Quick Actions</h2>
      </div>

      <div style={styles.quickActionsGrid}>
        <button style={styles.actionCard}>Add Groceries</button>
        <button style={styles.actionCard}>Set Macro Goals</button>
        <button style={styles.actionCard}>Find Recipes</button>
        <button style={styles.actionCard}>View Substitutes</button>
      </div>
    </section>
  );
}

const styles = {
  sectionCard: {
    backgroundColor: "#ffffff",
    borderRadius: "18px",
    padding: "28px",
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

  quickActionsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px",
  },

  actionCard: {
    backgroundColor: "#f8faf9",
    border: "1px solid #dfe6e2",
    borderRadius: "14px",
    padding: "18px",
    color: "#243b5a",
    fontWeight: 700,
    fontSize: "0.98rem",
    cursor: "pointer",
  },
};