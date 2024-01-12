import NavBar from "../Component/NavBar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <header>
        <NavBar />
        <Outlet />
      </header>
    </>
  );
};

export default Main;
