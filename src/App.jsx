import LandingPage from "./pages/LandingPage.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";

export default function App() {
  const path = window.location.pathname;
  const isPrivacyPage = path === "/privacy" || path === "/privacy.html";
  const isTermsPage = path === "/terms" || path === "/terms.html";

  if (isPrivacyPage) {
    return <PrivacyPolicy />;
  }

  if (isTermsPage) {
    return <TermsOfService />;
  }

  return <LandingPage />;
}
