var nickname = "haze";
var height = 57;
var weight = 45; 
var heightFeet = Math.floor(height / 12);
var heightInches = height % 12;
var weightLbs = weight * 2.20462;

alert("Name: " + nickname + "\n" +
      "Height: " + heightFeet + "'" + heightInches + "\"\n" +
      "Weight: " + weightLbs.toFixed(3) + " lbs");
