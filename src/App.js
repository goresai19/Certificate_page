
import './App.css';
import Data from "./Certificate"

import Netcards from './Netcards';

function App() {
  return (
    <>
    <div className="heading">My Certificates</div>
    {Data.map(Netcards)} 
    </>
  );
}

export default App;
