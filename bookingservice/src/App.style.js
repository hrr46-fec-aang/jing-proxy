import styled from 'styled-components'

const Button = styled.button`
width: 100%;
background-color: #40d9ac;
color: #ffffff;
height: 3.5rem;

font-size: 1.2rem;
font-weight: 500;
transition: all 0.25s ease-in-out !important;
text-align: center;
cursor: pointer;
border: none;
position: relative;
display: inline-block;
border-radius: 0;
&:hover:not(:disabled) {
  background-color: #ffffff;
  color: #40d9ac;
  border: 3px solid #40d9ac;
}

&:hover:not(:disabled) {
  transform: translateY(-1px);
}

&:focus {
  outline: 0.5px solid #40d9ac;
  background-color: #40D8C5;

  transition: outline 0.25s ease-in-out;
`;

export default Button;