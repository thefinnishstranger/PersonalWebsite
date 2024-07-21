import ReactDOM from 'react-dom/client'
import MainRouter from './MainRouter'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './components/Footer';
import '@fontsource/arvo';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <MainRouter />
      <Footer />
    </BrowserRouter>
)
