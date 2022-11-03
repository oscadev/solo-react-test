import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

export default function ResultRow({ name, party, selected, onClick }) {
  return (
    <Wrapper selected={selected} onClick={onClick}>
      <Name>{name}</Name>
      <Party>{party}</Party>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  cursor: pointer;
  width: 100%;
  height: 40px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid transparent;
  font-weight: 300;
  ${(props) =>
    props.selected
      ? `border: 1px solid ${colors.blue.base};`
      : `border-bottom: 1px solid ${colors.grey.light};`}

  font-size: small;
  :nth-child(1) {
    cursor: initial;
    background-color: ${colors.grey.light};
    color: ${colors.grey.dark};
  }
`;
const Name = styled.p``;

const Party = styled.p`
  width: 95px;
`;
