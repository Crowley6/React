import './App.css';
import './Grids/AppGrid1.css';
import './Grids/AppGrid2.css';
import './Grids/AppGrid3.css';
import AppGrid1 from './Grids/AppGrid1';
import AppGrid2 from './Grids/AppGrid2';
import AppGrid3 from './Grids/AppGrid3';

const App = () => {
  return (
    <div className="App">
      <AppGrid1 />
      <AppGrid2 />
      <AppGrid3 />
    </div>
  );
}

export default App;
