"use strict";

var _regex = /{{[\w\s:\|\.]+}}/g;

var render = function render(html, data) {
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

var _data = {
    triangle: 3,
    square: 4,
    pentagon: 5
};
var _template = "\n    <div class=\"shape-message\">\n        <div>A triangle has {{triangle}} sides</div>\n        <div>A square has {{square}} sides</div>\n        <div>A pentagon has {{pentagon}} sides</div>\n    </div>\n";

var init = function init() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _data;

    var _html = render(_template, data);
    document.getElementById("shape-message").innerHTML = _html;
};

var color1 = "red";
var color2 = "blue";
var color3 = "purple";

var init$1 = function init$1() {
    document.getElementById('color-message').innerHTML = color1 + " paint mixed with " + color2 + " paint makes " + color3 + " paint";
};

init();
init$1();
