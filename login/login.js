$(document).ready(function(){
	$('body').on('click','.open-login',function(){
		$(this).addClass('close-login');
		$(this).removeClass('open-login');
		$(this).html('Cerrar');
		$('#form-login').removeClass('hidden-sm');
		$('#form-login').removeClass('hidden-xs');
	});
	$('body').on('click','.close-login',function(){
		$(this).addClass('open-login');
		$(this).removeClass('close-login');
		$(this).html('Entrar');
		$('#form-login').addClass('hidden-sm');
		$('#form-login').addClass('hidden-xs');
	});
	$('body').on('click','.portfolio-image',function(){
		var view = $(this).attr('view');
		$('.portfolio-image .badge').addClass('opacity');
		$('.portfolio-image .badge-'+ view).removeClass('opacity');
		$('[name="view"]').val(view);
	});
	var $portfolio_selectors = $('.portfolio-filter >li>a');
	var $portfolio = $('.portfolio-items');
	$portfolio.isotope({
		itemSelector : '.portfolio-item',
		layoutMode : 'fitRows'
	});
	
	$portfolio_selectors.on('click', function(){
		$portfolio_selectors.removeClass('active');
		$('.rob-cat-landing').removeClass('active');
		$(this).addClass('active');
		$(this).parent('li').addClass('active');
		var selector = $(this).attr('data-filter');
		$portfolio.isotope({ filter: selector });
		return false;
	});
});