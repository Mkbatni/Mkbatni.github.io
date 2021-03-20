
var firstTime = true 
function addBlog()
{
   
    console.log("size is ",sessionStorage.length )
  if(firstTime==true && sessionStorage.length > 0)
  {
      console.log("if is runing")
    read()
    insertFromSession()
 
    console.log("firs time", firstTime)
  }
  
    else{
        console.log("else is runing ")
        var obj = read()
        insertNewRecords(obj);
    }
  
    firstTime = false
  
    reset()
}


function read(){
  var obj = {}
   obj.title = document.getElementById("title").value;
   obj.desc = document.getElementById("desc").value;
   
console.log(document.getElementById("imageId")," first" , "<>", document.getElementById("imageId").value == "")
if(document.getElementById("imageId").value == "")
{
  obj.imageInfo = undefined
}
      
 
  else{
      obj.imageInfo = document.getElementById("imageId").files[0].name;
      console.log(obj.imageInfo);
  }

 
  var key = obj.title;
  sessionStorage.setItem(key,JSON.stringify(obj))
return obj
/*     document.getElementById("titleInfo").innerHTML=title;
  document.getElementById("descInfo").innerHTML=desc;
  document.getElementById("imageInfo").src=imageInfo; */
}


function insertNewRecords(formData) {
 
  var table = document.getElementById("employeeDetails");
  var tableBody = table.getElementsByTagName("tbody")[0];
  var newRow = tableBody.insertRow(tableBody.length);
  var cell1 = newRow.insertCell(0);
  cell1.innerHTML=formData.title;
  var cell2 =newRow.insertCell(1);
  cell2.innerHTML= formData.desc;
  
  var cell4 =newRow.insertCell(2);

  console.log("this is-->", formData.imageInfo)
  if(formData.imageInfo!=undefined)
  {
      var img = document.createElement('img')
      if(img && img.style) {
          img.style.height = '100px';
          img.style.width = '100px';
      }
      img.src = formData.imageInfo
      cell4.append(img)
  }
  else{
      cell4.innerHTML = "NO IMAGE SELECTED"
  }
  
 

  var cell3 = newRow.insertCell(3);
  cell3.innerHTML="<a href='#' onclick='deleteRec(this)'>X</a>";

}
function insertFromSession()
{
    for (let i = 0; i < sessionStorage.length; i++) {
        const element = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
        insertNewRecords(element);
        
    }
}

function reset(){
  document.getElementById("title").value = ""
  document.getElementById("desc").value = ""
  document.getElementById("imageId").value = ""
}
function deleteRec(data){
  var row = data.parentElement.parentElement;
  document.getElementById("employeeDetails").deleteRow(row.rowIndex);
}