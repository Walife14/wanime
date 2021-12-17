import { useCollection } from '../../hooks/useCollection'

// images
import option1 from '../../assets/demonslayer-img.webp'

// styles
import './Thisweek.css'

// To Do
// - fix the image on the cards - they are streched
// - for the top 3 create a like system or such and allows us to track which anime are top 3
// and put those in the top 3 list

// - for the bottom cycle through the list of anime top 50 but -3 due to top 3

export default function ThisWeek() {

    const { documents: animes } = useCollection(
        'animes'
    )

    return (
        <div className="this-week-container">
            <div className="top-3-container">
                <ul className="top-3-list">
                    <li className="top-3-option">
                        <img className="top-anime-img" src={option1} alt="" />
                    </li>
                    <li className="top-3-option">
                        <img className="top-anime-img" src={option1} alt="" />
                    </li>
                    <li className="top-3-option">
                        <img className="top-anime-img" src={option1} alt="" />
                    </li>
                </ul>
            </div>
            <ul className="anime-list-container">
                {animes && animes.map(anime => (
                    <li className="anime-card" key={anime.id}>
                        <img src={anime.thumbnail} alt={`${anime.title} thumbnail`} className="anime-card-img" />
                        <div className="anime-card-text-container">
                            <span>{anime.title}</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, iusto!</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}