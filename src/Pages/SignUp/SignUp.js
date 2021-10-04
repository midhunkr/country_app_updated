import { Form, Row, Col, Container, Button, Spinner, Alert } from 'react-bootstrap'
import { useState, useRef, useEffect } from 'react'
import axios from "axios";
import { useHistory } from 'react-router';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { fetchDataAsync } from '../../State/Slices/fetchDataSlice'
const countryList = []
function SignUp() {
    const emailRef = useRef()
    const countryRef = useRef()
    const displaynameRef = useRef()
    const passwordRef = useRef()
    const history = useHistory()
    const [isLoading, setLoading] = useState(true)
    const [accountExists, setAccountExits] = useState(true)
    const dispatch = useDispatch();
    const state=useSelector((state)=>state.fetchData)

    useEffect(() => {
        dispatch(fetchDataAsync())
    }, [])
    console.log(state.countryData);
    // useEffect(() => {
    //     axios.get('https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/Geoenrichment/countries?f=pjson'
    //     ).then((res) => {
    //         console.log(res);
    //         countryList.push(res.data.countries);
    //         console.log(countryList[0]);
    //         setLoading(false);


    //     })
    // }, [])
    const push = () => {
        history.replace('/login')
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        var regex = /^[A-Za-z0-9 ]+$/
        // localStorage.clear()
        const isPassWordValid = regex.test(passwordRef.current.value);
        const isDisplayNameValid = regex.test(displaynameRef.current.value);
        const passwordLength = passwordRef.current.value.length;
        if (isPassWordValid && isDisplayNameValid && passwordLength <= 15) {
            const dataObject = {
                email: emailRef.current.value,
                country: countryRef.current.value,
                displayName: displaynameRef.current.value,
                password: passwordRef.current.value

            }
            // const emailId = emailRef.current.value;
            // console.log(dataObject);
            const userData = JSON.parse(localStorage.getItem("existingusers"));
            if (userData) {
                console.log(userData);
                const test = userData.some(user => user.email === dataObject.email);
                if (test) {
                    alert("This e-mail already exists!! ")
                    setAccountExits(true);
                }
                else {
                    userData.push(dataObject);
                    localStorage.setItem("existingusers", JSON.stringify(userData));
                    history.push('/login')
                }
            }
            else {
                console.log("item does not exist");
                localStorage.setItem("existingusers", JSON.stringify([dataObject]));
                history.push('/login')
            }

            // localStorage.setItem(emailId, JSON.stringify(dataObject))
            // const data = localStorage.getItem(emailId);
            // console.log('the data is ');
            // console.log(data.email);

            // history.push('/home')
        }
        else if (!isPassWordValid || !isDisplayNameValid) {
            alert("Special Charcters not allowed!!");
        }
        else if (passwordLength > 15) {
            alert("Length exceeds 15 characters!!");
        }
        else {
            alert("Invalid")
        }



    }
    if (state.isLoading) {
        return (
            <div className="d-flex justify-content-center m-3 p-3">
                <Spinner animation="border"></Spinner>
            </div>
        )
    }
    if (!state.isLoading) {
        return (
            <div>
                <Container className="mt-5 ">
                    <Row className="d-flex justify-content-center h1">

                        Register

                    </Row>
                    <Form onSubmit={handleSubmit} >
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" required placeholder="Enter Email" ref={emailRef} />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" ref={passwordRef} required />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Country</Form.Label>
                                <Form.Select ref={countryRef} required>
                                    {state.countryData.map((item) => <option value={item.name} key={item.name}>{item.name}</option>)}

                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Display name</Form.Label>
                                <Form.Control type="text" ref={displaynameRef} required />
                            </Form.Group>
                        </Row>
                        <Container className="d-flex justify-content-center">
                            <Button variant="primary" type="submit" className="w-50 rounded-pill rounded-3  border  ">
                                Submit
                            </Button>
                        </Container>
                    </Form>
                    <Container className="d-flex justify-content-center m-3">
                        Already have an account? <Alert.Link className="ms-2" onClick={push}>Login</Alert.Link>
                    </Container>
                </Container>
            </div>
        )
    }

}

export default SignUp;