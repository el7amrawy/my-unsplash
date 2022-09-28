import { useEffect, useState } from "react";
import Button from "./Button";
import { nanoid } from "nanoid";
import axios from "axios";
import apiHost from "../config/config";

const AddPhoto = (props) => {
  const { photos, setPhotos } = props.photos;
  const { showArr, setShowArr } = props.show;

  /* ------------ States ------------ */

  const [formData, setFormData] = useState({
    id: nanoid(),
    imgURL: "",
    label: "",
  });

  /* ------------ Effects ------------ */

  useEffect(() => {
    if (props.addPhoto) {
      document.documentElement.style.overflowX = "hidden";
    }

    return () => (document.documentElement.style.overflowX = "auto");
  }, [props.addPhoto]);

  /* ------------ Handlers ------------ */

  function submitHandler(ev) {
    ev.preventDefault();
    if (Object.values(formData).every((elem) => elem)) {
      if (IsUrl(formData.imgURL)) {
        axios
          .post(apiHost, formData)
          .then(({ data }) => {
            setPhotos(data);
            setShowArr(data);
            props.setAddPhoto(false);
          })
          .catch((err) => {
            alert(err);
          });
      } else {
        alert("invalid link");
      }
    }
  }

  return (
    <div
      className=" w-screen h-screen bg-[#00000025] fixed top-0 left-0 flex justify-center items-center"
      id="addphoto"
      onClick={(ev) => {
        if (ev.target == document.getElementById("addphoto")) {
          props.setAddPhoto(false);
        }
      }}
    >
      <form className=" bg-white rounded-xl w-[620px]  py-6 px-8">
        <div className="flex flex-col">
          <h3 className=" font-medium leading-8 text-2xl text-gray-700">
            Add a new photo
          </h3>
          <label
            htmlFor="img-label"
            className=" font-medium text-gray-600 leading-5 mt-5 text-sm"
          >
            Label
          </label>
          <input
            id="img-label"
            type="text"
            placeholder="Suspendisse elit massa"
            value={formData.label}
            onChange={(ev) => {
              setFormData((prev) => ({
                ...prev,
                label: ev.target.value,
              }));
            }}
            required
            className=" mt-3 p-3  border border-gray-300 rounded-xl outline-none placeholder:text-sm placeholder:font-medium placeholder:text-gray-300 focus:bg-slate-50"
          />
          <label
            htmlFor="img-url"
            className=" font-medium text-gray-600 leading-5 mt-5 text-sm"
          >
            Photo URL
          </label>
          <input
            id="img-url"
            type="text"
            value={formData.imgURL}
            onChange={(ev) => {
              setFormData((prev) => ({
                ...prev,
                imgURL: ev.target.value,
              }));
            }}
            placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
            required
            className=" mt-3 p-3  border border-gray-300 rounded-xl outline-none placeholder:text-sm placeholder:font-medium placeholder:text-gray-300 focus:bg-slate-50"
          />
        </div>
        <div className=" mt-6 text-right leading-5 text-gray-200">
          <span
            className=" inline-block mr-6 cursor-pointer"
            onClick={() => props.setAddPhoto(false)}
          >
            Cancel
          </span>
          <Button text="Submit" clickHandler={submitHandler} />
        </div>
      </form>
    </div>
  );
};
function IsUrl(url) {
  let regex = new RegExp(
    "^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?"
  );
  return regex.test(url);
}

export default AddPhoto;
