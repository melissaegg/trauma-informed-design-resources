var catsArray = [];
var colors = ['#F479A3', '#E91F63', '#DE0F00', '#9D27B0', '#4E00D8', '#001FE0' ,'#2197F3', '#78AEFF', '#03BBD4', '#009688', '#4CAF50', '#076B0B', '#ABB92D', '#DAC406', '#FFC008', '#FF9800', '#FE470E', '#C60E00', '#816464'];
var index = 0;
var tab_name = 'Resources';

// ADD YOUR GOOGLE PAGE ID AND API KEY HERE
var spreadsheet_id = 'ADD-PAGE-ID-HERE';
var api_key = 'ADD-API-KEY-HERE';

var url = 'https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheet_id + '/values/' + tab_name + '?alt=json&key=' + api_key;

$.getJSON( url, function( data ) {
    processData(data.values)
});

// Primary Function for JSON
function processData(data) {
  delete data[0];
  data.sort((a, b) => (a[0] > b[0]) ? -1 : 1)

  for (var key in data) {
    if (data.hasOwnProperty(key)) {
        var year = data[key][0],
            title = data[key][1],
            authors = data[key][2],
            publication = data[key][3],
            cat = data[key][4],
            desc = data[key][5],
            link = data[key][6];

        // Trim the description
          desc= desc.split(" ").splice(0,25).join(" ");

        // If category is new, push to array
        if(catsArray.indexOf(cat) === -1){
          catsArray.push(cat);
        }

        // Send data to cards function
        createCards(year,title,authors,publication,cat,link,desc);
    }
  };

  // Send data to filter function
  createFilter(cat);

  // Match colors to categories
  matchColor();
};

// Create cards
function createCards(year,title,authors,publication,cat,link,desc) {
  var year = (year == "") ? "" : year;
  var desc = (desc == "") ? "" : desc + '...';
  var authors = (authors == "") ? "" : '<strong>By:</strong> ' + authors;
  var publication = (publication == "") ? "" : '<strong>Publication:</strong> ' + publication;

  var card =
    `<div class="card" data-category-type="${cat}">
        <a href="${link}" target="_blank">
          <div class="card-header">
            <span class="card-category">${cat}</span>
            <p class="card-date">${year}</p>
          </div>
          <div class="card-content">
            <p class="card-title">${title}</p>
            <p class="card-authors">${authors}</p>
            <p class="card-publication">${publication}</p>
            <p class="card-desc">${desc}</p>
          </div>
        </a>
      </div>`

    $('.resources').append(card);
};

// Create Filter
function createFilter() {
  catsArray.sort();

  for (i = 0; i < catsArray.length; i++) {
    $('<li/>')
      .attr('data-category-type', catsArray[i])
      .text(catsArray[i])
      .css('color', colors[index])
      .appendTo('.categories');

    index++
  }

  // Add filter
  $('.categories li').on('click', function(e) {
    e.preventDefault();

    var filter = $(this).data('categoryType');

    if(filter === 'all') {
      $('.card').show();
    } else {
      $('.card').hide();
      $('.card[data-category-type="'+ filter +'"]').show();
    }
  });
}

// Match colors to categories
function matchColor() {

  $('.categories li').filter(function(i) {
    var x = $(this);

      $('.card').each(function() {
        var y = $(this);

        if(x.attr('data-category-type') == y.attr('data-category-type') ){
          var color = $(x).css('color');
          $(y).find('.card-header').css('background', color);
        }
      });
  });
}

// Search Bar
$(document).ready(function(){
  $('.search').on('keyup', function() {
    var value = $(this).val().toLowerCase();
    $(".resources .card").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
