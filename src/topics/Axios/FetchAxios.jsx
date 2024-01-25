import axios from "axios";
import { useEffect, useState } from "react";

const FetchAxios = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data));
  }, []);

  return (
    <>
      {data.map((post) => {
        const { id, userId, title, body } = post;

        return (
          <div
            key={id}
            className="card border-2 m-2 p-2 rounded-md border-black text-center"
          >
            <h5>
              <strong>USER ID</strong> : {userId}
            </h5>
            <h5>
              <strong>ID</strong> : {id}
            </h5>
            <h2>
              <strong>TITLE</strong> : {title}
            </h2>
            <p>
              <strong>BODY</strong> : {body}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default FetchAxios;
