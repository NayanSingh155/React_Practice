import React from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Navbar = () => {

  return (

    <NavB>

      <ul>

        <li> <Link to="/todos">Home</Link> </li>

        <li> <Link to="/Todo/create">Create Todo</Link> </li>

        <li> <Link to="/signup">Signup</Link> </li>

        <li> <Link to="/login">Login</Link> </li>
        

      </ul>

    </NavB>
  )
}

const NavB = styled.div`

    border: 1px solid black;

    ul{
        display: flex;

        gap: 1rem;

        list-style: none;

        li{

            a{

                text-decoration: none;
            }
        }
    }
`;

export default Navbar