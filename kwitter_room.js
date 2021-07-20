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


  user_name = localStorage.getItem("username");
  document.getElementById("usname").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    //random html name
    window.location = "kwitter_page.html"
}



function getData() 
{firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     
    Room_names = childKey;
    console.log("Room Name" + Room_names);
    row = "<div class='room_name' id=" + Room_names +
     "onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToRoomName(x)
{
    console.log(x);
    localStorage.setItem("room_name", x);
    window.location = "kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}