import { useParams } from "react-router-dom";

const GitMain = () => {
  const { username } = useParams();
  return (
    <>
      <h1>Username is : {username}</h1>
    </>
  );
};

export default GitMain;
