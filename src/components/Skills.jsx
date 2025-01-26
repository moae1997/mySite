import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";





export default function Skills() {
    return (
        <div className="skillList">
            <FaReact size={50} color="lightblue"/>
            <IoLogoJavascript size={50}  color="orange"/>
            <FaNodeJs size={50} color="darkgreen"/>
            <SiExpress size={50} />
            <SiMongodb size={50} color="green"/>
            <SiMysql size={50} />
            <FaGitAlt size={50} color="orange"/>
        </div>
    )
}