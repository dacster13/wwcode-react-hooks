import React, { useState, useCallback } from 'react';

import 'bulma/css/bulma.css';
import './index.css';
 
/* 

let's create our profile using hooks

Goals for the activity:
  - Customize this profile page.
  - Create a Hearts button.
  - Create a Favorite button must only be clickable once and 
    show an alert saying that the favorite button is clicked.
 
*/

const App = () => {
  
  const [ likes, addLike ] = useState(0);
  const [ hearts, addHeart ] = useState(0);
  const [ favorite, setFavorite ] = useState(false);
  
  const handleLikeButtonClick = useCallback(() => addLike(likes + 1));
  const handleHeartButtonClick = useCallback(() => addHeart(hearts + 1));
  const handleFaveButtonClick = useCallback(() => {
    if (!favorite) {
      setFavorite(true);
      alert('You have added this to your favorites!');
    }
  });

  return (
    <div className="columns is-centered mt-2">
      <div className="column is-narrow is-half">
        <div className="card card-content">
          <div className="media">
            <div className="media-left">
              <img
                className="image is-48x48"
                src="https://images.unsplash.com/photo-1589779137147-3d388746b765?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="headshot"
              />
            </div>
            <div className="media-content">
              <p className="title is-4">Dexter L. Dacanay</p>
              <p className="subtitle is-6">Member, Women Who Code Manila</p>
              <div className="field is-grouped is-grouped-multiline">
                { /* likes */ }
                <div className="control">
                  <div
                    className="tags has-addons"
                    onClick={ handleLikeButtonClick }
                  >
                    <span className="tag is-info">Likes</span>
                    <span className="tag">{likes}</span>
                  </div>
                </div>
                
                { /* hearts */ }
                <div className="control">
                  <div
                    className="tags has-addons"
                    onClick={ handleHeartButtonClick }
                  >
                    <span className="tag is-danger">Hearts</span>
                    <span className="tag">{hearts}</span>
                  </div>
                </div>
                
                { /* favorite */ }
                <div className="control">
                  <div
                    className="tags has-addons"
                    onClick={ handleFaveButtonClick }
                  >
                    <span className={ favorite ? `tag is-success` : `tag is-info`  }>
                      { favorite ? `Added to favorites` : `Fav this!` }
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
