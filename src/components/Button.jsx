const Button = ({ text, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      type="button"
      className=" rounded-xl border bg-green-500 py-3 px-3 text-sm font-bold leading-5 text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {text}
    </button>
  );
};

export default Button;
