import './App.css';
import About from './About';
import Category from './Category';
import PartnerSlider from './partner/partnerSlider';
import Footer from './Footer/footer';
function App() {
  return (
    <div className="App">
      <About/>
      <Category/>
      <PartnerSlider/>
      <Footer/>
    </div>
  );
}

export default App;
