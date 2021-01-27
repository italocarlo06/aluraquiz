import React, { useState } from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import MetaTags from '../src/components/Metatags';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

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
                <Input
                  placeholder="Informe o seu nome"
                  name="nome"
                  value={name}
                    // eslint-disable-next-line react/jsx-no-bind
                  onChange={function (infosdoevento) {
                    setName(infosdoevento.target.value);
                  }}
                />

                <Button type="submit" disabled={name.length === 0}>
                  {`Jogar  ${name}`}
                </Button>

              </form>
            </Widget.Container>
          </Widget>
          <Widget>
            <Widget.Container>
              <h1>{db.title}</h1>
              <p>{db.description}</p>
            </Widget.Container>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/italocarlo06" />
      </QuizBackground>
    </>
  );
}
