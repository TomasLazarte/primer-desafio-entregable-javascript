alert("A continuación indique en qué forma se encuentra su función cuadrática (polinómica, factorizada o canónica) y hallaremos sus raíces:")

let forma, a, b, c, x1, x2, xv, yv

const resolventeX1 = (a, b, c) => (-b + ((b**2 - 4 * a * c)**0.5)) / (2 * a)
const resolventeX2 = (a, b, c) => (-b - ((b**2 - 4 * a * c)**0.5)) / (2 * a)

do{
    forma = parseFloat(prompt("Si su forma es POLINÓMICA (ax^2+bx+c) ingrese: 1 . Si su forma es FACTORIZADA (a(x-x1)(x-x2)) ingrese: 2 . Si su forma es CANÓNICA (a(x-xv)^2+yv) ingrese: 3 ."))
    if(forma === 1){
        a = parseFloat(prompt("Ingrese a :"))
        b = parseFloat(prompt("Ingrese b :"))
        c = parseFloat(prompt("Ingrese c :"))
    } else if(forma === 2){
        a = parseFloat(prompt("Ingrese a :"))
        x1 = parseFloat(prompt("Ingrese x1 :"))
        x2 = parseFloat(prompt("Ingrese x2 :"))
    } else if(forma === 3){
        a = parseFloat(prompt("Ingrese a :"))
        xv = parseFloat(prompt("Ingrese xv :"))
        yv = parseFloat(prompt("Ingrese yv :"))
        b = -1 * (xv * 2 * a)
        c = (xv**2 + yv)
    } else{
        alert("Por favor, ingrese una opción válida.")
    }
}while ((isNaN(forma)) && (a === 0 || isNaN(a) || isNaN(b) || isNaN(c) || isNaN(x1) || isNaN(x2) || isNaN(xv) || isNaN(yv)))

switch (forma){
    case 1:
        if(a === 0){
            alert("Por favor, ingrese un a != 0")
            break
        }else{
            console.log("x1 = " + resolventeX1(a, b, c))
            console.log("x2 = " + resolventeX2(a, b, c))
            break
        }
    case 2:
        if(a === 0){
            alert("Por favor, ingrese un a != 0")
            break
        }else{
            console.log("x1 = " + -1 * x1)
            console.log("x2 = " + -1 * x2)
            break
        }
    case 3:
        if(a === 0){
            alert("Por favor, ingrese un a != 0")
            break
        }else{
            console.log("x1 = " + resolventeX1(a, b, c))
            console.log("x2 = " + resolventeX2(a, b, c))
        }
}

