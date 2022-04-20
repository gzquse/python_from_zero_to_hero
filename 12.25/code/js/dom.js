
/*================DOM==================*/

//getElementById
document.getElementsByTagName
document.getElementsByClassName
document.getElementsByTagName

var pageHeader = document.getElementById('page-header');
var pageHeader = document.querySelector('#header');
var buttons = document.querySelectorAll(.btn);


var handleClick = function (event) {
    // do something!
};

var button = document.querySelector('#big-button');
button.addEventListener('click', handleClick);

//IE9
button.attachEvent('onclick', handleClick);


var elems = document.getElementsByTagName( 'a' );

for ( var i = 0; i < elems.length; i++ ) {

  elems[ i ].addEventListener( 'click', function(e){
    e.preventDefault();
    alert( 'I am link #' + i );
  }, 'false' );
}


var elems = document.getElementsByTagName( 'a' );

for ( var i = 0; i < elems.length; i++ ) {

  (function( lockedInIndex ){
    elems[ i ].addEventListener( 'click', function(e){
      e.preventDefault();
      alert( 'I am link #' + lockedInIndex );
    }, 'false' );
  })( i );

}

var div = document.createElement('div');
div.textContent = "Sup, y'all?";
div.setAttribute('class', 'note');
document.body.appendChild(div);

var span = document.createElement('span');
span.textContent = "Hello!";
div.appendChild(span);


var span = document.createElement('span');
if (span.textContent) {
    span.textContent = "Hello!";
} else if (span.innerText) {
    span.innerText = "Hello!";
}

div.parentNode.removeChild(div);


var div = $('<div/>').text("Sup, y'all?").appendTo(document.body);
$('<span/>').text('Hello!').appendTo(div);
//get request
var req = new XMLHttpRequest();
req.onload = function (event) { . . . };
req.open('get', 'some-file.txt', true);
req.send()


//canvas
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

<canvas></canvas>

<script>
    var canvas = document.querySelector('canvas'),
        ctx = canvas.getContext('2d');
    ctx.fillRect(10, 10, 10, 10);
</script>