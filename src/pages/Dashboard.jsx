import ProjectCard from "../components/card/ProjectCard";
import TestimonialCard from "../components/card/TestimonialCard";
import ProjectList from "../components/card/ProjectList";
import SectionsCard from "../components/card/SectionsCard";
import { IoMdHome } from "react-icons/io";
import { RiPagesFill } from "react-icons/ri";

const testimonial = [
  {name:"Ravi Sharma",date:"06-08-2025",pera:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo nostrum alias qui totam sequi aut incidunt autem molestias pariatur magnam!"},
  {name:"Kavi Sharma",date:"06-08-2025",pera:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo nostrum alias qui totam sequi aut incidunt autem molestias pariatur magnam!"},
]
const projectList = [
  "fist",
  "second",
  "third"
]
const pages=[
  {label:"Home Page",link:"/home",icon:IoMdHome},
  {label:"Blog Details Page",link:"/home",icon:IoMdHome},
  {label:"Media Centre Page",link:"/home",icon:IoMdHome},
  {label:"Home Page",link:"/home",icon:IoMdHome},
  {label:"Home Page",link:"/home",icon:IoMdHome},
  {label:"Home Page",link:"/home",icon:IoMdHome},
  {label:"Home Page",link:"/home",icon:IoMdHome},
]
const Dashboard = () => {
  return (
    <section className=" grid grid-cols-12 gap-6 body-detail">
      <div className="col-span-8">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-6"><ProjectCard/></div>
          <div className="col-span-6"><TestimonialCard data={testimonial}/></div>
        </div>
        <SectionsCard title="Page" icon={RiPagesFill} data={pages}/>
        <SectionsCard title="Other Sections" icon={RiPagesFill} data={pages}/>
      </div>
      <div className="col-span-4">
        <ProjectList data={projectList}/>
      </div>
    </section>
  );
};

export default Dashboard;
