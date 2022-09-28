import { useState } from "react";
import Button from "./Button";
import axios from "axios";
import apiHost from "../config/config";

const DeletePhoto = (props) => {
  const { setDeletePhoto, deletePhoto, d_id } = props;
  const { photos, setPhotos } = props.photos;
  const { showArr, setShowArr } = props.show;

  /* ------------ States ------------ */

  const [formData, setFormData] = useState({
    id: d_id,
    password: "",
  });

  /* ------------ Handlers ------------ */

  function clickHandler() {
    axios
      .delete(apiHost, {
        headers: {
          Authorization: "authorizationToken",
        },
        data: formData,
      })
      .then(({ data, status }) => {
        if ((status = 200)) {
          setPhotos(data);
          setShowArr(data);
          setDeletePhoto(false);
        } else {
          alert("wrong pass");
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div
      className=" w-screen h-screen bg-[#00000025] fixed top-0 left-0 flex justify-center items-center"
      id="deletephoto"
      onClick={(ev) => {
        if (ev.target == document.getElementById("deletephoto")) {
          props.setDeletePhoto(false);
        }
      }}
    >
      <form className=" bg-white rounded-xl w-[620px]  py-6 px-8">
        <div className="flex flex-col">
          <h3 className=" font-medium leading-8 text-2xl text-gray-700">
            Are you sure?
          </h3>
          <label
            htmlFor="pass"
            className=" font-medium text-gray-600 leading-5 mt-5 text-sm"
          >
            Password
          </label>
          <input
            id="pass"
            type="password"
            placeholder="***********"
            value={formData.password}
            onChange={(ev) => {
              setFormData((prev) => ({
                ...prev,
                password: ev.target.value,
              }));
            }}
            className=" mt-3 p-3  border border-gray-300 rounded-xl outline-none placeholder:text-sm placeholder:font-medium placeholder:text-gray-300 focus:bg-slate-50"
          />
          <div className=" mt-6 text-right leading-5 text-gray-200">
            <span
              className=" inline-block mr-6 cursor-pointer"
              onClick={() => setDeletePhoto(false)}
            >
              Cancel
            </span>
            <Button
              text="Delete"
              className=" bg-red-500"
              clickHandler={clickHandler}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default DeletePhoto;
