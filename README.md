# Fetch

A mobile app that lets friends share what they plan to wear to upcoming parties and events. Developed using create-react-native-app on the front end, and an Express/Node.js back-end.


## Getting Started

A guide to installing fetch on your local machine for dev purposes.


### Requirements

You will need your own AWS access ID and secret, as well as an AWS bucket set up to store images.


### Installation

- Install from root directory using `npm run install`.

- Download [XDE](https://github.com/expo/xde) and an iOS simulator to your machine.

- Change the bucket name in server/routes/images to your bucket.

- Create a file in /native-client called ip-addresses.js. From here, export a variable `API_ROOT` set to `localhost:5000` when using the simulator on your computer, or set to your network IP address when using the Expo app on a mobile device.

- Run `npm run start-native-client` to boot up the front end, and you'll see the app in the simulator.

- Run `npm run start-server` in a separate terminal to spin up the server.


## Testing

- Coming soon.


## Contributing

Please submit a GitHub issue for bug fixes and feature requests.


