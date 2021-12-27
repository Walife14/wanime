import { useParams } from 'react-router-dom'

// styles
import './ViewProfile.css'

export default function ViewProfile() {
    const { id } = useParams()

    console.log(id)

    return (
        <div>
            Welcome to 
        </div>
    )
}
