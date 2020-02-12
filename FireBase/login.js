function validate(){
    console.log("Hello");
    var i;
    // Loop1:
    for(i=1;i<=2;i++){
        var database=firebase.database().ref().child(`/user${i}`);
        database.on("value", (snapshot)=> {
        var uname1=document.getElementById("user").value;
        var upass1=document.getElementById("pass").value;
        if(uname1==snapshot.val().uname&&upass1==snapshot.val().upass){
            console.log("Welcome");
            alert("Welcome! , "+uname1);
            exitFlag = true;
            // break;
        }
        
        //console.log("hi");
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
    }
}