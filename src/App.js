import bird from './images/bird.png'
import './App.css';

const ColoredText = () => {  
const text = "Smile Birdie"; // Tu texto aquí
const halfLength = Math.ceil(text.length / 2);
const firstHalf = text.slice(0, halfLength);
const secondHalf = text.slice(halfLength);
return (
  <div className="colored-text">
    <span className="first-half">{firstHalf}</span>
    <span className="second-half">{secondHalf}</span>
  </div>
);
};


function App() {  
  return (
    <div className="App">
      <header className="App-header">
        <img src={bird}className="App-logo" alt="logo" />
          <p>Pur-fectly Clean Smiles</p>
      <h1>for Your Friends</h1>
      <buttom className='custom-buttom'
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">Shop</buttom>
      <script>
      </script>
        <buttom className='custom-buttom2'>About us</buttom>
      <h2>HURRRA</h2>
      <ColoredText></ColoredText>
      </header>
    </div>
  );
}

export default App;
