import { Form, Button, Container, Row } from 'react-bootstrap'
import { useRef } from 'react'
import { useHistory } from 'react-router'
import { notifyLogin } from '../../State/Slices/fetchDataSlice'
import { useDispatch } from 'react-redux'

function SignIn() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const history=useHistory()
    const dispatch= useDispatch()
    const validateCredentials = (event) => {
        event.preventDefault();
        
        const emailId = emailRef.current.value;
        const password = passwordRef.current.value;
        const data = localStorage.getItem("existingusers");
        const dataObject = JSON.parse(data);
        console.log(dataObject);
        const validCredentials = dataObject.some(
            (item) => item.email == emailId && item.password == password);
        const index=dataObject.findIndex((item)=> item.email == emailId && item.password == password);
        const userDataObject=dataObject[index];
        if (validCredentials) {
            // alert("succes")
            dispatch(notifyLogin({userData:userDataObject}))
            history.replace('/home')
        }
        else {
            alert("Wrong credentials!!")
        }



    }
    return (
        <Container className="w-25 mt-5">
            <Row className="d-flex justify-content-center h1">

                Login

            </Row>
            <Form onSubmit={validateCredentials}>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />

                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>

                <Container className="d-flex justify-content-center">
                    <Button variant="primary" type="submit" className="w-50 rounded-pill rounded-3  border  ">
                        Submit
                    </Button>
                </Container>
            </Form>
        </Container>
    )
}

export default SignIn