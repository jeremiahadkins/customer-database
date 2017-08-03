(function(){
  customersArray = customers.results;
  container = document.querySelector('.container');

  customersArray.forEach( function(customer, index, array) {

    customerName = customer.name.first.toUpperCase() + " " + customer.name.last.toUpperCase();
    customerImage = customer.picture.large;
    customerState = abbrState(customer.location.state, 'abbr');

    // console.log(customer.picture.medium);
    // console.log(customerName);
    // console.log(customer.email);
    // console.log(customer.location.street);
    // console.log(customer.location.city);
    // console.log(customer.location.state);
    // console.log(customer.location.postcode);
    // console.log(customer.id.value);

    var customerDiv = `<img src="${customerImage}">\n\
                       <h2 class="customer-name">${customerName}</h2>\n\
                       <a href="${customer.email}" class="email-link">${customer.email}</a>\n\
                       <p>${customer.location.street}</p>\n\
                       <p>${customer.location.city}, ${customerState}, ${customer.location.postcode}</p>\n\
                       <p>${customer.phone}</p>\n\
                       <span class="social">${customer.id.value}</span>`

    var newDiv = document.createElement("div");
    
    newDiv.className = 'col customer';
    
    container.appendChild(newDiv);

    newDiv.innerHTML = customerDiv;

  });

  // imported state abbreviation function
  function abbrState(input, to){
      
      var states = [
          ['Arizona', 'AZ'],
          ['Alabama', 'AL'],
          ['Alaska', 'AK'],
          ['Arizona', 'AZ'],
          ['Arkansas', 'AR'],
          ['California', 'CA'],
          ['Colorado', 'CO'],
          ['Connecticut', 'CT'],
          ['Delaware', 'DE'],
          ['Florida', 'FL'],
          ['Georgia', 'GA'],
          ['Hawaii', 'HI'],
          ['Idaho', 'ID'],
          ['Illinois', 'IL'],
          ['Indiana', 'IN'],
          ['Iowa', 'IA'],
          ['Kansas', 'KS'],
          ['Kentucky', 'KY'],
          ['Kentucky', 'KY'],
          ['Louisiana', 'LA'],
          ['Maine', 'ME'],
          ['Maryland', 'MD'],
          ['Massachusetts', 'MA'],
          ['Michigan', 'MI'],
          ['Minnesota', 'MN'],
          ['Mississippi', 'MS'],
          ['Missouri', 'MO'],
          ['Montana', 'MT'],
          ['Nebraska', 'NE'],
          ['Nevada', 'NV'],
          ['New Hampshire', 'NH'],
          ['New Jersey', 'NJ'],
          ['New Mexico', 'NM'],
          ['New York', 'NY'],
          ['North Carolina', 'NC'],
          ['North Dakota', 'ND'],
          ['Ohio', 'OH'],
          ['Oklahoma', 'OK'],
          ['Oregon', 'OR'],
          ['Pennsylvania', 'PA'],
          ['Rhode Island', 'RI'],
          ['South Carolina', 'SC'],
          ['South Dakota', 'SD'],
          ['Tennessee', 'TN'],
          ['Texas', 'TX'],
          ['Utah', 'UT'],
          ['Vermont', 'VT'],
          ['Virginia', 'VA'],
          ['Washington', 'WA'],
          ['West Virginia', 'WV'],
          ['Wisconsin', 'WI'],
          ['Wyoming', 'WY'],
      ];

      if (to == 'abbr'){
          input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
          for(i = 0; i < states.length; i++){
              if(states[i][0] == input){
                  return(states[i][1]);
              }
          }    
      } else if (to == 'name'){
          input = input.toUpperCase();
          for(i = 0; i < states.length; i++){
              if(states[i][1] == input){
                  return(states[i][0]);
              }
          }    
      }
  }

})();
