import io from "socket.io-client";

const socket = io.connect("https://thawing-earth-13216.herokuapp.com/");

export default socket;
