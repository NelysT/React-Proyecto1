import React from "react";

const Card = () => {
  return (
    <div className="card mt-3 text-center" style={{width: "18rem"}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyCGVCxUdvAqcCINUYJfMCCHTV1aiO9CA_WfFsZvS8d1tqsOkxgojvwDjCdvV4P_bjPoQ&usqp=CAU" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <hr className="my-4"/>
        <a href="#" className="btn btn-primary">Find Out More!</a>
      </div>
    </div>
  );
};



export default Card;