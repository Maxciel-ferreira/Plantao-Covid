window.onload = function(){
    $("#cases").text(0);
    $("#deaths").text(0);
    $("#suspects").text(0);
    document.getElementById('uf').value='';
  }

const estado = document.querySelector("#uf")

const mostrarDados = (result) =>{
    for(const inputDados in result){
        
        
        if(document.querySelector("#"+inputDados)){
                            
            $("#cases").html((result.cases).toLocaleString('pt-BR'))
            $("#deaths").html((result.deaths).toLocaleString('pt-BR'))
            $("#suspects").html((result.suspects).toLocaleString('pt-BR'))
           
        }
    }
}

estado.addEventListener("blur", (e) => {

    let estadoPesquisa = estado.value.replace(" ","")
    const option = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${estadoPesquisa}`, option)
        .then(Response => {
            Response.json()
                .then(data => mostrarDados(data))
        })
        .catch(e => console.log('Deu Erro' + e, message))

})


