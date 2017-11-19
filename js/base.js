;(function(win, doc){
    function change(){
        doc.documentElement.style.fontSize=50*doc.documentElement.clientWidth/375+'px';
    }
    change();

    win.addEventListener('resize', change, false);
})(window, document);