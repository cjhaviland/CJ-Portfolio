$(function(){
  
  // Function to create HTML for Skills section
  function buildSkills(){
    var html = '';
    
    // Label object for skill level lookup
    var skillLabel = {
      0 : 'Jon Snow...', 
      1 :'Beginner', 
      2 : 'Intermediate', 
      3 : 'Expert'
    };

    // To cut down on the verbose HTML, automate it
    var skills = [
      {skill:'HTML5, CSS3', level: 2},
      {skill:'Javascript', level: 2},
      {skill:'SQL', level: 2},
      {skill:'Python', level: 1},
      {skill:'C', level: 2},
      {skill:'Node.js', level: 0}
    ];

    // Build HTML for Skills section
    for (var i in skills){
      html += '<div class="row"><div class="col-md-6 text-left">'+
      skills[i]['skill'] +
      '</div><div class="col-md-6 text-right">' +
      skillLabel[skills[i]['level']] +
      '</div></div><div class="row"><div class="col-md-12"><input type="range" class="slide" min="0" max="3" value="' +
        skills[i]['level'] +
        '" disabled></div></div>';
    }
    
    return html;
  };
  
  $('#skills-list').append(buildSkills());
  
  
  // Build Modal HTML from Object
  var examples = {
    'bingo' : [
      { 'title' : 'Interactive Bingo Board <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">HTML</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">JavaScript</a>',
        'study' : '<p><u>Project</u>: Personal</p><p><u>Objective</u>:  After seeing an image of "Conference Call Bingo" going around on the internet I decided to code it for fun!</p><p><u>Process</u>:  Created an array of entries for the Bingo boxes that are then randomized each time the table is loaded. Made each box clickable, which highlights the selection. </p><p><u>Result</u>:  Click below to view screencaps.</p>', 
       'images' : ['http://camhaviland.com/img/portfolio_examples/Bingo.png', 
                   'http://camhaviland.com/img/portfolio_examples/Bingo_2.png']}
    ],
    'snowball' : [
      {'title' : 'Snowball Debt Repayment Calculator <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">HTML</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">JavaScript</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">Python</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">jQuery</a>',
       'study' : '<p><u>Project</u>: Personal</p><p><u>Objective</u>: To create a web app for my wife and I to use to determine our monthly credit card payments using the &#34;snowball&#34; repayment method.</p><p><u>Process</u>: This payment method involves putting as much as you can toward your lowest balance, while paying the minimums on off of your other debts. Once the lowest balance is paid off, you then add that payment amount PLUS the minimum payment toward the next lowest balance. Your monthly payments remain the same overall, but the amount you are putting toward a single balance grows as you minimize your debt.</p><p>I have created a simple JavaScript prototype to test the equation and functionality. Next I plan on porting to a python web app that will allow us to enter credit cards balances and APRs into a database. Once that is set up I will factor in the interest accumulation in order to get a more accurate monthly balance and payment schedule.</p><p><u>Result</u>:  View screencap below.</p>', 
       'images' : ['http://camhaviland.com/img/portfolio_examples/snowball.png']}
    ],
    'sentiments' : [
      { 'title' : 'Twitter Analyzer <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">HTML</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">Python</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">Twitter API</a>',
        'study' : '<p><u>Project</u>: Harvard CS50: Intro to Computer Science</p><p><u>Objective</u>: Use Twitter’s API to pull and analyze user data.</p><p><u>Process</u>: Created a web app that will analyze the words in a user’s tweets and decide how positive, negative, or neutral their tweets are. Used Twitter’s API to get the user’s most recent tweets. Utilized a tokenizer to split a person\'s tweets into words, then compare those words to two different dictionaries; one positive, one negative. Implemented a count of how many positive or negative words were used, which was then then graphed out onto the webpage for viewing.</p><p><u>Result</u>:  Click below to view screencaps.</p>', 
       'images' : ['http://camhaviland.com/img/portfolio_examples/sentiments_1.png', 
                   'http://camhaviland.com/img/portfolio_examples/sentiments_2.png', 
                   'http://camhaviland.com/img/portfolio_examples/sentiments_3.png']}
    ],
    'mashup' : [
      {'title' : 'Google Maps Mashup <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">HTML</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">JavaScript</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">jQuery</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">Python</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">SQL</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">Google Maps API</a>',
       'study' : '<p><u>Project</u>: Harvard CS50: Intro to Computer Science</p><p><u>Objective</u>: Use the Google Maps API and mash it up with a Google News RSS feed. </p><p><u>Process</u>: Utilized Flask and Jinja to dynamically create a web app. Used jQuery to add and remove the Google Maps markers, accessed JSON objects from the News RSS feed to build an article list when you click on a map marker. Also worked with a database filled with locations to use while searching to aid the Typeahead repository which we forked from Github. I thought this added piece was especially helpful for searching as it autocompletes the search bar based on what you\'re typing.</p><p><u>Result</u>:  Click below to view screencaps.</p>', 
       'images' : ['http://camhaviland.com/img/portfolio_examples/mashup_1.png', 
                   'http://camhaviland.com/img/portfolio_examples/mashup_2.png', 
                   'http://camhaviland.com/img/portfolio_examples/mashup_3.png',
                   'http://camhaviland.com/img/portfolio_examples/mashup_4.png']}
    ],
    'sigConsole' : [
      { 'title' : 'FTP Console App <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">C#</a>',
        'study' : '<p><u>Project</u>: Sigmund Software</p><p><u>Objective</u>: Automate file transfers for client software updates.</p><p><u>Process</u>: One of my responsibilities at Sigmund Software is performing regular software updates for our non-hosted clients. Downloading new files every time was becoming tedious so I wrote a C# console app using the FluentFTP client package to automate the process. The challenge I faced was downloading the entire contents of the directory (including subdirectories) securely. To solve this issue I implemented a recursive function that will create the directories if they don\'t exist, then enter that directory and repeat, otherwise just download the files.</p>', 
       'images' : ['http://camhaviland.com/img/portfolio_examples/sigmund_logo_thumb.png']}
    ],
    'sigIp' : [
      { 'title' : 'Backend IP Restriction <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">C#</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">SQL</a> <a href="#" role="button" class="btn btn-sm btn-secondary disabled" aria-disabled="true">MVC</a>',
        'study' : '<p><u>Project</u>: Sigmund Software</p><p><u>Objective</u>:  Create IP restrictions that deter users from accessing patient data outside of the facility.</p><p><u>Process</u>: Utilizing my networking background I was assigned to create a new feature to Sigmund’s web version, Aura. I used C# to create a backend IP restriction which allows some of our clients to regulate where their users log into the software in order to comply with HIPAA regulations.</p>', 
       'images' : ['http://camhaviland.com/img/portfolio_examples/sigmund_logo_thumb.png']}
    ]
  };
  
  // Build the modal with carousel when you click on an image
  $('.overlay').on('click', function(){
    $('#myModal').on('show.bs.modal', function(event){
      var ex = $(event.relatedTarget);
      var name = ex.data('name');
      
      var modal = $(this);
      
      // Fill the modals carousel with images once Modal is shown
      var images = examples[name][0]['images'];
      
      $('#myModal').on('shown.bs.modal', function(event){
        // Build Images for carousel inner from object
        var html = '';
        for (var i = 0 ; i < images.length ; i++) {
          html += '<div class="carousel-item"><img class="img-fluid mx-auto" src="'+images[i]+'"></div>';
        }
        $('.carousel-inner').html(html); // Slap it into the DOM
        $('.carousel-item').first().addClass('active'); // Set the first image as active
        $('.modal-title').html(examples[name][0]['title']);
        $('#study-text').html(examples[name][0]['study']);
      });
      
      
    });
	
	// Once modal is closed clear out the old images
	$('#myModal').on('hidden.bs.modal', function(event){
		$('.modal-title').empty();
    $('#study-text').empty();
    $('.carousel-inner').empty();
	}); //END myModal on hidden
	
  }); //END image click event
  
}); //END document.ready function`