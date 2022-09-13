import './styles/index.scss'
import Homepage from './pages/Homepage'
import { DataProvider } from './context/DataContext';


function App() {
  return (
    <div>
      <DataProvider>
        <Homepage/>
      </DataProvider>
    </div>
  );
}

export default App;
