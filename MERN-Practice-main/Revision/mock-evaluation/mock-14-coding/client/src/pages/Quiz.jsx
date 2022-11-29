import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callForGetData, getData, getError, getLoading } from "../redux/action";

const Quiz = () => {
  const dispatch = useDispatch();
  const { loading, error, filter, data } = useSelector((store) => store);
  // console.log(filter);
  useEffect(() => {
    dispatch(getLoading());
    axios
      .get(`https://mock14.herokuapp.com/quiz/`)
      .then((res) => {
        console.log(res.data);
        dispatch(getData(res.data));
      })
      .catch((err) => dispatch(getError()));
  }, []);

  return (
    <div>
      {loading ? (
        <>Loading....</>
      ) : error ? (
        <>Something went wrong...</>
      ) : (
        <>{data && data.map((e, i) => <div key={e._id} >
          <h3>{e.question}</h3>
          {e.incorrect_answers.map((e,i)=>(
            <div key={i}  >{e}</div>
          ))}
          <div style={{cursor:"pointer"}} >{e.correct_answer}</div>
        </div>)}</>
      )}
    </div>
  );
};

export default Quiz;
