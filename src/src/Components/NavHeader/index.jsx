import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell, faUserCircle} from '@fortawesome/free-regular-svg-icons';

const NavHeader = () => (
    <div className="absolute left-0 right-0 top-0 bottom-0 bg-white shadow-custom h-20">
       <a style={{ left:"2.92%", right:"86.46%", top:"25%", bottom:"26.67%", fontSize: 24, lineHeight: '28px', }}
        className="absolute font-roboto not-italic font-black text-right text-customBlue" href="/#">
            Agromall
        </a>
        <FontAwesomeIcon
            style={{ left:"20.56%", right:"78.61%", top:"43.33%", bottom:"36.67%", fontSize: 14, lineHeight: '19px'}} 
            className="absolute text-sm text-custom-grey-800"
            icon={faSearch}/>
        <input 
            style={{ left: "22.5%", right: "73.54%", top: "38.33%", bottom: "31.67%", fontSize: 12, lineHeight: '16px'}}
            className="absolute text-custom-grey-800"
            placeholder="search..."/>
        <a
            style={{ left: "67.78%", right: "28.31%", top: "38.33%", bottom: "36.67%", fontSize: 14, lineHeight: '19px'}} 
            className="absolute text-custom-grey-800"
            href="/#">
            Support
        </a>
        <a
            style={{ left: "74.24%", right: "23.89%", top: "38.33%", bottom: "36.67%", fontSize: 14, lineHeight: '19px'}} 
            className="absolute text-custom-grey-800"
            href="/#">
            FAQ
        </a>
        <div style={{left: "80.01%", right: "18.98%", top: "41.16%", bottom: "38.91%"}} className="absolute">
        <p style={{ top:-5, left: 5, width: 15, height: 15, zIndex: 20, fontSize: 10 }} className="absolute bg-customBlue rounded-full text-center text-xs text-white">8</p>
        <FontAwesomeIcon
            style={{ top:0, fontSize: 20, lineHeight: '19px'}} 
            className="absolute text-custom-grey-800"
            icon={faBell}/>
        </div>
        <div
            style={{ left: "84.72%", right: "8.96%", top: "25", bottom: "25%" }} 
            className="absolute font-OpenSans text-custom-grey-800 w-24"
        >
            <p style={{ fontSize: 10, lineHeight: '13px' }} className="w-full text-right">Hello</p>
            <p style={{ fontSize: 14, lineHeight: '19px' }} className="w-full text-right">Oluwaleke Ojo</p>
        </div>
        <div style={{ left: "91.67%", right: "5.56%", top: "30%", bottom: "5%" }} className="rounded-full absolute">
        <FontAwesomeIcon
            style={{  fontSize: 30, lineHeight: '19px'}} 
            className="absolute text-custom-grey-800"
            icon={faUserCircle}/>
        </div>
        
    </div>
)

export default NavHeader;