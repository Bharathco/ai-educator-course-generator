import CategoryList from "@/app/_shared/CategoryList";
import React, { useContext } from "react";
// import Image from "next/image";
import { UserInputContext } from "@/app/_context/UserInputContext";

function SelectCategory() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleCategoryChange = (category) => {
    setUserCourseInput((prev) => ({
      ...prev,
      category: category,
    }));
  };
  return (
    <div className="px-10 md:px-20">
      <h2 className="my-5 font-semibold ">Select the course Category:</h2>
      <div className="grid grid-cols-3 gap-10 ">
        {CategoryList.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col p-5 border items-center
         rounded-xl hover:border-primary
          hover:bg-blue-50 cursor-pointer ${
            userCourseInput?.category == item.name && "border-primary bg-blue-50"
          }`}
            onClick={() => handleCategoryChange(item.name)}
          >
            {/* <Image src={item.icon} width={50} height={50} alt="image" /> */}
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectCategory;
