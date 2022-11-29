import React from "react";
import { AiFillStar, AiOutlineFork } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import style from "../Styles/Card.module.css";
const Card = (e) => {
  return (
   <a  href={e.svn_url} target="_blank" rel="noreferrer" >
       <div className={style.card} >
      <img src={e.owner.avatar_url} alt="avatar" />
      <h3>Repo: {e.name}</h3>
      <h4>Language: {e.language}</h4>
      <div>
        <div>
          <AiFillStar className={style.star} /> <p>{e.stargazers_count}</p>{" "}
        </div>
        <div>
          <AiOutlineFork className={style.fork} />
          <p>{e.forks}</p>
        </div>
      </div>
    </div>
   </a>
  );
};

export default Card;
