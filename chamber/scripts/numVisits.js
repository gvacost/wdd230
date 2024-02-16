const today = new Date();
const lastVisit = localStorage.getItem('lastVisit');
const msToDay = 84600000;

if (lastVisit === null) {
  document.getElementById('dispMsg').textContent = 'Welcome! Let us know if you have any questions.';
} else {
  const lastVisit = new Date(lastVisit);
  
  const daysDifference = (currentDate - lastVisit)/msToDay;
    
  if (daysDifference === 0) {
    document.getElementById('dispMsg').textContent = 'Back so soon! Awesome!';
  } else {
    const message = (daysDifference === 1) ? 'day' : 'days';
    document.getElementById('dispMsg').textContent = `You last visited ${daysDifference} ${message} ago.`;
  }
}

localStorage.setItem('lastVisit', currentDate.toISOString());
