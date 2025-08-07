import React from "react";
import Card from "./Card";
import CardHeading from "./CardHeading";
import { Link } from "react-router-dom";

const SectionsCard = ({ title, icon, data }) => {
  return (
    <section className="py-[20px]">
      <Card>
        <CardHeading icon={icon}> {title}</CardHeading>
        <div className="grid grid-cols-12 gap-3">
        {data.map((item, i) => {
          const Icon = item?.icon;
          return (
            <Card key={i} className="!py-[15px] !px-[15px] col-span-3">
              <div className="flex justify-start items-center gap-[10px]">
                <div className="border flex-none basis-[70px] border-[#45464f] rounded-full w-[70px] h-[70px] flex items-center justify-center">
                  {Icon && <Icon className="text-primary text-[40px]" />}
                </div>
                <div>
                  <p className="leading-[20px]">{item?.label}</p>
                  <Link to={item?.link} ><p className="text-secondary text-[12px]">View Details</p></Link>
                </div>
              </div>
            </Card>
          );
        })}
        </div>
      </Card>
    </section>
  );
};

export default SectionsCard;
