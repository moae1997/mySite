import { FaMediumM } from "react-icons/fa";



export default function Header() {
    return (
        <div className="headerCont">
            <div className="theM">
                <a href="https://imaginative-sopapillas-e2203b.netlify.app/"><FaMediumM  size={30} color="navy"/></a>
            </div>
            <div>
                <nav className="theNav">
                    <a href="#Work">Work</a>
                    <a href="#Contact">Contact</a>
                    <a href="https://lifebackend.com/" target="_blank">Blog</a>
                </nav>
            </div>
        </div>
    )
}