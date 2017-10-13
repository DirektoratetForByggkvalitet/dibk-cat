# [dibk-cat](https://dibk-cat.firebaseapp.com/) [![Build Status](https://travis-ci.com/netliferesearch/dibk-cat.svg?token=7NpjNJdFW93Qs1rPvcce&branch=master)](https://travis-ci.com/netliferesearch/dibk-cat)

The dibk-cat project is a demo wizard that uses [Losen](https://github.com/netliferesearch/losen).  
The documentation for Losen can be found here https://dibk-storybook.firebaseapp.com/.  

We made an Invision prototype that can be found here https://projects.invisionapp.com/share/EGCVNJU9T

## Development
You need to link [netliferesearch/losen](https://github.com/netliferesearch/losen) to run this project locally. Head over to you clone of that repo in the terminal and type `yarn link`.

Head back to this repo in you terminal and type `yarn link losen`.

Then run `yarn start` to run the development server in both projects.

## Testing
To run the tests you need to type the command `yarn test`.

The data for this wizard can be found in `src/api/cat.json`.

## Deploy
The project is hosted on [`Firebase`](https://console.firebase.google.com/u/0/project/dibk-cat/overview) :fire:. You need to be invited to it to be able to deploy.

To deploy you need the firebase tools.
Install it with the following command:

`yarn global add firebase-tools`

Follow the instructions for:
`firebase login`

To build the production bundle you run `yarn run build`.
Then you are ready to type `yarn deploy` :sparkles:
