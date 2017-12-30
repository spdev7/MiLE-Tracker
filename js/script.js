$(document).one('pageinit',function(){
  //Add Handler
  $('#sumbitAdd').on('tap',addRun);

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
