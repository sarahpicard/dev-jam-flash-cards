import Home from './pages/Home';
import './App.css';

function App() {
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
  ]

  return (
    <div className='bg-orange-50 h-screen w-screen'>
      <Home numbers={numbers} />
    </div>
  );
}

export default App;
