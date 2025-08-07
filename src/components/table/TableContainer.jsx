import React from "react";
import CustomTable from "./CustomTable";
import TableHead from "./TableHead";
import TableHeading from "./TableHeading";
import TableBody from "./TableBody";
import TableData from "./TableData";
import TableRow from "./TableRow";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Pagination from "./Pagination";

const TableContainer = ({ head, data }) => {
  return (
    <div className="overflow-auto">
      <CustomTable>
        <TableHead>
          <TableRow>
          <TableHeading>S.No.</TableHeading>
            {head?.map((item, i) => (
              <TableHeading key={i}>{item}</TableHeading>
            ))}
            <TableHeading>Action</TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, i) => (
            <TableRow key={i}>
              <TableData>{i + 1}</TableData> 
              {row.map((cell, j) => (
                <TableData key={j}>{cell}</TableData>
              ))}
              <TableData>
                <div className="flex items-center justify-center gap-[10px] ">
                <button className="text-primary text-[20px]"><MdEdit/></button>
                <button className="text-secondary text-[20px]"><MdDelete/></button>
                </div>
              </TableData>
            </TableRow>
          ))}
        </TableBody>
      </CustomTable>
      <Pagination/>
      </div>
  );
};

export default TableContainer;
