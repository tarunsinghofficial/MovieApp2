import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Routes from './config/Routes';
import { Feedback } from './components/header/Feedback';

function App() {
    return (
        <BrowserRouter>
            <Route render={props => (
                <>
                    <Header {...props}/>
                    <Routes/>
                    {/* <Footer/> */}
                    <Route  path ="/components/header/Feedback" component={Feedback} />
                </>
            )}/>
        </BrowserRouter>
    );
}

export default App;