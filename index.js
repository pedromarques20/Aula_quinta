document.getElementById('botao')
.addEventListener('click', function(){
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function(response){
        return response.json()
    }).then(function(response){
        console.log(response)
    })
});