export default [
  {
    "type": "Page",
    "children": [
      {
        "property": "preferences.color",
        "type": "Radio",
        "text": "Hva er yndlingsfargen din?",
        "suggestedAnswer": [
          {
            "type": "Answer",
            "text": "Brun",
            "value": "brun"
          },
          {
            "type": "Answer",
            "text": "Svart",
            "value": "svart"
          },
          {
            "type": "Answer",
            "text": "Hvit",
            "value": "hvit"
          }
        ]
      }
    ]
  },
  {
    "type": "Page",
    "children": [
      {
        "property": "preferences.predator",
        "type": "Checkbox",
        "text": "Trenger du en katt som kan fange ekle dyr  i huset ditt?",
        "suggestedAnswer": [
          {
            "type": "Answer",
            "text": "Edderkopp",
            "value": "edderkopp"
          },
          {
            "type": "Answer",
            "text": "Mus",
            "value": "mus"
          },
          {
            "type": "Answer",
            "text": "Fluer",
            "value": "fluer"
          },
          {
            "type": "Answer",
            "text": "Rotter",
            "value": "rotter"
          }
        ]
      }
    ]
  }
]
