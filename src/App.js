import './App.scss';
import FrontPage from './pages/front-page/FrontPage';
import SubPage from './pages/sub-page/SubPage';
import Footer from './components/footer/Footer';
import { Route } from 'react-router-dom';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Route exact path="/" component={FrontPage} />
      <Route path="/om-oss" component={SubPage} />
      <Footer />
    </div>
  );
}

export default App;
