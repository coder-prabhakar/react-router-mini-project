import "./App.css"
import NavBar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About"
import Blog from "./component/Blog";
import Footer from "./component/Footer";
import Page404 from "./component/Page404";
import BlogTopic from './component/BlogTopic';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<><Home /><Footer /></>}/>
          <Route path="/about" element={<><About /><Footer /></>}/>
          <Route path="/blog" element={<><Blog /><Footer /></>}/>
          <Route path="/blog/:topicName" element={<><BlogTopic/><Footer /></>}/>
          <Route path="/*" element={<><Page404/><Footer /></>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default App;