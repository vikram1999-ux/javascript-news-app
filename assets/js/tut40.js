
console.log('this is only for just trying');

// initialize the news parameters
let source = 'the-times-of-india';
let apikey = '1a841442b1744f0999d19e1ba9dfc54f';


// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apikey}`, true);

// what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHTML = "";
        articles.forEach(function (element, index) {
            // console.log(element, index);
            let news = `
<div class="card">
    <div class="card-header" id="heading${index}">
        <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"> <b>Breaking News ${index + 1} :</b>
                ${element["title"]}
        </button>
        </h2>
    </div>

    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
        data-parent="#newsAccordion">
        <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank"> Read more here </a>
           
    </div>
    </div>
</div>`;
            newsHTML += news;

        });
        newsAccordion.innerHTML = newsHTML;
    }
    else {
        console.log("some error occured");
    }
}

xhr.send();




