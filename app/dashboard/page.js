"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "../components/Navbar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import MacroSummary from "../components/dashboard/MacroSummary";
import InventoryPreview from "../components/dashboard/InventoryPreview";
import QuickActions from "../components/dashboard/QuickActions";
import RecipeSuggestions from "../components/dashboard/RecipeSuggestions";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    console.log("User logged out");
    router.push("/");
  };

  const macroData = [
    { title: "Calories", current: 1850, goal: 2200, unit: "kcal" },
    { title: "Protein", current: 132, goal: 170, unit: "g" },
    { title: "Carbs", current: 190, goal: 240, unit: "g" },
    { title: "Fats", current: 58, goal: 75, unit: "g" },
  ];

  const inventoryItems = [
    "Chicken Breast",
    "Eggs",
    "Greek Yogurt",
    "Spinach",
    "Brown Rice",
    "Avocados",
  ];

  const recipes = [
    {
      title: "Chicken Rice Bowl",
      description: "High-protein meal using chicken, brown rice, and spinach.",
      match: "Uses 5 ingredients you already have",
    },
    {
      title: "Spinach Omelet",
      description: "Quick breakfast packed with protein and healthy fats.",
      match: "Uses 3 ingredients you already have",
    },
    {
      title: "Greek Yogurt Power Bowl",
      description: "Fast snack with yogurt, fruit, and granola.",
      match: "Uses 2 ingredients you already have",
    },
  ];

  return (
    <div style={styles.page}>
      <Navbar onLogout={handleLogout} />

      <main style={styles.main}>
        <DashboardHeader username="Antonio" />

        <MacroSummary macroData={macroData} />

        <div style={styles.twoColumnLayout}>
          <InventoryPreview items={inventoryItems} />
          <QuickActions />
        </div>

        <RecipeSuggestions recipes={recipes} />
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f1f3f2",
  },

  main: {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "48px 24px 64px",
  },

  twoColumnLayout: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px",
    marginBottom: "24px",
  },
};