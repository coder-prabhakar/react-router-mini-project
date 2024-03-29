// CSS
import "./App.css";

// Component
import NavBar from "./component/Navbar";
import Footer from "./component/Footer";

// Pages
import Home from "./component/Home";
import About from "./component/About";
import Blog from "./component/Blog";
import BlogTopic from './component/BlogTopic';
import Pages from "./component/Pages";
import Page404 from "./component/Page404";
import Login from "./component/Login";

// Protected Route
import ProtectedRoute from "./component/ProtectedRoute";

// Child pages of Pages
import FirstPage from "./component/nestedComponent/FirstPage";
import SecondPage from "./component/nestedComponent/SecondPage";
import ThirdPage from "./component/nestedComponent/ThirdPage";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {

    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProtectedRoute ComponentName={Home}/>}/>
          <Route path="/about" element={<ProtectedRoute ComponentName={About}/>}/>
          <Route path="/blog" element={<ProtectedRoute ComponentName={Blog}/>}/>
          <Route path="/blog/:topicName" element={<BlogTopic/>}/>
          <Route path="/pages">
            <Route path="" element={<Pages />}/>
            <Route path="first-page" element={<FirstPage/>}/>
            <Route path="second-page" element={<SecondPage/>}/>
            <Route path="third-page" element={<ThirdPage/>}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/*" element={<Page404/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    )
}

export default App;