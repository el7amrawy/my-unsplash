import Button from "./Button";

const Photo = ({ imgURL, label, className, photo, id, setD_id }) => {
  return (
    <div
      id={id}
      className={
        "rounded-3xl h-auto overflow-hidden mt-10" +
        (className ? className : "")
      }
    >
      <div className="w-full h-full relative group">
        <img className="w-full" src={imgURL} alt="image" />
        <div className="w-full h-full absolute bg-[#00000038] top-0 left-0 flex flex-col justify-between invisible opacity-0 transition duration-700 group-hover:visible  group-hover:opacity-100">
          <div className=" text-right">
            <Button
              text="delete"
              className="m-4 bg-transparent border-red-500 text-red-500 rounded-full"
              clickHandler={(ev) => {
                // ev.preventDefault()
                photo.setDeletePhoto(true);
                setD_id(id);
              }}
            />
          </div>
          <h3 className=" text-white leading-6 font-bold text-lg w-5/6 mb-8 ml-4">
            {label}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Photo;
