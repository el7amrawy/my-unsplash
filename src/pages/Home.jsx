import Photo from "../components/Photo";

const Home = (props) => {
  const { photo } = props;

  return (
    <main className="w-5/6 mx-auto mt-12  flex flex-wrap flex-col items-center lg:flex-row lg:items-start">
      <div className=" w-full my-5 lg:w-1/3 flex flex-col items-center">
        <div className=" w-10/12">
          <Photo imgURL="https://img.freepik.com/free-vector/mandala-illustration_53876-81806.jpg?w=996&t=st=1664303290~exp=1664303890~hmac=566899483ef62cd004cb041811139892f4e023db1b8f4f83e0ae8adf5260a8af" />
          <Photo
            imgURL="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            photo={photo}
          />
        </div>
      </div>
      <div className=" w-full my-5 lg:w-1/3 flex flex-col items-center">
        <div className=" w-10/12">
          <Photo />
          <Photo imgURL="https://img.freepik.com/free-vector/mandala-illustration_53876-81806.jpg?w=996&t=st=1664303290~exp=1664303890~hmac=566899483ef62cd004cb041811139892f4e023db1b8f4f83e0ae8adf5260a8af" />
        </div>
      </div>
      <div className=" w-full my-5 lg:w-1/3 flex flex-col items-center">
        <div className="w-10/12">
          <Photo imgURL="https://thumbs.dreamstime.com/b/vertical-panorama-country-road-9905521.jpg" />
          <Photo imgURL="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
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
