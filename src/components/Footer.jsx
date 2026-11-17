import Logo from '../assets/logo.svg'

export default function Footer(){
    return(
        <footer>
            <img src={Logo} alt="Company Logo" />

            <div id="footer-grid">
                <div >
                <div>
                    <div><h5>Visit</h5></div>
                    <a><p>308 1/2 S Beverly Dr, Beverly Hills, CA 90212</p></a>
                    

                </div>
                <div>
                    <div><h5>Call</h5></div>
                    <a><p>(310) 556-1121</p></a>
                    

                </div>
            </div>
            <div id="footer-links">
                <h5>On this page</h5>
                <ul>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href="#find-us">Find us</a></li>
                </ul>
            </div>
            </div>

            <div>
                <h5 style={{marginTop: '1rem'}}>Opening Hours</h5>
                <p>Mon to Fri 7am to 6pm, Sat 8am to 5pm, closed Sundays</p>
            </div>

        </footer>
    )
}