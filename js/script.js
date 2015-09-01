/* Author: 

*/
	function isTabletOrMobile() {
		return /mac|Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/.test(navigator.userAgent);
	}

	function closeMenus() {
		$('#nav > li').removeClass('open');
        $('#nav').removeClass('no-hover');
	}

	$(document).ready(function(){
        /****
        * nav menu click and hover events to toggle menu
        *****/

        $openMenu = $('#nav .open-on-load').first()
		
        if ( $openMenu.length && !isTabletOrMobile() ) {
    		$('#nav').addClass('no-hover');
        	$openMenu.addClass('open');
        }
        $container = isTabletOrMobile() ? $('.layout') : $(document);

        $container.on('click touch', function(evt) {
            $el = $(evt.target);
            $menuMatch = $el.closest('.menu1, .menu2'); // check if one of the menus is a parent of the clicked element
            
            if ($menuMatch.length) { // a match means we've either clicked the menu or inside of it (either way open the dropdown)
                
                if ($el.hasClass('trigger') && $menuMatch.hasClass('open') && $('#nav').hasClass('no-hover') ) {
                	$('#nav').removeClass('no-hover');
                	return false;
                }
                $menuMatch.addClass('open');
                $menuMatch.siblings().removeClass('open');
                $('#nav').addClass('no-hover'); // once a menu is open, add class to prevent hover from doing anything
				if ( $el.hasClass('trigger') ) {
					return false;
				}
            }
            else {  // no match means we've clicked anywhere but inside/on the menus, close the dropdown
                closeMenus();
            }
        })
        $menus = $('#nav > .menu1, #nav > .menu2');
        $menus.hover( // hover behavior moved to JS from CSS for better organization
            function(){ // function on mousein
                $el = $(this);
                if ( !$('#nav').hasClass('no-hover') ) {   // only if allowed to change on hover
                    $el.siblings().removeClass('open');
                    $el.addClass('open');
                }
            }, 
            function(){ // function on mouseout
                $el = $(this);
                if ( !$('#nav').hasClass('no-hover') ) {
                    $el.removeClass('open');
                }
            }
        )
    });