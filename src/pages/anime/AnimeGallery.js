
// styles
import './Anime.css'

export default function AnimeGallery({ anime }) {


  return (
    <div className="anime-page-gallery">
        <span>Anime Gallery</span>
        <div>
            {/* create a modal for whenever a user clicks an image */}
            <div>
                <img
                    onClick={e => console.log(e.target.src)}
                    src={anime.thumbnail}
                    alt={`${anime.title}'s thumbnail`}
                />
            </div>
        </div>
    </div>
  )
}
