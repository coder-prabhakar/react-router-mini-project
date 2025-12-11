import "./App.css";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Parent from "./pages/parent/Parent";
import Page404 from "./pages/page404/Page404";
import Login from "./pages/login/Login";

import BlogTopic from "./pages/blog/BlogTopic";
import FirstChid from "./pages/parent/FirstChild";
import SecondChild from "./pages/parent/SecondChild";
import ThirdChild from "./pages/parent/ThirdChild";

import ProtectedRoute from "./component/ProtectedRoute";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
                <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>}/>
                <Route path="/blog" element={<Blog />}/>
                <Route path="/blog/:topicName" element={<BlogTopic />}/>
                <Route path="/pages">
                    <Route path="" element={<Parent />}/>
                    <Route path="first-page" element={<FirstChid/>}/>
                    <Route path="second-page" element={<SecondChild/>}/>
                    <Route path="third-page" element={<ThirdChild/>}/>
                </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="/*" element={<Page404/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;