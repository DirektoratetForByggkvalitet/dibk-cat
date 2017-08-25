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
              test: ({ preferences = {} }) => preferences.love === 'ja',
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
                  hidden: ({ living = {} }) =>
                    !living.type || ['enebolig', 'rekkehus', 'annet'].indexOf(living.type) > -1,
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
                  hidden: ({ living = {} }) =>
                    !living.type || ['enebolig', 'annet'].indexOf(living.type) > -1,
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
                  hidden: ({ living = {} }) => !living.contract || living.contract === 'nei',
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
              test: ({ preferences = {} }) => preferences.love !== 'ja',
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
            "Cat ipsum dolor sit amet, always hungry man running from cops stops to pet cats, goes to jail step on your keyboard while you're gaming and then turn in a circle . Pose purrfectly to show my beauty woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now but lick plastic bags destroy couch, yet hunt by meowing loudly at 5am next to human slave food dispenser. Sleep nap meow meow or put toy mouse in food bowl run out of litter box at full speed but meow all night and hunt anything that moves. My left donut is missing, as is my right. Rub whiskers on bare skin act innocent shove bum in owner's face like camera lens but munch on tasty moths meow for meow all night. Need to chase tail massacre a bird in the living room and then look like the cutest and most innocent animal on the planet. ",
        },
        {
          property: 'cat.image',
          type: 'Image',
          text: 'Dette er en bildeblokk',
          url: 'https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif',
        },
      ],
    },
    {
      id: 'hooray',
      type: 'Result',
      title: 'Hurra - du kan ha katt 🌈',
      lead: 'This is a lead for the page',
    },
  ],
};
