import React from 'react';
const Tutorial = (props) => {
  return (
      <div className="col-sm-4">
          <div className="card" style={{width: "18rem"}}>
            <img src={props.tutorial.image.url} className="card-img-top" alt="shirt"/>
            <div className="card-body">
              <h5 className="card-title">{props.tutorial.title}</h5>
              <p className="card-title">{props.tutorial.description}</p>
              <p className="card-title">{props.tutorial.body}</p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
      </div>
  );
}
export default Tutorial;
