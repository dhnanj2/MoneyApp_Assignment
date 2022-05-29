import data from "../data";
import {Link} from "react-router-dom"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Product from '../components/Product';

function HomeScreen() {
    return <div> 
        <h1>Featured Products</h1>
            <div className='products'>
                <Row>
                {data.products.map((product) => (
                    <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3"> 
                        <Product product={product}></Product> 
                    </Col>
                ))}
                </Row>
            </div>
    </div>;
}
export default HomeScreen;