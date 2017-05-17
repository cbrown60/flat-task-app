import * as firebase from 'firebase'


  var config = {
    apiKey: "AIzaSyDINrobcZeupss7rHlC47Rq6JfniiR-Qeo",
    authDomain: "javascriptproject-e2f1f.firebaseapp.com",
    databaseURL: "https://javascriptproject-e2f1f.firebaseio.com",
    projectId: "javascriptproject-e2f1f",
    storageBucket: "javascriptproject-e2f1f.appspot.com",
    messagingSenderId: "50412313625"
  };

export const firebaseApp = firebase.initializeApp(config)

export const goalRef = firebase.database().ref('goals')

export const completeGoalRef = firebase.database().ref('completeGoals')
