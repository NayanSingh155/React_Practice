import React from "react";
import "../App.css";
const Card = (e) => {
  return (
    <div className="card">
      {e.gender === "Male" ? (
        <img
          alt="avatar"
          src="https://www.bing.com/th?id=OIP.4075ArVPhZcBsApgioPnSAHaH6&w=150&h=161&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
        />
      ) : (
        <img
          alt="avatar"
          src="https://www.bing.com/th?id=OIP.inXSw5jbycIIlXC1dIXdiwHaIL&w=150&h=166&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
        />
      )}
      <div>
        <h3>Name : {e.name}</h3>
        <h3>Age : {e.age}</h3>
        <h3>Gender : {e.gender}</h3>
        <h3>Country : {e.country}</h3>
        <h3>Profession : {e.profession}</h3>
      </div>
    </div>
  );
};

export default Card;
