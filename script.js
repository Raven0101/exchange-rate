const sel1 = document.getElementById('sel1')
const sel2 = document.getElementById('sel2')
const swap = document.getElementById('swap')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const rate = document.getElementById('rate')

function calculate() {
    current1 = sel1.value
    current2 = sel2.value
    fetch("https://open.exchangerate-api.com/v6/latest")
        .then(res => res.json())
        .then(data => {
            const currentRate = data.rates[current2] / data.rates[current1]
            input2.value = (input1.value * currentRate).toFixed(2)
            rate.innerText = `1 ${current1} = ${currentRate} ${current2}`
        })
}

sel1.addEventListener('change', calculate)
sel2.addEventListener('change', calculate)
input1.addEventListener('change', calculate)
input2.addEventListener('change', calculate)
swap.addEventListener('click', function() {
    var temp = sel1.value
    sel1.value = sel2.value
    sel2.value = temp
    calculate()
})