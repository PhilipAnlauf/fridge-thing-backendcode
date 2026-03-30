"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { sharedStyles, colors } from '../styles';
import { Navbar } from '../components/Navbar';

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    console.log("User logged out");
    router.push('/');
  };

  return (
    <div style={sharedStyles.dashboardWrapper}>
      <Navbar onLogout={handleLogout}
      ></Navbar>
    </div>
  );
}