function calcularPagoMensual(montoPrestamo, tasaInteresMensual, numCuotas) {
    const denominador = Math.pow(1 + tasaInteresMensual, numCuotas) - 1;
    return (montoPrestamo * tasaInteresMensual * Math.pow(1 + tasaInteresMensual, numCuotas)) / denominador;
}

function simularCredito() {
    const montoPrestamo = parseFloat(document.getElementById('monto').value);
    const tasaInteresAnual = parseFloat(document.getElementById('tasa').value);
    const numCuotas = parseInt(document.getElementById('cuotas').value);

    const tasaInteresMensual = tasaInteresAnual / 100 / 12;
    const pagoMensual = calcularPagoMensual(montoPrestamo, tasaInteresMensual, numCuotas);

    document.getElementById('montoRes').textContent = `Monto del préstamo: $${montoPrestamo.toFixed(2)}`;
    document.getElementById('tasaRes').textContent = `Tasa de interés anual: ${tasaInteresAnual.toFixed(2)}%`;
    document.getElementById('cuotasRes').textContent = `Número de cuotas mensuales: ${numCuotas}`;
    document.getElementById('pagoRes').textContent = `Pago mensual estimado: $${pagoMensual.toFixed(2)}`;

    document.getElementById('resultado').classList.remove('hidden');
}
