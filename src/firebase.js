import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  //paste keys here
});

export const auth = app.auth();
export default app;
