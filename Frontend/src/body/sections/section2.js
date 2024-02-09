/* ------FEATURED BREED SECTION-------------*/

import React from 'react';
export default function Section2(props) {
  return (
    
    <div style={{zIndex:'1',marginTop:'30px'}}>
        
      <div className='card' style={{ width:'155px' }}>
        <img className='card-img-top' style={{height:'155px',margin:'5px'}} src={props.img} alt='Card image' />
        {/* <div className='card-body'> */}
        <div id='cardBody'>
            <h4 className='card-title'>{props.title}</h4>
          <p className='card-text'>
            {props.para}
          </p>
          <a href='#' className='btn btn-primary'>
            Explore
          </a>
        </div>
      </div>
    </div>
    
  );
}
