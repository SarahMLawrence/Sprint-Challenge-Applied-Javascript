// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const entry = document.querySelector('.cards-container');
axios.get('https://lambda-times-backend.herokuapp.com/articles')

    .then(response => {

        const js = response.data.articles.javascript
        js.forEach(article => {
            entry.append(createCard(article))
        })
        const boots = response.data.articles.bootstrap

        boots.forEach(article => {

            entry.append(createCard(article))
        })

        const tech = response.data.articles.technology
        tech.forEach(article => {
            entry.append(createCard(article))
        })

        const jQuery = response.data.articles.jquery
        jQuery.forEach(article => {
            entry.append(createCard(article))
        })

        const njs = response.data.articles.node
        njs.forEach(article => {
            entry.append(createCard(article))
        })



    })

    .catch(err => {
        console.log(err)
    })

function createCard(data) {

    const card = document.createElement('div');
    card.classList.add('card');

    const head = document.createElement('div');
    head.classList.add('headline');
    head.textContent = data.headline;

    const author = document.createElement('div');
    author.classList.add('author');

    const img = document.createElement('img');
    img.classList.add('img-container');
    img.src = data.authorPhoto;


    const name = document.createElement('span');
    name.textContent = `Author's Name: ${data.authorName}`;




    card.appendChild(head);
    head.appendChild(author);
    author.appendChild(img);
    author.appendChild(name);

    return card;
}