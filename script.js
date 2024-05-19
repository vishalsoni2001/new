function addNewWEField()
{
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder',"Enter here");

    let weOb= document.getElementById("we")
    let weAddButtonOb= document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewAQField()
{
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder',"Enter here");

    let aqOb= document.getElementById("aq")
    let aqAddButtonOb= document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);
}

function generateCV()
{
let firstnamefield = document.getElementById("firstnamefield").value;
let nameT1 = document.getElementById("nameT1");

nameT1.innerHTML= firstnamefield;


let lastnamefield = document.getElementById("lastnamefield").value;
let nameT2 = document.getElementById("nameT2");

nameT2.innerHTML= lastnamefield;

document.getElementById("nameT3").innerHTML=firstnamefield +" "+ lastnamefield;

let phonenumberfield= document.getElementById("phonenumberfield").value;
let contactT = document.getElementById("contactT");

contactT.innerHTML= phonenumberfield;

document.getElementById("addressT").innerHTML=document.getElementById("Addressfield").value;



document.getElementById("cityT").innerHTML=document.getElementById("Cityfield").value;

document.getElementById("stateT").innerHTML=document.getElementById("Statefield").value;

document.getElementById("codeT").innerHTML=document.getElementById("Zipfield").value;


document.getElementById("fbT").innerHTML=document.getElementById("facebookfield").value;
document.getElementById("linkedT").innerHTML=document.getElementById("linkedinfield").value;
document.getElementById("githubT").innerHTML=document.getElementById("githubfield").value;
document.getElementById("aboutT").innerHTML=document.getElementById("aboutfield").value;

//professional details
document.getElementById("objectiveT").innerHTML=document.getElementById("objectivefield").value;


let wes=document.getElementsByClassName("weField");

let str= " ";

for(let e of wes)
{
    str=str +`<li> ${e.value} </li>`;
}
document.getElementById("weT").innerHTML=str;




let aqs=document.getElementsByClassName("eqField");

let str1= " ";

for(let f of aqs)
{
    str1= str1 +`<li> ${f.value} </li>`;
}
document.getElementById("aqT").innerHTML=str1;


//code for image

let file=document.getElementById("imgfield").files[0];
console.log(file);

let reader=new FileReader();

reader.readAsDataURL(file);

console.log(reader.result);

//set the image to template

reader.onloadend=function()
{
    document.getElementById("imgtemplate").src=reader.result;
};


}
function myfun(paravalue)
{
    var backup = document.body.innerHTML;
    var divcontent = document.getElementById(paravalue).innerHTML;
    document.body.innerHTML= divcontent;
    window.print();
    document.body.innerHTML=backup;
}




