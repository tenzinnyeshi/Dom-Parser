// Data types in javascript

// 1. primitive: Number, string, null, undefined, Boolean
// 2. reference datatype: Array, object 

//////////////////  xmlhttp request  //////////////////////////////
if (window.XMLHttpRequest)
{
    xmlhttp=new XMLHttpRequest();  
}  
else
{
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");  
}  

xmlhttp.open("GET","employeeDetails.xml",false);  
xmlhttp.send(); 
xmlDoc=xmlhttp.responseXML; 

//////////////////  Button event listeners  ///////////////////////
document.getElementById("showbtn").addEventListener("click",shown);
document.getElementById("delbtn").addEventListener("click",deln);
document.getElementById("quickdelbtn").addEventListener("click",quickdeln);
document.getElementById("changebtn").addEventListener("click",changen);
document.getElementById("addbtn").addEventListener("click",displayol);
document.getElementById("clsbtn1").addEventListener("click",hideol);
document.getElementById("submitbtn").addEventListener("click",addnewele);

//////////////////  shown function  ///////////////////////////////
function shown()
{
    console.log("Hi this is shown function")
    var x = xmlDoc.getElementsByTagName("Employee");
    var table = `<tr>
                <th>Employee id</th>
                <th>Employee name</th>
                <th>Employee age</th>
                <th>Employee salary</th>
                <th>Employee email</th>
                <th>Employee phone</th>
                <th>Employee designation</th>
                </tr>`;
    

    for (i = 0; i < x.length; i++) {
        table += "<td>" +
                x[i].getElementsByTagName("Emp-id")[0]
                .childNodes[0].nodeValue + "</td><td>" +
                x[i].getElementsByTagName("Emp-name")[0]
                .childNodes[0].nodeValue + "</td><td>" +
                x[i].getElementsByTagName("Emp-age")[0]
                .childNodes[0].nodeValue + "</td><td>" +
                x[i].getElementsByTagName("Emp-salary")[0]
                .childNodes[0].nodeValue + "</td><td>" +
                x[i].getElementsByTagName("Emp-emailid")[0]
                .childNodes[0].nodeValue + "</td><td>" +
                x[i].getElementsByTagName("Emp-phonenum")[0]
                .childNodes[0].nodeValue + "</td><td>" +
                x[i].getElementsByTagName("Emp-designation")[0]
                .childNodes[0].nodeValue + "</td><tr>";
    }

    // Print the xml data in table form
    document.getElementById("tbl").innerHTML = table;
}

//////////////////  Delete function  //////////////////////////////
function quickdeln(){
    y = xmlDoc.getElementsByTagName("Employee")[0];
    xmlDoc.documentElement.removeChild(y);
    alert("The Node 'Employee' has been deleted!");
    shown();
}

//////////////////  Quick delete function  ////////////////////////
function deln()
    {   
        var x = xmlDoc.getElementsByTagName("Employee");
        var nno = parseInt(window.prompt("Enter the node number to delete! "));
        nno = nno-1;

        console.log(x.length)
        console.log(nno, typeof(nno))
        if (nno<x.length){
            y = xmlDoc.getElementsByTagName("Employee")[nno];
            xmlDoc.documentElement.removeChild(y);
            alert("The Node Employee has been deleted!");
            shown();
        }
        else{
            alert("The node number you entered is invalid!");
        }
    }

///////////  Form over to add new element functions    ///////////////////////
function displayol(){
    console.log("show overlay btn")
    document.getElementById("overlayform").style.display = "block";
}

function hideol(){
    console.log("close overlay btn")
    document.getElementById("overlayform").style.display = "none";
}

////////// Add new ELEMENT to the XML doc  ////////////////////////////////////
function addnewele(){
    
    console.log("add new element");
    var empid = document.getElementById("idid").value;
    var empname = document.getElementById("nameid").value;
    var empage = document.getElementById("ageid").value;
    var empsalary = document.getElementById("salaryid").value;
    var empemail = parseInt(document.getElementById("emailid").value);
    var empphone = parseInt(document.getElementById("phoneid").value);
    var empdesignation = parseInt(document.getElementById("designationid").value);


    newElement = xmlDoc.createElement("Employee");
    x = xmlDoc.getElementsByTagName("EmployeeDetail")[0]

    newempid = xmlDoc.createElement("Emp-id");
    newempidtxt = xmlDoc.createTextNode(empid);
    newempid.appendChild(newempidtxt);
    newElement.appendChild(newempid);

    newempname = xmlDoc.createElement("Emp-name");
    newempnametxt = xmlDoc.createTextNode(empname);
    newempname.appendChild(newempnametxt);
    newElement.appendChild(newempname);

    newempage = xmlDoc.createElement("Emp-age");
    newempagetxt = xmlDoc.createTextNode(empage);
    newempage.appendChild(newempagetxt);
    newElement.appendChild(newempage);


    newempsalary= xmlDoc.createElement("Emp-salary");
    newempsalarytxt = xmlDoc.createTextNode(empsalary);
    newempsalary.appendChild(newempsalarytxt);
    newElement.appendChild(newempsalary);

    newempemail= xmlDoc.createElement("Emp-emailid");
    newempemailtxt = xmlDoc.createTextNode(empemail);
    newempemail.appendChild(newempemailtxt);
    newElement.appendChild(newempemail);


    newempphone = xmlDoc.createElement("Emp-phonenum");
    console.log(empphone);
    newempphonetxt = xmlDoc.createTextNode(empphone);
    newempphone.appendChild(newempphonetxt);
    newElement.appendChild(newempphone);

    newempdesignation = xmlDoc.createElement("Emp-designation");
    newempdesignationtxt = xmlDoc.createTextNode(empdesignation);
    newempdesignation.appendChild(newempdesignationtxt);
    newElement.appendChild(newempdesignation);

    console.log(newElement);
    x.appendChild(newElement);

    x = xmlDoc.getElementsByTagName("Employee");
    xLen = x.length;

    //document.getElementById("xmlform").reset();
    console.log(x)
    console.log(xLen)

    shown();
    hideol();
}

//////////////////// Change the values /////////////////////////////
function changen(){
    console.log("Change node value");
    var x = xmlDoc.getElementsByTagName("Employee");
    var nodeno = parseInt(window.prompt("Enter The node Number, whose phone You want to change!"));
    console.log(nodeno)
    if(nodeno>x.length || nodeno=="")
    {
        alert("The node number is invalid!");
    }
    else
    {
        var newphone = parseInt(window.prompt("Enter the new phone"));
        x = xmlDoc.getElementsByTagName("phone")[nodeno-1].childNodes[0];    
        x.nodeValue = newphone;
    }

    shown();
}