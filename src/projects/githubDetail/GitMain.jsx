/* eslint-disable react-refresh/only-export-components */
// import { useParams } from "react-router-dom";
import { useLoaderData, Link } from "react-router-dom";

const GitMain = () => {
  const data = useLoaderData();

  // const { user } = useParams();
  return (
    <>
      <div className="flex justify-center m-16">
        <Link
          to={data.html_url}
          target="_blank"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={data.avatar_url}
            alt={data.name}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {data.bio}
            </p>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {data.location}
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default GitMain;

export const loaderfun = async ({ params }) => {
  console.log(params.user);
  const res = await fetch(`https://api.github.com/users/${params.user}`);
  const data = await res.json();
  return data;
};
