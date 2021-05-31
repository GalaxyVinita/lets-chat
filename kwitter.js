    var firebaseConfig = {
    apiKey: "AIzaSyCdYbMsUJQA6Hed3IZelKFWx7svJPjSa_o",
    authDomain: "lets-chat-22f67.firebaseapp.com",
    projectId: "lets-chat-22f67",
    storageBucket: "lets-chat-22f67.appspot.com",
    messagingSenderId: "329872294137",
    appId: "1:329872294137:web:1bc86bb3463c3b0c5f2228"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



function addUser()
{
    username = document.getElementById("username").value;

    localStorage.setItem("username", username);

    window.location = "kwitter_room.html";
}
