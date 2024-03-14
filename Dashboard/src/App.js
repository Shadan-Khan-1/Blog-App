import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "./darkmode/ThemeProvider";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blogs";
import Signup from "./pages/Signup";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";
import AddPost from "./pages/AddPost";

import Adduser from "./example/Adduser";
import EditUserbyId from "./example/EditUserbyId";


function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blogs" element={<Blog />}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/dashboard" element={<DashBoard/>}></Route>
            <Route path="/addpost" element={<AddPost/>}></Route>
            <Route path="/add-user" element={<Adduser/>}></Route>
            <Route path="/edit-user" element={<EditUserbyId/>}></Route>
          </Routes>

        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
