// import NavBar from "../Component/NavBar";
import { useNavigate } from "react-router-dom";

const UseNavigate = () => {
  const navigate = useNavigate();

  const toContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <header>
        {/* <NavBar /> */}
        <section>
          <h1>I am on UseNavigate Home Page</h1>
        </section>
        <button
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          onClick={toContact}
        >
          To Contact Page
        </button>
      </header>
    </>
  );
};

export default UseNavigate;
