let exp = new RegExp('[0-9.()\\+\\-\\*\\/]')
let onlyDigit = new RegExp('[0-9]')
let display = ''

$(document).keydown(function(e) {
    let keyPressed = e.key
    getResult(keyPressed)
    onlyDigit.test(keyPressed) && animate(keyPressed)
})

$(`.btn`).click(function(e) {
    let curr = e.target.innerHTML
    getResult(curr)
    onlyDigit.test(curr) && animate(curr)
})

function animate(key) {
    $(`.${key}`).addClass('op')
    setTimeout(function() {
        $(`.${key}`).removeClass('op')
    }, 150)
}

function getResult(key) {
    if(key === 'AC')
        display = ''
    else if(key === '=' || key === 'Enter') {
        try {
            ans = Math.round(eval(display)*1000)/1000
            display = `${ans}`
        }
        catch(e) {
            display = 'ERROR'
            $('.result').text(`${display}`)
        }
    }
    else if(exp.test(key))
        display += key
    else if(key === 'C' || key === 'Backspace')
        display = display.slice(0,display.length-1)

    $('.result').text(`${display}`)
}