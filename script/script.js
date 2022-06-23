let Segundos = 0;
let Milisegundos = 0;
let Minutos = 0;

let AppendMili = document.getElementById('mili');
let AppendMinutos = document.getElementById('minutes');
let AppendSegundos = document.getElementById('seconds');

const ButtonStart = document.getElementById('ButtonStart');
const ButtonStop = document.getElementById('ButtonStop');
const ButtonRestart = document.getElementById('ButtonRestart');

let Interval;

function StartTimer()
{
    Milisegundos++;

    if(Milisegundos < 9)
    {
        AppendMili.innerHTML = "0" + Milisegundos;
    } else if (Milisegundos > 9)
    {
        AppendMili.innerHTML = Milisegundos;
    }

    if(Milisegundos > 99)
    {
        Segundos++;
        AppendSegundos.innerHTML = "0" + Segundos;


        Milisegundos = 0;
        AppendMili.innerHTML = "0" + Milisegundos;
    }

    if(Segundos > 9)
    {
        AppendSegundos.innerHTML = Segundos;
    }

    if(Segundos == 60)
    {
        Minutos++;
        AppendMinutos.innerHTML = "0" + Minutos;

        Segundos = 0;
        AppendSegundos.innerHTML = "0" + Segundos;
    }

    if(Minutos < 9)
    {
        AppendMinutos.innerHTML = "0" + Minutos;
    } else if (Minutos > 9)
    {
        AppendMinutos.innerHTML = Minutos;
    }

    if(Minutos == 60)
    {
        Milisegundos = "00";
        Segundos = "00";
        Minutos = "00";

        AppendMili.innerHTML = Milisegundos;
        AppendMinutos.innerHTML = Minutos;
        AppendSegundos.innerHTML = Segundos;
    }
}


ButtonStart.onclick = function ()
{
    Interval = setInterval(StartTimer);
}

ButtonStop.onclick = function ()
{
    clearInterval(Interval);
}

ButtonRestart.onclick = function ()
{
    clearInterval(Interval);

    Milisegundos = "00";
    Segundos = "00";
    Minutos = "00";

    AppendMili.innerHTML = Milisegundos;
    AppendSegundos.innerHTML = Segundos;
    AppendMinutos.innerHTML = Minutos;
}