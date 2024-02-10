import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'

function Footer () {
    return (
        <footer className="fixed-bottom nav justify-content-center">
            <a href='https://github.com/cstasney' className='icon'><FaGithub/></a>
            <a href='mailto:cstasney07@gmail.com' className='icon'><FaEnvelope/></a>
            <a href='https://www.linkedin.com/in/christopher-stasney-85956a87/' className='icon'><FaLinkedin/></a>
        </footer>
    )
}

export default Footer;