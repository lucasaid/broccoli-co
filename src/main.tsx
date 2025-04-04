import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/oswald/300.css";
import "@fontsource/oswald/400.css";
import "@fontsource/oswald/500.css";
import "@fontsource/oswald/700.css";
import './index.css'
import Index from './pages/Index'
import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from './pages/NotFound';
import Layout from './layouts/Layout';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Index />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)
