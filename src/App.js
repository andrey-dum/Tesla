import './App.css';
import Header from './components/Header/Header';
import Item from './components/Item/Item';
import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'


const items = [
  {
    title: "Lowest Cost Solar Panels in America", 
    desc: "Money-back guarantee",
    descLink: '',
    backgroundImg: SolarPanels,
    leftBtnText: "ORDER NOW",
    leftBtnLink: "",
    rightBtnText: "ORDER NOW",
    rightBtnLink: "",
    twoButtons: true,
    first: true,
  },
  {
    title: "Model S", 
    desc: "$68, 420",
    descLink: '',
    backgroundImg: ModelS,
    leftBtnText: "CUSTOM ORDER",
    leftBtnLink: "",
    rightBtnText: "LEARN MORE",
    rightBtnLink: "",
    twoButtons: true,
  },
  {
    title: "Model 3", 
    desc: "Money-back guarantee",
    descLink: '',
    backgroundImg: Model3,
    leftBtnText: "CUSTOM ORDER",
    leftBtnLink: "",
    rightBtnText: "LEARN MORE",
    rightBtnLink: "",
    twoButtons: true,
  },
  {
    title: "Model X", 
    desc: "Money-back guarantee",
    descLink: '',
    backgroundImg: ModelX,
    leftBtnText: "CUSTOM ORDER",
    leftBtnLink: "",
    rightBtnText: "LEARN MORE",
    rightBtnLink: "",
    twoButtons: true,
  },
  {
    title: "Model Y", 
    desc: "Money-back guarantee",
    descLink: '',
    backgroundImg: ModelY,
    leftBtnText: "CUSTOM ORDER",
    leftBtnLink: "",
    rightBtnText: "LEARN MORE",
    rightBtnLink: "",
    twoButtons: true,
  },
  {
    title: "Solar for New Roofs", 
    desc: "Money-back guarantee",
    descLink: '',
    backgroundImg: SolarRoof,
    leftBtnText: "CUSTOM ORDER",
    leftBtnLink: "",
    rightBtnText: "LEARN MORE",
    rightBtnLink: "",
    twoButtons: true,
  },
  {
    title: "Accessories", 
    desc: "Money-back guarantee",
    descLink: '',
    backgroundImg: Accessories,
    leftBtnText: "CUSTOM ORDER",
    leftBtnLink: "",
    rightBtnText: "LEARN MORE",
    rightBtnLink: "",
    twoButtons: true,
  }
]


function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_itemsContainer">
        {items.map(item => (
          <Item 
            key={item.title}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
