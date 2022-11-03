import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

export const InfoBox = ({ personInfo }) => {
  return (
    <Wrapper>
      <BoxTitle>Info</BoxTitle>
      <RowElement>
        <span>First Name</span>
        {personInfo?.name ? personInfo.name.split(" ")[0] : null}
      </RowElement>
      <RowElement>
        <span>Last Name</span>
        {personInfo?.name ? personInfo.name.split(" ")[1] : null}
      </RowElement>
      <RowElement>
        <span>District</span>
        {personInfo?.district ? personInfo.district : null}
      </RowElement>
      <RowElement>
        <span>Phone</span>
        {personInfo?.phone ? personInfo.phone : null}
      </RowElement>
      <RowElement>
        <span>Office</span>
        {personInfo?.office ? personInfo.office : null}
      </RowElement>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  /* border: solid 1px grey; */
  gap: 20px;
`;
const BoxTitle = styled.h2`
  font-weight: 300;
  color: ${colors.grey.dark};
  span {
    color: ${colors.blue.base};
  }
`;

const RowElement = styled.div`
  width: 100%;
  /* height: 40px; */
  display: flex;
  align-items: center;
  background-color: ${colors.grey.light};
  border-radius: 4px;
  color: ${colors.blue.base};
  span {
    color: ${colors.grey.base};
    margin-right: 30px;
    width: 100px;
  }
  font-size: 1em;
  font-weight: 300;
  margin: 0;
  padding: 10px;
`;
