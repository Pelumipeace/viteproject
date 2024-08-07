import yes from "../../../assets/serviceYes.svg";
import no from "../../../assets/serviceNo.svg";
import { dataFforPlan, plandata } from "../../../db/plandata";
function ourContact() {
  return (
    <div className="py-[100px]">
      <div className="mt-[50px] flex justify-center">
        <div className="">
          <div className="flex">
            <p className="w-[400px]">Plans</p>
            <p className="w-[100px]">Core</p>
            <p className="w-[100px]">Premium</p>
          </div>
          <div className=" ">
            {plandata.map((item, index) => (
              <div key={index} className="flex py-[12px] odd:bg-gray-100">
                <p className="w-[400px] pl-[12px]">{item.title}</p>

                <div className="w-[100px]">
                  {item.core === true ? (
                    <div>
                      <img src={yes} alt="" />
                    </div>
                  ) : (
                    <div>
                      <img src={no} alt="" />
                    </div>
                  )}
                </div>

                <div className="w-[100px]">
                  {item.premium === true ? "yes" : "no"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-[15px] p-[20px]">
        {dataFforPlan.map((item, index) => (
          <div
            key={index}
            className="w-[350px] py-[40px] px-[20px] rounded-[12px]"
            style={{ background: item.Bg }}
          >
            <div className="h-[100px] w-[100px] flex place-items-center justify-center bg-[#edf9ff] shadow-md rounded-[50%]">
              <img
                src={item.iconimg}
                alt="icon"
                className="w-12 h-12 justify-centre"
              />
            </div>
            <h2 className="text-2xl font-[500] my-[20px]">{item.textTitle}</h2>
            <p className="font-light text-[16px] leading [30px]">
              {item.subText}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ourContact;
