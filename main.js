var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
function.update(){
  var ranbir_singh = images[1]
  console.log(ranbir_singh)
  document.getElementById("family_member_image").src = updatedImage;
  var r_name = names[1] 
  document.getElementById("family_member_name").innerHTML = updatedName;
}
function.update(){
  var Diljeet_Singh = images[2]
  console.log(Diljeet_Singh)
  document.getElementById("family_member_image").src = updatedImage;
  var d_name = names[2]
  document.getElementById("family_member_name").innerHTML = updatedName; 
}
function.update(){
  var Rocky_Singh = images[3]
  console.log(Rocky_Singh)
  document.getElementById("family_member_image").src = updatedImage;
  var R_name = names[3] 
  document.getElementById("family_member_name").innerHTML = updatedName;
}
function.update(){
  var Alia_Singh = images[4]
  console.log(ALia_Singh)
  document.getElementById("family_member_image").src = updatedImage;
  var a_name = names[4] 
  document.getElementById("family_member_name").innerHTML = updatedName;
}
function.update(){
  var Soni_Singh = images[5]
  console.log(Soni_Singh)
  document.getElementById("family_member_image").src = updatedImage;
  var S_name = names[5] 
  document.getElementById("family_member_name").innerHTML = updatedName;
}
