import { Image, Card, Col, Row, Button} from "react-bootstrap";
import CarouselFade from './CarouselFade';
import Footer from "./Footer";


function Home() {
    return (
        <>  
            <div>
             <CarouselFade/>
            </div>

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
                                <Card.Title>Nike Indy Plunge Cutout</Card.Title>
                                <Card.Text>
                                Bra deportivo con almohadilla
                                </Card.Text>
                                <Card.Text>
                                    $999
                                </Card.Text>
                                <Button className="outline-light" variant="light">Comprar</Button>{' '}
                            </Card.Body>
                        </Card>

                        <Card  className="border-0">
                            <Card.Img  variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8fcd1c6a-6c5e-43a9-aae5-744d8f2b7f8d/playera-jordan-essentials-S9LhcQ.png" />
                            <Card.Body>
                                <Card.Title>Jordan Essentials</Card.Title>
                                <Card.Text>
                                Playera para hombre
                                </Card.Text>
                                <Card.Text>
                                    $849
                                </Card.Text>
                                <Button className="outline-light" variant="light">Comprar</Button>{' '}
                            </Card.Body>
                        </Card>

                        <Card  className="border-0">
                            <Card.Img  variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c09cf8bc-4d6c-4564-86d6-cc172deab92e/calzado-dunk-low-TlGnmw.png" />
                            <Card.Body>
                                <Card.Title>Nike Dunk Low</Card.Title>
                                <Card.Text>
                                Calzado para mujer
                                </Card.Text>
                                <Card.Text>
                                    $2,499
                                </Card.Text>
                                <Button className="outline-light" variant="light">Comprar</Button>{' '}
                            </Card.Body>
                        </Card>

                        <Card  className="border-0">
                            <Card.Img  variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/91f9f17a-6806-4861-a9ce-dc123a3bcf28/gorra-de-golf-legacy91-n44p0R.png" />
                            <Card.Body>
                                <Card.Title>Nike Legacy91</Card.Title>
                                <Card.Text>
                                Gorra de golf
                                </Card.Text>
                                <Card.Text>
                                    $549
                                </Card.Text>
                                <Button className="outline-light" variant="light">Comprar</Button>{' '}
                            </Card.Body>
                        </Card>

                        <Card  className="border-0">
                            <Card.Img  variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d3c3b295-ab3f-4836-bae2-62020ff63f13/calzado-blazer-mid-77-vintage-CBDjT0.png" />
                            <Card.Body>
                                <Card.Title>Nike Blazer Mid'77 Vintage</Card.Title>
                                <Card.Text>
                                Calzado para hombre
                                </Card.Text>
                                <Card.Text>
                                    $2,399
                                </Card.Text>
                                <Button className="outline-light" variant="light">Comprar</Button>{' '}
                            </Card.Body>
                        </Card>

                        <Card  className="border-0">
                            <Card.Img  variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e9fd5c05-790f-429d-a18c-aa8ead9d26f6/sudadera-con-gorro-de-tenis-de-tejido-fleece-court-b3bFWL.png" />
                            <Card.Body>
                                <Card.Title>Nike Court</Card.Title>
                                <Card.Text>
                                Sudadera con gorro para mujer
                                </Card.Text>
                                <Card.Text>
                                    $1,699
                                </Card.Text>
                                <Button className="outline-light" variant="light">Comprar</Button>{' '}
                            </Card.Body>
                        </Card>

                        <Card  className="border-0">
                            <Card.Img  variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6964cf16-4caa-428d-ae6d-daaf1cc59708/bolsa-bandolera-3-l-futura-365-sportswear-VL10Xv.png" />
                            <Card.Body>
                                <Card.Title>Nike Sportswear</Card.Title>
                                <Card.Text>
                                Bolsa bandolera 3L para mujer
                                </Card.Text>
                                <Card.Text>
                                    $549
                                </Card.Text>
                                <Button className="outline-light" variant="light">Comprar</Button>{' '}
                            </Card.Body>
                        </Card>
                </Row>
            </div>

            <Footer/>

        </>
    )
}

export default Home