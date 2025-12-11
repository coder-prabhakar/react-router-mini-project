import "./App.css";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blogs from "./pages/blog/Blogs";
import Parent from "./pages/parent/Parent";
import Page404 from "./pages/page404/Page404";
import Login from "./pages/login/Login";

import Blog from "./pages/blog/Blog";
import FirstChid from "./pages/parent/FirstChild";
import SecondChild from "./pages/parent/SecondChild";
import ThirdChild from "./pages/parent/ThirdChild";

import ProtectedRoute from "./component/ProtectedRoute";

import { BrowserRouter, Routes, Route } from "react-router";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
                <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>}/>
                <Route path="/blog" element={<Blogs />}/>
                <Route path="/blog/:url" element={<Blog />}/>
                <Route path="/pages">
                    <Route path="" element={<Parent />}/>
                    <Route path="first-child" element={<FirstChid/>}/>
                    <Route path="second-child" element={<SecondChild/>}/>
                    <Route path="third-child" element={<ThirdChild/>}/>
                </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="/*" element={<Page404/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;