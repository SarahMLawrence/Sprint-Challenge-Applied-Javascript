// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

//const data = [];

function Header(head, dates,  temps) {

   
    const header = document.createElement('div');
    header.classList.add('header');

    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = dates;

    const h1 = document.createElement('h1');
    h1.textContent = head;

    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = temps;


    header.appendChild(date);
    header.appendChild(h1);
    header.appendChild(temp);

    console.log(header);


    const newHeader = document.querySelector('.header-container');
    newHeader.appendChild(header);
}

Header('Lambda Time', 'February 21, 2020', '101');

  

