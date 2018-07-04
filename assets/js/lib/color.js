let color1 = "red";
let color2 = "blue";
let color3 = "purple";

export let init = function() {
    document.getElementById('color-message').innerHTML = `${color1} paint mixed with ${color2} paint makes ${color3} paint`;
};
