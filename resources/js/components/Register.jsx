import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';


function Register() {
    const navigate = useNavigate();

   

    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        password: "",
        c_password: "",
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormValue((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", formValue.name);
        formData.append("email", formValue.email);
        formData.append("password", formValue.password);
        formData.append("c_password", formValue.c_password);

        axios
            .post("http://localhost:8888/api/register", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                },
            })
            .then((response) => {
                console.log("response:");
                console.log(response);
                const { name } = response.data.data;
                console.log(name);
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("username", name);
                navigate("/home");
                swal("Registrado", "Te haz registrado!", "success");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            
            <Card
                style={{ width: "30rem", marginTop: "25px" }}
                className="mx-auto"
            >
                <Card.Body>
                    <Card.Title className="text-center">
                        <img src="https://img.icons8.com/color/48/null/nike.png" />
                    </Card.Title>
                    <Card.Title className="text-center">
                        HAZTE MIEMBRO DE NIKE
                    </Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre"
                                name="name"
                                value={formValue.name}
                                onChange={onChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electrónico</Form.Label>
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
                                placeholder="Contraseña"
                                name="password"
                                value={formValue.password}
                                onChange={onChange}
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicConfirmPassword"
                        >
                            <Form.Label>Confirmar contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Contraseña"
                                name="c_password"
                                value={formValue.c_password}
                                onChange={onChange}
                            />
                        </Form.Group>

                        <Button
                            style={{ width: "100%" }}
                            variant="dark"
                            type="submit"
                        >
                            Únete
                        </Button>

                        <Card.Text style={{ margin: "5px" }}>
                            ¿Ya eres miembro?
                            <Card.Link
                                style={{ marginLeft: "5px" }}
                                as={Link}
                                to="/login"
                            >
                                Iniciar sesión
                            </Card.Link>
                        </Card.Text>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}

export default Register;
