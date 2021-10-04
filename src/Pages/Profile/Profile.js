import { useRef, useState } from "react";
import { Container, Row, Col, Table, Button, Form, Accordion } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import CountryDetails from "../../Components/CountryDetails";
import { updateUserCredentials } from '../../State/Slices/fetchDataSlice'


function Profile(props) {
    const history = useHistory()
    const state = useSelector((state) => state.fetchData)
    const passwordRef = useRef()
    const displayNameRef = useRef()
    const dispatch = useDispatch()
    const [changePassWord, setchangePassWord] = useState(false)
    const [changeDisplayName, setChangeDisplayName] = useState(false)
    let emailId = state.userDetails[0].email;
    let password = state.userDetails[0].password;
    let displayName = state.userDetails[0].displayName;
    let country = state.userDetails[0].country;
    let countryDetails = state.countryData.filter((item) => item.name == country)
    console.log(countryDetails[0]);
    const enableChangePassword = () => {
        setchangePassWord(true)
    }
    const updatePassword = () => {
        const newPassWord = passwordRef.current.value;
        const dataObject = {
            email: emailId,
            country: country,
            displayName: displayName,
            password: newPassWord

        }
        let userData = JSON.parse(localStorage.getItem("existingusers"));
        console.log(userData);
        const index = userData.findIndex((item) => item.email == emailId);
        userData[index] = dataObject;
        localStorage.setItem("existingusers", JSON.stringify(userData));
        dispatch(updateUserCredentials({ userData: dataObject }))
        const dataIsThrere = localStorage.getItem("existingusers");
        console.log(dataIsThrere);
        // alert(newPassWord);
        setchangePassWord(false)
    }
    const cancelPasswordChange = () => {
        setchangePassWord(false)
    }
    const enableChangeDisplayName = () => {
        setChangeDisplayName(true)
    }
    const cancelChangeDisplayName = () => {
        setChangeDisplayName(false)
    }
    const updateDisplayName = () => {
        const newDisplayName = displayNameRef.current.value;
        const dataObject = {
            email: emailId,
            country: country,
            displayName: newDisplayName,
            password: password

        }
        let userData = JSON.parse(localStorage.getItem("existingusers"));
        console.log(userData);
        const index = userData.findIndex((item) => item.email == emailId);
        userData[index] = dataObject;
        localStorage.setItem("existingusers", JSON.stringify(userData));
        dispatch(updateUserCredentials({ userData: dataObject }))
        // alert("updated display name");
        setChangeDisplayName(false);
    }
    const deleteAccount = () => {

        let userData = JSON.parse(localStorage.getItem("existingusers"));

        const newData = userData.filter((item) => item.email != emailId);

        localStorage.setItem("existingusers", JSON.stringify(newData));
        console.log("Hi There");
        history.replace('/register')
    }
    return (
        <Container className="mt-3">
            <Row>
                <Col className="d-flex justify-content-center">
                    <h3>Hi {state.userDetails[0].displayName}</h3>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <Table className="w-50">
                        <tbody>

                            <tr>
                                <td>E-Mail Id</td>
                                <td>{state.userDetails[0].email}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Display Name</td>
                                <td>{changeDisplayName ? <Form.Control type="text" ref={displayNameRef}></Form.Control> : state.userDetails[0].displayName}</td>
                                <td><Button variant={changeDisplayName ? "success" : "danger"} onClick={changeDisplayName ? updateDisplayName : enableChangeDisplayName}>{changeDisplayName ? "Update" : "Change"}</Button></td>
                                {changeDisplayName ? <td><Button variant="danger" onClick={cancelChangeDisplayName}>Cancel</Button></td> : <td></td>}

                            </tr>
                            <tr>
                                <td>Password </td>
                                <td>{changePassWord ? <Form.Control type="password" ref={passwordRef}></Form.Control> : state.userDetails[0].password}</td>
                                <td><Button variant={changePassWord ? "success" : "danger"} onClick={changePassWord ? updatePassword : enableChangePassword}>{changePassWord ? "Update" : "Change"}</Button></td>
                                {changePassWord ? <td><Button variant="danger" onClick={cancelPasswordChange}>Cancel</Button></td> : <td></td>}
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <Button variant="primary" className="w-25 rounded-pill" onClick={deleteAccount}>Delete User</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Container className="mt-3">
                        <Accordion >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Country Details</Accordion.Header>
                                <Accordion.Body>
                                    <CountryDetails data={countryDetails[0]}></CountryDetails>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Container>
                </Col>
            </Row>
            
        </Container>
    );
}

export default Profile