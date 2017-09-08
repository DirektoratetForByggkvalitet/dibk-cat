export default {
  meta: {
    title: 'Veiviser: Hvor skal tittelen på veiviseren stå?',
    footer: 'Your footer here!',
  },
  schema: [
    {
      id: 'relation',
      type: 'Page',
      title: 'Forhold til katter',
      lead: 'This is a lead for the page',
      children: [
        {
          property: 'preferences.love',
          type: 'Radio',
          heading: 'Er du glad i katter?',
          text: 'På en skala fra ja til nei, er du glad i katter?',
          suggestedAnswer: [
            {
              type: 'Answer',
              text: 'Ja',
              value: 'ja',
            },
            {
              type: 'Answer',
              text: 'Nei',
              value: 'nei',
            },
          ],
        },
        {
          type: 'Branch',
          branches: [
            {
              test: { field: 'preferences.love', operator: 'eq', value: 'ja' },
              children: [
                {
                  property: 'living.type',
                  type: 'Radio',
                  heading: 'Hvor bor du?',
                  suggestedAnswer: [
                    {
                      type: 'Answer',
                      text: 'Hybel',
                      value: 'hybel',
                    },
                    {
                      type: 'Answer',
                      text: 'Leilighet',
                      value: 'leilighet',
                    },
                    {
                      type: 'Answer',
                      text: 'Rekkehus',
                      value: 'rekkehus',
                    },
                    {
                      type: 'Answer',
                      text: 'Enebolig',
                      value: 'enebolig',
                    },
                    {
                      type: 'Answer',
                      text: 'Annet (men skal være input)',
                      value: 'annet',
                    },
                  ],
                },
                {
                  property: 'living.floor',
                  type: 'Select',
                  heading: 'I hvilken etasje bor du?',
                  hidden: {
                    type: 'or',
                    clauses: [
                      { field: 'living.type', operator: 'not' },
                      { field: 'living.type', operator: 'eq', value: 'enebolig' },
                      { field: 'living.type', operator: 'eq', value: 'rekkehus' },
                      { field: 'living.type', operator: 'eq', value: 'annet' },
                    ],
                  },
                  suggestedAnswer: [
                    {
                      type: 'Answer',
                      text: '1',
                      value: '1',
                    },
                    {
                      type: 'Answer',
                      text: '2',
                      value: '2',
                    },
                    {
                      type: 'Answer',
                      text: '3',
                      value: '3',
                    },
                    {
                      type: 'Answer',
                      text: '4',
                      value: '4',
                    },
                    {
                      type: 'Answer',
                      text: '5',
                      value: '5',
                    },
                    {
                      type: 'Answer',
                      text: '6',
                      value: '6',
                    },
                    {
                      type: 'Answer',
                      text: '7',
                      value: '7',
                    },
                    {
                      type: 'Answer',
                      text: '8',
                      value: '8',
                    },
                    {
                      type: 'Answer',
                      text: '9',
                      value: '9',
                    },
                    {
                      type: 'Answer',
                      text: '10',
                      value: '10',
                    },
                    {
                      type: 'Answer',
                      text: '11',
                      value: '11',
                    },
                    {
                      type: 'Answer',
                      text: '12',
                      value: '12',
                    },
                    {
                      type: 'Answer',
                      text: '13',
                      value: '13',
                    },
                    {
                      type: 'Answer',
                      text: '14',
                      value: '14',
                    },
                    {
                      type: 'Answer',
                      text: '15',
                      value: '15',
                    },
                  ],
                },
                {
                  property: 'living.contract',
                  type: 'Radio',
                  heading: 'Er dyrehold regulert av kontrakten din?',
                  hidden: {
                    type: 'or',
                    clauses: [
                      { field: 'living.type', operator: 'not' },
                      { field: 'living.type', operator: 'eq', value: 'enebolig' },
                      { field: 'living.type', operator: 'eq', value: 'annet' },
                    ],
                  },
                  suggestedAnswer: [
                    {
                      type: 'Answer',
                      text: 'Ja',
                      value: 'ja',
                    },
                    {
                      type: 'Answer',
                      text: 'Nei',
                      value: 'nei',
                    },
                  ],
                },
                {
                  property: 'living.animals',
                  type: 'Radio',
                  heading: 'Har du lov til å ha katt?',
                  hidden: {
                    type: 'or',
                    clauses: [
                      { field: 'living.contract', operator: 'not' },
                      { field: 'living.contract', operator: 'eq', value: 'nei' },
                    ],
                  },
                  suggestedAnswer: [
                    {
                      type: 'Answer',
                      text: 'Ja',
                      value: 'ja',
                    },
                    {
                      type: 'Answer',
                      text: 'Nei',
                      value: 'nei',
                    },
                  ],
                },
                {
                  property: 'living.gone',
                  type: 'Number',
                  heading: 'Hvor mange timer er du borte fra hjemmet hver dag?',
                  placeholder: 'Timer',
                  minimum: 0,
                  maximum: 24,
                  step: 1,
                },
                {
                  property: 'preferences.color',
                  type: 'Radio',
                  heading: 'Hva er yndlingsfargen din?',
                  disabled: { field: 'living.gone', operator: 'lt', value: 4 },
                  suggestedAnswer: [
                    {
                      type: 'Answer',
                      text: 'Brun',
                      value: 'brun',
                    },
                    {
                      type: 'Answer',
                      text: 'Svart',
                      value: 'svart',
                    },
                    {
                      type: 'Answer',
                      text: 'Hvit',
                      value: 'hvit',
                    },
                  ],
                },
              ],
            },
            {
              test: { field: 'preferences.love', operator: 'neq', value: 'ja' },
              children: [
                {
                  id: 'nocat',
                  type: 'Result',
                  title: 'Du kan ikke ha katt 😿',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'features',
      type: 'Page',
      title: 'Kattens egenskaper',
      lead: 'This is a lead for the page',
      children: [
        {
          property: 'preferences.predator',
          type: 'Checkbox',
          heading: 'Trenger du en katt som kan fange ekle dyr i huset ditt?',
          suggestedAnswer: [
            {
              type: 'Answer',
              text: 'Edderkopp',
              value: 'edderkopp',
            },
            {
              type: 'Answer',
              text: 'Mus',
              value: 'mus',
            },
            {
              type: 'Answer',
              text: 'Fluer',
              value: 'fluer',
            },
            {
              type: 'Answer',
              text: 'Rotter',
              value: 'rotter',
            },
          ],
        },
      ],
    },
    {
      id: 'testtypes',
      type: 'Page',
      title: 'Denne siden er for å teste alle de nye sidene',
      lead: 'Ja denne siden har bare de nye typene vi trenger',
      children: [
        {
          property: 'favourite.actor',
          type: 'Input',
          heading: 'Skrive navnet på favoritt skuespilleren?',
          text: 'Input burde også ha noe brødtekst ikkesant?',
          placeholder: 'Kit Harington',
          image: {
            url: 'https://media.giphy.com/media/13f5iwTRuiEjjW/giphy.gif',
            alt: 'alt for image',
          },
        },
        {
          property: 'behavior.with.animals',
          type: 'Textarea',
          heading: 'Skriv litt om hvordan du er med dyr?',
          placeholder: 'Hvordan oppfører du deg rundt dyr',
        },
        {
          property: 'cat.information',
          type: 'Text',
          heading: 'Dette er en textblokk',
          text:
            'We need this to support html <h1>Yes</h1><a href="somewhere">Somewhere</a> Cat ipsum dolor sit amet, always hungry man running from cops stops to pet cats, goes to jail step on your keyboard while you\'re gaming and then turn in a circle . Pose purrfectly to show my beauty woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now but lick plastic bags destroy couch, yet hunt by meowing loudly at 5am next to human slave food dispenser. Sleep nap meow meow or put toy mouse in food bowl run out of litter box at full speed but meow all night and hunt anything that moves. My left donut is missing, as is my right. Rub whiskers on bare skin act innocent shove bum in owner\'s face like camera lens but munch on tasty moths meow for meow all night. Need to chase tail massacre a bird in the living room and then look like the cutest and most innocent animal on the planet. ',
        },
        {
          property: 'cat.image',
          type: 'Image',
          text: 'Dette er en bildeblokk',
          image: {
            url: 'https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif',
            alt: 'alt for image',
          },
        },
        {
          property: 'tiltaksklasse',
          type: 'Radio',
          heading: 'Hvilken tiltaksklasse er jobben1?',
          text: '<a href="/somewhere">Les mer om tiltaksklasser</a>',
          suggestedAnswer: [
            {
              type: 'Answer',
              heading: 'Tiltaksklasse 1',
              text:
                'Som regel vil alt arbeid med oppføring av eneboliger, tomannsboliger og rekkehus komme inn under tiltaksklasse 1. Deler av utførelsen av større boligbygninger innitil 3 etasjer kan også være tiltaksklasse 1. Likevel kan det hende at noe av arbeidet er spesielt vanskelig og må settes til tiltaksklasse 2 eller 3. ',
              image: {
                url: 'https://media.giphy.com/media/l0MYNYaAeaQwtlOta/giphy.gif',
                alt: 'alt for image',
              },
              value: 'tiltaksklasse1',
            },
            {
              type: 'Answer',
              heading: 'Tiltaksklasse 2',
              text:
                'Typiske bygninger i tiltaksklasse 2 er boligblokker og kontorbygg på 3-4 etasjer. Deler av utførelsen av større bygninger inntil 5 etasjer kan også være tiltaksklasse 2. Likevel kan det hende at noe av arbeidet er spesielt vanskelig og må settes til tiltaksklasse 3.',
              image: {
                url: 'https://media.giphy.com/media/3o6Ztrs0GnTt4GkFO0/giphy.gif',
                alt: 'alt for image',
              },
              value: 'tiltaksklasse2',
            },
            {
              type: 'Answer',
              heading: 'Tiltaksklasse 3',
              text:
                'Arbeid med store og kompliserte bygninger er i tiltaksklasse 3. Det kan også være enkelte ansvarsområder i mindre bygninger som må settes i tiltaksklasse 3 fordi det er spesielt vanskelig',
              image: {
                url: 'https://media.giphy.com/media/5xtDarqCp0eomZaFJW8/giphy.gif',
                alt: 'alt for image',
              },
              value: 'tiltaksklasse3',
            },
          ],
        },
        {
          property: 'samsvar.sende',
          type: 'Checkbox',
          heading: 'Hvilken samsvarserklæring skal du sende?',
          suggestedAnswer: [
            {
              type: 'Answer',
              heading: '1 Rammetillatelse',
              text:
                'Det første steget i en byggesak er en søknad om rammetillatelse. Her beskrives det hva man skal bygge, endre eller utbedre.',
              value: '1',
              image: {
                url: 'https://media.giphy.com/media/etSwiUkXNhTB6/giphy.gif',
                alt: 'some alt',
              },
            },
            {
              type: 'Answer',
              heading: '2 Igangsettelse',
              text:
                'Dette er en søknad om hvorvidt man kan begynne selve byggearbeidet. Det er viktig å ikke ta ett eneste spadetak før man har fått godkjent denne!',
              value: '2',
              image: {
                url: 'https://media.giphy.com/media/2F5modVJ5dE9G/giphy.gif',
                alt: 'some image alt',
              },
            },
            {
              type: 'Answer',
              heading: '2 Igangsettelse no image',
              text:
                'Dette er en søknad om hvorvidt man kan begynne selve byggearbeidet. Det er viktig å ikke ta ett eneste spadetak før man har fått godkjent denne!',
              value: '3',
            },
            {
              type: 'Answer',
              text:
                'no heading Dette er en søknad om hvorvidt man kan begynne selve byggearbeidet. Det er viktig å ikke ta ett eneste spadetak før man har fått godkjent denne!',
              value: '4',
              image: {
                url: 'https://media.giphy.com/media/t8dPLNzwF5HMc/giphy.gif',
                alt: 'some image alt',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'hooray',
      type: 'Result',
      title: 'Hurra - du kan ha katt 🌈',
      lead: 'This is a lead for the page',
      children: [
        {
          property: 'favourite.actor',
          type: 'data',
        },
      ],
    },
  ],
};
