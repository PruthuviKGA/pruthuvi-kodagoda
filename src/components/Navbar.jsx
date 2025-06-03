// import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
  <nav className="mb-5 flex item-center justify-between py-6"> 
    <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo"/> */}
        <div className="mx-2 text-2xl font-bold text-white">
          &lt; PK /&gt;
        </div>
    </div>
    <div className="m-8 flex item-center justify-center gap-4 text-2xl">
     <a 
        href="https://www.linkedin.com/in/pruthuvi-kodagoda-bbb885231?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5dsE1HuZSAC8aOsgHD%2FtEQ%3D%3D" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-blue-500 transition-colors duration-300"
      >
        <FaLinkedin />
      </a>
      <a 
        href="https://github.com/PruthuviKGA" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-gray-400 transition-colors duration-300"
      >
        <FaGithub />
      </a>
      <a 
        href="https://www.instagram.com/pruthuvi_d99?igsh=YjRmcXpwMnRwd2s5" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-pink-500 transition-colors duration-300"
      >
        <FaInstagram />
      </a>
      <a 
        href="https://www.facebook.com/share/1APtCicj2s/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition-colors duration-300"
      >
        <FaFacebook />
      </a>
    </div>
  </nav>
  );
}

export default Navbar
