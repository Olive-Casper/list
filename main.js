s=[];

function submit()
{
    var n1=document.getElementById("student1").value;
    var n2=document.getElementById("student2").value;
    var n3=document.getElementById("student3").value;
    var n4=document.getElementById("student4").value;

    s.push(n1);
    s.push(n2);
    s.push(n3);
    s.push(n4);

    document.getElementById("display").innerHTML=s;
    document.getElementById("sb").style.display=none;
    document.getElementById("st").style.display=inline-block;

}

function sorting()
{
    s.sort();
    document.getElementById("display").innerHTML=s;
}