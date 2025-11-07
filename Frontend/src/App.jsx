import { BrowserRouter, Routes, Route } from "react-router-dom"
import MenuComponent from "../Component/Customer_Pannel/MenuComponent"

function App() {
  // Add at top of file:
  // import { BrowserRouter, Routes, Route } from "react-router-dom";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuComponent />} />
        {/* <Route path="/menu" element={<MenuComponent />} /> */}
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
