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
  room_name = localStorage.getItem("room_name");

  function send()
  {
    msg = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    });


  }

function getData() { firebase.database().
    ref("/"+room_name).on('value', function(snapshot) 
    { document.getElementById("output").innerHTML = "";
     snapshot.forEach(function(childSnapshot) 
     { childKey  = childSnapshot.key; childData = childSnapshot.val();
           if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_tag = "<h4> " + name +"<img class='user_tick' src='tick.png'> </h4>";
    message_tag = "<h4> " + message +"</h4>";
    like_button = "<button class = 'btn btn-warning' id=" +firebase_message_id+"value="+like+
    "onclick='updateLike(this.id)'>"
    span_tag = 
    "<span class='glyphicon glyphicon-thumbs-up'>Like: "
    + like + "</span> </button>";

    row = name_tag + message_tag + like_button + span_tag;
    document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();

function updateLike(msg_id)
{
    console.log("clicked like" + msg_id);
    
    button_id = msg_id;
    like = document.getElementById(button_id).value;
    update_likes = Number(like) + 1;
    console.log(update_likes);

    firebase.database().ref(room_name).child(msg_id).update({
          like: update_likes
    });
}

function logout()
{
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}