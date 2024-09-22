import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

const name ="Pratyush Poddar";
function App() {
  return (
    
    <>
{/* <Navbar   />  */}

<Navbar  title="CloudSentinel" aboutText="About Cloud" /> 
<div className="container my-3">

<TextForm heading="Enter the text to analyze below"/>

</div>
    </>
  );
} 

export default App;
