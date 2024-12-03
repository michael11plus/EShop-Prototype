import React, { useEffect, useState } from 'react';
import '../styles/homePage.css';
import '../styles/reusable.css';
import { Col, Container, Row } from 'react-bootstrap';
import { HomePageHeader, Sidebar, HomePageMainSection } from '../components';
import HomePageContext from '../context/HomePageContext.jsx';

const HomePage = () => {
    const [sectionNum, setSectionNum] = useState(1);
    const [lineStyle, setLineStyle] = useState({ height: '35vh'});
    const [color, setColor] = useState('green')

    const sections = ['first', 'Typy', 'third']

  
    useEffect(() => {
        let timeout;
        let lastScrollTop = window.scrollY;
      
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const winHeight = window.innerHeight;
            const isScrollingDown = scrollTop > lastScrollTop;
            lastScrollTop = scrollTop; // Update lastScrollTop to current position after comparing
            const sectionScroll = scrollTop % winHeight;
    
            let newHeight = '35vh';
            if (sectionScroll > winHeight * 0.2 && sectionScroll < winHeight * 0.8) {
                newHeight = '50vh';
            }
    
            setLineStyle(prev => ({ ...prev, height: newHeight }));
    
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                const snapThreshold = isScrollingDown ? 0.4 : -0.4;
                const offset = winHeight * snapThreshold;
                const nearestSection = Math.round((scrollTop + offset) / winHeight) * winHeight;
                const newSectionNum = nearestSection / winHeight + 1; // 1-based index
    
                if (newSectionNum === 2) {
                    if(color === 'green' && isScrollingDown)
                    {
                        
                    }
                    else
                        setColor('white');
                }
                setSectionNum(newSectionNum);
    
                window.scrollTo({
                    top: nearestSection,
                    behavior: 'smooth',
                });
            }, 100);
        };
    
        const handleKeyDown = (event) => {
            if (event.key === "ArrowDown" && sectionNum === 2) {
                console.log("Arrow down pressed on section 2");
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('keydown', handleKeyDown);
      
        return () => {
            clearTimeout(timeout);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [sectionNum]);

    const value = React.useMemo(() => ({
        sectionNum,
        lineStyle,
        sections
    }), [lineStyle, sectionNum]);

    return(
        <Container fluid className='homepage base-width px-xl-0'>
            <HomePageContext.Provider value={value}>
                {}
                <Row
                    className='ps-4 pe-3 pe-xl-0 d-flex justify-content-between base-width'
                    style={{position: 'fixed', visibility: sectionNum === 2 ? 'visible' : 'hidden', top: '15vh'}}
                >
                    <Col xs={6}>
                        name
                    </Col>
                    <Col className='text-end' xs={6}>
                        indicator
                    </Col>
                </Row>
                <Sidebar />
                <HomePageHeader />
                <HomePageMainSection />
                <HomePageMainSection />
            </HomePageContext.Provider>
        </Container>
    );
}




















/*
const HomePage = () => {
    const [ request, setRequest ] = useState({
        products: null,
    })

    useEffect(() => {
        (async () => {
            const response = await getAllProducts();
            const data = response.data.data.products;

            if((200 <= response?.status) && (response?.status < 300))
                setRequest(prev => ({
                    ...prev,
                    products: [...data]
                }));
        })();
    }, []);
    
    return(
        <Container fluid>
            <Row>
                <Col>
                    {
                        request?.products?.map(item => {
                            return(
                                <ProductCard {...item} key={item.name} />
                            );
                        })
                    }
                </Col>
            </Row>
        </Container>
    );
}; */

export default HomePage;