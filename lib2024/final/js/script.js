window.onload = init;

function init() {

document.querySelector('#loadTable').onclick = createTableFromJSON;

$('#profile-form').submit(function(e) {
	e.preventDefault();

	var form = this;
	showFormValues(form);

});

var loadTable = document.getElementById("loadTable");
var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 3000);
 }

 function showFormValues(form) {
 	var formValues = $(form).serializeArray(); 
 	$.each(formValues, function(index, field){
		$("#results").find("#"+field.name+"_results").text(field.value);
 		if(field.name=="email"){
			$("#results").find("#"+field.name+"_results").attr("href", "mailto:"+field.value);
		}
 	})				
 }
}

var btn = document.getElementById("btn");
 function createTableFromJSON() {
     var myBooks = [
           {
            	"TIME": "09:00 - 11:00",
            	"MONDAY": "Communications I",
            	"TUESDAY": "Client Services",
				"WEDNESDAY": "Special Collections",
				"THURSDAY": "Directed Research Seminar",
	 			"FRIDAY": "Client Services"
	 		},
			{
				"TIME": "11:00 - 12:30",
             	"MONDAY": "Reference",
            	"TUESDAY": "Internet App",
	 			"WEDNESDAY": "Library Software",
				"THURSDAY": "French",
	 			"FRIDAY": "Reference"
	 		},
	 		{
	 			"TIME": "14:00 - 15:00",
            	"MONDAY": "Aquistions",
             	"TUESDAY": "General Elective",
				"WEDNESDAY": "Marketing",
	 			"THURSDAY": "Emergent Library Tech",
				"FRIDAY": "Library Software"
			},	
			{
	 			"TIME": "15:30 - 17:30",
            	"MONDAY": "French",
             	"TUESDAY": "French",
	 			"WEDNESDAY": "Aquisitions",
	 			"THURSDAY": "Subject Analysis",
	 			"FRIDAY": "Internet App"	
	 		}
         ]

         var col = [];
        for (var i = 0; i < myBooks.length; i++) {
             for (var key in myBooks[i]) {
                if (col.indexOf(key) === -1) {
                     col.push(key);
                 }
             }
         }

          // Dynamic Table.
         var table = document.createElement("table");


         var tr = table.insertRow(-1);                 

         for (var i = 0; i < col.length; i++) {
             var th = document.createElement("th");      
             th.innerHTML = col[i];
             tr.appendChild(th);
         }

        
      for (var i = 0; i < myBooks.length; i++) {

    
             tr = table.insertRow(-1);

           for (var j = 0; j < col.length; j++) {
			
                var tabCell = tr.insertCell(-1);
           
                tabCell.innerHTML = myBooks[i][col[j]];
             }
        }

         var divContainer = document.getElementById("json_table");
         divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }