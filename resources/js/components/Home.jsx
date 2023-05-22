import React from "react";
import { Image, Card, Col, Row, Button} from "react-bootstrap";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="position-relative">
                <Image
                style={{marginTop: "50px"}}
                className="d-block w-100 "
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1585,c_limit/73863e84-289a-48b5-9cc3-a6bd7c73bbbc/sitio-web-oficial-de-nike.jpg"
                alt="Third slide"
                />
            </div>

            <div style={{marginTop:'50px'}}>
                <Row xs={1} md={2} className="g-10 mx-auto" >
                    
                <Card className="border-0" style={{ position: "relative" }}>
                    <Card.Img
                    variant="top"
                    style={{ maxHeight: "850px" }}
                    src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_500,c_limit/0259a1c7-fce4-4bc1-a819-60d1301c2f06/sitio-web-oficial-de-nike.jpg"
                    fluid
                    />
                    <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        color: "white"
                    }}
                    >
                    <Card.Text>Lo nuevo en calzado de futbol: Luminous Pack</Card.Text>
                    <Card.Title>Creatividad que conecta con la habilidad</Card.Title>
                    <Button variant="light">Comprar</Button>{' '}
                    </div>
                </Card>
                    <Card className="border-0" style={{ position: "relative" }}>
                        <Card.Img
                        variant="top"
                        style={{ maxHeight: "850px" }}
                        src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_739,c_limit/fc2fa16c-f94f-4e6e-91df-4d614fe6630f/sitio-web-oficial-de-nike.png"
                        fluid
                        />
                        <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                            color: "white"
                        }}
                        >
                        <Card.Text>Vacaciones con Jordan</Card.Text>
                        <Card.Title>Los mejores estilos para días de diversión</Card.Title>
                        <Button variant="light">Comprar</Button>{' '}
                        </div>
                    </Card>
                </Row>
            </div >
                
            <div style={{marginTop:'30px'}}>
                <Row xs={1} md={3} className="g-10 mx-auto">
                        <Card  className="border-0 ">
                            <Card.Img variant="top" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_3.0/h_308,c_limit/b3a26411-8d9d-4c4d-8cd7-e961dad872a1/leggings-de-tiro-alto-de-7-8-one-8Tj7XF.png" />
                            <Card.Body>
                                <Card.Title>Nike One</Card.Title>
                                <Card.Text>
                                Leggings de tiro alto 7/8 para mujer
                                </Card.Text>
                                <Card.Text>
                                    $1,149
                                </Card.Text>
                                <Button className="outline-light" variant="light">Comprar</Button>{' '}
                            </Card.Body>
                        </Card>

                        <Card className="border-0" style={{maxWidth:''}}>
                            <Card.Img variant="top" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_360,c_limit/a0e4c109-ef3e-4e3f-ba33-6e135f4b8668/bra-deportivo-de-cuello-alto-con-almohadilla-de-media-sujeci%C3%B3n-swoosh-phoenix-l0Nsgl.png" />
                            <Card.Body>
                                <Card.Title>Nike Swoosh Phoenix</Card.Title>
                                <Card.Text>
                                Bra deportivo 
                                </Card.Text>
                                <Card.Text>
                                    $1,299
                                </Card.Text>
                                <Button className="outline-light" variant="light">Comprar</Button>{' '}
                            </Card.Body>
                            
                        </Card>

                        <Card  className="border-0">
                            <Card.Img  variant="top" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_425,c_limit/05dee03b-9fad-4d7c-9c89-8be617d57a33/bra-deportivo-con-almohadilla-de-media-sujeci%C3%B3n-indy-plunge-cutout-4SM2sC.png" />
                            <Card.Body>
                                <Card.Title>Nike One</Card.Title>
                                <Card.Text>
                                Bra deportivo con almohadilla
                                </Card.Text>
                                <Card.Text>
                                    $999
                                </Card.Text>
                                <Button className="outline-light" variant="light">Comprar</Button>{' '}
                            </Card.Body>
                        </Card>
                </Row>
            </div>


            <div style={{marginTop:'50px'}}>
                <Row xs={1} md={2} className="g-10 mx-auto" >
                    
                <Card className="border-0" style={{ position: "relative" }}>
                    <Card.Img
                    variant="top"
                    style={{ maxHeight: "850px" }}
                    src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_700,c_limit/43bb4508-4d13-4720-bd40-ce25b42e0551/sitio-web-oficial-de-nike.png"
                    fluid
                    />
                    <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        color: "white"
                    }}
                    >
                    <Card.Text>Descubre lo nuevo del aire</Card.Text>
                    <Card.Title>Air Max Pulse</Card.Title>
                    <Button variant="light">Comprar</Button>{' '}
                    </div>
                </Card>
                    <Card className="border-0" style={{ position: "relative" }}>
                        <Card.Img
                        variant="top"
                        style={{ maxHeight: "850px" }}
                        src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_700,c_limit/58ea11f9-f4c8-4d4d-a268-9d6183834e3d/sitio-web-oficial-de-nike.png"
                        fluid
                        />
                        <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                            color: "white"
                        }}
                        >
                        <Card.Text>Nike ACG</Card.Text>
                        <Card.Title>Creado para la aventura</Card.Title>
                        <Button variant="light">Comprar</Button>{' '}
                        </div>
                    </Card>
                </Row>
            </div >
        
            <div style={{marginTop:'50px'}}>
                <Row xs={1} md={3} className="g-10 mx-auto" >
                    
                <Card className="border-0" style={{ position: "relative" }}>
                    <Card.Img
                    variant="top"
                    style={{ maxHeight: "850px" }}
                    src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_417,c_limit/ea4fa9ce-d4b9-4cba-98aa-797972626bf1/sitio-web-oficial-de-nike.png"
                    fluid
                    />
                    <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        color: "white"
                    }}
                    >
                    <Card.Title>Hombre</Card.Title>
                    <Button as={Link} to="/men" variant="light">Comprar</Button>{' '}
                    </div>
                </Card>
                    <Card className="border-0" style={{ position: "relative" }}>
                        <Card.Img
                        variant="top"
                        style={{ maxHeight: "850px" }}
                        src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_417,c_limit/db87aafd-8a65-4ee8-a745-352bc5b4bbe2/sitio-web-oficial-de-nike.png"
                        fluid
                        />
                        <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                            color: "white"
                        }}
                        >
                        <Card.Title>Mujer</Card.Title>
                        <Button as={Link} to="/women" variant="light">Comprar</Button>{' '}
                        </div>
                    </Card>

                    
                    <Card className="border-0" style={{ position: "relative" }}>
                        <Card.Img
                        variant="top"
                        style={{ maxHeight: "850px" }}
                        src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_417,c_limit/4d5c7141-e90e-4278-b74f-38884eda221e/sitio-web-oficial-de-nike.png"
                        fluid
                        />
                        <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                            color: "white"
                        }}
                        >
                        <Card.Title>Niñxs</Card.Title>
                        <Button as={Link} to="/children" variant="light">Comprar</Button>{' '}
                        </div>
                    </Card>
                </Row>
            </div >
             
            <Footer/>
            
        </>
      

      
    );
  }

export default Home;