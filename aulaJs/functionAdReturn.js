// Return está retornando um valor e console.log() apenas está exibindo o que foi pedido

    function falaFrase(comecoFrase){
        function falaResto(restoFrase){
            return comecoFrase + ' ' + restoFrase;
        }
        return falaResto;
    }

    const olaMundo = falaFrase('Olá,');

    console.log(olaMundo('mundo!'));

    function addMultiplier(multiplier){
        function xPlicador(x){
            return multiplier * x;
        }
        return xPlicador;
    }

    const duplicador = addMultiplier(2);
    const triplica = addMultiplier(3);
    const quadruplica = addMultiplier(4)
    console.log(duplicador(6));
    console.log(triplica(6));
    console.log(quadruplica(6));



