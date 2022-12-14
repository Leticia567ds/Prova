var chamada = "http://localhost:3000/read"
var create = ("http://localhost:3000/create")
var cad = document.querySelector('.editar');
var confirm = document.querySelector('//#endregionconfirm')


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
                corpo.innerHTML += `  <td><button onclick="remover(${c.id})" id="del"><img class="icon2" src="https://cdn-icons-png.flaticon.com/512/32/32178.png" alt="lixo"></button></td>`
        
                document.querySelector('tbody').appendChild(corpo);

        })
    })
}
var tipo = document.querySelector('#tipo')
var s = document.querySelector('#severidade')
var d = document.querySelector('#descricao')
var da = document.querySelector('#data')
var h = document.querySelector('#hora')
var hi = document.querySelector('#horain')
var hf = document.querySelector('#horaf')
var des = document.querySelector('#destino')



function AbrirModal(id){
    var alt = document.querySelector('.alterar')
    alt.classList.remove('model')
    fetch(chamada)
    .then(res =>{return res.json()})
    .then((chamar) =>{
        chamar.forEach((c)=>{
            tipo.value = c.tipo,
            s.value = c.severidade,
            d.value = c.descricao,
            da.value = c.data,
            h.value = c.hora,
            hi.value = c.hora_inicio,
            hf.value = c.hora_fim,
            des.value = c.destino
        
    alterar(id)
        })
    })
}

function alterar(id){
    var info = 	{
		"id": id,
		"tipo": tipo.value,
		"severidade": s.value,
		"descricao": d.value,
		"data": da.value,
		"hora": h.value,
		"hora_inicio": hi.value,
		"hora_fim": hf.value,
		"destino": des.value
	}
    console.log(info)
    fetch("http://localhost:3000/update",{
        "method":"PUT"
    })
    .then(resp =>{return resp.status})
    .then(data =>{
        if(data == 202){
            // data.remove();
            alert('alterado')
            window.location.reload()
        }else{
            alert('falha')
        }
        
    });
  }



  function remover(id){
    console.log(id)
    fetch("http://localhost:3000/delete/" + id,{
        "method":"DELETE"
    })
    .then(resp =>{return resp.status})
    .then(data =>{
        if(data == 202){
            // data.remove();
            alert('excluido')
            window.location.reload()
        }else{
            alert('falha')
        }
        
    });
  }

  function FecharModal() {
    cad.classList.add('model')
}

function cadastrar(){ 
    cad.classList.remove('model')



    let corpo = {
        "tipo": document.querySelector("#tipo").value,
        "severidade": document.querySelector("#severidade").value,
        "descricao": document.querySelector("#descricao").value,
        "destino": document.querySelector("#destino").value,
    }
    const options = {
        "method": 'POST',
        "headers": {"Content-Type": 'application/json' }
    };
       options.body = JSON.stringify(corpo);
   
    //Faz efetivamente a requisição ao back-end

    if (corpo.tipo != 0 && corpo.severidade != 0 && corpo.descricao != 0 && corpo.destino != 0 && corpo.horain != 0 && corpo.horaf)  {
        fetch(create, options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 201) {
                    alert('Oi:' + resp);
                    window.location.reload();
                }
            })
            .catch(err => alert(err));
    } else {
        alert('Bem-Vindo');
    }
}

