let converter = Number(prompt("Welcome to Merry Converter. \n1. Celsius to Farenheit \n2. Kilogram to Gram\n3.Gram to Kilogram \n4. Farenheit to Celsius "))

switch(converter){
    case 1:
        alert("Convert DegCelsius to DegFarenheit")
        let figure = Number(prompt("Enter Amount"))
        let Farenheit = figure * 1.8 + 32
        alert("answer is " + Farenheit.toFixed(2) + "F")
        break;

    case 2:
        alert("Convert Kilogram(kg) to Gram(g)") 
         let amount= Number(prompt("Enter Amount"))
        let Kilogram = amount * 1000 
        alert("answer is " + Kilogram.toFixed(2) + "g") 
        break; 

    case 3:
        alert("Convert Gram(g) to Kilogram(kg)")
        let digit = Number(prompt("Enter Amount"))
        let gram = digit / 1000
       alert("answer is " + gram.toFixed(2) + "kg")   
       break;

    case 4 :
        alert("Convert DegFarenheit to DegCelsius")
        let degree = Number(prompt("Enter Amount"))
         let celsius = (degree - 32) * 5 / 9
         alert("answer is " + celsius.toFixed(2) + "C") 
         break; 

    default:
        alert("You have entered an invalid input")
        break;     
           

}





 

 