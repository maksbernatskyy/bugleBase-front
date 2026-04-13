import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import DefaultLayout from "./components/DefaultLayout"
import Games from "./pages/Games"

export default function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/games" element={<Games />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
