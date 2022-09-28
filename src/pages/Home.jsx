import Photo from "../components/Photo";

const Home = (props) => {
  /* ----------- States ----------- */
  const { photo, setD_id } = props;
  const { photos, setPhotos } = props.photos;

  /* ----------- Effects ----------- */

  /* ---------------------- */

  const photosElems = photos.map((p) => {
    return (
      <Photo
        key={p.id}
        label={p.label}
        imgURL={p.imgURL}
        id={p.id}
        photo={photo}
        setD_id={setD_id}
      />
    );
  });

  /* -------------------------------------------- */
  const n = Math.floor(photosElems.length / 3);

  let c, d;

  if (photos.length <= 3) {
    c = photosElems[0];
  } else {
    c = photosElems.slice(0, n);
    if (photos.length % 3 != 0) c.push(photosElems.slice(3 * n, 3 * n + 1));
  }

  if (photos.length <= 3) {
    d = photosElems[1];
  } else {
    d = photosElems.slice(n, 2 * n);
    if (photos.length % 3 != 0) d.push(photosElems.slice(3 * n + 1));
  }
  return (
    <main className="w-5/6 mx-auto mt-12  flex flex-wrap flex-col items-center lg:flex-row lg:items-start">
      <div
        id="col-1"
        className=" w-full my-5 lg:w-1/3 flex flex-col items-center"
      >
        <div className=" w-10/12">
          {/* {photos.length <= 3 ? photosElems[0] : photosElems.slice(0, n)} */}
          {c}
        </div>
      </div>
      <div
        id="col-2"
        className=" w-full my-5 lg:w-1/3 flex flex-col items-center"
      >
        <div className=" w-10/12">
          {/* <Photo />
          <Photo imgURL="https://img.freepik.com/free-vector/mandala-illustration_53876-81806.jpg?w=996&t=st=1664303290~exp=1664303890~hmac=566899483ef62cd004cb041811139892f4e023db1b8f4f83e0ae8adf5260a8af" /> */}
          {/* {photos.length <= 3 ? photosElems[1] : photosElems.slice(n, 2 * n)} */}
          {d}
        </div>
      </div>
      <div
        id="col-3"
        className=" w-full my-5 lg:w-1/3 flex flex-col items-center"
      >
        <div className="w-10/12">
          {photos.length <= 3
            ? photosElems[2]
            : photosElems.slice(2 * n, 3 * n)}

          {/* <Photo imgURL="https://thumbs.dreamstime.com/b/vertical-panorama-country-road-9905521.jpg" />
          <Photo imgURL="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> */}
        </div>
      </div>
    </main>
  );
};

export default Home;

/**
 * const Home = () => {
  return (
    <main className="w-5/6 mx-auto mt-12 py-5 flex flex-col justify-center md:grid md:grid-cols-2  lg:grid-cols-3 gap-11">
      <Photo imgURL="https://img.freepik.com/free-vector/mandala-illustration_53876-81806.jpg?w=996&t=st=1664303290~exp=1664303890~hmac=566899483ef62cd004cb041811139892f4e023db1b8f4f83e0ae8adf5260a8af" />
      <Photo imgURL="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <Photo />
      <Photo />
    </main>
  );
};
 */
