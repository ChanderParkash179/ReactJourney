import { Link } from "react-router-dom";

const WebMain = () => {
  return (
    <>
      <div>
        <nav
          className="relative flex w-full flex-nowrap items-center justify-between bg-neutral-800 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:flex-wrap lg:justify-start lg:py-4"
          data-te-navbar-ref
        >
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <div className="mx-2">
              <Link className="text-xl text-neutral-100" to="/">
                Navbar
              </Link>
            </div>
            <button
              className="block border-0 bg-transparent px-2 text-neutral-300 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
              type="button"
              data-te-collapse-init
              data-te-target="#navbarSupportedContent10"
              aria-controls="navbarSupportedContent10"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="[&>svg]:w-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                ></svg>
              </span>
            </button>

            <div
              className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
              id="navbarSupportedContent10"
              data-te-collapse-item
            >
              <ul
                className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
                data-te-navbar-nav-ref
              >
                <li
                  className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                  data-te-nav-item-ref
                >
                  <Link
                    className="text-neutral-300 transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 [&.active]:text-neutral-200"
                    aria-current="page"
                    to="/home"
                    data-te-nav-link-ref
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                  data-te-nav-item-ref
                >
                  <Link
                    className="text-neutral-300 transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 [&.active]:text-neutral-200"
                    aria-current="page"
                    to="/about"
                    data-te-nav-link-ref
                  >
                    About
                  </Link>
                </li>
                <li
                  className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                  data-te-nav-item-ref
                >
                  <Link
                    className="text-neutral-300 transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 [&.active]:text-neutral-200"
                    aria-current="page"
                    to="/contact"
                    data-te-nav-link-ref
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <section className="bg-orange-700 border rounded-xl text-white text-2xl h-64 w-48">
        <h1 className="text-center pt-24">Main Screen</h1>
      </section>
    </>
  );
};

export default WebMain;
