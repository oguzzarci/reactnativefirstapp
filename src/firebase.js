import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyDrF8md3aK_FzUZHYwjXbW0f6jD8cHILdE',
            authDomain: 'reactnative-52cda.firebaseapp.com',
            databaseURL: 'https://reactnative-52cda.firebaseio.com',
            projectId: 'reactnative-52cda',
            storageBucket: 'reactnative-52cda.appspot.com',
            messagingSenderId: '892209777007',
            appId: '1:892209777007:web:6beb5749c069da724c009a'
}

const Firebase = firebase.initializeApp(config);
export default Firebase;