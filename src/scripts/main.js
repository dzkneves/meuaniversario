AOS.init();

const dataDoAniversario = new Date("Mar 19, 2026 13:00:00");
const timeStampAniversario = dataDoAniversario.getTime();

const contadorHoras = setInterval(function () {
    const dataAtual = new Date();
    const timeStampAtual = dataAtual.getTime();

    const distanciaAteOEvento = timeStampAniversario - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteAniversario = Math.floor(distanciaAteOEvento / (diaEmMs));
    const horasAteAniversario = Math.floor((distanciaAteOEvento % diaEmMs) / (horaEmMs));
    const minutosAteAniversario = Math.floor(distanciaAteOEvento % (horaEmMs) / (minutoEmMs));
    const segundosAteAniversario = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('dias').innerHTML = `${diasAteAniversario}`
    document.getElementById('horas').innerHTML = `${horasAteAniversario}`
    document.getElementById('minutos').innerHTML = `${minutosAteAniversario}`
    document.getElementById('segundos').innerHTML = `${segundosAteAniversario}`

    if (distanciaAteOEvento < 0 ) { 
        clearInterval(contadorHoras);
        document.getElementById('contador').innerHTML = `Evento expirado`
    }

}, 1000)
