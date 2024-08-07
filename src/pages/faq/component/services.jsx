import { serviceDataNew } from "../../../db/services";

const Munufacials = () => {
  return (
    <div className="">
      <div className="flex justify-center">
        {serviceDataNew.map((item, i) => (
          <div
            key={i}
            className="flex-col flex items-center w-[350px] border-[2px] p-[40px]"
          >
            <img src={item.iconimg} alt="icon" className="w-12 h-12 " />

            <h2 className="text-2xl font-semibold mb-2  hover:text-red-500 text-center ">
              {item.textTitle}
            </h2>
            <p className="font-light text-center text-[14px]">
              {item.subTextTitle}
            </p>
            <button className="bg-slate-400 text-black py-2 px-4 text-lg rounded transition duration-300">
              {item.btnText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Munufacials;

