import firebase from "firebase"

var firebaseConfig = {
    apiKey: "4nQOP3M",
    authDomain: "shom",
    databaseURL: "https://shop-rebaom",
    projectId: "shop",
    storageBucket: "shop-t.com",
    messagingSenderId: "683524",
    appId: "1:683264069"
  };
  
  const fire=firebase.initializeApp(firebaseConfig)
  
  const storage = firebase.storage()
  export  {
    fire,storage, firebase as default
  }
