import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

import swal from 'sweetalert';


function Login() {
    const navigate = useNavigate();


    const [formValue, setformValue] = useState({
        email: "",
        password: "",
    });

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("email", formValue.email);
        formData.append("password", formValue.password);
        axios
            .post("http://localhost:8888/api/login", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                },
            })
            .then((response) => {
                console.log("response:");
                console.log(response);
                
                const { name, token } = response.data.data;
                console.log(name);
                console.log(token);
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("username", name);
                localStorage.setItem("token", token);
                navigate("/home");
                swal("Iniciaste Sesión", "Haz iniciado sesión!", "success");

            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <Card
                style={{ width: "30rem", marginTop: "50px" }}
                className="mx-auto"
            >
                <Card.Body>
                    <Card.Title className="text-center">
                        <img src="https://img.icons8.com/color/48/null/nike.png" />
                    </Card.Title>
                    <Card.Title className="text-center">
                        TU CUENTA PARA TODO LO RELACIONADO CON NIKE
                    </Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Correo"
                                name="email"
                                value={formValue.email}
                                onChange={onChange}
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingresa tu contraseña"
                                name="password"
                                value={formValue.password}
                                onChange={onChange}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check
                                type="checkbox"
                                label="Mantén mi sesión"
                            />
                        </Form.Group>
                        <Button
                    
                            style={{ width: "100%" }}
                            variant="dark"
                            type="submit"
                        >
                            INICIAR SESIÓN
                        </Button>
                        <Card.Text style={{ margin: "5px" }}>
                            ¿No eres miembro?
                            <Card.Link
                                style={{ marginLeft: "5px" }}
                                as={Link}
                                to="/register"
                            >
                                Únete
                            </Card.Link>
                        </Card.Text>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}

export default Login;
