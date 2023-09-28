function carregarPokemon(){

    let nome = document.getElementById('nome-pokemon').value
    
    fetch('https://pokeapi.co/api/v2/pokemon/'+nome)
    .then(function(response){
        return response.json()
    }).then(function(response){
        console.log(response)
        console.log(response.sprites.front_default)

        let url = response.sprites.front_default
        document.getElementById('img-card').setAttribute('src', url)

        let html = ''
        for (const item of response.abilities) {
            console.log(item.ability.name)
            html += '<li>'+ item.ability.name +'</li>'
        }
        document.getElementById('lista').innerHTML = html

    })
}

document.getElementById('botao')
.addEventListener('click', carregarPokemon )

document.getElementById('nome-pokemon')
.addEventListener('keypress', function(event){
    if (event.key === "Enter") {
        carregarPokemon()
    }
})