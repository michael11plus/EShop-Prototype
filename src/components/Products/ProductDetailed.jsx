import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import { greenPowderImg } from '../../assets';
import axios from "axios";



const ProductDetailed = ({productId}) => {
    const [request, setRequest] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            try {
                if (id) {
                    const response = await axios.get(`http://localhost:5500/products/${id}`);
                    console.log(response);
                }
            } catch (error) {
                console.log(error);   
            }
            
        })();
    }, [id]);



    return(
        <main className="px-3 px-xl-0 section">
            <Row>
                <Col>
                   <img
                        src={greenPowderImg}
                        alt='product image'
                        style={{width: '100%'}} /> 
                </Col>
                
                <Col>
                    <p></p>
                </Col>
            </Row>               
        </main>
    )
}

export default ProductDetailed;