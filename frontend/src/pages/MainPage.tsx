import AboutMe from "./AboutMe";
import Basketball from "./Basketball";
import Certifications from "./Certifications";
import ContactPage from "./ContactPage";
import Education from "./Education";
import Intro from "./Intro";
import Portfolio from "./Portfolio";
import ScrollFadeIn from '../components/ScrollFadeIn';

const MainPage: React.FC = () => {
  return (
    <div>
      <ScrollFadeIn>
        <Intro />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <AboutMe />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <Portfolio />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <Certifications />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <Education />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <Basketball />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <ContactPage />
      </ScrollFadeIn>
    </div>
  );
}

export default MainPage;
