import { Pagination } from 'react-bootstrap'
function PaginationFrame(props) {
    const itemLength = props.length;
    const pageNumbers = [];
    const change=props.change;
    for (let i = 1; i <=itemLength; i++) {
        pageNumbers.push(<Pagination.Item onClick={()=>{change(i-1)}}>{i}</Pagination.Item>)
    }
    return (

        <Pagination>
           
            <Pagination.Prev />
            {pageNumbers}
            <Pagination.Next />
           
        </Pagination>
    )

}

export default PaginationFrame;