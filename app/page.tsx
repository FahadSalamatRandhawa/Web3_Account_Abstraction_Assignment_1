'use client';

import { Suspense, useState } from 'react';
import Loading from './loading';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

export default function Home() {
  

  return (
    <div className=' h-screen '>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}