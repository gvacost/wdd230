Date();
let lastM = new Date(document.lastModified).toLocaleDateString('en-US');
document.getElementById('lastModified').innerHTML = 'Last Modification:'+ lastM; 
