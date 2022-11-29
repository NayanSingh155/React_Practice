import React from "react";
import ShowItem from "./ShowItem";

import { useState, useEffect } from "react";
import data from "../db.json";
function List() {
  const [list, setList] = useState(data.data);
  const [page, setPage] = useState(1);
  const [isAuth, setIsAuth] = useState(false);
  const getTodo = () => {
    fetch(`http://localhost:3004/data?_page=${page}&_limit=4`)
      .then((d) => d.json())
      .then((res) => {
        setList(res);
      });
  };
  useEffect(() => {
    getTodo();
  }, [page]);

  const sort = (value) => {
    let newdata = data.data
      .filter((el) => el.rating >= value)
      .sort((a, b) => a.rating - b.rating);
    setList(newdata);
    console.log(newdata);
  };
  const handleSort = () => {
    const newList = [];
    list.map((e) => {
      return newList.push(e);
    });
    newList.sort((a, b) => {
      return a.cost_for_two - b.cost_for_two;
    });
   
    setList(newList);
  };
  const handleSortHi=() => {
    const newList = [];
    list.map((e) => {
      return newList.push(e);
    });
    newList.sort((a, b) => {
      return b.cost_for_two - a.cost_for_two;
    });
   
    setList(newList);
  }
  const handleMove = (v) => {
    setPage(page + v);
  };
  const pageNo = Array(Math.floor(data.data.length / 4)).fill(1);

  return (
    <div>
      <div>
        <div>Sort By star</div>
        <div
          onClick={() => {
            setIsAuth(true);
          }}
        >
          <div>
            <button onClick={() => sort(1)}>🌟</button>
            <button onClick={() => sort(2)}>🌟🌟</button>
            <button onClick={() => sort(3)}>🌟🌟🌟</button>
            <button onClick={() => sort(4)}>🌟🌟🌟🌟</button>
            <button onClick={() => sort(5)}>🌟🌟🌟🌟🌟</button>
          </div>
        </div>
        <div> <div>Sort by Price</div>
        <button onClick={handleSort}>Low To High</button>
        <button onClick={handleSortHi}> High To Low</button></div>
       
        <div>
          <button
            onClick={() => {
              let newlist = data.data.filter((el) => {
                return el.payment_methods === "Card";
              });
              setList(newlist);
            }}
          >
            Card
          </button>
          <button
            onClick={() => {
              let newlist = data.data.filter((el) => {
                return el.payment_methods === "Cash";
              });
              setList(newlist);
            }}
          >
            Cash
          </button>
        </div>
      </div>

      <div className="list-container">
        {list.map((item) => {
          return (
            <div>
              <ShowItem key={item.id} item={item} />
            </div>
          );
        })}
      </div>
      <div className="prev_next-btns">
        <button onClick={() => handleMove(-1)}>Prev Page</button>
        <div>
          . .
          {pageNo.map((e, i) => {
            return <span> . . {i + 1}</span>;
          })}
        </div>
        <button onClick={() => handleMove(1)}>Next Page</button>
      </div>
    </div>
  );
}

export default List;
