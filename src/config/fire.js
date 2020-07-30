import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyDGlsDsS1dQinwQg_LJfimgzUia4nQOP3M",
    authDomain: "shop-beadd.firebaseapp.com",
    databaseURL: "https://shop-beadd.firebaseio.com",
    projectId: "shop-beadd",
    storageBucket: "shop-beadd.appspot.com",
    messagingSenderId: "683266808524",
    appId: "1:683266808524:web:a4a83663bc6ce3c0914069"
  };
  
  const fire=firebase.initializeApp(firebaseConfig)
  
  const storage = firebase.storage()
  export  {
    fire,storage, firebase as default
  }