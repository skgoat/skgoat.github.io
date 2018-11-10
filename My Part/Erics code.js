$(document).ready(function() {

	// 1. Initialize Firebase
    var config = {
        apiKey: "AIzaSyAJ7SHAHGy_dy-O2ZgoiHJKZM_Sex45rKs",
        authDomain: "roommate-bills-33313.firebaseapp.com",
        databaseURL: "https://roommate-bills-33313.firebaseio.com",
        projectId: "roommate-bills-33313",
        storageBucket: "roommate-bills-33313.appspot.com",
        messagingSenderId: "525062155619"
	  };

	  firebase.initializeApp(config);

	var database = firebase.database();
	  

	  $(document).on("click", "#eventadd", function(event){
		event.preventDefault();
		var eventname = $("#eventinput").val().trim();
		var eventday = $("#dayinput").val().trim();
		var eventmonth = $("#monthinput").val().trim();
		var eventyear = $("#yearinput").val().trim();

		globalYear = eventyear;
		globalDay = eventday;
		globalMonth = eventmonth - 1;
		globalEvent = eventname;
		eventRef.push({
			eventname: eventname,
			eventday: eventday,
			eventmonth: eventmonth,
			eventyear: eventyear
		});
		$("#eventinput").val("");
		$("#dayinput").val("");
		$("#monthinput").val("");
		$("#yearinput").val("");
	})
});