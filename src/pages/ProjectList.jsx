import React, { useEffect, useState } from "react";
import TableContainer from '../components/table/TableContainer'
import CustomTable from '../components/table/CustomTable'
import TableBody from '../components/table/TableBody'
import TableHead from '../components/table/TableHead'
import TableHeading from '../components/table/TableHeading'
import TableData from '../components/table/TableData'
import Card from '../components/card/Card'
import CardHeading from '../components/card/CardHeading'



const tableHead =["Name","Project Slug","RERA NO.","Status"]
const ProjectList = () => {
    const [projects, setProjects] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("micrositeProjects")) || [];
    setProjects(stored);
  }, []);

  const formattedProjects = projects.map(project => [
  project.name || "—",
  project.slug || "—",
  project.rera || "—",
  project.status || "—", 
]);

  return (
    <section>
        <Card className="!p-[40px]">
            <CardHeading>Our Values Table</CardHeading>
            <TableContainer head={tableHead} data={formattedProjects}/>
        </Card>
      
    </section>
  )
}

export default ProjectList
