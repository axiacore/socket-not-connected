# Socket Not Connected
A widget that notified when a socket can't connect

## Installing using yarn

```bash
yarn add socket-not-connected
```

## Usage
Just add the `socket-not-connected.js` file after jQuery to your html and
in any script add:

```js
var socket = socketNotConnected(url-of-the-socket);
```

## Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
attempts | int | 3 | Numbers of reconect attempts of the socket after it show the modal
overlayBackgroundColor | string | rgba(0,0,0,.7) | The background color of the overlay of the modal
textColor | string | inherit | Color of the text
contentBackgroundColor | string | #fff | Background color of the modal
linkColor | string | #f11442 | Color of the link

## Example
```js
var socket = socketNotConnected(url-of-the-socket, {
  overlayBackgroundColor = 'rgba(51,51,51,.7)';
  textColor = '#333'; 
  linkColor = '#ef7731';
});
```

Brought to you by the fine folks at [Axiacore](https://axiacore.com/)
