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


  $("#add-bill-btn").on("click", function(event) {
  		event.preventDefault();

	  var billName = $("#bill-name-input").val().trim();
	  var cost = $("#cost-input").val().trim();
      var duedate = $("#duedate-input").val().trim();
      var ispaid = false;
	

	  var newbill = {
	  	name: billName,
	  	totalcost: cost,
        start: duedate,
        paid:  ispaid,
	  };
  		database.ref().push(newbill);

	
	  $("#bill-name-input").val("");
	  $("#cost-input").val("");
      $("#duedate-input").val("");
  	});

  
	database.ref().on("child_added", function(childSnapshot) {

	  console.log(childSnapshot.val());

	  var billName = childSnapshot.val().name;
	  var cost = childSnapshot.val().totalcost;
      var duedate = childSnapshot.val().start;

      
      $('tbody').append("<tr><td>" + billName 
        + "</td><td>" + cost + "</td><td>" + duedate 
        + "</td><td>" + duedate + "</td><td><button class='btn btn-outline-danger paid'>Paid</button></td></tr>");
       
	});
    $(document).on("click", ".paid", function(){
        $(this).removeClass("btn-outline-danger").addClass("btn-success")
    })

});
