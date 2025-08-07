import React from "react";
import Card from "../components/card/Card";
import DynamicForm from "../components/form/DynamicForm";
import { toast } from 'react-toastify';

const fieldConfig = [
  {
    type: "dropdown",
    name: "platter",
    label: "Platter",
    required: true,
    options: [
      { label: "ServeSpaces 03", value: "sector-3" },
      { label: "ServeSpaces 63", value: "sector-63" },
      { label: "ServeSpaces 142", value: "sector-142" },
    ],
  },
  {
    type: "text",
    name: "status",
    label: "Project Status",
    required: true,
  },
  {
    type: "text",
    name: "name",
    label: "Project Name",
    required: true,
  },
  {
    type: "text",
    name: "slug",
    label: "Project Slug",
    required: true,
  },
  {
    type: "image",
    name: "thumbnail",
    label: "Project Image",
    required: false,
  },
  {
    type: "text",
    name: "alt-tag",
    label: "Image Alt Tag",
    required: true,
  },
  {
    type: "text",
    name: "rera",
    label: "Rera No.",
    required: true,
  },
  {
    type: "text",
    name: "meta-title",
    label: "Meta Title",
  },
  {
    type: "text",
    name: "meta-keyword",
    label: "Meta Keyword",
  },
  {
    type: "text",
    name: "meta-description",
    label: "Meta Description",
  },
  {
    type: "textarea",
    name: "head-script",
    label: "Head Script",
  },
  {
    type: "textarea",
    name: "body-script",
    label: "Body Script",
  },
  // {
  //   type: "video",
  //   name: "introVideo",
  //   label: "Upload Intro Video",
  //   required: false,
  // },
];

const Microsite = () => {

const handleFormSubmit = (data) => {
  try {
    const existingProjects = JSON.parse(localStorage.getItem("micrositeProjects")) || [];
    const newProject = { ...data, id: Date.now() }; // give each project a unique ID

    const updatedProjects = [...existingProjects, newProject];
    localStorage.setItem("micrositeProjects", JSON.stringify(updatedProjects));

    toast.success("Project added successfully! 🎉");
  } catch (error) {
    console.error("Error saving project:", error);
    toast.error("Failed to save project 😢");
  }
};


  return (
    <section>
      <DynamicForm title="Basic Details" data={fieldConfig} onSubmit={handleFormSubmit}/>
    </section>
  );
};

export default Microsite;
