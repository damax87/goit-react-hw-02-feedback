import styled from "styled-components";

export const FeedbackBtnCantainer = styled.div`
display: flex;
justify-content: space-between;
`;


export const FeedbackBtn = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  font-family: Inter,sans-serif;
  font-size: 16px;
  justify-content: center;
  line-height: 40px;
  min-width: 150px;
  text-align: center;
  text-decoration: none;
  transition: all .5s;
  &:hover {
  background-color: lightgreen;
}
  &:focus {
  background-color: lightgreen;
}
    `;