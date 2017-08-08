export default [
  {
    children: [
      {
        heading: 'Er du glad i katter?',
        property: '-Kr0rAtfFSzo8Lr3ZpKn',
        suggestedAnswer: [
          { text: 'ja', type: 'Answer', value: true },
          { text: 'nei', type: 'Answer', value: false },
        ],
        text: 'På en skala fra ja til nei, er du glad i katter?',
        type: 'bool',
      },
      {
        heading: 'Er du sikker?',
        property: '-Kr0sRrqWpJyUeJX7GaG',
        suggestedAnswer: [
          { text: 'ja, jeg er sikker', type: 'Answer', value: true },
          { text: 'nei ok da', type: 'Answer', value: false },
        ],
        text: 'Du trenger ikke å si ja..',
        type: 'bool',
      },
    ],
    title: 'Forhold til katter',
    type: 'Page',
  },
  {
    children: [
      {
        heading: 'Hva slags type katt liker du?',
        property: '-Kr0sJBPhtOONGIq169W',
        suggestedAnswer: [
          { text: 'Katt uten hår', type: 'Answer', value: 'Katt uten hår' },
          { text: 'Katt med blå pels', type: 'Answer', value: 'Katt med blå pels' },
          { text: 'Avholdskatt', type: 'Answer', value: 'Avholdskatt' },
          { text: 'Harry-katt', type: 'Answer', value: 'Harry-katt' },
          { text: 'Hund', type: 'Answer', value: 'Hund' },
        ],
        text: 'Hvilke av disse stikkordene tenner deg?',
        type: 'list',
      },
      {
        heading: 'Hva skal katten hete?',
        property: '-Kr0t0Nt4Xgke_1BcOdW',
        suggestedAnswer: [
          { text: 'Gard', type: 'Answer', value: 'Gard' },
          { text: 'Skippern', type: 'Answer', value: 'Skippern' },
          { text: 'Lille tammy', type: 'Answer', value: 'Lille tammy' },
          { text: 'Frida', type: 'Answer', value: 'Frida' },
          { text: 'Mao', type: 'Answer', value: 'Mao' },
        ],
        text: 'Du bestemmer..',
        type: 'list',
      },
    ],
    title: 'Kattens egenskaper',
    type: 'Page',
  },
  {
    test: {
      clauses: [
        { field: 'person.age', operator: 'gte', value: 20 },
        { field: 'person.sex', operator: 'required' },
      ],
      type: 'and',
    },
    title: 'Du vil virkelig ha katt',
    type: 'Result',
  },
  {
    test: {
      clauses: [
        { field: 'person.age', operator: 'gte', value: 20 },
        { field: 'person.sex', operator: 'required' },
      ],
      type: 'and',
    },
    title: 'Du er ikke helt sikker',
    type: 'Result',
  },
  {
    test: {
      clauses: [
        { field: 'person.age', operator: 'gte', value: 20 },
        { field: 'person.sex', operator: 'required' },
      ],
      type: 'and',
    },
    title: 'Du liker ikke katt',
    type: 'Result',
  },
];
