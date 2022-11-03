import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import ResultRow from "./ResultRow";

export default function ResultsBox({ results, person, setPerson }) {
  return (
    <Wrapper>
      <BoxTitle>
        List / <span>Representatives</span>
      </BoxTitle>

      <List>
        <ResultRow name="Name" party="Party" />
        {results.map((result, ind) => (
          <ResultRow
            key={ind}
            name={result.name}
            party={result.party.length > 1 ? result.party.slice(0, 1) : ""}
            selected={person === ind}
            onClick={() => setPerson(ind)}
          />
        ))}
        {/* //since api doesnt return unique ids to use as a key, we will use index since the array order wont be manipulated */}
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  /* border: solid 1px blue; */
`;
const BoxTitle = styled.h2`
  font-weight: 300;
  color: ${colors.grey.dark};
  span {
    color: ${colors.blue.base};
  }
  margin-bottom: 20px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;
