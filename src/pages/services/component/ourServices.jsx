import { serviceData } from "../../../db/service";

const UpperBodyWaxing = () => {
  return (
    <div className="">
      <h1 className="text-6xl font-serif text-center">
        {serviceData.sectionTitle}
      </h1>
      <h2 className="text-[16px] mt-4 font-serif max-w-[350px] mx-auto text-center tracking-wide leading-[24px]">
        {serviceData.sectionSubTitle}
      </h2>

      <div className="flex justify-center items-center mx-[45px] pt-[50px] bg-white">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={serviceData.firstData.imgA}
            alt="Upper Body Waxing"
            className="md:w-1/3 w-full object-cover"
          />
          <div className="text-center md:text-left p-4 w-full">
            <div className="flex justify-center md:justify-center items-center mb-4">
              <img
                src={serviceData.firstData.iconImg}
                alt="Icon"
                className="w-12 h-12 "
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2  hover:text-red-500 text-center">
              {serviceData.firstData.title}
            </h2>
            <p className="text-gray-700 font-light text-[14px]">
              {serviceData.firstData.subTitle}
            </p>
          </div>
          <img
            src={serviceData.firstData.imgB}
            alt="Upper Body Waxing"
            className="md:w-1/3 w-full object-cover"
          />
        </div>
      </div>

      <div className="flex justify-center items-center mx-[45px] bg-white">
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left p-4 w-full">
            <div className="flex justify-center md:justify-center items-center mb-4">
              <img
                src={serviceData.secondData.iconimgA}
                alt="Icon"
                className="w-12 h-12 "
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2  hover:text-red-500 text-center">
              {serviceData.secondData.textTitleA}
            </h2>
            <p className="text-gray-700 font-light text-[14px]">
              {serviceData.secondData.subTextA}
            </p>
          </div>

          <img
            src={serviceData.secondData.imgC}
            alt="Upper Body Waxing"
            className="md:w-1/3 w-full object-cover"
          />

          <div className="text-center md:text-left p-4 w-full">
            <div className="flex justify-center md:justify-center items-center mb-4">
              <img
                src={serviceData.secondData.iconImgB}
                alt="Icon"
                className="w-12 h-12 "
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2  hover:text-red-500 text-center">
              {serviceData.secondData.textTitleB}
            </h2>
            <p className="text-gray-700 font-light text-[14px]">
              {serviceData.secondData.subTextB}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperBodyWaxing;
