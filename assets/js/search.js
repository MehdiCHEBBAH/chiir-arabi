
(function($) {

    // var tag = location.search ? location.search.substring(1).split("=")[1] : '';
    // if(tag){
    //     $('#searchQuery').val(tag);
    //     $("#search").trigger({type: 'keypress', which: 13, keyCode: 13});
    // }

    $("#search").keypress(function(e) {

        if(e.which == 13) {
            var searchQuery = $('#searchQuery').val();
            
            if (searchQuery != ''){
                const options = {
                    isCaseSensitive: false,
                    // includeScore: false,
                    shouldSort: true,
                    // includeMatches: false,
                    // findAllMatches: false,
                    minMatchCharLength: 3,
                    // location: 0,
                    threshold: 0.4,
                    // distance: 100,
                    // useExtendedSearch: false,
                    ignoreLocation: true,
                    // ignoreFieldNorm: false,
                    keys: [
                        {
                            name: 'title',
                            weight: 0.25
                        },
                        {
                            name: 'author',
                            weight: 0.25
                        },
                        {
                            name: 'content',
                            weight: 0.1
                        },
                        {
                            name: 'tags',
                            weight: 0.4
                        }
                    ]
                };
                
                const fuse = new Fuse(data, options);
                
                // Change the pattern
                const pattern = searchQuery
                
                var searchResults = fuse.search(pattern)
    
                
                if (searchResults.length > 0) {
                    $content.empty()
                    for (let e of searchResults){
                        addPic(e.item.id);
                    }
                }else{
                    alert("لا يوجد نتائج, حاول مجددا");
                    $content.empty()
                    for (let e of data){
                        addPic(e.id);
                    }
                }
            }
        }
            
    });

    
})(jQuery);