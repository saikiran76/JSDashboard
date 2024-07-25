export const formatDateTime = (dateString) => {
    // Parse the date string into a Date object
    const date = new Date(dateString);
  
    // Format the date to "Month, day, year"
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const formattedDate = dateFormatter.format(date);
  
    // Format the time to "hh:mm AM/PM"
    const timeFormatter = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    const formattedTime = timeFormatter.format(date);
  
    return `${formattedDate}
     ${formattedTime}`;
};
  

  