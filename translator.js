function changeFormatIconColor(software,action){var svg=software.getElementsByTagName('svg')[0];if(action=='add'){color=software.getAttribute('data-hover-color');}
else if(action=='remove'){color=software.getAttribute('data-color');}
svg.setAttribute('fill',color);}
function initEventsTranslator(){var softs=document.getElementsByClassName('compatibility-software');for(var i=0;i<softs.length;i++){softs[i].addEventListener('mouseenter',function(e){var s=e.target;changeFormatIconColor(s,'add');});softs[i].addEventListener('mouseleave',function(e){var s=e.target;changeFormatIconColor(s,'remove');});}}
function initFunctionsTranslator(){initEventsTranslator();}
document.addEventListener('DOMContentLoaded',function(){initFunctionsTranslator();},false);