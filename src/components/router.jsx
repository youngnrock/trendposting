import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AboutPage from "../pages/about/page";
import ContactPage from "../pages/contact/page";
import StartPage from "../pages/start/page";

/**
 * @description 내비게이션 클래스 정의, active 여부에 따라 다르게 출력
 * 
 * @param {boolean} isActive 
 * @returns {string}
 */
const navClass = ({ isActive }) => `nav-link${isActive ? ' click' : ''}`;

export default function Router() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink className={navClass} to='/'>Start</NavLink>
        <NavLink className={navClass} to='/about'>About</NavLink>
        <NavLink className={navClass} to='/contact'>Contact</NavLink>
      </nav>
      <Routes>
        <Route exact path='/' element={<StartPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}