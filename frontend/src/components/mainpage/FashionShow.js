// FashionShow.js
import './FashionShow.css';

const FashionShow = () => {
    return (
        <div className="fashion-show">
            <h1 className='fashion-title'>Introducing Virtual Fashion Shows</h1>
            <button className="check-trends">CHECK OUT TOP TRENDS</button>
            <video loop autoplay='' muted className="fashion-video">
                <source src="/video_fashion_walk.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default FashionShow;
