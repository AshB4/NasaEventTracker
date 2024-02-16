
import './App.css';
import EventList from './API/NasaApi';



function App() {
  return (
    <div className="App">
      <div>
      <h1>NASA Earth Observatory Natural Event Tracker</h1>
      <EventList />
    </div>
    </div>
  );
};

export default App;
