export default function Card() {
    return (
        <div className="card">
            <img className="card--image" src="/src/images/katie-zaferes.png" alt="A photo of the experience"></img>
            <span className="card--status">sold out</span>
            <span className="card--reviews">
                <img src="/src/images/star.png"></img>
                <span className="card--reviews-rating">&nbsp;5.0</span>
                <span className="card--reviews-count">&nbsp;(6)</span>
                <span className="card--reviews-country">&bull;USA</span>
            </span>        
            <h1 className="card--title">Life lessons with Katie Zaferes</h1>
            <p className="card--cost"><strong>From $136</strong> / person</p>
        </div>
    );
}