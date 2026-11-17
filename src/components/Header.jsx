import Nav from './Nav'
import logo from '../assets/logo.svg'
import navbar from '../assets/nav.svg'

export default function Header({showNav, closeNav, openNav}){
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="BDC Logo" />
            </div> 
            <div id="header-links">
                <Nav classN={`${showNav ? '' : 'noshow'}`} closeNav={closeNav} showNav={showNav}/>
                
                <button><a href="tel:(310) 556-1121">Call Now</a></button>

                <div onClick={()=>openNav()} id="nav-icon">
                    <img src={navbar} style={{width: "25px", display: 'block'}}></img>
                </div>
            </div>
            
        </header>
    )
}