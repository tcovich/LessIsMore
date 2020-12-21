
var myImages =["https://images.unsplash.com/photo-1551632811-561732d1e306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8Mnx8aGlraW5nfHwwfHx8&ixlib=rb-1.2.1&q=80&w=1080", 
              "https://media.istockphoto.com/photos/fishing-concepts-picture-id664304800?k=6&m=664304800&s=612x612&w=0&h=ROFo47Oot_zqg8SOLgj_3hZ0a8RpsfGfQhdC3zYqUeA=",
              "https://upload.wikimedia.org/wikipedia/commons/8/84/Ski_Famille_-_Family_Ski_Holidays.jpg",
			  "https://images.squarespace-cdn.com/content/v1/54ed5347e4b0baa5b2214761/1467164226215-5WJ0JQRLU8XH5U0N9GI2/ke17ZwdGBToddI8pDm48kMQs2m2ijENlnRCI35T13wF7gQa3H78H3Y0txjaiv_0fylIs6t39aXnuxGl3mUYocNqYdKxYyTpTX9WKW5vOfavlv90AApd9Yk_mbh9SCYVMOqpeNLcJ80NK65_fV7S1UVmT8K9IUdWffsZu-rrWndjGakMQH4LVOi2NIUbDXybeYFqkiPy4SUk90KK9afo6Pg/jonathajunge-163_0880.jpg?format=2500w",
			  "https://images.squarespace-cdn.com/content/v1/54af316ee4b02e23210d9051/1585083084731-0M6FMX7XNLW0MCFV5ITI/ke17ZwdGBToddI8pDm48kEA-1ir-L1a-3goS75Bhw9l7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZOrbj_nYcWtwdMdKNRfYP2xOBGuH2aHLdfD-ABQQVYiByJpHluJsqJoN79A0VawVw/IMG_4447.jpg"];


var captionImages =["Hiking!","Fishing!", "Skiing!", "Mountain Biking!", "Kayaking!"]; 

var index = 0; 

var nextButton = document.getElementById("next"); 

var previousButton = document.getElementById("previous");  

//
// Event handler for next button
// Called by the EventListener on the click event of the next button
//
function next() {

  if (myImages.length == index+1) {  // Are we at the end of our image array?
     index = 0;                      // If so, wrap around to the beginning of the array
  } else {
     index++;                        // else, move ahead
  }
  
  updateImage();                     // We have a new index, so update the image
  
} 

//
// Event handler for back button
// Called by the EventListener on the click event of the previous button
//
function back() {

if (index==0){
	index = 4;
}

else { 
	index--; }

updateImage();  
 
}

//
// Function to update the image with the current index value.
// This functiob updates the src, alt and text content corresponding to the
// current index value by looking up the elements in the image and
// captureImages array
//
function updateImage() {

   document.getElementById("slideshow").src = myImages[index];
   document.getElementById("slideshow").alt= captionImages[index];
   document.getElementById("caption").textContent = captionImages[index];
   
}

//
// Function to run an automatic image change.
// This is called on a timer every 2 secs
//
function autoSlide() {

  if (document.getElementById("auto").checked) {
     next(); 
  }   
  
}

setInterval(autoSlide, 2000); // Timer to run every 2 secs: Function to run is autoSlide()
                             // i.e. Run autoSlide() every 2 secs


nextButton.addEventListener("click", next, false); // Add an event listener for the next button
                                                   // First argument: click indicates the click event
                                                   // Second argument: next indicates the function to call when button is clicked
                                                   // Third argument: false indicates bubbling up of events

previousButton.addEventListener("click", back, false); // Add an event listener for the previous button
                                                       // First argument: click indicates the click event
                                                       // Second argument: next indicates the function to call when button is clicked
                                                       // Third argument: false indicates bubbling up of events
