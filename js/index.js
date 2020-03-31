// creating shortcut for printing
const p = console.log;

// get the references to interactive HTML elements
const ctrlBtns = document.querySelectorAll('.controls button');
const cntnr = document.querySelector('.container');
let btnsArray = [
    ctrlBtns[0],
    ctrlBtns[1],
    ctrlBtns[2]
];

// create array that will store the data
let pages = [
    {
        heading: "Federal Funds",
        bodyText: "Lower income communities are already being supported by the goverments by providing funds. They are investing in production of renewable energy sources to make the costs reasonable and affordable to majority of the people, thereby increasing the public welfare. Programs like 'Low Income Home Energy Assisstance Program (LIHEAP)', 'Weatherization Assisstance Program (WAP)' are some examples. ",
        thumb: "img/funds.jpg",
	alt: "funds"
    },
    {
        heading: "Community Solar",
        bodyText: "In community solar project, multiple households share the energy provided by few solar panels. It would power the water, heat and electricity of each house and the the community would split the lower energy costs.",
        thumb: "img/sun.jpg",
	alt: "sun"
    },
    {
        heading: "Declining costs in Wind Power",
        bodyText: "The costs of wind power has been declining since the 1980s. As the costs decline, there is a need to invest more. The communities have come forward to build small wind farms to power local businesses. These communities can actually work towards a bright future by operating off small wind farms.",
        thumb: "img/windmill.jpg",
	alt: "windmill"
    }
];
// create function that handles click-event
function clickBtn(ev) {

    // Brightspsce Ref: Week 6
    let clickedButton = ev.target;

    // MDN Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    let index = btnsArray.indexOf(clickedButton);
    p(index);

    // MDN Ref: https://developer.mozilla.org/en-US/docs/Web/API/Element
    p(clickedButton.id);
    // handle moving id-active to the currently clicked button 

    // remove currently present id="active"
    for (let i = 0; i < ctrlBtns.length; i++) {
        // claiming that current element in the loop containe attribute
        if (ctrlBtns[i].id) {
            // MDN ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
            ctrlBtns[i].removeAttribute('id');
        }
    }

    // assign id="active" to the currently clicked button
    clickedButton.id = 'active';

    // load the corresponding data into <div class="container"></div>
    cntnr.innerHTML = `
        <h2>${pages[index].heading}</h2>
	<img src="${pages[index].thumb}" alt="${pages[index].alt}">
        <p>${pages[index].bodyText}</p>
    `;
}
// register your buttons for click event
for (let i = 0; i < ctrlBtns.length; i++) {
    ctrlBtns[i].addEventListener('click', clickBtn);
}

ctrlBtns[0].setAttribute("id", "active");
cntnr.innerHTML = `
        <h2>${pages[0].heading}</h2>
	<img src="${pages[0].thumb}" alt="${pages[0].alt}">
        <p>${pages[0].bodyText}</p>
    `;
