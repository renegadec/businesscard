import { IoMdMail } from "react-icons/io";
import { GrLinkedin } from "react-icons/gr";
import profilePhoto from '../assets/me.png';

export default function MainComponent() {
    return (
        <main className='main-component'>
            <img src={profilePhoto} alt='profile photo' className='profile-photo' />
            <div className='title-container'>
                <h1>Confidence Nyirenda</h1>
                <p>Fullstack Developer</p>
                <p>africoiner.com</p>
            </div>
            <div className='button-container'>
                <a href="mailto:cn@tswaanda.com">
                    <IoMdMail /> Email
                </a>
                <a href="https://www.linkedin.com/in/confidencenyirenda/" target="_blank">
                   <GrLinkedin /> LinkedIn
                </a>
            </div>
            <div className='about-container'>
                <h2>About</h2>
                <p>I am a fullstack developer with a passion for building web applications that are both functional and aesthetically pleasing. I have particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div> 
            <div className='interests-container'>
                <h2>Interests</h2>
                <p>Web Development, AI, Machine Learning, Blockchain, Cryptocurrency, Golf, Traveling, Reading, Writing, and Cooking.</p>
            </div>
        </main>
    )
}