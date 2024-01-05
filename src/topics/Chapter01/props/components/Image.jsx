/* eslint-disable react/prop-types */
function Image({ imgUrl, imgName }) {
  return (
    <>
      <img
        src={imgUrl}
        alt={imgName}
        className="z-0 h-full w-full rounded-md object-cover"
      />
    </>
  );
}

export default Image;
