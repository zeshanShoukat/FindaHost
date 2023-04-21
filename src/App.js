import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginScreen from "./Screens/AuthScreens/LoginScreen";
import RegisterScreen from "./Screens/AuthScreens/RegisterScreen";
import WelcomeScreen from "./Screens/AuthScreens/WelcomeScreen";
import BrowseHostScreen from "./Screens/BrowseHostScreens/BrowseHostScreen";
import DashboardScreen from "./Screens/DashboardScreens/DashboardScreen";
import MyBookingScreen from "./Screens/MyBookingScreens/MyBookingScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<WelcomeScreen />} />
          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path="/register" element={<RegisterScreen />} />
          <Route exact path="/dashboard" element={<DashboardScreen />} />
          <Route exact path="/mybooking" element={<MyBookingScreen />} />
          <Route exact path="/browsehost" element={<BrowseHostScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
