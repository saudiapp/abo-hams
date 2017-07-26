;window.CloudflareApps=window.Eager=window.CloudflareApps||window.Eager||{};window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="51fd03d4c462bf54fee659fb3e06751b";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){CloudflareApps.internal=CloudflareApps.internal||{};var errors=[];CloudflareApps.internal.placementErrors=errors;var errorHashes={}
var noteError=function(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'');if(errorHashes[hash])
return;errorHashes[hash]=true;errors.push(options);}
var initializedSelectors={};var currentInit=false;CloudflareApps.internal.markSelectors=function(){if(!currentInit){check();currentInit=true;setTimeout(function(){currentInit=false;});}}
var check=function(){var installs=window.CloudflareApps.installs;for(var installId in installs){if(!installs.hasOwnProperty(installId))
continue;var selectors=installs[installId].selectors;if(!selectors)
continue;for(var key in selectors){if(!selectors.hasOwnProperty(key))
continue;var hash=installId+"::"+key;if(initializedSelectors[hash])
continue;var els=document.querySelectorAll(selectors[key]);if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId});initializedSelectors[hash]=true;continue;}else if(!els||!els.length){continue;}
initializedSelectors[hash]=true;els[0].setAttribute('cfapps-selector',selectors[key]);}}}
CloudflareApps.querySelector=function(selector){if(selector==='body'||selector==='head'){return document[selector];}
CloudflareApps.internal.markSelectors();var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]');if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector});els=document.querySelectorAll(selector);if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector});return null;}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector});}
return els[0];}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector});}
return els[0];}})();;(function(){var prevEls={};CloudflareApps.createElement=function(options,prevEl){CloudflareApps.internal.markSelectors();try{if(prevEl&&prevEl.parentNode){var replacedEl;if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId];}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl);delete prevEls[prevEl.cfAppsElementId];}else{prevEl.parentNode.removeChild(prevEl);}}
var element=document.createElement('cloudflare-app');var container;try{container=CloudflareApps.querySelector(options.selector);}catch(e){}
if(!container){return element;}
if(!container.parentNode&&(options.method=="after"||options.method=="before"||options.method=="replace")){return element;}
if(container==document.body){if(options.method=="after")
options.method="append";else if(options.method=="before")
options.method="prepend";}
switch(options.method){case"prepend":if(container.firstChild){container.insertBefore(element,container.firstChild);break;}
case"append":container.appendChild(element);break;case"after":if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling);}else{container.parentNode.appendChild(element);}
break;case"before":container.parentNode.insertBefore(element,container);break;case"replace":try{id=element.cfAppsElementId=Math.random().toString(36);prevEls[id]=container;}catch(e){}
container.parentNode.replaceChild(element,container);}
return element;}catch(e){if(typeof console!=="undefined"&&typeof console.error!=="undefined"){console.error("Error creating Cloudflare Apps element",e);}}}})();;(function(){CloudflareApps.matchPage=function(patterns){if(!patterns||!patterns.length){return true;}
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed;var loc=url.host+url.path;}else{var loc=document.location.host+document.location.pathname;}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i');if(re.test(loc)){return true;}}
return false;}})();;CloudflareApps.installs["B8FqWjMooSco"]={appId:"zrcZpVtmvMzQ",scope:{}};;CloudflareApps.installs["B8FqWjMooSco"].options={"account":{"accountId":"2K99bHW5XX3f","service":"admiral"},"measureDomain":"floodprincipal.com","measurePath":"fffe3276957bd908c7999dc0ccb9628ab0f1da0c1b701e15aff44806c6650c00bb11632ea475b52ef702471e62da743175a1f3acfee409a69b62739d4b18","propertyID":"A-5962A83E0C5FC23EE6BB6709-1"};;CloudflareApps.installs["xaXCyOn9LHmW"]={appId:"lMxPPXVOqmoE",scope:{}};;CloudflareApps.installs["xaXCyOn9LHmW"].options={"account":{"accountId":"7I6BiJlFnGIw","service":"googleanalytics"},"domain":"","id":"UA-69262063-2","showDomain":false};;if(CloudflareApps.matchPage(CloudflareApps.installs['B8FqWjMooSco'].URLPatterns)){(function(){var options=CloudflareApps.installs['B8FqWjMooSco'].options;if("B8FqWjMooSco"==='preview'){window.admrlPreviewEngage=true;}
if(options.measureDomain&&options.measurePath){addScript(options.measureDomain,options.measurePath);}
function addScript(domain,path){var scriptEl=document.createElement('script');var firstScript=document.getElementsByTagName('script')[0];scriptEl.async=1;scriptEl.src='https://'+domain+'/'+path;firstScript.parentNode.insertBefore(scriptEl,firstScript);}}());};if(CloudflareApps.matchPage(CloudflareApps.installs['xaXCyOn9LHmW'].URLPatterns)){(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');};if(CloudflareApps.matchPage(CloudflareApps.installs['xaXCyOn9LHmW'].URLPatterns)){(function(){var options=CloudflareApps.installs['xaXCyOn9LHmW'].options
var domain=options.showDomain&&options.domain?options.domain:'auto'
if(!options.id)return
window.ga('create',options.id,domain)
window.ga('send','pageview')}())}
