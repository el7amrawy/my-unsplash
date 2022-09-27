import { useState } from "react";
import Button from "./Button";

const AddPhoto = () => {
  const [formData, setFormData] = useState({
    label: "",
    imgURL: "",
  });
  //   console.log(formData);
  return (
    <div className=" w-screen h-screen bg-[#00000025] absolute top-0 left-0 flex justify-center items-center">
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
            className=" mt-3 p-3  border border-gray-300 rounded-xl outline-none placeholder:text-sm placeholder:font-medium placeholder:text-gray-300 focus:bg-slate-50"
          />
        </div>
        <div className=" mt-6 text-right leading-5 text-gray-200">
          <span className=" inline-block mr-6 cursor-pointer">Cancel</span>
          <Button text="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddPhoto;
