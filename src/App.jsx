import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route
        path="/privacy.html"
        element={<Navigate to="/privacy" replace />}
      />

      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/terms.html" element={<Navigate to="/terms" replace />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
