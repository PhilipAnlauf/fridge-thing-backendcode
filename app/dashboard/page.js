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
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <Navbar onLogout={handleLogout}
      ></Navbar>  
    <div style={sharedStyles.dashboardWrapper}>

    </div>
  </div>
  );
}