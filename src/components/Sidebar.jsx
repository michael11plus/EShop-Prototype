import React from 'react';
import '../styles/sidebar.css'
import HomePageContext from '../context/HomePageContext';

const Sidebar = () => {
      const { sectionNum, lineStyle, sections } = React.useContext(HomePageContext);
      return (
        <div>
            <div
                className='sidebar px-3 px-xl-0 d-flex flex-column'
                style={{
                    opacity: (sectionNum === sections.length + 1) ? '0' : '1', // Dynamically set opacity
                    transition: 'opacity 1s', // Smooth transition for opacity
                }}
            >
                <div className='line' style={lineStyle}>
                </div>
                <div className='section-name' style={{margin: (sectionNum === sections.length + 1) ? '0' : '20px 0'}}>{sections[sectionNum - 1]}</div>
                <div className='line' style={lineStyle}>
                </div>
            </div>
        </div>
      );
};

export default Sidebar;