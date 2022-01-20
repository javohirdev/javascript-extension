const generateImagesNum = 1;

const renderItem = () => {
    fetch(`https://source.unsplash.com/1600x900/?beach`)
        .then((response) => {
            let item = document.createElement('div');
            item.classList.add('item');
            item.innerHTML = `<img src="${response.url}" class="randomImage" alt="image">`
            document.body.appendChild(item);
        })
}

for(let i=0; i < generateImagesNum; i++){
    renderItem();
}