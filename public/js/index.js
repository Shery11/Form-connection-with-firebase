$(function(){
  


var signOut = function(){

    firebase.auth().signOut().then(function() {
       console.log("signOut successfull");
        location.reload();
        console.log(err);
    }).catch(function(error) {
       console.log(error);
        location.reload();
        console.log(err);
    });

}


var data;
var tbHTML= "";


// populate the table

   
  firebase.database().ref().once("value", function(snapshot) {
   data = snapshot.val();
   console.log(data);

   $.each(data, function(p,v){
      console.log(p,v);
       trHTML = '<tr><td>' + v.dated.value + '</td><td>' 
       + v.identifier.value + '</td><td>' 
       + v.jsonDate.value + '</td><td>' 
       + v.rationale.value + '</td><td>' 
       + v.sector.value + '</td><td>' 
       + v.target_price.value + '</td></tr>';
       $('#location').append(trHTML);
   })

  }, function (error) {
   console.log("Error: " + error.code);
  });


//Entire Form (handler)
$('#newActivity').submit(function(event) {
  
  var $form = $(this);
  
  //disable submit button
  $form.find("#saveForm").prop('disabled', true);
  
  
   var email = $('#email').val();
   var password = $('#password').val();

   console.log(email,password);

  
 //TIMESTAMP  
  var jsonDate = (new Date()).toJSON();
  var backToDate = new Date();
  console.log(jsonDate);

  //FORM inputs
  var identifier = $('#identifier').val();
  console.log(identifier);  

  var target_price = $('#target_price').val();
  console.log(target_price);
  
  var rationale = $('#rationale').val();
  console.log(rationale);
  
  var dated = $('#dated').val();
  console.log(dated);
  
  var sector = $('#sector').val();
  console.log(sector);  
 

 var newActivity= {
    "target_price": {
       value: target_price,       
    },
    
  "rationale": {
       value: rationale,
      },
    
  "dated": {
       value: dated,
      },   
    
    "jsonDate": {
       value: jsonDate,
      },
    
   "sector": {
       value: sector,
      }, 
    
    "identifier": {
       value: identifier,   
    },
    
  }


  // sign in user
   firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
        console.log("logged in successfull");

        console.log(newActivity);


  
   // send the new data to Firebase
		firebase.database().ref().push(newActivity, function(err){
      if(err){
        alert("Unable to submit form try again please try to log in");

         // sign out user after an error 
          signOut();



       
      }else{
        alert("Form submitted");
         
           // sign out user after every submission
          signOut();

       
       
      }
    });



     }) .catch(function(error) {
     
       alert("Unable to login");
        location.reload();
            
      
    

   });


    return false;
  })
 
  
  
})