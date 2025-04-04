import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
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
