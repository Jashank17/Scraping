//Publication Date of the website
publication_date = document.querySelectorAll(".lbl-licitacao font font")[1].innerHTML;
console.log("Publication Date Value :" , publication_date);

//Bidding Date of the website
bidding_date = document.querySelectorAll(".lbl-licitacao font font")[9].innerHTML;
console.log("Bidding Date Value :" , bidding_date);

//Object value of the website 
objects_value= document.querySelectorAll(".views-field-nothing .field-content p font font")[0].innerHTML;
console.log("Object Value :" , objects_value);

//Link 1 of the website
link1 = document.querySelectorAll(".field .field__item a")[0].getAttribute("href");
console.log("Links : ", link1);

//Link 2 of the website
link2 = document.querySelectorAll(".field .field__item a")[1].getAttribute("href");
console.log("Links : ", link2);

//Link 3(pdf) of the website
link3 = document.querySelectorAll(".field .field__item a")[2].getAttribute("href");
console.log("Links : ", link3);

//Link 4 of the website
link4 = document.querySelectorAll(".field .field__item a")[3].getAttribute("href");
console.log("Links : ", link4);
