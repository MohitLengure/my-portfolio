// src/App.jsx
// src/App.jsx
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import './styles/globals.css';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Home />  {/* This becomes the 'children' prop in Layout */}
      </Layout>
    </BrowserRouter>
  );
}