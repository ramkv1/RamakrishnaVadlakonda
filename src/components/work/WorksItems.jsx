import React from 'react';

const WorksItems = ({item}) => {
    return(
       <div className="work__card" key={item.id}>
        <img src={item.work} alt="" className="work__img" />
        <h3 className="work__title">{item.title}</h3>       
       </div>
    )
}

export default WorksItems
