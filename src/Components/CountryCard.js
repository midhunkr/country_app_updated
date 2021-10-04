import { useEffect, useState } from 'react';
import { Col, Container, Row, Table, Button,Modal } from 'react-bootstrap';
import CountryDetails from './CountryDetails';
import {addToFavourites,removeFromFavourites} from "../State/Slices/favouritesSlice.js"
import './Country.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function CountryCard(props) {
    const firstButtonName=props.firstButtonName;
    const state=useSelector((state)=>state.favourites)
    const countryFullDetails= props.countryData;
    const countryName = props.countryData.name;
    const currency = props.countryData.currencyName;
    const continent = props.countryData.continent;
    let [isCountryAdded,setIsCountryAdded]=useState(false)
    const [adding,setAdding]=useState(false)
    const dispatch=useDispatch()
    const [show, setShow] = useState(false);
    const showDetails = () =>setShow(true)
    const closeDeatils=()=>setShow(false)
    useEffect(()=>{
        setAdding(true)
        setIsCountryAdded(state.isCountryAdded.some((item)=>item.name==countryName&&item.isAdded))
        setAdding(false)
    },[])
   
    const moveToFavourites=()=>{
        setAdding(true)
        if(state.isCountryAdded.some((item)=>item.name==countryName&&item.isAdded))
        {
            alert("Item already added")
        }
        dispatch(addToFavourites({favouriteCountry:countryFullDetails}))
        
        setIsCountryAdded(isCountryAdded=state.isCountryAdded.some((item)=>item.name==countryName&&item.isAdded))
        setAdding(false)
    }
    const deleteFromFavourites=()=>{
        dispatch(removeFromFavourites({country:countryName}))
        setIsCountryAdded(false)
    }
    const firstButtonAction=firstButtonName=="Favourite"?moveToFavourites:deleteFromFavourites;

    return (
        <div className="card border rounded m-3">
            <Container className="m-3">
                <Table borderless>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{countryName}</td>
                        </tr>
                        <tr>
                            <td>Continent</td>
                            <td>{continent}</td>
                        </tr>
                        <tr>
                            <td>Currency</td>
                            <td>{currency}</td>
                        </tr>
                    </tbody>
                </Table>
                <Container fluid className="d-flex justify-content-around" >
                    <Button variant="danger" className=" rounded-pill" onClick={firstButtonAction}>{firstButtonName=="Favourite"?adding?"Adding":isCountryAdded?"Added":firstButtonName:firstButtonName}</Button>
                    <Button variant="warning" className="rounded-pill" onClick={showDetails}>Details</Button>
                </Container>

            </Container>
            <Modal show={show} onHide={closeDeatils} size='xl'>
                <Modal.Header closeButton >
                    <Modal.Title >Country Details</Modal.Title>
                </Modal.Header>
                <Modal.Body><CountryDetails data={countryFullDetails}></CountryDetails> </Modal.Body>
               
            </Modal>
        </div>
    );
}

export default CountryCard