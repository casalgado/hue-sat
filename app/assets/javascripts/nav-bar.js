var menuNavBar = function(){

	/* ---------------------------------------------- /*
	 * Transparent navbar animation
	/* ---------------------------------------------- */

	function navbarCheck() {
		if (navbar.length > 0 && navbar.hasClass('navbar-transparent')) {
			navbatTrans = true;
		} else {
			navbatTrans = false;
		}
	}

	function navbarAnimation(navbar, moduleHero, navHeight) {
		var topScroll = $(window).scrollTop();
		if (navbar.length > 0 && navbatTrans != false) {
			if (topScroll >= navHeight) {
				navbar.removeClass('navbar-transparent');
			} else {
				navbar.addClass('navbar-transparent');
			}
		}
	};

	/* ---------------------------------------------- /*
	 * Navbar collapse on click
	/* ---------------------------------------------- */

	$(document).on('click','.navbar-collapse.in',function(e) {
		if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
			$(this).collapse('hide');
		}
	});

	/* ---------------------------------------------- /*
	 * Navbar submenu
	/* ---------------------------------------------- */

	function navbarSubmenu(width) {
		if (width > 767) {
			$('.navbar-custom .navbar-nav > li.dropdown').hover(function() {
				var MenuLeftOffset  = $('.dropdown-menu', $(this)).offset().left;
				var Menu1LevelWidth = $('.dropdown-menu', $(this)).width();
				if (width - MenuLeftOffset < Menu1LevelWidth * 2) {
					$(this).children('.dropdown-menu').addClass('leftauto');
				} else {
					$(this).children('.dropdown-menu').removeClass('leftauto');
				}
				if ($('.dropdown', $(this)).length > 0) {
					var Menu2LevelWidth = $('.dropdown-menu', $(this)).width();
					if (width - MenuLeftOffset - Menu1LevelWidth < Menu2LevelWidth) {
						$(this).children('.dropdown-menu').addClass('left-side');
					} else {
						$(this).children('.dropdown-menu').removeClass('left-side');
					}
				}
			});
		}
	};

	/* ---------------------------------------------- /*
	 * Navbar hover dropdown on desktop
	/* ---------------------------------------------- */

	function hoverDropdown(width, mobileTest) {
		if ((width > 767) && (mobileTest != true)) {
			$('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').removeClass('open');
			var delay = 0;
			var setTimeoutConst;
			$('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').hover(function() {
				var $this = $(this);
				setTimeoutConst = setTimeout(function() {
					$this.addClass('open');
					$this.find('.dropdown-toggle').addClass('disabled');
				}, delay);
			},
			function() {
				clearTimeout(setTimeoutConst);
				$(this).removeClass('open');
				$(this).find('.dropdown-toggle').removeClass('disabled');
			});
		} else {
			$('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').unbind('mouseenter mouseleave');
			$('.navbar-custom [data-toggle=dropdown]').not('.binded').addClass('binded').on('click', function(event) {
				event.preventDefault();
				event.stopPropagation();
				$(this).parent().siblings().removeClass('open');
				$(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
				$(this).parent().toggleClass('open');
			});
		}
	};

}

$(document).ready(menuNavBar);
$(document).on('page:load', menuNavBar);