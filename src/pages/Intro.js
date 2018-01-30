import React from 'react';
import PropTypes from 'prop-types';
import { Primitives } from 'losen';
import { IntroMain } from '../primitives/IntroMain';

export default function Intro({ close }) {
  return (
    <Primitives.Wizard>
      <IntroMain>
        <Primitives.Heading.H1>Har du lyst til å skaffe deg katt?</Primitives.Heading.H1>
        <Primitives.Paragraphs.P>
          Svar på spørsmålene i denne veiviseren for å finne ut om du har lov til å ha katt der du
          bor, hva slags katt som passer deg, og om du har tid nok til å passe på en katt.
        </Primitives.Paragraphs.P>
        <section>
          <div>
            <Primitives.Heading.H2 small>Før du begynner må du vite:</Primitives.Heading.H2>
            <ol>
              <li>Hva slags bolig du bor i</li>
              <li>
                Hvor mange timer du er borte fra boligen din hver den (dette inkluderer i helgen og
                i ferien din og andre ganger du har fri)
              </li>
              <li>Punktet over ble skrevet for å vise at teksten kan gå over to linjer</li>
            </ol>
          </div>
          <Primitives.Figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTblL45kPaUq19Oko9BMKaEcVJ1DTUwvFYsVD2Qavxb2tVerKzW"
              alt="katter er fine"
            />
            <figcaption>På forsiden kan du ha et bilde med bildetekst</figcaption>
          </Primitives.Figure>
        </section>
        <Primitives.Heading.H2 small>Usikker?</Primitives.Heading.H2>
        <Primitives.Paragraphs.P>Snakk med en voksen.</Primitives.Paragraphs.P>
        <Primitives.Heading.H2 small>Start nå og fullfør senere</Primitives.Heading.H2>
        <Primitives.Paragraphs.P>
          Er det noen spørsmål du er usikker på underveis? Du kan ta en pause og fortsette senere.
          Nettleseren husker hvor du var.
        </Primitives.Paragraphs.P>
        <Primitives.Button.MainButton onClick={() => close()}>
          Start veiviseren
        </Primitives.Button.MainButton>
      </IntroMain>
    </Primitives.Wizard>
  );
}

Intro.propTypes = {
  close: PropTypes.func.isRequired,
};
