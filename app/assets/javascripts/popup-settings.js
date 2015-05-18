var popupWorking = function() {

$('.popup').magnificPopup({
	type: 'image',
	gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1]
	},
	image: {
		titleSrc: 'title',
		tError: 'The image could not be loaded.',
	}
});


};


$(document).ready(popupWorking);
$(document).on('page:load', popupWorking);