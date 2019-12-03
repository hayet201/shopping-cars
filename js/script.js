
let sum = document.getElementById('bag');

let cpt = document.getElementById('compteur');
let cp = document.getElementById('compt');

let comp = document.getElementById('comptt');
let compt = document.getElementById('com');

let comp1 = document.getElementById('compt1');
let compt2 = document.getElementById('com1');

function priceSum(sum, cp, compt, compt2) {
    let s1 = parseInt(cp.innerHTML)
    let s2 = parseInt(compt.innerHTML)
    let s3 = parseInt(compt2.innerHTML)

    let price = s1 + s2 + s3
    sum.innerHTML=price.toString()

}

function countup(cpt) {
    let a = cpt.innerHTML
    let b = parseInt(a) + 1
    cpt.innerHTML = b.toString()
    let c = cp.innerHTML
    let s = parseInt(c) + 120
    cp.innerHTML = s.toString()
    priceSum(sum, cp, compt, compt2)
    

}
function countdown(cpt) {
    let a = cpt.innerHTML
    let b = parseInt(a) - 1
    if (b >= 0) {
        cpt.innerHTML = b.toString()

        let c = cp.innerHTML
        let s = parseInt(c) - 120
        if (s >= 0) {
            cp.innerHTML = s.toString()

        }
    }
}

function comptup(comp) {
    let a = comp.innerHTML
    console.log(a)
    let b = parseInt(a) + 1
    comp.innerHTML = b.toString()


    let c = compt.innerHTML
    let s = parseInt(c) + 20
    compt.innerHTML = s.toString()
    priceSum(sum, cp, compt, compt2)
}

function comptdown(comp) {
    let a = comp.innerHTML
    let b = parseInt(a) - 1
    if (b >= 0) {
        comp.innerHTML = b.toString()

        let c = compt.innerHTML
        let s = parseInt(c) - 20
        if (s >= 0) {
            compt.innerHTML = s.toString()
            priceSum(sum, cp, compt, compt2)

        }
    }
}

function compteurup(comp1) {
    let a = comp1.innerHTML
    let b = parseInt(a) + 1
    comp1.innerHTML = b.toString()

    let c = com1.innerHTML
    let s = parseInt(c) + 200
    com1.innerHTML = s.toString()
    priceSum(sum, cp, compt, compt2)

}

function compteurdown(comp1) {
    let a = comp1.innerHTML
    let b = parseInt(a) - 1
    if (b >= 0) {
        comp1.innerHTML = b.toString()

        let c = com1.innerHTML
        let s = parseInt(c) - 200
        if (s >= 0) {
            com1.innerHTML = s.toString()
            priceSum(sum, cp, compt, compt2)
        }
    }
}

