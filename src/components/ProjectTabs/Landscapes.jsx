import DynamicForm from "../form/DynamicForm"

const Landscapes = () => {

        const landscapeConfig = [
        {
            type: "text",
            name: "heading",
            label: "Heading",
            required: true,
        },
        {
            type: "text",
            name: "subheading",
            label: "Sub Heading",
            required: false,           
        },
         {
            type: "textarea",
            name: "description",
            label: "Description",
        },
    ]

    const LandscapeImgConfig = [
        {
            type: "text",
            name: "heading",
            label: "Heading",
            required: true,
        },
        {
            type: "text",
            name: "subheading",
            label: "Sub Heading",
            required: true,
        },
        {
            type: "text",
            name: "additonalheading",
            label: "Additional Heading",
            required: true,
        },
        {
            type: "text",
            name: "sizesheading",
            label: "Sizes Heading",
            required: true,
        },
        {
            type: "text",
            name: "sizes",
            label: "Sizes",
            required: true,
        },
        {
            type: "text",
            name: "yturl",
            label: "Youtube URL",
            required: true,
        },
         {
            type: "textarea",
            name: "description",
            label: "Description",
        },
        
        
    ]

  return (
     <>
    <DynamicForm title="landscape"  data={landscapeConfig} />
    <div className="my-4">
    <DynamicForm title="add landscape images" data={LandscapeImgConfig} />
    </div>
    </>
  )
}

export default Landscapes