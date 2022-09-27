import Header from "./components/Header";
import AddPhoto from "./components/AddPhoto";
import { useState } from "react";
import Home from "./pages/Home";

const App = () => {
  const [addPhoto, setAddPhoto] = useState(false);
  return (
    <>
      <Header setAddPhoto={setAddPhoto} />
      <Home />
      {addPhoto && <AddPhoto setAddPhoto={setAddPhoto} addPhoto={addPhoto} />}
    </>
  );
};

export default App;
