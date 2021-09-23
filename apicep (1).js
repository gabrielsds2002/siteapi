function buscaCep(url,body){
    let request = new XMLHttpRequest()
    let result  = ""
    request.open("POST", url,true)
    request.sendRequestHeader("Content-type","application/json")
    request.send(JSON.stringify(body))
    request.onload = function(){
        console.log(this.responseText)
       result = JSON.parse(this.responseText)
           if(this.status==200){

            montaHtmlSucesso(result);
        }else{
            montaHtmlErro(request);
        }
       }
      
    

    return request.responseText
   }

   function enviarCep(){
       let url ="https://apidecep.herokuapp.com/cep"
       let cep = document.getElementById("cep").value
       body = {
           "cep": cep
       } 
       buscaCep(url,body)  
   }
   function montaHtmlSucesso(result){
       let html = "<h2> Resultado encontrado:  </h2>";
        html += "<ul>";
        html += "<li><span style= 'fontWeight:bold'>CEP:</span> " + result.cep + "</li>"
        html += "<li><span style= 'fontWeight:bold'>CEP:</span> " + result.logradouro + "</li>"
        html += "<li><span style= 'fontWeight:bold'>CEP:</span> " + result.localidade + "</li>"
        html += "<li><span style= 'fontWeight:bold'>CEP:</span> " + result.bairro + "</li>"
        document.getElementById('resultado').innerHTML = html;
    }

    function montaHtmlErro(result){
        let html = "<h2> Resultado encontrado:  </h2>";
        console.log(result)
        html += "<ul>";
        html += "<li><span style= 'fontWeight:bold'>Erro 400: CEP inválido </span> " + result.erro + "</li>"
    }

   window.onload = function(){
       document.getElementById('frmCep').addEventListener('submit', function(event){
           event.preventDefault();
           enviarCep();
       });
   }

