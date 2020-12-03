var $content = $('.columns');
var data = [];

const addPic = (id)=>{
    $content.append(`
        <div class="image fit">
            <a href="detail.html?q=${id}"><img src="images/${id}.png" alt="" /></a>
        </div>
    `);
};

(function($) {

    $.getJSON("../../data.json", function(loaded_data){
        data = loaded_data;
        for(let i of data){
            addPic(i.id);
        }
    }).fail(function(){
        console.log("An error has occurred.");
    });
    
})(jQuery);