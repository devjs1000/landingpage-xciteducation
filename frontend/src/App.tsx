import { useState, useContext, lazy, Suspense } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import { context } from "./context/mainContext";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Team from './pages/Team'
const About =lazy(()=>import( "./pages/About"))
const Notfound =lazy(()=>import( "./components/Notfound"))
const Privacy =lazy(()=>import( "./pages/Privacy"))
const Terms =lazy(()=>import( "./pages/Terms"))
const Refund =lazy(()=>import( "./pages/Refund"))
const Equal =lazy(()=>import( "./pages/Equal"))
const Admin = lazy(()=>import('./pages/Admin'))
const Menubar = lazy(() => import("./components/Menubar"));
const Footer = lazy(() => import("./components/Footer"));
// import AdminAccess from "./pages/AdminAccess";
const AdminAccess=lazy(()=>import('./pages/AdminAccess'))
// const Team = lazy(() => import("./pages/Team"));

function App() {
  const ctx = useContext(context);

  return (
    <div className="App mx-auto ">
      <Navbar />
      <Suspense fallback={<Loading />}>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path='/refund-policy' element={<Refund />} />
        <Route path='/equal-opportunity' element={<Equal />} />
        <Route path='/admin/login'  element={<Admin />} />
        <Route path='/admin/access' element={<AdminAccess />} />
        <Route path='/our-team' element={<Team />} />

      </Routes>
        <Menubar />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
