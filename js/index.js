function changemetrics()
{
    var option = document.getElementById('option').value

if (option === "kg-m" )
{
     document.getElementById('height').placeholder="m"
    document.getElementById('weight').placeholder="kg"
    document.getElementById('weight').value=null
    document.getElementById('height').value=null

}
else
{
    document.getElementById('height').placeholder="in"
    document.getElementById('weight').placeholder="lbs"
    document.getElementById('height').step="any"
    document.getElementById('height').value=null
    document.getElementById('weight').value=null


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
var tips=document.getElementById('tips')
var titletips=document.getElementById('titletips')
var intro=document.getElementById('bmiintro')
var output=document.getElementById('output')



var heightoption = document.getElementById('heightoption').value
var weightoption = document.getElementById('weightoption').value


var bmi=0
if (heightoption=== "m"  && weightoption ==="kg" )
{
     bmi = (weight / ((height**2) / 10000)).toFixed(2)
     
     //alert("Indian" + " " +  bmi)
}
else
{
    bmi = ( (703 * weight) / (height**2) ).toFixed(2) 
    //alert("US" + " " +  bmi)
}


document.getElementById("bmivalue").innerHTML = bmi + " kg/m<sup>2</sup>"
if (bmi < 18.5)
{
    status.innerHTML = "UnderWeight"
    status.style.color="red"
    message.innerHTML = "Work Hard and Eat More"
    message.style.color="green"
    titletips.innerHTML = "Health Tips"
    tips.innerHTML = "<ol><li>Heavy food items that are more in calories.</li><li>Frequent consumption of food items which are rich in nutrients, it could be snacks, shakes or juices, or proper meals.</li><li>Adding extra ingredients that are high in calories to regular diet, for example, including eggs and bananas in morning breakfast, etc., can help in increasing the weight.</li><li>Consume protein supplements along with adequate amount of vegetables and fruits.</li><li>Eating calorie dense food and maintaining a balanced diet will help in gaining the weight.</li><li>However, the diet shouldn’t be started drastically and instead, should be implemented gradually so that the body is accustomed with it.</li></ol>"
    intro.style.display="block"
    intro.style.visibility="visible"
    output.style.visibility="visible"
    output.style.display="block"

}
else if (bmi >= 18.5 && bmi <=24.9 )
{
    status.innerHTML = "Normal"
    status.style.color="green"
    message.innerHTML = "Wow! Keep It Up"
    message.style.color="green"
    intro.style.display="none"
    output.style.visibility="visible"
    output.style.display="block"

}
else if (bmi >= 25.0 && bmi <=29.9 )
{
    status.innerHTML = "OverWeight"
    status.style.color="red"
    message.innerHTML = "Be on Diet and Workout Regularly"
    message.style.color="green"
    titletips.innerHTML = "Health Tips"

    tips.innerHTML="<ul><li>ADd more fruits and vegetables to your diet</li><li>Eat smaller meals</li><li>Count calories</li><li>Eat mindfully</li><li>Limit saturated fats, trans fats, and refined sugars</li></ul>"
    intro.style.display="block"
    intro.style.visibility="visible"
    output.style.visibility="visible"
    output.style.display="block"

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
    titletips.innerHTML = "Health Tips"

    tips.innerHTML="<ul><li>adding more fruits and vegetables to your diet</li><li>eating smaller meals</li><li>count calories</li><li>eating mindfully</li><li>limiting saturated fats, trans fats, and refined sugars</li></ul>"
    intro.style.display="block"
    intro.style.visibility="visible"
    output.style.visibility="visible"
    output.style.display="block"
}
return false
}
