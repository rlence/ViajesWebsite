import React from 'react';
import './index.scss';
import Menu from '../Menu';
import Footer from '../Footer/Footer';


const Home = props => {

    return(
        
        <div className="Home-container">  

        <Menu />

            <div className='Home-parrafo'>

                <h1>Viaja!</h1>
                <p>Descubre lugares maravillosos!</p>
            
            </div>

            <div>             

                <button className='Home-button'>ver destinos</button>

            </div>
           <Footer />
        </div>  

    );

}

export default Home;