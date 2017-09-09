$j(function( $j ){
	var uls = $j('ul', '#menulista');
	$j.each(uls, function(){
		if($j(this).closest('li').attr('class') != 'item'){
			var $posicaoesq = $j(this).closest('li').width();
			$j(this).css('top','-3px');
			$j(this).css('left',$posicaoesq);
		};
	});
});

/*

FREESTYLE MENUS v1.0 RC (c) 2001-2009 Angus Turnbull, http://www.twinhelix.com
Altering this notice or redistributing this file is prohibited.

*/

var isDOM=document.getElementById?1:0,isIE=document.all?1:0,isNS4=navigator.appName=='Netscape'&&!isDOM?1:0,isOp=self.opera?1:0,isDyn=isDOM||isIE||isNS4;function getRef(i,p){p=!p?document:p.navigator?p.document:p;return isIE?p.all[i]:isDOM?(p.getElementById?p:p.ownerDocument).getElementById(i):isNS4?p.layers[i]:null};function getSty(i,p){var r=getRef(i,p);return r?isNS4?r:r.style:null};if(!self.LayerObj)var LayerObj=new Function('i','p','this.ref=getRef(i,p);this.sty=getSty(i,p);return this');function getLyr(i,p){return new LayerObj(i,p)};function LyrFn(n,f){LayerObj.prototype[n]=new Function('var a=arguments,p=a[0],px=isNS4||isOp?0:"px";with(this){'+f+'}')};LyrFn('x','if(!isNaN(p))sty.left=p+px;else return parseInt(sty.left)');LyrFn('y','if(!isNaN(p))sty.top=p+px;else return parseInt(sty.top)');if(typeof addEvent!='function'){var addEvent=function(o,t,f,l){var d='addEventListener',n='on'+t;if(o[d]&&!l)return o[d](t,f,false);if(!o._evts)o._evts={};if(!o._evts[t]){o._evts[t]={};if(o[n])addEvent(o,t,o[n],l);o[n]=new Function('e','var r=true,o=this,a=o._evts["'+t+'"],i;for(i in a){o._f=a[i];if(o._f._i)r=o._f(e||window.event)!=false&&r}o._f=null;return r')}if(!f._i)f._i=addEvent._i++;o._evts[t][f._i]=f;if(t!='unload')addEvent(window,'unload',function(){removeEvent(o,t,f,l)})};addEvent._i=1;var removeEvent=function(o,t,f,l){var d='removeEventListener';if(o[d]&&!l)return o[d](t,f,false);if(o._evts&&o._evts[t]&&f._i)delete o._evts[t][f._i]}}var addReadyEvent=function(f){var a=addReadyEvent,n=null;addEvent(a,'ready',f);if(!a.r){a.r=function(){clearInterval(t);if(a.r)a.onready();a.r=null};addEvent(document,'DOMContentLoaded',a.r);addEvent(window,'load',a.r);var t=setInterval(function(){if(/complete|loaded/.test(document.readyState)){if(!n)a.r();else try{n.doScroll('left');n=null;a.r()}catch(e){}}},50)}};function FSMenu(myName,nested,cssProp,cssVis,cssHid){this.myName=myName;this.nested=nested;this.cssProp=cssProp;this.cssVis=cssVis;this.cssHid=cssHid;this.cssLitClass='highlighted';this.menus=nested?{}:{root:new FSMenuNode('root',true,this)};this.menuToShow=[];this.mtsTimer=null;this.showDelay=0;this.switchDelay=125;this.hideDelay=500;this.showOnClick=0;this.hideOnClick=true;this.animInSpeed=0.2;this.animOutSpeed=0.2;this.animations=[]};FSMenu.prototype.show=function(mN){with(this){menuToShow.length=arguments.length;for(var i=0;i<arguments.length;i++)menuToShow[i]=arguments[i];clearTimeout(mtsTimer);if(!nested)mtsTimer=setTimeout(myName+'.menus.root.over()',10)}};FSMenu.prototype.hide=function(mN){with(this){clearTimeout(mtsTimer);if(menus[mN])menus[mN].out()}};FSMenu.prototype.hideAll=function(){with(this){for(var m in menus)if(menus[m].visible&&!menus[m].isRoot)menus[m].hide(true)}};function FSMenuNode(id,isRoot,obj){this.id=id;this.isRoot=isRoot;this.obj=obj;this.lyr=this.child=this.par=this.timer=this.visible=null;this.args=[];var node=this;this.over=function(evt){with(node)with(obj){if(isNS4&&evt&&lyr.ref)lyr.ref.routeEvent(evt);clearTimeout(timer);clearTimeout(mtsTimer);if(!isRoot&&!visible)node.show();if(menuToShow.length){var a=menuToShow,m=a[0];if(!menus[m]||!menus[m].lyr.ref)menus[m]=new FSMenuNode(m,false,obj);var c=menus[m];if(c==node){menuToShow.length=0;return}clearTimeout(c.timer);if(c!=child&&c.lyr.ref){c.args.length=a.length;for(var i=0;i<a.length;i++)c.args[i]=a[i];var delay=child?switchDelay:showDelay;c.timer=setTimeout('with('+myName+'){menus["'+c.id+'"].par=menus["'+node.id+'"];menus["'+c.id+'"].show()}',delay?delay:1)}menuToShow.length=0}if(!nested&&par)par.over()}};this.out=function(evt){with(node)with(obj){if(isNS4&&evt&&lyr&&lyr.ref)lyr.ref.routeEvent(evt);clearTimeout(timer);if(!isRoot&&hideDelay>=0){timer=setTimeout(myName+'.menus["'+id+'"].hide()',hideDelay);if(!nested&&par)par.out()}}};if(id!='root')with(this)with(lyr=getLyr(id))if(ref){if(isNS4)ref.captureEvents(Event.MOUSEOVER|Event.MOUSEOUT);addEvent(ref,'mouseover',this.over);addEvent(ref,'mouseout',this.out);if(obj.nested){addEvent(ref,'focus',this.over,1);addEvent(ref,'click',this.over);addEvent(ref,'blur',this.out,1)}}};FSMenuNode.prototype.show=function(forced){with(this)with(obj){if(!lyr||!lyr.ref)return;if(par){if(par.child&&par.child!=this)par.child.hide();par.child=this}var offR=args[1],offX=args[2],offY=args[3],lX=0,lY=0,doX=''+offX!='undefined',doY=''+offY!='undefined';if(self.page&&offR&&(doX||doY)){with(page.elmPos(offR,par.lyr?par.lyr.ref:0))lX=x,lY=y;if(doX)lyr.x(lX+eval(offX));if(doY)lyr.y(lY+eval(offY))}if(offR)lightParent(offR,1);visible=1;if(obj.onshow)obj.onshow(id);lyr.ref.parentNode.style.zIndex='2';setVis(1,forced)}};FSMenuNode.prototype.hide=function(forced){with(this)with(obj){if(!lyr||!lyr.ref||!visible)return;if(isNS4&&self.isMouseIn&&isMouseIn(lyr.ref))return show();if(args[1])lightParent(args[1],0);if(child)child.hide();if(par&&par.child==this)par.child=null;if(lyr){visible=0;if(obj.onhide)obj.onhide(id);lyr.ref.parentNode.style.zIndex='1';setVis(0,forced)}}};FSMenuNode.prototype.lightParent=function(elm,lit){with(this)with(obj){if(!cssLitClass||isNS4)return;if(lit)elm.className+=(elm.className?' ':'')+cssLitClass;else elm.className=elm.className.replace(new RegExp('(\\s*'+cssLitClass+')+$'),'')}};FSMenuNode.prototype.setVis=function(sh,forced){with(this)with(obj){if(lyr.forced&&!forced)return;lyr.forced=forced;lyr.timer=lyr.timer||0;lyr.counter=lyr.counter||0;with(lyr){clearTimeout(timer);var speed=sh?animInSpeed:animOutSpeed;if(!counter)sty[cssProp]=sh?cssVis:cssHid;if(isDOM&&(speed<1))for(var a=0;a<animations.length;a++)animations[a](ref,counter,sh);if(isDOM&&(sh?counter<1:counter>0))timer=setTimeout(myName+'.menus["'+id+'"].setVis('+sh+','+(forced||0)+')',50);else lyr.forced=false;counter=counter+speed*(sh?1:-1);if(counter<0.001)counter=0;if(counter>0.999)counter=1}}};FSMenu.animSwipeDown=function(ref,counter,show){var elm=ref.firstChild.style?ref.firstChild:ref.firstChild.nextSibling,isOldIE=/MSIE\s(5|6|7)\./.test(navigator.userAgent);if(!elm)return;if(show&&(counter==0)){if(!elm._fsm_marg)elm._fsm_marg={'top':elm.style.marginTop};ref._fsm_height=ref.offsetHeight}if(counter==1||(counter<0.01&&!show)){ref.style.overflow='visible';elm.style.marginTop=elm._fsm_marg.top;if(isOldIE)ref.style.height=''}else{var cP=Math.pow(Math.sin(Math.PI*counter/2),0.75);ref.style.overflow='hidden';if(isOldIE)ref.style.height=(ref._fsm_height*cP)+'px';else elm.style.marginTop=(0-ref._fsm_height*(1-cP))+'px'}};FSMenu.animFade=function(ref,counter,show){if(typeof ref.filters=='unknown')return;var f=ref.filters,done=(show?counter==1:counter<0.01),a=/MSIE\s(4|5)/.test(navigator.userAgent)?'alpha':'DXImageTransform.Microsoft.Alpha';if(f){if(!done&&ref.style.filter.indexOf(a)==-1)ref.style.filter+=' '+(a=='alpha'?a:'progid:'+a)+'(opacity='+(counter*100)+')';else if(f.length&&f[a]){if(done)f[a].enabled=false;else{f[a].opacity=(counter*100);f[a].enabled=true}}}else ref.style.opacity=ref.style.MozOpacity=counter*0.999};FSMenu.animClipDown=function(ref,counter,show){var cP=Math.pow(Math.sin(Math.PI*counter/2),0.75);ref.style.clip=(counter==1?((window.opera||navigator.userAgent.indexOf('KHTML')>-1)?'':'rect(auto,auto,auto,auto)'):'rect(0,'+ref.offsetWidth+'px,'+(ref.offsetHeight*cP)+'px,0px)')};FSMenu.prototype.activateMenu=function(id,subInd){with(this){if(!isDOM||!document.documentElement)return;var fsmFB=getRef('fsmenu-fallback');if(fsmFB){fsmFB.rel='alternate stylesheet';fsmFB.disabled=true}var a,ul,li,parUL,mRoot=getRef(id),nodes;if(!FSMenu._count)FSMenu._count=1;var evtProp=navigator.userAgent.indexOf('Safari')>-1||isOp?'safRtnVal':'returnValue';var lists=mRoot.getElementsByTagName('ul');for(var i=0;i<lists.length;i++){li=ul=lists[i];while(li){if(li.nodeName.toLowerCase()=='li')break;li=li.parentNode}if(!li)continue;parUL=li;while(parUL){if(parUL.nodeName.toLowerCase()=='ul')break;parUL=parUL.parentNode}a=li.getElementsByTagName('a');if(!a)continue;a=a.item(0);var menuID;if(ul.id)menuID=ul.id;else{menuID=myName+'-id-'+FSMenu._count++;ul.setAttribute('id',menuID)}if(menus[menuID]&&menus[menuID].lyr.ref==ul)continue;menus[menuID]=new FSMenuNode(menuID,false,this);var rootItem=(li.parentNode==mRoot)?1:0;var eShow=new Function('with('+myName+'){var m=menus["'+menuID+'"],pM=menus["'+parUL.id+'"];if(!showOnClick||(showOnClick==1&&!'+rootItem+')||((showOnClick<=2)&&((pM&&pM.child)||(m&&m.visible))))show("'+menuID+'",this)}');var eHide=new Function('e','if(e.'+evtProp+'!=false)'+myName+'.hide("'+menuID+'")');addEvent(a,'mouseover',eShow);addEvent(a,'mouseout',eHide);addEvent(a,'focus',eShow);addEvent(a,'blur',eHide);addEvent(a,'click',new Function('e','var s='+myName+'.showOnClick,m='+myName+'.menus["'+menuID+'"];if(!((s==1&&'+rootItem+')||s>=2))return;'+myName+'[m&&m.visible?"hide":"show"]("'+menuID+'",this);if(e.cancelable&&e.preventDefault)e.preventDefault();e.'+evtProp+'=false;return false'));if(subInd)a.insertBefore(subInd.cloneNode(true),a.firstChild)}var aNodes=mRoot.getElementsByTagName('a');for(var i=0;i<aNodes.length;i++){addEvent(aNodes[i],'focus',new Function('e','var node=this.parentNode;while(node){if(node.onfocus)node.onfocus(e);node=node.parentNode}'));addEvent(aNodes[i],'blur',new Function('e','var node=this.parentNode;while(node){if(node.onblur)node.onblur(e);node=node.parentNode}'))}if(hideOnClick)addEvent(mRoot,'click',new Function('e','if(e.'+evtProp+'!=false)'+myName+'.hideAll()'));menus[id]=new FSMenuNode(id,true,this)}};var page={win:self,minW:0,minH:0,MS:isIE&&!isOp,db:document.compatMode&&document.compatMode.indexOf('CSS')>-1?'documentElement':'body'};page.elmPos=function(e,p){var x=0,y=0,w=p?p:this.win;e=e?(e.substr?(isNS4?w.document.anchors[e]:getRef(e,w)):e):p;if(isNS4){if(e&&(e!=p)){x=e.x;y=e.y};if(p){x+=p.pageX;y+=p.pageY}}if(e&&this.MS&&navigator.platform.indexOf('Mac')>-1&&e.tagName=='A'){e.onfocus=new Function('with(event){self.tmpX=clientX-offsetX;self.tmpY=clientY-offsetY}');e.focus();x=tmpX;y=tmpY;e.blur()}else while(e){x+=e.offsetLeft;y+=e.offsetTop;e=e.offsetParent}return{x:x,y:y}};if(isNS4){var fsmMouseX,fsmMouseY,fsmOR=self.onresize,nsWinW=innerWidth,nsWinH=innerHeight;document.fsmMM=document.onmousemove;self.onresize=function(){if(fsmOR)fsmOR();if(nsWinW!=innerWidth||nsWinH!=innerHeight)location.reload()};document.captureEvents(Event.MOUSEMOVE);document.onmousemove=function(e){fsmMouseX=e.pageX;fsmMouseY=e.pageY;return document.fsmMM?document.fsmMM(e):document.routeEvent(e)};function isMouseIn(sty){with(sty)return((fsmMouseX>left)&&(fsmMouseX<left+clip.width)&&(fsmMouseY>top)&&(fsmMouseY<top+clip.height))}}

var listMenu = new FSMenu('listMenu', true, 'visibility', 'visible', 'hidden');
listMenu.animations[listMenu.animations.length] = FSMenu.animFade;
listMenu.animations[listMenu.animations.length] = FSMenu.animSwipeDown;
//listMenu.animations[listMenu.animations.length] = FSMenu.animClipDown;
var arrow = null;
if (document.createElement && document.documentElement)
{
	
	arrow = document.createElement('span');
	arrow.className = 'subind';
	var text = document.createTextNode("�");
	arrow.appendChild(text);

	
	
}
addEvent(window, 'load', new Function('listMenu.activateMenu("menulista", arrow)'));


//extra do menu
/*

Here are some extras for the script that didn't make it into the standard .JS file.
I use some of these on my site, so feel free to add the effects to yours. Included are:

 Menu Hide On Click: Hides all menus when the document is clicked.
      Menu Floating: Scrolls the menu with the page.
      Title Display: Shows your menu link TITLE="" attributes in a separate display area.
 Menu Repositioning: Stops menus from displaying offscreen.
  Select Box Hiding: Stops boxes covering over menus in Internet Explorer.
        Link Fading: Fades between over/out colours for links in the menu.
       Current Page: Applies a CSS style to the item representing the current page.

*/







// MENU HIDE ON CLICK: Hides all menus when the document is clicked.
// To activate:
//  1) Paste this into your script.
//  2) If you are using multiple menu objects, call hideAll for each one.

addEvent(document, 'click',  function() {
 listMenu.hideAll();
});






/*
// MENU FLOATING: This will scroll a menu with the page.
// To activate:
//  1) Wrap each menu with a tag like this: <div id="abcdef"> <MENU DATA GOES HERE> </div>
//     That should either be in a column by itself, or have POSITION:ABSOLUTE set in its CSS.
//  2) Add the ID of the DIVs wrapping each menu to the fsmScrollHandler() function below.
//  3) Paste the script below at the end of fsmenu.js

// If you have good CSS knowledge, consider implementing a position:fixed solution in supported
// browsers. This is a general, JS-only floating function designed to work with most layouts.

function fsmScrollHandler()
{
 floatElement('abcdef');
 // ADD OTHER PAGE ELEMENTS CONTAINING MENUS HERE.
};

function floatElement(containerID)
{
 var container = getRef(containerID);
 if (!container) return;
 container.style.paddingTop = (typeof window.pageYOffset == 'number' ? window.pageYOffset :
  (document.body ? document.body.scrollTop || document.documentElement.scrollTop : 0)) + 'px';
 window.status = container.style.paddingTop;
};
if (''+window.onscroll=='undefined') setInterval('fsmScrollHandler()', 500);
else addEvent(window, 'scroll', fsmScrollHandler);







// TITLE DISPLAY: Shows your link TITLE="" attributes in the page itself.
// To activate:
//  1) Include a target element like this in your page: <div id="listMenuTitles"></div>
//     This is the element that will contain the titles.
//  2) Add title display lines like this to the function below:
//     titleDisplay('id-of-menu-containing-links', 'target-element-id');
//  3) Paste this script into your document or the fsmenu.js file.

function titleDisplaySetup()
{
 titleDisplay('listMenuRoot', 'listMenuTitles');
 // ADD DIFFERENT TITLE AREAS HERE! Each must have a 'target' area in your page.
 //titleDisplay('otherMenuRoot', 'otherMenuTitles');
};
addEvent(window, 'load', titleDisplaySetup);

function titleDisplay(menuID, target)
{
 var nav = getRef(menuID);
 addEvent(nav, 'mouseover', new Function('e',
  'e=e||window.event; var lt=getRef("' + target + '"); if (lt) {' +
  'while (lt.firstChild) lt.removeChild(lt.firstChild);' +
   'e=e.target||e.srcElement; while(e && (!e.title&&!e.title_orig)) e=e.parentNode;' +
   'if (e && e.getAttribute) {' +
    'var t = e.getAttribute("title");' +
    'if (t) { e.title_orig = t; e.setAttribute("title", "") }' +
    'lt.appendChild(document.createTextNode(e.title_orig));' +
  '}}'));
 addEvent(nav, 'mouseout', new Function('e',
  'var lt=getRef("' + target + '"); if (lt) while (lt.firstChild) lt.removeChild(lt.firstChild)'));
}


*/



// MENU REPOSITIONING: This will stop menus showing outside visible screen boundaries.
// To activate:
//  1) Paste this after you create your "new FSMenu" object.
//  2) Make sure the last line contains the correct menu object name, and
//     duplicate for each of the menu objects to which you want this to apply.

page.winW=function()
 { with (this) return Math.max(minW, MS?win.document[db].clientWidth:win.innerWidth) };
page.winH=function()
 { with (this) return Math.max(minH, MS?win.document[db].clientHeight:win.innerHeight) };
page.scrollX=function()
 { with (this) return MS?win.document[db].scrollLeft:win.pageXOffset };
page.scrollY=function()
 { with (this) return MS?win.document[db].scrollTop:win.pageYOffset };

function repositionMenus(mN) { with (this)
{
 var menu = this.menus[mN].lyr;

 // Showing before measuring corrects MSIE bug.
 //menu.sty.display = 'block';
 // Reset to and/or store original margins.
 if (!menu._fsm_origML) menu._fsm_origML = menu.ref.currentStyle ?
  menu.ref.currentStyle.marginLeft : (menu.sty.marginLeft || 'auto');
 if (!menu._fsm_origMT) menu._fsm_origMT = menu.ref.currentStyle ?
  menu.ref.currentStyle.marginTop : (menu.sty.marginTop || 'auto');
 menu.sty.marginLeft = menu._fsm_origML;
 menu.sty.marginTop = menu._fsm_origMT;

 // Calculate absolute position within document.
 var menuX = 0, menuY = 0,
  menuW = menu.ref.offsetWidth, menuH = menu.ref.offsetHeight,
  vpL = page.scrollX(), vpR = vpL + page.winW() - 16,
  vpT = page.scrollY(), vpB = vpT + page.winH() - 16;
 var tmp = menu.ref;
 while (tmp)
 {
  menuX += tmp.offsetLeft;
  menuY += tmp.offsetTop;
  tmp = tmp.offsetParent;
 }

 // Compare position to viewport, reposition accordingly.
 var mgL = 0, mgT = 0;
 if (menuX + menuW > vpR) mgL = vpR - menuX - menuW;
 if (menuX + mgL < vpL) mgL = vpL - menuX;
 if (menuY + menuH > vpB) mgT = vpB - menuY - menuH;
 if (menuY + mgT < vpT) mgT = vpT - menuY;

 if (mgL) menu.sty.marginLeft = mgL + 'px';
 if (mgT) menu.sty.marginTop = mgT + 'px';
}};

// Set this to process menu show events for a given object.
addEvent(listMenu, 'show', repositionMenus, true);







// SELECT BOX / IFRAME HIDING: This will help mixing menus and forms/frames/Flash/etc.
// Pick one (not both) of the below two methods. To use either, copy and paste beneath
// your menu data and duplicate the last addEvent lines to apply to each of your menus.


// Method one.

FSMenu.prototype.toggleElements = function(show)
{
 // CONFIGURATION: Here's a list of tags that will be hidden by menus. Modify to fit your site.
 var tags = ['select', 'iframe'];

 if (!isDOM) return;
 if (!show) for (var m in this.menus) if (this.menus[m].visible) return;
 for (var t in tags)
 {
  var elms = document.getElementsByTagName(tags[t]);
  for (var e = 0; e < elms.length; e++) elms[e].style.visibility = show ? 'visible' : 'hidden';
 }
};
addEvent(listMenu, 'show', function() { this.toggleElements(0) }, 1);
addEvent(listMenu, 'hide', function() { this.toggleElements(1) }, 1);


// Here's a second method. This only works in IE 5.5+ on Windows, but it doesn't make
// select boxes appear and disappear (menus cleanly cover them).

FSMenu.prototype.ieSelBoxFixShow = function(mN) { with (this)
{
 var m = menus[mN];
 if (!isIE || !window.createPopup) return;
 if (navigator.userAgent.match(/MSIE ([\d\.]+)/) && parseFloat(RegExp.$1) > 6.5)
  return;
 // Create a new transparent IFRAME if needed, and insert under the menu.
 if (!m.ifr)
 {
  m.ifr = document.createElement('iframe');
  m.ifr.src = 'about:blank';
  with (m.ifr.style)
  {
   position = 'absolute';
   border = 'none';
   filter = 'progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)';
  }
  m.lyr.ref.parentNode.insertBefore(m.ifr, m.lyr.ref);
 }
 // Position and show it on each call.
 with (m.ifr.style)
 {
  left = m.lyr.ref.offsetLeft + 'px';
  top = m.lyr.ref.offsetTop + 'px';
  width = m.lyr.ref.offsetWidth + 'px';
  height = m.lyr.ref.offsetHeight + 'px';
  visibility = 'visible';
 }
}};
FSMenu.prototype.ieSelBoxFixHide = function(mN) { with (this)
{
 if (!isIE || !window.createPopup) return;
 var m = menus[mN];
 if (m.ifr) m.ifr.style.visibility = 'hidden';
}};

addEvent(listMenu, 'show', function(mN) { this.ieSelBoxFixShow(mN) }, 1);
addEvent(listMenu, 'hide', function(mN) { this.ieSelBoxFixHide(mN) }, 1);




/*


// LINK FADING: Fades between over/out colours for links in the menu.
// To activate:
//  1) Paste the FSMenu.prototype function into the script anywhere.
//     You might want to put them into fsmenu.js, or around your menu data.
//  2) Paste the "Activation" section beneath your menu data, and ensure that
//     you follow the instructions within it.

FSMenu.prototype.setLinkFading = function(linkClasses, linkSpeed) { with (this)
{
 // Store the link classes in the menu object.
 this.linkClasses = linkClasses || {};
 this.linkSpeed = linkSpeed || 100;
 
 // Find the root menu.
 var mRoot = null;
 for (var m in menus) if (menus[m].isRoot) mRoot = menus[m];
 if (!mRoot) return;

 // Find all link tags and add ID/timers/counters/mouse handlers...
 var links = mRoot.lyr.ref.getElementsByTagName('a'), i = links.length;
 while (i--)
 {
  if (!links[i].id) links[i].id = myName + '-linkfade-' + i;
  links[i].__lf_timer = 0;
  links[i].__lf_count = 0;
  addEvent(links[i], 'mouseover', new Function(myName + '.linkFade("' + links[i].id + '", 1)'));
  addEvent(links[i], 'mouseout', new Function(myName + '.linkFade("' + links[i].id + '", 0)'));
 }
}};

FSMenu.prototype.linkFade = function(link, doShow) { with (this)
{
 // Repeatedly called to animate a link colour in and out.

 link = document.getElementById(link);
 clearTimeout(link.__lf_timer);

// If we're hiding, delay until the link is no longer highlighted.
 var fadeOK = doShow || !link.className || !cssLitClass ||
  (link.className.indexOf(cssLitClass) == -1);

 if (fadeOK)
 {
  var linkClass = linkClasses[link.className || 'standard'] || linkClasses.standard;
  var dim = linkClass.dim, lit = linkClass.lit;

  // Increment the fading counter in the proper direction and speed.
  link.__lf_count = Math.max(0, Math.min(link.__lf_count+(2*doShow-1)*linkSpeed, 100));
 
  // Since Konqueror as of v3.1 doesn't support Number.toString(radix), we need a hack.
  // What the heck were they thinking/smoking when they omitted that? :P
  var col = '#', nc, hexD = '0123456789ABCDEF';
  // Loop through dim/lit arrays, to calculate 3 new hex pairs (0xRR, 0xGG and 0xBB).
  for (var i=0; i<3; i++)
  {
   // Make a new hex pair based on weighted averages of the out/over array indices.
   nc = parseInt(dim[i] + (lit[i]-dim[i])*(link.__lf_count/100));
   col += hexD.charAt(Math.floor(nc/16)).toString() + hexD.charAt(nc%16);
  }
  // Assign to the background of the link.
  link.style.backgroundColor = col;
 }

 // Repeat in 50ms if we're delaying the fade or the fade isn't done yet.
 if (!fadeOK || (link.__lf_count % 100 > 0)) link.__lf_timer = setTimeout(this.myName +
  '.linkFade("' + link.id + '",' + doShow + ')', 50);
 }
};


// Activation: This must be pasted beneath your activateMenu() call.
addEvent(window, 'load', function() {
 // You must call menuObjectName.setLinkFading for each of your menu objects.
 // Pass an associative array {} that contains a list of classnames.
 // You must include a 'standard' class which applies to menu items that have no
 // other classname set like <a class="special"> in the HTML.
 // You can also optionally specify a "highlighted" class that will apply
 // to lit items (or whatever your menu cssLitClass is).
 // You can also style other classes individually -- here I am applying
 // different styles to <a class="special"> as an example.
 // Finally, pass a "speed" parameter to setLinkFading.
 
 // Each class is formatted like so with colour values 0-255:
 // 'classname': { dim: [RR, GG, BB], lit: [RR, GG, BB] }

 listMenu.setLinkFading({
  'standard': { dim: [240,240,248], lit: [64,80,192] },
  'highlighted': { dim: [240,240,248], lit: [64,80,192] },
  'special': { dim: [240,240,248], lit: [200,0,0] },
  'special highlighted': { dim: [240,240,248], lit: [200,200,0] }
 }, 10);

});







// CURRENT PAGE: Paste this anywhere. Include the ID of your menu <UL>, and call
// it once onload for each menu object you create.
// Note: You will probably have to edit this to make it work. The key line is
// the one that tests location.pathname (which is like '/folder/file.html'
// without any '?querystring' or '#bookmark'). I am trying to find the longest
// matching item and highlight that and all its parent links.
// Note 2: Add a rule like this:
//   .current-page { font-weight: bold }
// or similar to your stylesheet of course :).

function activePageHighlight(elm)
{
 if (typeof elm == 'string') elm = document.getElementById(elm);
 if (!elm) return;
 var links = elm.getElementsByTagName('a'), chosen = null;

 for (var i = 0; i < links.length; i++)
 {
  if (links.item(i).href.indexOf(location.pathname) > -1)
   if (!chosen || links[i].href.length > chosen.href.length) chosen = links[i];
 }

 while (chosen && chosen.className != 'menulist')
 {
  if (chosen.nodeName.toLowerCase() == 'li')
  {
   chosen.getElementsByTagName('a').item(0).className = 'current-page';
  }
  chosen = chosen.parentNode;
 }
};
// Activation: Include the ID for your menu in here.
addEvent(window, 'load', new Function('activePageHighlight("listMenuRoot")'));
*/