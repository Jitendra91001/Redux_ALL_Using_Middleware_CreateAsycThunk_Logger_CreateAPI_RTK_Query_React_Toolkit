import './app.css';
import Acount from './component/Acount';
import ApiData from './component/ApiData';
import Bonus from './component/Bonus';
import { useSelector } from 'react-redux';
function App() {
  const amount = useSelector((state) => state.amount.amount)
  const bonus = useSelector((state) => state.bonus.points)
  return (
    <div className="app">
      <h1>App</h1>
      <h2>Bonus:- {bonus} </h2>
      <h2>Amount:- {amount} </h2>
      <hr/>

      <Acount/>
      <hr/>
      <Bonus/>
      <hr/>
      <ApiData/>
    </div>
  );
}

export default App;
