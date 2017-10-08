$(function(){
  
  // create new connection to firebase
   // REPLACE it with your link also change the firebase security rules to public
	// var ref = new Firebase('https://test-ecf98.firebaseio.com');

$('#logout').click(function(event){
  console.log('clicked');

  firebase.auth().signOut().then(function() {
   console.log("signOut successfull");
}).catch(function(error) {
   console.log(error);
});
})
   

$('#authenticate').submit(function(event){
   
   
   var email = $('#email').val();
   var password = $('#password').val();

   console.log(email,password);


    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
        console.log("logged in successfull")
    }) .catch(function(error) {
     
     console.log(error);
      
    

   });



   return false;
 
});  

//Entire Form (handler)
$('#newActivity').submit(function(event) {
  
  var $form = $(this);
  
  //disable submit button
  $form.find("#saveForm").prop('disabled', true);
  
  
  
  var phases = $('#phases').val();
  console.log(phases);

  var phasesNotes = $('#phasesNotes').val();
  console.log(phasesNotes);
  
  var xfactor= $('#xfactor').val();
  console.log(xfactor);

  var xfactorNotes= $('#xfactorNotes').val();
  console.log(xfactorNotes);

  var outcome= $('#outcome').val();
  console.log(outcome);

  var outcomeNotes= $('#outcomeNotes').val();
  console.log(outcomeNotes);

  var extra= $('#extra').val();
  console.log(extra);

  var extraNotes= $('#extraNotes').val();
  console.log(extraNotes);

  var competition= $('#competition').val();
  console.log(competition);

  var competitionNotes= $('#competitionNotes').val();
  console.log(competitionNotes);

  var other= $('#other').val();
  console.log(other);

  var otherNotes= $('#otherNotes').val();
  console.log(otherNotes);

  var catalysts= $('#catalysts').val();
  console.log(catalysts);

  var catalystsNotes= $('#catalystsNotes').val();
  console.log(catalystsNotes);

  var labor= $('#labor').val();
  console.log(labor);

  var laborNotes= $('#laborNotes').val();
  console.log(laborNotes);

  var options= $('#options').val();
  console.log(options);

  var optionsNotes= $('#optionsNotes').val();
  console.log(optionsNotes);

  var legal= $('#legal').val();
  console.log(legal);

  var legalNotes= $('#legalNotes').val();
  console.log(legalNotes);

  var volatility= $('#volatility').val();
  console.log(volatility);

  var volatilityNotes= $('#volatilityNotes').val();
  console.log(volatilityNotes);

  var torf= $('#torf').val();
  console.log(torf);

  var torfNotes= $('#torfNotes').val();
  console.log(torfNotes);
  
  //take the values from the form, and put them in an object
  var newActivity= {
    "phases": {
       value: phases ,
       notes: phasesNotes
    },
    "xfactor": {
       value: xfactor,
       notes:xfactorNotes
    },
    "outcome": {
       value: outcome ,
       notes: outcomeNotes
    },
    "extra": {
       value: extra,
       notes:extraNotes
    },
    "competition": {
       value: competition,
       notes: competitionNotes
    },
    "other": {
       value: other,
       notes: otherNotes
    },
    "catalysts": {
       value: catalysts,
       notes: catalystsNotes
    },
    "labor": {
       value: labor,
       notes: laborNotes
    },
    "options": {
       value: options,
       notes: optionsNotes
    },
    "legal": {
       value: legal ,
       notes: legalNotes
    },
    "volatility": {
       value: volatility,
       notes: volatilityNotes
    },
    "torf": {
       value: torf,
       notes: torfNotes
    }
  }
  
  
  //   // send the new data to Firebase
		firebase.database().ref().push(newActivity, function(err){
      if(err){
        alert("Unable to submit form try again");
        location.reload();
        console.log(err);
      }else{
        alert("Form submitted");
        location.reload();
       
      }
    });

    return false;
  })
 
  
  
})