import './App.css';
import { Button, Row, Col, Container, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function Products() {

    const [productList, setproductList] = useState([{ "productId": 1, "ProductName": "Milk" }, { "productId": 2, "ProductName": "Coffee" }, { "productId": 3, "ProductName": "Oranges" }, { "productId": 4, "ProductName": "Bread" }]);
    const [prevProductList, setprevProductList] = useState(productList);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const delayedFN = setTimeout(() => {
            Search();
        }, 2000)

        return () => clearTimeout(delayedFN)
    }, [searchTerm])

    let proList =
        productList.map(item => {
            return (
                <Card>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{item.ProductName}</li>
                    </ul>
                </Card>
            )
        });

    const AddItem =() => {
        var obj = { productId: productList.length + 1, ProductName: "randomValue" };
        setproductList([...productList, obj])
    }

    const Search = () => {
        if (searchTerm !== '') {
            setprevProductList(productList);
            setproductList(productList.filter(item => item.ProductName.toLowerCase().match(searchTerm)));
        }
        else
            setproductList(prevProductList);
    }

    return (
        <Container style={{ borderColor: "red", borderStyle: 'solid', width: '400px', marginTop: '100px' }}>

                <Row style={{ textAlign: "center", marginTop: "50px" }}>
                    <Col md={9} style={{ textAlign: "left" }}>
                        <input class="form-control" placeholder="Search" type="text" onChange={(e) => setSearchTerm(e.target.value)} />
                    </Col>
                    <Col md={1} style={{ textAlign: "left" }}>
                        <div style={{ float:"left" , height:"35px", width:"2px", backgroundColor:"black" }}></div>
                    </Col>
                    <Col md={2} style={{ textAlign: "left" }}>
                        <Button onClick={AddItem}>+</Button>
                    </Col>
                </Row>
                <hr></hr>
                <Row style={{ textAlign: "left", marginBottom: "100px" }}>
                    <Col>
                        {proList}
                    </Col>
                </Row>
        </Container>
    );
}
export default Products;
