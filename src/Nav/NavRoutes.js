import { Routes, Route } from "react-router-dom";
import EventsPage from "../Pages/Events";
import HomePage from "../Pages/Home";

export default function NavRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events/:eventId" element={<EventsPage />} />
    </Routes>
  );
}
