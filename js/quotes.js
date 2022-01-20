const text = document.getElementById("title");
const author = document.getElementById("author");

const getQuotes = async () => {
    let apiURL = "https://type.fit/api/quotes";
    const response = await fetch(apiURL);
    const allQuotes = await response.json();

    const indx = Math.floor(Math.random()*allQuotes.length);
    const quote = allQuotes[indx].text;
    const auth = allQuotes[indx].author;

    if(auth==null) {
        author = "Anonim";
    }

    title.innerHTML = quote;
    author.innerHTML = "("+auth+")";
}

getQuotes()