var _regex = /{{[\w\s:\|\.]+}}/g;
    
let render = function(html, data){
    var name;
    var matches = html.match(_regex);
    
    for (var i = 0; i < matches.length; i++) {
        name = matches[i].replace("{{", "").replace("}}", "");
        if (data[name]) {
            html = html.replace(matches[i], data[name]);
        } else {
            html = html.replace(matches[i], "");
        }
    }
    return html;
};

let _data = {
    triangle: 3,
    square: 4,
    pentagon: 5
};
const _template = `
    <div class="shape-message">
        <div>A triangle has {{triangle}} sides</div>
        <div>A square has {{square}} sides</div>
        <div>A pentagon has {{pentagon}} sides</div>
    </div>
`;

let init = (data = _data) => {
    let _html = render(_template, data);
    document.getElementById("shape-message").innerHTML = _html;
};

let color1 = "red";
let color2 = "blue";
let color3 = "purple";

let init$1 = function() {
    document.getElementById('color-message').innerHTML = `${color1} paint mixed with ${color2} paint makes ${color3} paint`;
};

init();
init$1();
