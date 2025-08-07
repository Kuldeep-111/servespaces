import React from "react";
import Card from "./Card";
import CardHeading from "./CardHeading";
import { FaAddressCard } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";

const TestimonialCard = ({data}) => {
  return (
    <Card>
        <CardHeading icon={FaAddressCard} className="!mb-[5px]">Testimonial</CardHeading>
      <div className="h-[122px] overflow-auto ">
        {data.map((item,i) => (
        <div key={i} className="flex gap-[15px] 2xl:gap-[20px] relative mb-[10px] pb-[20px] pt-[20px] border-b border-[#45464f]">
        <p className="absolute right-[10px] top-[-4px] flex items-center gap-[5px] text-yellow"><FaCalendar className="text-white"/>  {item?.date}</p>
          <div>
            {" "}
            <h1 className="bg-primary rounded-[50px] p-[10px] font-roboto text-[40px] block text-center text-[#181a26] w-[80px] h-[80px]">
              {item?.name?.[0]}
            </h1>
          </div>
          <div>
            <p className="text-white font-robotoLight text-[20px] 2xl:text-[24px] tracking-[0.8px] border-b border-[#45464f] pb-[12px]">
              {item?.name}
            </p>

            <div className="flex justify-start gap-[10px] mt-[10px] w-full">
              <p className="text-[#f7f7f7] font-roboto tracking-[0.7px] leading-[26px]">
                {item?.pera}
              </p>
            </div>
          </div>
        </div>

        ))}
      </div>
    </Card>
  );
};

export default TestimonialCard;
