import React, { useEffect, useState } from "react";

const Users = ({ users }) => {
  return (
    <div>
      {users.map((e) => (
        <div key={e.id}>{e.name}</div>
      ))}
    </div>
  );
};
export const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );
  return {
    props: { users: data },
  };
};
export default Users;
