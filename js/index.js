function changemetrics()
{
    var option = document.getElementById('option').value

if (option === "kg-m" )
{
     document.getElementById('height').placeholder="m"
    document.getElementById('weight').placeholder="kg"
}
else
{
    document.getElementById('height').placeholder="in"
    document.getElementById('weight').placeholder="lbs"
    document.getElementById('height').step="any"

}

    return false
}


function calculate()
{
var age= document.getElementById('age').value
var height= document.getElementById('height').value
var weight= document.getElementById('weight').value
var status = document.getElementById('status')
var message = document.getElementById('message')

var option = document.getElementById('option').value

var bmi=0
if (option === "kg-m" )
{
     bmi = (weight / ((height**2) / 10000)).toFixed(2)
     alert("Indian" + " " +  bmi)
 
}
else
{
    bmi = ( (703 * weight) / (height**2) ).toFixed(2)
    alert("US" + " " +  bmi)

    



}

document.getElementById("bmivalue").innerHTML = bmi
if (bmi < 18.5)
{
    status.innerHTML = "UnderWeight"
    status.style.color="red"
    message.innerHTML = "Work Hard and Eat More"
    message.style.color="green"
}
else if (bmi >= 18.5 && bmi <=24.9 )
{
    status.innerHTML = "Normal"
    status.style.color="green"
    message.innerHTML = "Wow! Keep It Up"
    message.style.color="green"
}
else if (bmi >= 25.0 && bmi <=29.9 )
{
    status.innerHTML = "OverWeight"
    status.style.color="red"
    message.innerHTML = "Be on Diet"
    message.style.color="green"
}
else 
{
    if (bmi >=30.0 && bmi <=34.9)
    {
        status.innerHTML = "Obese class I"
        status.style.color="red"
        message.innerHTML = "Workout and Reduce Fat"
        message.style.color="green"
    }
    else if(bmi >=35.0 && bmi <=39.9)
    {
            status.innerHTML = "Obese class II"
        status.style.color="red"
        message.innerHTML = "OMG!Do Massive workout and Eat Healthy food"
        message.style.color="green"
    }
    else
    {
        status.innerHTML = "Obese class III"
        status.style.color="red"
        message.innerHTML = "Consult Bariatric physician"

        message.style.color="green"
    }

}



return false
}