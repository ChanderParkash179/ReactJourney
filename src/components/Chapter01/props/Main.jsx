import Image from "./components/Image";
import Summary from "./components/Summary";
import UserName from "./components/UserName";
import ProfileButton from "./components/ProfileButton";

function Main() {
  const imgUrl =
    "https://images.pexels.com/photos/5483063/pexels-photo-5483063.jpeg";

  const username = "Chander Parkash";

  const summary =
    "Vitae non beatae amet quam, nihil id tenetur optio iste, autem ad similique.";

  return (
    <>
      <div className="relative h-[400px] w-[300px] rounded-md m-5">
        <Image imgUrl={imgUrl} imgName={username} />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <UserName username={username} />
          <Summary summary={summary} />
          <ProfileButton />
        </div>
      </div>
    </>
  );
}

export default Main;
