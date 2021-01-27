import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import MetaTags from '../src/components/Metatags';
import QuizLogo from '../src/components/QuizLogo';
import FormGroup from '../src/components/FormGroup';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  return (
    <>
      <MetaTags image={db.bg} />
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>The Mandalorian</h1>
            </Widget.Header>
            <Widget.Container>
              <form onSubmit={function (infosdoevento) {
                infosdoevento.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log('submit');
              }}
              >
                <FormGroup>
                  <input
                    placeholder="Informe o seu nome"
                    onChange={function (infosdoevento) {
                      setName(infosdoevento.target.value);
                    }}
                  />
                  <button type="submit" disabled={name.length === 0}>
                    Jogar
                    {` ${name}`}
                  </button>
                </FormGroup>
              </form>
            </Widget.Container>
          </Widget>
          <Widget>
            <Widget.Container>
              <h1>Quiz</h1>
              <p> Teste </p>
            </Widget.Container>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/italocarlo06" />
      </QuizBackground>
    </>
  );
}
