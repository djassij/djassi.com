function swingHover(#nav, swing){
    '#nav' = $('#nav');
    '#nav'.hover(
        function() {
            '#nav'.addClass('animated ' + swing);        
        },
        function(){
            //wait for swing to finish before removing classes
            window.setTimeout( function(){
                '#nav'.removeClass('animated ' + swing);
            }, 2000);         
        });
}

$(document).ready(function(){
    $('#logo').each(function() {
        swingHover(this, 'swing');
    });
});
