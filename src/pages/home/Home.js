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
                    </span>                </div>
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
            <div className='about-container'>
                <h2 className='about-title'>About wanime</h2>
                <p className='about-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cumque facilis magni dolor officia at distinctio nulla temporibus, quos quod amet voluptate, consequatur asperiores maxime eaque quisquam perferendis quae soluta in vitae fugiat modi ratione. Voluptas cumque vel nostrum consequatur perferendis repellendus maxime iusto quasi laborum autem! Ut cum ad incidunt, tenetur velit quae eveniet consectetur voluptatum quas non nam obcaecati similique voluptatem veniam asperiores magnam impedit voluptate perspiciatis suscipit sed. Debitis, blanditiis, corrupti illum cumque quo similique maxime dolores beatae repellendus tenetur doloribus minima optio consequuntur in rerum at asperiores et deserunt praesentium esse architecto quod aliquid doloremque animi.</p>
            </div>
            <div className="separator" />
            <DiscoverAnime />
        </div>
    )
}
