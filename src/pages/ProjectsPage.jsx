import "../styles/projectPage.css";
import ProjectSlides from "../components/ProjectSlides";

const projectList = [
  { name: "Snake Xenzia", content: true },
  { name: "Task Manager (To-do extension)", content: true },
  { name: "Image Gallery with react.js", content: true },
  { name: "Password Manager with python", content: true },
];

const smallProjectList = [
  { name: "Email-password Validator", content: true },
  { name: "Ad Banner", content: true },
  { name: "Search Engine", content: true },
];

const ProjectsPage = (props) => {
  return (
    <section className="md:w-screen md:h-screen">
      <div className="flex flex-col py-5 px-10 gap-5 md:px-40 md:pt-20 md:gap-15">
        <div className="flex items-center justify-between">
          <h2 className="page-tag text-2xl text-nowrap md:text-4xl">Some of My Projects</h2>
          <h4 className='hidden text-[8px] md:text-[10px]'>Last Updated: {props.date}</h4>
        </div>
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="ptag md:w-1/3 md:text-3xl text-gray-900 md:text-gray-600">
            <div className="flex flex-col gap-4 md:gap-6">
              {projectList.map((project) => {
                return (
                  <>
                    <h3>{project.name}</h3>
                    <hr />
                  </>
                );
              })}
            </div>
            <h3 className="py-6 md:py-8">Small Projects </h3>
            <div className="ptag pl-10 flex flex-col gap-4 md:gap-6">
              {smallProjectList.map((project) => {
                return (
                  <>
                    <h3>{project.name}</h3>
                    <hr />
                  </>
                );
              })}
            </div>
          </div>
          <div className=' md:w-[525px] md:h-[400px] md:-translate-x-23'>
            <ProjectSlides />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
