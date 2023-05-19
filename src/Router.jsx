import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
function Router() {
  const [value, setValue] = useState({});
  const onClickValue = (e) => {
    setValue(e);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login onClick={onClickValue} />} />
        <Route path="/home" element={<Home values={value} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
