import React from 'react';

const Recommend = ({ recommendation }) => {
  return (
    <div className="recommend-container">
      <h3 className="recommend-title">Recommended For You</h3>
     
      {!recommendation ? (
        <p className="recommend-empty">No recommendations yet. Add something to your cart!</p>
      ) : (
        <div className="recommend-card">
          <img 
            src={recommendation.image} 
            alt={recommendation.name} 
            className="recommend-image"
            loading="lazy"
          />
          <div className="recommend-info">
            <h4>{recommendation.name}</h4>
            <p className="recommend-price">${recommendation.price}</p>
            <button className="recommend-btn">View Details</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recommend;