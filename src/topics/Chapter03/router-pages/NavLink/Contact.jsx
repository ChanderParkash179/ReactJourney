// import NavBar from "../Component/NavBar";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const toNavigate = () => {
    navigate("/nav");
  };

  return (
    <>
      <header>
        {/* <NavBar /> */}
        <section>
          <h1>I am Contact Page</h1>
        </section>
        <button
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          onClick={toNavigate}
        >
          To Navigate Page
        </button>
      </header>
    </>
  );
};

export default Contact;
