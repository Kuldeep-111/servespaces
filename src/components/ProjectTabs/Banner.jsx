import { useEffect, useState } from 'react';
import Card from '../card/Card'
import CardHeading from '../card/CardHeading'
import DynamicForm from '../form/DynamicForm'
import TableContainer from '../table/TableContainer'

const tableHead = ["Type", "Alternative Image", "Alt Text"];

const Banner = () => {

    const bannerConfig = [
        {
            type: "dropdown",
            name: "type",
            label: "File type",
            required: true,
            options: [
                { label: "Image", value: "image" },
                { label: "Iframe Link", value: "Iframe Link" },
                { label: "Video", value: "Video" },
                { label: "JSON", value: "JSON" },
            ],
        },
    ]

    const dummyData = [
       {type : "image", altImg : "image", altText : "abc"}
    ];

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // const stored = JSON.parse(localStorage.getItem("micrositeProjects")) || [];
        // setProjects(stored);
        setProjects(dummyData);
    }, []);

    const formattedProjects = projects.map(project => [
        project.type || "—",
        project.altImg || "—",
        project.altText || "—",
    ]);

    return (
        <>
            <DynamicForm title="UPLOAD BANNER" data={bannerConfig} />

            {/* Banner items */}
            <div>
                <Card className="my-[40px]">
                    <CardHeading>Banner Items</CardHeading>
                    <TableContainer head={tableHead} data={formattedProjects} />
                </Card>
            </div>
        </>
    )
}

export default Banner