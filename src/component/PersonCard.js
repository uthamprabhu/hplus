import React from 'react';

const PersonCard = ({ dynamicSlug, fullName, title, description }) => {
  return (
    <div className="person-card">
      <img src={`images/employees/${dynamicSlug}`} alt={`${fullName}`} />
      <div className="card-info">
        <h3 className="card-name">{fullName}</h3>
        <h4 className="card-title">{title}</h4>
      </div>
      <p className="card-text" dangerouslySetInnerHTML={{__html: description}} />
    </div>
  );
}

export default PersonCard;