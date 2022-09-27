import { UilUser, UilSearch } from "@iconscout/react-unicons";
import Button from "./Button";

const Header = (props) => {
  return (
    <header className="text-gray-800 ">
      <nav className="w-5/6 mx-auto py-5  flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            <UilUser className=" " />
            <div className="ml-2">
              <h4 className=" text-sm font-extrabold">My Unsplash</h4>
              <h5 className=" font-medium  text-[9px] leading-3">
                devchallenges.io
              </h5>
            </div>
          </div>
          <div className="ml-6 relative w-80">
            <input
              className="py-4 w-full pl-14 shadow border border-gray-300 rounded-xl outline-none placeholder:text-sm placeholder:font-medium placeholder:text-gray-300 focus:bg-slate-50"
              type="text"
              placeholder="Search by name"
            />
            <UilSearch className=" absolute top-4 left-3 text-gray-300 cursor-pointer" />
          </div>
        </div>
        <Button
          text="Add a photo"
          clickHandler={() => props.setAddPhoto(true)}
        />
      </nav>
    </header>
  );
};

export default Header;
