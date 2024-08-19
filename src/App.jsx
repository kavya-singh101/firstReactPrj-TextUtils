import { useState } from 'react'
import './App.css'
import About from './components/About.jsx';
import Navbar from './components/Navbar.jsx';
import TextForm from './components/TextForm.jsx';
import Alert from './components/Alert.jsx';

import {
  BrowserRouter as Router, Routes as Switch, Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [mode, setMode] = useState("light");
  const [bodyCol, setBodyCol] = useState(null);
  const [activeSwitch, setActiveSwitch] = useState(null);
  // if(mode==='light'){
  //   document.body.style.backgroundColor='#dddada';
  // }
  if ((mode === 'dark' || mode === 'light') && bodyCol === null) {
    document.body.style.backgroundColor = mode === 'dark' ? '#190368' : '#dddada'
  }


  const toggleBody = (col, switchId) => {
    if (bodyCol === col) {
      document.body.style.backgroundColor = mode === 'dark' ? '#190368' : '#dddada'
      setBodyCol(null);
      setActiveSwitch(null)
      document.getElementById(switchId).style.backgroundColor = "#ffff";
      document.getElementById(switchId).style.borderColor = "#ffff";
    }
    else {
      document.body.style.backgroundColor = col;
      setBodyCol(col);
      setActiveSwitch(switchId);
      document.getElementById(switchId).style.backgroundColor = col;
      document.getElementById(switchId).style.borderColor = col;

    }
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert("Dark Mode is Enabled", "success")
      document.title = 'TextUtils - Dark Mode'
      // document.body.style.backgroundColor='#454545';
    }
    else {
      setMode('light')
      showAlert("Light Mode is Enabled", "success")
      document.title = 'TextUtils'
      // document.body.style.backgroundColor='#dddada';
    }
  }
  return (
    <>
      {/* <Navbar title="textUtils prop wala" aboutTitle="About Us"/> */}
      <Router>
        <Navbar
          title="TextUtils"
          aboutTitle="About"
          mode={mode}
          toggleBody={toggleBody}
          activeSwitch={activeSwitch}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          {/* <TextForm showAlert={showAlert} heading="Enter the text" mode={mode} /> */}
          <Switch>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />} />
            <Route exact path="/about" element={<About mode={mode}/>} />
          </Switch>
          {/* <About /> */}
        </div>
      </Router>


    </>
  );
}

export default App
