import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios'
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #333;
  font-family: 'Poppins', sans-serif;
  
`;

const FormWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 50px;
  width: 380px;
  max-width: 100%;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.001);
  }
`;

const Title = styled.h2`
  font-size: 32px;
  color: #ff5722;
  margin-bottom: 30px;
  font-weight: 600;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 300px;
  padding: 15px;
  margin: 12px 0;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f7f7f7;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #ff5722;
    outline: none;
    box-shadow: 0 0 5px rgba(255, 87, 34, 0.3);
  }
`;

const ToggleButton = styled.div`
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #ff5722;
`;

const Button = styled.button`
  width: 180px;
  padding: 15px;
  background-color: #ff5722;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #e64a19;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ToggleFormLink = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
    color: #ff5722;
  }
`;
interface Inputs{
    name?:String,
    email:String,
    password:String
}
const AuthPage = () => {
    const nav = useNavigate()
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
    const [inputValue,setInputValues] = useState<Inputs>({
        email:'',password:'',name:''
    })
  const handleToggle = () => {
    setIsLogin(!isLogin);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleInputChange = (e)=>{
    const { name, value } = e.target;
    setInputValues({
        ...inputValue,
        [name]:value
    })
  }
  const authenticate = async(e)=>{
    e.preventDefault();
    try{
        let auth = await axios.post(`http://localhost:4000/${isLogin?'login':'signup'}`,{...inputValue})
        const {message,success} = auth.data;
        if(success){
            nav('/')
        }else{
            nav('/login')
        }
    }catch(err){
        console.log('Error in authenticating',err)
    }
  }
  return (
    <Container>
      <FormWrapper>
        <Title>{isLogin ? 'Login' : 'Sign Up'}</Title>
        
        <form>
        <InputWrapper>
          {!isLogin && <Input type="text" name='name' placeholder="Name" onChange={handleInputChange} required />}
        </InputWrapper>
          <InputWrapper>
          <Input type="email" name='email' placeholder="Email" onChange={handleInputChange} required />
          </InputWrapper>
          <InputWrapper>
          <Input  type={showPassword ? 'text' : 'password'} name='password' placeholder="Password" onChange={handleInputChange} required />
          <ToggleButton onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </ToggleButton>
          </InputWrapper>
          
          <Button type="submit" onClick={authenticate}>{isLogin ? 'Login' : 'Sign Up'}</Button>
        </form>
        
        <ToggleFormLink onClick={handleToggle}>
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
        </ToggleFormLink>
      </FormWrapper>
    </Container>
  );
};

export default AuthPage;
