import Button from "./Button";
import search from "../services/search";
import { useEffect, useState } from "react";

const Header = (props) => {
  const { photos, setPhotos } = props.photos;
  const { searchResult, setSearchResult } = props.search;
  const { showArr, setShowArr } = props.show;

  /* ------------ States ------------ */

  const [searchString, setSearchString] = useState("");

  /* ------------ Effects ------------ */

  useEffect(() => {
    if (searchResult.length && searchString.length) {
      setShowArr([...searchResult]);
    } else if (search.length) {
      setShowArr([...searchResult]);
    }
  }, [searchResult]);

  useEffect(() => {
    if (searchString.length && photos.length) {
      const res = search(photos, searchString);
      console.log(res);
      setSearchResult(res);
    } else {
      setSearchResult(photos);
      if (!searchString.length) {
      }
    }
  }, [searchString]);

  return (
    <header className="text-gray-800 ">
      <nav className="w-5/6 mx-auto py-5  flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            <svg
              width="32"
              height="32"
              className="hic6U"
              viewBox="0 0 32 32"
              version="1.1"
              aria-labelledby="unsplash-home"
              aria-hidden="false"
            >
              <desc lang="en">Unsplash logo</desc>
              <title id="unsplash-home">Unsplash Home</title>
              <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
            </svg>
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
              onChange={(ev) => {
                setSearchString(ev.target.value);
              }}
              value={searchString}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className=" absolute top-4 left-3 text-gray-300 cursor-pointer"
            >
              <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path>
            </svg>
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
