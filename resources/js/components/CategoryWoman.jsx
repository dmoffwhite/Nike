import React, { useState, useEffect } from "react";
import axiosInstance from "./axiosInstance";
import { Card, Button, Row } from 'react-bootstrap';
import swal from 'sweetalert';

function CategoryWoman() {
    const category = 2;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axiosInstance
            .get(`product/category/${category}`)
            .then((response) => {
                setProducts(response.data);
                
            })
            .catch((error) => {
                console.log(error);
            });
    }, [category]);

    const handleBuy = (productId) => {
        axiosInstance
            .post(`cartCreate`, {
                product_id: productId,
                quantity: 1,
            })
            .then((response) => {
                console.log(response.data);
                swal("Agregado al carrito", "Se ha agregado al carrito", "success");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            
            <Row xs={1} md={3} className="g-10 mx-auto">
                {products.map((product) => (
                    <Card key={product.id} className="border-0">
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>{`Price: ${product.price}`}</Card.Text>
                            <Button className="outline-light" variant="light" onClick={() => handleBuy(product.id)}>
                                Buy
                            </Button>{" "}
                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </>
    );
}

export default CategoryWoman;
