import React  from 'react';
// import Menu from './Pages/Menu'; 
// import Layout from './Pages/Layout';
import './App.css';
import Home from './Pages/Home';
// import Footer from './Pages/Footer/Footer';
// import Menu from './Pages/Menu';

// function Layout (props) {

//   return(

//     <div>
//         <Menu />
//         {props.children}
//         <Footer />
//     </div>
//   );
// }

const App = props => {
  
  return (
    
        <div className="header-main">        
          
              <Home />            
          
        </div>

    ); 
}

export default App;
