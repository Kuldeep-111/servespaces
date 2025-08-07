import React from 'react'
import TableContainer from '../components/table/TableContainer'
import CustomTable from '../components/table/CustomTable'
import TableBody from '../components/table/TableBody'
import TableHead from '../components/table/TableHead'
import TableHeading from '../components/table/TableHeading'
import TableData from '../components/table/TableData'
import Card from '../components/card/Card'
import CardHeading from '../components/card/CardHeading'



const tableHead =["Name","Project Slug","RERA NO.","Phone IVR"]

const tableData =[["servespaces","sec 03","1234567890","0987654321"]]


const ProjectList = () => {
  return (
    <section>
        <Card className="!p-[40px]">
            <CardHeading>Our Values Table</CardHeading>
        <TableContainer head={tableHead} data={tableData}/>
        </Card>
      
    </section>
  )
}

export default ProjectList
