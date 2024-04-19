import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.0rem;
  background:  ${props => props.cart ? "#EC514C" : "#B67D48"};
  border: 0.05rem solid #B67D48;
  border-color: ${props => props.cart ? "#EC514C" : "#B67D48"};
  border-radius: 0.5rem;
  color: #FFFFFF;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
`;
