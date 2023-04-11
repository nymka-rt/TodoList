import { useState } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import TodoList from "./components/Todolist/TodoList";
import "./components/Todolist/TodoList.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/TodoList" element={<TodoList />} />
      </Routes>
      {/* {isLoggedIn ? (
        <LoggedIn setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )} */}
    </>
  );
}

export default App;
