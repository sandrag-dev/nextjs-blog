window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
document.getElementById("convertButton").addEventListener("click", clickHandler);
document.getElementById("cInput").addEventListener("input", celsiusInput);
document.getElementById("fInput").addEventListener("input", fehrInput);	
//document.getElementById("convertButton").addEventListener("click", clickHandler);
	
}
function celsiusInput(){
 document.getElementById("finput").value = "";
 if (parseFloat(document.getElementById("cInput").value) < 0)
     document.getElementById("weatherImage").src= "cold.png" ; 
else  if (parseFloat(document.getElementById("cInput").value) >= 0 && parseFloat(document.getElementById("cInput").value) <=10 )
     document.getElementById("weatherImage").src= "cool.png" ; 
else
     document.getElementById("weatherImage").src= "warm.png" ; 
}

function fehrInput(){
 document.getElementById("cInput").value = "";
if (parseFloat(document.getElementById("fInput").value) < 32)
     document.getElementById("weatherImage").src= "cold.png" ; 
else  if (parseFloat(document.getElementById("fInput").value) >=32 && parseFloat(document.getElementById("fInput").value) <=50 )
     document.getElementById("weatherImage").src="cool.png" ; 
else
     document.getElementById("weatherImage").src= "warm.png" ; 
}

function clickHandler(){
  if(document.getElementById("cInput").value != "")
	result = convertCtoF(document.getElementById("cInput").value);
  
  else if(document.getElementById("fInput").value != "")
	result = convertFtoC(document.getElementById("fInput").value);

return result; 
}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
	if(isNaN(degreesCelsius))
	document.getElementById("errorMessage").innerHTML= degreesCelsius + " is not a number";
	else{
        document.getElementById("errorMessage").innerHTML= ""; 	
	return parseFloat(degreesCelsius * (9/5) + 32);
        
        }
}

function convertFtoC(degreesFahrenheit) {
 
         if(isNaN(degreesFahrenheit))
	document.getElementById("errorMessage").innerHTML= degreesFahrenheit + " is not a number";
  // TODO: Complete the function
        else{
	document.getElementById("errorMessage").innerHTML= "";
        return parseFloat((degreesFahrenheit - 32) * (5/9) );
        }

}
