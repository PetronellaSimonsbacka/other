<html>

<head>

<h1>BMI calculator</h1>

</head>

<script language="JavaScript">

<!--

function calculateMetricBmi() {

var weight = document.bmiForm.weight.value

var height = document.bmiForm.height.value

if(weight > 0 && height > 0){

var finalBmi = weight/(height/100*height/100)

document.bmiForm.bmi.value = finalBmi

if(finalBmi < 18.5){

document.bmiForm.meaning.value = "You are too thin."

}

if(finalBmi > 18.5 && finalBmi < 25){

document.bmiForm.meaning.value = "You have a healthy weight."

}

if(finalBmi > 25){

document.bmiForm.meaning.value = "You are overweight."

}

}

else{

alert("Please fill in everything correctly")

}

}



function calculateImperialBmi() {

  var weight = document.bmiForm.weight.value

  var height = document.bmiForm.height.value

  if(weight > 0 && height > 0){

    var finalBmi = (weight*703)/(height*height)

    document.bmiForm.bmi.value = finalBmi

    if(finalBmi < 18.5){

      document.bmiForm.meaning.value = "Eat something"

    }

    if(finalBmi > 18.5 && finalBmi < 25){

      document.bmiForm.meaning.value = "You are healthy."

    }

    if(finalBmi > 25){

    document.bmiForm.meaning.value = "Why not try rugby?"

    }

  } else{

    alert("Please fill in everything correctly")

  }

}

//-->

</script>



<style>

h1   {color: blue;}

body {background-color: powderblue;}

h1   {color: blue;}

</style>



  <body>

    <form name="bmiForm">

Your Weight(kg/pounds): <input type="text" name="weight" size="10"><br />

Your Height(cm/inches): <input type="text" name="height" size="10"><br />

<input type="button" value="Calculate metric BMI" onClick="calculateMetricBmi()">

<input type="button" value="Calculate imperial BMI" onClick="calculateImperialBmi()"><br />



Your BMI: <input type="text" name="bmi" size="10"><br />

This Means: <input type="text" name="meaning" size="25"><br />

<input type="reset" value="Reset" />

    </form>

  </body>

</html>
