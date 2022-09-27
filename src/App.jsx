import Header from "./components/Header";
import AddPhoto from "./components/AddPhoto";
import { useState } from "react";

const App = () => {
  const [addPhoto, setAddPhoto] = useState(false);
  return (
    <>
      <Header setAddPhoto={setAddPhoto} />
      {addPhoto && <AddPhoto setAddPhoto={setAddPhoto} />}
    </>
  );
};

export default App;
