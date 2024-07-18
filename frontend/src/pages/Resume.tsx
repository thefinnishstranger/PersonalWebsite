import { Image } from 'react-bootstrap'
import CV from '../resources/cv2024.jpg'

const Resume: React.FC = () => {
    return (
        <div>
            <h1>My resume</h1>
            <Image src={CV} alt='my resume' rounded fluid />
        </div>
    )
}

export default Resume