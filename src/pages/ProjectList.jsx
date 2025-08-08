import React, { useEffect, useState } from "react";
import TableContainer from '../components/table/TableContainer';
import Card from '../components/card/Card';
import CardHeading from '../components/card/CardHeading';

const tableHead = ["Name", "Project Slug", "RERA NO.", "Status"];

const ProjectList = () => {

  // const [projects, setProjects] = useState([]);

    const dummyProjects = [
        { name: "Project A", slug: "proj-alpha", rera: "RERA-001", status: "Active" },
        { name: "Project B", slug: "proj-beta", rera: "RERA-002", status: "Inactive" },
        { name: "Project C", slug: "proj-gamma", rera: "RERA-003", status: "Active" },
        { name: "Project D", slug: "proj-delta", rera: "RERA-004", status: "Inactive" }
    ];

    const [projects, setProjects] = useState([]);

    useEffect(() => {
      // const stored = JSON.parse(localStorage.getItem("micrositeProjects")) || [];
      // setProjects(stored);
        setProjects(dummyProjects);
    }, []);

    const formattedProjects = projects.map(project => [
        project.name || "—",
        project.slug || "—",
        project.rera || "—",
        project.status || "—"
    ]);

    return (
        <section>
            <Card className="!p-[40px]">
                <CardHeading>Our Projects Table</CardHeading>
                <TableContainer head={tableHead} data={formattedProjects} />
            </Card>
        </section>
    );
};

export default ProjectList;
