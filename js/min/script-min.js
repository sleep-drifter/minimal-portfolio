$(document).ready(function(){$(".image").each(function(){var o=$(this),t="#"+Math.floor(16777215*Math.random()).toString(16);o.css({background:t})}),$(".grid").isotope({itemSelector:".el",percentPosition:!0,masonry:{columnWidth:".el",gutter:10},transitionDuration:"0.3s",hiddenStyle:{opacity:0},visibleStyle:{opacity:1}}),$(window).on("debouncedresize",function(o){console.log($(window).width())}),$("select").change(function(){var o=$(this).val();o="."+o,$(".grid").isotope({filter:o})})});