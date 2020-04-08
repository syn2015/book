$(function () {
    var xhrurl = 'http://localhost:3000/shopapi';
    $.ajax({
        type: 'get',
        async: 'false',
        url: xhrurl,
        cache: false,
        dataType: 'jsonp',
        success: function (json) {
            console.log(json);
            var html = "";
            $('#js_climit_li').html("");
            $(json.categorys).each(function (i, categorys) {
                html +=
                    ' <li class="appliance js_toggle relative"><div class="category-info list-nz"> <h3 class="category-name b-category-name"><i></i><a id="s-category-' +
                    categorys.categoryID +
                    '" href="#"target="_blank" class="ml-22"title="' +
                    categorys
                    .categoryName + '">' +
                    categorys
                    .categoryName +
                    '</a></h3>',
                    html +=
                    '<p class="c-category-list limit-24">';
                $(categorys.categoryItems)
                    .each(function (i,
                        categoryItems
                    ) {
                        html += '<a href="#" target="_blank" title="' +
                            categoryItems
                            .cname +
                            '" id="s-goods-category-' +
                            categoryItems
                            .cid +
                            '">' +
                            categoryItems
                            .cname +
                            '</a>'
                    });
                html += '</p><em>&gt;</em></div></li>'
                //textarea

            });

            console.log('html--------:', html);
            $('#js_climit_li').html(html);
            //testarea区域
            var textarea = "";
            $('.dl-sort').html('');
            $(json.categorys).each(function (i, categorys) {
                textarea += '<dt><span title="'+categorys.cname+'">'+categorys.cname+'</span></dt><dd><a title="马甲" id="scategory-304" target="_blank" href="#"><span>马甲</span></a></dd>'
            })
        },
        error: function (e) {
            alert('error');
        }
    })
})