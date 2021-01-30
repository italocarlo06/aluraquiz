import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
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
import Link from '../src/components/Link';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  return (
    <>
      <MetaTags image={db.bg} />
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget
            as={motion.section}
            variants={{
              show: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: '100%' },
            }}
            initial="hidden"
            animate="show"
            transition={{
              duration: 0.5,
              delay: 0,
            }}
          >
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
          <Widget
            as={motion.section}
            variants={{
              show: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: '100%' },
            }}
            initial="hidden"
            animate="show"
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}

          >
            <Widget.Container>
              <h1>Quizes da Galera</h1>
              <ul>
                {db.external.map((externalLink) => {
                  const [projectName, githubUser] = externalLink
                    // eslint-disable-next-line no-useless-escape
                    .replace(/\//g, '')
                    .replace('/', '')
                    .replace('https:', '')
                    .replace('.vercel.app', '')
                    .split('.');
                  const linkLabel = `${githubUser}/${projectName}`;
                  return (
                    <li key={externalLink}>
                      <Widget.Topic
                        as={Link}
                        href={`/quiz/${projectName}___${githubUser}`}
                      >
                        {linkLabel}
                      </Widget.Topic>
                    </li>
                  );
                })}
              </ul>
            </Widget.Container>
          </Widget>
          <Footer
            as={motion.footer}
            variants={{
              show: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            initial="hidden"
            animate="show"
            transition={{
              duration: 1.5,
              delay: 0,
            }}
          />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/italocarlo06" />
      </QuizBackground>
    </>
  );
}
