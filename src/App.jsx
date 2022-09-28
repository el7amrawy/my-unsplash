import Header from "./components/Header";
import AddPhoto from "./components/AddPhoto";
import { useState } from "react";
import Home from "./pages/Home";
import DeletePhoto from "./components/DeletePhoto";

const App = () => {
  const [addPhoto, setAddPhoto] = useState(false);
  const [deletePhoto, setDeletePhoto] = useState(false);
  const [photos, setPhotos] = useState([]);

  return (
    <>
      <Header setAddPhoto={setAddPhoto} />
      <Home
        photo={{ deletePhoto, setDeletePhoto }}
        photos={{ photos, setPhotos }}
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
        />
      )}
    </>
  );
};

export default App;
