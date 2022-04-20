$('.btn').click(function () {
    // do something
});


<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

$('.note').css('background', 'red').height(100);

var currentHeight = $('.note').height(),
    currentColor = $('.note').css('color');

var $header = $('header'),
    $headerBoxes = $('.note', $header);

$.ajax({
    url: '/data.json',
    method: 'GET',
    success: function (data) {
        console.log(data);
    }
});

$.get('/data.json', function (data) {
    console.log(data);
});

$.get('/data.json', function (data) {
    console.log(data);
}).fail(function () {
    // Uh oh, something went wrong
});


$.post('/save', { username: 'tom' }, function (data) {
    console.log(data);
}).fail(function () {
    // Uh oh, something went wrong
});

$.ajax({
    url: '/save',
    method: 'POST',
    data: { username: 'tom' },
    success: function (data) {
        console.log(data);
    }),
    error: function () {
        // Uh oh, something went wrong
    }
});


var doSomething = function (event) { . . . };

window.addEventListener('DOMContentLoaded', doSomething);

$(window).ready(doSomething);
$(doSomething);

//no jquery
window.addEventListener('load', doSomething);        
//with jquery
$(window).load(doSomething);

//Type checking
$.isArray([1, 2, 3]);
$.isFunction(function () { });
$.isNumeric(10);

