// Variables //
let modalHtml = '<p><u>Project</u>: <span id="project-text"></span></p>\
          <p><u>Objective</u>: <span id="objective-text"></span></p>\
          <p><u>Process</u>: <span id="process-text"></span></p>\
          <p><u>Link</u>: <a class="case-study-link" href="" target="_blank"></a>\
          <p><u>Result</u>: View screencaps below.</p>'


let examples = {
'bingo' : [
  { 'title' : 'Interactive Bingo Board <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">HTML</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">JavaScript</a>',
   'project' : 'Personal',
   'objective' : 'After seeing an image of "Conference Call Bingo" going around on the internet I decided to code it for fun!',
   'process' : 'Created an array of entries for the Bingo boxes that are then randomized each time the table is loaded. Made each box clickable, which highlights the selection.',
   'link' : 'https://codepen.io/cjhaviland/full/MoxMYN',
   'images' : ['http://camhaviland.com/img/portfolio_examples/Bingo_1.png', 
               'http://camhaviland.com/img/portfolio_examples/Bingo_2.png']}
],
'snowball' : [
  {'title' : 'Snowball Debt Repayment Calculator <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">HTML</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">JavaScript</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">Python</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">jQuery</a>',
   'project' : 'Personal',
   'objective' : 'To create a web app for my wife and I to use to determine our monthly credit card payments using the "snowball" repayment method.',
   'process' : 'This payment method involves putting as much as you can toward your lowest balance, while paying the minimums on off of your other debts. Once the lowest balance is paid off, you then add that payment amount PLUS the minimum payment toward the next lowest balance. Your monthly payments remain the same overall, but the amount you are putting toward a single balance grows as you minimize your debt. I have created a simple JavaScript prototype to test the equation and functionality. Next I plan on porting to a python web app that will allow us to enter credit cards balances and APRs into a database. Once that is set up I will factor in the interest accumulation in order to get a more accurate monthly balance and payment schedule.',
   'link' : 'https://codepen.io/cjhaviland/full/yXdREP/',
   'images' : ['http://camhaviland.com/img/portfolio_examples/snowball.png']}
],
'sentiments' : [
  { 'title' : 'Twitter Analyzer <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">HTML</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">Python</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">Twitter API</a>',
   'project' : 'Harvard CS50: Intro to Computer Science',
   'objective' : 'Use Twitter’s API to pull and analyze user data.',
   'process' : 'Created a web app that will analyze the words in a user’s tweets and decide how positive, negative, or neutral their tweets are. Used Twitter’s API to get the user’s most recent tweets. Utilized a tokenizer to split a person\'s tweets into words, then compare those words to two different dictionaries; one positive, one negative. Implemented a count of how many positive or negative words were used, which was then then graphed out onto the webpage for viewing.',
   'link' : 'N/A',
   'images' : ['http://camhaviland.com/img/portfolio_examples/sentiments_1.png', 
               'http://camhaviland.com/img/portfolio_examples/sentiments_2.png', 
               'http://camhaviland.com/img/portfolio_examples/sentiments_3.png']}
],
'mashup' : [
  {'title' : 'Google Maps Mashup <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">HTML</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">JavaScript</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">jQuery</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">Python</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">SQL</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">Google Maps API</a>',
   'project' : 'Harvard CS50: Intro to Computer Science',
   'objective' : 'Use the Google Maps API and mash it up with a Google News RSS feed.',
   'process' : 'Utilized Flask and Jinja to dynamically create a web app. Used jQuery to add and remove the Google Maps markers, accessed JSON objects from the News RSS feed to build an article list when you click on a map marker. Also worked with a database filled with locations to use while searching to aid the Typeahead repository which we forked from Github. I thought this added piece was especially helpful for searching as it autocompletes the search bar based on what you\'re typing.',
   'link' : 'N/A',
   'images' : ['http://camhaviland.com/img/portfolio_examples/mashup_1.png', 
               'http://camhaviland.com/img/portfolio_examples/mashup_2.png', 
               'http://camhaviland.com/img/portfolio_examples/mashup_3.png',
               'http://camhaviland.com/img/portfolio_examples/mashup_4.png']}
],
'sigPortal' : [
  { 'title' : 'Customer Access Portal <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">C#</a><a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">SQL</a><a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">MVC</a><a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">Bootstrap</a>',
   'project' : 'Sigmund Software',
   'objective' : 'Write a portal for customers to access training documentation and help ticket statuses.',
   'process' : 'Converted existing ASP.NET pages from a previous website using C#, MVC and .NET Framework to create a new web application. Used SQL functions and procedures to pull information from each page. ',
   'link' : 'N/A',
   'images' : ['http://camhaviland.com/img/portfolio_examples/ErrorPage.png', 
              'http://camhaviland.com/img/portfolio_examples/Home Page.png',
              'http://camhaviland.com/img/portfolio_examples/ReleaseNotes.png',
              'http://camhaviland.com/img/portfolio_examples/SigServerStatus.png']}
],
'sigIp' : [
  { 'title' : 'Backend IP Restriction <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">C#</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">SQL</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">MVC</a>',
   'project' : 'Sigmund Software',
   'objective' : 'Create IP restrictions that deter users from accessing patient data outside of the facility.',
   'process' : 'Utilizing my networking background I was assigned to create a new feature to Sigmund’s web version, Aura. I used C# to create a backend IP restriction which allows some of our clients to regulate where their users log into the software in order to comply with HIPAA regulations. ',
   'link' : 'N/A',
   'images' : ['http://camhaviland.com/img/portfolio_examples/sigmund_logo_thumb.png']}
],
'ronSwanson' : [
  { 'title' : 'Ron Swanson Random Quote Generator <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">HTML</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">CSS</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">Javascript</a>',
   'project' : 'Udemy - Advanced Developer Bootcamp',
   'objective' : 'Use a single API endpoint four different ways.',
   'process' : 'Starting with a vanilla API endpoint with XHR I created a way to access the random quote generator. Then implemented Fetch, jQuery, and Axios as additional ways to use an API. Each button makes a call to the API using one of the above libraries. Used refactoring to make the code more readable and reusable.',
   'link' : 'https://codepen.io/cjhaviland/full/ZXvMgo/',
   'images' : ['http://camhaviland.com/img/portfolio_examples/ronswanson.png']}
],
'timestamp' : [
  { 'title' : 'Timestamp Microservice <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">Node.js</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">Express</a>',
   'project' : 'FreeCodeCamp',
   'objective' : 'When user passes either parameter, return both UNIX and natural English timestamp in JSON format.',
   'process' : 'Used node.js to check which parameter was used and if it was valid. Utilized Express library to return JSON object. This was all the original user story asked but I wanted to go a step further so I found a third party library which also accepts strings like “today” or “tomorrow” or “December” as possible input.',
   'link' : 'https://elderly-innocent.glitch.me/',
   'images' : ['http://camhaviland.com/img/portfolio_examples/timestamp_1.png', 'http://camhaviland.com/img/portfolio_examples/timestamp_2.png', 'http://camhaviland.com/img/portfolio_examples/timestamp_3.png']}
]
};

$(function(){
  
  // Function to create HTML for Skills section
  function buildSkills(){
    let html = '';
    
    // Label object for skill level lookup
    let skillLabel = {
      0 : 'Novice', 
      1 : 'Intermediate', 
      2 : 'Advanced', 
      3 : 'Expert'
    };

    // To cut down on the verbose HTML, automate it
    let skills = [
      {skill:'HTML5, CSS3', level: 1},
      {skill:'Javascript', level: 2},
      {skill:'Node.js', level: 1},
      {skill:'React.js', level: 0},
      {skill:'SQL', level: 2},
      {skill:'Python', level: 1},
      {skill:'C', level: 1},
      {skill:'Knitting', level: 3}
    ];

    // Build HTML for Skills section
    for (let i in skills){
      html += '<div class="row"><div class="col-md-6 text-left">'+
      skills[i]['skill'] +
      '</div><div class="col-md-6 text-right">' +
      skillLabel[skills[i]['level']] +
      '</div></div><div class="row"><div class="col-md-12"><input type="range" class="slide" min="0" max="3" value="' +
        skills[i]['level'] +
        '" disabled></div></div>';
    }
    
    return html;
  }; // End of buildSkills
  
    // jQuery to fill Skills List with build HTML
  $('#skills-list').append(buildSkills());
  
  
  
  
  // Build the modal with carousel when you click on an image
  $('.overlay').on('click', function(){
    $('#myModal').on('show.bs.modal', function(e){
      let ex = $(e.relatedTarget);
      let name = ex.data('name');
      
      let modal = $(this);
      
      // Fill the modals carousel with images once Modal is shown
      let images = examples[name][0]['images'];
      
      $('#myModal').on('shown.bs.modal', function(){
        // Build Images for carousel inner from object
        let html = '';
        for (let i = 0 ; i < images.length ; i++) {
          html += '<div class="carousel-item"><img id="modal-image" src="'+images[i]+'"></div>';
        }
          
        $('.carousel-inner').html(html); // Slap it into the DOM
        $('.carousel-item').first().addClass('active'); // Set the first image as active
        $('.modal-title').html(examples[name][0]['title']);
        $('#project-text').text(examples[name][0]['project']);
        $('#objective-text').text(examples[name][0]['objective']);
        $('#process-text').text(examples[name][0]['process']);
        $('.case-study-link').attr('href', examples[name][0]['link']);
        $('.case-study-link').text(examples[name][0]['link']);
        
      });  
    });
	
	// Once modal is closed clear out the old images
	$('#myModal').on('hidden.bs.modal', function(){
        $('.modal-title').empty();
        $('.carousel-inner').empty();
	}); //END myModal on hidden
	
  }); //END image click event
  
}); //END document.ready function`