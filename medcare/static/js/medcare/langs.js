$('#dropdownMenuLink').on('click', function(event) {
    event.preventDefault();
});

$('#dropdownMenuLink, #language-list').hover( 
    function(event) {
        event.preventDefault();
        setTimeout($('#language-list').fadeIn(0), 0);
    }, 
    function(event) {
        event.preventDefault();
        setTimeout($('#language-list').fadeOut(0), 0);
});

$('#language-list a').on('click', function(event) {
    event.preventDefault();
    var target = $(event.target);
    var url = target.attr('href');
    var language_code = target.data('language-code');
    $.ajax({
        type: 'POST',
        url: url,
        data: {language: language_code},
        headers: {"X-CSRFToken": getCookie('XSRF-TOKEN')}
    }).done(function(data, textStatus, jqXHR) {
        reload_page();
    });
});

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function reload_page() {
    window.location.reload(true);
}
