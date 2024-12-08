import { lazy } from "react";
import { Routes, Route } from "react-router";
import { MainContainer } from "components";

const MainPage = lazy(() => import("./pages/MainPage"));
const EventPage = lazy(() => import("./pages/EventPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainContainer />}>
        <Route index element={<MainPage />} />
        <Route path="/events" element={<EventPage />} />
      </Route>
    </Routes>
  );
}

export default App;
