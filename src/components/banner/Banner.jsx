import './Banner.scss'
import banner from '../../images/Frame.png'
import social from '../../images/social.png'


const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-image'>
                <img src={banner} alt="" />
            </div>
            <div className='banner-text'>
                <h1 className='banner-text-title'>
                Take your podcast to the next
                <span> level</span>
                </h1>
                <img src={social} alt="" />
            </div>
        </div>
    );
}

export default Banner;
