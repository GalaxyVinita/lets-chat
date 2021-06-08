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