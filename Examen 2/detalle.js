const urlLocal = new URL(window.location.href);
const search_params = urlLocal.searchParams;
const id = search_params.get('id');
const ts = '1'
const apyKey = 'b31d2910c247b1ac801419d534c6c74e'
const hash = '8a181f07de9f02929051ceafcdfab96a'

const url = `http://gateway.marvel.com/v1/public/characters/${id}?&ts=${ts}&apikey=${apyKey}&hash=${hash}`
fetch(url).then(response => response.json())
    .then(info=> {
        console.log(info.data.results[0])
        info = info.data.results[0]
        document.getElementById('title').innerHTML = info.name;
        document.getElementById('id').innerHTML = `Id:${info.id}`;
        document.getElementById('body').innerHTML = info.description || 'No description'; 
        let comics = info.comics.items.map(comic =>
            `<div class="list-group-item">${comic.name}</div>`).join("")
        
        document.getElementById('comics').innerHTML = comics;

        document.getElementById('img').innerHTML = `<img src="${info.thumbnail.path}.${info.thumbnail.extension}" class="card-img-top" style="width: 300px; height: 300px;" >`

        console.log(info.name)
        console.log(info.id)
        console.log(info.description)
        console.log(info.comics)
    })
    .catch(err => console.error(err))


    