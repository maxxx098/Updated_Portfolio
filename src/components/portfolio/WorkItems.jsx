import React from 'react'


function WorkItems({item}) {
  return (
  <div className="work_card" key={item.id}>
     <img src={item.image} alt="" className='work_img'/>
     <h3 className="work_title">{item.title}</h3>
     <p className='work_paragraph'>{item.description}</p>
     <a href={item.URL} rel="noreferrer" target="_blank"><div  className="work_button">
        Demo   <i className="bx bx-right-arrow-alt work_button-icon"></i>
     </div></a>
  </div>
 
  );
};

export default WorkItems