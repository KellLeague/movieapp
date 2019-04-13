import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDNLbUCQS-OFyyRplqruLmefNLM9Q9_RS8",
    authDomain: "movieapp-293ff.firebaseapp.com",
    databaseURL: "https://movieapp-293ff.firebaseio.com",
    projectId: "movieapp-293ff",
    storageBucket: "movieapp-293ff.appspot.com",
    messagingSenderId: "509435219710"
};

app.initializeApp(config);

export default app;