$(document).one('pageinit',function(){
  //display runs
  showruns();



  //Add Handler
  $('#sumbitAdd').on('tap',addRun);


  /*

   *Show all runs on HOMEPAGE
    */
    showRuns(){
      //get runs addRunObject
      var runs = getRunsObject();

      //Check if empty
         if(runs != '' && runs != null){
            for(var i = 0;i < runs.length;i++){
              ('#stats').append('<li class="ui-body-inherit ui-li-static"><strong>Date:</strong></li>');
            }
          }



}

   /*
    * Add a run
    */
    function addRun(){
      // Get form values
       var miles = $('#addMiles').val();
       var date = $('#addDate').val();

       //Create 'run'  object
       vaar run = {
         date: date,
         miles: parseFloat(miles)
       };

      var runs = getRunsObject();
      //Add run to runs Array
      runs.push(run);

      alert('Run Added');

      //Set stringified object to localStorage
      localstorage.setItem('runs', JSON.stringify(runs));

     //Redirect
     window.location.href="index.html";

     return false;

    }
    /*
     * Get the runsobject
     */
     function addRunObject(){
           //Set runs array
           var runs = new Array();
          // Get current runs from local storage
          var currentRuns = localStorage.getItem('runs');

          // Check localStorage
          if(currentRuns != null){
            //Set to runs
               var runs = JSON.parse(currentRuns);

          }

             // Return runs object
             return runs.sort(function(a,b){return new Date(b.date) - new Date(a.date)})
     }

});
