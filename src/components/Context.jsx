import Header from "./Header";
import { ReactTyped } from "react-typed";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Skills from "./Skills";
import Contact from "./Contact";
import MyInfo from "./MyInfo";
import WhoAmI from "./WhoAmI";
import Footer from "./Footer";



export default function Context() {

    const [selectedProject, setSelectedProject] = useState(null);


    const projects = [
        {
            "id": 1,
            "title": "Daily Goals",
            "img": "dailygoalimg.png",
            "link": "https://dailygoals-1.onrender.com/",
            "description": "This website addresses the common struggle of disorganization and procrastination by providing a simple yet effective daily goal-setting tool. Users can easily input their daily objectives and have them securely saved, allowing for consistent tracking and review. A key feature is the ability to mark goals as complete, providing a tangible sense of accomplishment and reinforcing positive habits. This project provided valuable experience integrating front-end technologies with back-end database management, utilizing React for the user interface and MySQL for data persistence, skills which I've subsequently added to my skillset"
        },
        {
            "id": 2,
            "title": "Will Bank",
            "img": "bankofwills.png",
            "link": "https://bank-of-wills.onrender.com/",
            "description": "This website provides a platform for users to create and securely store their wills. As one of my early projects, its development was a valuable learning experience, driven by extensive trial and error. Key features include a user authentication system with login and 'forgot password' functionality to ensure secure access. Recognizing the importance of user experience, I also implemented a demo section, allowing visitors to explore the website's core features and interface without requiring an account"
        },
        {
            "id": 3,
            "title": "My Portfolio",
            "img": "portfolio.png",
            "link": "https://imaginative-sopapillas-e2203b.netlify.app/",
            "description": "This portfolio serves as a dynamic showcase of my coding projects and a representation of my skills and interests. It's designed to evolve as I continue to learn and create, with new projects regularly added. Beyond simply displaying my work, this portfolio offers insights into who I am as a developer. To facilitate connection and collaboration, I've included both a direct contact section and a convenient contact form for visitors to easily reach out"
        }
    ]

    const handleClick = (proj) => {
        const project = projects.find(projs => projs.title === proj);
        setSelectedProject(project);
    }

    return (
        <div className="contextCont">
            <div className="whoAmI">
                <img src="Mo.jpeg" alt="img"/>
                <div className="iAm">
                    <div>
                        <ReactTyped
                            strings={[
                                "Hi, I am Mo!",
                                "I am a FullStack Developer",
                                "I am a homesteader",
                                "I love playing Chess",
                            ]}
                            typeSpeed={50}
                            backSpeed={70}
                            cursorChar=""
                            loop
                        />
                    </div>
                </div>
                <div className="theTree"><img src="appletree.jpeg" /></div>
            </div>
            <div className="content">
                <Header />
                <WhoAmI />
                {
                    selectedProject !== null ? 
                        <div className="selectedProjCont">
                            <div className="goBack">
                                <button onClick={()=>{setSelectedProject(null)}}><RxCross2 size={24}/></button>
                            </div>
                            <div className="selectedProj">
                                <div>
                                    <h2>{selectedProject.title}</h2>
                                    <img src={selectedProject.img} alt="img"/>
                                </div>
                                <div className="description">
                                    <p>
                                        <ReactTyped
                                            strings={[selectedProject.description]}
                                            typeSpeed={50}
                                            cursorChar=""
                                        />
                                    </p>
                                    <button><a href={selectedProject.link} target="_blank">Click me</a></button>
                                </div>
                            </div>
                        </div>
                    :
                        <div className="projectCont" id="Work">
                            {projects.map((project)=>{ return(
                                <button className="proj" onClick={()=>{handleClick(project.title)}} key={project.id}>
                                    <img src={project.img} alt="img" />
                                </button>
                            )})}
                        </div>
                }
                <div><Skills /></div>
                <div><Contact /></div>
                <div className="theFox">
                    <img src="fox.gif"/>
                </div>
                <div><MyInfo /></div>
                <div className="theGoat">
                    <img src="goat.png"/>
                </div>
                <div className="theChess">
                    <img src="king.png" />
                </div>
                <Footer />
            </div>
        </div>
    )
}