import { Container, Table } from "react-bootstrap";

function CountryDetails(props) {
    const countryData=props.data;
    const listOfLevels=countryData.hierarchies[0].levelsInfo.geographyLevels;
    let geographicLevels='';
    listOfLevels.forEach((item)=>item==listOfLevels[listOfLevels.length-1]?geographicLevels=geographicLevels.concat(item):geographicLevels=geographicLevels.concat(item+','));
    console.log(geographicLevels);
    return (
        <div className=" d-flex justify-content-center">

            <Table striped bordered hover>

                <tbody>
                    <tr>


                        <td><h5>Name : {countryData.name}</h5></td>
                        <td><h5>Continent : {countryData.continent}</h5></td>
                        <td><h5>Currency Name : {countryData.currencyName}</h5></td>

                    </tr>
                    <tr>

                        <td><h5>Currency Symobol : {countryData.currencySymbol}</h5></td>
                        <td><h5>Currency Code :  {countryData.currencyCode}</h5></td>
                        <td><h5>Geography Levels: {geographicLevels}</h5></td>
                    </tr>
                   

                </tbody>
            </Table>
        </div>
    )
}

export default CountryDetails