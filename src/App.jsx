import React from 'react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import Navbar from './pages/home/components/Navbar';
import Hero from './pages/home/components/Hero';
import Category from './pages/home/components/Category_Hero'
import CategoryDetail from './pages/home/components/Category_Detail';

const firebaseConfig = {
  apiKey: "AIzaSyDe2D66Xw_Wuul6Ru0t8GKbR8lJq3qNpmc",
  authDomain: "simplizeprojectdemo.firebaseapp.com",
  projectId: "simplizeprojectdemo",
  storageBucket: "simplizeprojectdemo.appspot.com",
  messagingSenderId: "751426590873",
  appId: "1:751426590873:web:fdeaf9bb0242a574530008",
  measurementId: "G-N980WK953B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {
  return (
    // <div><Navbar/><Hero/></div>
    <div><Navbar/><Category/><CategoryDetail/></div>
  )
}

export default App