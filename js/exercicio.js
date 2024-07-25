function pagarBoleto (b,v,p){
    //entradas
    var boleto=parseFloat (b);
    var vencimento=v;
    var pagamento=p;
    //saída
    var total=0.0;
    //processamento
    if(pagamento<vencimento){
        total=boleto-(boleto*0.12)
    }

    else if(pagamento==vencimento){
        total=boleto;

    }

    else{
        total=boleto+(boleto*0.18)
    }

    document.getElementById('txtPagamento').value=total;
}  

function mostrarDia(d){
    var dia=parseInt(d);
    var resp;
    var pintar;

    if(dia==1){
        resp="DOMINGO";
        pintar= "green";
    }

    else if(dia==2){
        resp="SEGUNDA";
        pintar= "pink";
    }

    else if(dia==3){
        resp="TERÇA";
        pintar= "blue";
    }

    else if(dia==4){
        resp="QUARTA";
        pintar= "red";
    }

    else if(dia==5){
        resp="QUINTA";
        pintar= "orange";
    }

    else if(dia==6){
        resp="SEXTA";
        pintar= "purple";
    }

    else if(dia==7){
        resp="SÁBADO";
        pintar= "yellow";
    }


    else {
        resp="DIA INVÁLIDO";
    }

    document.getElementById('txtSemana').value=resp;
    document.getElementById('cor1').style.backgroundColor=pintar;

}

function mostrarDia2 (x){
    var dia=parseInt(x);
    var resp;

    switch (dia){
        case 1:
            resp="Domingo";
            break;
            case 2:
                resp="Segunda";
                break;   
                case 3:
                    resp="Terça";
                    break;
                    case 4:
                        resp="Quarta";
                        break;
                        case 5:
                            resp="Quinta";
                            break;
                            case 6:
                                resp="Sexta";
                                break;
                                case 7:
                                    resp="Sábado";
                                    break;
        default:
            resp= "DIA INVÁLIDO";
            break;    
            
    }

    document.getElementById('txtSemana2').value=resp;


}