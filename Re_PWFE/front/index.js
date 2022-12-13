var chamada = "http://localhost:3000/read"

var cha = [];


function listar(){
    var tabela = document.querySelector('.tabela');
    tabela.classList.remove('model')

    fetch(chamada)
    .then(res =>{return res.json()})
    .then((chamar) =>{
        chamar.forEach((c)=>{
            var corpo = document.querySelector('.corpinho').cloneNode(true);
            corpo.classList.remove('model')

                corpo.querySelector('#a').innerHTML = c.id;
                corpo.querySelector('#b').innerHTML = c.tipo;
                corpo.querySelector('#c').innerHTML = c.severidade;
                corpo.querySelector('#d').innerHTML = c.descricao;
                corpo.querySelector('#e').innerHTML = c.data;
                corpo.querySelector('#f').innerHTML = c.hora;
                corpo.querySelector('#g').innerHTML = c.hora_inicio;
                corpo.querySelector('#h').innerHTML = c.hora_fim;
                corpo.querySelector('#i').innerHTML = c.destino;
                document.querySelector('tbody').appendChild(corpo);

        })
    })
}

