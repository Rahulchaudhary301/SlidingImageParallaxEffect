
import './App.css';
import HomePage from './components/HomePage';
import ImageSliding from './components/ImageSliding';



function App() {

  const data = [
    'I LOVE NASA',
    'LOOKS SO AWESOME GALAXY',
    'WOUNDERFULL LOOKS',
    'ITS SO HOT SPACE',
    'BEAUTIFUL MILKY WAY'

  ]


  return (
    <>
      <HomePage />
      <ImageSliding data={data} />
    </>
  );
}

export default App;
