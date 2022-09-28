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

  useEffect(() => {
    axios.get(apiHost).then(({ data }) => {
      console.log(data);
      setPhotos(data);
    });
  }, []);
  /* ------------- Effects ------------- */
  return (
    <>
      <Header setAddPhoto={setAddPhoto} />
      <Home
        photo={{ deletePhoto, setDeletePhoto }}
        photos={{ photos, setPhotos }}
        setD_id={setD_id}
      />
      {addPhoto && (
        <AddPhoto
          setAddPhoto={setAddPhoto}
          addPhoto={addPhoto}
          photos={{ photos, setPhotos }}
        />
      )}
      {deletePhoto && (
        <DeletePhoto
          deletePhoto={deletePhoto}
          setDeletePhoto={setDeletePhoto}
          photos={{ photos, setPhotos }}
          d_id={d_id}
        />
      )}
    </>
  );
};

export default App;
