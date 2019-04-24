import React  from 'react';
// import Menu from './Pages/Menu'; 
import Layout from './Pages/Layout';
import './App.css';
import Home from './Pages/Home';



const App = props => {
  
  return (
    
      <header className="header-main">
      
         <Layout>
           <Home />
         </Layout>
         
         
            

      </header>
    )
    
    
  }


export default App;
