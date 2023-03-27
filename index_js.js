function contar(){
    const txtini = document.getElementById('txtini');
    let inicio  = Number(txtini.value);

    const txtfim = document.getElementById('txtfim');
    let fim = Number(txtfim.value);

    const txtpasso = document.getElementById('txtpass');
    let passos = Number(txtpasso.value);

    const resultado = document.getElementById('resultado');

    if(txtini.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0){

        resultado.innerHTML = 'Dados incorretos, impossível contar.'

    }else{

        resultado.innerHTML = 'contando: <br>';

        if(passos <= 0){
            alert('número de passos não pode ser zero, vamos considerar como sendo 1');
            passos = 1;
        }
        
        
        if (inicio < fim){
            //contagem crescente
            for(let i = inicio; i <= fim; i += passos){
                resultado.innerHTML += ` ${i} \u{1F449} `
            }
        } else{
            //contagem regressiva
            for( let i = inicio; i >= fim; i -= passos){
                resultado.innerHTML += `${i} \u{1F449}`
            }
        }
        
        resultado.innerHTML += ` \u{1F3C1}`
    }

    
}

