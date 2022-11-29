import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import "../Styles/Spinner.css";
import style from "../Styles/Card.module.css";

const JS = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(false);
  const [pageNumber,setPageNumber]=useState(1)
  const [pages] = useState(Math.round(data.length / 10));
  function goToNextPage() {
    setPageNumber((page) => page + 1);
  }
  function goToPreviousPage() {
    setPageNumber((page) => page - 1);
  }
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setPageNumber(pageNumber);
  }

  const getPaginationGroup = () => {
    let start = Math.floor((pageNumber - 1) / 10) * 10;
    return new Array(10).fill().map((_, idx) => start + idx + 1);
  };
  useEffect(() => {
    setLoad(true);
    axios
      .get(
        `https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&per_page=10&page=${pageNumber}`
      )
      .then(({ data }) => {
        console.log(data)
        setLoad(false);
        
        setData(data.items);
       
      })
      .catch((e) => setErr(true));

  }, [pageNumber]);
  return (
    <div>
      {load ? (
        <div className="loading-spinner"></div>
      ) : err ? (
        <div>Something Went Wrong...</div>
      ) : (
        <>
        <div className={style.container} >
          {data.map((e, i) => (
            <Card key={e.id} {...e} />
          ))}
        </div>
        <div className={style.pagination}>
      <button
        onClick={goToPreviousPage}
        className={`prev ${pageNumber === 1 ? 'disabled' : ''}`}
      >
        prev
      </button>
      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`paginationItem ${pageNumber === item ? 'active' : null}`}
        >
          <span>{item}</span>
        </button>
      ))}

     
      <button
        onClick={goToNextPage}
        className={`next ${pageNumber === pages ? 'disabled' : ''}`}
      >
        next
      </button>
    </div>
        </>
      )}
    </div>
  );
};

export default JS;
