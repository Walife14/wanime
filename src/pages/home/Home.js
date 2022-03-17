import { Link } from 'react-router-dom'

// components
import DiscoverAnime from './DiscoverAnime'

// styles
import './Home.css'

// img
import img1 from '../../assets/jujutsu-kaisen.jpg'
import img2 from '../../assets/demonslayer-img.webp'
import img3 from '../../assets/sao-img.jpg'

export default function Home() {

    return (
        <div>
            <div className='anime-selector-container'>
                <Link to="/this-week" className='anime-selector-option'>
                    <div className='anime-selector-img-container'>
                        <img className='anime-selector-img' src={img1} alt="" />
                    </div>
                    <span className='anime-selector-text'>
                        This Week
                    </span>
                </Link>
                <div className='anime-selector-option'>
                    <div className='anime-selector-img-container'>
                        <img className='anime-selector-img' src={img2} alt="" />
                    </div>
                    <span className='anime-selector-text'>
                        This Season
                    </span>
                </div>
                <div className='anime-selector-option'>
                    <div className='anime-selector-img-container'>
                        <img className='anime-selector-img' src={img3} alt="" />
                    </div>
                    <span className='anime-selector-text'>
                        This Year
                    </span>
                </div>
            </div>
            <div className="separator" />
            <div className="about-container">
                <h2 className="about-title">Who We Are</h2>
                <p className="about-text">We are an anime fan page. Here you can discover new anime to watch and share your opinions on both plot and characters. Not only this but wanime is a fan page ran by the fans.</p>
            </div>
            <div className="separator" />
            <DiscoverAnime />
        </div>
    )
}
