"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { sharedStyles } from "./styles";
import { PrimaryButton, SecondaryButton } from "./components/Buttons";
import { FormInput } from "./components/Forms";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong.');
        return;
      }

      router.push("/dashboard");
    } catch (err) {
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={sharedStyles.pageWrapper}>
      <div style={sharedStyles.leftColumn}>
        <h1 style={sharedStyles.logoStyle}>Fridge Thing</h1>
        <p style={sharedStyles.subtitleStyle}>Track your macros, stay chill.</p>

        {error && <p style={errorStyle}>{error}</p>}

        <FormInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />

        <FormInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />

        <PrimaryButton onClick={handleLogin} style={loading ? { opacity: 0.7 } : {}}>
          {loading ? 'Logging in...' : 'Login'}
        </PrimaryButton>

        <div style={dividerContainer}>
          <span style={dividerLine}></span>
          <span style={dividerText}>OR</span>
          <span style={dividerLine}></span>
        </div>

        <div style={signUpButtonsContainer}>
          <Link href="/register" style={{ textDecoration: "none" }}>
            <SecondaryButton>
              Sign up with Email
            </SecondaryButton>
          </Link>

          <SecondaryButton>
            <img
              src="https://www.google.com/favicon.ico"
              style={{ width: "16px", marginRight: "10px" }}
              alt=""
            />
            Continue with Google
          </SecondaryButton>
        </div>
      </div>

      <div style={sharedStyles.rightColumn}></div>
    </div>
  );
}

const errorStyle = {
  color: '#e74c3c',
  fontSize: '14px',
  fontFamily: "'Lexend', sans-serif",
  marginBottom: '16px',
  padding: '10px 14px',
  backgroundColor: '#fdf0ef',
  border: '1px solid #f5c6c2',
  borderRadius: '6px',
  width: '325px',
  boxSizing: 'border-box',
};

const dividerContainer = {
  display: "flex",
  alignItems: "center",
  width: "325px",
  margin: "20px 0",
  color: "#bdc3c7",
};

const dividerLine = { 
  flex: 1, 
  height: "1px", 
  backgroundColor: "#eee" 
};

const dividerText = {
  padding: "0 10px",
  fontSize: "12px",
  textTransform: "uppercase",
  fontFamily: "'Lexend', sans-serif",
};

const signUpButtonsContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "325px",
};