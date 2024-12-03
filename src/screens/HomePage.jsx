import React, { useEffect, useState } from 'react';
import '../styles/homePage.css';
import '../styles/reusable.css';
import { Container } from 'react-bootstrap';
import { HomePageHeader, Sidebar, HomePageMainSection } from '../components';
import HomePageContext from '../context/HomePageContext.jsx';

const HomePage = () => {
    const [sectionNum, setSectionNum] = useState(1);
    const [lineStyle, setLineStyle] = useState({ height: '35vh'});

    const sections = ['first', 'Typy', 'third']

  
    useEffect(() => {
      let timeout;
      let lastScrollTop = window.scrollY;
  
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const winHeight = window.innerHeight;
  
        // Determine scroll direction
        const isScrollingDown = scrollTop > lastScrollTop;
        lastScrollTop = scrollTop;
  
        // Calculate scroll progress within the section
        const sectionScroll = scrollTop % winHeight;
  
        // Adjust line height based on scroll progress
        let newHeight = '35vh';
        if (sectionScroll > winHeight * 0.2 && sectionScroll < winHeight * 0.8) {
          newHeight = '50vh';
        }
  
        setLineStyle(prev => ({
            ...prev,
            height: newHeight,
        }));
  
        // Clear previous timeout and debounce snapping
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          const snapThreshold = isScrollingDown ? 0.4 : -0.4; // Adjust snapping thresholds
          const offset = winHeight * snapThreshold;
          const nearestSection = Math.round((scrollTop + offset) / winHeight) * winHeight;
  
          // Calculate current section based on the nearestSection
          const newSectionNum = nearestSection / winHeight + 1; // Add 1 to make it 1-based index
          setSectionNum(newSectionNum);
  
          // Snap to the nearest section

          window.scrollTo({
            top: nearestSection,
            behavior: 'smooth',
          });
        }, 100); // Adjust debounce delay for desired sensitivity
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        clearTimeout(timeout);
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const value = React.useMemo(() => ({
        sectionNum,
        lineStyle,
        sections
    }), [lineStyle, sectionNum]);

    return(
        <Container fluid className='homepage base-width px-3 px-xlg-0'>
            <HomePageContext.Provider value={value}>
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