import {render} from "./template";

let _target = '.locator-banner';
let _label = 'label';
let _options = 'options';
let _input = 'input';

let _data = {
    triangle: 3,
    square: 4,
    pentagon: 5
}
const _template = `
    <div class="shape-message">
        <div>A triangle has {{triangle}} sides</div>
        <div>A square has {{square}} sides</div>
        <div>A pentagon has {{pentagon}} sides</div>
    </div>
`;

export let init = (data = _data) => {
    let _html = render(_template, data);
    document.getElementById("shape-message").innerHTML = _html;
};

