import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"
import CountryCard from "./CountryCard";

function DataGrid(props) {
    const country = props.data;
    const firstButtonName = props.firstButtonName;
    const firstButtonAction = props.firstButtonAction;
    console.log(country.length);
    console.log(country[0]);
    const data = []
    if (country.length % 3 == 2) {

        let index = 0;
        if (country.length == 2) {
            let element = <> <Row key={index}>
                <Col md={4}>
                    <CountryCard countryData={country[index]} key={country[index].name} firstButtonName={firstButtonName}></CountryCard>
                </Col>
                <Col md={4}>
                    <CountryCard countryData={country[index + 1]} key={country[index + 1].name} firstButtonName={firstButtonName}></CountryCard>
                </Col>
            </Row>

            </>;
            data.push(element)

        }
        else {
            let element = <> <Row key={index}>
                <Col md={4}>
                    <CountryCard countryData={country[index]} key={country[index].name} firstButtonName={firstButtonName}></CountryCard>
                </Col>
                <Col md={4}>
                    <CountryCard countryData={country[index + 1]} key={country[index + 1].name} firstButtonName={firstButtonName}></CountryCard>
                </Col>
                <Col md={4}>
                    <CountryCard countryData={country[index + 2]} key={country[index + 2].name} firstButtonName={firstButtonName}></CountryCard>
                </Col></Row>
                <Row key={index}>
                    <Col md={4}>
                        <CountryCard countryData={country[index + 3]} key={country[index].name} firstButtonName={firstButtonName}></CountryCard>
                    </Col>
                    <Col md={4}>
                        <CountryCard countryData={country[index + 4]} key={country[index + 1].name} firstButtonName={firstButtonName}></CountryCard>
                    </Col>
                </Row>
            </>;
            data.push(element)

        }


    }
    else if (country.length % 3 == 1) {
        let index = 0;
        if (country.length == 4) {
            let element = <> <Row key={index}>
                <Col md={4}>
                    <CountryCard countryData={country[index]} key={country[index].name} firstButtonName={firstButtonName}></CountryCard>
                </Col>
                <Col md={4}>
                    <CountryCard countryData={country[index + 1]} key={country[index + 1].name} firstButtonName={firstButtonName}></CountryCard>
                </Col>
                <Col md={4}>
                    <CountryCard countryData={country[index + 2]} key={country[index + 2].name} firstButtonName={firstButtonName}></CountryCard>
                </Col></Row>
                <Row key={index}>
                    <Col md={4}>
                        <CountryCard countryData={country[index + 3]} key={country[index].name} firstButtonName={firstButtonName}></CountryCard>
                    </Col>
                </Row>
            </>;
            data.push(element)
        }
        else {
            let element = <> <Row key={index}>
                <Col md={4}>
                    <CountryCard countryData={country[index]} key={country[index].name} firstButtonName={firstButtonName}></CountryCard>
                </Col>
            </Row>

            </>;
            data.push(element)
        }
    }
    else if (country.length % 3 == 0) {
        let index = 0;
        let element = <> <Row key={index}>
            <Col md={4}>
                <CountryCard countryData={country[index]} key={country[index].name} firstButtonName={firstButtonName}></CountryCard>
            </Col>
            <Col md={4}>
                <CountryCard countryData={country[index + 1]} key={country[index + 1].name} firstButtonName={firstButtonName}></CountryCard>
            </Col>
            <Col md={4}>
                <CountryCard countryData={country[index + 2]} key={country[index + 2].name} firstButtonName={firstButtonName}></CountryCard>
            </Col></Row>
        </>;
       
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