"use client";
import { useState, useMemo } from "react";
import { sharedStyles, colors } from "../styles";
import { Navbar } from "../components/Navbar";
import { RecipeCard } from "../components/RecipeCard";
import { PrimaryButton } from "../components/Buttons";

export default function RecipeSearch() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const allRecipes = useMemo(() => [
    { id: 1, title: "Carmel Apple Pie", description: "For when you need a treat.", cal: 480, p: 8, c: 80, f: 3.28, time: 150   },
    { id: 2, title: "Citrus Salmon and Asparagus", description: "Succulent tender Salmon on a bed of asparagus covered in a lemon garlic butter sauce.", cal: 250, p: 32, c: 5.55, f: 1.69, time: 15 },
    { id: 3, title: "Feta-stuffed Hamburger", description: "Protein-rich burgers are stuffed and seasoned for a Mediterranean twist.", cal: 390, p: 24, c: 1.67, f: 0.04, time: 20 },
    { id: 4, title: "Five Hundred Cigarettes", description: "I feel as if I have been standing my entire life and I just sat down.", p: 0, c: 0, f: 3, time: 0 },
  ], []);
  const filteredRecipes = allRecipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', overflow: 'hidden', backgroundColor: '#f4f7f6', fontFamily: "'Lexend', sans-serif" }}>
      <Navbar />

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px', maxWidth: '1500px', width: '100%', margin: '0 auto', flexShrink: 0 }}>
        <div style={{ display: 'flex', gap: '15px' }}>
        </div>
        <input 
          type="text" 
          placeholder="Search recipes..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          style={{ ...sharedStyles.inputStyle, width: '320px', margin: 0 }} 
        />
      </div>

      <div style={{ 
        flex: 1, 
        maxWidth: '1500px', 
        width: '100%', 
        margin: '0 auto', 
        padding: '0 40px 40px 40px', 
        boxSizing: 'border-box',
        overflowY: 'auto' 
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '30px', 
          width: '100%',
          padding: '10px'
        }}>
          {filteredRecipes.map(r => (
            <div key={r.id} style={{ height: '400px' }}>
               <RecipeCard 
                recipe={r} 
                isSelected={selectedRecipe === r.id} 
                onClick={() => setSelectedRecipe(selectedRecipe === r.id ? null : r.id)}
                isVisible={true}
              />
            </div>
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div style={{ textAlign: 'center', paddingTop: '100px', color: '#999' }}>
            No recipes found matching "{searchTerm}"
          </div>
        )}
      </div>

      <div style={bottomBarStyle}>
        <div style={{ fontSize: '1rem' }}>
          {selectedRecipe ? (
            <span>Selected: <strong style={{ color: colors.primary }}>{allRecipes.find(r => r.id === selectedRecipe)?.title}</strong></span>
          ) : (
            <span style={{ opacity: 0.5 }}>Select a recipe to continue</span>
          )}
        </div>
          <PrimaryButton
            bgColor={selectedRecipe ? colors.primary : '#4a5a6a'}
            padding="10px 50px"
            width="auto"
            style={{ 
              cursor: selectedRecipe ? 'pointer' : 'default',
              opacity: selectedRecipe ? 1 : 0.7,
              marginBottom: '0px'
            }}
          >
            Start Cooking
          </PrimaryButton>
      </div>
    </div>
  );
}

const bottomBarStyle = { 
  width: '100vw', 
  height: '60px', 
  backgroundColor: 'rgba(44, 62, 80, 0.95)', 
  backdropFilter: 'blur(12px)', 
  borderTop: '1px solid rgba(255,255,255,0.1)', 
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center', 
  padding: '0 60px', 
  color: 'white', 
  flexShrink: 0 
};