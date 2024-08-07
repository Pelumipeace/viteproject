import { useState } from "react";
function AboutPage() {
  const [formaData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <div className="flex flex-col gap-y-[15px] my-[30px] mx-auto w-[440px] border-[2px] border-gray-800 p-4 ">
        <h1> Fill Out Form</h1>
        <form action="" className="flex flex-col gap-2">
          {/* Firstname */}
          <div name={formaData?.firstName} className="flex flex-col gap-5">
            <label>first Name</label>
            <input name="firstName" onChange={(e) => handleChange(e)} />
          </div>

          {/* LastName */}
          <div name={formaData?.lastName} className="flex flex-col gap-5"></div>
          <label>last Name</label>
          <input name="lastName" onChange={(e) => handleChange(e)} />

          <div name={formaData?.email} className="flex flex-col gap-5"></div>
          <label>email</label>
          <input name="email" onChange={(e) => handleChange(e)} />

          <div
            name={formaData?.phoneNumber}
            className="flex flex-col gap-5"
          ></div>
          <label>phone Number</label>
          <input name="phoneNumber" onChange={(e) => handleChange(e)} />
        </form>
      </div>
      <p className="w-full text-[12px] text-center">
        {JSON.stringify(formaData)}
      </p>
    </>
  );
}

export default AboutPage;
