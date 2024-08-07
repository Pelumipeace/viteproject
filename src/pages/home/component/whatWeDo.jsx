import backgroundImage from "../../../assets/barberr.jpg";
import { whatWeDoData } from "../../../db/whatWeDo";
// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const VisionMission = () => {
  return (
    <div>
      {/* <div>
        // {data.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div> */}

      <div className="mt-[70px] px-[40px] flex flex-col gap-y-[60px]">
        {/* {whatWeDoData.map((data, index) => ())} */}
        {whatWeDoData.map((data, index) => (
          <div key={index} className="flex even:flex-row-reverse">
            <div className="w-[55%] md:mr-4">
              <img
                src={backgroundImage}
                alt="Vision"
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>
            <div className="p-4 my-auto h-full w-[45%]">
              <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
              <h3 className="text-lg font-semibold mb-2">{data.subTitle}</h3>
              <p className="text-base">{data.description}</p>
              {data.btnText && (
                <button className="mt-4 text-2xl font-bold p-2 bg-white border-2 border-gray-300 rounded-md hover:bg-gray-100">
                  {data.btnText}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisionMission;
