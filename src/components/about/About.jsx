import frame3 from '../../images/about/Frame (3).png';
import frame4 from '../../images/about/Frame (4).png';

import './About.scss';
export const About = () => {
    return (
        <div className='about'>
            <div className='about-image'>
                <img src={frame3} alt="" />
            </div>
            <div className='about-text'>
                <div className="about-text-navigate">
                    <img src={frame4} alt="" />
                    <b>Meet your host</b>
                </div>
                <div className="about-text-title">
                    <h2>Jacob Paulaner</h2>
                    <p>Jacob has a background in audio engineering, and has been podcasting since the early days.</p>
                    <p>He’s here to help you level up your game by sharing everything he’s learned along the way.</p>
                </div>
            </div>
        </div>
    )
}