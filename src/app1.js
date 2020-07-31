import $ from 'jquery'

let $result = $('.app1 #result')

$('.app1 #plus1').on('click', (e) => {
    let n = parseInt($result.text())
    $result.text(n + 1)
})
$('.app1 #minus1').on('click', (e) => {
    let n = parseInt($result.text())
    $result.text(n - 1)
})
$('.app1 #multiple2').on('click', (e) => {
    let n = parseInt($result.text())
    $result.text(n * 2)
})
$('.app1 #except').on('click', (e) => {
    let n = parseInt($result.text())
    $result.text(n / 2)
})