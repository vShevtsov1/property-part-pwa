import Concierge from "./pages/Concierge.jsx";
import Home from "./pages/Home.jsx";
import RealEstate from "./pages/RealEstate.jsx";
import ProjectCard from "./pages/ProjectCard.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ContactUsModal from "./components/ContactUsModal.jsx";
import PDFmodal from "./components/PDFmodal.jsx";
import { useState } from "react";
import Agent from "./pages/Agent.jsx";
import Employment from "./pages/Employment.jsx"
import ConsiergeFreezone from "./pages/ConsiergeFreezone.jsx"
import BankAccount from "./pages/BankAccount.jsx"
import PowerOfAttorney from "./pages/PowerOfAttorney.jsx"
import MinLand from "./pages/MinLand.jsx"
import Visa from "./pages/Visa.jsx"
import Accounting from "./pages/Accounting.jsx"
import TradeMark from "./pages/TradeMark.jsx"
import Areas from "./pages/Areas.jsx";
import AreaPage from "./pages/AreaPage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import SupportChat from "./components/SupportChat.jsx";
import AboutAgent from "./pages/AboutAgent.jsx";
import ProjectView from "./pages/ProjectView.jsx";
import AboutAreas from "./pages/AboutAreas.jsx";
import AreasViewPage from "./pages/AreasViewPage.jsx";
import HomePage from "./PWA/pages/HomePage.jsx";
import Map from "./PWA/pages/PhoneMap.jsx";
import PhoneMap from "./PWA/pages/PhoneMap.jsx";
import Properties from "./PWA/pages/Properties.jsx";
function App() {
  const [isPDFModalOpen, setPDFModalOpen] = useState(false);

  const openPDFModal = () => {
    setPDFModalOpen(true);
  };

  const closePDFModal = () => {
    setPDFModalOpen(false);
  };
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SupportChat />
      <ContactUsModal />
      <PDFmodal closeModal={closePDFModal} showModal={isPDFModalOpen} />
      <Routes >
        <Route path="/" element={<Home openModal={openPDFModal} />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/concierge" element={<Concierge />} />
        <Route path="/project/:id" element={<ProjectCard />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/employment" element={<Employment />} />
        <Route path="/general" element={<ConsiergeFreezone />} />
        <Route path="/bank-account" element={<BankAccount />} />
        <Route path="/attorney" element={<PowerOfAttorney />} />
        <Route path="/main-land" element={<MinLand />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/trademark-registration" element={<TradeMark />} />
        <Route path="/about-areas" element={<Areas />} />

        <Route path="/area-page/:id" element={<AreaPage />} />
        <Route path="/area/:id" element={<AreasViewPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-agent" element={<AboutAgent />} />
        <Route path="/project-view/:id" element={<ProjectView />} />
        <Route path="/areas" element={<AboutAreas />} />
        <Route path="/phone" element={<HomePage />} />
        <Route path="/phone/map" element={<PhoneMap />} />
        <Route path="/phone/properties" element={<Properties />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App
