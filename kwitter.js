var firebaseConfig = {
  apiKey: "AIzaSyAcbklv6kAvLBnmL18jaw26zV0YTygXYG0",
  authDomain: "lets-chat-e2e5a.firebaseapp.com",
  databaseURL: "https://lets-chat-e2e5a-default-rtdb.firebaseio.com",
  projectId: "lets-chat-e2e5a",
  storageBucket: "lets-chat-e2e5a.appspot.com",
  messagingSenderId: "695258579648",
  appId: "1:695258579648:web:175c18670ce8961a3ae325"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function addUser()
{
    username = document.getElementById("username").value;

    localStorage.setItem("username", username);

    window.location = "kwitter_room.html";
}
