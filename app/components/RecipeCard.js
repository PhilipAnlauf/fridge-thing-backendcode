"use client";
import { colors } from "../styles";

export const RecipeCard = ({ recipe, isSelected, onClick, isVisible }) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: "white",
        borderRadius: "6px",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",

        outline: isSelected
          ? `3px solid ${colors.primary}`
          : "3px solid transparent",
        outlineOffset: "2px",

        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? isSelected
            ? "scale(1.02)"
            : "scale(1)"
          : "scale(0.9)",

        transition:
          "opacity 0.4s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), outline 0.2s ease",
        pointerEvents: isVisible ? "auto" : "none",
        overflow: "hidden",
        boxShadow: isSelected
          ? "0 15px 30px rgba(0,0,0,0.12)"
          : "0 4px 10px rgba(0,0,0,0.05)",
        height: "100%",
      }}
    >
      <div
        style={{
          padding: "10px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <img
          src={`/${recipe.id}.png`}
          alt={recipe.title}
          style={{
            width: "100%",
            height: "55%",
            minHeight: "150px",
            objectFit: "cover",
            borderRadius: "5px",
            marginBottom: "6px",
            display: "block",
          }}
        />

        <h3
          style={{
            fontWeight: "bold",
            fontSize: "1.3rem",
            color: colors.secondary,
            marginBottom: "5px",
            display: "inline-block",
            backgroundImage: `linear-gradient(${colors.secondary}, ${colors.secondary})`,
            backgroundSize: "100% 3px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left bottom",
            paddingBottom: "4px",
          }}
        >
          {recipe.title}
        </h3>
        <p style={{ fontSize: "0.85rem", color: "#666", marginBottom: "10px" }}>
          {recipe.description}
        </p>

        {/* <div
          style={{
            marginTop: "auto",
            paddingTop: "10px",
            fontSize: "0.85rem",
            fontWeight: "bold",
            color: colors.secondary,
            borderTop: "1px dashed #eee", // Optional: subtle separator from description
          }}
        >
          Protein: {recipe.p}g | Carbs: {recipe.c}g | Fiber : {recipe.f}g
        </div> */}
      </div>

      {/* Footer Info */}
      <div
        style={{
          backgroundColor: "#f0efef",
          padding: "12px 20px",
          color: colors.secondary,
          borderTop: "1px solid #eee",
          fontSize: "0.85rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ color: colors.secondary }}>⏱ {recipe.time} Mins</div>

        <div
          style={{
            fontWeight: "bold",
            color: colors.secondary,
            letterSpacing: "0.3px",
          }}
        >
          Protein: {recipe.p}g | Carbs: {recipe.c}g | Fiber: {recipe.f}g
        </div>
      </div>
    </div>
  );
};
