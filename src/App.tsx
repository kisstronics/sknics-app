import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { SiteShell } from './components/SiteShell';
import { AboutPage } from './pages/AboutPage';
import { AppsPage } from './pages/AppsPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ThemeProvider } from './theme';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <SiteShell>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/apps" element={<AppsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </SiteShell>
      </BrowserRouter>
    </ThemeProvider>
  );
}
