// * * * FUNCTIONS * * * //
let sites;
getApi();

function getApi() {
  fetch('https://services.arcgis.com/v400IkDOw1ad7Yad/arcgis/rest/services/DogParkLocations_Existing_PUBLIC/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')
    .then(function (response) {
      return response.json();
     
    })
    .then(function (data) {
      console.log(data.features);
      sites = data.features.map(function (feature) {
        return {
          site: feature.attributes.SITE,
          address: feature.attributes.ADDRESS,
          hours: feature.attributes.HOURS_OPEN,
          lights: feature.attributes.LIGHTS,
          bathroom: feature.attributes.BATHROOM,
          dog_water_fountain: feature.attributes.DOG_WATER_FOUNTAIN,
          agility_equipment: feature.attributes.AGILITY_EQUIPMENT,
          climbing_platform: feature.attributes.CLIMBING_PLATFORM,
          small_dog_area: feature.attributes.SMALL_DOG_AREA,
          shade: feature.attributes.SHADE,
          picnic_table: feature.attributes.PICNIC_TABLE,
          bench: feature.attributes.BENCH,
        }
      });
    });
}

let park;

$('.dropdown-item').each(function() {
  $(this).on('click', function() {
    park = this.innerHTML;
    console.log(park)
    parkInfo()
  })
})

let a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12;

function parkInfo() {
  for (let i=0; i < sites.length; i++) {
    if (sites[i].site==park) {
      a1=sites[i].site;
      a2=sites[i].address;
      a3=sites[i].hours;
      a4=sites[i].lights;
      a5=sites[i].bathroom;
      a6=sites[i].dog_water_fountain;
      a7=sites[i].agility_equipment;
      a8=sites[i].climbing_platform;
      a9=sites[i].small_dog_area;
      a10=sites[i].shade;
      a11=sites[i].picnic_table;
      a12=sites[i].bench;
    }
  } 
  $('#parkAtt').empty();
  $('#parkAtt').append(`<li> <i class="fas fa-bone"></i> Name of Dog Park: ${a1}</li>`);
  $('#parkAtt').append(`<li> <i class="fas fa-bone"></i> Address: ${a2} </li>`);
  $('#parkAtt').append(`<li> <i class="fas fa-bone"></i> Hours of Operation: ${a3}</li>`);
  $('#parkAtt').append(`<li> <i class="fas fa-bone"></i> Lights: ${a4}</li>`);
  $('#parkAtt').append(`<li> <i class="fas fa-bone"></i> Bathrooms: ${a5}</li>`);
  $('#parkAtt').append(`<li> <i class="fas fa-bone"></i> Dog Water Fountain: ${a6}</li>`);
  $('#parkAtt').append(`<li> <i class="fas fa-bone"></i> Agility Equipment: ${a7}</li>`);
  $('#parkAtt').append(`<li> <i class="fas fa-bone"></i> Climbing Platform: ${a8}</li>`);
  $('#parkAtt').append(`<li><i class="fas fa-bone"></i> Small Dog Area: ${a9}</li>`);
  $('#parkAtt').append(`<li> <i class="fas fa-bone"></i> Shade: ${a10}</li>`);
  $('#parkAtt').append(`<li> <i class="fas fa-bone"></i> Picnic Table: ${a11}</li>`);
  $('#parkAtt').append(`<li> <i class="fas fa-bone"></i> Bench: ${a12}</li>`);
}



// MAP API
let map;

function initMap() {
  let millbrook = {lat: 35.869818729414604, long: -78.60565780025577};
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}



// GENERAL PSEUDO CODE FOR JS - SUBJECT TO CHANGE 
// 1. get the api to work +  filter for parameters we want to show - DONE 
// 2. be able to select which park we would like to display information using the dropdown selecter -DONE
// 3. get api info to display on page -DONE
// 4. get google api to associate with each park and diplay that onto the page
// 5. be able to favorite park and save to local storage