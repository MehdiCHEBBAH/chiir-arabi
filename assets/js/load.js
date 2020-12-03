var $content = $('.columns');
var data = [];

const addPic = (id)=>{
    $content.append(`
        <div class="image fit">
            <a href="detail.html?q=${id}"><img src="images/${id}.png" alt="" /></a>
        </div>
    `);
};

const loadAllPics = ()=>{
    $content.empty()
    for (let e of data){
        addPic(e.id);
    }
}

(function($) {

    $.ajax({
        url: "/data.json",
        dataType: 'json',
        async: false,
        success: function(loaded_data) {
            data = loaded_data;
            loadAllPics();
        },
        fail: function(err){
            console.log("An error has occurred.");
        }
      });
    
})(jQuery);