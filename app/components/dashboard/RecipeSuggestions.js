"use client";

import React from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeSuggestions({ recipes }) {
  return (
    <section style={styles.section}>
      <div style={styles.sectionHeaderRow}>
        <h2 style={styles.sectionTitle}>Suggested Recipes</h2>
        <span style={styles.sectionTag}>Based on your fridge</span>
      </div>

      <div style={styles.recipeGrid}>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.title}
            title={recipe.title}
            description={recipe.description}
            match={recipe.match}
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

  recipeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "18px",
  },
};