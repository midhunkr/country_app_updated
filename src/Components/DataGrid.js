import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"
import CountryCard from "./CountryCard";

function DataGrid(props) {
    const country = props.data;
    const firstButtonName=props.firstButtonName;
    const firstButtonAction=props.firstButtonAction;
    console.log(country.length);
    console.log(country[0]);
    const data = []
    if (country.length % 3 == 0) {
        for (let index = 0; index <= country.length - 3; index = index + 3) {

            let element = <Row key={index}>
                <Col md={4}>
                    <CountryCard countryData={country[index]} key={country[index].name}  firstButtonName={firstButtonName}></CountryCard>
                </Col>
                <Col md={4}>
                    <CountryCard countryData={country[index + 1]} key={country[index + 1].name} firstButtonName={firstButtonName}></CountryCard>
                </Col>
                <Col md={4}>
                    <CountryCard countryData={country[index + 2]} key={country[index + 2].name} firstButtonName={firstButtonName}></CountryCard>
                </Col>

            </Row>;
            data.push(element)
        }
    }
    else if (country.length % 3 == 1) {
        for (let index = 0; index <=country.length - 3; index = index + 3) {

            let element = <Row key={index}>
                <Col md={4}>
                    <CountryCard countryData={country[index]} key={country[index].name} firstButtonName={firstButtonName}></CountryCard>
                </Col>
                <Col md={4}>
                    <CountryCard countryData={country[index + 1]} key={country[index + 1].name} firstButtonName={firstButtonName}></CountryCard>
                </Col>
                <Col md={4}>
                    <CountryCard countryData={country[index + 2]} key={country[index + 2].name} firstButtonName={firstButtonName}></CountryCard>
                </Col>

            </Row>;
            data.push(element)
        }
        let element = <Row key={country[country.length-1].currencyCode}>
            <Col md={4}>
                <CountryCard countryData={country[country.length-1]} key={country[country.length-1].name} firstButtonName={firstButtonName}></CountryCard>
            </Col>
            
           

        </Row>;
        data.push(element)
    }
    else if (country.length % 3 == 2) {
        for (let index = 0; index <=country.length - 3; index = index + 3) {

            let element = <Row key={index}>
                <Col md={4}>
                    <CountryCard countryData={country[index]} key={country[index].name} firstButtonName={firstButtonName}></CountryCard>
                </Col>
                <Col md={4}>
                    <CountryCard countryData={country[index + 1]} key={country[index + 1].name} firstButtonName={firstButtonName}></CountryCard>
                </Col>
                <Col md={4}>
                    <CountryCard countryData={country[index + 2]} key={country[index + 2].name} firstButtonName={firstButtonName}></CountryCard>
                </Col>

            </Row>;
            data.push(element)
        }
        let element = <Row key={country[country.length-1].currencyCode}>
            <Col md={4}>
                <CountryCard countryData={country[country.length-2]} key={country[country.length-2].name} firstButtonName={firstButtonName}></CountryCard>
            </Col>
            <Col md={4}>
                <CountryCard countryData={country[country.length-1]} key={country[country.length-1].name} firstButtonName={firstButtonName}></CountryCard>
            </Col>
           

        </Row>;
        data.push(element)
    }



    console.log('length');
    console.log(data.length);

    return (
        <Container>
            {data}
        </Container>
    )
}
export default DataGrid