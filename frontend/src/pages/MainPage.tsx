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
            <Portfolio />
            <Certifications />
            <Education />
            <AboutMe />
            <Basketball />
            <ContactPage />
        </div>
    )

}

export default MainPage