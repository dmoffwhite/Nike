import React from 'react';
import {Navbar} from 'react-bootstrap';

function Footer() {
    return (
        <div>
            <>
                <Navbar style={{background:'#f5f5f5'}} expand="lg" className="justify-content-center">
                    <Navbar.Brand href="#home"><img  src="https://img.icons8.com/color/48/000000/nike.png"/>Nike</Navbar.Brand>
                    <p style={{color:'black'}} className="text-center mt-4 mb-4">&copy; {(new Date().getFullYear())} Copyright: Nike</p>
                    <div className="redes-sociales">
                        <a href="#">
                            <img width="24" height="24" src="https://img.icons8.com/material/24/000000/instagram-new--v1.png"/>
                        </a>
                        <a href="#">
                            <img width="24" height="24" src="https://img.icons8.com/material/26/000000/facebook--v1.png"/>
                        </a>
                        <a href="#">
                            <img width="24" height="24" src="https://img.icons8.com/material/24/000000/twitter--v1.png"/>
                        </a>

                    </div>

                </Navbar>
        
            </>
        </div>
    )
}

export default Footer