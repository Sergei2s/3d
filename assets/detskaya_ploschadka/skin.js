// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: gallery.ggsk
// Generated 2025-09-24T00:06:21

function pano2vrSkin(player,base) {
	player.addVariable('var_margin', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info_popup', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._loader=document.createElement('div');
		els=me._loader__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGZpbGw9IndoaXRlIiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Y2lyY2xlIHI9IjAiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBiZWdpbj0iMCIgZHVyPSIxcyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN5PSIzIiBjeD0iMT'+
			'YiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDE2IDE2KSI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGJlZ2luPSIwLjEyNXMiIGR1cj0iMXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeT0iMyIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFt'+
			'ZT0iciIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBiZWdpbj0iMC4yNXMiIGR1cj0iMXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeT0iMyIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIj4KICA8YW5pbWF0ZSBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOC'+
			'IgYmVnaW49IjAuMzc1cyIgZHVyPSIxcyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN5PSIzIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBiZWdpbj0iMC41cyIgZHVyPSIxcyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN5PSIzIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDIyNSAx'+
			'NiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBiZWdpbj0iMC42MjVzIiBkdXI9IjFzIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3k9IjMiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIiByZXBlYXRDb3VudD0iaW5kZW'+
			'Zpbml0ZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGJlZ2luPSIwLjc1cyIgZHVyPSIxcyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN5PSIzIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBiZWdpbj0iMC44NzVzIiBkdXI9IjFz'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3k9IjMiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGJlZ2luPSIwLjVzIiBkdXI9IjFzIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loader__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Loader";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loader.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loader.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var_margin') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._loader.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._loader.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._loader.style.transition='left 0s, top 0s';
				if (me._loader.ggCurrentLogicStatePosition == 0) {
					me._loader.style.left = 'calc(50% - (32px / 2) - (0px / 2) + -90px)';
					me._loader.style.top = 'calc(50% - (32px / 2))';
				}
				else {
					me._loader.style.left='calc(50% - ((32px + 0px) / 2) + 0px)';
					me._loader.style.top='calc(50% - ((32px + 0px) / 2) + 0px)';
				}
			}
		}
		me._loader.logicBlock_position();
		me._loader.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTileLoading() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._loader.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._loader.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._loader.style.transition='left 0s, top 0s';
				if (me._loader.ggCurrentLogicStateVisible == 0) {
					me._loader.style.visibility=(Number(me._loader.style.opacity)>0||!me._loader.style.opacity)?'inherit':'hidden';
					me._loader.ggVisible=true;
				}
				else {
					me._loader.style.visibility="hidden";
					me._loader.ggVisible=false;
				}
			}
		}
		me._loader.logicBlock_visible();
		me._loader.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._loader);
		el=me._levo=document.createElement('div');
		el.ggId="levo";
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 16px 16px 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 30px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._levo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._levo.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._levo.ggUpdatePosition=function (useTransition) {
		}
		el=me._strelka_levo=document.createElement('div');
		els=me._strelka_levo__img=document.createElement('img');
		els.className='ggskin ggskin_strelka_levo';
		hs=basePath + 'images/strelka_levo.gif';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Strelka levo";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 33px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((33px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._strelka_levo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._strelka_levo.ggUpdatePosition=function (useTransition) {
		}
		me._levo.appendChild(me._strelka_levo);
		me.divSkin.appendChild(me._levo);
		el=me._pravo=document.createElement('div');
		el.ggId="pravo";
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px 0px 0px 16px;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 30px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pravo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pravo.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
			player.setVariableValue('vis_info_popup', false);
		}
		me._pravo.ggUpdatePosition=function (useTransition) {
		}
		el=me._strelka_pravo=document.createElement('div');
		els=me._strelka_pravo__img=document.createElement('img');
		els.className='ggskin ggskin_strelka_pravo';
		hs=basePath + 'images/strelka_pravo.gif';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Strelka pravo";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 33px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((33px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._strelka_pravo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._strelka_pravo.ggUpdatePosition=function (useTransition) {
		}
		me._pravo.appendChild(me._strelka_pravo);
		me.divSkin.appendChild(me._pravo);
		el=me._screentint_info=document.createElement('div');
		el.ggId="screentint_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint_info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_info.style.transition='';
				if (me._screentint_info.ggCurrentLogicStateVisible == 0) {
					me._screentint_info.style.visibility=(Number(me._screentint_info.style.opacity)>0||!me._screentint_info.style.opacity)?'inherit':'hidden';
					me._screentint_info.ggVisible=true;
				}
				else {
					me._screentint_info.style.visibility="hidden";
					me._screentint_info.ggVisible=false;
				}
			}
		}
		me._screentint_info.logicBlock_visible();
		me._screentint_info.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
		}
		me._screentint_info.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint_info);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : clamp(300px, calc(50% - 60px), 100%);';
		hs+='left : calc(50% - ((clamp(300px, calc(50% - 60px), 100%) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((clamp(300px, calc(50% - 60px), 100%) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : clamp(300px, calc(50% - 60px), 100%);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width <= 540))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).height <= 550))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._information.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._information.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._information.style.transition='transform 0s';
				if (me._information.ggCurrentLogicStateScaling == 0) {
					me._information.ggParameter.sx = 0.8;
					me._information.ggParameter.sy = 0.8;
					me._information.style.transform=parameterToTransform(me._information.ggParameter);
					skin.updateSize(me._information);
				}
				else if (me._information.ggCurrentLogicStateScaling == 1) {
					me._information.ggParameter.sx = 0.65;
					me._information.ggParameter.sy = 0.65;
					me._information.style.transform=parameterToTransform(me._information.ggParameter);
					skin.updateSize(me._information);
				}
				else {
					me._information.ggParameter.sx = 1;
					me._information.ggParameter.sy = 1;
					me._information.style.transform=parameterToTransform(me._information.ggParameter);
					skin.updateSize(me._information);
				}
			}
		}
		me._information.logicBlock_scaling();
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style.transition='transform 0s';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		me._information.logicBlock_visible();
		me._information.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text Arial";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100%) + 26px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,82,140,0.882353);';
		hs+='border : 13px solid rgba(0,170,255,0.0392157);';
		hs+='border-radius : 16px;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 12px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="max-height: 700px";
		els.setAttribute('style',hs);
		me._info_text_body.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.information)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_body.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_text_body.ggUpdateText();
		});
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_text_body);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KIDxsaW5lIHkxPSI2IiB4MT0iMTgiIHgyPSI2IiB5Mj0iMTgiLz4KIDxsaW5lIHkxPSI2IiB4MT0iNiIgeDI9IjE4IiB5Mj0iMTgiLz4KPC9zdmc+Cg==';
		me._svg_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg   1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -22px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._svg_1);
		me.divSkin.appendChild(me._information);
		el=me._title=document.createElement('div');
		els=me._title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text Arial";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : calc(325px + 20px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 0%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,26,43,0.588235);';
		hs+='border : 10px solid rgba(0,26,43,0.156863);';
		hs+='border-radius : 40px 0px 40px 0px;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 10px;';
		hs+='overflow: hidden;';
		hs+="text-shadow: 1px 1px #000000;";
		els.setAttribute('style',hs);
		me._title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1 %2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._title.ggUpdateText();
		player.addListener('changenode', function() {
			me._title.ggUpdateText();
		});
		el.appendChild(els);
		me._title.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var_margin') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._title.style.transition='left 0s, top 0s, transform 0s';
				if (me._title.ggCurrentLogicStatePosition == 0) {
					me._title.style.left='15px';
					me._title.style.top='90px';
				}
				else {
					me._title.style.left='15px';
					me._title.style.top='15px';
				}
			}
		}
		me._title.logicBlock_position();
		me._title.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width <= 540))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize(true).height <= 550))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._title.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._title.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._title.style.transition='left 0s, top 0s, transform 0s';
				if (me._title.ggCurrentLogicStateScaling == 0) {
					me._title.ggParameter.sx = 0.8;
					me._title.ggParameter.sy = 0.8;
					me._title.style.transform=parameterToTransform(me._title.ggParameter);
					skin.updateSize(me._title);
				}
				else if (me._title.ggCurrentLogicStateScaling == 1) {
					me._title.ggParameter.sx = 0.65;
					me._title.ggParameter.sy = 0.65;
					me._title.style.transform=parameterToTransform(me._title.ggParameter);
					skin.updateSize(me._title);
				}
				else {
					me._title.ggParameter.sx = 1;
					me._title.ggParameter.sy = 1;
					me._title.style.transform=parameterToTransform(me._title.ggParameter);
					skin.updateSize(me._title);
				}
			}
		}
		me._title.logicBlock_scaling();
		me._title.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._title);
		el=me._button_background=document.createElement('div');
		el.ggId="button_background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(11,24,47,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px 0px 0px 0px;';
		hs+='bottom : -2px;';
		hs+='cursor : default;';
		hs+='height : 48px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 50%';
		me._button_background.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_background.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).height <= 550))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._button_background.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._button_background.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._button_background.style.transition='right 0s, bottom 0s, width 0s, height 0s, transform 0s';
				if (me._button_background.ggCurrentLogicStatePosition == 0) {
					me._button_background.style.right='0px';
					me._button_background.style.bottom='-5px';
				}
				else {
					me._button_background.style.right='0px';
					me._button_background.style.bottom='-2px';
				}
			}
		}
		me._button_background.logicBlock_position();
		me._button_background.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player._(me.ggUserdata.information) == ""))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._button_background.ggCurrentLogicStateSize != newLogicStateSize) {
				me._button_background.ggCurrentLogicStateSize = newLogicStateSize;
				me._button_background.style.transition='right 0s, bottom 0s, width 0s, height 0s, transform 0s';
				if (me._button_background.ggCurrentLogicStateSize == 0) {
					me._button_background.style.width='50px';
					me._button_background.style.height='48px';
					skin.updateSize(me._button_background);
				}
				else {
					me._button_background.style.width='90px';
					me._button_background.style.height='48px';
					skin.updateSize(me._button_background);
				}
			}
		}
		me._button_background.logicBlock_size();
		me._button_background.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).height <= 550))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._button_background.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._button_background.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._button_background.style.transition='right 0s, bottom 0s, width 0s, height 0s, transform 0s';
				if (me._button_background.ggCurrentLogicStateScaling == 0) {
					me._button_background.ggParameter.sx = 0.8;
					me._button_background.ggParameter.sy = 0.8;
					me._button_background.style.transform=parameterToTransform(me._button_background.ggParameter);
					skin.updateSize(me._button_background);
				}
				else {
					me._button_background.ggParameter.sx = 1;
					me._button_background.ggParameter.sy = 1;
					me._button_background.style.transform=parameterToTransform(me._button_background.ggParameter);
					skin.updateSize(me._button_background);
				}
			}
		}
		me._button_background.logicBlock_scaling();
		me._button_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image=document.createElement('div');
		els=me._ht_info_image__img=document.createElement('img');
		els.className='ggskin ggskin_ht_info_image';
		hs=basePath + 'images/ht_info_image.gif';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='position : absolute;';
		hs+='right : 51px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_image.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width == 0))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_info_image.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_info_image.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_info_image.style.transition='width 0s, height 0s';
				if (me._ht_info_image.ggCurrentLogicStateSize == 0) {
					me._ht_info_image.style.width='32px';
					me._ht_info_image.style.height='32px';
					skin.updateSize(me._ht_info_image);
				}
				else {
					me._ht_info_image.style.width='30px';
					me._ht_info_image.style.height='36px';
					skin.updateSize(me._ht_info_image);
				}
			}
		}
		me._ht_info_image.logicBlock_size();
		me._ht_info_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.information) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image.style.transition='width 0s, height 0s';
				if (me._ht_info_image.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image.style.visibility="hidden";
					me._ht_info_image.ggVisible=false;
				}
				else {
					me._ht_info_image.style.visibility=(Number(me._ht_info_image.style.opacity)>0||!me._ht_info_image.style.opacity)?'inherit':'hidden';
					me._ht_info_image.ggVisible=true;
				}
			}
		}
		me._ht_info_image.logicBlock_visible();
		me._ht_info_image.onclick=function (e) {
			player.setVariableValue('vis_info_popup', true);
		}
		me._ht_info_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_background.appendChild(me._ht_info_image);
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_button_image_normalscreen';
		hs=basePath + 'images/button_image_normalscreen.gif';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="button_image_normalscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style.transition='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.logicBlock_visible();
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_button_image_fullscreen';
		hs=basePath + 'images/button_image_fullscreen.gif';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="button_image_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style.transition='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.logicBlock_visible();
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_fullscreen);
		me._button_background.appendChild(me._button_fullscreen);
		me.divSkin.appendChild(me._button_background);
		me._loader.logicBlock_position();
		me._loader.logicBlock_visible();
		me._screentint_info.logicBlock_visible();
		me._information.logicBlock_scaling();
		me._information.logicBlock_visible();
		me._title.logicBlock_position();
		me._title.logicBlock_scaling();
		me._button_background.logicBlock_position();
		me._button_background.logicBlock_size();
		me._button_background.logicBlock_scaling();
		me._ht_info_image.logicBlock_size();
		me._ht_info_image.logicBlock_visible();
		me._button_image_normalscreen.logicBlock_visible();
		me._button_image_fullscreen.logicBlock_visible();
		player.addListener('activehotspotchanged', function(event) {
			me._button_background.logicBlock_size();
			me._ht_info_image.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			me._loader.logicBlock_position();
			me._screentint_info.logicBlock_visible();
			me._information.logicBlock_visible();
			me._title.logicBlock_position();
			me._button_background.logicBlock_size();
			me._ht_info_image.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			me._loader.logicBlock_position();
			me._screentint_info.logicBlock_visible();
			me._information.logicBlock_visible();
			me._title.logicBlock_position();
			me._button_background.logicBlock_size();
			me._ht_info_image.logicBlock_visible();
		});
		player.addListener('fullscreenenter', function(event) {
			me._button_image_normalscreen.logicBlock_visible();
			me._button_image_fullscreen.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me._button_image_normalscreen.logicBlock_visible();
			me._button_image_fullscreen.logicBlock_visible();
		});
		player.addListener('sizechanged', function(event) {
			me._information.logicBlock_scaling();
			me._title.logicBlock_scaling();
			me._button_background.logicBlock_position();
			me._button_background.logicBlock_scaling();
			me._ht_info_image.logicBlock_size();
		});
		player.addListener('tilesready', function(event) {
			me._loader.logicBlock_visible();
		});
		player.addListener('tilesrequested', function(event) {
			me._loader.logicBlock_visible();
		});
		player.addListener('varchanged_var_margin', function(event) {
			me._loader.logicBlock_position();
			me._title.logicBlock_position();
		});
		player.addListener('varchanged_vis_info_popup', function(event) {
			me._screentint_info.logicBlock_visible();
			me._information.logicBlock_visible();
		});
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};