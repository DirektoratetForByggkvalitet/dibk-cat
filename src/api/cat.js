export default [
  {
    type: 'Page',
    children: [
      {
        property: 'preferences.love',
        type: 'Radio',
        text: 'Er du glad i katter?',
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
        type: 'SelectNumber',
        text: 'I hvilken etasje bor du?',
        suggestedAnswer: [
          {
            type: 'Answer',
            minimum: 1,
            maximum: 15,
          },
        ],
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
