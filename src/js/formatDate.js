function formatDate(inputDate) {
    // Convert inputDate into a Date object
    let date = new Date(inputDate);
  
    // Create an array of month names
    let monthNames = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
  
    // Get the day, month and year from the Date object
    let day = date.getDate();
    let month = monthNames[date.getMonth()];
    let year = date.getFullYear();
  
    // Construct and return the new date format
    return month + " " + day + ", " + year;
  }