function createDiv(height, width, color)
{
    var div = document.createElement('div');

    div.style.height = height+'px';
    div.style.width = width+'px';
    div.style.backgroundColor = color;

    var containerDiv = document.getElementById('container');
    containerDiv.append(div);
}

createDiv(50, 100, 'red');
document.write('<br/>================<br/>');

createDiv(100, 200, 'green');
document.write('<br/>================<br/>');

createDiv(200, 300, 'blue');
document.write('<br/>================<br/>');