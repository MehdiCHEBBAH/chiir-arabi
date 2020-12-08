var $content = $('.columns');
var data = [];

const addPic = (id)=>{
    $content.append(`
        <div class="image fit">
            <a href="detail.html?q=${id}"><img src="images/${id}.jpg" alt="" /></a>
        </div>
    `);
};

const loadAllPics = ()=>{
    $content.empty();
    var random_array = new Array(data.length).fill().map((a, i) => a = i).sort(() => Math.random() - 0.5);
    for (let i of random_array){
        addPic(data[i].id);
    }
}

(function($) {

    $.ajax({
        url: `${CURRENT_URL}/data.json`,
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