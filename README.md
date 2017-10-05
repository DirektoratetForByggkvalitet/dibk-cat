# [dibk-cat](https://dibk-cat.firebaseapp.com/)

We made an Invision prototype that can be found here https://projects.invisionapp.com/share/EGCVNJU9T

## Development

You need to link netliferesearch/losen to run this project locally. Head over to you clone of that repo in the terminal and type `yarn link`.

Head back to this repo in you terminal and type `yarn link losen`.

Then run `yarn start` to run the development server.

## Deploy
The project is hosted on [`Firebase`](https://console.firebase.google.com/u/0/project/dibk-cat/overview) :fire:. You need to be invited to it to be able to deploy.

To deploy you need the firebase tools.
Install it with the following command:

`yarn global add firebase-tools`

Follow the instructions for:
`firebase login`

Then you are ready to type `yarn deploy` :sparkles:
