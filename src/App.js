import './css/App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import TravelData from './data'

const data = TravelData.map((item) =>{
  return(
    <Card 
      id = "item.id"
      {...item}
    />
  )
})

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="card">
        {data}
      </div>
    </div>
  );
}

export default App;
