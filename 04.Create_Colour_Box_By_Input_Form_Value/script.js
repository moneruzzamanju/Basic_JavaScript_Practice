function createDiv(height, width, color)
{
    var div = document.createElement('div');

    div.style.height = height+'px';
    div.style.width = width+'px';
    div.style.backgroundColor = color;

    var containerDiv = document.getElementById('container');
    containerDiv.append(div);
}

var btn = document.getElementById('btn');
btn.onclick = function(){
    var height = document.getElementById('height').value;
    var width = document.getElementById('width').value;
    var backgroundColor = document.getElementById('backgroundColor').value;

    createDiv(height, width, backgroundColor);
}
