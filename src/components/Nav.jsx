export default function Nav({classN, closeNav, showNav}) {
    return (
        <nav className={classN}>
            <div id="mobile-nav-close" onClick={()=>{closeNav()}}>X</div>
            <ul>
                <li><a href="/#services">Services</a></li>
                <li><a href="/#reviews">Reviews</a></li>
                <li><a href="/#find-us">Find Us</a></li>
            </ul>
        </nav>
    );
}