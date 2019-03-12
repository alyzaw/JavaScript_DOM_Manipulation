// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);

// update each cell's text with sighting report values 
data.forEach(function(sightingReport) {
  // Step 1: Loop Through `data` and console.log each sighting report object
  console.log(sightingReport);
  
  //Use d3 to append one table row `tr` for each sighting report object
  var row = tbody.append("tr");
 
  // Log each sighting report value
  Object.entries(sightingReport).forEach(function([key, value]) {
    console.log(key, value);

    // Append a cell to the row for each value 
    // in the sighting report object
    var cell = tbody.append("td");
   
    // Update each cell's text with
    // sighting report values  
    cell.text(value);
    });
  });

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  var new_tbody = d3.select("tbody");
  new_tbody.text('');
  
  filteredData.forEach(function(filterReport) {
  
    //Use d3 to append one table row `tr` for each sighting report object
    var row = new_tbody.append("tr");
   
    // log each sighting report value
    Object.entries(filterReport).forEach(function([key, value]) {
      console.log(key, value);
  
      // Use d3 to append 1 cell per sighting report value
      // Append a cell to the row for each value 
      var cell = new_tbody.append("td");
     
      // Use d3 to update each cell's text with
      // sighting report values
      cell.text(value);
      });
    });
  });