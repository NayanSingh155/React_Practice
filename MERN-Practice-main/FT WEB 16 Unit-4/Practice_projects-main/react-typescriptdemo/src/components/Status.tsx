import React from 'react'
type StatusProp ={
    status: 'loading' |'success' | 'error'
}
function Status(props: StatusProp) {
    let msg;
    if(props.status ==="loading" ){
        msg = "Loading ..."
    }else if(props.status ==='success'){
        msg="data fetched successfully"
    }else if(props.status ==='error' ){
        msg = "Error fetching data"
    }
  return (
    <div>
        <h2>status:{msg}</h2>
        {/* <h2> Loading ...</h2>
        <h2>Data fetched successfully</h2>
        <h2>Error fetching data</h2> */}
    </div>
  )
}

export default Status