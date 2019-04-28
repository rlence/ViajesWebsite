import React from 'react';
import './Footer.scss';




const Footer = props => {

    return(

        <footer>

            <div className="pie_izquierda1">

                <div className="colum">

                    <div className="row">
                        <label>¿NECESITAS AYUDA?</label>
                    </div>
                    <br></br>

                    <div className="row">
                        <label>0264 123 4567</label>
                    </div>

                    <div className="row">
                        <label>enquiry@geekshubstravels.com</label>
                    </div>
                    <br></br>

                    <div className="row">
                        <label>Lun-Vie.9:30-19:00 Sab: 10.00-14.00 </label>
                    </div>
                </div>

                <div className="pie_centro">

                    <div className="colum">

                        <div className="row">
                            <label> INFORMACION</label>
                        </div>
                        <br></br>
                        <div className="row">
                            <label> Quienes somos</label>
                        </div>

                        <div className="row">
                            <label> Preguntas frecuentes</label>
                        </div>
                        <div className="row">
                            <label> Politica de privacidad</label>
                        </div>
                        <div className="row">
                            <label> Condiciones generales</label>
                        </div>
                        <div className="row">
                            <label> Aviso legal</label>
                        </div>

                        <div className="pie_derecha">

                    <div className="colum">

                        <div className="row">
                            <label> SUSCRIBETE A LA NEWSLETTER</label>
                        </div>
                        <br></br>
                        <div className="row">
                            <button> SUSCRIBETE</button>
                        </div>

                    </div>

                    </div>

                    </div>

                    </div>

                </div>

        </footer>
        
    );
}


export default Footer;