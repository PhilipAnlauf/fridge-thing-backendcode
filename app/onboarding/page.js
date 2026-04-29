"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormInput } from "../components/Forms";
// 1. Update the import to use the specific named components
import { PrimaryButton, SecondaryButton } from "../components/Buttons"; 
import { sharedStyles,colors } from "../styles";
import { Navbar } from "../components/Navbar";

export default function OnboardingPage() {
  const router = useRouter();

    const handleLogout = () => {
    console.log("User logged out");
    router.push('/onboarding'); 
  };

  const Temp = () => {
    router.push('/dashboard'); 
  }


  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <Navbar onLogout={handleLogout}
      ></Navbar>
        <div style={sharedStyles.onboardingWrapper}>
          <h1 style={sharedStyles.logoStyle}>Tell us about yourself!</h1>
          <p style={sharedStyles.subtitleStyle}>Help us tailor Fridge Thing to your lifestyle.</p>

        <FormInput
          label="Age"
          type="number"
          placeholder="Enter Age"
        ></FormInput>

        <FormInput
          label="Weight"
          type="number"
          placeholder="Enter Weight (lbs)"
        ></FormInput>

        <FormInput
          label="Height"
          type="text"
          placeholder={"5' 11\""}
        ></FormInput>

        <PrimaryButton
          onClick={Temp}
          >
            Finish
          </PrimaryButton>
      </div>
    </div>
  );
}
