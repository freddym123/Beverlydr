import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'
import Review from './components/Review'
import Footer from './components/Footer'


function App() {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="App who">
      <Header showNav={showNav} closeNav={()=>{setShowNav(false)}} openNav={()=>{setShowNav(true)}}/>
      <Hero/>
      <Section title="Why Choose Us" subtitle="Choosing a cleaner comes down to three things: fast service, convenient pickup and drop-off, and fair pricing. That's exactly what we provide.">
        <div className="reasonGrid">
          <div>
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
<rect width="100" height="100" fill="url(#pattern0_121_50)"/>
<defs>
<pattern id="pattern0_121_50" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_121_50" transform="scale(0.01)"/>
</pattern>
<image id="image0_121_50" width="100" height="100" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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"/>
</defs>
</svg>


            <h3>Fast Service</h3>
            <p>Nothing sits waiting: most items are finished quickly, and you get a collection date at the counter.</p>
          </div>
          <div>
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
<rect width="100" height="100" fill="url(#pattern0_121_48)"/>
<defs>
<pattern id="pattern0_121_48" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_121_48" transform="scale(0.01)"/>
</pattern>
<image id="image0_121_48" width="100" height="100" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACdUlEQVR4nO2dwW4aMRRF/R3167KryIZ+ho3U72wWFfmqplVUqY2SdSuTuBKZuGNKhnm2z5HuJvCi+3wYELDAmAXY7uwHF+SLD3Lvo/w+SpB7F+R6sxNrlLJtvP9kGR/tj8kiL+KC3Glcatt4/wmHR9bMMn+XivazUYZrvP+EVy/z8kI/jTJ84/0nvCx96u1r03r/7hbyjffvbiHfeP/uFvIa+1/t7MYHe+OD/Vb7AlfK3ELaY966f7C36WzTGVfLcFEe1C4UGxfynHTGVVIOV0YDC/nGhTzF7muEnP00hRCpiovyfV7ITKFz58/9/0uzdP+T5xEiCNGER4gufG9CXLS/Wv5wzi3c//JCgly3/PG1W7j/xYWkL23SlzezywS5+/jp/TujjM3C/S8uJJGKpkfPa5d/+lu6TaOMS/RfRQiUQYgyEKIMhCgDIcpASG9CiCwahERdQUjUFYTExoXMDsBJIEQZCFEGQpSBEGUgRBkIUQZCRhey9hstr+2NHUIEIQipByERIf813/tcBiEFEDL4XAYhBRAy+FwGIQUQMvhcBiEFEDL4XAYhBYYV0nsMQkRVEBJ1BSFRV5oTwtwxCCmAkMHnMggpgJDB5zIIKYCQwecyCCmAkMHnMggpMKyQ3mMQIqqCkKgrCIm60pwQ5o5BSAGEDD6XQUgBhAw+l0FIAYQMPpdBSAGEDD6XQUiBYYX0HoMQURWERF1BSNQV9ULg3yBEGQhRBkKUgRBlIEQZCFEGQpoX8sY/cE+kGBft1xohN2sX9cPE7meFXO3sxkV5WL+sdB0X5DGdddXzXLpjsueDvV27uO8thzO1+2oZAAAApo4/JBSzgZ8vTcgAAAAASUVORK5CYII="/>
</defs>
</svg>


            <h3>Open Six Days a Week</h3>
            <p>Walk in Monday to Saturday, no appointment needed. Early drop-off from 8am and late collection until 6pm on weekdays.</p>
          </div>
          <div>
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
<rect width="100" height="100" fill="url(#pattern0_121_47)"/>
<defs>
<pattern id="pattern0_121_47" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_121_47" transform="scale(0.01)"/>
</pattern>
<image id="image0_121_47" width="100" height="100" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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"/>
</defs>
</svg>



            <h3>Locally Owned & Trusted</h3>
            <p>Proudly serving our community with personalized service and a commitment to quality.</p>
          </div>
        </div>
      </Section>

      <Section id= "services" title="What we clean and repair" subtitle="From business suits and everyday clothing to household laundry and alterations, we handle a wide range of garments and fabrics. If you don't see your item listed, give us a call and we'll be happy to advise.">
        <div id="ServicesGrid">
          <div>
            <h3>Dry Cleaning</h3>
            <p>Suits, dresses, coats, knitwear, and all dry-clean-only garments, professionally cleaned, hand finished, and pressed.</p>
          </div>
          <div>
            <h3>Wash & Fold</h3>
            <p>Everyday laundry, bedding, and towels professionally washed, dried, and neatly folded for easy collection.</p>
          </div>
          <div>
            <h3>Alteration & Repairs</h3>
            <p>From hems to zip replacements, button repairs, all fittings are measured and pinned by our tailor.</p>
          </div>
          <div>
            <h3>Household Items</h3>
            <p>Duvets, curtains, cushions, table linen, sheets, and other delicate items cleaned with the specialist care they require.</p>
          </div>
        </div>
      </Section>

      <Section id="find-us" title="Find us in Beverly Hills" subtitle="Visit us on Beverly Dr six days a week. No appointment is needed. Simply drop off your garments and we'll take care of the rest.">
        <div id="StoreInfoGrid">
          <div>
            <h3>The Store</h3>
            <p><a href="https://www.google.com/maps/dir/?api=1&destination=308+1%2F2+S+Beverly+Dr%2C+Beverly+Hills%2C+CA+90212" target="_blank" rel="noopener noreferrer">308 1/2 S Beverly Dr, Beverly Hills, CA 90212</a></p>

            <p>Monday to Friday 7am to 6pm</p>
            <p>Saturday 8am to 5pm</p>
            <p>Sunday closed</p>
          </div>
          <div>
            <h3>Call the store</h3>
            <p><a href="tel:(310) 556-1121">(310) 556-1121</a>Answered during opening hours. Leave a message out of hours and we will call back first thing.</p>
          </div>
        </div>
        <button className="call-to-action " style={{ display: 'block', margin: '1rem 0' }}><a href="https://www.google.com/maps/dir/?api=1&destination=308+1%2F2+S+Beverly+Dr%2C+Beverly+Hills%2C+CA+90212" target="_blank" rel="noopener noreferrer">Visit the Store</a></button>
      </Section>

      <Section id="reviews" title="What our customers say" >
        <div id="ReviewsGrid">
          <Review name="Emily D." rating={5} comment="Staff was very kind and quick turn around: good price as well especially in Beverly Hills! Got pants hemmed and they look great." source="yelp" />
          <Review name="David Rey S." source="yelp" rating={5} comment="I love this place. The two beautiful friendly ladies up front take such good care of their customers! I use them for all my alterations and the button pops. Great pressed shirts. They reduced the hours due to the pandemic so only open M-F for now. Please support tour local businesses!" />
          <Review name="Bruce S." rating={5} comment="Fantastic Cleaners. Quality and value, no missing shirts. Friendly people behind the counter. I highly recommend these guys." source="yelp" />
        </div>
      </Section>



    <Footer/>

    </div>
  )
}

export default App


