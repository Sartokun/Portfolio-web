window.onload = function() {
    const links = document.querySelectorAll('a:not(#header_bar a)');
    links.forEach(function(link) {
        link.setAttribute('target', '_blank');
    });
}