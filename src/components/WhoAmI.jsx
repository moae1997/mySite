import { ReactTyped } from "react-typed";



export default function WhoAmI() {



    return (
        <div className="myIntro">
            <p>
            <ReactTyped
                                strings={[
                                    "Full-stack developer proficient in HTML, CSS, JavaScript, React, Express, and Node.js, building both static and dynamic websites from initial UI/UX design through to back-end development and database integration. I enjoy tackling complex challenges and creating user-friendly, impactful digital solutions",
                                    "I chose this path because I genuinely enjoy working with logic and problem-solving, like math, puzzles, and anything that requires a good mental workout. It's not just a job for me; it's a way to exercise my brain in a way I find satisfying. I like the challenge of taking a complex problem and breaking it down into smaller, manageable pieces until I find a solution",  
                                    "When I'm not coding, I'm usually outside. I'm also a homesteader, so I spend a lot of time tending to my garden, working on projects around my property, and generally just being connected to the land.  Being outdoors, helps me clear my head and often sparks new ideas"
                                ]}
                                typeSpeed={40}
                                cursorChar=""
                            />
            </p>
            <div className="myPics">
                <div className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="garden1.jpeg" alt="garden" />
                        </div>
                        <div className="carousel-item">
                            <img src="grape.jpeg" alt="grape vine"  />
                        </div>
                        <div className="carousel-item">
                            <img src="lots.jpeg" alt="harvest"  />
                        </div>
                        <div className="carousel-item">
                            <img src="water.jpeg" alt="watermelon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}