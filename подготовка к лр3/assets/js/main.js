// function js_style() { 
//     elem = document.getElementById('text');
//     elem.style.color = 'black';
//     elem.style.fontSize = '40px'
//     elem.style.outline = '3px solid black';
//     elem.style.background = "yellow"
//     elem.style.width = '400px'
//     elem.style.height = '60px'
// }


// 2
// function getFormvalue() { 
//     var d=document.getElementById('form1'); 
//     for (var i=0;i<d.lenght;i++)
//     {
//         if (d.elements[i].value!='Submit')
//         {
//             alert.log(d.elements[i.value]);
//         }
//     }
// }



// 3
// function getAttributes()
// {
// var x = document.getElementById("w3r").href
// alert('значение атребута href равно: '+x)
// var b = document.getElementById("w3r").hreflang
// alert('значение атребута hreflang равно: '+b)
// var c = document.getElementById("w3r").rel
// alert('значение атребута rel равно: '+c)
// var d = document.getElementById("w3r").target
// alert('значение атребута target равно: '+d)
// }           
// 4
// function insert_Row()
// {
// var x=document.getElementById('sampleTable').insertRow(0);
// var y = x.insertCell(0);
// var z = x.insertCell(1);
// y.innerHTML="new";
// z.innerHTML="+1 new";
// document.getElementById('sampleTable').style.fontSize = '10px'
// }




// 5
// function changeContent()
// {
// rn = window.prompt("Выберите строку(0,1,2)", "0");
// cn = window.prompt("Выбирите столбец(0,1)","0");
// content = window.prompt("На что заменить?");  
// var x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
// x[parseInt(cn,10)].innerHTML=content;
// }



// 6
// function createTable()
// {
// rn = window.prompt("Количество строк?", 1);
// cn = window.prompt("Количество столбцов?",1);
  
//  for(var r=0;r<parseInt(rn,10);r++)
//   {
//    var x=document.getElementById('myTable').insertRow(r);
//    for(var c=0;c<parseInt(cn,10);c++)  
//     {
//      var y=  x.insertCell(c);
//      y.innerHTML="Row-"+r+" Column-"+c; 
//     }
//    }
// }




// 7
// function removecolor()
// {
// var x=document.getElementById("colorSelect");
// x.remove(x.selectedIndex);
// }