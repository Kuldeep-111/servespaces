import DynamicForm from '../form/DynamicForm'

const Overview = () => {

    const overviewConfig = [
        {
            type: "text",
            name: "order",
            label: "Section Order",
            required: true,
        },
        {
            type: "dropdown",
            name: "status",
            label: "Status",
            required: false,
            options: [
                { label: "Active", value: "Active" },
                { label: "InActive", value: "InActive" },

            ],
        },
        
    ]

    const overviewDetailsConfig = [
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
    <DynamicForm  data={overviewConfig} />
    <div className="my-4">
    <DynamicForm title="Overview Details" data={overviewDetailsConfig} />
    </div>
    </>
  )
}

export default Overview