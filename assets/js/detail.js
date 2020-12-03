
(function($) {

    $.ajax({
        url: "http://mehdi-chebbah.ml/chiir-arabi/data.json",
        dataType: 'json',
        async: false,
        success: function(data) {
            var id = +location.search.substring(1).split("=")[1];
            var element = data.find(e => e.id == id);
            document.title = element.title;
            $("#chiir_image").attr("src",`images/${element.id}.jpg`);
            $('#chiir_title').html(element.title);
            $('#chiir_author').html(element.author? `قال ${element.author}`: '');
            $('#chiir_content').html(element.content.split("\\n").join("<br />"));
            for(let e of element.tags){
                $('#chiir_tags').append(`
                    <a class="tag after second" href="index.html?q=${encodeURIComponent(e.substring(1).replaceAll("_", " "))}">${e} </a>
                `);
            }
        },
        fail: function(err){
            console.log("An error has occurred.");
        }
      });
    
})(jQuery);
