
(function($) {

    const search = (searchQuery) =>{
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
        const pattern = searchQuery;

        var searchResults = fuse.search(pattern);
        
        if (searchResults.length > 0) {
            $content.empty()
            for (let e of searchResults){
                addPic(e.item.id);
            }
        }else{
            alert("لا يوجد نتائج حول بحثك, حاول مجددا");
            loadAllPics();
        }
    }

    var tag = decodeURIComponent(location.search ? location.search.substring(1).split("=")[1] : '');
    console.log(tag);
    if(tag){
        search(tag);
    }

    $("#search").keypress(function(e) {

        if(e.which == 13) {
            var searchQuery = $('#searchQuery').val();
            
            if (searchQuery != ''){
                search(searchQuery);
            }else{
                loadAllPics();
            }
        }
            
    });

    
})(jQuery);