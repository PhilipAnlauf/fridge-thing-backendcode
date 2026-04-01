"use client";

import React from "react";

export default function MacroCard({ title, current, goal, unit }) {
  const progress = Math.min((current / goal) * 100, 100);

  return (
    <div style={styles.card}>
      <p style={styles.cardLabel}>{title}</p>

      <h3 style={styles.cardValue}>
        {current}
        <span style={styles.cardUnit}>
          {" "}
          / {goal} {unit}
        </span>
      </h3>

      <div style={styles.progressTrack}>
        <div
          style={{
            ...styles.progressFill,
            width: `${progress}%`,
          }}
        />
      </div>

      <p style={styles.progressText}>{Math.round(progress)}% of goal reached</p>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#f8faf9",
    border: "1px solid #e4e8e7",
    borderRadius: "16px",
    padding: "20px",
  },

  cardLabel: {
    margin: 0,
    color: "#6f7d8c",
    fontWeight: 600,
    fontSize: "0.95rem",
  },

  cardValue: {
    marginTop: "10px",
    marginBottom: "14px",
    color: "#243b5a",
    fontSize: "1.8rem",
    fontWeight: 800,
  },

  cardUnit: {
    fontSize: "1rem",
    fontWeight: 500,
    color: "#6f7d8c",
  },

  progressTrack: {
    width: "100%",
    height: "10px",
    borderRadius: "999px",
    backgroundColor: "#dfe6e2",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#38c96b",
    borderRadius: "999px",
  },

  progressText: {
    marginTop: "10px",
    marginBottom: 0,
    color: "#6f7d8c",
    fontSize: "0.9rem",
  },
};