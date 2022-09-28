import Photo from "../components/Photo";

const Home = (props) => {
  const { photo, setD_id } = props;
  const { photos, setPhotos } = props.photos;

  /* ----------- Elems ----------- */

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
        <div className=" w-10/12">{c}</div>
      </div>
      <div
        id="col-2"
        className=" w-full my-5 lg:w-1/3 flex flex-col items-center"
      >
        <div className=" w-10/12">{d}</div>
      </div>
      <div
        id="col-3"
        className=" w-full my-5 lg:w-1/3 flex flex-col items-center"
      >
        <div className="w-10/12">
          {photos.length <= 3
            ? photosElems[2]
            : photosElems.slice(2 * n, 3 * n)}
        </div>
      </div>
    </main>
  );
};

export default Home;
