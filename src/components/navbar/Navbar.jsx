import '../navbar/Navbar.scss'
import linkedin from '../../assets/linkedin_theme.png'
import github from '../../assets/github.png'


const Navbar = () => {
  return (
    <div className='navbar'>
        Navbar
        {/*SIDEBAR */}

        <div className="wrapper">
            <span>ob_</span>
            <div className="social">
                <a href="https://www.linkedin.com/in/oindrila-b/">
                    <img src={linkedin}/>
                </a>
                <a href="https://github.com/oindrila-b">
                    <img src={github}/>
                </a>

            </div>
        </div>
        </div>
  )
}

export default Navbar