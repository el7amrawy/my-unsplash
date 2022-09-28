import Header from "./components/Header";
import AddPhoto from "./components/AddPhoto";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import DeletePhoto from "./components/DeletePhoto";
import axios from "axios";
import apiHost from "./config/config";

const App = () => {
  /* ------------- States ------------- */

  const [addPhoto, setAddPhoto] = useState(false);
  const [deletePhoto, setDeletePhoto] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [d_id, setD_id] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const [showArr, setShowArr] = useState([]);

  /* ------------- Effects ------------- */

  useEffect(() => {
    axios.get(apiHost).then(({ data }) => {
      setPhotos(data);
      setShowArr(data);
    });
  }, []);

  // useEffect(() => {
  //   if (searchResult.length) {
  //     // console.log(searchResult, showArr);
  //     setShowArr([...searchResult]);
  //   }
  // }, [searchResult]);

  return (
    <>
      <Header
        setAddPhoto={setAddPhoto}
        photos={{ photos, setPhotos }}
        search={{ searchResult, setSearchResult }}
        show={{ showArr, setShowArr }}
      />
      <Home
        photo={{ deletePhoto, setDeletePhoto }}
        photos={{ photos, setPhotos }}
        setD_id={setD_id}
        searchResult={searchResult}
        show={{ showArr, setShowArr }}
      />
      {addPhoto && (
        <AddPhoto
          setAddPhoto={setAddPhoto}
          addPhoto={addPhoto}
          photos={{ photos, setPhotos }}
          show={{ showArr, setShowArr }}
        />
      )}
      {deletePhoto && (
        <DeletePhoto
          deletePhoto={deletePhoto}
          setDeletePhoto={setDeletePhoto}
          photos={{ photos, setPhotos }}
          d_id={d_id}
          show={{ showArr, setShowArr }}
        />
      )}
    </>
  );
};

export default App;
