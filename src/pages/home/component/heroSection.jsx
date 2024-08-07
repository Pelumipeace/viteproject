import backgroundImage from "../../../assets/barberr.jpg";
import { dataType } from "../../../db/hero.js";

function HeroSection() {
  return (
    <div>
      <div
        className="flex justify-center items-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {dataType.map((data, index) => (
          <div
            key={index}
            className="bg-black bg-opacity-50 p-5 rounded-lg text-center text-white"
          >
            <h2 className="text-6xl m-0">{data.text}</h2>
            <p className="text-2xl my-4">{data.subTitle}</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 text-lg rounded transition duration-300">
              {data.btnText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
