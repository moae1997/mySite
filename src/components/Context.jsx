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
            "description": "A responsive website to solve the problem of not getting things done. Typing up a goal with allow a user not to forget what they have set to be completed. Also there is a feature to cross the goal out once completed which gives an incentive to complete the goal"
        },
        {
            "id": 2,
            "title": "Will Bank",
            "img": "bankofwills.png",
            "link": "https://bank-of-wills.onrender.com/",
            "description": "I have crafted a user-friendly website that allows individuals to submit their wills securely Designed an intuitive interface with a unique DEMO on the login page that showcases the site's features without requiring login details"
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
                <div><MyInfo /></div>
                <div className="theFox">
                    <img src="fox.gif"/>
                </div>
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