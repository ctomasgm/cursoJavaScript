const ts = '1'
const apyKey = 'b31d2910c247b1ac801419d534c6c74e'
const hash = '8a181f07de9f02929051ceafcdfab96a'
const maxElements = 1500 
let offset = 0

const loadPage = () => {
  const url = `http://gateway.marvel.com/v1/public/characters?limit=50&offset=${offset}&ts=${ts}&apikey=${apyKey}&hash=${hash}`
  fetch(url).then(response => response.json())
    .then(characters => {
      const lista = characters.data.results.map(character =>
        `<a href="detalle.html?id=${character.id}&ts=${ts}&apikey=${apyKey}&hash=${hash}" class="list-group-item list-group-item-action" style="border-radius: 10px; margin:5px; background-color: rgba(255,255,255,0.99)">
        <h6 style="margin-left:5px" >${character.name} - ${character.id}</h6>
        <p style="margin-left:10px">${character.description || "No description"}</p> 
        </a>`).join("")
      const listaHtml = document.getElementById('lista');
      listaHtml.innerHTML = lista;
  })
}

loadPage()

const increaseOffset = () => {
  if (offset<maxElements-50)
    offset = offset + 50
  else 
    offset = 0
  console.log(offset)
  loadPage()
}

const decreaseOffset = () => {
  if (offset>50)
    offset = offset - 50
  else
    offset = maxElements - 50
  console.log(offset)
  loadPage()
}
