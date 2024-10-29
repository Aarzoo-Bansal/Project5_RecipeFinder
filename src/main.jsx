import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from './App.jsx'
import DetailView from '/routes/DetailView';


import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    
        <Route index={true} path="/" element={<App />} />
        <Route index={false} path="/recipeDetails/:symbol" element={<DetailView />} />

  
  </Routes>
</BrowserRouter>
)


