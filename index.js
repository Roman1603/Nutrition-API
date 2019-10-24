"use strict";

// keyAPI and URL
const api_key = "0b268ffbe259dae9afa14d410c72decb";
const api_ID = "d008b28c";



//Display results in DOM
function displayResults(responseJson) {
  console.log("displayResults ran");
  console.log(responseJson);
  $("#results").empty();
  $('.err-result').empty();
  let obj = responseJson;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
    }
  }


  $("#results").append(`
  <div class= "nfp-nutrition-facts single-label pre-2019">
  <table class="nutrition-facts-table">
    <thead>
      <tr>
      <td class="table-title" colspan="3">Nutrition Facts</td>
      </tr>
      </tr>
      <tr class="serving-size">
        <th scope="row">Serving size</th>
        <td>1/4 Cup (60mL)</td>
      </tr>
      <tr>
        <td colspan="3">About 7 Servings Per Container</td>
      </tr>
      </thead>
      <tbody>
      <tr class="servings no-border">
      <td class="left-aligned" colspan="3">Amount per serving</td>
    </tr>
    <tr class="calories">
      <th scope="row">Calories</th>
      <td>${obj.calories}</td>
      <td>Calories from Fat ${obj.totalNutrientsKCal.FAT_KCAL.quantity}</td>
    </tr>
    <tr class="dv-row">
      <th colspan="3" scope="col">% Daily Value<sup>*</sup></th>
    </tr>
        <tr class="fat_total">
            <th scope="row">Total Fat</th>
            <td>${obj.totalNutrients.FAT == undefined ? "-" : Math.floor(obj.totalNutrients.FAT.quantity)} 
            ${obj.totalNutrients.FAT == undefined ? "0" : obj.totalNutrients.FAT.unit}</td>

          <td>${obj.totalDaily.FAT == undefined ? "-" : Math.floor(obj.totalDaily.FAT.quantity)} 
          ${obj.totalDaily.FAT == undefined ? "0%" : obj.totalDaily.FAT.unit}</td>
        </tr>
        <tr class="sub-row first saturated_fat">
        <th scope="row">Saturated Fat</th> 
        <td>${obj.totalNutrients.FASAT == undefined ? "-" : Math.floor(obj.totalNutrients.FASAT.quantity)} 
        ${obj.totalNutrients.FASAT == undefined ? "0" : obj.totalNutrients.FASAT.unit}</td>

          <td>${obj.totalDaily.FASAT == undefined ? "-" : Math.floor(obj.totalDaily.FASAT.quantity)} 
            ${obj.totalDaily.FASAT == undefined ? "0%" : obj.totalDaily.FASAT.unit}</td>
        </tr>
        <tr class="sub-row transfat">
        <th scope="row"><em>Trans</em> Fat</th>
        <td>${obj.totalNutrients.FATRN == undefined ? "-" : Math.floor(obj.totalNutrients.FATRN.quantity)} 
        ${obj.totalNutrients.FATRN == undefined ? " " : obj.totalNutrients.FATRN.unit}</td>

          <td>${obj.totalDaily.FATRN == undefined ? " " : Math.floor(obj.totalDaily.FATRN.quantity)} 
          ${obj.totalDaily.FATRN == undefined ? " " : obj.totalDaily.FATRN.unit}</td>
        </tr>
        <tr class="cholesterol">
        <th scope="row">Cholesterol</th>
          <td>${obj.totalNutrients.CHOLE == undefined ? "-" : Math.floor(obj.totalNutrients.CHOLE.quantity)} 
          ${obj.totalNutrients.CHOLE == undefined ? " " : obj.totalNutrients.CHOLE.unit}</td>

          <td>${obj.totalDaily.CHOLE == undefined ? "-" : Math.floor(obj.totalDaily.CHOLE.quantity)} 
          ${obj.totalDaily.CHOLE == undefined ? " " : obj.totalDaily.CHOLE.unit}</td>
        </tr>
        <tr class="sodium">
        <th scope="row">Sodium</th>
            <td>${obj.totalNutrients.NA == undefined ? "-" : Math.floor(obj.totalNutrients.NA.quantity)} 
            ${obj.totalNutrients.NA == undefined ? "0" : obj.totalNutrients.NA.unit}</td>

        <td>${obj.totalDaily.NA == undefined ? "-" : Math.floor(obj.totalDaily.NA.quantity)} 
          ${obj.totalDaily.NA == undefined ? "0%" : obj.totalDaily.NA.unit}</td>
        </tr>
        <tr class="carbohydrate_total">
        <th scope="row">Total Carbohydrate</th>
          <td>${obj.totalNutrients.CHOCDF == undefined ? "-" : Math.floor(obj.totalNutrients.CHOCDF.quantity)} 
          ${obj.totalNutrients.CHOCDF == undefined ? "0" : obj.totalNutrients.CHOCDF.unit}</td>

        <td>${obj.totalDaily.CHOCDF == undefined ? "-" : Math.floor(obj.totalDaily.CHOCDF.quantity)} 
          ${obj.totalDaily.CHOCDF == undefined ? "0%" : obj.totalDaily.CHOCDF.unit}</td>
        </tr>
        <tr class="sub-row first dietary_fiber">
        <th scope="row">Dietary Fiber</th>
        <td>${obj.totalNutrients.FIBTG == undefined ? "-" : Math.floor(obj.totalNutrients.FIBTG.quantity)} 
        ${obj.totalNutrients.FIBTG == undefined ? "0" : obj.totalNutrients.FIBTG.unit}</td>

        <td>${obj.totalDaily.FIBTG == undefined ? "-" : Math.floor(obj.totalDaily.FIBTG.quantity)}
           ${obj.totalDaily.FIBTG == undefined ? "0%" : obj.totalDaily.FIBTG.unit}</td>
        </tr>
        <tr class="sub-row no-bottom-border sugars">
        <th scope="row">Total Sugars</th>
        <td>${obj.totalNutrients.SUGAR == undefined ? "-" : Math.floor(obj.totalNutrients.SUGAR.quantity)} 
        ${obj.totalNutrients.SUGAR == undefined ? "0" : obj.totalNutrients.SUGAR.unit}</td>

        <td>${obj.totalDaily.SUGAR == undefined ? "-" : Math.floor(obj.totalDaily.SUGAR.quantity)} 
          ${obj.totalDaily.SUGAR == undefined ? " " : obj.totalDaily.SUGAR.unit}</td>
        </tr>
        <tr class="thick-bottom-border protein">
        <th scope="row">Protein</th>
            <td>${obj.totalNutrients.PROCNT == undefined ? "-" : Math.floor(obj.totalNutrients.PROCNT.quantity)} 
            ${obj.totalNutrients.PROCNT == undefined ? "0" : obj.totalNutrients.PROCNT.unit}</td>

        <td>${obj.totalDaily.PROCNT == undefined ? "-" : Math.floor(obj.totalDaily.PROCNT.quantity)} 
          ${obj.totalDaily.PROCNT == undefined ? "0%" : obj.totalDaily.PROCNT.unit}</td>
        </tr>
        <tr class="nutrient-row vitamin_a">
        <th scope="row">Vitamin A</th>
         <td>${obj.totalNutrients.VITA_RAE == undefined ? "-" : Math.floor(obj.totalNutrients.VITA_RAE.quantity)} 
        ${obj.totalNutrients.VITA_RAE == undefined ? "0" : obj.totalNutrients.VITA_RAE.unit}</td>

        <td>${obj.totalDaily.VITA_RAE == undefined ? "-" : Math.floor(obj.totalDaily.VITA_RAE.quantity)} 
          ${obj.totalDaily.VITA_RAE == undefined ? "0%" : obj.totalDaily.VITA_RAE.unit}</td>
         </tr>
         <tr class="nutrient-row vitamin_c">
         <th scope="row">Vitamin C</th>
         <td>${obj.totalNutrients.VITC == undefined ? "-" : Math.floor(obj.totalNutrients.VITC.quantity)} 
         ${obj.totalNutrients.VITC == undefined ? "0" : obj.totalNutrients.VITC.unit}</td>

         <td>${obj.totalDaily.VITC == undefined ? "-" : Math.floor(obj.totalDaily.VITC.quantity)} 
         ${obj.totalDaily.VITC == undefined ? "0%" : obj.totalDaily.VITC.unit}</td>
         </tr>
         <tr class="nutrient-row calcium">
         <th scope="row">Calcium</th> 
         <td>${obj.totalNutrients.CA == undefined ? "-" : Math.floor(obj.totalNutrients.CA.quantity)} 
         ${obj.totalNutrients.CA == undefined ? "0" : obj.totalNutrients.CA.unit}</td>

         <td>${obj.totalDaily.CA == undefined ? "-" : Math.floor(obj.totalDaily.CA.quantity)} 
         ${obj.totalDaily.CA == undefined ? "0%" : obj.totalDaily.CA.unit}</td>
         </tr>
        
    </tbody>
    <tfoot>
    <tr>
        <td colspan="3">
          <sup>*</sup> Percent Daily Values are based on a 2,000 calorie diet. Your daily value may be higher or lower depending on your calorie needs.</td>
      </tr>
    </tfoot>
    </table>
  </div>
  `);

}




//GetFoodInfo

function getFoodInfo() {
  const searchTerm = $("#input").val();
  const url = `https://api.edamam.com/api/nutrition-data?app_id=${api_ID}&app_key=${api_key}&ingr=${searchTerm}`;

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $(".err-result").text(
        `We cannot calculate the nutrition for some ingredients. Please check the ingredient spelling or if you have entered a quantities for the ingredients.: ${err.message}`
      );
    });
}

// Handle New Recipe 
function newRecipe() {
  $('.container').on('click', '.btn2', () => {
    window.location.reload();

  })
}


//Event Listener for Submit
function watchForm() {
  $(".main-form").submit(event => {
    event.preventDefault();
    const searchTerm = $("#input").val();
    getFoodInfo(searchTerm);
    $('.btn2').removeClass('hidden');
  });



}

$(watchForm, newRecipe());


