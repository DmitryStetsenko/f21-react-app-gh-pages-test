import './App.css';
import Counter from './components/Counter/Counter';

const App = () => {
  return (
    <div className="App" >

      <h1>React APP</h1>
      
      <Counter start={ 5 } title="Counter 1"/>
      <Counter start={ 0 } title="Counter 2"/>

    </div>
  );
}

export default App;
