import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import DefaultLayout from "./components/DefaultLayout"
import Games from "./pages/Games"
import ChiSiamo from "./pages/ChiSiamo"

export default function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/games" element={<Games />} />
        <Route path="/chisiamo" element={<ChiSiamo />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
