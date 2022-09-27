import Header from "./components/Header";
import AddPhoto from "./components/AddPhoto";
import { useState } from "react";
import Home from "./pages/Home";
import DeletePhoto from "./components/DeletePhoto";

const App = () => {
  const [addPhoto, setAddPhoto] = useState(false);
  const [deletePhoto, setDeletePhoto] = useState(false);
  return (
    <>
      <Header setAddPhoto={setAddPhoto} />
      <Home photo={{ deletePhoto, setDeletePhoto }} />
      {addPhoto && <AddPhoto setAddPhoto={setAddPhoto} addPhoto={addPhoto} />}
      {deletePhoto && (
        <DeletePhoto
          deletePhoto={deletePhoto}
          setDeletePhoto={setDeletePhoto}
        />
      )}
    </>
  );
};

export default App;
