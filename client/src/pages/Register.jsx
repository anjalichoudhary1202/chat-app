import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Logo from "../assets/logo.svg";
function Register() {

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("form");
  }

  const handleChange = (event) => {

  }
  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className='brand'>
            <img src={Logo} alt="Logo" />
            <h1>Connectify</h1>
          </div>
          <input
            type="text"
            placeholder='Username'
            name='username'
            onChange={(e) => handleSubmit(e)}
          />
          <input
            type="email"
            placeholder='Email'
            name='email'
            onChange={(e) => handleSubmit(e)}
          />
          <input
            type="password"
            placeholder='Password'
            name='password'
            onChange={(e) => handleSubmit(e)}
          />
          <input
            type="password"
            placeholder='Confirm Password'
            name='confirmPassword'
            onChange={(e) => handleSubmit(e)}
          />
          <button type='submit'>Create User</button>
          <span>
            Already have an account ? <Link to="/login">Login</Link>
          </span>
        </form>
      </FormContainer>
    </>
  )
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display : flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    img {
      height: 5rem;
    }
    h1{
      color: white;
    }
  }
`;

export default Register;
