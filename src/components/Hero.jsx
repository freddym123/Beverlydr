import HeroImg from '../assets/hero.jpg'

export default function Hero(){
    return(
        <section className="hero">
            <div>
                <p>Local Beverly Hills Cleaners</p>
                <h1>Expert Cleaning and Alterations You Can Trust</h1>
                <button className="call-to-action visit"><a href="https://www.google.com/maps/dir/?api=1&destination=308+1%2F2+S+Beverly+Dr%2C+Beverly+Hills%2C+CA+90212" target="_blank" rel="noopener noreferrer">Visit the store</a></button>
            </div>
            <div className="hero-img">
                <img src={HeroImg} alt="Hero Image" />
            </div>
        </section>
    )
}