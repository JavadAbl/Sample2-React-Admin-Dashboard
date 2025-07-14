import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Views/Sidebar/Sidebar";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={null} />
        </Routes>
        <Sidebar />
      </BrowserRouter>
    </>
  );
}
