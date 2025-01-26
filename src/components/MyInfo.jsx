import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoIosContact } from "react-icons/io";




export default function MyInfo() {
    return (
        <div className="myInfoCont" id="Contact">
            <table>
                <tbody>
                    <tr>
                        <td><IoIosContact size={50} color="navy"/></td>
                        <td><p>Mohamed Mahgoub</p></td>
                    </tr>
                    <tr>
                        <td><FaLocationDot size={50} color="darkgreen"/></td>
                        <td><p>Martinsburg WV</p></td>
                    </tr>
                    <tr>
                        <td><MdOutlineEmail  size={50} color="red"/></td>
                        <td><p>mohmah619@gmail.com</p></td>
                    </tr>
                    <tr>
                        <td><IoIosPhonePortrait size={50} color="gray"/></td>
                        <td><p>(571) 524-0618</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
} 

