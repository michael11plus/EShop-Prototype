import React, {useState, useEffect} from 'react';
import '../styles/sidebar.css'

const Sidebar = () => {
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
    

      return (
        <div>
            <div
                className='sidebar d-flex flex-column'
                style={{
                    opacity: sectionNum === 4 ? '0' : '1', // Dynamically set opacity
                    transition: 'opacity 1s', // Smooth transition for opacity
                }}
            >
                <div className='line' style={lineStyle}>
                </div>
                <div className='section-name' style={{margin: sectionNum === 4 ? '0' : '20px 0'}}>{sections[sectionNum - 1]}</div>
                <div className='line' style={lineStyle}>
                </div>
            </div>
        </div>
      );
};

export default Sidebar;