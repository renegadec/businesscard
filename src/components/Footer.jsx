import { FaXTwitter, FaSquareFacebook, FaSquareInstagram, FaSquareGithub  } from "react-icons/fa6";


export default function Footer() {
    return (
        <div className="footer"> 
            <a href="https://x.com/crnyirenda" target="_blank">
                <FaXTwitter />
            </a>
            <a href="https://www.facebook.com/africoiner" target="_blank">
                <FaSquareFacebook />
            </a>
            <a href="https://www.instagram.com/africoiner/" target="_blank">
                <FaSquareInstagram />
            </a>
            <a href="https://github.com/renegadec/" target="_blank">
                <FaSquareGithub />
            </a>
        </div>
    )
}