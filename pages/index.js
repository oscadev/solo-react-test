import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import DropDown from "../components/DropDown";
import { InfoBox } from "../components/InfoBox";
import ResultsBox from "../components/ResultsBox";
import { positions, states } from "../data";
import { colors } from "../styles/colors";

export default function Home() {
  const [state, setState] = useState("0"); //using strings because it is passing as a value to an option element that converts numbers to strings
  const [govRole, setGovRole] = useState("0");
  const [results, setResults] = useState([]);
  const [person, setPerson] = useState(null);

  const submit = useCallback(
    async (e) => {
      e.preventDefault();
      if (state == "0" || govRole == "0") {
        return alert("Please select a position type and a state.");
      }
      try {
        const { data } = await axios({
          method: "GET",
          url: `http://localhost:3010/${positions[govRole].code}/${states[state].code}`,
        });

        setResults(data.results);
      } catch (error) {
        return alert("Oops, there was an error reaching the server.");
      }
    },
    [govRole, state]
  );

  useEffect(() => {
    results.length && setPerson(0);
  }, [results]);

  useEffect(() => {}, [govRole, state]);
  return (
    <Page>
      <H1>Who&apos;s My Representative?</H1>
      <Form onSubmit={submit}>
        <DropDown options={positions} value={govRole} setValue={setGovRole} />
        <DropDown options={states} value={state} setValue={setState} />
        <button type="submit" disabled={state === "0" || govRole === "0"}>
          search
        </button>
      </Form>
      <DataSections>
        <ResultsBox results={results} person={person} setPerson={setPerson} />
        <InfoBox personInfo={person !== null && results[person]} />
      </DataSections>
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  max-width: 1440px;
`;

const Form = styled.form`
  display: flex;
  gap: 50px;
  padding: 20px 0;
`;

const H1 = styled.h1`
  color: ${colors.blue.base};
  padding-bottom: 40px;
  border-bottom: solid 1px ${colors.grey.light};
  font-size: 1.3em;
`;

const DataSections = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: auto;
`;
