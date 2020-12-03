
(function($) {
    $.getJSON("../../data.json", function(data){
        var id = +location.search.substring(1).split("=")[1];
        var element = data.find(e => e.id == id);
        document.title = element.title;
        $("#chiir_image").attr("src",`images/${element.id}.png`);
        $('#chiir_title').html(element.title);
        $('#chiir_author').html(element.author? `قال ${element.author}`: '');
        $('#chiir_content').html(element.content.split("\\n").join("<br />"));
        for(let e of element.tags){
            $('#chiir_tags').append(`
                <a class="tag after second" href="#">${e} </a>
            `);
        }
    }).fail(function(){
        console.log("An error has occurred.");
    });
    
})(jQuery);
