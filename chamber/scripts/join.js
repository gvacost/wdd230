const ans = document.querySelector('#but');
const msg = document.querySelector('#mssg')

// ans.addEventListener('hover', displayMsg());

function showmsg(message) {
    var mssgElement = document.getElementById("mssg");
    mssgElement.textContent = message;
    mssgElement.style.display = "block";
}

function hideMessage() {
    document.getElementById("mssg").style.display = "none";
}