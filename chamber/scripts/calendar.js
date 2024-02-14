document.addEventListener('DOMContentLoaded', function () {
    var calendar = document.getElementById('calendar');

    function _calendar() {
        var currentDate = new Date();

        var year = currentDate.getFullYear();
        var month = currentDate.getMonth() + 1; 
        var day = currentDate.getDate();

        var _date =  (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day + '-'+ year ;

        calendar.textContent = 'Current Day: ' + _date;
    }

    _calendar();

    setInterval(_calendar, 24 * 60 * 60 * 1000);
});




