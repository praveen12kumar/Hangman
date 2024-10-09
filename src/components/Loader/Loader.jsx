import "./loader.css";
function Loader() {
  return (
    <>
      <div class="showbox">
        <div class="loader">
            <h1>Loading....</h1>
          <svg className="circular" viewBox="25 25 50 50">
            <circle
              class="path"
              cx="50"
              cy="50"
              r="20"
              fill="none"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Loader;
