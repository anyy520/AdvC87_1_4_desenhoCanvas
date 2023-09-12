// Primeiro, obteremos o elemento canvas com sua id e o armazenaremos em uma variável “canvas”,
// para que possamos manipular o canvas ao longo do código js.
canvas = document.getElementById("myCanvas");

// Depois, obteremos a referência do canvas com getContext("2d"). ● Esse será utilizado para desenhar
// objetos/formas no canvas.
// A variável ctx será utilizada como referência do canvas para desenhar.
ctx= canvas.getContext("2d");

// ajustaremos a variável color, e essa será utilizada para ajustar a cor que queremos aplicar ao nosso 
//círculo ou a outras formas.
color = "red"; 

// ctx.anything, ‘anything’ pode ser qualquer método utilizado no canvas.
// beginPath(): Esse inicia um caminho, ou reinicia o caminho atual para desenhar qualquer coisa. 
//Ele pede ao cavans para iniciar o desenho do(a) objeto/forma
ctx.beginPath();
// strokeStyle: Esse ajustou a cor do objeto desenhado. ■ Ajustamos esse para a variável color. 
//A variável Color continha red, isso significa que a cor do círculo era vermelha.
ctx.strokeStyle = color;
// ○ lineWidth: Esse ajustou a width para o objeto desenhado.
ctx.lineWidth = 2;
// arc: Esse é utilizado para criar um(a) arco/curva (utilizado para criar círculos, ou partes de um círculo).
// 2 * Math.PI é o endAngle (ângulo final). ■ Utilizamos 2 * Math.PI, pois Math.PI é a metade do círculo
// (pi é 180 graus). Logo, se quisermos o círculo completo, fazemos 2 * Math.PI.
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
// Sintaxe - arc(x, y, r, startAngle, endAngle); ○ x - A coordenada horizontal do centro do arco, ou seja, a 
//coordenada x. ○ y - A coordenada vertical do centro do arco, ou seja, a coordenada y. ○ r - O raio do arco.
// ○ startAngle - O ângulo em que o arco é iniciado, medido a partir do eixo x. ○ endAngle - O ângulo em que o 
// arco é finalizado, medido a partir do eixo x.
ctx.stroke();

canvas.addEventListener("mousedown", myMousedown);
//significa o evento da função.■ Essa e possui relação com o evento.
//Por exemplo: se o evento for mousedown, então essa e possui
//uma relação com o evento mousedown.

function myMousedown(e)
{
    //obtém a cor da caixa de inserção
    //início da atividade adicional
    color = document.getElementById("color").value;
    console.log(color);
    //fim da atividade adicional
    
    // e.clientX fornece as coordenadas x do cursor no canvas, quando pressionado
    // após obtermos as coordenadas x, precisávamos armazená-las na variável mouseX.
     mouseX = e.clientX - canvas.offsetLeft;
    //  e.clientY fornece as coordenadas y no canvas, quando pressionado
    //  após obtermos as coordenadas y, precisávamos armazená-las na variável mouseY..
     mouseY = e.clientY - canvas.offsetTop;

    //  Então, imprimimos essas coordenadas no console para observarmos esse números.
    console.log("X = " + mouseX + " ,Y =  " + mouseY);
    circle(mouseX , mouseY);    
}

// Defina a função circle com as variáveis mouseX e mouseY, pois, queremos desenhar um círculo onde clicamos.
function circle(mouseX , mouseY)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
// ctx.arc(mouseX, mouseY, 40 ,0 , 2*Math.PI); ○mouseXserá a coordenada x em que o mouse clicou.
// ○mouseYserá a coordenada y em que o mouse clicou ○40é o raio. ○0é o start angle. ○2 * Math.PI será o
// end angle do círculo. ○stroke():Esse efetivamente desenha o caminho quevocê definiu .
ctx.arc(mouseX ,mouseY, 40 ,0 , 2*Math.PI);
ctx.stroke();
}

//atividade adicional

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

	
