import './app4.css'
import $ from 'jquery'

let $circle = $('.app4 .circle')
$circle.on('mouseenter',function () {
    console.log('mouseenter');
    $circle.addClass('active')
}).on('mouseleave',function () {
    console.log('mouseleave');
    $circle.removeClass('active')
})