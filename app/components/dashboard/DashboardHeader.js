"use client";

import React from "react";

export default function DashboardHeader({ username }) {
  return (
    <section style={styles.heroSection}>
      <div>
        <h1 style={styles.pageTitle}>Welcome back, {username}</h1>
        <p style={styles.pageSubtitle}>
          Here&apos;s your nutrition, inventory, and recipe overview for today.
        </p>
      </div>

      <div style={styles.heroActions}>
        <button style={styles.primaryButton}>Add Ingredient</button>
        <button style={styles.secondaryButton}>View Inventory</button>
      </div>
    </section>
  );
}

const styles = {
  heroSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "24px",
    marginBottom: "32px",
    flexWrap: "wrap",
  },

  pageTitle: {
    fontSize: "3rem",
    fontWeight: 800,
    color: "#243b5a",
    margin: 0,
    lineHeight: 1.1,
  },

  pageSubtitle: {
    fontSize: "1.05rem",
    color: "#6f7d8c",
    marginTop: "10px",
    marginBottom: 0,
  },

  heroActions: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },

  primaryButton: {
    backgroundColor: "#38c96b",
    color: "#ffffff",
    border: "none",
    borderRadius: "12px",
    padding: "14px 20px",
    fontWeight: 700,
    fontSize: "1rem",
    cursor: "pointer",
  },

  secondaryButton: {
    backgroundColor: "#ffffff",
    color: "#243b5a",
    border: "1px solid #d7dedd",
    borderRadius: "12px",
    padding: "14px 20px",
    fontWeight: 700,
    fontSize: "1rem",
    cursor: "pointer",
  },
};