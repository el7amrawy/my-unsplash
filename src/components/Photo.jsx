// import { useState } from "react";
import Button from "./Button";

const Photo = ({ imgURL, className, photo }) => {
  return (
    <div
      className={
        "rounded-3xl h-auto overflow-hidden mt-10" +
        (className ? className : "")
      }
    >
      <div className="w-full h-full relative group">
        <img
          className="w-full"
          src={
            imgURL ||
            "https://img.freepik.com/premium-vector/abstract-dynamic-blue-orange-background_67845-1390.jpg?w=2000"
          }
          alt="image"
        />
        <div className="w-full h-full absolute bg-[#00000038] top-0 left-0 flex flex-col justify-between invisible opacity-0 transition duration-700 group-hover:visible  group-hover:opacity-100">
          <div className=" text-right">
            <Button
              text="delete"
              className="m-4 bg-transparent border-red-500 text-red-500 rounded-full"
              clickHandler={(ev) => {
                // ev.preventDefault()
                photo.setDeletePhoto(true);
              }}
            />
          </div>
          <h3 className=" text-white leading-6 font-bold text-lg w-5/6 mb-8 ml-4">
            Morbi consequat lectus non orci maximus Morbi consequat lectus non
            orci maximus
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Photo;
