export default [
  {
    type: 'Page',
    title: 'Forhold til katter',
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
        property: 'living.type',
        type: 'Radio',
        text: 'Hvor bor du?',
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
        text: 'I hvilken etasje bor du?',
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
        text: 'Er dyrehold regulert av kontrakten din?',
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
        text: 'Har du lov til å ha katt?',
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
        type: 'Number',
        text: 'Hvor mange timer er du borte fra hjemmet hver dag?',
        placeholder: 'Timer',
        minimum: 0,
        maximum: 24,
        step: 1,
      },
      {
        property: 'preferences.color',
        type: 'Radio',
        text: 'Hva er yndlingsfargen din?',
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
    type: 'Page',
    children: [
      {
        property: 'preferences.predator',
        type: 'Checkbox',
        text: 'Trenger du en katt som kan fange ekle dyr  i huset ditt?',
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
];
