import React, { useEffect, useState } from 'react';
import '../styles/homePage.css';
import '../styles/reusable.css';
import { Col, Container, Row } from 'react-bootstrap';
import { HomePageHeader, Sidebar, HomePageMainSection } from '../components';
import HomePageContext from '../context/HomePageContext.jsx';

const HomePage = () => {
    const [sectionNum, setSectionNum] = useState(1);
    const [lineStyle, setLineStyle] = useState({ height: '35vh'});
    const [isCardFixed, setIsCardFixed] = useState(false);
    const [color, setColor] = useState('green');
    const [position, setPosition] = useState('');
    const [isSectionBottom, setIsSectionBottom] = useState(false);
    const [columns, setColumns] = useState(3);

    const sections = ['first', 'Typy', 'Typy', 'Typy', 'third']
  
    useEffect(() => {
        let timeout;
        let lastScrollTop = window.scrollY;
        const section = document.querySelector('.homepage');


        function getSectionHeight() {
            const sectionHeight = section.clientHeight;
            return sectionHeight;
        }


        function checkAlignment() {
            const scrollTop = window.scrollY;

            const rect = getSectionHeight();
            if (scrollTop > rect / 5 * 3) {
                setPosition(prev => prev === 'fixed' ? '' : prev);
                setIsSectionBottom(true);
            } else if (scrollTop < rect / 5) {
                setPosition(prev => prev === 'fixed' ? '' : prev);
                setIsSectionBottom(false);
            } else if (scrollTop > rect / 5 && scrollTop < rect / 5 * 3) {
                setPosition(prev => prev === '' ? 'fixed' : prev);
                setIsSectionBottom(true);
            }

            if(scrollTop < rect / 5 * 2)
                setColor('green');
            else if(scrollTop < rect / 5 * 3)
                setColor('red');
            else
                setColor('white');
        }
      
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const winHeight = window.innerHeight;
            const isScrollingDown = scrollTop > lastScrollTop;
            lastScrollTop = scrollTop; // Update lastScrollTop to current position after comparing
            const sectionScroll = scrollTop % winHeight;

            let snapThreshold = isScrollingDown ? 0.45 : -0.4;

            const offset = winHeight * snapThreshold;
            const nearestSection = Math.round((scrollTop + offset) / winHeight) * winHeight;
            const newSectionNum = nearestSection / winHeight + 1; // 1-based index
    
            let newHeight = '30vh';
            if (sectionScroll > winHeight * 0.2 && sectionScroll < winHeight * 0.8) {
                newHeight = '35vh';
            }
    
            setLineStyle(prev => ({ ...prev, height: newHeight }));
    
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setSectionNum(newSectionNum);
                window.scrollTo({
                    top: nearestSection,
                    behavior: isScrollingDown && sectionNum > 2 && sectionNum < 4 ? 'instant' : 'smooth',
                });

            }, 100);
        };
    
        const handleKeyDown = (event) => {
            if (event.key === "ArrowDown" && sectionNum === 2) {
                console.log("Arrow down pressed on section 2");
            }
        };
    
        window.addEventListener('scroll', checkAlignment);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('load', checkAlignment);
      
        return () => {
            clearTimeout(timeout);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('load', checkAlignment);
            window.removeEventListener('scroll', checkAlignment);
        };
    }, [sectionNum]);

    useEffect(() => {
        console.log(position, color);
    }, [position, color]);

    const value = React.useMemo(() => ({
        sectionNum,
        lineStyle,
        sections,
        isCardFixed,
        columns,
        setColumns
    }), [lineStyle, sectionNum, isCardFixed, columns, setColumns]);

    return(
        <Container fluid className='homepage base-width px-xl-0 vh500 relative'>
            <HomePageContext.Provider value={value}>
                <Sidebar />
                <Row>
                    <HomePageHeader />
                    <div className='marginTopAuto w-100' style={{position: 'absolute', top: !isSectionBottom ? '100vh' : '300vh'}}>
                        <HomePageMainSection position={position} color={color} />
                    </div>
                    <div className='marginTopAuto absoluteBottom'>
                        <HomePageHeader />
                    </div>
                </Row>
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