// import logo from './logo.svg';
import './App.css';
import Carousel from './HomePage/Carousel/carousel';
import Banner from './HomePage/Image/Banner';
import NavBar from './HomePage/NavBar/navbar';
import SystemBar from './HomePage/SystemBar/systembar';


function App() {
  const list=[
    {title:"FLASH SALE",content:"50% off on Jordans"},
    {title:"BOOTS BONANZA",content:"Now shop boots and get MU Jersey Free"},
    {title:"BLACK FRIDAY SALE",content:"25% offer on selected offers"}
  ]
  return (
    <div className="App">
      <SystemBar/>
      <NavBar/>
      <Carousel list={list}/>
      <Banner/>
      <div className="banner">
      <p
        className="bannertext"
        >
        YOUR NIKE CONNECTION        
        </p>
        </div>
        
   
    </div>
  );
}

export default App;
