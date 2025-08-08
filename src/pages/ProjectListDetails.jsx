import React from 'react'
import DynamicForm from '../components/form/DynamicForm'
import ProjectSidebar from '../components/card/ProjectSidebar';
import Banner from '../components/ProjectTabs/Banner';
import Overview from '../components/ProjectTabs/Overview';
import Landscapes from '../components/ProjectTabs/Landscapes';

const ProjectListDetails = () => {

    // const basicConfig = [
    //     {
    //         type: "dropdown",
    //         name: "platter",
    //         label: "Platter",
    //         required: true,
    //         options: [
    //             { label: "Faridabad", value: "sector-3" },
    //             { label: "Sohna", value: "sector-63" },
    //             { label: "Bangalore", value: "sector-142" },
    //             { label: "Gurugram", value: "sector-142" },
    //         ],
    //     },
    //     {
    //         type: "dropdown",
    //         name: "theme",
    //         label: "Theme",
    //         required: false,
    //         options: [
    //             { label: "Theme type 1", value: "sector-3" },
    //             { label: "Theme type 2", value: "sector-3" },

    //         ],
    //     },
    //     {
    //         type: "text",
    //         name: "name",
    //         label: "Project Name",
    //         required: true,
    //     },
    //     {
    //         type: "text",
    //         name: "slug",
    //         label: "Project Slug",
    //         required: false,
    //     },
    //     {
    //         type: "image",
    //         name: "thumbnail",
    //         label: "Project Image",
    //         required: false,
    //     },
    //     {
    //         type: "text",
    //         name: "project-status",
    //         label: "Project Status",
    //         required: false,
    //     },
    //     {
    //         type: "image",
    //         name: "upload-badge",
    //         label: "Upload Badge",
    //         required: false,
    //     },
    //     {
    //         type: "image",
    //         name: "upload-brochure",
    //         label: "Upload Brochure",
    //         required: false,
    //     },
    //     {
    //         type: "image",
    //         name: "alternative-image",
    //         label: "Alternate Project image",
    //         required: false,
    //     },
    //     {
    //         type: "text",
    //         name: "phone-ivr",
    //         label: "Phone IVR",
    //     },
    //     {
    //         type: "text",
    //         name: "rera-no.",
    //         label: "RERA NO.",
    //     },
    //     {
    //         type: "text",
    //         name: "meta-title",
    //         label: "Meta Title",
    //     },
    //     {
    //         type: "text",
    //         name: "meta-keyword",
    //         label: "Meta Keyword",
    //     },
    //     {
    //         type: "text",
    //         name: "meta-description",
    //         label: "Meta Description",
    //     },
    //     {
    //         type: "textarea",
    //         name: "head-script",
    //         label: "Head Script",
    //     },
    //     {
    //         type: "textarea",
    //         name: "body-script",
    //         label: "Body Script",
    //     },

    // ];



    return (
        <section>
            <div className="max-w-[90%]">
                {/* Basic  */}
                {/* <DynamicForm title="Basic Details" data={basicConfig} /> */}

                {/* Banner */}
                {/* <Banner/> */}

                {/* Overview  */}
                {/* <Overview/> */}

                {/* Landscape  */}
                <Landscapes/>
            </div>
            <ProjectSidebar />
        </section>
    )
}

export default ProjectListDetails