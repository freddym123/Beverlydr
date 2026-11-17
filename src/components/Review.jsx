import Star from '../assets/star.svg'
import YelpLogo from '../assets/yelp.svg'

export default function Review({ name, rating, comment, source }) {
    return(
        <div className="review">
            <div className="review-header">
                <h4>{name}</h4>
                <div>
                    {Array.from({ length: rating }, (_, index) => (
                        <img key={index} src={Star} alt="Star" />
                    ))}
                </div>
            </div>
            <p className="comment">{comment}</p>

            {source == "yelp" && (
                <a href="https://www.yelp.com/biz/beverly-dr-cleaners-beverly-hills-3" target="_blank" rel="noopener noreferrer">
                    <img src={YelpLogo} alt="Yelp Logo" className="review-logo" />
                </a>
            )}
        </div>
    )
}