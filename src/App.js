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
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/blog/:topicName" element={<BlogTopic/>}/>
          <Route path="/*" element={<Page404/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    )
}

export default App;