"use client";

import React from "react";

export default function RecipeCard({ title, description, match }) {
  return (
    <div style={styles.recipeCard}>
      <h3 style={styles.recipeTitle}>{title}</h3>
      <p style={styles.recipeDescription}>{description}</p>
      <p style={styles.recipeMatch}>{match}</p>
      <button style={styles.secondaryButtonSmall}>View Recipe</button>
    </div>
  );
}

const styles = {
  recipeCard: {
    backgroundColor: "#f8faf9",
    border: "1px solid #e4e8e7",
    borderRadius: "16px",
    padding: "22px",
  },

  recipeTitle: {
    margin: 0,
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#243b5a",
  },

  recipeDescription: {
    marginTop: "10px",
    marginBottom: "12px",
    color: "#6f7d8c",
    lineHeight: 1.5,
  },

  recipeMatch: {
    marginTop: 0,
    marginBottom: "18px",
    color: "#38c96b",
    fontWeight: 600,
    fontSize: "0.92rem",
  },

  secondaryButtonSmall: {
    backgroundColor: "#ffffff",
    color: "#243b5a",
    border: "1px solid #d7dedd",
    borderRadius: "10px",
    padding: "12px 16px",
    fontWeight: 700,
    fontSize: "0.95rem",
    cursor: "pointer",
  },
};