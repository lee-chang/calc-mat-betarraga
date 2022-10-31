var barchart = document.getElementById("bar-chart").getContext("2d");
var pastelchart = document.getElementById("pastel-chart").getContext("2d");

//canvas Flowchart

var canvas= document.getElementById("flowchart")
canvas.width = 500;
canvas.height = 400;
var ctx = canvas.getContext("2d");
dibujarEnElCanvas(ctx);

function dibujarEnElCanvas (ctx){
    var img = new Image();
    img.src = 'img/flowchart.png';
    img.onload = function(){
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
}
setTimeout(function() {
    inicializarCanvas();
    addEventListener("resize", inicializarCanvas);
    }, 15);

var buttonF = document.getElementById("button")
buttonF.addEventListener('click', function(){
    var F = parseFloat(document.getElementById("input").value);
    calcDatos(F);
})


function calcDatos(F) {

    A = (55*F).toFixed(2);
    B = (164.85*F).toFixed(2);
    C = (142.86*F).toFixed(2);
    D = (76.94*F).toFixed(2);
    E = (141.86*F).toFixed(2);
    G = (45.43*F).toFixed(2);
    H = (31.51*F).toFixed(2);
    I = (45.43*F).toFixed(2);
    Qs = (241.124*F).toFixed(2);
    Mac = (778.7*F).toFixed(2);
    FlujoAire = (17*F).toFixed(2);
    Wex = (23.44*F).toFixed(2);
    Wde = (86.1*F).toFixed(2);
    Wt = (109.54*F).toFixed(2);


    document.getElementById("value-A").innerHTML = A + " kg/h";
    document.getElementById("td-A").innerHTML = A + " kg/h"; 
    document.getElementById("value-B").innerHTML = B+ " kg/h";
    document.getElementById("td-B").innerHTML = B+ " kg/h";
    document.getElementById("value-C").innerHTML = C+ " kg/h";
    document.getElementById("td-C").innerHTML = C+ " kg/h";
    document.getElementById("value-D").innerHTML = D+ " kg/h";
    document.getElementById("td-D").innerHTML = D+ " kg/h";
    document.getElementById("value-E").innerHTML = E+ " kg/h";
    document.getElementById("td-E").innerHTML = E + " kg/h";
    document.getElementById("td-F").innerHTML = F + " kg/h";
    document.getElementById("value-G").innerHTML = G+ " kg/h";
    document.getElementById("td-G").innerHTML = G+ " kg/h";
    document.getElementById("value-H").innerHTML = H+ " kg/h";
    document.getElementById("td-H").innerHTML = H+ " kg/h";
    document.getElementById("value-I").innerHTML = I+ " kg/h";
    document.getElementById("td-I").innerHTML = I+ " kg/h";
    document.getElementById("value-Qs").innerHTML = Qs + " kg/h";
    document.getElementById("value-Mac").innerHTML = Mac + " kg/h";
    document.getElementById("value-FlujoAire").innerHTML = FlujoAire + " kg/h";
    document.getElementById("value-Wex").innerHTML = Wex + " kg/h";
    document.getElementById("value-Wde").innerHTML = Wde + " kg/h";
    document.getElementById("value-Wt").innerHTML = Wt + " kg/h";


    //add data to array dataVapor and return it
    let dataVapor = new Array();
    dataVapor.push(Wex);
    dataVapor.push(Wde);
    dataVapor.push(Wt);
    updateBarChart(dataVapor);

    //Variables for pastel chart
    //sum of A + B
    totalPie = parseFloat(A) + parseFloat(B);
    pA = ((parseFloat(A)/totalPie)*100);
    pC = ((parseFloat(C)/totalPie)*100);

    let dataPie = new Array();
    dataPie.push(pA);
    dataPie.push(pC);

    updatePastelChart(dataPie);

    //updateFlowChart(a,b,c,d,e,f,g,h,i);
    var img = new Image();
    img.src = 'img/flowchart.png';
    img.onload = function(){
        ctx.drawImage(img, 0, 0,canvas.width, canvas.height);
    }

    //dibujar texto dentro del cuadrado
    ctx.clearRect(0, 0, 100000000, 100000000);
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.font = '12px sans-serif';
    ctx.fillText(A + " kg/h",160, 28);
    ctx.fillText(B + " kg/h",280, 28);
    ctx.fillText(C + " kg/h",350, 107);
    ctx.fillText(D + " kg/h",185, 219);
    ctx.fillText(E + " kg/h",410, 275);
    ctx.fillText(F + " kg/h",396, 320);
    ctx.fillText(G + " kg/h",95, 270);
    ctx.fillText(H + " kg/h",95, 132);
    ctx.fillText(I + " kg/h",156, 320);
}



// Single Bar Chart
//DATA

const databar = {
    labels: ["Uno", "Dos", "Tres"],
    datasets: [{
        label:"indefinido",
        data: [ 0,0,0],
        backgroundColor: [
            "rgba(0, 156, 255, .7)",
            "rgba(0, 156, 255, .6)",
            "rgba(0, 156, 255, .5)"
        ],
            
    }]
}

const datapastel= {
    labels: ["indefinido", "indefinido"],
    datasets: [{
        data: [0, 0],
        backgroundColor: [
            "rgba(0, 156, 255, .7)",
            "rgba(0, 156, 255, .3)"
        ]
        
    }]
}


//CONFIG
const configbar = {
    type: 'bar',
    data: databar,
    options: {
        scales:{
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
    }
}

const configpastel = {
    type: 'pie',
    data: datapastel,
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
}

//RENDEER

const myChart1 = new Chart(
    document.getElementById('bar-chart'),
    configbar
)
const myChart2 = new Chart(
    document.getElementById('pastel-chart'),
    configpastel
)



function updateBarChart (arr) {
    myChart1.data.labels = ["Extracción", "Deshidratación", "Total"];
    myChart1.data.datasets = [{
        label: 'Vapor',
        data: arr,
        backgroundColor: [ 
            "rgba(0, 156, 255, .3)",
            "rgba(0, 156, 255, .6)",
            "rgba(0, 156, 255, .9)"]
    }];
    myChart1.update();
}

function updatePastelChart (arr) {

    myChart2.data.labels = ["Materia Prima de Betarraga", "Solución Acuosa de Betarraga",];
    myChart2.data.datasets = [{
        data: arr,
        backgroundColor: [ 
            "rgba(0, 156, 255, .3)",
            "rgba(0, 156, 255, .9)"]
    }];
    myChart2.update();
}
