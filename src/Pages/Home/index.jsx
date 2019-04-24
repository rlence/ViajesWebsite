import React from 'react';
import './index.scss';


const Home = props => {

    return(
            
        <div className="Home-container">   
            <div className='Home-parrafo'>

                <h1>Viaja!</h1>
                <p>Descubre lugares maravillosos!</p>
            
            </div>

            <div>             

                <button className='Home-button'>ver destinos</button>

            </div>

        </div>  

    );

}

export default Home;