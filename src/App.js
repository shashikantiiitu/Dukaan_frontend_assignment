import React, { Component } from 'react' 
import Body from './components/Body/Body';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar'
import './allcss.css';

class App extends Component{
  render(){
    return (
          <div className="App">
          <Navbar/>
          <Body/>
          <Footer/>
          </div>
        );
  }
}

export default App;
