import './app2.css'
import $ from 'jquery'

$(".app2 .tabs").on('click', 'li', (e) => {
    let $li = $(e.currentTarget)
    console.log();
    let index = $li.index();
    $li.addClass('active').siblings().removeClass('active')
    $('.app2 .contents').children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')

})
