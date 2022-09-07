import { useState } from 'react';
import { Routes ,Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const[mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null);
  const [toggle,setToggle]=useState('off')
  const [greentoggle,setGreenToggle]=useState('off')

  const greenToggleMode=()=>{
    if(mode==='light')
    {
      setMode('green');
      setGreenToggle('on');
      document.body.style.backgroundColor='#1c6a53';
      showAlert("Dark mode is enabled","success");
    }
    else
    {
    setMode('light');
    setGreenToggle('off')
    document.body.style.backgroundColor='white';
    showAlert("Light mode is enabled","success");
    }
  }  

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      setToggle('on');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enabled","success");
    }
    else
    {
    setMode('light');
    setToggle('off');
    document.body.style.backgroundColor='white';
    showAlert("Light mode is enabled","success");
    }
  }

  

  const showAlert=(message,type)=>{
      setAlert({msg:message,
      type:type})
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }
  return (
    
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About Us"  mode={mode} toggle={toggle} greentoggle={greentoggle} toggleMode={toggleMode} greenToggleMode={greenToggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3' >
    <Routes>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/" element={<TextForm showAlert={showAlert}  mode={mode} />}>
        </Route>
    </Routes>
    </div>

    </Router>
    </>
  );
}

export default App;
