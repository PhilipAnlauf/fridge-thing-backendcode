"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { sharedStyles, colors } from "../styles";
import { PrimaryButton, SecondaryButton } from '../components/Buttons';
import { FormInput } from '../components/Forms';


export default function RegisterPage() {
  
  const router = useRouter();

  const handleCreateAccount = () => {
    console.log("Account created!");
    router.push('/onboarding'); 
  };

  return (
    <div style={sharedStyles.pageWrapper}>
      <div style={sharedStyles.leftColumn}>
        <h1 style={sharedStyles.logoStyle}>Fridge Thing</h1>
        <p style={sharedStyles.subtitleStyle}>Create your account.</p>

        <FormInput
          label="First Name"
          type="text"
          //value={firstName}
          placeholder="Enter First Name"
        ></FormInput>

        <FormInput
          label="Last Name"
          type="text"
          //value={lastName}
          placeholder="Enter Last Name"
        ></FormInput>

        <FormInput
          label="Email"
          type="email"
          //value={email}
          placeholder="Enter Email"
        ></FormInput>

        <FormInput
          label="Password"
          type="password"
          //value={password}
          placeholder="Create Password"
        ></FormInput>

        <FormInput
          label="Confirm Password"
          type="password"
          //value={confirmPassword}
          placeholder="Confirm Password"
        ></FormInput>
        
        <PrimaryButton
          onClick={handleCreateAccount}
        >
          Create Account
        </PrimaryButton>

        <Link href="/" style={{ textDecoration: 'none' }}>
          <SecondaryButton>
            Back to Login
          </SecondaryButton>
        </Link>
      </div>

      <div style={sharedStyles.rightColumn}></div>
    </div>
  );
}