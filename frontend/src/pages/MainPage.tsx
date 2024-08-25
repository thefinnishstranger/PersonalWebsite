import AboutMe from "./AboutMe"
import Basketball from "./Basketball"
import Certifications from "./Certifications"
import ContactPage from "./ContactPage"
import Education from "./Education"
import Intro from "./Intro"
import Portfolio from "./Portfolio"

const MainPage: React.FC = () => {
    return (
        <div>
            <Intro />
            <AboutMe />
            <Portfolio />
            <Certifications />
            <Education />
            <Basketball />
            <ContactPage />
        </div>
    )

}

export default MainPage