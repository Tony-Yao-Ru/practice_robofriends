import React from "react";

const Card = ({ name, email, id }) => {
  
  const getUser = () => {
    console.log(name + email);
  }

  return (
    <div onClick={()=>getUser({name}, {email})} className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
