import React from "react";
import Card from "./Card";
import CardHeading from "./CardHeading";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";

const ProjectCard = () => {
  return (
    <Card>
      <CardHeading icon={IoMdHome}> Total Project</CardHeading>
      <div className="flex gap-[15px] 2xl:gap-[20px]">
        <h1 className="text-primary text-[40px] 2xl:text-[50px] font-josefin">07</h1>
        <div>
          <p className="text-white font-robotoLight text-[20px] 2xl:text-[24px] tracking-[0.8px] border-b border-[#45464f] pb-[12px]">
            No. of Project
          </p>

          <div className="flex justify-start gap-[10px] mt-[20px] w-full">
            <Link to="/project-list" className="bg-secondary text-[12px] 2xl:text-[15px] flex justify-center px-[25px] 2xl:px-[30px] py-[9px] rounded-[50px] tracking-[0.5px] font-robotoLight text-white">
            View Details
          </Link>

          <Link to="/microsite" className="border border-secondary group hover:bg-secondary  text-[10px] 2xl:text-[12px] flex justify-center items-center gap-[5px] px-[15px] 2xl:px-[20px] py-[9px] rounded-[50px] tracking-[0.5px] font-robotoLight text-white">
            <IoAddCircleOutline className="text-secondary group-hover:text-white text-[22px]"/> New Project
          </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
