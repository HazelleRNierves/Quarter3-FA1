
const userConsent = confirm("Do you agree to share your personal information with our site?");
        
if (userConsent) 
   {
     console.log("User agrees to share personal information.");
     console.log("Name: " + nickname + "\n" +
      "Height: " + heightFeet + "'" + heightInches + "\"\n" +
      "Weight: " + weightLbs.toFixed(3) + " lbs");
   } 
        
else
   {
     console.log("User does not wish to share his/her information.");
   }