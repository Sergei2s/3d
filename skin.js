// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: sky_index.ggsk
// Generated 2025-10-03T19:59:44

function pano2vrSkin(player,base) {
	player.addVariable('vis_sounds_splashscreen', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_skin', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_menu', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_languages', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hotspots', 2, true, { ignoreInState: 0  });
	player.addVariable('toggle_audio', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_nodes', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info', 2, false, { ignoreInState: 0  });
	player.addVariable('open_info_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_image_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_video_youtube_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_video_vimeo_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_video_file_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_video_url_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('hide_lottie_index', 1, 0, { ignoreInState: 0  });
	player.addVariable('vis_pdf_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_proj_title', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_gyro', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_url_popup', 2, true, { ignoreInState: 1  });
	player.addVariable('pos_menu_button', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_menu_button_vert', 1, 0, { ignoreInState: 0  });
	player.addVariable('num_button_rows', 1, 1.00, { ignoreInState: 0  });
	player.addVariable('has_categories', 2, false, { ignoreInState: 0  });
	player.addVariable('has_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('sounds_splashscreen_accepted', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_desktop', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_tablet', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone_landscape', 2, false, { ignoreInState: 1  });
	player.addVariable('DoorCounter', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_gallery', 2, false, { ignoreInState: 0  });
	player.addVariable('gallery', 0, "", { ignoreInState: 0  });
	player.addVariable('window', 2, true, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
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
		me._variable_vis_sounds_splashscreen = {};
		me._variable_vis_sounds_splashscreen.ggCurrentLogicState = -1;
		me._variable_vis_sounds_splashscreen.logicBlock = function() {
			var newLogicState_vis_sounds_splashscreen;
			if (
				((player.getHasSounds() == true)) && 
				((player.getSoundsPermitted() != 1)) && 
				((player.getVariableValue('sounds_splashscreen_accepted') == false))
			)
			{
				newLogicState_vis_sounds_splashscreen = 0;
			}
			else {
				newLogicState_vis_sounds_splashscreen = -1;
			}
			if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState != newLogicState_vis_sounds_splashscreen) {
				me._variable_vis_sounds_splashscreen.ggCurrentLogicState = newLogicState_vis_sounds_splashscreen;
				if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_sounds_splashscreen', true);
				}
				else {
					player.setVariableValue('vis_sounds_splashscreen', false);
				}
			}
		}
		me._variable_vis_skin = {};
		me._variable_vis_skin.ggCurrentLogicState = -1;
		me._variable_vis_skin.logicBlock = function() {
			var newLogicState_vis_skin;
			if (
				((player.getVariableValue('vis_pdf_popup') == false)) && 
				((player.getVariableValue('vis_url_popup') == false)) && 
				((player.getVariableValue('vis_phone_info') == false)) && 
				((player.getVariableValue('vis_phone_image') == false)) && 
				((player.getVariableValue('vis_phone_pdf') == false)) && 
				((player.getVariableValue('vis_phone_youtube') == false)) && 
				((player.getVariableValue('vis_phone_vimeo') == false)) && 
				((player.getVariableValue('vis_phone_video_file') == false)) && 
				((player.getVariableValue('vis_phone_video_url') == false)) && 
				((player.getVariableValue('vis_sounds_splashscreen') == false))
			)
			{
				newLogicState_vis_skin = 0;
			}
			else {
				newLogicState_vis_skin = -1;
			}
			if (me._variable_vis_skin.ggCurrentLogicState != newLogicState_vis_skin) {
				me._variable_vis_skin.ggCurrentLogicState = newLogicState_vis_skin;
				if (me._variable_vis_skin.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_skin', true);
				}
				else {
					player.setVariableValue('vis_skin', false);
				}
			}
		}
		me._variable_has_fullscreen = {};
		me._variable_has_fullscreen.ggCurrentLogicState = -1;
		me._variable_has_fullscreen.logicBlock = function() {
			var newLogicState_has_fullscreen;
			if (
				((player.getOS() == 4)) && 
				((player.getOS() != 6))
			)
			{
				newLogicState_has_fullscreen = 0;
			}
			else {
				newLogicState_has_fullscreen = -1;
			}
			if (me._variable_has_fullscreen.ggCurrentLogicState != newLogicState_has_fullscreen) {
				me._variable_has_fullscreen.ggCurrentLogicState = newLogicState_has_fullscreen;
				if (me._variable_has_fullscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('has_fullscreen', false);
				}
				else {
					player.setVariableValue('has_fullscreen', true);
				}
			}
		}
		me._variable_resp_desktop = {};
		me._variable_resp_desktop.ggCurrentLogicState = -1;
		me._variable_resp_desktop.logicBlock = function() {
			var newLogicState_resp_desktop;
			if (
				((player.getViewerSize(true).width > 1024))
			)
			{
				newLogicState_resp_desktop = 0;
			}
			else {
				newLogicState_resp_desktop = -1;
			}
			if (me._variable_resp_desktop.ggCurrentLogicState != newLogicState_resp_desktop) {
				me._variable_resp_desktop.ggCurrentLogicState = newLogicState_resp_desktop;
				if (me._variable_resp_desktop.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_desktop', true);
				}
				else {
					player.setVariableValue('resp_desktop', false);
				}
			}
		}
		me._variable_resp_tablet = {};
		me._variable_resp_tablet.ggCurrentLogicState = -1;
		me._variable_resp_tablet.logicBlock = function() {
			var newLogicState_resp_tablet;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_tablet = 0;
			}
			else {
				newLogicState_resp_tablet = -1;
			}
			if (me._variable_resp_tablet.ggCurrentLogicState != newLogicState_resp_tablet) {
				me._variable_resp_tablet.ggCurrentLogicState = newLogicState_resp_tablet;
				if (me._variable_resp_tablet.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_tablet', true);
				}
				else {
					player.setVariableValue('resp_tablet', false);
				}
			}
		}
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		me._variable_resp_phone_landscape = {};
		me._variable_resp_phone_landscape.ggCurrentLogicState = -1;
		me._variable_resp_phone_landscape.logicBlock = function() {
			var newLogicState_resp_phone_landscape;
			if (
				((player.getViewerSize(true).height < 800)) && 
				((player.getViewerSize(true).width / player.getViewerSize(true).height > 1)) && 
				((player.getIsMobile() == true))
			)
			{
				newLogicState_resp_phone_landscape = 0;
			}
			else {
				newLogicState_resp_phone_landscape = -1;
			}
			if (me._variable_resp_phone_landscape.ggCurrentLogicState != newLogicState_resp_phone_landscape) {
				me._variable_resp_phone_landscape.ggCurrentLogicState = newLogicState_resp_phone_landscape;
				if (me._variable_resp_phone_landscape.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone_landscape', true);
				}
				else {
					player.setVariableValue('resp_phone_landscape', false);
				}
			}
		}
		el=me._timer_2=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=3000;
		el.ggId="Timer   2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 39px;';
		hs+='top : 12px;';
		hs+='visibility : hidden;';
		hs+='width : 307px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_2.ggIsActive=function() {
			return (me._timer_2.ggTimestamp + me._timer_2.ggTimeout) >= skin.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_2.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_2.style.transition='';
				if (me._timer_2.ggCurrentLogicStateVisible == 0) {
					me._timer_2.style.visibility=(Number(me._timer_2.style.opacity)>0||!me._timer_2.style.opacity)?'inherit':'hidden';
					me._timer_2.ggVisible=true;
				}
				else {
					me._timer_2.style.visibility="hidden";
					me._timer_2.ggVisible=false;
				}
			}
		}
		me._timer_2.logicBlock_visible();
		me._timer_2.ggCurrentLogicStateVisible = -1;
		me._timer_2.ggUpdateConditionTimer=function () {
			me._timer_2.logicBlock_visible();
		}
		me._timer_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_title=document.createElement('div');
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text monster-add-shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		hs+='font-family: \"Montserrat\", sans-serif; text-shadow: 2px 2px 6px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 23px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._node_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._node_title.ggUpdateText();
		});
		el.appendChild(els);
		me._node_title.ggIsActive=function() {
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
		me._node_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_proj_title') == true)) && 
				((player.getVariableValue('resp_phone') == false)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title.style.transition='opacity 500ms ease 0ms';
				if (me._node_title.ggCurrentLogicStateVisible == 0) {
					me._node_title.style.visibility=(Number(me._node_title.style.opacity)>0||!me._node_title.style.opacity)?'inherit':'hidden';
					me._node_title.ggVisible=true;
				}
				else {
					me._node_title.style.visibility="hidden";
					me._node_title.ggVisible=false;
				}
			}
		}
		me._node_title.logicBlock_visible();
		me._node_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._node_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._node_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._node_title.style.transition='opacity 500ms ease 0ms';
				if (me._node_title.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._node_title.style.opacity == 0.0) { me._node_title.style.visibility="hidden"; } }, 505);
					me._node_title.style.opacity=0;
				}
				else {
					me._node_title.style.visibility=me._node_title.ggVisible?'inherit':'hidden';
					me._node_title.style.opacity=1;
				}
			}
		}
		me._node_title.logicBlock_alpha();
		me._node_title.ggUpdatePosition=function (useTransition) {
		}
		me._timer_2.appendChild(me._node_title);
		me.divSkin.appendChild(me._timer_2);
		el=me.__0=document.createElement('div');
		el.ggId="\u0428\u043a\u0430\u0444\u044b \u043d\u0430 \u043a\u0443\u0445\u043d\u0435";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__0);
		el=me.__=document.createElement('div');
		el.ggId="\u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0434\u0432\u0435\u0440\u0438";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 20px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : 56px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '5');
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.onclick=function (e) {
			player.openNext("{node8}","");
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__);
		el=me._text_otkritie_dveri=document.createElement('div');
		els=me._text_otkritie_dveri__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text otkritie dveri";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 15px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_otkritie_dveri.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_otkritie_dveri.ggUpdateText();
		player.addListener('activehotspotchanged', function() {
			me._text_otkritie_dveri.ggUpdateText();
		});
		el.appendChild(els);
		me._text_otkritie_dveri.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_otkritie_dveri.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['text_otkritie_dveri'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_otkritie_dveri.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_otkritie_dveri.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_otkritie_dveri.style.transition='';
				if (me._text_otkritie_dveri.ggCurrentLogicStateVisible == 0) {
					me._text_otkritie_dveri.style.visibility=(Number(me._text_otkritie_dveri.style.opacity)>0||!me._text_otkritie_dveri.style.opacity)?'inherit':'hidden';
					me._text_otkritie_dveri.ggVisible=true;
				}
				else {
					me._text_otkritie_dveri.style.visibility="hidden";
					me._text_otkritie_dveri.ggVisible=false;
				}
			}
		}
		me._text_otkritie_dveri.logicBlock_visible();
		me._text_otkritie_dveri.onmouseenter=function (e) {
			me.elementMouseOver['text_otkritie_dveri']=true;
			me._text_otkritie_dveri.logicBlock_visible();
		}
		me._text_otkritie_dveri.onmouseleave=function (e) {
			me.elementMouseOver['text_otkritie_dveri']=false;
			me._text_otkritie_dveri.logicBlock_visible();
		}
		me._text_otkritie_dveri.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._text_otkritie_dveri);
		el=me._shkaf_tolet=document.createElement('div');
		el.ggId="shkaf_tolet";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 45px;';
		hs+='position : absolute;';
		hs+='top : 132px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._shkaf_tolet.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._shkaf_tolet.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._shkaf_tolet);
		el=me._menu=document.createElement('div');
		el.ggId="menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -250px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('vis_menu') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('vis_skin') == false)) && 
				((player.getVariableValue('vis_menu') == false))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._menu.style.transition='left 500ms ease-out 0ms, top 500ms ease-out 0ms, width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._menu.ggCurrentLogicStatePosition == 0) {
					me._menu.style.left='0px';
					me._menu.style.top='0px';
				}
				else if (me._menu.ggCurrentLogicStatePosition == 1) {
					me._menu.style.left='-250px';
					me._menu.style.top='0px';
				}
				else {
					me._menu.style.left='-250px';
					me._menu.style.top='0px';
				}
			}
		}
		me._menu.logicBlock_position();
		me._menu.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone_landscape') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._menu.ggCurrentLogicStateSize != newLogicStateSize) {
				me._menu.ggCurrentLogicStateSize = newLogicStateSize;
				me._menu.style.transition='left 500ms ease-out 0ms, top 500ms ease-out 0ms, width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._menu.ggCurrentLogicStateSize == 0) {
					me._menu.style.width='100%';
					me._menu.style.height='100%';
					skin.updateSize(me._menu);
				}
				else {
					me._menu.style.width='240px';
					me._menu.style.height='100%';
					skin.updateSize(me._menu);
				}
			}
		}
		me._menu.logicBlock_size();
		me._menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu.style.transition='left 500ms ease-out 0ms, top 500ms ease-out 0ms, width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._menu.ggCurrentLogicStateVisible == 0) {
					me._menu.style.visibility=(Number(me._menu.style.opacity)>0||!me._menu.style.opacity)?'inherit':'hidden';
					me._menu.ggVisible=true;
				}
				else {
					me._menu.style.visibility="hidden";
					me._menu.ggVisible=false;
				}
			}
		}
		me._menu.logicBlock_visible();
		me._menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_menu') == true)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu.style.transition='left 500ms ease-out 0ms, top 500ms ease-out 0ms, width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._menu.ggCurrentLogicStateAlpha == 0) {
					me._menu.style.visibility=me._menu.ggVisible?'inherit':'hidden';
					me._menu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._menu.style.opacity == 0.0) { me._menu.style.visibility="hidden"; } }, 505);
					me._menu.style.opacity=0;
				}
			}
		}
		me._menu.logicBlock_alpha();
		me._menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_bg=document.createElement('div');
		el.ggId="menu_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,13,21,0.843137);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_bg.ggIsActive=function() {
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
		me._menu_bg.ggUpdatePosition=function (useTransition) {
		}
		me._menu.appendChild(me._menu_bg);
		el=me._button_container=document.createElement('div');
		el.ggId="button_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 188px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_container.ggIsActive=function() {
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
		me._button_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._gyro_toggle=document.createElement('div');
		el.ggId="gyro_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro_toggle.ggIsActive=function() {
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
		me._gyro_toggle.onclick=function (e) {
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._gyro_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._giro=document.createElement('div');
		els=me._giro__img=document.createElement('img');
		els.className='ggskin ggskin_giro';
		hs=basePath + 'images/giro.gif';
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
		el.ggId="giro";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._giro.ggIsActive=function() {
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
		me._giro.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getGyroAvailable() == true)) && 
				((player.getVariableValue('opt_gyro') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._giro.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._giro.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._giro.style.transition='';
				if (me._giro.ggCurrentLogicStateVisible == 0) {
					me._giro.style.visibility=(Number(me._giro.style.opacity)>0||!me._giro.style.opacity)?'inherit':'hidden';
					me._giro.ggVisible=true;
				}
				else {
					me._giro.style.visibility="hidden";
					me._giro.ggVisible=false;
				}
			}
		}
		me._giro.logicBlock_visible();
		me._giro.ggUpdatePosition=function (useTransition) {
		}
		me._gyro_toggle.appendChild(me._giro);
		me._button_container.appendChild(me._gyro_toggle);
		el=me._btn_vr=document.createElement('div');
		els=me._btn_vr__img=document.createElement('img');
		els.className='ggskin ggskin_btn_vr';
		hs=basePath + 'images/btn_vr.gif';
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
		el.ggId="btn_vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 6px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_vr.ggIsActive=function() {
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
		me._btn_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_vr.style.transition='';
				if (me._btn_vr.ggCurrentLogicStateVisible == 0) {
					me._btn_vr.style.visibility=(Number(me._btn_vr.style.opacity)>0||!me._btn_vr.style.opacity)?'inherit':'hidden';
					me._btn_vr.ggVisible=true;
				}
				else {
					me._btn_vr.style.visibility="hidden";
					me._btn_vr.ggVisible=false;
				}
			}
		}
		me._btn_vr.logicBlock_visible();
		me._btn_vr.onclick=function (e) {
			player.enterVR();
		}
		me._btn_vr.ggUpdatePosition=function (useTransition) {
		}
		me._button_container.appendChild(me._btn_vr);
		el=me._btn_languages=document.createElement('div');
		els=me._btn_languages__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZpZXdCb3g9IjAgMCA0MCA0MCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLjIsMzYuN2MtMC42LDAtMS4xLTAuMi0xLjQtMC42Yy0wLjMtMC40LTAuMy0wLjktMC4xLTEuNmw2LjEtMTYuMmMwLjItMC40LDAuNS0wLjgsMC45LTEuMSAgYzAuNS0wLjMsMC45LTAuNSwxLjQtMC41YzAuNSwwLDAuOSwwLjIsMS40LDAuNWMwLjUsMC4zLDAuOCwwLjcsMC45LDEuMWw2LjIsMTYuMWMwLjIsMC42LDAuMiwxLjItMC4xLDEuNiAgYy0wLjMsMC40LTAuOCwwLjctMS41LDAuN2MtMC4zLDAtMC42LTAuMS0wLjktMC4zcy0wLjUtMC40'+
			'LTAuNi0wLjhsLTEuNC00LjJoLThsLTEuNSw0LjJjLTAuMSwwLjMtMC4zLDAuNS0wLjYsMC43ICBDMjIuOCwzNi42LDIyLjUsMzYuNywyMi4yLDM2Ljd6IE0yNi4xLDI4LjVIMzJsLTIuOS04LjFIMjlMMjYuMSwyOC41eiBNMTIsMTQuMmMwLjQsMC44LDAuOSwxLjUsMS40LDIuMWMwLjUsMC43LDEuMSwxLjQsMS43LDIuMSAgYzEuMi0xLjMsMi4zLTIuNywzLjEtNC4xYzAuOC0xLjQsMS41LTIuOSwyLjEtNC40SDMuM2MtMC41LDAtMC45LTAuMi0xLjItMC41UzEuNyw4LjgsMS43LDguM2MwLTAuNSwwLjItMC45LDAuNS0xLjIgIHMwLjctMC41LDEuMi0wLjVoMTBWNWMwLTAuNSwwLjItMC45LDAuNS'+
			'0xLjJjMC4zLTAuMywwLjctMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41YzAuMywwLjMsMC41LDAuNywwLjUsMS4ydjEuN2gxMCAgYzAuNSwwLDAuOSwwLjIsMS4yLDAuNWMwLjMsMC4zLDAuNSwwLjcsMC41LDEuMmMwLDAuNS0wLjIsMC45LTAuNSwxLjJjLTAuMywwLjMtMC43LDAuNS0xLjIsMC41aC0zLjFjLTAuNiwxLjktMS40LDMuOC0yLjQsNS43ICBjLTEsMS44LTIuMiwzLjYtMy43LDUuM2w0LDQuMWwtMS4yLDMuNEwxNSwyMy4zbC03LjIsNy4yQzcuNSwzMC44LDcuMSwzMSw2LjcsMzFjLTAuNCwwLTAuOC0wLjItMS4xLTAuNUM1LjIsMzAuMiw1LDI5LjgsNSwyOS40ICBjMC0wLjUsMC4y'+
			'LTAuOCwwLjUtMS4xbDcuMy03LjNjLTAuNy0wLjktMS40LTEuNy0yLTIuNmMtMC42LTAuOS0xLjItMS44LTEuOC0yLjdDOC43LDE1LDguNywxNC40LDksMTRjMC4zLTAuNCwwLjgtMC43LDEuNS0wLjcgIGMwLjMsMCwwLjYsMC4xLDAuOSwwLjNDMTEuNiwxMy44LDExLjksMTQsMTIsMTQuMnoiLz4KPC9zdmc+Cg==';
		me._btn_languages__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_languages__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZpZXdCb3g9IjAgMCA0MCA0MCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNkZmUwMzY7fQo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLjIsMzYuN2MtMC42LDAtMS4xLTAuMi0xLjQtMC42Yy0wLjMtMC40LTAuMy0wLjktMC4xLTEuNmw2LjEtMTYuMmMwLjItMC40LDAuNS0wLjgsMC45LTEuMSAgYzAuNS0wLjMsMC45LTAuNSwxLjQtMC41YzAuNSwwLDAuOSwwLjIsMS40LDAuNWMwLjUsMC4zLDAuOCwwLjcsMC45LDEuMWw2LjIsMTYuMWMwLjIsMC42LDAuMiwxLjItMC4xLDEuNiAgYy0wLjMsMC40LTAuOCwwLjctMS41LDAuN2MtMC4zLDAtMC42LTAuMS0wLjktMC4zcy0wLjUtMC40'+
			'LTAuNi0wLjhsLTEuNC00LjJoLThsLTEuNSw0LjJjLTAuMSwwLjMtMC4zLDAuNS0wLjYsMC43ICBDMjIuOCwzNi42LDIyLjUsMzYuNywyMi4yLDM2Ljd6IE0yNi4xLDI4LjVIMzJsLTIuOS04LjFIMjlMMjYuMSwyOC41eiBNMTIsMTQuMmMwLjQsMC44LDAuOSwxLjUsMS40LDIuMWMwLjUsMC43LDEuMSwxLjQsMS43LDIuMSAgYzEuMi0xLjMsMi4zLTIuNywzLjEtNC4xYzAuOC0xLjQsMS41LTIuOSwyLjEtNC40SDMuM2MtMC41LDAtMC45LTAuMi0xLjItMC41UzEuNyw4LjgsMS43LDguM2MwLTAuNSwwLjItMC45LDAuNS0xLjIgIHMwLjctMC41LDEuMi0wLjVoMTBWNWMwLTAuNSwwLjItMC45LDAuNS'+
			'0xLjJjMC4zLTAuMywwLjctMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41YzAuMywwLjMsMC41LDAuNywwLjUsMS4ydjEuN2gxMCAgYzAuNSwwLDAuOSwwLjIsMS4yLDAuNWMwLjMsMC4zLDAuNSwwLjcsMC41LDEuMmMwLDAuNS0wLjIsMC45LTAuNSwxLjJjLTAuMywwLjMtMC43LDAuNS0xLjIsMC41aC0zLjFjLTAuNiwxLjktMS40LDMuOC0yLjQsNS43ICBjLTEsMS44LTIuMiwzLjYtMy43LDUuM2w0LDQuMWwtMS4yLDMuNEwxNSwyMy4zbC03LjIsNy4yQzcuNSwzMC44LDcuMSwzMSw2LjcsMzFjLTAuNCwwLTAuOC0wLjItMS4xLTAuNUM1LjIsMzAuMiw1LDI5LjgsNSwyOS40ICBjMC0wLjUsMC4y'+
			'LTAuOCwwLjUtMS4xbDcuMy03LjNjLTAuNy0wLjktMS40LTEuNy0yLTIuNmMtMC42LTAuOS0xLjItMS44LTEuOC0yLjdDOC43LDE1LDguNywxNC40LDksMTRjMC4zLTAuNCwwLjgtMC43LDEuNS0wLjcgIGMwLjMsMCwwLjYsMC4xLDAuOSwwLjNDMTEuNiwxMy44LDExLjksMTQsMTIsMTQuMnoiLz4KPC9zdmc+Cg==';
		me._btn_languages__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_languages";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_languages.ggIsActive=function() {
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
		me._btn_languages.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_languages.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_languages.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_languages.style.transition='';
				if (me._btn_languages.ggCurrentLogicStateVisible == 0) {
					me._btn_languages.style.visibility=(Number(me._btn_languages.style.opacity)>0||!me._btn_languages.style.opacity)?'inherit':'hidden';
					me._btn_languages.ggVisible=true;
				}
				else {
					me._btn_languages.style.visibility="hidden";
					me._btn_languages.ggVisible=false;
				}
			}
		}
		me._btn_languages.logicBlock_visible();
		me._btn_languages.onclick=function (e) {
			player.setVariableValue('vis_languages', !player.getVariableValue('vis_languages'));
		}
		me._btn_languages.onmouseenter=function (e) {
			me._btn_languages__img.style.visibility='hidden';
			me._btn_languages__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_languages']=true;
		}
		me._btn_languages.onmouseleave=function (e) {
			me._btn_languages__img.style.visibility='inherit';
			me._btn_languages__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_languages']=false;
		}
		me._btn_languages.ggUpdatePosition=function (useTransition) {
		}
		me._button_container.appendChild(me._btn_languages);
		el=me._hotspots_toggle=document.createElement('div');
		el.ggId="hotspots_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots_toggle.ggIsActive=function() {
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
		me._hotspots_toggle.onclick=function (e) {
			if (
				(
					((player.getPointHotspotIds().length > 0))
				)
			) {
				player.setVariableValue('vis_hotspots', !player.getVariableValue('vis_hotspots'));
			}
		}
		me._hotspots_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspots_on=document.createElement('div');
		el.ggId="hotspots_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots_on.ggIsActive=function() {
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
		me._hotspots_on.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_on=document.createElement('div');
		els=me._hs_on__img=document.createElement('img');
		els.className='ggskin ggskin_hs_on';
		hs=basePath + 'images/hs_on.gif';
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
		el.ggId="hs_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_on.ggIsActive=function() {
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
		me._hs_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == false)) && 
				((player.getPointHotspotIds().length > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_on.style.transition='';
				if (me._hs_on.ggCurrentLogicStateVisible == 0) {
					me._hs_on.style.visibility=(Number(me._hs_on.style.opacity)>0||!me._hs_on.style.opacity)?'inherit':'hidden';
					me._hs_on.ggVisible=true;
				}
				else {
					me._hs_on.style.visibility="hidden";
					me._hs_on.ggVisible=false;
				}
			}
		}
		me._hs_on.logicBlock_visible();
		me._hs_on.ggUpdatePosition=function (useTransition) {
		}
		me._hotspots_on.appendChild(me._hs_on);
		me._hotspots_toggle.appendChild(me._hotspots_on);
		el=me._hotspots_off=document.createElement('div');
		el.ggId="hotspots_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots_off.ggIsActive=function() {
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
		me._hotspots_off.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_off=document.createElement('div');
		els=me._hs_off__img=document.createElement('img');
		els.className='ggskin ggskin_hs_off';
		hs=basePath + 'images/hs_off.gif';
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
		el.ggId="hs_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_off.ggIsActive=function() {
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
		me._hs_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getPointHotspotIds().length == 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_off.style.transition='';
				if (me._hs_off.ggCurrentLogicStateVisible == 0) {
					me._hs_off.style.visibility="hidden";
					me._hs_off.ggVisible=false;
				}
				else {
					me._hs_off.style.visibility=(Number(me._hs_off.style.opacity)>0||!me._hs_off.style.opacity)?'inherit':'hidden';
					me._hs_off.ggVisible=true;
				}
			}
		}
		me._hs_off.logicBlock_visible();
		me._hs_off.ggUpdatePosition=function (useTransition) {
		}
		me._hotspots_off.appendChild(me._hs_off);
		me._hotspots_toggle.appendChild(me._hotspots_off);
		me._button_container.appendChild(me._hotspots_toggle);
		el=me._audio_toggle=document.createElement('div');
		el.ggId="audio_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._audio_toggle.ggIsActive=function() {
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
		me._audio_toggle.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasSounds() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._audio_toggle.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._audio_toggle.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._audio_toggle.style.transition='';
				if (me._audio_toggle.ggCurrentLogicStateVisible == 0) {
					me._audio_toggle.style.visibility=(Number(me._audio_toggle.style.opacity)>0||!me._audio_toggle.style.opacity)?'inherit':'hidden';
					me._audio_toggle.ggVisible=true;
				}
				else {
					me._audio_toggle.style.visibility="hidden";
					me._audio_toggle.ggVisible=false;
				}
			}
		}
		me._audio_toggle.logicBlock_visible();
		me._audio_toggle.onclick=function (e) {
			player.toggleMuted("_all");
			player.setVariableValue('toggle_audio', !player.getVariableValue('toggle_audio'));
		}
		me._audio_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._sound_off=document.createElement('div');
		els=me._sound_off__img=document.createElement('img');
		els.className='ggskin ggskin_sound_off';
		hs=basePath + 'images/sound_off.gif';
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
		el.ggId="sound_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_off.ggIsActive=function() {
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
		me._sound_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sound_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sound_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sound_off.style.transition='';
				if (me._sound_off.ggCurrentLogicStateVisible == 0) {
					me._sound_off.style.visibility="hidden";
					me._sound_off.ggVisible=false;
				}
				else {
					me._sound_off.style.visibility=(Number(me._sound_off.style.opacity)>0||!me._sound_off.style.opacity)?'inherit':'hidden';
					me._sound_off.ggVisible=true;
				}
			}
		}
		me._sound_off.logicBlock_visible();
		me._sound_off.ggUpdatePosition=function (useTransition) {
		}
		me._audio_toggle.appendChild(me._sound_off);
		el=me._sound_on=document.createElement('div');
		els=me._sound_on__img=document.createElement('img');
		els.className='ggskin ggskin_sound_on';
		hs=basePath + 'images/sound_on.gif';
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
		el.ggId="sound_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_on.ggIsActive=function() {
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
		me._sound_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sound_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sound_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sound_on.style.transition='';
				if (me._sound_on.ggCurrentLogicStateVisible == 0) {
					me._sound_on.style.visibility=(Number(me._sound_on.style.opacity)>0||!me._sound_on.style.opacity)?'inherit':'hidden';
					me._sound_on.ggVisible=true;
				}
				else {
					me._sound_on.style.visibility="hidden";
					me._sound_on.ggVisible=false;
				}
			}
		}
		me._sound_on.logicBlock_visible();
		me._sound_on.ggUpdatePosition=function (useTransition) {
		}
		me._audio_toggle.appendChild(me._sound_on);
		me._button_container.appendChild(me._audio_toggle);
		el=me._fullscreen_toggle=document.createElement('div');
		el.ggId="fullscreen_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_toggle.ggIsActive=function() {
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
		me._fullscreen_toggle.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_toggle.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_toggle.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_toggle.style.transition='';
				if (me._fullscreen_toggle.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_toggle.style.visibility=(Number(me._fullscreen_toggle.style.opacity)>0||!me._fullscreen_toggle.style.opacity)?'inherit':'hidden';
					me._fullscreen_toggle.ggVisible=true;
				}
				else {
					me._fullscreen_toggle.style.visibility="hidden";
					me._fullscreen_toggle.ggVisible=false;
				}
			}
		}
		me._fullscreen_toggle.logicBlock_visible();
		me._fullscreen_toggle.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._fullscreen_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs=basePath + 'images/image_4.gif';
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
		el.ggId="Image   4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4.ggIsActive=function() {
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
		me._image_4.logicBlock_visible = function() {
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
			if (me._image_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_4.style.transition='';
				if (me._image_4.ggCurrentLogicStateVisible == 0) {
					me._image_4.style.visibility=(Number(me._image_4.style.opacity)>0||!me._image_4.style.opacity)?'inherit':'hidden';
					me._image_4.ggVisible=true;
				}
				else {
					me._image_4.style.visibility="hidden";
					me._image_4.ggVisible=false;
				}
			}
		}
		me._image_4.logicBlock_visible();
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_toggle.appendChild(me._image_4);
		el=me._fullscreen_enter=document.createElement('div');
		els=me._fullscreen_enter__img=document.createElement('img');
		els.className='ggskin ggskin_fullscreen_enter';
		hs=basePath + 'images/fullscreen_enter.gif';
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
		el.ggId="fullscreen_enter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_enter.ggIsActive=function() {
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
		me._fullscreen_enter.logicBlock_visible = function() {
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
			if (me._fullscreen_enter.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_enter.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_enter.style.transition='';
				if (me._fullscreen_enter.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_enter.style.visibility="hidden";
					me._fullscreen_enter.ggVisible=false;
				}
				else {
					me._fullscreen_enter.style.visibility=(Number(me._fullscreen_enter.style.opacity)>0||!me._fullscreen_enter.style.opacity)?'inherit':'hidden';
					me._fullscreen_enter.ggVisible=true;
				}
			}
		}
		me._fullscreen_enter.logicBlock_visible();
		me._fullscreen_enter.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_toggle.appendChild(me._fullscreen_enter);
		me._button_container.appendChild(me._fullscreen_toggle);
		me._menu.appendChild(me._button_container);
		el=me._languages_scroller=document.createElement('div');
		els=me._languages_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 47px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='width : 199px;';
		hs+="";
		els.setAttribute('style',hs);
		me._languages_scroller.ggScrollByX = function(diffX) {
			if(!me._languages_scroller.ggHorScrollVisible || diffX == 0 || me._languages_scroller.ggHPercentVisible >= 1.0) return;
			me._languages_scroller.ggScrollPosX = (me._languages_scroller__horScrollFg.offsetLeft + diffX);
			me._languages_scroller.ggScrollPosX = Math.max(me._languages_scroller.ggScrollPosX, 0);
			me._languages_scroller.ggScrollPosX = Math.min(me._languages_scroller.ggScrollPosX, me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__horScrollFg.style.left = me._languages_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosX / (me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__content.style.left = -(Math.round((me._languages_scroller.ggContentWidth * (1.0 - me._languages_scroller.ggHPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentLeftOffset + 'px';
			me._languages_scroller.ggScrollPosXPercent = (me._languages_scroller__horScrollFg.offsetLeft / me._languages_scroller__horScrollBg.offsetWidth);
		}
		me._languages_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._languages_scroller.ggHorScrollVisible || diffX == 0 || me._languages_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._languages_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._languages_scroller.ggScrollPosX >= me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth)) {
					me._languages_scroller.ggScrollPosX = Math.min(me._languages_scroller.ggScrollPosX, me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._languages_scroller.ggScrollPosX <= 0)) {
					me._languages_scroller.ggScrollPosX = Math.max(me._languages_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._languages_scroller__horScrollFg.style.left = me._languages_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosX / (me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__content.style.left = -(Math.round((me._languages_scroller.ggContentWidth * (1.0 - me._languages_scroller.ggHPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentLeftOffset + 'px';
			me._languages_scroller.ggScrollPosXPercent = (me._languages_scroller__horScrollFg.offsetLeft / me._languages_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._languages_scroller.ggScrollByY = function(diffY) {
			if(!me._languages_scroller.ggVertScrollVisible || diffY == 0 || me._languages_scroller.ggVPercentVisible >= 1.0) return;
			me._languages_scroller.ggScrollPosY = (me._languages_scroller__vertScrollFg.offsetTop + diffY);
			me._languages_scroller.ggScrollPosY = Math.max(me._languages_scroller.ggScrollPosY, 0);
			me._languages_scroller.ggScrollPosY = Math.min(me._languages_scroller.ggScrollPosY, me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__vertScrollFg.style.top = me._languages_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosY / (me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__content.style.top = -(Math.round((me._languages_scroller.ggContentHeight * (1.0 - me._languages_scroller.ggVPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentTopOffset + 'px';
			me._languages_scroller.ggScrollPosYPercent = (me._languages_scroller__vertScrollFg.offsetTop / me._languages_scroller__vertScrollBg.offsetHeight);
		}
		me._languages_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._languages_scroller.ggVertScrollVisible || diffY == 0 || me._languages_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._languages_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._languages_scroller.ggScrollPosY >= me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight)) {
					me._languages_scroller.ggScrollPosY = Math.min(me._languages_scroller.ggScrollPosY, me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._languages_scroller.ggScrollPosY <= 0)) {
					me._languages_scroller.ggScrollPosY = Math.max(me._languages_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._languages_scroller__vertScrollFg.style.top = me._languages_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosY / (me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__content.style.top = -(Math.round((me._languages_scroller.ggContentHeight * (1.0 - me._languages_scroller.ggVPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentTopOffset + 'px';
			me._languages_scroller.ggScrollPosYPercent = (me._languages_scroller__vertScrollFg.offsetTop / me._languages_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._languages_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._languages_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._languages_scroller.ggHPercentVisible);
					me._languages_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._languages_scroller.clientWidth - (me._languages_scroller.ggVertScrollVisible ? 6 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._languages_scroller.clientWidth - (me._languages_scroller.ggVertScrollVisible ? 6 : 0))) * me._languages_scroller.ggHPercentVisible);
					me._languages_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._languages_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._languages_scroller.ggVPercentVisible);
					me._languages_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._languages_scroller.clientHeight - (me._languages_scroller.ggHorScrollVisible ? 6 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._languages_scroller.clientHeight - (me._languages_scroller.ggHorScrollVisible ? 6 : 0))) * me._languages_scroller.ggVPercentVisible);
					me._languages_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._languages_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._languages_scroller.ggDragInertiaX *= 0.96;
				me._languages_scroller.ggDragInertiaY *= 0.96;
				me._languages_scroller.ggScrollByX(me._languages_scroller.ggDragInertiaX);
				me._languages_scroller.ggScrollByY(me._languages_scroller.ggDragInertiaY);
				if (Math.abs(me._languages_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._languages_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._languages_scroller__content.onmouseup = null;
			me._languages_scroller__content.onmousemove = null;
			me._languages_scroller__content.ontouchend = null;
			me._languages_scroller__content.ontouchmove = null;
			me._languages_scroller__content.onpointerup = null;
			me._languages_scroller__content.onpointermove = null;
			setTimeout(function() { me._languages_scroller.ggIsDragging = false; }, 100);
		}
		me._languages_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._languages_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._languages_scroller.ggDragStartY) > 10) me._languages_scroller.ggIsDragging = true;
			var diffX = (eventX - me._languages_scroller.ggDragLastX) * me._languages_scroller.ggHPercentVisible;
			var diffY = (eventY - me._languages_scroller.ggDragLastY) * me._languages_scroller.ggVPercentVisible;
			me._languages_scroller.ggDragInertiaX = -diffX;
			me._languages_scroller.ggDragInertiaY = -diffY;
			me._languages_scroller.ggDragLastX = eventX;
			me._languages_scroller.ggDragLastY = eventY;
			me._languages_scroller.ggScrollByX(-diffX);
			me._languages_scroller.ggScrollByY(-diffY);
		}
		me._languages_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._languages_scroller.ggDragLastX = me._languages_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._languages_scroller.ggDragLastY = me._languages_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._languages_scroller__content.onmouseup = me._languages_scroller__content.mousetouchend;
			me._languages_scroller__content.ontouchend = me._languages_scroller__content.mousetouchend;
			me._languages_scroller__content.onmousemove = me._languages_scroller__content.mousetouchmove;
			me._languages_scroller__content.ontouchmove = me._languages_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._languages_scroller__content.onpointerup = me._languages_scroller__content.ontouchend;
				me._languages_scroller__content.onpointermove = me._languages_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._languages_scroller__content.mousetouchstart;
		els.ontouchstart = me._languages_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._languages_scroller__content.mousetouchstart;
		}
		elVertScrollBg = me._languages_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 6px; height: 48px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._languages_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 6px; height: 48px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._languages_scroller.ggScrollPosY = 0;
		me._languages_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._languages_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._languages_scroller.ggDragInertiaY *= 0.96;
					me._languages_scroller.ggScrollByY(me._languages_scroller.ggDragInertiaY);
					if (Math.abs(me._languages_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._languages_scroller.ggDragLastY;
				me._languages_scroller.ggDragInertiaY = diffY;
				me._languages_scroller.ggDragLastY = e.clientY;
				me._languages_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._languages_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._languages_scroller.ggDragInertiaY *= 0.96;
					me._languages_scroller.ggScrollByY(me._languages_scroller.ggDragInertiaY);
					if (Math.abs(me._languages_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._languages_scroller.ggDragLastY;
				me._languages_scroller.ggDragInertiaY = diffY;
				me._languages_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._languages_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._languages_scroller.ggScrollHeight;
			if (e.offsetY < me._languages_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._languages_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._languages_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._languages_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._languages_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._languages_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._languages_scroller.ggScrollByYSmooth(30 * me._languages_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._languages_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 6px; height: 6px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="languages_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 65px;';
		hs+='height : calc(100% - 85px);';
		hs+='left : 20px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 205px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_scroller.ggIsActive=function() {
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
		me._languages_scroller.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('num_button_rows') > Number("1")))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._languages_scroller.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._languages_scroller.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._languages_scroller.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me._languages_scroller.ggCurrentLogicStatePosition == 0) {
					me._languages_scroller.style.left='20px';
					me._languages_scroller.style.bottom='105px';
				}
				else {
					me._languages_scroller.style.left='20px';
					me._languages_scroller.style.bottom='65px';
				}
			}
		}
		me._languages_scroller.logicBlock_position();
		me._languages_scroller.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('num_button_rows') > Number("1")))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._languages_scroller.ggCurrentLogicStateSize != newLogicStateSize) {
				me._languages_scroller.ggCurrentLogicStateSize = newLogicStateSize;
				me._languages_scroller.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me._languages_scroller.ggCurrentLogicStateSize == 0) {
					me._languages_scroller.style.width='200px';
					me._languages_scroller.style.height='calc(100% - 125px)';
					skin.updateSize(me._languages_scroller);
				}
				else {
					me._languages_scroller.style.width='205px';
					me._languages_scroller.style.height='calc(100% - 85px)';
					skin.updateSize(me._languages_scroller);
				}
			}
		}
		me._languages_scroller.logicBlock_size();
		me._languages_scroller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_languages') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._languages_scroller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._languages_scroller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._languages_scroller.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me._languages_scroller.ggCurrentLogicStateVisible == 0) {
					me._languages_scroller.style.visibility=(Number(me._languages_scroller.style.opacity)>0||!me._languages_scroller.style.opacity)?'inherit':'hidden';
					me._languages_scroller.ggVisible=true;
				}
				else {
					me._languages_scroller.style.visibility="hidden";
					me._languages_scroller.ggVisible=false;
				}
			}
		}
		me._languages_scroller.logicBlock_visible();
		me._languages_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 6;
				if (contentHeight < containerHeight) {
					this.ggContent.style.bottom = (this.ggHorScrollVisible ? 6 : 0) + 'px';
					this.ggContent.style.top = '';
					this.ggContent.style.marginBottom = '0px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if ((me._languages_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 6) || (!me._languages_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._languages_scroller__vertScrollBg.style.visibility = 'inherit';
					me._languages_scroller__vertScrollFg.style.visibility = 'inherit';
					me._languages_scroller.ggVertScrollVisible = true;
				} else {
					me._languages_scroller__vertScrollBg.style.visibility = 'hidden';
					me._languages_scroller__vertScrollFg.style.visibility = 'hidden';
					me._languages_scroller.ggVertScrollVisible = false;
				}
				if(me._languages_scroller.ggVertScrollVisible) {
					me._languages_scroller.ggAvailableWidth = me._languages_scroller.clientWidth - 6;
					if (me._languages_scroller.ggHorScrollVisible) {
						me._languages_scroller.ggAvailableHeight = me._languages_scroller.clientHeight - 6;
						me._languages_scroller.ggAvailableHeightWithScale = me._languages_scroller.getBoundingClientRect().height - me._languages_scroller__vertScrollBg.getBoundingClientRect().width;
						me._languages_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._languages_scroller.ggAvailableHeight = me._languages_scroller.clientHeight;
						me._languages_scroller.ggAvailableHeightWithScale = me._languages_scroller.getBoundingClientRect().height;
						me._languages_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._languages_scroller__vertScrollBg.style.height = me._languages_scroller.ggAvailableHeight + 'px';
					me._languages_scroller.ggVPercentVisible = contentHeight != 0 ? me._languages_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._languages_scroller.ggVPercentVisible > 1.0) me._languages_scroller.ggVPercentVisible = 1.0;
					me._languages_scroller.ggScrollHeight =  Math.round(me._languages_scroller__vertScrollBg.offsetHeight * me._languages_scroller.ggVPercentVisible);
					me._languages_scroller__vertScrollFg.style.height = me._languages_scroller.ggScrollHeight + 'px';
					me._languages_scroller.ggScrollPosY = me._languages_scroller.ggScrollPosYPercent * me._languages_scroller.ggAvailableHeight;
					me._languages_scroller.ggScrollPosY = Math.min(me._languages_scroller.ggScrollPosY, me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
					me._languages_scroller__vertScrollFg.style.top = me._languages_scroller.ggScrollPosY + 'px';
					if (me._languages_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._languages_scroller.ggScrollPosY / (me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
						me._languages_scroller__content.style.top = -(Math.round((me._languages_scroller.ggContentHeight * (1.0 - me._languages_scroller.ggVPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._languages_scroller.ggAvailableWidth = me._languages_scroller.clientWidth;
					me._languages_scroller.ggScrollPosY = 0;
					me._languages_scroller.ggScrollPosYPercent = 0.0;
					me._languages_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._languages_scroller.ggHorScrollVisible || vertScrollWasVisible != me._languages_scroller.ggVertScrollVisible) {
					skin.updateSize(me._languages_scroller);
					me._languages_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._languages_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._languages_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 200;
		el.ggHeight = 24;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggUpdate = function(filter) {
			if(me._languages_cloner.ggUpdating == true) return;
			me._languages_cloner.ggUpdating = true;
			var el=me._languages_cloner;
			var curNumCols = 0;
			curNumCols = me._languages_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && false) {
				me._languages_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._languages_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._languages_cloner.ggNumFilterPassed = el.ggTranslations.length;
			for (var i = 0; i < el.ggTranslations.length; i++) {
				var cItem = el.ggTranslations[i];
				var nodeId = {};
				nodeId['tag'] = cItem.langCode;
				nodeId['title'] = cItem.langName;
				if (!keepCloning || i < me._languages_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (-row * me._languages_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._languages_cloner.ggWidth) + 'px';
				parameter.width=me._languages_cloner.ggWidth + 'px';
				parameter.height=me._languages_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_languages_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._languages_cloner.ggNodeCount = me._languages_cloner.ggNumFilterPassed;
			me._languages_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._languages_cloner.parentNode && me._languages_cloner.parentNode.classList.contains('ggskin_subelement') && me._languages_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._languages_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTranslations = [];
		el.ggId="languages_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_cloner.ggIsActive=function() {
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
		me._languages_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._languages_cloner.childNodes.length; i++) {
				var child=me._languages_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._languages_cloner.ggUpdatePosition=function (useTransition) {
			me._languages_cloner.ggUpdate();
		}
		me._languages_scroller__content.appendChild(me._languages_cloner);
		me._menu.appendChild(me._languages_scroller);
		el=me._nodes_menu_phone_landscape=document.createElement('div');
		el.ggId="nodes_menu_phone_landscape";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 70px;';
		hs+='height : 155px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodes_menu_phone_landscape.ggIsActive=function() {
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
		me._nodes_menu_phone_landscape.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) || 
				((player.getVariableValue('vis_languages') == true)) || 
				((player.getVariableValue('resp_phone_landscape') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_nodes') == true)) || 
				((player.getVariableValue('has_categories') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nodes_menu_phone_landscape.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nodes_menu_phone_landscape.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nodes_menu_phone_landscape.style.transition='';
				if (me._nodes_menu_phone_landscape.ggCurrentLogicStateVisible == 0) {
					me._nodes_menu_phone_landscape.style.visibility="hidden";
					me._nodes_menu_phone_landscape.ggVisible=false;
				}
				else if (me._nodes_menu_phone_landscape.ggCurrentLogicStateVisible == 1) {
					me._nodes_menu_phone_landscape.style.visibility=(Number(me._nodes_menu_phone_landscape.style.opacity)>0||!me._nodes_menu_phone_landscape.style.opacity)?'inherit':'hidden';
					me._nodes_menu_phone_landscape.ggVisible=true;
				}
				else {
					me._nodes_menu_phone_landscape.style.visibility="hidden";
					me._nodes_menu_phone_landscape.ggVisible=false;
				}
			}
		}
		me._nodes_menu_phone_landscape.logicBlock_visible();
		me._nodes_menu_phone_landscape.ggUpdatePosition=function (useTransition) {
		}
		el=me._nodes_scroller_pl=document.createElement('div');
		els=me._nodes_scroller_pl__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 154px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 214px;';
		hs+="";
		els.setAttribute('style',hs);
		me._nodes_scroller_pl.ggScrollByX = function(diffX) {
			if(!me._nodes_scroller_pl.ggHorScrollVisible || diffX == 0 || me._nodes_scroller_pl.ggHPercentVisible >= 1.0) return;
			me._nodes_scroller_pl.ggScrollPosX = (me._nodes_scroller_pl__horScrollFg.offsetLeft + diffX);
			me._nodes_scroller_pl.ggScrollPosX = Math.max(me._nodes_scroller_pl.ggScrollPosX, 0);
			me._nodes_scroller_pl.ggScrollPosX = Math.min(me._nodes_scroller_pl.ggScrollPosX, me._nodes_scroller_pl__horScrollBg.offsetWidth - me._nodes_scroller_pl__horScrollFg.offsetWidth);
			me._nodes_scroller_pl__horScrollFg.style.left = me._nodes_scroller_pl.ggScrollPosX + 'px';
			let percentScrolled = me._nodes_scroller_pl.ggScrollPosX / (me._nodes_scroller_pl__horScrollBg.offsetWidth - me._nodes_scroller_pl__horScrollFg.offsetWidth);
			me._nodes_scroller_pl__content.style.left = -(Math.round((me._nodes_scroller_pl.ggContentWidth * (1.0 - me._nodes_scroller_pl.ggHPercentVisible)) * percentScrolled)) + me._nodes_scroller_pl.ggContentLeftOffset + 'px';
			me._nodes_scroller_pl.ggScrollPosXPercent = (me._nodes_scroller_pl__horScrollFg.offsetLeft / me._nodes_scroller_pl__horScrollBg.offsetWidth);
		}
		me._nodes_scroller_pl.ggScrollByXSmooth = function(diffX) {
			if(!me._nodes_scroller_pl.ggHorScrollVisible || diffX == 0 || me._nodes_scroller_pl.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._nodes_scroller_pl.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._nodes_scroller_pl.ggScrollPosX >= me._nodes_scroller_pl__horScrollBg.offsetWidth - me._nodes_scroller_pl__horScrollFg.offsetWidth)) {
					me._nodes_scroller_pl.ggScrollPosX = Math.min(me._nodes_scroller_pl.ggScrollPosX, me._nodes_scroller_pl__horScrollBg.offsetWidth - me._nodes_scroller_pl__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._nodes_scroller_pl.ggScrollPosX <= 0)) {
					me._nodes_scroller_pl.ggScrollPosX = Math.max(me._nodes_scroller_pl.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._nodes_scroller_pl__horScrollFg.style.left = me._nodes_scroller_pl.ggScrollPosX + 'px';
			let percentScrolled = me._nodes_scroller_pl.ggScrollPosX / (me._nodes_scroller_pl__horScrollBg.offsetWidth - me._nodes_scroller_pl__horScrollFg.offsetWidth);
			me._nodes_scroller_pl__content.style.left = -(Math.round((me._nodes_scroller_pl.ggContentWidth * (1.0 - me._nodes_scroller_pl.ggHPercentVisible)) * percentScrolled)) + me._nodes_scroller_pl.ggContentLeftOffset + 'px';
			me._nodes_scroller_pl.ggScrollPosXPercent = (me._nodes_scroller_pl__horScrollFg.offsetLeft / me._nodes_scroller_pl__horScrollBg.offsetWidth);
			}, 10);
		}
		me._nodes_scroller_pl.ggScrollByY = function(diffY) {
			if(!me._nodes_scroller_pl.ggVertScrollVisible || diffY == 0 || me._nodes_scroller_pl.ggVPercentVisible >= 1.0) return;
			me._nodes_scroller_pl.ggScrollPosY = (me._nodes_scroller_pl__vertScrollFg.offsetTop + diffY);
			me._nodes_scroller_pl.ggScrollPosY = Math.max(me._nodes_scroller_pl.ggScrollPosY, 0);
			me._nodes_scroller_pl.ggScrollPosY = Math.min(me._nodes_scroller_pl.ggScrollPosY, me._nodes_scroller_pl__vertScrollBg.offsetHeight - me._nodes_scroller_pl__vertScrollFg.offsetHeight);
			me._nodes_scroller_pl__vertScrollFg.style.top = me._nodes_scroller_pl.ggScrollPosY + 'px';
			let percentScrolled = me._nodes_scroller_pl.ggScrollPosY / (me._nodes_scroller_pl__vertScrollBg.offsetHeight - me._nodes_scroller_pl__vertScrollFg.offsetHeight);
			me._nodes_scroller_pl__content.style.top = -(Math.round((me._nodes_scroller_pl.ggContentHeight * (1.0 - me._nodes_scroller_pl.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller_pl.ggContentTopOffset + 'px';
			me._nodes_scroller_pl.ggScrollPosYPercent = (me._nodes_scroller_pl__vertScrollFg.offsetTop / me._nodes_scroller_pl__vertScrollBg.offsetHeight);
		}
		me._nodes_scroller_pl.ggScrollByYSmooth = function(diffY) {
			if(!me._nodes_scroller_pl.ggVertScrollVisible || diffY == 0 || me._nodes_scroller_pl.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._nodes_scroller_pl.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._nodes_scroller_pl.ggScrollPosY >= me._nodes_scroller_pl__vertScrollBg.offsetHeight - me._nodes_scroller_pl__vertScrollFg.offsetHeight)) {
					me._nodes_scroller_pl.ggScrollPosY = Math.min(me._nodes_scroller_pl.ggScrollPosY, me._nodes_scroller_pl__vertScrollBg.offsetHeight - me._nodes_scroller_pl__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._nodes_scroller_pl.ggScrollPosY <= 0)) {
					me._nodes_scroller_pl.ggScrollPosY = Math.max(me._nodes_scroller_pl.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._nodes_scroller_pl__vertScrollFg.style.top = me._nodes_scroller_pl.ggScrollPosY + 'px';
			let percentScrolled = me._nodes_scroller_pl.ggScrollPosY / (me._nodes_scroller_pl__vertScrollBg.offsetHeight - me._nodes_scroller_pl__vertScrollFg.offsetHeight);
			me._nodes_scroller_pl__content.style.top = -(Math.round((me._nodes_scroller_pl.ggContentHeight * (1.0 - me._nodes_scroller_pl.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller_pl.ggContentTopOffset + 'px';
			me._nodes_scroller_pl.ggScrollPosYPercent = (me._nodes_scroller_pl__vertScrollFg.offsetTop / me._nodes_scroller_pl__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._nodes_scroller_pl.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._nodes_scroller_pl.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._nodes_scroller_pl.ggHPercentVisible);
					me._nodes_scroller_pl.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._nodes_scroller_pl.clientWidth - (me._nodes_scroller_pl.ggVertScrollVisible ? 6 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._nodes_scroller_pl.clientWidth - (me._nodes_scroller_pl.ggVertScrollVisible ? 6 : 0))) * me._nodes_scroller_pl.ggHPercentVisible);
					me._nodes_scroller_pl.ggScrollByXSmooth(diffX);
				}
			}
			if (me._nodes_scroller_pl.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._nodes_scroller_pl.ggVPercentVisible);
					me._nodes_scroller_pl.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._nodes_scroller_pl.clientHeight - (me._nodes_scroller_pl.ggHorScrollVisible ? 6 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._nodes_scroller_pl.clientHeight - (me._nodes_scroller_pl.ggHorScrollVisible ? 6 : 0))) * me._nodes_scroller_pl.ggVPercentVisible);
					me._nodes_scroller_pl.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._nodes_scroller_pl__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._nodes_scroller_pl.ggDragInertiaX *= 0.96;
				me._nodes_scroller_pl.ggDragInertiaY *= 0.96;
				me._nodes_scroller_pl.ggScrollByX(me._nodes_scroller_pl.ggDragInertiaX);
				me._nodes_scroller_pl.ggScrollByY(me._nodes_scroller_pl.ggDragInertiaY);
				if (Math.abs(me._nodes_scroller_pl.ggDragInertiaX) < 1.0 && Math.abs(me._nodes_scroller_pl.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._nodes_scroller_pl__content.onmouseup = null;
			me._nodes_scroller_pl__content.onmousemove = null;
			me._nodes_scroller_pl__content.ontouchend = null;
			me._nodes_scroller_pl__content.ontouchmove = null;
			me._nodes_scroller_pl__content.onpointerup = null;
			me._nodes_scroller_pl__content.onpointermove = null;
			setTimeout(function() { me._nodes_scroller_pl.ggIsDragging = false; }, 100);
		}
		me._nodes_scroller_pl__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._nodes_scroller_pl.ggDragStartX) > 10 || Math.abs(eventY - me._nodes_scroller_pl.ggDragStartY) > 10) me._nodes_scroller_pl.ggIsDragging = true;
			var diffX = (eventX - me._nodes_scroller_pl.ggDragLastX) * me._nodes_scroller_pl.ggHPercentVisible;
			var diffY = (eventY - me._nodes_scroller_pl.ggDragLastY) * me._nodes_scroller_pl.ggVPercentVisible;
			me._nodes_scroller_pl.ggDragInertiaX = -diffX;
			me._nodes_scroller_pl.ggDragInertiaY = -diffY;
			me._nodes_scroller_pl.ggDragLastX = eventX;
			me._nodes_scroller_pl.ggDragLastY = eventY;
			me._nodes_scroller_pl.ggScrollByX(-diffX);
			me._nodes_scroller_pl.ggScrollByY(-diffY);
		}
		me._nodes_scroller_pl__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._nodes_scroller_pl.ggDragLastX = me._nodes_scroller_pl.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._nodes_scroller_pl.ggDragLastY = me._nodes_scroller_pl.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._nodes_scroller_pl__content.onmouseup = me._nodes_scroller_pl__content.mousetouchend;
			me._nodes_scroller_pl__content.ontouchend = me._nodes_scroller_pl__content.mousetouchend;
			me._nodes_scroller_pl__content.onmousemove = me._nodes_scroller_pl__content.mousetouchmove;
			me._nodes_scroller_pl__content.ontouchmove = me._nodes_scroller_pl__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._nodes_scroller_pl__content.onpointerup = me._nodes_scroller_pl__content.ontouchend;
				me._nodes_scroller_pl__content.onpointermove = me._nodes_scroller_pl__content.ontouchmove;
			}
		}
		els.onmousedown = me._nodes_scroller_pl__content.mousetouchstart;
		els.ontouchstart = me._nodes_scroller_pl__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._nodes_scroller_pl__content.mousetouchstart;
		}
		elHorScrollBg = me._nodes_scroller_pl__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 205px; height: 6px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._nodes_scroller_pl__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 205px; height: 6px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._nodes_scroller_pl.ggScrollPosX = 0;
		me._nodes_scroller_pl.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._nodes_scroller_pl.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._nodes_scroller_pl.ggDragInertiaX *= 0.96;
					me._nodes_scroller_pl.ggScrollByX(me._nodes_scroller_pl.ggDragInertiaX);
					if (Math.abs(me._nodes_scroller_pl.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._nodes_scroller_pl.ggDragLastX;
				me._nodes_scroller_pl.ggDragInertiaX = diffX;
				me._nodes_scroller_pl.ggDragLastX = e.clientX;
				me._nodes_scroller_pl.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._nodes_scroller_pl.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._nodes_scroller_pl.ggDragInertiaX *= 0.96;
					me._nodes_scroller_pl.ggScrollByX(me._nodes_scroller_pl.ggDragInertiaX);
					if (Math.abs(me._nodes_scroller_pl.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._nodes_scroller_pl.ggDragLastX;
				me._nodes_scroller_pl.ggDragInertiaX = diffX;
				me._nodes_scroller_pl.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._nodes_scroller_pl.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._nodes_scroller_pl.ggScrollWidth;
			if (e.offsetX < me._nodes_scroller_pl.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._nodes_scroller_pl.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._nodes_scroller_pl__horScrollBg.getBoundingClientRect();
			var diffX = me._nodes_scroller_pl.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._nodes_scroller_pl.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._nodes_scroller_pl.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._nodes_scroller_pl.ggScrollByXSmooth(30 * me._nodes_scroller_pl.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._nodes_scroller_pl__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 6px; height: 6px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="nodes_scroller_pl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodes_scroller_pl.ggIsActive=function() {
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
		me._nodes_scroller_pl.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._nodes_scroller_pl.ggScrollPosX / me._nodes_scroller_pl.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._nodes_scroller_pl__horScrollBg.style.visibility = 'inherit';
					me._nodes_scroller_pl__horScrollFg.style.visibility = 'inherit';
					me._nodes_scroller_pl.ggHorScrollVisible = true;
				} else {
					me._nodes_scroller_pl__horScrollBg.style.visibility = 'hidden';
					me._nodes_scroller_pl__horScrollFg.style.visibility = 'hidden';
					me._nodes_scroller_pl.ggHorScrollVisible = false;
				}
				if(me._nodes_scroller_pl.ggHorScrollVisible) {
					me._nodes_scroller_pl.ggAvailableHeight = me._nodes_scroller_pl.clientHeight - 6;
					if (me._nodes_scroller_pl.ggVertScrollVisible) {
						me._nodes_scroller_pl.ggAvailableWidth = me._nodes_scroller_pl.clientWidth - 6;
						me._nodes_scroller_pl.ggAvailableWidthWithScale = me._nodes_scroller_pl.getBoundingClientRect().width - me._nodes_scroller_pl__horScrollBg.getBoundingClientRect().height;
					} else {
						me._nodes_scroller_pl.ggAvailableWidth = me._nodes_scroller_pl.clientWidth;
						me._nodes_scroller_pl.ggAvailableWidthWithScale = me._nodes_scroller_pl.getBoundingClientRect().width;
					}
					me._nodes_scroller_pl__horScrollBg.style.width = me._nodes_scroller_pl.ggAvailableWidth + 'px';
					me._nodes_scroller_pl.ggHPercentVisible = contentWidth != 0 ? me._nodes_scroller_pl.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._nodes_scroller_pl.ggHPercentVisible > 1.0) me._nodes_scroller_pl.ggHPercentVisible = 1.0;
					me._nodes_scroller_pl.ggScrollWidth = Math.round(me._nodes_scroller_pl__horScrollBg.offsetWidth * me._nodes_scroller_pl.ggHPercentVisible);
					me._nodes_scroller_pl__horScrollFg.style.width = me._nodes_scroller_pl.ggScrollWidth + 'px';
					me._nodes_scroller_pl.ggScrollPosX = me._nodes_scroller_pl.ggScrollPosXPercent * me._nodes_scroller_pl.ggAvailableWidth;
					me._nodes_scroller_pl.ggScrollPosX = Math.min(me._nodes_scroller_pl.ggScrollPosX, me._nodes_scroller_pl__horScrollBg.offsetWidth - me._nodes_scroller_pl__horScrollFg.offsetWidth);
					me._nodes_scroller_pl__horScrollFg.style.left = me._nodes_scroller_pl.ggScrollPosX + 'px';
					if (me._nodes_scroller_pl.ggHPercentVisible < 1.0) {
						let percentScrolled = me._nodes_scroller_pl.ggScrollPosX / (me._nodes_scroller_pl__horScrollBg.offsetWidth - me._nodes_scroller_pl__horScrollFg.offsetWidth);
						me._nodes_scroller_pl__content.style.left = -(Math.round((me._nodes_scroller_pl.ggContentWidth * (1.0 - me._nodes_scroller_pl.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._nodes_scroller_pl.ggAvailableHeight = me._nodes_scroller_pl.clientHeight;
					me._nodes_scroller_pl.ggScrollPosX = 0;
					me._nodes_scroller_pl.ggScrollPosXPercent = 0.0;
					me._nodes_scroller_pl__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me._nodes_scroller_pl.ggHorScrollVisible || vertScrollWasVisible != me._nodes_scroller_pl.ggVertScrollVisible) {
					skin.updateSize(me._nodes_scroller_pl);
					me._nodes_scroller_pl.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner_pl=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_pl;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 215;
		el.ggHeight = 155;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner_pl.ggUpdating == true) return;
			me._node_cloner_pl.ggUpdating = true;
			var el=me._node_cloner_pl;
			var curNumRows = 0;
			curNumRows = me._node_cloner_pl.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner_pl.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner_pl.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._node_cloner_pl.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner_pl.getFilteredNodes(tourNodes, filter);
			me._node_cloner_pl.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner_pl.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner_pl.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner_pl.ggWidth) + 'px';
				parameter.width=me._node_cloner_pl.ggWidth + 'px';
				parameter.height=me._node_cloner_pl.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_pl_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._node_cloner_pl.ggNodeCount = me._node_cloner_pl.ggNumFilterPassed;
			me._node_cloner_pl.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner_pl.parentNode && me._node_cloner_pl.parentNode.classList.contains('ggskin_subelement') && me._node_cloner_pl.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner_pl.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner_pl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 155px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 215px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner_pl.ggIsActive=function() {
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
		me._node_cloner_pl.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner_pl.childNodes.length; i++) {
				var child=me._node_cloner_pl.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner_pl.ggUpdatePosition=function (useTransition) {
			me._node_cloner_pl.ggUpdate();
		}
		me._nodes_scroller_pl__content.appendChild(me._node_cloner_pl);
		me._nodes_menu_phone_landscape.appendChild(me._nodes_scroller_pl);
		me._menu.appendChild(me._nodes_menu_phone_landscape);
		el=me._nodes_menu=document.createElement('div');
		el.ggId="nodes_menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 155px);';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 205px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodes_menu.ggIsActive=function() {
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
		me._nodes_menu.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('num_button_rows') > Number("1")))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodes_menu.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodes_menu.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodes_menu.style.transition='width 0s, height 0s';
				if (me._nodes_menu.ggCurrentLogicStateSize == 0) {
					me._nodes_menu.style.width='205px';
					me._nodes_menu.style.height='calc(100% - 197px)';
					skin.updateSize(me._nodes_menu);
				}
				else {
					me._nodes_menu.style.width='205px';
					me._nodes_menu.style.height='calc(100% - 155px)';
					skin.updateSize(me._nodes_menu);
				}
			}
		}
		me._nodes_menu.logicBlock_size();
		me._nodes_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) || 
				((player.getVariableValue('vis_languages') == true)) || 
				((player.getVariableValue('resp_phone_landscape') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_nodes') == true)) || 
				((player.getVariableValue('has_categories') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nodes_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nodes_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nodes_menu.style.transition='width 0s, height 0s';
				if (me._nodes_menu.ggCurrentLogicStateVisible == 0) {
					me._nodes_menu.style.visibility="hidden";
					me._nodes_menu.ggVisible=false;
				}
				else if (me._nodes_menu.ggCurrentLogicStateVisible == 1) {
					me._nodes_menu.style.visibility=(Number(me._nodes_menu.style.opacity)>0||!me._nodes_menu.style.opacity)?'inherit':'hidden';
					me._nodes_menu.ggVisible=true;
				}
				else {
					me._nodes_menu.style.visibility="hidden";
					me._nodes_menu.ggVisible=false;
				}
			}
		}
		me._nodes_menu.logicBlock_visible();
		me._nodes_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._nodes_scroller=document.createElement('div');
		els=me._nodes_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 154px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 199px;';
		hs+="";
		els.setAttribute('style',hs);
		me._nodes_scroller.ggScrollByX = function(diffX) {
			if(!me._nodes_scroller.ggHorScrollVisible || diffX == 0 || me._nodes_scroller.ggHPercentVisible >= 1.0) return;
			me._nodes_scroller.ggScrollPosX = (me._nodes_scroller__horScrollFg.offsetLeft + diffX);
			me._nodes_scroller.ggScrollPosX = Math.max(me._nodes_scroller.ggScrollPosX, 0);
			me._nodes_scroller.ggScrollPosX = Math.min(me._nodes_scroller.ggScrollPosX, me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth);
			me._nodes_scroller__horScrollFg.style.left = me._nodes_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._nodes_scroller.ggScrollPosX / (me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth);
			me._nodes_scroller__content.style.left = -(Math.round((me._nodes_scroller.ggContentWidth * (1.0 - me._nodes_scroller.ggHPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentLeftOffset + 'px';
			me._nodes_scroller.ggScrollPosXPercent = (me._nodes_scroller__horScrollFg.offsetLeft / me._nodes_scroller__horScrollBg.offsetWidth);
		}
		me._nodes_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._nodes_scroller.ggHorScrollVisible || diffX == 0 || me._nodes_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._nodes_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._nodes_scroller.ggScrollPosX >= me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth)) {
					me._nodes_scroller.ggScrollPosX = Math.min(me._nodes_scroller.ggScrollPosX, me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._nodes_scroller.ggScrollPosX <= 0)) {
					me._nodes_scroller.ggScrollPosX = Math.max(me._nodes_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._nodes_scroller__horScrollFg.style.left = me._nodes_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._nodes_scroller.ggScrollPosX / (me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth);
			me._nodes_scroller__content.style.left = -(Math.round((me._nodes_scroller.ggContentWidth * (1.0 - me._nodes_scroller.ggHPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentLeftOffset + 'px';
			me._nodes_scroller.ggScrollPosXPercent = (me._nodes_scroller__horScrollFg.offsetLeft / me._nodes_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._nodes_scroller.ggScrollByY = function(diffY) {
			if(!me._nodes_scroller.ggVertScrollVisible || diffY == 0 || me._nodes_scroller.ggVPercentVisible >= 1.0) return;
			me._nodes_scroller.ggScrollPosY = (me._nodes_scroller__vertScrollFg.offsetTop + diffY);
			me._nodes_scroller.ggScrollPosY = Math.max(me._nodes_scroller.ggScrollPosY, 0);
			me._nodes_scroller.ggScrollPosY = Math.min(me._nodes_scroller.ggScrollPosY, me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
			me._nodes_scroller__vertScrollFg.style.top = me._nodes_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._nodes_scroller.ggScrollPosY / (me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
			me._nodes_scroller__content.style.top = -(Math.round((me._nodes_scroller.ggContentHeight * (1.0 - me._nodes_scroller.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentTopOffset + 'px';
			me._nodes_scroller.ggScrollPosYPercent = (me._nodes_scroller__vertScrollFg.offsetTop / me._nodes_scroller__vertScrollBg.offsetHeight);
		}
		me._nodes_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._nodes_scroller.ggVertScrollVisible || diffY == 0 || me._nodes_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._nodes_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._nodes_scroller.ggScrollPosY >= me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight)) {
					me._nodes_scroller.ggScrollPosY = Math.min(me._nodes_scroller.ggScrollPosY, me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._nodes_scroller.ggScrollPosY <= 0)) {
					me._nodes_scroller.ggScrollPosY = Math.max(me._nodes_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._nodes_scroller__vertScrollFg.style.top = me._nodes_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._nodes_scroller.ggScrollPosY / (me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
			me._nodes_scroller__content.style.top = -(Math.round((me._nodes_scroller.ggContentHeight * (1.0 - me._nodes_scroller.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentTopOffset + 'px';
			me._nodes_scroller.ggScrollPosYPercent = (me._nodes_scroller__vertScrollFg.offsetTop / me._nodes_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._nodes_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._nodes_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._nodes_scroller.ggHPercentVisible);
					me._nodes_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._nodes_scroller.clientWidth - (me._nodes_scroller.ggVertScrollVisible ? 4 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._nodes_scroller.clientWidth - (me._nodes_scroller.ggVertScrollVisible ? 4 : 0))) * me._nodes_scroller.ggHPercentVisible);
					me._nodes_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._nodes_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._nodes_scroller.ggVPercentVisible);
					me._nodes_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._nodes_scroller.clientHeight - (me._nodes_scroller.ggHorScrollVisible ? 4 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._nodes_scroller.clientHeight - (me._nodes_scroller.ggHorScrollVisible ? 4 : 0))) * me._nodes_scroller.ggVPercentVisible);
					me._nodes_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._nodes_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._nodes_scroller.ggDragInertiaX *= 0.96;
				me._nodes_scroller.ggDragInertiaY *= 0.96;
				me._nodes_scroller.ggScrollByX(me._nodes_scroller.ggDragInertiaX);
				me._nodes_scroller.ggScrollByY(me._nodes_scroller.ggDragInertiaY);
				if (Math.abs(me._nodes_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._nodes_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._nodes_scroller__content.onmouseup = null;
			me._nodes_scroller__content.onmousemove = null;
			me._nodes_scroller__content.ontouchend = null;
			me._nodes_scroller__content.ontouchmove = null;
			me._nodes_scroller__content.onpointerup = null;
			me._nodes_scroller__content.onpointermove = null;
			setTimeout(function() { me._nodes_scroller.ggIsDragging = false; }, 100);
		}
		me._nodes_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._nodes_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._nodes_scroller.ggDragStartY) > 10) me._nodes_scroller.ggIsDragging = true;
			var diffX = (eventX - me._nodes_scroller.ggDragLastX) * me._nodes_scroller.ggHPercentVisible;
			var diffY = (eventY - me._nodes_scroller.ggDragLastY) * me._nodes_scroller.ggVPercentVisible;
			me._nodes_scroller.ggDragInertiaX = -diffX;
			me._nodes_scroller.ggDragInertiaY = -diffY;
			me._nodes_scroller.ggDragLastX = eventX;
			me._nodes_scroller.ggDragLastY = eventY;
			me._nodes_scroller.ggScrollByX(-diffX);
			me._nodes_scroller.ggScrollByY(-diffY);
		}
		me._nodes_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._nodes_scroller.ggDragLastX = me._nodes_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._nodes_scroller.ggDragLastY = me._nodes_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._nodes_scroller__content.onmouseup = me._nodes_scroller__content.mousetouchend;
			me._nodes_scroller__content.ontouchend = me._nodes_scroller__content.mousetouchend;
			me._nodes_scroller__content.onmousemove = me._nodes_scroller__content.mousetouchmove;
			me._nodes_scroller__content.ontouchmove = me._nodes_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._nodes_scroller__content.onpointerup = me._nodes_scroller__content.ontouchend;
				me._nodes_scroller__content.onpointermove = me._nodes_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._nodes_scroller__content.mousetouchstart;
		els.ontouchstart = me._nodes_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._nodes_scroller__content.mousetouchstart;
		}
		elVertScrollBg = me._nodes_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 4px; height: 403px; background-color: rgba(0,13,21,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._nodes_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 4px; height: 403px; background-color: rgba(0,82,140,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._nodes_scroller.ggScrollPosY = 0;
		me._nodes_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._nodes_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._nodes_scroller.ggDragInertiaY *= 0.96;
					me._nodes_scroller.ggScrollByY(me._nodes_scroller.ggDragInertiaY);
					if (Math.abs(me._nodes_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._nodes_scroller.ggDragLastY;
				me._nodes_scroller.ggDragInertiaY = diffY;
				me._nodes_scroller.ggDragLastY = e.clientY;
				me._nodes_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._nodes_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._nodes_scroller.ggDragInertiaY *= 0.96;
					me._nodes_scroller.ggScrollByY(me._nodes_scroller.ggDragInertiaY);
					if (Math.abs(me._nodes_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._nodes_scroller.ggDragLastY;
				me._nodes_scroller.ggDragInertiaY = diffY;
				me._nodes_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._nodes_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._nodes_scroller.ggScrollHeight;
			if (e.offsetY < me._nodes_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._nodes_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._nodes_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._nodes_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._nodes_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._nodes_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._nodes_scroller.ggScrollByYSmooth(30 * me._nodes_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._nodes_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 4px; height: 4px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="nodes_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 213px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodes_scroller.ggIsActive=function() {
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
		me._nodes_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._nodes_scroller.ggScrollPosY / me._nodes_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._nodes_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 4) || (!me._nodes_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._nodes_scroller__vertScrollBg.style.visibility = 'inherit';
					me._nodes_scroller__vertScrollFg.style.visibility = 'inherit';
					me._nodes_scroller.ggVertScrollVisible = true;
				} else {
					me._nodes_scroller__vertScrollBg.style.visibility = 'hidden';
					me._nodes_scroller__vertScrollFg.style.visibility = 'hidden';
					me._nodes_scroller.ggVertScrollVisible = false;
				}
				if(me._nodes_scroller.ggVertScrollVisible) {
					me._nodes_scroller.ggAvailableWidth = me._nodes_scroller.clientWidth - 4;
					if (me._nodes_scroller.ggHorScrollVisible) {
						me._nodes_scroller.ggAvailableHeight = me._nodes_scroller.clientHeight - 4;
						me._nodes_scroller.ggAvailableHeightWithScale = me._nodes_scroller.getBoundingClientRect().height - me._nodes_scroller__vertScrollBg.getBoundingClientRect().width;
						me._nodes_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._nodes_scroller.ggAvailableHeight = me._nodes_scroller.clientHeight;
						me._nodes_scroller.ggAvailableHeightWithScale = me._nodes_scroller.getBoundingClientRect().height;
						me._nodes_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._nodes_scroller__vertScrollBg.style.height = me._nodes_scroller.ggAvailableHeight + 'px';
					me._nodes_scroller.ggVPercentVisible = contentHeight != 0 ? me._nodes_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._nodes_scroller.ggVPercentVisible > 1.0) me._nodes_scroller.ggVPercentVisible = 1.0;
					me._nodes_scroller.ggScrollHeight =  Math.round(me._nodes_scroller__vertScrollBg.offsetHeight * me._nodes_scroller.ggVPercentVisible);
					me._nodes_scroller__vertScrollFg.style.height = me._nodes_scroller.ggScrollHeight + 'px';
					me._nodes_scroller.ggScrollPosY = me._nodes_scroller.ggScrollPosYPercent * me._nodes_scroller.ggAvailableHeight;
					me._nodes_scroller.ggScrollPosY = Math.min(me._nodes_scroller.ggScrollPosY, me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
					me._nodes_scroller__vertScrollFg.style.top = me._nodes_scroller.ggScrollPosY + 'px';
					if (me._nodes_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._nodes_scroller.ggScrollPosY / (me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
						me._nodes_scroller__content.style.top = -(Math.round((me._nodes_scroller.ggContentHeight * (1.0 - me._nodes_scroller.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._nodes_scroller.ggAvailableWidth = me._nodes_scroller.clientWidth;
					me._nodes_scroller.ggScrollPosY = 0;
					me._nodes_scroller.ggScrollPosYPercent = 0.0;
					me._nodes_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._nodes_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._nodes_scroller.ggHorScrollVisible || vertScrollWasVisible != me._nodes_scroller.ggVertScrollVisible) {
					skin.updateSize(me._nodes_scroller);
					me._nodes_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 200;
		el.ggHeight = 155;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner.ggUpdating == true) return;
			me._node_cloner.ggUpdating = true;
			var el=me._node_cloner;
			var curNumCols = 0;
			curNumCols = me._node_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._node_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner.getFilteredNodes(tourNodes, filter);
			me._node_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner.ggWidth) + 'px';
				parameter.width=me._node_cloner.ggWidth + 'px';
				parameter.height=me._node_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._node_cloner.ggNodeCount = me._node_cloner.ggNumFilterPassed;
			me._node_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner.parentNode && me._node_cloner.parentNode.classList.contains('ggskin_subelement') && me._node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 155px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner.ggIsActive=function() {
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
		me._node_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner.childNodes.length; i++) {
				var child=me._node_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner.ggUpdatePosition=function (useTransition) {
			me._node_cloner.ggUpdate();
		}
		me._nodes_scroller__content.appendChild(me._node_cloner);
		me._nodes_menu.appendChild(me._nodes_scroller);
		me._menu.appendChild(me._nodes_menu);
		el=me._categories_menu_phone_landscape=document.createElement('div');
		el.ggId="categories_menu_phone_landscape";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 70px;';
		hs+='height : 155px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_menu_phone_landscape.ggIsActive=function() {
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
		me._categories_menu_phone_landscape.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_nodes') == true)) || 
				((player.getVariableValue('has_categories') == false)) || 
				((player.getVariableValue('vis_languages') == true)) || 
				((player.getVariableValue('resp_phone_landscape') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._categories_menu_phone_landscape.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._categories_menu_phone_landscape.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._categories_menu_phone_landscape.style.transition='';
				if (me._categories_menu_phone_landscape.ggCurrentLogicStateVisible == 0) {
					me._categories_menu_phone_landscape.style.visibility="hidden";
					me._categories_menu_phone_landscape.ggVisible=false;
				}
				else {
					me._categories_menu_phone_landscape.style.visibility=(Number(me._categories_menu_phone_landscape.style.opacity)>0||!me._categories_menu_phone_landscape.style.opacity)?'inherit':'hidden';
					me._categories_menu_phone_landscape.ggVisible=true;
				}
			}
		}
		me._categories_menu_phone_landscape.logicBlock_visible();
		me._categories_menu_phone_landscape.ggUpdatePosition=function (useTransition) {
		}
		el=me._categories_scroller_pl=document.createElement('div');
		els=me._categories_scroller_pl__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 154px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 214px;';
		hs+="";
		els.setAttribute('style',hs);
		me._categories_scroller_pl.ggScrollByX = function(diffX) {
			if(!me._categories_scroller_pl.ggHorScrollVisible || diffX == 0 || me._categories_scroller_pl.ggHPercentVisible >= 1.0) return;
			me._categories_scroller_pl.ggScrollPosX = (me._categories_scroller_pl__horScrollFg.offsetLeft + diffX);
			me._categories_scroller_pl.ggScrollPosX = Math.max(me._categories_scroller_pl.ggScrollPosX, 0);
			me._categories_scroller_pl.ggScrollPosX = Math.min(me._categories_scroller_pl.ggScrollPosX, me._categories_scroller_pl__horScrollBg.offsetWidth - me._categories_scroller_pl__horScrollFg.offsetWidth);
			me._categories_scroller_pl__horScrollFg.style.left = me._categories_scroller_pl.ggScrollPosX + 'px';
			let percentScrolled = me._categories_scroller_pl.ggScrollPosX / (me._categories_scroller_pl__horScrollBg.offsetWidth - me._categories_scroller_pl__horScrollFg.offsetWidth);
			me._categories_scroller_pl__content.style.left = -(Math.round((me._categories_scroller_pl.ggContentWidth * (1.0 - me._categories_scroller_pl.ggHPercentVisible)) * percentScrolled)) + me._categories_scroller_pl.ggContentLeftOffset + 'px';
			me._categories_scroller_pl.ggScrollPosXPercent = (me._categories_scroller_pl__horScrollFg.offsetLeft / me._categories_scroller_pl__horScrollBg.offsetWidth);
		}
		me._categories_scroller_pl.ggScrollByXSmooth = function(diffX) {
			if(!me._categories_scroller_pl.ggHorScrollVisible || diffX == 0 || me._categories_scroller_pl.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._categories_scroller_pl.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._categories_scroller_pl.ggScrollPosX >= me._categories_scroller_pl__horScrollBg.offsetWidth - me._categories_scroller_pl__horScrollFg.offsetWidth)) {
					me._categories_scroller_pl.ggScrollPosX = Math.min(me._categories_scroller_pl.ggScrollPosX, me._categories_scroller_pl__horScrollBg.offsetWidth - me._categories_scroller_pl__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._categories_scroller_pl.ggScrollPosX <= 0)) {
					me._categories_scroller_pl.ggScrollPosX = Math.max(me._categories_scroller_pl.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._categories_scroller_pl__horScrollFg.style.left = me._categories_scroller_pl.ggScrollPosX + 'px';
			let percentScrolled = me._categories_scroller_pl.ggScrollPosX / (me._categories_scroller_pl__horScrollBg.offsetWidth - me._categories_scroller_pl__horScrollFg.offsetWidth);
			me._categories_scroller_pl__content.style.left = -(Math.round((me._categories_scroller_pl.ggContentWidth * (1.0 - me._categories_scroller_pl.ggHPercentVisible)) * percentScrolled)) + me._categories_scroller_pl.ggContentLeftOffset + 'px';
			me._categories_scroller_pl.ggScrollPosXPercent = (me._categories_scroller_pl__horScrollFg.offsetLeft / me._categories_scroller_pl__horScrollBg.offsetWidth);
			}, 10);
		}
		me._categories_scroller_pl.ggScrollByY = function(diffY) {
			if(!me._categories_scroller_pl.ggVertScrollVisible || diffY == 0 || me._categories_scroller_pl.ggVPercentVisible >= 1.0) return;
			me._categories_scroller_pl.ggScrollPosY = (me._categories_scroller_pl__vertScrollFg.offsetTop + diffY);
			me._categories_scroller_pl.ggScrollPosY = Math.max(me._categories_scroller_pl.ggScrollPosY, 0);
			me._categories_scroller_pl.ggScrollPosY = Math.min(me._categories_scroller_pl.ggScrollPosY, me._categories_scroller_pl__vertScrollBg.offsetHeight - me._categories_scroller_pl__vertScrollFg.offsetHeight);
			me._categories_scroller_pl__vertScrollFg.style.top = me._categories_scroller_pl.ggScrollPosY + 'px';
			let percentScrolled = me._categories_scroller_pl.ggScrollPosY / (me._categories_scroller_pl__vertScrollBg.offsetHeight - me._categories_scroller_pl__vertScrollFg.offsetHeight);
			me._categories_scroller_pl__content.style.top = -(Math.round((me._categories_scroller_pl.ggContentHeight * (1.0 - me._categories_scroller_pl.ggVPercentVisible)) * percentScrolled)) + me._categories_scroller_pl.ggContentTopOffset + 'px';
			me._categories_scroller_pl.ggScrollPosYPercent = (me._categories_scroller_pl__vertScrollFg.offsetTop / me._categories_scroller_pl__vertScrollBg.offsetHeight);
		}
		me._categories_scroller_pl.ggScrollByYSmooth = function(diffY) {
			if(!me._categories_scroller_pl.ggVertScrollVisible || diffY == 0 || me._categories_scroller_pl.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._categories_scroller_pl.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._categories_scroller_pl.ggScrollPosY >= me._categories_scroller_pl__vertScrollBg.offsetHeight - me._categories_scroller_pl__vertScrollFg.offsetHeight)) {
					me._categories_scroller_pl.ggScrollPosY = Math.min(me._categories_scroller_pl.ggScrollPosY, me._categories_scroller_pl__vertScrollBg.offsetHeight - me._categories_scroller_pl__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._categories_scroller_pl.ggScrollPosY <= 0)) {
					me._categories_scroller_pl.ggScrollPosY = Math.max(me._categories_scroller_pl.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._categories_scroller_pl__vertScrollFg.style.top = me._categories_scroller_pl.ggScrollPosY + 'px';
			let percentScrolled = me._categories_scroller_pl.ggScrollPosY / (me._categories_scroller_pl__vertScrollBg.offsetHeight - me._categories_scroller_pl__vertScrollFg.offsetHeight);
			me._categories_scroller_pl__content.style.top = -(Math.round((me._categories_scroller_pl.ggContentHeight * (1.0 - me._categories_scroller_pl.ggVPercentVisible)) * percentScrolled)) + me._categories_scroller_pl.ggContentTopOffset + 'px';
			me._categories_scroller_pl.ggScrollPosYPercent = (me._categories_scroller_pl__vertScrollFg.offsetTop / me._categories_scroller_pl__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._categories_scroller_pl.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._categories_scroller_pl.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._categories_scroller_pl.ggHPercentVisible);
					me._categories_scroller_pl.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._categories_scroller_pl.clientWidth - (me._categories_scroller_pl.ggVertScrollVisible ? 6 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._categories_scroller_pl.clientWidth - (me._categories_scroller_pl.ggVertScrollVisible ? 6 : 0))) * me._categories_scroller_pl.ggHPercentVisible);
					me._categories_scroller_pl.ggScrollByXSmooth(diffX);
				}
			}
			if (me._categories_scroller_pl.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._categories_scroller_pl.ggVPercentVisible);
					me._categories_scroller_pl.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._categories_scroller_pl.clientHeight - (me._categories_scroller_pl.ggHorScrollVisible ? 6 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._categories_scroller_pl.clientHeight - (me._categories_scroller_pl.ggHorScrollVisible ? 6 : 0))) * me._categories_scroller_pl.ggVPercentVisible);
					me._categories_scroller_pl.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._categories_scroller_pl__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._categories_scroller_pl.ggDragInertiaX *= 0.96;
				me._categories_scroller_pl.ggDragInertiaY *= 0.96;
				me._categories_scroller_pl.ggScrollByX(me._categories_scroller_pl.ggDragInertiaX);
				me._categories_scroller_pl.ggScrollByY(me._categories_scroller_pl.ggDragInertiaY);
				if (Math.abs(me._categories_scroller_pl.ggDragInertiaX) < 1.0 && Math.abs(me._categories_scroller_pl.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._categories_scroller_pl__content.onmouseup = null;
			me._categories_scroller_pl__content.onmousemove = null;
			me._categories_scroller_pl__content.ontouchend = null;
			me._categories_scroller_pl__content.ontouchmove = null;
			me._categories_scroller_pl__content.onpointerup = null;
			me._categories_scroller_pl__content.onpointermove = null;
			setTimeout(function() { me._categories_scroller_pl.ggIsDragging = false; }, 100);
		}
		me._categories_scroller_pl__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._categories_scroller_pl.ggDragStartX) > 10 || Math.abs(eventY - me._categories_scroller_pl.ggDragStartY) > 10) me._categories_scroller_pl.ggIsDragging = true;
			var diffX = (eventX - me._categories_scroller_pl.ggDragLastX) * me._categories_scroller_pl.ggHPercentVisible;
			var diffY = (eventY - me._categories_scroller_pl.ggDragLastY) * me._categories_scroller_pl.ggVPercentVisible;
			me._categories_scroller_pl.ggDragInertiaX = -diffX;
			me._categories_scroller_pl.ggDragInertiaY = -diffY;
			me._categories_scroller_pl.ggDragLastX = eventX;
			me._categories_scroller_pl.ggDragLastY = eventY;
			me._categories_scroller_pl.ggScrollByX(-diffX);
			me._categories_scroller_pl.ggScrollByY(-diffY);
		}
		me._categories_scroller_pl__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._categories_scroller_pl.ggDragLastX = me._categories_scroller_pl.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._categories_scroller_pl.ggDragLastY = me._categories_scroller_pl.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._categories_scroller_pl__content.onmouseup = me._categories_scroller_pl__content.mousetouchend;
			me._categories_scroller_pl__content.ontouchend = me._categories_scroller_pl__content.mousetouchend;
			me._categories_scroller_pl__content.onmousemove = me._categories_scroller_pl__content.mousetouchmove;
			me._categories_scroller_pl__content.ontouchmove = me._categories_scroller_pl__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._categories_scroller_pl__content.onpointerup = me._categories_scroller_pl__content.ontouchend;
				me._categories_scroller_pl__content.onpointermove = me._categories_scroller_pl__content.ontouchmove;
			}
		}
		els.onmousedown = me._categories_scroller_pl__content.mousetouchstart;
		els.ontouchstart = me._categories_scroller_pl__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._categories_scroller_pl__content.mousetouchstart;
		}
		elHorScrollBg = me._categories_scroller_pl__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 205px; height: 6px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._categories_scroller_pl__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 205px; height: 6px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._categories_scroller_pl.ggScrollPosX = 0;
		me._categories_scroller_pl.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._categories_scroller_pl.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._categories_scroller_pl.ggDragInertiaX *= 0.96;
					me._categories_scroller_pl.ggScrollByX(me._categories_scroller_pl.ggDragInertiaX);
					if (Math.abs(me._categories_scroller_pl.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._categories_scroller_pl.ggDragLastX;
				me._categories_scroller_pl.ggDragInertiaX = diffX;
				me._categories_scroller_pl.ggDragLastX = e.clientX;
				me._categories_scroller_pl.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._categories_scroller_pl.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._categories_scroller_pl.ggDragInertiaX *= 0.96;
					me._categories_scroller_pl.ggScrollByX(me._categories_scroller_pl.ggDragInertiaX);
					if (Math.abs(me._categories_scroller_pl.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._categories_scroller_pl.ggDragLastX;
				me._categories_scroller_pl.ggDragInertiaX = diffX;
				me._categories_scroller_pl.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._categories_scroller_pl.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._categories_scroller_pl.ggScrollWidth;
			if (e.offsetX < me._categories_scroller_pl.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._categories_scroller_pl.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._categories_scroller_pl__horScrollBg.getBoundingClientRect();
			var diffX = me._categories_scroller_pl.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._categories_scroller_pl.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._categories_scroller_pl.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._categories_scroller_pl.ggScrollByXSmooth(30 * me._categories_scroller_pl.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._categories_scroller_pl__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 6px; height: 6px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="categories_scroller_pl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_scroller_pl.ggIsActive=function() {
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
		me._categories_scroller_pl.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._categories_scroller_pl.ggScrollPosX / me._categories_scroller_pl.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._categories_scroller_pl__horScrollBg.style.visibility = 'inherit';
					me._categories_scroller_pl__horScrollFg.style.visibility = 'inherit';
					me._categories_scroller_pl.ggHorScrollVisible = true;
				} else {
					me._categories_scroller_pl__horScrollBg.style.visibility = 'hidden';
					me._categories_scroller_pl__horScrollFg.style.visibility = 'hidden';
					me._categories_scroller_pl.ggHorScrollVisible = false;
				}
				if(me._categories_scroller_pl.ggHorScrollVisible) {
					me._categories_scroller_pl.ggAvailableHeight = me._categories_scroller_pl.clientHeight - 6;
					if (me._categories_scroller_pl.ggVertScrollVisible) {
						me._categories_scroller_pl.ggAvailableWidth = me._categories_scroller_pl.clientWidth - 6;
						me._categories_scroller_pl.ggAvailableWidthWithScale = me._categories_scroller_pl.getBoundingClientRect().width - me._categories_scroller_pl__horScrollBg.getBoundingClientRect().height;
					} else {
						me._categories_scroller_pl.ggAvailableWidth = me._categories_scroller_pl.clientWidth;
						me._categories_scroller_pl.ggAvailableWidthWithScale = me._categories_scroller_pl.getBoundingClientRect().width;
					}
					me._categories_scroller_pl__horScrollBg.style.width = me._categories_scroller_pl.ggAvailableWidth + 'px';
					me._categories_scroller_pl.ggHPercentVisible = contentWidth != 0 ? me._categories_scroller_pl.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._categories_scroller_pl.ggHPercentVisible > 1.0) me._categories_scroller_pl.ggHPercentVisible = 1.0;
					me._categories_scroller_pl.ggScrollWidth = Math.round(me._categories_scroller_pl__horScrollBg.offsetWidth * me._categories_scroller_pl.ggHPercentVisible);
					me._categories_scroller_pl__horScrollFg.style.width = me._categories_scroller_pl.ggScrollWidth + 'px';
					me._categories_scroller_pl.ggScrollPosX = me._categories_scroller_pl.ggScrollPosXPercent * me._categories_scroller_pl.ggAvailableWidth;
					me._categories_scroller_pl.ggScrollPosX = Math.min(me._categories_scroller_pl.ggScrollPosX, me._categories_scroller_pl__horScrollBg.offsetWidth - me._categories_scroller_pl__horScrollFg.offsetWidth);
					me._categories_scroller_pl__horScrollFg.style.left = me._categories_scroller_pl.ggScrollPosX + 'px';
					if (me._categories_scroller_pl.ggHPercentVisible < 1.0) {
						let percentScrolled = me._categories_scroller_pl.ggScrollPosX / (me._categories_scroller_pl__horScrollBg.offsetWidth - me._categories_scroller_pl__horScrollFg.offsetWidth);
						me._categories_scroller_pl__content.style.left = -(Math.round((me._categories_scroller_pl.ggContentWidth * (1.0 - me._categories_scroller_pl.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._categories_scroller_pl.ggAvailableHeight = me._categories_scroller_pl.clientHeight;
					me._categories_scroller_pl.ggScrollPosX = 0;
					me._categories_scroller_pl.ggScrollPosXPercent = 0.0;
					me._categories_scroller_pl__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me._categories_scroller_pl.ggHorScrollVisible || vertScrollWasVisible != me._categories_scroller_pl.ggVertScrollVisible) {
					skin.updateSize(me._categories_scroller_pl);
					me._categories_scroller_pl.ggUpdatePosition();
				}
			}
		}
		el=me._categories_cloner_pl=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._categories_cloner_pl;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 215;
		el.ggHeight = 155;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._categories_cloner_pl.ggUpdating == true) return;
			me._categories_cloner_pl.ggUpdating = true;
			var el=me._categories_cloner_pl;
			var curNumRows = 0;
			curNumRows = me._categories_cloner_pl.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._categories_cloner_pl.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._categories_cloner_pl.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._categories_cloner_pl.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._categories_cloner_pl.ggNumFilterPassed = 0;
			var firstNode;
			for (var i = 0; i < el.ggTagTable.length; i++) {
				var cItem = el.ggTagTable[i];
				firstNode = '';
				cItem.nodecount = 0;
				for (var j=0; j < tourNodes.length; j++) {
					var nodeData = player.getNodeUserdata(tourNodes[j]);
					if ((nodeData['tags'].indexOf(cItem.tag) != -1) || (cItem.tag=='')) {
						var passed = true;
						if (filter.length > 0) {
							for (var k=0; k < filter.length; k++) {
								if (nodeData['tags'].indexOf(filter[k].trim()) == -1) passed = false;
							}
						}
						if (passed) {
							cItem.nodecount++;
							if (firstNode == '') firstNode = tourNodes[j];
						}
					}
				}
				cItem.firstnode=firstNode;
				if (cItem.nodecount == 0) continue;
				me._categories_cloner_pl.ggNumFilterPassed++;
				var nodeId = {};
				nodeId['tag'] = cItem.tag;
				nodeId['title'] = cItem.title;
				nodeId['description'] = cItem.description;
				nodeId['nodecount'] = cItem.nodecount;
				nodeId['firstnode'] = cItem.firstnode;
				if (!keepCloning || i < me._categories_cloner_pl.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._categories_cloner_pl.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._categories_cloner_pl.ggWidth) + 'px';
				parameter.width=me._categories_cloner_pl.ggWidth + 'px';
				parameter.height=me._categories_cloner_pl.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_categories_cloner_pl_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._categories_cloner_pl.ggNodeCount = me._categories_cloner_pl.ggNumFilterPassed;
			me._categories_cloner_pl.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._categories_cloner_pl.parentNode && me._categories_cloner_pl.parentNode.classList.contains('ggskin_subelement') && me._categories_cloner_pl.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._categories_cloner_pl.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTagTable = [
			];
		el.ggId="categories_cloner_pl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 155px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 215px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_cloner_pl.ggIsActive=function() {
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
		me._categories_cloner_pl.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._categories_cloner_pl.childNodes.length; i++) {
				var child=me._categories_cloner_pl.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._categories_cloner_pl.ggUpdatePosition=function (useTransition) {
			me._categories_cloner_pl.ggUpdate();
		}
		me._categories_scroller_pl__content.appendChild(me._categories_cloner_pl);
		me._categories_menu_phone_landscape.appendChild(me._categories_scroller_pl);
		me._menu.appendChild(me._categories_menu_phone_landscape);
		el=me._categories_menu=document.createElement('div');
		el.ggId="categories_menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 155px);';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 205px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_menu.ggIsActive=function() {
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
		me._categories_menu.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('num_button_rows') > Number("1")))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._categories_menu.ggCurrentLogicStateSize != newLogicStateSize) {
				me._categories_menu.ggCurrentLogicStateSize = newLogicStateSize;
				me._categories_menu.style.transition='width 0s, height 0s';
				if (me._categories_menu.ggCurrentLogicStateSize == 0) {
					me._categories_menu.style.width='205px';
					me._categories_menu.style.height='calc(100% - 197px)';
					skin.updateSize(me._categories_menu);
				}
				else {
					me._categories_menu.style.width='205px';
					me._categories_menu.style.height='calc(100% - 155px)';
					skin.updateSize(me._categories_menu);
				}
			}
		}
		me._categories_menu.logicBlock_size();
		me._categories_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_nodes') == true)) || 
				((player.getVariableValue('has_categories') == false)) || 
				((player.getVariableValue('vis_languages') == true)) || 
				((player.getVariableValue('resp_phone_landscape') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._categories_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._categories_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._categories_menu.style.transition='width 0s, height 0s';
				if (me._categories_menu.ggCurrentLogicStateVisible == 0) {
					me._categories_menu.style.visibility="hidden";
					me._categories_menu.ggVisible=false;
				}
				else {
					me._categories_menu.style.visibility=(Number(me._categories_menu.style.opacity)>0||!me._categories_menu.style.opacity)?'inherit':'hidden';
					me._categories_menu.ggVisible=true;
				}
			}
		}
		me._categories_menu.logicBlock_visible();
		me._categories_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._categories_scroller=document.createElement('div');
		els=me._categories_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 154px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 199px;';
		hs+="";
		els.setAttribute('style',hs);
		me._categories_scroller.ggScrollByX = function(diffX) {
			if(!me._categories_scroller.ggHorScrollVisible || diffX == 0 || me._categories_scroller.ggHPercentVisible >= 1.0) return;
			me._categories_scroller.ggScrollPosX = (me._categories_scroller__horScrollFg.offsetLeft + diffX);
			me._categories_scroller.ggScrollPosX = Math.max(me._categories_scroller.ggScrollPosX, 0);
			me._categories_scroller.ggScrollPosX = Math.min(me._categories_scroller.ggScrollPosX, me._categories_scroller__horScrollBg.offsetWidth - me._categories_scroller__horScrollFg.offsetWidth);
			me._categories_scroller__horScrollFg.style.left = me._categories_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._categories_scroller.ggScrollPosX / (me._categories_scroller__horScrollBg.offsetWidth - me._categories_scroller__horScrollFg.offsetWidth);
			me._categories_scroller__content.style.left = -(Math.round((me._categories_scroller.ggContentWidth * (1.0 - me._categories_scroller.ggHPercentVisible)) * percentScrolled)) + me._categories_scroller.ggContentLeftOffset + 'px';
			me._categories_scroller.ggScrollPosXPercent = (me._categories_scroller__horScrollFg.offsetLeft / me._categories_scroller__horScrollBg.offsetWidth);
		}
		me._categories_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._categories_scroller.ggHorScrollVisible || diffX == 0 || me._categories_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._categories_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._categories_scroller.ggScrollPosX >= me._categories_scroller__horScrollBg.offsetWidth - me._categories_scroller__horScrollFg.offsetWidth)) {
					me._categories_scroller.ggScrollPosX = Math.min(me._categories_scroller.ggScrollPosX, me._categories_scroller__horScrollBg.offsetWidth - me._categories_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._categories_scroller.ggScrollPosX <= 0)) {
					me._categories_scroller.ggScrollPosX = Math.max(me._categories_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._categories_scroller__horScrollFg.style.left = me._categories_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._categories_scroller.ggScrollPosX / (me._categories_scroller__horScrollBg.offsetWidth - me._categories_scroller__horScrollFg.offsetWidth);
			me._categories_scroller__content.style.left = -(Math.round((me._categories_scroller.ggContentWidth * (1.0 - me._categories_scroller.ggHPercentVisible)) * percentScrolled)) + me._categories_scroller.ggContentLeftOffset + 'px';
			me._categories_scroller.ggScrollPosXPercent = (me._categories_scroller__horScrollFg.offsetLeft / me._categories_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._categories_scroller.ggScrollByY = function(diffY) {
			if(!me._categories_scroller.ggVertScrollVisible || diffY == 0 || me._categories_scroller.ggVPercentVisible >= 1.0) return;
			me._categories_scroller.ggScrollPosY = (me._categories_scroller__vertScrollFg.offsetTop + diffY);
			me._categories_scroller.ggScrollPosY = Math.max(me._categories_scroller.ggScrollPosY, 0);
			me._categories_scroller.ggScrollPosY = Math.min(me._categories_scroller.ggScrollPosY, me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
			me._categories_scroller__vertScrollFg.style.top = me._categories_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._categories_scroller.ggScrollPosY / (me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
			me._categories_scroller__content.style.top = -(Math.round((me._categories_scroller.ggContentHeight * (1.0 - me._categories_scroller.ggVPercentVisible)) * percentScrolled)) + me._categories_scroller.ggContentTopOffset + 'px';
			me._categories_scroller.ggScrollPosYPercent = (me._categories_scroller__vertScrollFg.offsetTop / me._categories_scroller__vertScrollBg.offsetHeight);
		}
		me._categories_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._categories_scroller.ggVertScrollVisible || diffY == 0 || me._categories_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._categories_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._categories_scroller.ggScrollPosY >= me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight)) {
					me._categories_scroller.ggScrollPosY = Math.min(me._categories_scroller.ggScrollPosY, me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._categories_scroller.ggScrollPosY <= 0)) {
					me._categories_scroller.ggScrollPosY = Math.max(me._categories_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._categories_scroller__vertScrollFg.style.top = me._categories_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._categories_scroller.ggScrollPosY / (me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
			me._categories_scroller__content.style.top = -(Math.round((me._categories_scroller.ggContentHeight * (1.0 - me._categories_scroller.ggVPercentVisible)) * percentScrolled)) + me._categories_scroller.ggContentTopOffset + 'px';
			me._categories_scroller.ggScrollPosYPercent = (me._categories_scroller__vertScrollFg.offsetTop / me._categories_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._categories_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._categories_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._categories_scroller.ggHPercentVisible);
					me._categories_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._categories_scroller.clientWidth - (me._categories_scroller.ggVertScrollVisible ? 6 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._categories_scroller.clientWidth - (me._categories_scroller.ggVertScrollVisible ? 6 : 0))) * me._categories_scroller.ggHPercentVisible);
					me._categories_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._categories_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._categories_scroller.ggVPercentVisible);
					me._categories_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._categories_scroller.clientHeight - (me._categories_scroller.ggHorScrollVisible ? 6 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._categories_scroller.clientHeight - (me._categories_scroller.ggHorScrollVisible ? 6 : 0))) * me._categories_scroller.ggVPercentVisible);
					me._categories_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._categories_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._categories_scroller.ggDragInertiaX *= 0.96;
				me._categories_scroller.ggDragInertiaY *= 0.96;
				me._categories_scroller.ggScrollByX(me._categories_scroller.ggDragInertiaX);
				me._categories_scroller.ggScrollByY(me._categories_scroller.ggDragInertiaY);
				if (Math.abs(me._categories_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._categories_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._categories_scroller__content.onmouseup = null;
			me._categories_scroller__content.onmousemove = null;
			me._categories_scroller__content.ontouchend = null;
			me._categories_scroller__content.ontouchmove = null;
			me._categories_scroller__content.onpointerup = null;
			me._categories_scroller__content.onpointermove = null;
			setTimeout(function() { me._categories_scroller.ggIsDragging = false; }, 100);
		}
		me._categories_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._categories_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._categories_scroller.ggDragStartY) > 10) me._categories_scroller.ggIsDragging = true;
			var diffX = (eventX - me._categories_scroller.ggDragLastX) * me._categories_scroller.ggHPercentVisible;
			var diffY = (eventY - me._categories_scroller.ggDragLastY) * me._categories_scroller.ggVPercentVisible;
			me._categories_scroller.ggDragInertiaX = -diffX;
			me._categories_scroller.ggDragInertiaY = -diffY;
			me._categories_scroller.ggDragLastX = eventX;
			me._categories_scroller.ggDragLastY = eventY;
			me._categories_scroller.ggScrollByX(-diffX);
			me._categories_scroller.ggScrollByY(-diffY);
		}
		me._categories_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._categories_scroller.ggDragLastX = me._categories_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._categories_scroller.ggDragLastY = me._categories_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._categories_scroller__content.onmouseup = me._categories_scroller__content.mousetouchend;
			me._categories_scroller__content.ontouchend = me._categories_scroller__content.mousetouchend;
			me._categories_scroller__content.onmousemove = me._categories_scroller__content.mousetouchmove;
			me._categories_scroller__content.ontouchmove = me._categories_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._categories_scroller__content.onpointerup = me._categories_scroller__content.ontouchend;
				me._categories_scroller__content.onpointermove = me._categories_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._categories_scroller__content.mousetouchstart;
		els.ontouchstart = me._categories_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._categories_scroller__content.mousetouchstart;
		}
		elVertScrollBg = me._categories_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 6px; height: 399px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._categories_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 6px; height: 399px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._categories_scroller.ggScrollPosY = 0;
		me._categories_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._categories_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._categories_scroller.ggDragInertiaY *= 0.96;
					me._categories_scroller.ggScrollByY(me._categories_scroller.ggDragInertiaY);
					if (Math.abs(me._categories_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._categories_scroller.ggDragLastY;
				me._categories_scroller.ggDragInertiaY = diffY;
				me._categories_scroller.ggDragLastY = e.clientY;
				me._categories_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._categories_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._categories_scroller.ggDragInertiaY *= 0.96;
					me._categories_scroller.ggScrollByY(me._categories_scroller.ggDragInertiaY);
					if (Math.abs(me._categories_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._categories_scroller.ggDragLastY;
				me._categories_scroller.ggDragInertiaY = diffY;
				me._categories_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._categories_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._categories_scroller.ggScrollHeight;
			if (e.offsetY < me._categories_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._categories_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._categories_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._categories_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._categories_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._categories_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._categories_scroller.ggScrollByYSmooth(30 * me._categories_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._categories_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 6px; height: 6px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="categories_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 213px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_scroller.ggIsActive=function() {
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
		me._categories_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._categories_scroller.ggScrollPosY / me._categories_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._categories_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 6) || (!me._categories_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._categories_scroller__vertScrollBg.style.visibility = 'inherit';
					me._categories_scroller__vertScrollFg.style.visibility = 'inherit';
					me._categories_scroller.ggVertScrollVisible = true;
				} else {
					me._categories_scroller__vertScrollBg.style.visibility = 'hidden';
					me._categories_scroller__vertScrollFg.style.visibility = 'hidden';
					me._categories_scroller.ggVertScrollVisible = false;
				}
				if(me._categories_scroller.ggVertScrollVisible) {
					me._categories_scroller.ggAvailableWidth = me._categories_scroller.clientWidth - 6;
					if (me._categories_scroller.ggHorScrollVisible) {
						me._categories_scroller.ggAvailableHeight = me._categories_scroller.clientHeight - 6;
						me._categories_scroller.ggAvailableHeightWithScale = me._categories_scroller.getBoundingClientRect().height - me._categories_scroller__vertScrollBg.getBoundingClientRect().width;
						me._categories_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._categories_scroller.ggAvailableHeight = me._categories_scroller.clientHeight;
						me._categories_scroller.ggAvailableHeightWithScale = me._categories_scroller.getBoundingClientRect().height;
						me._categories_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._categories_scroller__vertScrollBg.style.height = me._categories_scroller.ggAvailableHeight + 'px';
					me._categories_scroller.ggVPercentVisible = contentHeight != 0 ? me._categories_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._categories_scroller.ggVPercentVisible > 1.0) me._categories_scroller.ggVPercentVisible = 1.0;
					me._categories_scroller.ggScrollHeight =  Math.round(me._categories_scroller__vertScrollBg.offsetHeight * me._categories_scroller.ggVPercentVisible);
					me._categories_scroller__vertScrollFg.style.height = me._categories_scroller.ggScrollHeight + 'px';
					me._categories_scroller.ggScrollPosY = me._categories_scroller.ggScrollPosYPercent * me._categories_scroller.ggAvailableHeight;
					me._categories_scroller.ggScrollPosY = Math.min(me._categories_scroller.ggScrollPosY, me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
					me._categories_scroller__vertScrollFg.style.top = me._categories_scroller.ggScrollPosY + 'px';
					if (me._categories_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._categories_scroller.ggScrollPosY / (me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
						me._categories_scroller__content.style.top = -(Math.round((me._categories_scroller.ggContentHeight * (1.0 - me._categories_scroller.ggVPercentVisible)) * percentScrolled)) + me._categories_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._categories_scroller.ggAvailableWidth = me._categories_scroller.clientWidth;
					me._categories_scroller.ggScrollPosY = 0;
					me._categories_scroller.ggScrollPosYPercent = 0.0;
					me._categories_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._categories_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._categories_scroller.ggHorScrollVisible || vertScrollWasVisible != me._categories_scroller.ggVertScrollVisible) {
					skin.updateSize(me._categories_scroller);
					me._categories_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._categories_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._categories_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 200;
		el.ggHeight = 155;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._categories_cloner.ggUpdating == true) return;
			me._categories_cloner.ggUpdating = true;
			var el=me._categories_cloner;
			var curNumCols = 0;
			curNumCols = me._categories_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._categories_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._categories_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._categories_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._categories_cloner.ggNumFilterPassed = 0;
			var firstNode;
			for (var i = 0; i < el.ggTagTable.length; i++) {
				var cItem = el.ggTagTable[i];
				firstNode = '';
				cItem.nodecount = 0;
				for (var j=0; j < tourNodes.length; j++) {
					var nodeData = player.getNodeUserdata(tourNodes[j]);
					if ((nodeData['tags'].indexOf(cItem.tag) != -1) || (cItem.tag=='')) {
						var passed = true;
						if (filter.length > 0) {
							for (var k=0; k < filter.length; k++) {
								if (nodeData['tags'].indexOf(filter[k].trim()) == -1) passed = false;
							}
						}
						if (passed) {
							cItem.nodecount++;
							if (firstNode == '') firstNode = tourNodes[j];
						}
					}
				}
				cItem.firstnode=firstNode;
				if (cItem.nodecount == 0) continue;
				me._categories_cloner.ggNumFilterPassed++;
				var nodeId = {};
				nodeId['tag'] = cItem.tag;
				nodeId['title'] = cItem.title;
				nodeId['description'] = cItem.description;
				nodeId['nodecount'] = cItem.nodecount;
				nodeId['firstnode'] = cItem.firstnode;
				if (!keepCloning || i < me._categories_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._categories_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._categories_cloner.ggWidth) + 'px';
				parameter.width=me._categories_cloner.ggWidth + 'px';
				parameter.height=me._categories_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_categories_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._categories_cloner.ggNodeCount = me._categories_cloner.ggNumFilterPassed;
			me._categories_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._categories_cloner.parentNode && me._categories_cloner.parentNode.classList.contains('ggskin_subelement') && me._categories_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._categories_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTagTable = [
			];
		el.ggId="categories_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 155px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_cloner.ggIsActive=function() {
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
		me._categories_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._categories_cloner.childNodes.length; i++) {
				var child=me._categories_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._categories_cloner.ggUpdatePosition=function (useTransition) {
			me._categories_cloner.ggUpdate();
		}
		me._categories_scroller__content.appendChild(me._categories_cloner);
		me._categories_menu.appendChild(me._categories_scroller);
		me._menu.appendChild(me._categories_menu);
		me.divSkin.appendChild(me._menu);
		el=me._menu_toggle_bg=document.createElement('div');
		el.ggId="menu_toggle_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,13,21,0.843137);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 72px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_bg.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_toggle_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_bg.style.transition='opacity 500ms ease 0ms';
				if (me._menu_toggle_bg.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_bg.style.visibility=(Number(me._menu_toggle_bg.style.opacity)>0||!me._menu_toggle_bg.style.opacity)?'inherit':'hidden';
					me._menu_toggle_bg.ggVisible=true;
				}
				else {
					me._menu_toggle_bg.style.visibility="hidden";
					me._menu_toggle_bg.ggVisible=false;
				}
			}
		}
		me._menu_toggle_bg.logicBlock_visible();
		me._menu_toggle_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_menu') == true)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_toggle_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_toggle_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_toggle_bg.style.transition='opacity 500ms ease 0ms';
				if (me._menu_toggle_bg.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._menu_toggle_bg.style.opacity == 0.0) { me._menu_toggle_bg.style.visibility="hidden"; } }, 505);
					me._menu_toggle_bg.style.opacity=0;
				}
				else {
					me._menu_toggle_bg.style.visibility=me._menu_toggle_bg.ggVisible?'inherit':'hidden';
					me._menu_toggle_bg.style.opacity=1;
				}
			}
		}
		me._menu_toggle_bg.logicBlock_alpha();
		me._menu_toggle_bg.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._menu_toggle_bg);
		el=me._menu_toggle=document.createElement('div');
		el.ggId="menu_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_toggle.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_menu') == true)) && 
				((player.getVariableValue('resp_phone_landscape') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('vis_menu') == true)) && 
				((player.getVariableValue('resp_phone_landscape') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._menu_toggle.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._menu_toggle.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._menu_toggle.style.transition='left 500ms ease-in-out 0ms, top 500ms ease-in-out 0ms, opacity 500ms ease 0ms';
				if (me._menu_toggle.ggCurrentLogicStatePosition == 0) {
					me._menu_toggle.style.left='195px';
					me._menu_toggle.style.top='20px';
				}
				else if (me._menu_toggle.ggCurrentLogicStatePosition == 1) {
					me._menu_toggle.style.left='calc(100% - 52px)';
					me._menu_toggle.style.top='20px';
				}
				else {
					me._menu_toggle.style.left='20px';
					me._menu_toggle.style.top='20px';
				}
			}
		}
		me._menu_toggle.logicBlock_position();
		me._menu_toggle.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('vis_languages') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle.style.transition='left 500ms ease-in-out 0ms, top 500ms ease-in-out 0ms, opacity 500ms ease 0ms';
				if (me._menu_toggle.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle.style.visibility=(Number(me._menu_toggle.style.opacity)>0||!me._menu_toggle.style.opacity)?'inherit':'hidden';
					me._menu_toggle.ggVisible=true;
				}
				else {
					me._menu_toggle.style.visibility="hidden";
					me._menu_toggle.ggVisible=false;
				}
			}
		}
		me._menu_toggle.logicBlock_visible();
		me._menu_toggle.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_toggle.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_toggle.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_toggle.style.transition='left 500ms ease-in-out 0ms, top 500ms ease-in-out 0ms, opacity 500ms ease 0ms';
				if (me._menu_toggle.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._menu_toggle.style.opacity == 0.0) { me._menu_toggle.style.visibility="hidden"; } }, 505);
					me._menu_toggle.style.opacity=0;
				}
				else {
					me._menu_toggle.style.visibility=me._menu_toggle.ggVisible?'inherit':'hidden';
					me._menu_toggle.style.opacity=1;
				}
			}
		}
		me._menu_toggle.logicBlock_alpha();
		me._menu_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._back_to_close_anim=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/back_to_close_anim.json',
			autoplay: false,
			loop: 0,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggLottie.setDirection(-1);
		el.ggLottie.addEventListener('data_ready', function() {
			me._back_to_close_anim.ggLottie.goToAndStop(me._back_to_close_anim.ggLottie.getDuration(true), true);
		});
		el.ggId="back_to_close_anim";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._back_to_close_anim.ggIsActive=function() {
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
		me._back_to_close_anim.onclick=function (e) {
			player.setVariableValue('vis_nodes', false);
			player.setVariableValue('vis_info', false);
			me._back_to_close_anim.ggLottie.loop = 0;
			me._back_to_close_anim.ggLottie.play();
			me._close_to_back_anim.ggLottie.stop();
			player.setVariableValue('hide_lottie_index', Number("4.00"));
			me._menu_toggle_timer.ggTimeout=Number("0.5") * 1000.0;
			me._menu_toggle_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._back_to_close_anim.onmouseenter=function (e) {
			me.elementMouseOver['back_to_close_anim']=true;
			me._menu_toggle_back.logicBlock_visible();
		}
		me._back_to_close_anim.onmouseleave=function (e) {
			me.elementMouseOver['back_to_close_anim']=false;
			me._menu_toggle_back.logicBlock_visible();
		}
		me._back_to_close_anim.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_toggle_back=document.createElement('div');
		els=me._menu_toggle_back__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiNkZmUwMzYiIGZpbGwtb3BhY2l0eT0iMSIgd2lkdGg9IjE4cHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCwwaDI0djI0SDBWMHoiLz4KIDwvZz4KIDxnPgogIDxnPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0xOSwxMUg3LjgzbDQuODgtNC44OGMwLjM5LTAuMzksMC4zOS0xLjAzLDAtMS40MmwwLDBjLTAuMzktMC4zOS0xLjAyLTAuMzktMS40MSwwbC02LjU5LDYuNTkgYy0wLjM5LD'+
			'AuMzktMC4zOSwxLjAyLDAsMS40MWw2LjU5LDYuNTljMC4zOSwwLjM5LDEuMDIsMC4zOSwxLjQxLDBsMCwwYzAuMzktMC4zOSwwLjM5LTEuMDIsMC0xLjQxTDcuODMsMTNIMTkgYzAuNTUsMCwxLTAuNDUsMS0xbDAsMEMyMCwxMS40NSwxOS41NSwxMSwxOSwxMXoiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._menu_toggle_back__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_toggle_back";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_back.ggIsActive=function() {
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
		me._menu_toggle_back.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['back_to_close_anim'] == true)) && 
				((player.getVariableValue('hide_lottie_index') != Number("4")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_back.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_back.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_back.style.transition='';
				if (me._menu_toggle_back.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_back.style.visibility=(Number(me._menu_toggle_back.style.opacity)>0||!me._menu_toggle_back.style.opacity)?'inherit':'hidden';
					me._menu_toggle_back.ggVisible=true;
				}
				else {
					me._menu_toggle_back.style.visibility="hidden";
					me._menu_toggle_back.ggVisible=false;
				}
			}
		}
		me._menu_toggle_back.logicBlock_visible();
		me._menu_toggle_back.ggUpdatePosition=function (useTransition) {
		}
		me._back_to_close_anim.appendChild(me._menu_toggle_back);
		me._menu_toggle.appendChild(me._back_to_close_anim);
		el=me._close_to_back_anim=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/close_to_back_anim.json',
			autoplay: false,
			loop: 0,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggId="close_to_back_anim";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_to_back_anim.ggIsActive=function() {
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
		me._close_to_back_anim.ggUpdatePosition=function (useTransition) {
		}
		me._menu_toggle.appendChild(me._close_to_back_anim);
		el=me._close_to_menu_anim=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/close_to_menu_anim.json',
			autoplay: false,
			loop: 0,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggLottie.setDirection(-1);
		el.ggLottie.addEventListener('data_ready', function() {
			me._close_to_menu_anim.ggLottie.goToAndStop(me._close_to_menu_anim.ggLottie.getDuration(true), true);
		});
		el.ggId="close_to_menu_anim";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_to_menu_anim.ggIsActive=function() {
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
		me._close_to_menu_anim.onclick=function (e) {
			player.setVariableValue('vis_menu', false);
			me._close_to_menu_anim.ggLottie.loop = 0;
			me._close_to_menu_anim.ggLottie.play();
			me._menu_to_close_anim.ggLottie.stop();
			player.setVariableValue('hide_lottie_index', Number("2.00"));
			me._menu_toggle_timer.ggTimeout=Number("0.6") * 1000.0;
			me._menu_toggle_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._close_to_menu_anim.onmouseenter=function (e) {
			me.elementMouseOver['close_to_menu_anim']=true;
			me._menu_toggle_off_active.logicBlock_visible();
		}
		me._close_to_menu_anim.onmouseleave=function (e) {
			me.elementMouseOver['close_to_menu_anim']=false;
			me._menu_toggle_off_active.logicBlock_visible();
		}
		me._close_to_menu_anim.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_toggle_off_active=document.createElement('div');
		els=me._menu_toggle_off_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiNkZmUwMzYiIGZpbGwtb3BhY2l0eT0iMSIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIxOHB4Ij4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPgogPHBhdGggZD0iTTE4LjMgNS43MWMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBMMTIgMTAuNTkgNy4xMSA1LjdjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFMMTAuNTkgMTIgNS43IDE2Ljg5Yy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxLjM5LjM5IDEuMDIuMzkgMS40MSAwTD'+
			'EyIDEzLjQxbDQuODkgNC44OWMuMzkuMzkgMS4wMi4zOSAxLjQxIDAgLjM5LS4zOS4zOS0xLjAyIDAtMS40MUwxMy40MSAxMmw0Ljg5LTQuODljLjM4LS4zOC4zOC0xLjAyIDAtMS40eiIvPgo8L3N2Zz4K';
		me._menu_toggle_off_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_toggle_off_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_off_active.ggIsActive=function() {
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
		me._menu_toggle_off_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_to_menu_anim'] == true)) && 
				((player.getVariableValue('hide_lottie_index') != Number("2"))) && 
				((player.getVariableValue('hide_lottie_index') != Number("3")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_off_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_off_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_off_active.style.transition='';
				if (me._menu_toggle_off_active.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_off_active.style.visibility=(Number(me._menu_toggle_off_active.style.opacity)>0||!me._menu_toggle_off_active.style.opacity)?'inherit':'hidden';
					me._menu_toggle_off_active.ggVisible=true;
				}
				else {
					me._menu_toggle_off_active.style.visibility="hidden";
					me._menu_toggle_off_active.ggVisible=false;
				}
			}
		}
		me._menu_toggle_off_active.logicBlock_visible();
		me._menu_toggle_off_active.ggUpdatePosition=function (useTransition) {
		}
		me._close_to_menu_anim.appendChild(me._menu_toggle_off_active);
		me._menu_toggle.appendChild(me._close_to_menu_anim);
		el=me._menu_to_close_anim=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/menu_to_close_anim.json',
			autoplay: false,
			loop: 0,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggId="menu_to_close_anim";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_to_close_anim.ggIsActive=function() {
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
		me._menu_to_close_anim.onclick=function (e) {
			player.setVariableValue('vis_menu', true);
			me._menu_to_close_anim.ggLottie.loop = 0;
			me._menu_to_close_anim.ggLottie.play();
			me._close_to_menu_anim.ggLottie.goToAndStop(me._close_to_menu_anim.ggLottie.getDuration(true), true);
			player.setVariableValue('hide_lottie_index', Number("1.00"));
			me._menu_toggle_timer.ggTimeout=Number("0.6") * 1000.0;
			me._menu_toggle_timer.ggTimestamp=skin.ggCurrentTime;
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('window', false);
			}
		}
		me._menu_to_close_anim.onmouseenter=function (e) {
			me.elementMouseOver['menu_to_close_anim']=true;
			me._menu_toggle_on_active.logicBlock_visible();
		}
		me._menu_to_close_anim.onmouseleave=function (e) {
			me.elementMouseOver['menu_to_close_anim']=false;
			me._menu_toggle_on_active.logicBlock_visible();
		}
		me._menu_to_close_anim.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_toggle_on_active=document.createElement('div');
		els=me._menu_toggle_on_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiNkZmUwMzYiIGZpbGwtb3BhY2l0eT0iMSIgd2lkdGg9IjE4cHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCwwaDI0djI0SDBWMHoiLz4KIDwvZz4KIDxnPgogIDxnPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik00LDE4aDE2YzAuNTUsMCwxLTAuNDUsMS0xbDAsMGMwLTAuNTUtMC40NS0xLTEtMUg0Yy0wLjU1LDAtMSwwLjQ1LTEsMWwwLDBDMywxNy41NSwzLjQ1LDE4LDQsMTh6IE00LD'+
			'EzaDE2IGMwLjU1LDAsMS0wLjQ1LDEtMWwwLDBjMC0wLjU1LTAuNDUtMS0xLTFINGMtMC41NSwwLTEsMC40NS0xLDFsMCwwQzMsMTIuNTUsMy40NSwxMyw0LDEzeiBNMyw3TDMsN2MwLDAuNTUsMC40NSwxLDEsMWgxNiBjMC41NSwwLDEtMC40NSwxLTFsMCwwYzAtMC41NS0wLjQ1LTEtMS0xSDRDMy40NSw2LDMsNi40NSwzLDd6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._menu_toggle_on_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_toggle_on_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_on_active.ggIsActive=function() {
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
		me._menu_toggle_on_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['menu_to_close_anim'] == true)) && 
				((player.getVariableValue('hide_lottie_index') != Number("1")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_on_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_on_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_on_active.style.transition='';
				if (me._menu_toggle_on_active.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_on_active.style.visibility=(Number(me._menu_toggle_on_active.style.opacity)>0||!me._menu_toggle_on_active.style.opacity)?'inherit':'hidden';
					me._menu_toggle_on_active.ggVisible=true;
				}
				else {
					me._menu_toggle_on_active.style.visibility="hidden";
					me._menu_toggle_on_active.ggVisible=false;
				}
			}
		}
		me._menu_toggle_on_active.logicBlock_visible();
		me._menu_toggle_on_active.ggUpdatePosition=function (useTransition) {
		}
		me._menu_to_close_anim.appendChild(me._menu_toggle_on_active);
		me._menu_toggle.appendChild(me._menu_to_close_anim);
		el=me._menu_toggle_timer=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=5000;
		el.ggId="menu_toggle_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_timer.ggIsActive=function() {
			return (me._menu_toggle_timer.ggTimestamp + me._menu_toggle_timer.ggTimeout) >= skin.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_toggle_timer.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._menu_toggle_timer.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_timer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_timer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_timer.style.transition='';
				if (me._menu_toggle_timer.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_timer.style.visibility="hidden";
					me._menu_toggle_timer.ggVisible=false;
				}
				else {
					me._menu_toggle_timer.style.visibility=(Number(me._menu_toggle_timer.style.opacity)>0||!me._menu_toggle_timer.style.opacity)?'inherit':'hidden';
					me._menu_toggle_timer.ggVisible=true;
				}
			}
		}
		me._menu_toggle_timer.logicBlock_visible();
		me._menu_toggle_timer.ggDeactivate=function () {
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("1")))
				)
			) {
				me._close_to_menu_anim.style.transition='none';
				me._close_to_menu_anim.style.visibility=(Number(me._close_to_menu_anim.style.opacity)>0||!me._close_to_menu_anim.style.opacity)?'inherit':'hidden';
				me._close_to_menu_anim.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("1")))
				)
			) {
				me._menu_to_close_anim.style.transition='none';
				me._menu_to_close_anim.style.visibility='hidden';
				me._menu_to_close_anim.ggVisible=false;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("2")))
				)
			) {
				me._menu_to_close_anim.style.transition='none';
				me._menu_to_close_anim.style.visibility=(Number(me._menu_to_close_anim.style.opacity)>0||!me._menu_to_close_anim.style.opacity)?'inherit':'hidden';
				me._menu_to_close_anim.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("2")))
				)
			) {
				me._close_to_menu_anim.style.transition='none';
				me._close_to_menu_anim.style.visibility='hidden';
				me._close_to_menu_anim.ggVisible=false;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("3")))
				)
			) {
				me._back_to_close_anim.style.transition='none';
				me._back_to_close_anim.style.visibility=(Number(me._back_to_close_anim.style.opacity)>0||!me._back_to_close_anim.style.opacity)?'inherit':'hidden';
				me._back_to_close_anim.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("3")))
				)
			) {
				me._close_to_back_anim.style.transition='none';
				me._close_to_back_anim.style.visibility='hidden';
				me._close_to_back_anim.ggVisible=false;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("4")))
				)
			) {
				me._close_to_menu_anim.style.transition='none';
				me._close_to_menu_anim.style.visibility=(Number(me._close_to_menu_anim.style.opacity)>0||!me._close_to_menu_anim.style.opacity)?'inherit':'hidden';
				me._close_to_menu_anim.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("4")))
				)
			) {
				me._back_to_close_anim.style.transition='none';
				me._back_to_close_anim.style.visibility='hidden';
				me._back_to_close_anim.ggVisible=false;
			}
		}
		me._menu_toggle_timer.ggCurrentLogicStateVisible = -1;
		me._menu_toggle_timer.ggUpdateConditionTimer=function () {
			me._menu_toggle_timer.logicBlock_visible();
		}
		me._menu_toggle_timer.ggUpdatePosition=function (useTransition) {
		}
		me._menu_toggle.appendChild(me._menu_toggle_timer);
		me.divSkin.appendChild(me._menu_toggle);
		el=me._size_show=document.createElement('div');
		el.ggId="size_show";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 3px;';
		hs+='height : 564px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 332px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 100%';
		me._size_show.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._size_show.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('window') == false))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._size_show.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._size_show.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._size_show.style.transition='transform 300ms ease 0ms';
				if (me._size_show.ggCurrentLogicStateScaling == 0) {
					me._size_show.ggParameter.sx = 0.7;
					me._size_show.ggParameter.sy = 0.7;
					me._size_show.style.transform=parameterToTransform(me._size_show.ggParameter);
					setTimeout(function() {skin.updateSize(me._size_show);}, 350);
				}
				else {
					me._size_show.ggParameter.sx = 1;
					me._size_show.ggParameter.sy = 1;
					me._size_show.style.transform=parameterToTransform(me._size_show.ggParameter);
					setTimeout(function() {skin.updateSize(me._size_show);}, 350);
				}
			}
		}
		me._size_show.logicBlock_scaling();
		me._size_show.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_gallery') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._size_show.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._size_show.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._size_show.style.transition='transform 300ms ease 0ms';
				if (me._size_show.ggCurrentLogicStateVisible == 0) {
					me._size_show.style.visibility="hidden";
					me._size_show.ggVisible=false;
				}
				else {
					me._size_show.style.visibility=(Number(me._size_show.style.opacity)>0||!me._size_show.style.opacity)?'inherit':'hidden';
					me._size_show.ggVisible=true;
				}
			}
		}
		me._size_show.logicBlock_visible();
		me._size_show.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle   1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #6f5b28;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 100px;';
		hs+='height : 126px;';
		hs+='left : 186px;';
		hs+='position : absolute;';
		hs+='top : 416px;';
		hs+='visibility : hidden;';
		hs+='width : 125px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
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
		me._rectangle_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('window') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_1.style.transition='';
				if (me._rectangle_1.ggCurrentLogicStateVisible == 0) {
					me._rectangle_1.style.visibility=(Number(me._rectangle_1.style.opacity)>0||!me._rectangle_1.style.opacity)?'inherit':'hidden';
					me._rectangle_1.ggVisible=true;
				}
				else {
					me._rectangle_1.style.visibility="hidden";
					me._rectangle_1.ggVisible=false;
				}
			}
		}
		me._rectangle_1.logicBlock_visible();
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me._size_show.appendChild(me._rectangle_1);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs=basePath + 'images/image_3.gif';
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
		el.ggId="Image   3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : 189px;';
		hs+='position : absolute;';
		hs+='top : 419px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
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
		me._image_3.onclick=function (e) {
			player.setVariableValue('window', true);
			me._menu_toggle_timer.ggTimeout=Number("0.6") * 1000.0;
			me._menu_toggle_timer.ggTimestamp=skin.ggCurrentTime;
			player.setVariableValue('hide_lottie_index', Number("2.00"));
			me._menu_to_close_anim.ggLottie.stop();
			me._close_to_menu_anim.ggLottie.loop = 0;
			me._close_to_menu_anim.ggLottie.play();
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_menu', false);
			}
			if (
				(
					((player.getVariableValue('window') == false))
				)
			) {
				me._timer_1.ggTimeout=Number("5") * 1000.0;
				me._timer_1.ggTimestamp=skin.ggCurrentTime;
			}
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me._size_show.appendChild(me._image_3);
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs=basePath + 'images/image_6.gif';
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
		el.ggId="Image   6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 120px;';
		hs+='left : 189px;';
		hs+='position : absolute;';
		hs+='top : 418px;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_6.ggIsActive=function() {
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
		me._image_6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('window') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_6.style.transition='';
				if (me._image_6.ggCurrentLogicStateVisible == 0) {
					me._image_6.style.visibility=(Number(me._image_6.style.opacity)>0||!me._image_6.style.opacity)?'inherit':'hidden';
					me._image_6.ggVisible=true;
				}
				else {
					me._image_6.style.visibility="hidden";
					me._image_6.ggVisible=false;
				}
			}
		}
		me._image_6.logicBlock_visible();
		me._image_6.onclick=function (e) {
			player.setVariableValue('window', false);
		}
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me._size_show.appendChild(me._image_6);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=5000;
		el.ggId="Timer   1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 120px;';
		hs+='left : 189px;';
		hs+='position : absolute;';
		hs+='top : 420px;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp + me._timer_1.ggTimeout) >= skin.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_1.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style.transition='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
				else {
					me._timer_1.style.visibility="hidden";
					me._timer_1.ggVisible=false;
				}
			}
		}
		me._timer_1.logicBlock_visible();
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_7=document.createElement('div');
		els=me._image_7__img=document.createElement('img');
		els.className='ggskin ggskin_image_7';
		hs=basePath + 'images/image_7.gif';
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
		el.ggId="Image   7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_7.ggIsActive=function() {
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
		me._image_7.ggUpdatePosition=function (useTransition) {
		}
		me._timer_1.appendChild(me._image_7);
		me._size_show.appendChild(me._timer_1);
		el=me._triangle=document.createElement('div');
		el.ggId="triangle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #0e1c2a;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 159px;';
		hs+='height : 12px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 76px;';
		hs+='visibility : hidden;';
		hs+='width : 12px;';
		hs+='pointer-events:auto;';
		hs+='transform: rotate(45deg); transform-origin: 50% 50%;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._triangle.ggIsActive=function() {
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
		me._triangle.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('window') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._triangle.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._triangle.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._triangle.style.transition='opacity 300ms ease 500ms';
				if (me._triangle.ggCurrentLogicStateVisible == 0) {
					me._triangle.style.visibility="hidden";
					me._triangle.ggVisible=false;
				}
				else {
					me._triangle.style.visibility=(Number(me._triangle.style.opacity)>0||!me._triangle.style.opacity)?'inherit':'hidden';
					me._triangle.ggVisible=true;
				}
			}
		}
		me._triangle.logicBlock_visible();
		me._triangle.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('window') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._triangle.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._triangle.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._triangle.style.transition='opacity 300ms ease 500ms';
				if (me._triangle.ggCurrentLogicStateAlpha == 0) {
					me._triangle.style.visibility=me._triangle.ggVisible?'inherit':'hidden';
					me._triangle.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._triangle.style.opacity == 0.0) { me._triangle.style.visibility="hidden"; } }, 805);
					me._triangle.style.opacity=0;
				}
			}
		}
		me._triangle.logicBlock_alpha();
		me._triangle.ggUpdatePosition=function (useTransition) {
		}
		me._size_show.appendChild(me._triangle);
		el=me._obrezayshii=document.createElement('div');
		el.ggId="obrezayshii";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 400px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		hs+='border-radius: 15px; \/* \u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f \u2014 \u043c\u0435\u043d\u044f\u0442\u044c \u043f\u043e \u0432\u043a\u0443\u0441\u0443 *\/ overflow: hidden; \/* \u043e\u0431\u0440\u0435\u0437\u0430\u0435\u0442 \u0432\u0441\u044e \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u0443\u044e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443\/\u0432\u0438\u0434\u0435\u043e \u043f\u043e \u043a\u0440\u0430\u044e *\/ box-sizing: border-box;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._obrezayshii.ggIsActive=function() {
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
		me._obrezayshii.ggUpdatePosition=function (useTransition) {
		}
		el=me._glavnii_container=document.createElement('div');
		el.ggId="glavnii_Container";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 322px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._glavnii_container.ggIsActive=function() {
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
		me._glavnii_container.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('window') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._glavnii_container.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._glavnii_container.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._glavnii_container.style.transition='left 300ms ease 150ms, top 300ms ease 150ms, width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms';
				if (me._glavnii_container.ggCurrentLogicStatePosition == 0) {
					me._glavnii_container.style.left = 'calc(50% - (100% / 2))';
					me._glavnii_container.style.top='420px';
				}
				else {
					me._glavnii_container.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me._glavnii_container.style.top='39px';
				}
			}
		}
		me._glavnii_container.logicBlock_position();
		me._glavnii_container.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('window') == false))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._glavnii_container.ggCurrentLogicStateSize != newLogicStateSize) {
				me._glavnii_container.ggCurrentLogicStateSize = newLogicStateSize;
				me._glavnii_container.style.transition='left 300ms ease 150ms, top 300ms ease 150ms, width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms';
				if (me._glavnii_container.ggCurrentLogicStateSize == 0) {
					me._glavnii_container.style.width='2%';
					me._glavnii_container.style.height='322px';
					me._glavnii_container.style.left = 'calc(50% - (2% / 2))';
					setTimeout(function() {skin.updateSize(me._glavnii_container);}, 250);
				}
				else {
					me._glavnii_container.style.width='100%';
					me._glavnii_container.style.height='322px';
					me._glavnii_container.style.left = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me._glavnii_container);}, 250);
				}
			}
		}
		me._glavnii_container.logicBlock_size();
		me._glavnii_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs=basePath + 'images/image_5.png';
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
		el.ggId="Image   5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 577px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 15px; \/* \u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f \u2014 \u043c\u0435\u043d\u044f\u0442\u044c \u043f\u043e \u0432\u043a\u0443\u0441\u0443 *\/ overflow: hidden; \/* \u043e\u0431\u0440\u0435\u0437\u0430\u0435\u0442 \u0432\u0441\u044e \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u0443\u044e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443\/\u0432\u0438\u0434\u0435\u043e \u043f\u043e \u043a\u0440\u0430\u044e *\/ box-sizing: border-box;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_5.ggIsActive=function() {
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
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me._glavnii_container.appendChild(me._image_5);
		el=me._description=document.createElement('div');
		els=me._description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text custom-scroll";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 342px;';
		hs+='left : 10px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : hidden;';
		hs+='width : 281px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._description.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.information)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._description.ggUpdateText();
		player.addListener('changenode', function() {
			me._description.ggUpdateText();
		});
		el.appendChild(els);
		me._description.ggIsActive=function() {
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
		me._description.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('window') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._description.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._description.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._description.style.transition='opacity 500ms ease 500ms';
				if (me._description.ggCurrentLogicStateVisible == 0) {
					me._description.style.visibility=(Number(me._description.style.opacity)>0||!me._description.style.opacity)?'inherit':'hidden';
					me._description.ggVisible=true;
				}
				else {
					me._description.style.visibility="hidden";
					me._description.ggVisible=false;
				}
			}
		}
		me._description.logicBlock_visible();
		me._description.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('window') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._description.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._description.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._description.style.transition='opacity 500ms ease 500ms';
				if (me._description.ggCurrentLogicStateAlpha == 0) {
					me._description.style.visibility=me._description.ggVisible?'inherit':'hidden';
					me._description.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._description.style.opacity == 0.0) { me._description.style.visibility="hidden"; } }, 1005);
					me._description.style.opacity=0;
				}
			}
		}
		me._description.logicBlock_alpha();
		me._description.ggUpdatePosition=function (useTransition) {
		}
		me._glavnii_container.appendChild(me._description);
		el=me._bg_sound=document.createElement('div');
		el.ggId="bg_sound";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #162b3e;';
		hs+='border : 0px solid #00aaff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 97px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg_sound.ggIsActive=function() {
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
		me._bg_sound.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasSounds() == true)) && 
				((player.getVariableValue('window') == true)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._bg_sound.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._bg_sound.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._bg_sound.style.transition='opacity 500ms ease 400ms, background-color 300ms ease 0ms, border-width 300ms ease 0ms';
				if (me._bg_sound.ggCurrentLogicStateVisible == 0) {
					me._bg_sound.style.visibility=(Number(me._bg_sound.style.opacity)>0||!me._bg_sound.style.opacity)?'inherit':'hidden';
					me._bg_sound.ggVisible=true;
				}
				else {
					me._bg_sound.style.visibility="hidden";
					me._bg_sound.ggVisible=false;
				}
			}
		}
		me._bg_sound.logicBlock_visible();
		me._bg_sound.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('window') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._bg_sound.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._bg_sound.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._bg_sound.style.transition='opacity 500ms ease 400ms, background-color 300ms ease 0ms, border-width 300ms ease 0ms';
				if (me._bg_sound.ggCurrentLogicStateAlpha == 0) {
					me._bg_sound.style.visibility=me._bg_sound.ggVisible?'inherit':'hidden';
					me._bg_sound.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._bg_sound.style.opacity == 0.0) { me._bg_sound.style.visibility="hidden"; } }, 905);
					me._bg_sound.style.opacity=0;
				}
			}
		}
		me._bg_sound.logicBlock_alpha();
		me._bg_sound.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['bg_sound'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._bg_sound.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._bg_sound.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._bg_sound.style.transition='opacity 500ms ease 400ms, background-color 300ms ease 0ms, border-width 300ms ease 0ms';
				if (me._bg_sound.ggCurrentLogicStateBackgroundColor == 0) {
					me._bg_sound.style.backgroundColor="rgba(8,17,24,1)";
				}
				else {
					me._bg_sound.style.backgroundColor="rgba(22,43,62,1)";
				}
			}
		}
		me._bg_sound.logicBlock_backgroundcolor();
		me._bg_sound.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me.elementMouseOver['bg_sound'] == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._bg_sound.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._bg_sound.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._bg_sound.style.transition='opacity 500ms ease 400ms, background-color 300ms ease 0ms, border-width 300ms ease 0ms';
				if (me._bg_sound.ggCurrentLogicStateBorderWidth == 0) {
					me._bg_sound.style.borderWidth="2px";
				}
				else {
					me._bg_sound.style.borderWidth="0px";
				}
			}
		}
		me._bg_sound.logicBlock_borderwidth();
		me._bg_sound.onclick=function (e) {
			player.toggleMuted("_all");
			player.setVariableValue('toggle_audio', !player.getVariableValue('toggle_audio'));
		}
		me._bg_sound.onmouseenter=function (e) {
			me.elementMouseOver['bg_sound']=true;
			me._on.logicBlock_textcolor();
			me._off.logicBlock_textcolor();
			me._bg_sound.logicBlock_backgroundcolor();
			me._bg_sound.logicBlock_borderwidth();
		}
		me._bg_sound.onmouseleave=function (e) {
			me.elementMouseOver['bg_sound']=false;
			me._on.logicBlock_textcolor();
			me._off.logicBlock_textcolor();
			me._bg_sound.logicBlock_backgroundcolor();
			me._bg_sound.logicBlock_borderwidth();
		}
		me._bg_sound.ggUpdatePosition=function (useTransition) {
		}
		el=me._on=document.createElement('div');
		els=me._on__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(178,194,214,1);';
		hs+='height : 20px;';
		hs+='left : 46px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._on.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u0412\u041a\u041b", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on.ggUpdateText();
		el.appendChild(els);
		me._on.ggIsActive=function() {
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
		me._on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._on.style.transition='color 0s';
				if (me._on.ggCurrentLogicStateVisible == 0) {
					me._on.style.visibility=(Number(me._on.style.opacity)>0||!me._on.style.opacity)?'inherit':'hidden';
					me._on.ggVisible=true;
				}
				else {
					me._on.style.visibility="hidden";
					me._on.ggVisible=false;
				}
			}
		}
		me._on.logicBlock_visible();
		me._on.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['bg_sound'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._on.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._on.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._on.style.transition='color 0s';
				if (me._on.ggCurrentLogicStateTextColor == 0) {
					me._on.style.color="rgba(0,170,255,1)";
				}
				else {
					me._on.style.color="rgba(178,194,214,1)";
				}
			}
		}
		me._on.logicBlock_textcolor();
		me._on.ggUpdatePosition=function (useTransition) {
		}
		me._bg_sound.appendChild(me._on);
		el=me._off=document.createElement('div');
		els=me._off__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(178,194,214,1);';
		hs+='height : 20px;';
		hs+='left : 43px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._off.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u0412\u042b\u041a\u041b", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._off.ggUpdateText();
		el.appendChild(els);
		me._off.ggIsActive=function() {
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
		me._off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off.style.transition='color 0s';
				if (me._off.ggCurrentLogicStateVisible == 0) {
					me._off.style.visibility="hidden";
					me._off.ggVisible=false;
				}
				else {
					me._off.style.visibility=(Number(me._off.style.opacity)>0||!me._off.style.opacity)?'inherit':'hidden';
					me._off.ggVisible=true;
				}
			}
		}
		me._off.logicBlock_visible();
		me._off.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['bg_sound'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._off.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._off.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._off.style.transition='color 0s';
				if (me._off.ggCurrentLogicStateTextColor == 0) {
					me._off.style.color="rgba(0,170,255,1)";
				}
				else {
					me._off.style.color="rgba(178,194,214,1)";
				}
			}
		}
		me._off.logicBlock_textcolor();
		me._off.ggUpdatePosition=function (useTransition) {
		}
		me._bg_sound.appendChild(me._off);
		el=me._on1=document.createElement('div');
		els=me._on1__img=document.createElement('img');
		els.className='ggskin ggskin_on1';
		hs=basePath + 'images/on1.gif';
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
		el.ggId="on1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._on1.ggIsActive=function() {
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
		me._on1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._on1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._on1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._on1.style.transition='';
				if (me._on1.ggCurrentLogicStateVisible == 0) {
					me._on1.style.visibility=(Number(me._on1.style.opacity)>0||!me._on1.style.opacity)?'inherit':'hidden';
					me._on1.ggVisible=true;
				}
				else {
					me._on1.style.visibility="hidden";
					me._on1.ggVisible=false;
				}
			}
		}
		me._on1.logicBlock_visible();
		me._on1.ggUpdatePosition=function (useTransition) {
		}
		me._bg_sound.appendChild(me._on1);
		el=me._off1=document.createElement('div');
		els=me._off1__img=document.createElement('img');
		els.className='ggskin ggskin_off1';
		hs=basePath + 'images/off1.gif';
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
		el.ggId="off1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._off1.ggIsActive=function() {
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
		me._off1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off1.style.transition='';
				if (me._off1.ggCurrentLogicStateVisible == 0) {
					me._off1.style.visibility="hidden";
					me._off1.ggVisible=false;
				}
				else {
					me._off1.style.visibility=(Number(me._off1.style.opacity)>0||!me._off1.style.opacity)?'inherit':'hidden';
					me._off1.ggVisible=true;
				}
			}
		}
		me._off1.logicBlock_visible();
		me._off1.ggUpdatePosition=function (useTransition) {
		}
		me._bg_sound.appendChild(me._off1);
		me._glavnii_container.appendChild(me._bg_sound);
		el=me._bg_full_screen_on=document.createElement('div');
		el.ggId="bg_full_screen_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #162b3e;';
		hs+='border : 0px solid #00aaff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 116px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg_full_screen_on.ggIsActive=function() {
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
		me._bg_full_screen_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true)) && 
				((player.getVariableValue('window') == true)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._bg_full_screen_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._bg_full_screen_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._bg_full_screen_on.style.transition='opacity 500ms ease 500ms, background-color 300ms ease 0ms, border-width 300ms ease 0ms';
				if (me._bg_full_screen_on.ggCurrentLogicStateVisible == 0) {
					me._bg_full_screen_on.style.visibility=(Number(me._bg_full_screen_on.style.opacity)>0||!me._bg_full_screen_on.style.opacity)?'inherit':'hidden';
					me._bg_full_screen_on.ggVisible=true;
				}
				else {
					me._bg_full_screen_on.style.visibility="hidden";
					me._bg_full_screen_on.ggVisible=false;
				}
			}
		}
		me._bg_full_screen_on.logicBlock_visible();
		me._bg_full_screen_on.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('window') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._bg_full_screen_on.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._bg_full_screen_on.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._bg_full_screen_on.style.transition='opacity 500ms ease 500ms, background-color 300ms ease 0ms, border-width 300ms ease 0ms';
				if (me._bg_full_screen_on.ggCurrentLogicStateAlpha == 0) {
					me._bg_full_screen_on.style.visibility=me._bg_full_screen_on.ggVisible?'inherit':'hidden';
					me._bg_full_screen_on.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._bg_full_screen_on.style.opacity == 0.0) { me._bg_full_screen_on.style.visibility="hidden"; } }, 1005);
					me._bg_full_screen_on.style.opacity=0;
				}
			}
		}
		me._bg_full_screen_on.logicBlock_alpha();
		me._bg_full_screen_on.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['bg_full_screen_on'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._bg_full_screen_on.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._bg_full_screen_on.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._bg_full_screen_on.style.transition='opacity 500ms ease 500ms, background-color 300ms ease 0ms, border-width 300ms ease 0ms';
				if (me._bg_full_screen_on.ggCurrentLogicStateBackgroundColor == 0) {
					me._bg_full_screen_on.style.backgroundColor="rgba(8,17,24,1)";
				}
				else {
					me._bg_full_screen_on.style.backgroundColor="rgba(22,43,62,1)";
				}
			}
		}
		me._bg_full_screen_on.logicBlock_backgroundcolor();
		me._bg_full_screen_on.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me.elementMouseOver['bg_full_screen_on'] == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._bg_full_screen_on.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._bg_full_screen_on.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._bg_full_screen_on.style.transition='opacity 500ms ease 500ms, background-color 300ms ease 0ms, border-width 300ms ease 0ms';
				if (me._bg_full_screen_on.ggCurrentLogicStateBorderWidth == 0) {
					me._bg_full_screen_on.style.borderWidth="2px";
				}
				else {
					me._bg_full_screen_on.style.borderWidth="0px";
				}
			}
		}
		me._bg_full_screen_on.logicBlock_borderwidth();
		me._bg_full_screen_on.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._bg_full_screen_on.onmouseenter=function (e) {
			me.elementMouseOver['bg_full_screen_on']=true;
			me._off_full_screen.logicBlock_textcolor();
			me._on_full_screen.logicBlock_textcolor();
			me._bg_full_screen_on.logicBlock_backgroundcolor();
			me._bg_full_screen_on.logicBlock_borderwidth();
		}
		me._bg_full_screen_on.onmouseleave=function (e) {
			me.elementMouseOver['bg_full_screen_on']=false;
			me._off_full_screen.logicBlock_textcolor();
			me._on_full_screen.logicBlock_textcolor();
			me._bg_full_screen_on.logicBlock_backgroundcolor();
			me._bg_full_screen_on.logicBlock_borderwidth();
		}
		me._bg_full_screen_on.ggUpdatePosition=function (useTransition) {
		}
		el=me._off_full_screen=document.createElement('div');
		els=me._off_full_screen__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="off_full_screen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(178,194,214,1);';
		hs+='height : 20px;';
		hs+='left : 36px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : hidden;';
		hs+='width : 73px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._off_full_screen.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u041e\u0411\u042b\u0427\u041d\u042b\u0419", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._off_full_screen.ggUpdateText();
		el.appendChild(els);
		me._off_full_screen.ggIsActive=function() {
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
		me._off_full_screen.logicBlock_visible = function() {
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
			if (me._off_full_screen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off_full_screen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off_full_screen.style.transition='color 0s';
				if (me._off_full_screen.ggCurrentLogicStateVisible == 0) {
					me._off_full_screen.style.visibility=(Number(me._off_full_screen.style.opacity)>0||!me._off_full_screen.style.opacity)?'inherit':'hidden';
					me._off_full_screen.ggVisible=true;
				}
				else {
					me._off_full_screen.style.visibility="hidden";
					me._off_full_screen.ggVisible=false;
				}
			}
		}
		me._off_full_screen.logicBlock_visible();
		me._off_full_screen.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['bg_full_screen_on'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._off_full_screen.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._off_full_screen.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._off_full_screen.style.transition='color 0s';
				if (me._off_full_screen.ggCurrentLogicStateTextColor == 0) {
					me._off_full_screen.style.color="rgba(0,170,255,1)";
				}
				else {
					me._off_full_screen.style.color="rgba(178,194,214,1)";
				}
			}
		}
		me._off_full_screen.logicBlock_textcolor();
		me._off_full_screen.ggUpdatePosition=function (useTransition) {
		}
		me._bg_full_screen_on.appendChild(me._off_full_screen);
		el=me._on_full_screen=document.createElement('div');
		els=me._on_full_screen__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="on_full_screen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(178,194,214,1);';
		hs+='height : 20px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 73px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._on_full_screen.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u041f\u041e\u041b\u041d\u042b\u0419", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on_full_screen.ggUpdateText();
		el.appendChild(els);
		me._on_full_screen.ggIsActive=function() {
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
		me._on_full_screen.logicBlock_visible = function() {
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
			if (me._on_full_screen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._on_full_screen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._on_full_screen.style.transition='color 0s';
				if (me._on_full_screen.ggCurrentLogicStateVisible == 0) {
					me._on_full_screen.style.visibility="hidden";
					me._on_full_screen.ggVisible=false;
				}
				else {
					me._on_full_screen.style.visibility=(Number(me._on_full_screen.style.opacity)>0||!me._on_full_screen.style.opacity)?'inherit':'hidden';
					me._on_full_screen.ggVisible=true;
				}
			}
		}
		me._on_full_screen.logicBlock_visible();
		me._on_full_screen.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['bg_full_screen_on'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._on_full_screen.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._on_full_screen.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._on_full_screen.style.transition='color 0s';
				if (me._on_full_screen.ggCurrentLogicStateTextColor == 0) {
					me._on_full_screen.style.color="rgba(0,170,255,1)";
				}
				else {
					me._on_full_screen.style.color="rgba(178,194,214,1)";
				}
			}
		}
		me._on_full_screen.logicBlock_textcolor();
		me._on_full_screen.ggUpdatePosition=function (useTransition) {
		}
		me._bg_full_screen_on.appendChild(me._on_full_screen);
		el=me._full_screen_off=document.createElement('div');
		els=me._full_screen_off__img=document.createElement('img');
		els.className='ggskin ggskin_full_screen_off';
		hs=basePath + 'images/full_screen_off.gif';
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
		el.ggId="full_screen_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 11px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._full_screen_off.ggIsActive=function() {
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
		me._full_screen_off.logicBlock_visible = function() {
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
			if (me._full_screen_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._full_screen_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._full_screen_off.style.transition='';
				if (me._full_screen_off.ggCurrentLogicStateVisible == 0) {
					me._full_screen_off.style.visibility=(Number(me._full_screen_off.style.opacity)>0||!me._full_screen_off.style.opacity)?'inherit':'hidden';
					me._full_screen_off.ggVisible=true;
				}
				else {
					me._full_screen_off.style.visibility="hidden";
					me._full_screen_off.ggVisible=false;
				}
			}
		}
		me._full_screen_off.logicBlock_visible();
		me._full_screen_off.ggUpdatePosition=function (useTransition) {
		}
		me._bg_full_screen_on.appendChild(me._full_screen_off);
		el=me._fullscreen_enter2=document.createElement('div');
		els=me._fullscreen_enter2__img=document.createElement('img');
		els.className='ggskin ggskin_fullscreen_enter2';
		hs=basePath + 'images/fullscreen_enter2.gif';
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
		el.ggId="fullscreen_enter2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 11px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_enter2.ggIsActive=function() {
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
		me._fullscreen_enter2.logicBlock_visible = function() {
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
			if (me._fullscreen_enter2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_enter2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_enter2.style.transition='';
				if (me._fullscreen_enter2.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_enter2.style.visibility="hidden";
					me._fullscreen_enter2.ggVisible=false;
				}
				else {
					me._fullscreen_enter2.style.visibility=(Number(me._fullscreen_enter2.style.opacity)>0||!me._fullscreen_enter2.style.opacity)?'inherit':'hidden';
					me._fullscreen_enter2.ggVisible=true;
				}
			}
		}
		me._fullscreen_enter2.logicBlock_visible();
		me._fullscreen_enter2.ggUpdatePosition=function (useTransition) {
		}
		me._bg_full_screen_on.appendChild(me._fullscreen_enter2);
		me._glavnii_container.appendChild(me._bg_full_screen_on);
		el=me._close_pop_up=document.createElement('div');
		el.ggId="close_pop_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #162b3e;';
		hs+='border : 0px solid #00aaff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 247px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_pop_up.ggIsActive=function() {
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
		me._close_pop_up.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('window') == true)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._close_pop_up.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._close_pop_up.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._close_pop_up.style.transition='opacity 500ms ease 600ms, background-color 300ms ease 0ms, border-width 300ms ease 0ms';
				if (me._close_pop_up.ggCurrentLogicStateVisible == 0) {
					me._close_pop_up.style.visibility=(Number(me._close_pop_up.style.opacity)>0||!me._close_pop_up.style.opacity)?'inherit':'hidden';
					me._close_pop_up.ggVisible=true;
				}
				else {
					me._close_pop_up.style.visibility="hidden";
					me._close_pop_up.ggVisible=false;
				}
			}
		}
		me._close_pop_up.logicBlock_visible();
		me._close_pop_up.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('window') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._close_pop_up.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._close_pop_up.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._close_pop_up.style.transition='opacity 500ms ease 600ms, background-color 300ms ease 0ms, border-width 300ms ease 0ms';
				if (me._close_pop_up.ggCurrentLogicStateAlpha == 0) {
					me._close_pop_up.style.visibility=me._close_pop_up.ggVisible?'inherit':'hidden';
					me._close_pop_up.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._close_pop_up.style.opacity == 0.0) { me._close_pop_up.style.visibility="hidden"; } }, 1105);
					me._close_pop_up.style.opacity=0;
				}
			}
		}
		me._close_pop_up.logicBlock_alpha();
		me._close_pop_up.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['close_pop_up'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._close_pop_up.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._close_pop_up.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._close_pop_up.style.transition='opacity 500ms ease 600ms, background-color 300ms ease 0ms, border-width 300ms ease 0ms';
				if (me._close_pop_up.ggCurrentLogicStateBackgroundColor == 0) {
					me._close_pop_up.style.backgroundColor="rgba(8,17,24,1)";
				}
				else {
					me._close_pop_up.style.backgroundColor="rgba(22,43,62,1)";
				}
			}
		}
		me._close_pop_up.logicBlock_backgroundcolor();
		me._close_pop_up.logicBlock_borderwidth = function() {
			var newLogicStateBorderWidth;
			if (
				((me.elementMouseOver['close_pop_up'] == true))
			)
			{
				newLogicStateBorderWidth = 0;
			}
			else {
				newLogicStateBorderWidth = -1;
			}
			if (me._close_pop_up.ggCurrentLogicStateBorderWidth != newLogicStateBorderWidth) {
				me._close_pop_up.ggCurrentLogicStateBorderWidth = newLogicStateBorderWidth;
				me._close_pop_up.style.transition='opacity 500ms ease 600ms, background-color 300ms ease 0ms, border-width 300ms ease 0ms';
				if (me._close_pop_up.ggCurrentLogicStateBorderWidth == 0) {
					me._close_pop_up.style.borderWidth="2px";
				}
				else {
					me._close_pop_up.style.borderWidth="0px";
				}
			}
		}
		me._close_pop_up.logicBlock_borderwidth();
		me._close_pop_up.onclick=function (e) {
			player.setVariableValue('window', false);
		}
		me._close_pop_up.onmouseenter=function (e) {
			me.elementMouseOver['close_pop_up']=true;
			me._close_pop_up.logicBlock_backgroundcolor();
			me._close_pop_up.logicBlock_borderwidth();
		}
		me._close_pop_up.onmouseleave=function (e) {
			me.elementMouseOver['close_pop_up']=false;
			me._close_pop_up.logicBlock_backgroundcolor();
			me._close_pop_up.logicBlock_borderwidth();
		}
		me._close_pop_up.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.gif';
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
		el.ggId="Image   1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 22px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
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
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._close_pop_up.appendChild(me._image_1);
		me._glavnii_container.appendChild(me._close_pop_up);
		me._obrezayshii.appendChild(me._glavnii_container);
		el=me._sounds_splashscreen=document.createElement('div');
		el.ggId="sounds_splashscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 407px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : hidden;';
		hs+='width : 320px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen.ggIsActive=function() {
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
		me._sounds_splashscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_sounds_splashscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sounds_splashscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sounds_splashscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sounds_splashscreen.style.transition='';
				if (me._sounds_splashscreen.ggCurrentLogicStateVisible == 0) {
					me._sounds_splashscreen.style.visibility=(Number(me._sounds_splashscreen.style.opacity)>0||!me._sounds_splashscreen.style.opacity)?'inherit':'hidden';
					me._sounds_splashscreen.ggVisible=true;
				}
				else {
					me._sounds_splashscreen.style.visibility="hidden";
					me._sounds_splashscreen.ggVisible=false;
				}
			}
		}
		me._sounds_splashscreen.logicBlock_visible();
		me._sounds_splashscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_on=document.createElement('div');
		els=me._sounds_on__img=document.createElement('img');
		els.className='ggskin ggskin_sounds_on';
		hs=basePath + 'images/sounds_on.png';
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
		el.ggId="sounds_on";
		el.ggDx=8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 549px;';
		hs+='left : calc(50% - ((95% + 0px) / 2) + 8px);';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 15px; \/* \u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f \u2014 \u043c\u0435\u043d\u044f\u0442\u044c \u043f\u043e \u0432\u043a\u0443\u0441\u0443 *\/ overflow: hidden; \/* \u043e\u0431\u0440\u0435\u0437\u0430\u0435\u0442 \u0432\u0441\u044e \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u0443\u044e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443\/\u0432\u0438\u0434\u0435\u043e \u043f\u043e \u043a\u0440\u0430\u044e *\/ box-sizing: border-box;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_on.ggIsActive=function() {
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
		me._sounds_on.onclick=function (e) {
			player.setVariableValue('sounds_splashscreen_accepted', true);
			player.startAutoplayMedia();
		}
		me._sounds_on.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen.appendChild(me._sounds_on);
		el=me._on_t=document.createElement('div');
		els=me._on_t__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="on_t";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='background : #0b1620;';
		hs+='border : 1px solid #1a354a;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 144px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : 107px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre-line;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._on_t.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u0414\u0430", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on_t.ggUpdateText();
		el.appendChild(els);
		me._on_t.ggIsActive=function() {
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
		me._on_t.ggUpdatePosition=function (useTransition) {
		}
		el=me._sound_on_spl=document.createElement('div');
		els=me._sound_on_spl__img=document.createElement('img');
		els.className='ggskin ggskin_sound_on_spl';
		hs=basePath + 'images/sound_on_spl.gif';
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
		el.ggId="sound_on_spl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 65px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sound_on_spl.ggIsActive=function() {
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
		me._sound_on_spl.onclick=function (e) {
			player.setVariableValue('sounds_splashscreen_accepted', true);
			player.startAutoplayMedia();
		}
		me._sound_on_spl.ggUpdatePosition=function (useTransition) {
		}
		me._on_t.appendChild(me._sound_on_spl);
		me._sounds_splashscreen.appendChild(me._on_t);
		el=me._off_t=document.createElement('div');
		els=me._off_t__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="off_t";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='background : #0b1620;';
		hs+='border : 1px solid #1a354a;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 144px;';
		hs+='left : 197px;';
		hs+='position : absolute;';
		hs+='top : 107px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre-line;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._off_t.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u041d\u0435\u0442", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._off_t.ggUpdateText();
		el.appendChild(els);
		me._off_t.ggIsActive=function() {
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
		me._off_t.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_off_spl=document.createElement('div');
		els=me._sounds_off_spl__img=document.createElement('img');
		els.className='ggskin ggskin_sounds_off_spl';
		hs=basePath + 'images/sounds_off_spl.gif';
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
		el.ggId="sounds_off_spl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 65px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_off_spl.ggIsActive=function() {
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
		me._sounds_off_spl.onclick=function (e) {
			player.mute("_all");
			player.setVariableValue('sounds_splashscreen_accepted', true);
			player.setVariableValue('toggle_audio', false);
		}
		me._sounds_off_spl.ggUpdatePosition=function (useTransition) {
		}
		me._off_t.appendChild(me._sounds_off_spl);
		me._sounds_splashscreen.appendChild(me._off_t);
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text   3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='background : #0b1620;';
		hs+='border : 1px solid #142839;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(254,255,247,1);';
		hs+='height : 60px;';
		hs+='left : 45px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 246px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u0425\u043e\u0442\u0435\u043b\u0438 \u0431\u044b \u0432\u044b \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0437\u0432\u0443\u043a?", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3.ggUpdateText();
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
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
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen.appendChild(me._text_3);
		me._obrezayshii.appendChild(me._sounds_splashscreen);
		me._size_show.appendChild(me._obrezayshii);
		me.divSkin.appendChild(me._size_show);
		el=me._screentint_phone=document.createElement('div');
		el.ggId="screentint_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_phone_info') == true)) || 
				((player.getVariableValue('vis_phone_image') == true)) || 
				((player.getVariableValue('vis_phone_pdf') == true)) || 
				((player.getVariableValue('vis_phone_youtube') == true)) || 
				((player.getVariableValue('vis_phone_vimeo') == true)) || 
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._screentint_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._screentint_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._screentint_phone.style.transition='opacity 300ms ease 0ms';
				if (me._screentint_phone.ggCurrentLogicStateAlpha == 0) {
					me._screentint_phone.style.visibility=me._screentint_phone.ggVisible?'inherit':'hidden';
					me._screentint_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._screentint_phone.style.opacity == 0.0) { me._screentint_phone.style.visibility="hidden"; } }, 305);
					me._screentint_phone.style.opacity=0;
				}
			}
		}
		me._screentint_phone.logicBlock_alpha();
		me._screentint_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._safe_area_phone=document.createElement('div');
		el.ggId="safe_area_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._safe_area_phone.ggIsActive=function() {
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
		me._safe_area_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone.ggIsActive=function() {
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
		me._close_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_info', false);
			player.setVariableValue('vis_phone_image', false);
			player.setVariableValue('vis_phone_pdf', false);
			player.setVariableValue('vis_phone_youtube', false);
			player.setVariableValue('vis_phone_vimeo', false);
			player.setVariableValue('vis_phone_video_file', false);
			player.setVariableValue('vis_phone_video_url', false);
		}
		me._close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_close_popup_phone=document.createElement('div');
		els=me._btn_close_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IndoaXRlIiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_close_popup_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZpZXdCb3g9IjAgMCAxOCAxOCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone.ggIsActive=function() {
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
		me._btn_close_popup_phone.onmouseenter=function (e) {
			me._btn_close_popup_phone__img.style.visibility='hidden';
			me._btn_close_popup_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_close_popup_phone']=true;
		}
		me._btn_close_popup_phone.onmouseleave=function (e) {
			me._btn_close_popup_phone__img.style.visibility='inherit';
			me._btn_close_popup_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_close_popup_phone']=false;
		}
		me._btn_close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone);
		me._safe_area_phone.appendChild(me._close_popup_phone);
		el=me._info_popup_phone=document.createElement('div');
		el.ggId="info_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 80px);';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_phone.ggIsActive=function() {
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
		me._info_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_popup_phone.style.transition='';
				if (me._info_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._info_popup_phone.style.visibility=(Number(me._info_popup_phone.style.opacity)>0||!me._info_popup_phone.style.opacity)?'inherit':'hidden';
					me._info_popup_phone.ggVisible=true;
				}
				else {
					me._info_popup_phone.style.visibility="hidden";
					me._info_popup_phone.ggVisible=false;
				}
			}
		}
		me._info_popup_phone.logicBlock_visible();
		me._info_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_popup_text_phone=document.createElement('div');
		els=me._info_popup_text_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_text_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 80px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="line-height: 1.5;";
		els.setAttribute('style',hs);
		me._info_popup_text_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_text_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_text_phone.ggIsActive=function() {
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
		me._info_popup_text_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_text_phone);
		el=me._info_popup_title_phone=document.createElement('div');
		els=me._info_popup_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._info_popup_title_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_title_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_title_phone.ggIsActive=function() {
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
		me._info_popup_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_title_phone);
		me._safe_area_phone.appendChild(me._info_popup_phone);
		el=me._image_popup_phone=document.createElement('div');
		els=me._image_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._image_popup_phone.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._image_popup_phone.ggSubElement.setAttribute('alt', player._(me._image_popup_phone.ggAltText));
			me._image_popup_phone.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._image_popup_phone.ggText_untranslated = img;
			me._image_popup_phone.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._image_popup_phone.ggSubElement.style.width = '0px';
			me._image_popup_phone.ggSubElement.style.height = '0px';
			me._image_popup_phone.ggSubElement.src='';
			me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._image_popup_phone.ggText != player._(me._image_popup_phone.ggText_untranslated)) {
				me._image_popup_phone.ggText = player._(me._image_popup_phone.ggText_untranslated);
				me._image_popup_phone.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="image_popup_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 70%;';
		hs+='left : calc(50% - ((97% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 97%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_phone.ggIsActive=function() {
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
		me._image_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_image') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_phone.style.transition='';
				if (me._image_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._image_popup_phone.style.visibility=(Number(me._image_popup_phone.style.opacity)>0||!me._image_popup_phone.style.opacity)?'inherit':'hidden';
					me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
					me._image_popup_phone.ggVisible=true;
				}
				else {
					me._image_popup_phone.style.visibility="hidden";
					me._image_popup_phone.ggSubElement.src='';
					me._image_popup_phone.ggVisible=false;
				}
			}
		}
		me._image_popup_phone.logicBlock_visible();
		me._image_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_image', false);
		}
		me._image_popup_phone.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._image_popup_phone.clientWidth;
			var parentHeight = me._image_popup_phone.clientHeight;
			var img = me._image_popup_phone__img;
			var aspectRatioDiv = me._image_popup_phone.clientWidth / me._image_popup_phone.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._image_popup_phone.ggScrollbars || currentWidth < me._image_popup_phone.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._image_popup_phone.scrollLeft=currentWidth / 2 - me._image_popup_phone.clientWidth / 2;
			}
			if (!me._image_popup_phone.ggScrollbars || currentHeight < me._image_popup_phone.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._image_popup_phone.scrollTop=currentHeight / 2 - me._image_popup_phone.clientHeight / 2;
			}
		}
		me._safe_area_phone.appendChild(me._image_popup_phone);
		el=me._image_description_phone=document.createElement('div');
		els=me._image_description_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="image_description_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='bottom : 150px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((96% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 96%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : rgba(0,16,26,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._image_description_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._image_description_phone.ggUpdateText();
		el.appendChild(els);
		me._image_description_phone.ggIsActive=function() {
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
		me._image_description_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._image_description_phone);
		el=me._image_title_phone=document.createElement('div');
		els=me._image_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="image_title_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 18px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._image_title_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._image_title_phone.ggUpdateText();
		el.appendChild(els);
		me._image_title_phone.ggIsActive=function() {
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
		me._image_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._image_title_phone);
		el=me._pdf_popup_phone=document.createElement('div');
		els=me._pdf_popup_phone__pdf=document.createElement('iframe');
		els.className='ggskin ggskin_pdf';
		els.setAttribute('style','position: absolute;');
		me._pdf_popup_phone__pdf.setAttribute('frameborder', '0');
		me._pdf_popup_phone__pdf.setAttribute('width', '100%');
		me._pdf_popup_phone__pdf.setAttribute('height', '100%');
		el.appendChild(els);
		el.ggSubElement = els;
		me._pdf_popup_phone.ggInitPdf = function(file) {
			if (file) {
				if (me._pdf_popup_phone.ggPdfSource == file) return;
				me._pdf_popup_phone.pdfNotLoaded = false;
				me._pdf_popup_phone.ggPdfSource = file;
				let pdfUrl = (me._pdf_popup_phone.ggPdfSource.indexOf(':') != -1 || me._pdf_popup_phone.ggPdfSource.startsWith('/') || me._pdf_popup_phone.ggPdfSource.startsWith('./')) ? me._pdf_popup_phone.ggPdfSource : window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/')) + '/' + me._pdf_popup_phone.ggPdfSource;
				me._pdf_popup_phone__pdf.setAttribute('src', basePath + './3rdparty/pdfjs/web/viewer.html?file=' + pdfUrl + '&toolbar=true&sidebar=true&textsearch=true&fullscreen=true&printing=true&download=false&tools=true&enablelinks=true#page=1');
				me._pdf_popup_phone__pdf.style.display = 'block';
			} else {
				me._pdf_popup_phone__pdf.setAttribute('src', '');
				me._pdf_popup_phone__pdf.style.display = 'none';
				me._pdf_popup_phone.pdfNotLoaded = true;
				me._pdf_popup_phone.ggPdfSource = '';
			}
		}
		me._pdf_popup_phone.ggSetCurrentPage = function(page) {
			if (!isNaN(page) && page > 0) me._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.page = page;
		}
		me._pdf_popup_phone.ggInitPdf('');
		el.ggId="pdf_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_pdf ";
		el.ggType='pdf';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup_phone.ggIsActive=function() {
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
		me._pdf_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_pdf') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pdf_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pdf_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pdf_popup_phone.style.transition='';
				if (me._pdf_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._pdf_popup_phone.style.visibility=(Number(me._pdf_popup_phone.style.opacity)>0||!me._pdf_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._pdf_popup_phone.ggPdfNotLoaded) {
						me._pdf_popup_phone.ggInitPdf(me._pdf_popup_phone.ggPdfSource);
					}
					me._pdf_popup_phone.ggVisible=true;
				}
				else {
					me._pdf_popup_phone.style.visibility="hidden";
					if (me._pdf_popup_phone.ggInitPdf) me._pdf_popup_phone.ggInitPdf();
					me._pdf_popup_phone.ggVisible=false;
				}
			}
		}
		me._pdf_popup_phone.logicBlock_visible();
		me._pdf_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._pdf_popup_phone);
		el=me._video_controller_phone=document.createElement('div');
		el.ggId="video_controller_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((clamp(200px, calc(100% - 40px), 350px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : clamp(200px, calc(100% - 40px), 350px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_phone.ggIsActive=function() {
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
		me._video_controller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_controller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_controller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_controller_phone.style.transition='';
				if (me._video_controller_phone.ggCurrentLogicStateVisible == 0) {
					me._video_controller_phone.style.visibility=(Number(me._video_controller_phone.style.opacity)>0||!me._video_controller_phone.style.opacity)?'inherit':'hidden';
					me._video_controller_phone.ggVisible=true;
				}
				else {
					me._video_controller_phone.style.visibility="hidden";
					me._video_controller_phone.ggVisible=false;
				}
			}
		}
		me._video_controller_phone.logicBlock_visible();
		me._video_controller_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_controller_seekbar_phone=document.createElement('div');
		me._video_controller_seekbar_phone__playhead=document.createElement('div');
		me._video_controller_seekbar_phone.mediaEl = null;
		me._video_controller_seekbar_phone.fromBufferSource = false;
		me._video_controller_seekbar_phone.ggMediaId = '';
		el.ggId="video_controller_seekbar_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_seekbar_phone.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_controller_seekbar_phone.mediaEl != null) {
					if (e.target == me._video_controller_seekbar_phone) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_controller_seekbar_phone.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_controller_seekbar_phone || e.target == me._video_controller_seekbar_phone__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_controller_seekbar_phone.onmousedown = me._video_controller_seekbar_phone.ontouchstart = me._video_controller_seekbar_phone.mouseTouchHandling;
		me._video_controller_seekbar_phone.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'hidden';
				me._video_controller_seekbar_phone.style.background = 'rgba(0,0,0,0)';
				me._video_controller_seekbar_phone.ggConnected = false;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
			}
			me._video_controller_seekbar_phone.mediaEl = player.getMediaObject(me._video_controller_seekbar_phone.ggMediaId);
			if (me._video_controller_seekbar_phone.mediaEl) {
				me._video_controller_seekbar_phone.fromBufferSource = false;
			} else {
				me._video_controller_seekbar_phone.mediaEl = player.getMediaBufferSourceObject('');
				me._video_controller_seekbar_phone.fromBufferSource = true;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'inherit';
				me._video_controller_seekbar_phone__playhead.style.left = '-9px';
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.bufferSoundActivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.addEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.addEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
				me._video_controller_seekbar_phone.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_controller_seekbar_phone.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_controller_seekbar_phone.updatePlayback = function(args) {
			if (!me._video_controller_seekbar_phone.ggConnected) return;
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.mediaEl.readyState || (me._video_controller_seekbar_phone.fromBufferSource && args && args['id'] == me._video_controller_seekbar_phone.mediaEl.id)) {
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						var percent = me._video_controller_seekbar_phone.mediaEl.bufferSoundCurrentTime() / me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_controller_seekbar_phone.mediaEl.currentTime / me._video_controller_seekbar_phone.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_controller_seekbar_phone.clientWidth - 2 * 4 + 0) * percent);
					playheadpos += -9;
					me._video_controller_seekbar_phone__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (4 / me._video_controller_seekbar_phone.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						gradientString += ', rgba(0,0,0,0.392157) ' + currPos +'%, rgba(0,0,0,0.392157) 100%';
					} else {
						for (var i = 0; i < me._video_controller_seekbar_phone.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_controller_seekbar_phone.mediaEl.buffered.start(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_controller_seekbar_phone.mediaEl.buffered.end(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(0,0,0,0.392157) ' + currPos + '%';
								} else {
									gradientString += ', rgba(0,0,0,0) ' + currPos + '%, rgba(0,0,0,0) ' + rangeStart + '%';
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeStart + '%';
								}
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(0,0,0,0) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_controller_seekbar_phone.style.background = gradientString;
				}
			}
		}
		me._video_controller_seekbar_phone.appendChild(me._video_controller_seekbar_phone__playhead);
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 4px;';
		var hs_playhead = 'height: 25px;';
		hs_playhead += 'width: 25px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -9px;';
		hs_playhead += 'top: -7.5px;';
		hs_playhead += 'border-radius: 13px;';
		hs_playhead += cssPrefix + 'border-radius: 13px;';
		hs_playhead += 'background-color: rgba(223,224,54,1);';
		me._video_controller_seekbar_phone.setAttribute('style', hs);
		me._video_controller_seekbar_phone__playhead.setAttribute('style', hs_playhead);
		me._video_controller_seekbar_phone.ggIsActive=function() {
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				return (me._video_controller_seekbar_phone.mediaEl.paused == false && me._video_controller_seekbar_phone.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_seekbar_phone.ggActivate=function () {
			me._video_controller_button_pause_phone.style.transition='none';
			me._video_controller_button_pause_phone.style.visibility=(Number(me._video_controller_button_pause_phone.style.opacity)>0||!me._video_controller_button_pause_phone.style.opacity)?'inherit':'hidden';
			me._video_controller_button_pause_phone.ggVisible=true;
			me._video_controller_button_play_phone.style.transition='none';
			me._video_controller_button_play_phone.style.visibility='hidden';
			me._video_controller_button_play_phone.ggVisible=false;
		}
		me._video_controller_seekbar_phone.ggDeactivate=function () {
			me._video_controller_button_play_phone.style.transition='none';
			me._video_controller_button_play_phone.style.visibility=(Number(me._video_controller_button_play_phone.style.opacity)>0||!me._video_controller_button_play_phone.style.opacity)?'inherit':'hidden';
			me._video_controller_button_play_phone.ggVisible=true;
			me._video_controller_button_pause_phone.style.transition='none';
			me._video_controller_button_pause_phone.style.visibility='hidden';
			me._video_controller_button_pause_phone.ggVisible=false;
		}
		me._video_controller_seekbar_phone.ggUpdatePosition=function (useTransition) {
			me._video_controller_seekbar_phone.updatePlayback();
		}
		me._video_controller_phone.appendChild(me._video_controller_seekbar_phone);
		el=me._video_controller_button_pause_phone=document.createElement('div');
		els=me._video_controller_button_pause_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMThweCI+CiA8cGF0aCBkPSJNOCAxOWMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyem02LTEydjEwYzAgMS4xLjkgMiAyIDJzMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJ6Ii8+Cjwvc3ZnPgo=';
		me._video_controller_button_pause_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_controller_button_pause_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZpZXdCb3g9IjAgMCAxOCAxOCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDE0LjJjMC44LDAsMS41LTAuNywxLjUtMS41VjUuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVTNC41LDQuNCw0LjUsNS4ydjcuNUM0LjUsMTMuNiw1LjIsMTQuMiw2LDE0LjJ6JiN4ZDsmI3hhOyYjeDk7IE0xMC41LDUuMnY3LjVjMCwwLjgsMC43LDEuNSwxLjUsMS41czEuNS0wLjcsMS41LTEuNVY1LjJjMC0wLjgtMC43LTEuNS0xLjUtMS41UzEwLjUsNC40LDEwLjUsNS4yeiIvPgo8L3N2Zz4K';
		me._video_controller_button_pause_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_controller_button_pause_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_button_pause_phone.ggIsActive=function() {
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
		me._video_controller_button_pause_phone.onclick=function (e) {
			if (
				(
					((player.getVariableValue('vis_phone_video_file') == true))
				)
			) {
				if (me._video_file_popup_phone.ggApiPlayer) {
					if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
						let youtubeMediaFunction = function() {
							me._video_file_popup_phone.ggApiPlayer.pauseVideo();
						};
						if (me._video_file_popup_phone.ggApiPlayerReady) {
							youtubeMediaFunction();
						} else {
							let youtubeApiInterval = setInterval(function() {
								if (me._video_file_popup_phone.ggApiPlayerReady) {
									clearInterval(youtubeApiInterval);
									youtubeMediaFunction();
								}
							}, 100);
						}
					} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
						me._video_file_popup_phone.ggApiPlayer.pause();
					}
				} else {
					player.pauseSound("video_file_popup_phone");
				}
			}
			if (
				(
					((player.getVariableValue('vis_phone_video_url') == true))
				)
			) {
				if (me._video_url_popup_phone.ggApiPlayer) {
					if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
						let youtubeMediaFunction = function() {
							me._video_url_popup_phone.ggApiPlayer.pauseVideo();
						};
						if (me._video_url_popup_phone.ggApiPlayerReady) {
							youtubeMediaFunction();
						} else {
							let youtubeApiInterval = setInterval(function() {
								if (me._video_url_popup_phone.ggApiPlayerReady) {
									clearInterval(youtubeApiInterval);
									youtubeMediaFunction();
								}
							}, 100);
						}
					} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
						me._video_url_popup_phone.ggApiPlayer.pause();
					}
				} else {
					player.pauseSound("video_url_popup_phone");
				}
			}
			me._video_controller_button_pause_phone.style.transition='none';
			me._video_controller_button_pause_phone.style.visibility='hidden';
			me._video_controller_button_pause_phone.ggVisible=false;
			me._video_controller_button_play_phone.style.transition='none';
			me._video_controller_button_play_phone.style.visibility=(Number(me._video_controller_button_play_phone.style.opacity)>0||!me._video_controller_button_play_phone.style.opacity)?'inherit':'hidden';
			me._video_controller_button_play_phone.ggVisible=true;
		}
		me._video_controller_button_pause_phone.onmouseenter=function (e) {
			me._video_controller_button_pause_phone__img.style.visibility='hidden';
			me._video_controller_button_pause_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['video_controller_button_pause_phone']=true;
		}
		me._video_controller_button_pause_phone.onmouseleave=function (e) {
			me._video_controller_button_pause_phone__img.style.visibility='inherit';
			me._video_controller_button_pause_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['video_controller_button_pause_phone']=false;
		}
		me._video_controller_button_pause_phone.ggUpdatePosition=function (useTransition) {
		}
		me._video_controller_phone.appendChild(me._video_controller_button_pause_phone);
		el=me._video_controller_button_play_phone=document.createElement('div');
		els=me._video_controller_button_play_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMThweCI+CiA8cGF0aCBkPSJNOCA2LjgydjEwLjM2YzAgLjc5Ljg3IDEuMjcgMS41NC44NGw4LjE0LTUuMThjLjYyLS4zOS42Mi0xLjI5IDAtMS42OUw5LjU0IDUuOThDOC44NyA1LjU1IDggNi4wMyA4IDYuODJ6Ii8+Cjwvc3ZnPgo=';
		me._video_controller_button_play_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_controller_button_play_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZpZXdCb3g9IjAgMCAxOCAxOCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDUuMXY3LjhjMCwwLjYsMC43LDEsMS4yLDAuNmw2LjEtMy45YzAuNS0wLjMsMC41LTEsMC0xLjNMNy4yLDQuNUM2LjcsNC4yLDYsNC41LDYsNS4xeiIvPgo8L3N2Zz4K';
		me._video_controller_button_play_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_controller_button_play_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_button_play_phone.ggIsActive=function() {
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
		me._video_controller_button_play_phone.onclick=function (e) {
			if (
				(
					((player.getVariableValue('vis_phone_video_file') == true))
				)
			) {
				if (me._video_file_popup_phone.ggApiPlayer) {
					if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
						let youtubeMediaFunction = function() {
							me._video_file_popup_phone.ggApiPlayer.playVideo();
						};
						if (me._video_file_popup_phone.ggApiPlayerReady) {
							youtubeMediaFunction();
						} else {
							let youtubeApiInterval = setInterval(function() {
								if (me._video_file_popup_phone.ggApiPlayerReady) {
									clearInterval(youtubeApiInterval);
									youtubeMediaFunction();
								}
							}, 100);
						}
					} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
						me._video_file_popup_phone.ggApiPlayer.play();
					}
				} else {
					player.playSound("video_file_popup_phone","1");
				}
			}
			if (
				(
					((player.getVariableValue('vis_phone_video_url') == true))
				)
			) {
				if (me._video_url_popup_phone.ggApiPlayer) {
					if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
						let youtubeMediaFunction = function() {
							me._video_url_popup_phone.ggApiPlayer.playVideo();
						};
						if (me._video_url_popup_phone.ggApiPlayerReady) {
							youtubeMediaFunction();
						} else {
							let youtubeApiInterval = setInterval(function() {
								if (me._video_url_popup_phone.ggApiPlayerReady) {
									clearInterval(youtubeApiInterval);
									youtubeMediaFunction();
								}
							}, 100);
						}
					} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
						me._video_url_popup_phone.ggApiPlayer.play();
					}
				} else {
					player.playSound("video_url_popup_phone","1");
				}
			}
			me._video_controller_button_play_phone.style.transition='none';
			me._video_controller_button_play_phone.style.visibility='hidden';
			me._video_controller_button_play_phone.ggVisible=false;
			me._video_controller_button_pause_phone.style.transition='none';
			me._video_controller_button_pause_phone.style.visibility=(Number(me._video_controller_button_pause_phone.style.opacity)>0||!me._video_controller_button_pause_phone.style.opacity)?'inherit':'hidden';
			me._video_controller_button_pause_phone.ggVisible=true;
		}
		me._video_controller_button_play_phone.onmouseenter=function (e) {
			me._video_controller_button_play_phone__img.style.visibility='hidden';
			me._video_controller_button_play_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['video_controller_button_play_phone']=true;
		}
		me._video_controller_button_play_phone.onmouseleave=function (e) {
			me._video_controller_button_play_phone__img.style.visibility='inherit';
			me._video_controller_button_play_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['video_controller_button_play_phone']=false;
		}
		me._video_controller_button_play_phone.ggUpdatePosition=function (useTransition) {
		}
		me._video_controller_phone.appendChild(me._video_controller_button_play_phone);
		me._safe_area_phone.appendChild(me._video_controller_phone);
		el=me._youtube_popup_phone=document.createElement('div');
		me._youtube_popup_phone.seekbars = [];
			me._youtube_popup_phone.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._youtube_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._youtube_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._youtube_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._youtube_popup_phone.hasChildNodes()) {
				me._youtube_popup_phone.removeChild(me._youtube_popup_phone.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._youtube_popup_phone.ggVideoNotLoaded == false && me._youtube_popup_phone.ggDeactivate && player.isPlaying('youtube_popup_phone')) { me._youtube_popup_phone.ggDeactivate(); }
				me._youtube_popup_phone.ggVideoNotLoaded = true;
				return;
			}
			me._youtube_popup_phone.ggVideoNotLoaded = false;
			me._youtube_popup_phone__vid=document.createElement('iframe');
			me._youtube_popup_phone__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=1&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._youtube_popup_phone__vid.setAttribute('src', ggVideoUrl);
			me._youtube_popup_phone__vid.setAttribute('width', '100%');
			me._youtube_popup_phone__vid.setAttribute('height', '100%');
			me._youtube_popup_phone__vid.setAttribute('allow', 'autoplay');
			me._youtube_popup_phone__vid.setAttribute('allowfullscreen', 'true');
			me._youtube_popup_phone__vid.setAttribute('style', 'border:none; ; ;');
			me._youtube_popup_phone.appendChild(me._youtube_popup_phone__vid);
			me._youtube_popup_phone__vid.id = 'youtube-video';
			me._youtube_popup_phone.ggYoutubeApiReady = function() {
				me._youtube_popup_phone.ggApiPlayerType = 'youtube';
				me._youtube_popup_phone.ggApiPlayerReady = false;
				me._youtube_popup_phone.ggApiPlayer = new YT.Player('youtube-video', {
					events: {
						'onReady': function(event) {
							me._youtube_popup_phone.ggApiPlayerReady = true;
							if (player.getPlayerMuted()) me._youtube_popup_phone.ggApiPlayer.mute();
						},
						'onStateChange': function(event) {
							if (event.data == 0 && me._youtube_popup_phone.ggMediaEnded) {
								me._youtube_popup_phone.ggMediaEnded();
							}
							if (event.data == 1 && me._youtube_popup_phone.ggActivate) {
								me._youtube_popup_phone.ggActivate();
							}
							if ((event.data == 0 || event.data == 2) && me._youtube_popup_phone.ggDeactivate) {
								me._youtube_popup_phone.ggDeactivate();
							}
						}
					}
				});
				player.addListener('elementmuted', function(args) {
					if (args.id == 'youtube_popup_phone' || args.id == '_all' || args.id == '_main') {
						if (args.state == 0) skin._youtube_popup_phone.ggApiPlayer.unMute();
						if (args.state == 1) skin._youtube_popup_phone.ggApiPlayer.mute();
						if (args.state == -1) { if (skin._youtube_popup_phone.ggApiPlayer.isMuted()) skin._youtube_popup_phone.ggApiPlayer.unMute(); else skin._youtube_popup_phone.ggApiPlayer.mute(); }
					}
				});
				player.addListener('elementvolume', function(args) {
					if (args.id == 'youtube_popup_phone' || args.id == '_main') {
						if (args.type == 'set') skin._youtube_popup_phone.ggApiPlayer.setVolume(args.volume * 100);
						if (args.type == 'change') skin._youtube_popup_phone.ggApiPlayer.setVolume(skin._youtube_popup_phone.ggApiPlayer.getVolume() + args.volume * 100);
					}
				});
			}
			me._youtube_popup_phone.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._youtube_popup_phone.ggYoutubeApiReady();}
		}
		el.ggId="youtube_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._youtube_popup_phone.ggIsActive=function() {
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
		me._youtube_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._youtube_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._youtube_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._youtube_popup_phone.style.transition='';
				if (me._youtube_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._youtube_popup_phone.style.visibility=(Number(me._youtube_popup_phone.style.opacity)>0||!me._youtube_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._youtube_popup_phone.ggVideoNotLoaded) {
						me._youtube_popup_phone.ggInitMedia(me._youtube_popup_phone.ggVideoSource);
					}
					me._youtube_popup_phone.ggVisible=true;
				}
				else {
					me._youtube_popup_phone.style.visibility="hidden";
					me._youtube_popup_phone.ggInitMedia('');
					me._youtube_popup_phone.ggVisible=false;
				}
			}
		}
		me._youtube_popup_phone.logicBlock_visible();
		me._youtube_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._youtube_popup_phone);
		el=me._vimeo_popup_phone=document.createElement('div');
		me._vimeo_popup_phone.seekbars = [];
		me._vimeo_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._vimeo_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._vimeo_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._vimeo_popup_phone.hasChildNodes()) {
				me._vimeo_popup_phone.removeChild(me._vimeo_popup_phone.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._vimeo_popup_phone.ggVideoNotLoaded == false && me._vimeo_popup_phone.ggDeactivate && player.isPlaying('vimeo_popup_phone')) { me._vimeo_popup_phone.ggDeactivate(); }
				me._vimeo_popup_phone.ggVideoNotLoaded = true;
				return;
			}
			me._vimeo_popup_phone.ggVideoNotLoaded = false;
			me._vimeo_popup_phone__vid=document.createElement('iframe');
			me._vimeo_popup_phone__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._vimeo_popup_phone__vid.setAttribute('src', ggVideoUrl);
			me._vimeo_popup_phone__vid.setAttribute('width', '100%');
			me._vimeo_popup_phone__vid.setAttribute('height', '100%');
			me._vimeo_popup_phone__vid.setAttribute('allow', 'autoplay');
			me._vimeo_popup_phone__vid.setAttribute('allowfullscreen', 'true');
			me._vimeo_popup_phone__vid.setAttribute('style', 'border:none; ; ;');
			me._vimeo_popup_phone.appendChild(me._vimeo_popup_phone__vid);
			me._vimeo_popup_phone.ggApiPlayerType = 'vimeo';
			me._vimeo_popup_phone.ggApiPlayer = new Vimeo.Player(me._vimeo_popup_phone__vid);
			if (player.getPlayerMuted()) me._vimeo_popup_phone.ggApiPlayer.setVolume(0);
			player.addListener('elementmuted', function(args) {
				if (args.id == 'vimeo_popup_phone' || args.id == '_all' || args.id == '_main') {
					if (args.state == 0) skin._vimeo_popup_phone.ggApiPlayer.setVolume(1);
					if (args.state == 1) skin._vimeo_popup_phone.ggApiPlayer.setVolume(0);
					if (args.state == -1) { if (skin._vimeo_popup_phone.ggApiPlayer.getVolume() > 0.0) skin._vimeo_popup_phone.ggApiPlayer.setVolume(0); else skin._vimeo_popup_phone.ggApiPlayer.setVolume(1); }
				}
			});
			player.addListener('elementvolume', function(args) {
				if (args.id == 'vimeo_popup_phone' || args.id == '_main') {
					if (args.type == 'set') skin._vimeo_popup_phone.ggApiPlayer.setVolume(args.volume);
					if (args.type == 'change') skin._vimeo_popup_phone.ggApiPlayer.getVolume().then(function(volume) { skin._vimeo_popup_phone.ggApiPlayer.setVolume(volume + args.volume); });
				}
			});
			me._vimeo_popup_phone.ggVideoSource = media;
		}
		el.ggId="vimeo_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vimeo_popup_phone.ggIsActive=function() {
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
		me._vimeo_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_vimeo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vimeo_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vimeo_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vimeo_popup_phone.style.transition='';
				if (me._vimeo_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._vimeo_popup_phone.style.visibility=(Number(me._vimeo_popup_phone.style.opacity)>0||!me._vimeo_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._vimeo_popup_phone.ggVideoNotLoaded) {
						me._vimeo_popup_phone.ggInitMedia(me._vimeo_popup_phone.ggVideoSource);
					}
					me._vimeo_popup_phone.ggVisible=true;
				}
				else {
					me._vimeo_popup_phone.style.visibility="hidden";
					me._vimeo_popup_phone.ggInitMedia('');
					me._vimeo_popup_phone.ggVisible=false;
				}
			}
		}
		me._vimeo_popup_phone.logicBlock_visible();
		me._vimeo_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._vimeo_popup_phone);
		el=me._video_file_popup_phone=document.createElement('div');
		me._video_file_popup_phone.seekbars = [];
		me._video_file_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_file_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_file_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_file_popup_phone.hasChildNodes()) {
				me._video_file_popup_phone.removeChild(me._video_file_popup_phone.lastChild);
			}
			if (me._video_file_popup_phone__vid) {
				me._video_file_popup_phone__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_file_popup_phone.ggVideoNotLoaded == false && me._video_file_popup_phone.ggDeactivate && player.isPlaying('video_file_popup_phone')) { me._video_file_popup_phone.ggDeactivate(); }
				me._video_file_popup_phone.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_file_popup_phone');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_file_popup_phone.ggVideoNotLoaded = false;
			me._video_file_popup_phone__vid=document.createElement('video');
			me._video_file_popup_phone__vid.className='ggskin ggskin_video';
			me._video_file_popup_phone__vid.setAttribute('width', '100%');
			me._video_file_popup_phone__vid.setAttribute('height', '100%');
			me._video_file_popup_phone__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_file_popup_phone__vid.setAttribute('controlsList', 'nodownload');
			me._video_file_popup_phone__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_file_popup_phone__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_file_popup_phone__vid.setAttribute('autoplay', '');
			me._video_file_popup_phone__source=document.createElement('source');
			me._video_file_popup_phone__source.setAttribute('src', media);
			me._video_file_popup_phone__vid.setAttribute('playsinline', 'playsinline');
			me._video_file_popup_phone__vid.setAttribute('style', ';');
			me._video_file_popup_phone__vid.style.outline = 'none';
			me._video_file_popup_phone__vid.appendChild(me._video_file_popup_phone__source);
			me._video_file_popup_phone.appendChild(me._video_file_popup_phone__vid);
			var videoEl = player.registerVideoElement('video_file_popup_phone', me._video_file_popup_phone__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_file_popup_phone', 0.0);
			notifySeekbars();
			me._video_file_popup_phone.ggVideoSource = media;
		}
		el.ggId="video_file_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 155px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone.ggIsActive=function() {
			if (me._video_file_popup_phone__vid != null) {
				return (me._video_file_popup_phone__vid.paused == false && me._video_file_popup_phone__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_popup_phone.style.transition='';
				if (me._video_file_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._video_file_popup_phone.style.visibility=(Number(me._video_file_popup_phone.style.opacity)>0||!me._video_file_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._video_file_popup_phone.ggVideoNotLoaded) {
						me._video_file_popup_phone.ggInitMedia(me._video_file_popup_phone.ggVideoSource);
					}
					me._video_file_popup_phone.ggVisible=true;
				}
				else {
					me._video_file_popup_phone.style.visibility="hidden";
					me._video_file_popup_phone.ggInitMedia('');
					me._video_file_popup_phone.ggVisible=false;
				}
			}
		}
		me._video_file_popup_phone.logicBlock_visible();
		me._video_file_popup_phone.onclick=function (e) {
			if (me._video_file_popup_phone.ggApiPlayer) {
				if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_file_popup_phone.ggApiPlayer.getPlayerState() == 1) {
							me._video_file_popup_phone.ggApiPlayer.pauseVideo();
						} else {
							me._video_file_popup_phone.ggApiPlayer.playVideo();
						}
					};
					if (me._video_file_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
					var promise = me._video_file_popup_phone.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_file_popup_phone.ggApiPlayer.play();
						} else {
							me._video_file_popup_phone.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_file_popup_phone","1");
			}
		}
		me._video_file_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._video_file_popup_phone);
		el=me._video_url_popup_phone=document.createElement('div');
		me._video_url_popup_phone.seekbars = [];
		me._video_url_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_url_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_url_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_url_popup_phone.hasChildNodes()) {
				me._video_url_popup_phone.removeChild(me._video_url_popup_phone.lastChild);
			}
			if (me._video_url_popup_phone__vid) {
				me._video_url_popup_phone__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_url_popup_phone.ggVideoNotLoaded == false && me._video_url_popup_phone.ggDeactivate && player.isPlaying('video_url_popup_phone')) { me._video_url_popup_phone.ggDeactivate(); }
				me._video_url_popup_phone.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_url_popup_phone');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_url_popup_phone.ggVideoNotLoaded = false;
			me._video_url_popup_phone__vid=document.createElement('video');
			me._video_url_popup_phone__vid.className='ggskin ggskin_video';
			me._video_url_popup_phone__vid.setAttribute('width', '100%');
			me._video_url_popup_phone__vid.setAttribute('height', '100%');
			me._video_url_popup_phone__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_url_popup_phone__vid.setAttribute('controlsList', 'nodownload');
			me._video_url_popup_phone__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_url_popup_phone__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_url_popup_phone__vid.setAttribute('autoplay', '');
			me._video_url_popup_phone__source=document.createElement('source');
			me._video_url_popup_phone__source.setAttribute('src', media);
			me._video_url_popup_phone__vid.setAttribute('playsinline', 'playsinline');
			me._video_url_popup_phone__vid.setAttribute('style', ';');
			me._video_url_popup_phone__vid.style.outline = 'none';
			me._video_url_popup_phone__vid.appendChild(me._video_url_popup_phone__source);
			me._video_url_popup_phone.appendChild(me._video_url_popup_phone__vid);
			var videoEl = player.registerVideoElement('video_url_popup_phone', me._video_url_popup_phone__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_url_popup_phone', 0.0);
			notifySeekbars();
			me._video_url_popup_phone.ggVideoSource = media;
		}
		el.ggId="video_url_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 155px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone.ggIsActive=function() {
			if (me._video_url_popup_phone__vid != null) {
				return (me._video_url_popup_phone__vid.paused == false && me._video_url_popup_phone__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_popup_phone.style.transition='';
				if (me._video_url_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._video_url_popup_phone.style.visibility=(Number(me._video_url_popup_phone.style.opacity)>0||!me._video_url_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._video_url_popup_phone.ggVideoNotLoaded) {
						me._video_url_popup_phone.ggInitMedia(me._video_url_popup_phone.ggVideoSource);
					}
					me._video_url_popup_phone.ggVisible=true;
				}
				else {
					me._video_url_popup_phone.style.visibility="hidden";
					me._video_url_popup_phone.ggInitMedia('');
					me._video_url_popup_phone.ggVisible=false;
				}
			}
		}
		me._video_url_popup_phone.logicBlock_visible();
		me._video_url_popup_phone.onclick=function (e) {
			if (me._video_url_popup_phone.ggApiPlayer) {
				if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_url_popup_phone.ggApiPlayer.getPlayerState() == 1) {
							me._video_url_popup_phone.ggApiPlayer.pauseVideo();
						} else {
							me._video_url_popup_phone.ggApiPlayer.playVideo();
						}
					};
					if (me._video_url_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
					var promise = me._video_url_popup_phone.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_url_popup_phone.ggApiPlayer.play();
						} else {
							me._video_url_popup_phone.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_url_popup_phone","1");
			}
		}
		me._video_url_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._video_url_popup_phone);
		me._screentint_phone.appendChild(me._safe_area_phone);
		me.divSkin.appendChild(me._screentint_phone);
		el=me._screen_tint=document.createElement('div');
		el.ggId="screen_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screen_tint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screen_tint.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_pdf_popup') == true)) || 
				((player.getVariableValue('vis_url_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screen_tint.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screen_tint.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screen_tint.style.transition='';
				if (me._screen_tint.ggCurrentLogicStateVisible == 0) {
					me._screen_tint.style.visibility=(Number(me._screen_tint.style.opacity)>0||!me._screen_tint.style.opacity)?'inherit':'hidden';
					me._screen_tint.ggVisible=true;
				}
				else {
					me._screen_tint.style.visibility="hidden";
					me._screen_tint.ggVisible=false;
				}
			}
		}
		me._screen_tint.logicBlock_visible();
		me._screen_tint.onclick=function (e) {
			player.setVariableValue('vis_pdf_popup', false);
			player.setVariableValue('vis_url_popup', false);
		}
		me._screen_tint.ggUpdatePosition=function (useTransition) {
		}
		el=me._screen_tint_bg=document.createElement('div');
		el.ggId="screen_tint_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screen_tint_bg.ggIsActive=function() {
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
		me._screen_tint_bg.ggUpdatePosition=function (useTransition) {
		}
		me._screen_tint.appendChild(me._screen_tint_bg);
		el=me._screen_tint_close=document.createElement('div');
		els=me._screen_tint_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IndoaXRlIiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._screen_tint_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._screen_tint_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZpZXdCb3g9IjAgMCAxOCAxOCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6Ii8+Cjwvc3ZnPgo=';
		me._screen_tint_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="screen_tint_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screen_tint_close.ggIsActive=function() {
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
		me._screen_tint_close.onmouseenter=function (e) {
			me._screen_tint_close__img.style.visibility='hidden';
			me._screen_tint_close__imgo.style.visibility='inherit';
			me.elementMouseOver['screen_tint_close']=true;
		}
		me._screen_tint_close.onmouseleave=function (e) {
			me._screen_tint_close__img.style.visibility='inherit';
			me._screen_tint_close__imgo.style.visibility='hidden';
			me.elementMouseOver['screen_tint_close']=false;
		}
		me._screen_tint_close.ggUpdatePosition=function (useTransition) {
		}
		me._screen_tint.appendChild(me._screen_tint_close);
		me.divSkin.appendChild(me._screen_tint);
		el=me._pdf_popup=document.createElement('div');
		el.ggId="pdf_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pdf_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_pdf_popup') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._pdf_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._pdf_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._pdf_popup.style.transition='opacity 500ms ease 0ms';
				if (me._pdf_popup.ggCurrentLogicStateAlpha == 0) {
					me._pdf_popup.style.visibility=me._pdf_popup.ggVisible?'inherit':'hidden';
					me._pdf_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._pdf_popup.style.opacity == 0.0) { me._pdf_popup.style.visibility="hidden"; } }, 505);
					me._pdf_popup.style.opacity=0;
				}
			}
		}
		me._pdf_popup.logicBlock_alpha();
		me._pdf_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._pdf_popup_pdf=document.createElement('div');
		els=me._pdf_popup_pdf__pdf=document.createElement('iframe');
		els.className='ggskin ggskin_pdf';
		els.setAttribute('style','position: absolute;');
		me._pdf_popup_pdf__pdf.setAttribute('frameborder', '0');
		me._pdf_popup_pdf__pdf.setAttribute('width', '100%');
		me._pdf_popup_pdf__pdf.setAttribute('height', '100%');
		el.appendChild(els);
		el.ggSubElement = els;
		me._pdf_popup_pdf.ggInitPdf = function(file) {
			if (file) {
				if (me._pdf_popup_pdf.ggPdfSource == file) return;
				me._pdf_popup_pdf.pdfNotLoaded = false;
				me._pdf_popup_pdf.ggPdfSource = file;
				let pdfUrl = (me._pdf_popup_pdf.ggPdfSource.indexOf(':') != -1 || me._pdf_popup_pdf.ggPdfSource.startsWith('/') || me._pdf_popup_pdf.ggPdfSource.startsWith('./')) ? me._pdf_popup_pdf.ggPdfSource : window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/')) + '/' + me._pdf_popup_pdf.ggPdfSource;
				me._pdf_popup_pdf__pdf.setAttribute('src', basePath + './3rdparty/pdfjs/web/viewer.html?file=' + pdfUrl + '&toolbar=true&sidebar=true&textsearch=true&fullscreen=true&printing=true&download=false&tools=true&enablelinks=true#page=1');
				me._pdf_popup_pdf__pdf.style.display = 'block';
			} else {
				me._pdf_popup_pdf__pdf.setAttribute('src', '');
				me._pdf_popup_pdf__pdf.style.display = 'none';
				me._pdf_popup_pdf.pdfNotLoaded = true;
				me._pdf_popup_pdf.ggPdfSource = '';
			}
		}
		me._pdf_popup_pdf.ggSetCurrentPage = function(page) {
			if (!isNaN(page) && page > 0) me._pdf_popup_pdf__pdf.contentWindow.PDFViewerApplication.page = page;
		}
		me._pdf_popup_pdf.ggInitPdf('');
		el.ggId="pdf_popup_pdf";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_pdf ";
		el.ggType='pdf';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup_pdf.ggIsActive=function() {
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
		me._pdf_popup_pdf.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_popup.appendChild(me._pdf_popup_pdf);
		el=me._pdf_popup_title=document.createElement('div');
		els=me._pdf_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pdf_popup_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._pdf_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pdf_popup_title.ggUpdateText();
		el.appendChild(els);
		me._pdf_popup_title.ggIsActive=function() {
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
		me._pdf_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_popup.appendChild(me._pdf_popup_title);
		me.divSkin.appendChild(me._pdf_popup);
		el=me._url_popup=document.createElement('div');
		el.ggId="url_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._url_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._url_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_url_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._url_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._url_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._url_popup.style.transition='';
				if (me._url_popup.ggCurrentLogicStateVisible == 0) {
					me._url_popup.style.visibility=(Number(me._url_popup.style.opacity)>0||!me._url_popup.style.opacity)?'inherit':'hidden';
					me._url_popup.ggVisible=true;
				}
				else {
					me._url_popup.style.visibility="hidden";
					me._url_popup.ggVisible=false;
				}
			}
		}
		me._url_popup.logicBlock_visible();
		me._url_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._url_popup_title=document.createElement('div');
		els=me._url_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="url_popup_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._url_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._url_popup_title.ggUpdateText();
		el.appendChild(els);
		me._url_popup_title.ggIsActive=function() {
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
		me._url_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._url_popup.appendChild(me._url_popup_title);
		el=me._url_popup_iframe=document.createElement('div');
		els=me._url_popup_iframe__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="url_popup_iframe";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 240px);';
		hs+='left : calc(50% - ((calc(100% - 240px) + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 240px) + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 240px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._url_popup_iframe.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._url_popup_iframe.ggUpdateText();
		el.appendChild(els);
		me._url_popup_iframe.ggIsActive=function() {
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
		me._url_popup_iframe.ggUpdatePosition=function (useTransition) {
		}
		me._url_popup.appendChild(me._url_popup_iframe);
		me.divSkin.appendChild(me._url_popup);
		el=me._local_fonts=document.createElement('div');
		el.ggId="local_fonts";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._local_fonts.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._local_fonts.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._local_fonts);
		el=me._screentint=document.createElement('div');
		el.ggId="screentint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.686275);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_gallery') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint.style.transition='';
				if (me._screentint.ggCurrentLogicStateVisible == 0) {
					me._screentint.style.visibility=(Number(me._screentint.style.opacity)>0||!me._screentint.style.opacity)?'inherit':'hidden';
					me._screentint.ggVisible=true;
				}
				else {
					me._screentint.style.visibility="hidden";
					me._screentint.ggVisible=false;
				}
			}
		}
		me._screentint.logicBlock_visible();
		me._screentint.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint);
		el=me._loader_bar=document.createElement('div');
		el.ggId="loader bar";
		el.ggDx=0;
		el.ggDy=-73;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 349px;';
		hs+='left : calc(50% - ((348px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((349px + 0px) / 2) - 73px);';
		hs+='visibility : inherit;';
		hs+='width : 348px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loader_bar.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loader_bar.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._loader_bar.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._loader_bar.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._loader_bar.style.transition='transform 0s';
				if (me._loader_bar.ggCurrentLogicStateScaling == 0) {
					me._loader_bar.ggParameter.sx = 0.8;
					me._loader_bar.ggParameter.sy = 0.8;
					me._loader_bar.style.transform=parameterToTransform(me._loader_bar.ggParameter);
					skin.updateSize(me._loader_bar);
				}
				else {
					me._loader_bar.ggParameter.sx = 1;
					me._loader_bar.ggParameter.sy = 1;
					me._loader_bar.style.transform=parameterToTransform(me._loader_bar.ggParameter);
					skin.updateSize(me._loader_bar);
				}
			}
		}
		me._loader_bar.logicBlock_scaling();
		me._loader_bar.ggUpdatePosition=function (useTransition) {
		}
		el=me._barfill=document.createElement('div');
		el.ggId="barFill";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00528c;';
		hs+='border : 1px solid #ebe4d4;';
		hs+='border-radius : 4px;';
		hs+='height : 14px;';
		hs+='left : 44px;';
		hs+='position : absolute;';
		hs+='top : 323px;';
		hs+='visibility : inherit;';
		hs+='width : 280px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		me._barfill.ggIsActive=function() {
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
		me._barfill.ggUpdatePosition=function (useTransition) {
		}
		me._loader_bar.appendChild(me._barfill);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text   1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='color : rgba(0,78,134,1);';
		hs+='height : 24px;';
		hs+='left : 51px;';
		hs+='position : absolute;';
		hs+='top : 294px;';
		hs+='visibility : inherit;';
		hs+='width : 288px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			params.push(player._(String((player.getPercentLoaded()*100.0).toFixed(0))));
			var hs = player._("<b>\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430............................%1%<\/b>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		player.addListener('downloadprogress', function() {
			me._text_1.ggUpdateText();
		});
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
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
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._loader_bar.appendChild(me._text_1);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs=basePath + 'images/image_2.gif';
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
		el.ggId="Image   2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 215px;';
		hs+='left : 71px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 215px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
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
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me._loader_bar.appendChild(me._image_2);
		me.divSkin.appendChild(me._loader_bar);
		el=me._gallery_display=document.createElement('div');
		els=me._gallery_display__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="gallery_display";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 60px);';
		hs+='left : calc(50% - ((calc(100% - 60px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 60px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 60px);';
		hs+='pointer-events:auto;';
		hs+='border-radius: 15px; \/* \u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f \u2014 \u043c\u0435\u043d\u044f\u0442\u044c \u043f\u043e \u0432\u043a\u0443\u0441\u0443 *\/ overflow: hidden; \/* \u043e\u0431\u0440\u0435\u0437\u0430\u0435\u0442 \u0432\u0441\u044e \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u0443\u044e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443\/\u0432\u0438\u0434\u0435\u043e \u043f\u043e \u043a\u0440\u0430\u044e *\/ box-sizing: border-box;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._gallery_display.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._gallery_display.ggUpdateText();
		el.appendChild(els);
		me._gallery_display.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gallery_display.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._gallery_display.ggCurrentLogicStateSize != newLogicStateSize) {
				me._gallery_display.ggCurrentLogicStateSize = newLogicStateSize;
				me._gallery_display.style.transition='width 0s, height 0s';
				if (me._gallery_display.ggCurrentLogicStateSize == 0) {
					me._gallery_display.style.width='calc(100%)';
					me._gallery_display.style.height='calc(100%)';
					me._gallery_display.style.left = 'calc(50% - (calc(100%) / 2))';
					me._gallery_display.style.top = 'calc(50% - (calc(100%) / 2))';
					skin.updateSize(me._gallery_display);
				}
				else {
					me._gallery_display.style.width='calc(100% - 60px)';
					me._gallery_display.style.height='calc(100% - 60px)';
					me._gallery_display.style.left = 'calc(50% - (calc(100% - 60px) / 2))';
					me._gallery_display.style.top = 'calc(50% - (calc(100% - 60px) / 2))';
					skin.updateSize(me._gallery_display);
				}
			}
		}
		me._gallery_display.logicBlock_size();
		me._gallery_display.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_gallery') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gallery_display.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gallery_display.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gallery_display.style.transition='width 0s, height 0s';
				if (me._gallery_display.ggCurrentLogicStateVisible == 0) {
					me._gallery_display.style.visibility=(Number(me._gallery_display.style.opacity)>0||!me._gallery_display.style.opacity)?'inherit':'hidden';
					me._gallery_display.ggVisible=true;
				}
				else {
					me._gallery_display.style.visibility="hidden";
					me._gallery_display.ggVisible=false;
				}
			}
		}
		me._gallery_display.logicBlock_visible();
		me._gallery_display.ggUpdatePosition=function (useTransition) {
		}
		el=me._gallery_close=document.createElement('div');
		els=me._gallery_close__img=document.createElement('img');
		els.className='ggskin ggskin_gallery_close';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAKSWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAASImdU3dYk/cWPt/3ZQ9WQtjwsZdsgQAiI6wIyBBZohCSAGGEEBJAxYWIClYUFRGcSFXEgtUKSJ2I4qAouGdBiohai1VcOO4f3Ke1fXrv7e371/u855zn/M55zw+AERImkeaiagA5UoU8Otgfj09IxMm9gAIVSOAEIBDmy8JnBcUAAPADeXh+dLA//AGvbwACAHDVLiQSx+H/g7pQJlcAIJEA4CIS5wsBkFIAyC5UyBQAyBgAsFOzZAoAlAAAbHl8QiIAqg0A7PRJPgUA2KmT3BcA2KIcqQgAjQEAmShHJAJAuwBgVYFSLALAwgCgrEAiLgTArgGAWbYyRwKAvQUAdo5YkA9AYACAmUIszAAgOAIAQx4TzQ'+
			'MgTAOgMNK/4KlfcIW4SAEAwMuVzZdL0jMUuJXQGnfy8ODiIeLCbLFCYRcpEGYJ5CKcl5sjE0jnA0zODAAAGvnRwf44P5Dn5uTh5mbnbO/0xaL+a/BvIj4h8d/+vIwCBAAQTs/v2l/l5dYDcMcBsHW/a6lbANpWAGjf+V0z2wmgWgrQevmLeTj8QB6eoVDIPB0cCgsL7SViob0w44s+/zPhb+CLfvb8QB7+23rwAHGaQJmtwKOD/XFhbnauUo7nywRCMW735yP+x4V//Y4p0eI0sVwsFYrxWIm4UCJNx3m5UpFEIcmV4hLpfzLxH5b9CZN3DQCshk/ATrYHtctswH7uAQKLDljSdgBAfvMtjBoLkQAQZzQyefcAAJO/+Y9AKwEAzZek4wAAvOgYXKiUF0zGCAAARKCBKrBBBwzBFKzADpzBHbzAFwJhBkRADCTAPBBC'+
			'BuSAHAqhGJZBGVTAOtgEtbADGqARmuEQtMExOA3n4BJcgetwFwZgGJ7CGLyGCQRByAgTYSE6iBFijtgizggXmY4EImFINJKApCDpiBRRIsXIcqQCqUJqkV1II/ItchQ5jVxA+pDbyCAyivyKvEcxlIGyUQPUAnVAuagfGorGoHPRdDQPXYCWomvRGrQePYC2oqfRS+h1dAB9io5jgNExDmaM2WFcjIdFYIlYGibHFmPlWDVWjzVjHVg3dhUbwJ5h7wgkAouAE+wIXoQQwmyCkJBHWExYQ6gl7CO0EroIVwmDhDHCJyKTqE+0JXoS+cR4YjqxkFhGrCbuIR4hniVeJw4TX5NIJA7JkuROCiElkDJJC0lrSNtILaRTpD7SEGmcTCbrkG3J3uQIsoCsIJeRt5APkE+S+8nD5LcUOsWI4kwJoiRSpJQSSjVlP+UEpZ8yQp'+
			'mgqlHNqZ7UCKqIOp9aSW2gdlAvU4epEzR1miXNmxZDy6Qto9XQmmlnafdoL+l0ugndgx5Fl9CX0mvoB+nn6YP0dwwNhg2Dx0hiKBlrGXsZpxi3GS+ZTKYF05eZyFQw1zIbmWeYD5hvVVgq9ip8FZHKEpU6lVaVfpXnqlRVc1U/1XmqC1SrVQ+rXlZ9pkZVs1DjqQnUFqvVqR1Vu6k2rs5Sd1KPUM9RX6O+X/2C+mMNsoaFRqCGSKNUY7fGGY0hFsYyZfFYQtZyVgPrLGuYTWJbsvnsTHYF+xt2L3tMU0NzqmasZpFmneZxzQEOxrHg8DnZnErOIc4NznstAy0/LbHWaq1mrX6tN9p62r7aYu1y7Rbt69rvdXCdQJ0snfU6bTr3dQm6NrpRuoW623XP6j7TY+t56Qn1yvUO6d3RR/Vt9KP1F+rv1u/RHzcwNAg2kBls'+
			'MThj8MyQY+hrmGm40fCE4agRy2i6kcRoo9FJoye4Ju6HZ+M1eBc+ZqxvHGKsNN5l3Gs8YWJpMtukxKTF5L4pzZRrmma60bTTdMzMyCzcrNisyeyOOdWca55hvtm82/yNhaVFnMVKizaLx5balnzLBZZNlvesmFY+VnlW9VbXrEnWXOss623WV2xQG1ebDJs6m8u2qK2brcR2m23fFOIUjynSKfVTbtox7PzsCuya7AbtOfZh9iX2bfbPHcwcEh3WO3Q7fHJ0dcx2bHC866ThNMOpxKnD6VdnG2ehc53zNRemS5DLEpd2lxdTbaeKp26fesuV5RruutK10/Wjm7ub3K3ZbdTdzD3Ffav7TS6bG8ldwz3vQfTw91jicczjnaebp8LzkOcvXnZeWV77vR5Ps5wmntYwbcjbxFvgvct7YDo+PWX6zukDPsY+Ap96n4e+pr'+
			'4i3z2+I37Wfpl+B/ye+zv6y/2P+L/hefIW8U4FYAHBAeUBvYEagbMDawMfBJkEpQc1BY0FuwYvDD4VQgwJDVkfcpNvwBfyG/ljM9xnLJrRFcoInRVaG/owzCZMHtYRjobPCN8Qfm+m+UzpzLYIiOBHbIi4H2kZmRf5fRQpKjKqLupRtFN0cXT3LNas5Fn7Z72O8Y+pjLk722q2cnZnrGpsUmxj7Ju4gLiquIF4h/hF8ZcSdBMkCe2J5MTYxD2J43MC52yaM5zkmlSWdGOu5dyiuRfm6c7Lnnc8WTVZkHw4hZgSl7I/5YMgQlAvGE/lp25NHRPyhJuFT0W+oo2iUbG3uEo8kuadVpX2ON07fUP6aIZPRnXGMwlPUit5kRmSuSPzTVZE1t6sz9lx2S05lJyUnKNSDWmWtCvXMLcot09mKyuTDeR55m3KG5OHyvfkI/lz'+
			'89sVbIVM0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeS'+
			'vSOr91rC2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+y1HOM8AAAAJcEhZcwAADsQAAA7EAZUrDhsA'+
			'AAE9SURBVFiF3Zg7GoMgEIQXThc7L2QTL2Tn8UgTEkJY2JcQMi3C/t+sjIgLIYBGbtmP2ng4t1W1PhewBdQSF5gMqAXLRQX1lIes4ThrVh28Aqykmpuog73gWrWKgD3hWjW/AEfA1WqTNslIfQCOdA9j8NjASKUsc7SY657k+8r+xD2Z2A7GQpyCkjlRbMDUbUrB9BnJey56B6mQWji37IeD2509kQKghYtS7WLMSSs4AACVg1FYmy2y1SQHSyBWwT9HUGtVarH2ZylKDZhvCG5OtqQCxHarJaSXLtCKEitIkYPUnNNChnNbxYeFHACTFlJ8WODknGTOa278L/6lEzXA2+15gtoqWC2UsnhsYJRyhnlaHDXSxVLtooMjILGaaIt7QtZqkW5Yr8pIigmkTXKFm9Q1/+cSvTiZCKvpwAMTUd2mJP7ywwAAAABJRU5Erk'+
			'Jggg==';
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
		el.ggId="gallery_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gallery_close.ggIsActive=function() {
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
		me._gallery_close.onclick=function (e) {
			player.setVariableValue('vis_gallery', false);
			player.setVariableValue('gallery', "");
		}
		me._gallery_close.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_display.appendChild(me._gallery_close);
		me.divSkin.appendChild(me._gallery_display);
		me._timer_2.logicBlock_visible();
		me._node_title.logicBlock_visible();
		me._node_title.logicBlock_alpha();
		me._text_otkritie_dveri.logicBlock_visible();
		me.elementMouseOver['text_otkritie_dveri']=false;
		me._menu.logicBlock_position();
		me._menu.logicBlock_size();
		me._menu.logicBlock_visible();
		me._menu.logicBlock_alpha();
		me._giro.logicBlock_visible();
		me._btn_vr.logicBlock_visible();
		me._btn_languages.logicBlock_visible();
		me.elementMouseOver['btn_languages']=false;
		me._hs_on.logicBlock_visible();
		me._hs_off.logicBlock_visible();
		me._audio_toggle.logicBlock_visible();
		me._sound_off.logicBlock_visible();
		me._sound_on.logicBlock_visible();
		me._fullscreen_toggle.logicBlock_visible();
		me._image_4.logicBlock_visible();
		me._fullscreen_enter.logicBlock_visible();
		me._languages_scroller.logicBlock_position();
		me._languages_scroller.logicBlock_size();
		me._languages_scroller.logicBlock_visible();
		me._nodes_menu_phone_landscape.logicBlock_visible();
		me._nodes_menu.logicBlock_size();
		me._nodes_menu.logicBlock_visible();
		me._categories_menu_phone_landscape.logicBlock_visible();
		me._categories_menu.logicBlock_size();
		me._categories_menu.logicBlock_visible();
		me._menu_toggle_bg.logicBlock_visible();
		me._menu_toggle_bg.logicBlock_alpha();
		me._menu_toggle.logicBlock_position();
		me._menu_toggle.logicBlock_visible();
		me._menu_toggle.logicBlock_alpha();
		me.elementMouseOver['back_to_close_anim']=false;
		me._menu_toggle_back.logicBlock_visible();
		me.elementMouseOver['close_to_menu_anim']=false;
		me._menu_toggle_off_active.logicBlock_visible();
		me.elementMouseOver['menu_to_close_anim']=false;
		me._menu_toggle_on_active.logicBlock_visible();
		me._menu_toggle_timer.logicBlock_visible();
		me._size_show.logicBlock_scaling();
		me._size_show.logicBlock_visible();
		me._rectangle_1.logicBlock_visible();
		me._image_6.logicBlock_visible();
		me._timer_1.logicBlock_visible();
		me._triangle.logicBlock_visible();
		me._triangle.logicBlock_alpha();
		me._glavnii_container.logicBlock_position();
		me._glavnii_container.logicBlock_size();
		me._description.logicBlock_visible();
		me._description.logicBlock_alpha();
		me._bg_sound.logicBlock_visible();
		me._bg_sound.logicBlock_alpha();
		me._bg_sound.logicBlock_backgroundcolor();
		me._bg_sound.logicBlock_borderwidth();
		me.elementMouseOver['bg_sound']=false;
		me._on.logicBlock_visible();
		me._on.logicBlock_textcolor();
		me._off.logicBlock_visible();
		me._off.logicBlock_textcolor();
		me._on1.logicBlock_visible();
		me._off1.logicBlock_visible();
		me._bg_full_screen_on.logicBlock_visible();
		me._bg_full_screen_on.logicBlock_alpha();
		me._bg_full_screen_on.logicBlock_backgroundcolor();
		me._bg_full_screen_on.logicBlock_borderwidth();
		me.elementMouseOver['bg_full_screen_on']=false;
		me._off_full_screen.logicBlock_visible();
		me._off_full_screen.logicBlock_textcolor();
		me._on_full_screen.logicBlock_visible();
		me._on_full_screen.logicBlock_textcolor();
		me._full_screen_off.logicBlock_visible();
		me._fullscreen_enter2.logicBlock_visible();
		me._close_pop_up.logicBlock_visible();
		me._close_pop_up.logicBlock_alpha();
		me._close_pop_up.logicBlock_backgroundcolor();
		me._close_pop_up.logicBlock_borderwidth();
		me.elementMouseOver['close_pop_up']=false;
		me._sounds_splashscreen.logicBlock_visible();
		me._screentint_phone.logicBlock_alpha();
		me.elementMouseOver['btn_close_popup_phone']=false;
		me._info_popup_phone.logicBlock_visible();
		me._image_popup_phone.logicBlock_visible();
		me._pdf_popup_phone.logicBlock_visible();
		me._video_controller_phone.logicBlock_visible();
		me.elementMouseOver['video_controller_button_pause_phone']=false;
		me.elementMouseOver['video_controller_button_play_phone']=false;
		me._youtube_popup_phone.logicBlock_visible();
		me._youtube_popup_phone.ggVideoSource = '';
		me._youtube_popup_phone.ggVideoNotLoaded = true;
		me._vimeo_popup_phone.logicBlock_visible();
		me._vimeo_popup_phone.ggVideoSource = '';
		me._vimeo_popup_phone.ggVideoNotLoaded = true;
		me._video_file_popup_phone.logicBlock_visible();
		me._video_file_popup_phone.ggVideoSource = 'media/';
		me._video_file_popup_phone.ggVideoNotLoaded = true;
		me._video_url_popup_phone.logicBlock_visible();
		me._video_url_popup_phone.ggVideoSource = 'media/';
		me._video_url_popup_phone.ggVideoNotLoaded = true;
		me._screen_tint.logicBlock_visible();
		me.elementMouseOver['screen_tint_close']=false;
		me._pdf_popup.logicBlock_alpha();
		me._url_popup.logicBlock_visible();
		el = me._local_fonts;
		;
		me._screentint.logicBlock_visible();
		me._loader_bar.logicBlock_scaling();
		me._gallery_display.logicBlock_size();
		me._gallery_display.logicBlock_visible();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_gallery')) {
				for(var i = 0; i < hotspotTemplates['ht_gallery'].length; i++) {
					hotspotTemplates['ht_gallery'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_activehotspotchanged();
				}
			}
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._node_cloner.ggInstances.length; i++) {
				me._node_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._node_cloner_pl.ggInstances.length; i++) {
				me._node_cloner_pl.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_gallery')) {
				for(var i = 0; i < hotspotTemplates['ht_gallery'].length; i++) {
					hotspotTemplates['ht_gallery'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_changenode();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._timer_2.logicBlock_visible();
			if (
				(
					((player.getVariableValue('opt_proj_title') == true)) && 
					((player.getVariableValue('resp_phone') == false)) && 
					((player.getVariableValue('vis_skin') == true))
				)
			) {
				me._timer_2.ggTimeout=Number("5") * 1000.0;
				me._timer_2.ggTimestamp=skin.ggCurrentTime;
			}
			me._node_title.logicBlock_visible();
			me._node_title.logicBlock_alpha();
			player.setMediaVisibility("shkaf.*","0",0);
			player.setMediaVisibility("Door","1",0);
			player.setMediaVisibility("shkaf_tualet","0",0);
			me._menu.logicBlock_position();
			me._menu.logicBlock_size();
			me._menu.logicBlock_visible();
			me._menu.logicBlock_alpha();
			me._giro.logicBlock_visible();
			me._hs_on.logicBlock_visible();
			me._hs_off.logicBlock_visible();
			me._sound_off.logicBlock_visible();
			me._sound_on.logicBlock_visible();
			me._fullscreen_toggle.logicBlock_visible();
			me._languages_scroller.logicBlock_position();
			me._languages_scroller.logicBlock_size();
			me._languages_scroller.logicBlock_visible();
			me._languages_cloner.ggUpdateConditionNodeChange();
			me._nodes_menu_phone_landscape.logicBlock_visible();
			me._node_cloner_pl.ggUpdateConditionNodeChange();
			me._nodes_menu.logicBlock_size();
			me._nodes_menu.logicBlock_visible();
			me._node_cloner.ggUpdateConditionNodeChange();
			me._categories_menu_phone_landscape.logicBlock_visible();
			me._categories_cloner_pl.ggUpdateConditionNodeChange();
			me._categories_menu.logicBlock_size();
			me._categories_menu.logicBlock_visible();
			me._categories_cloner.ggUpdateConditionNodeChange();
			me._menu_toggle_bg.logicBlock_visible();
			me._menu_toggle_bg.logicBlock_alpha();
			me._menu_toggle.logicBlock_position();
			me._menu_toggle.logicBlock_visible();
			me._menu_toggle.logicBlock_alpha();
			me._menu_toggle_back.logicBlock_visible();
			me._menu_toggle_off_active.logicBlock_visible();
			me._menu_toggle_on_active.logicBlock_visible();
			me._menu_toggle_timer.logicBlock_visible();
			me._size_show.logicBlock_scaling();
			me._size_show.logicBlock_visible();
			me._rectangle_1.logicBlock_visible();
			me._image_6.logicBlock_visible();
			me._timer_1.logicBlock_visible();
			me._triangle.logicBlock_visible();
			me._triangle.logicBlock_alpha();
			me._glavnii_container.logicBlock_position();
			me._glavnii_container.logicBlock_size();
			me._description.logicBlock_visible();
			me._description.logicBlock_alpha();
			me._bg_sound.logicBlock_visible();
			me._bg_sound.logicBlock_alpha();
			me._on.logicBlock_visible();
			me._off.logicBlock_visible();
			me._on1.logicBlock_visible();
			me._off1.logicBlock_visible();
			me._bg_full_screen_on.logicBlock_visible();
			me._bg_full_screen_on.logicBlock_alpha();
			me._close_pop_up.logicBlock_visible();
			me._close_pop_up.logicBlock_alpha();
			me._sounds_splashscreen.logicBlock_visible();
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_phone.logicBlock_visible();
			me._image_popup_phone.logicBlock_visible();
			me._pdf_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._video_controller_seekbar_phone.ggConnectToMediaEl();
			me._youtube_popup_phone.logicBlock_visible();
			me._vimeo_popup_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._screen_tint.logicBlock_visible();
			me._pdf_popup.logicBlock_alpha();
			me._url_popup.logicBlock_visible();
			me._screentint.logicBlock_visible();
			me._gallery_display.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_gallery')) {
				for(var i = 0; i < hotspotTemplates['ht_gallery'].length; i++) {
					hotspotTemplates['ht_gallery'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_configloaded();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_has_fullscreen.logicBlock();
			me._variable_resp_phone_landscape.logicBlock();
			me._node_title.logicBlock_visible();
			me._node_title.logicBlock_alpha();
			me._menu.logicBlock_position();
			me._menu.logicBlock_size();
			me._menu.logicBlock_visible();
			me._menu.logicBlock_alpha();
			me._giro.logicBlock_visible();
			me._btn_languages.logicBlock_visible();
			me._hs_on.logicBlock_visible();
			me._hs_off.logicBlock_visible();
			me._audio_toggle.logicBlock_visible();
			me._sound_off.logicBlock_visible();
			me._sound_on.logicBlock_visible();
			me._fullscreen_toggle.logicBlock_visible();
			me._languages_scroller.ggUpdatePosition();
			me._languages_scroller.logicBlock_position();
			me._languages_scroller.logicBlock_size();
			me._languages_scroller.logicBlock_visible();
			me._languages_cloner.ggTranslations = player.getProjectTranslations();
			me._languages_cloner.ggUpdate();
			me._nodes_menu_phone_landscape.logicBlock_visible();
			me._nodes_scroller_pl.ggUpdatePosition();
			me._nodes_menu.logicBlock_size();
			me._nodes_menu.logicBlock_visible();
			me._nodes_scroller.ggUpdatePosition();
			me._categories_menu_phone_landscape.logicBlock_visible();
			me._categories_scroller_pl.ggUpdatePosition();
			if (
				(
					((skin._categories_cloner_pl.ggNodeCount > 1))
				)
			) {
				player.setVariableValue('has_categories', true);
			}
			me._categories_menu.logicBlock_size();
			me._categories_menu.logicBlock_visible();
			me._categories_scroller.ggUpdatePosition();
			if (
				(
					((skin._categories_cloner.ggNodeCount > 1))
				)
			) {
				player.setVariableValue('has_categories', true);
			}
			me._menu_toggle_bg.logicBlock_visible();
			me._menu_toggle_bg.logicBlock_alpha();
			me._menu_toggle.logicBlock_position();
			me._menu_toggle.logicBlock_visible();
			me._menu_toggle.logicBlock_alpha();
			me._menu_toggle_back.logicBlock_visible();
			me._menu_toggle_off_active.logicBlock_visible();
			me._menu_toggle_on_active.logicBlock_visible();
			me._size_show.logicBlock_scaling();
			me._size_show.logicBlock_visible();
			me._size_show.style.transition='none';
			me._size_show.style.visibility=(Number(me._size_show.style.opacity)>0||!me._size_show.style.opacity)?'inherit':'hidden';
			me._size_show.ggVisible=true;
			me._rectangle_1.logicBlock_visible();
			me._image_6.logicBlock_visible();
			me._triangle.logicBlock_visible();
			me._triangle.logicBlock_alpha();
			me._glavnii_container.logicBlock_position();
			me._glavnii_container.logicBlock_size();
			me._description.logicBlock_visible();
			me._description.logicBlock_alpha();
			me._bg_sound.logicBlock_visible();
			me._bg_sound.logicBlock_alpha();
			me._on.logicBlock_visible();
			me._off.logicBlock_visible();
			me._on1.logicBlock_visible();
			me._off1.logicBlock_visible();
			me._bg_full_screen_on.logicBlock_visible();
			me._bg_full_screen_on.logicBlock_alpha();
			me._close_pop_up.logicBlock_visible();
			me._close_pop_up.logicBlock_alpha();
			me._sounds_splashscreen.logicBlock_visible();
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_phone.logicBlock_visible();
			me._image_popup_phone.logicBlock_visible();
			me._pdf_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._youtube_popup_phone.logicBlock_visible();
			me._vimeo_popup_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._screen_tint.logicBlock_visible();
			me._pdf_popup.logicBlock_alpha();
			me._url_popup.logicBlock_visible();
			me._screentint.logicBlock_visible();
			me._loader_bar.style.transition='none';
			me._loader_bar.style.visibility='hidden';
			me._loader_bar.ggVisible=false;
			me._gallery_display.logicBlock_visible();
		});
		player.addListener('fullscreenenter', function(event) {
			me._image_4.logicBlock_visible();
			me._fullscreen_enter.logicBlock_visible();
			me._off_full_screen.logicBlock_visible();
			me._on_full_screen.logicBlock_visible();
			me._full_screen_off.logicBlock_visible();
			me._fullscreen_enter2.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me._image_4.logicBlock_visible();
			me._fullscreen_enter.logicBlock_visible();
			me._off_full_screen.logicBlock_visible();
			me._on_full_screen.logicBlock_visible();
			me._full_screen_off.logicBlock_visible();
			me._fullscreen_enter2.logicBlock_visible();
		});
		player.addListener('gyroavailable', function(event) {
			me._giro.logicBlock_visible();
		});
		player.addListener('hastouch', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_hastouch();
				}
			}
		});
		player.addListener('hsproxyclick', function(event) {
			if (event.id=='poly01') {
				me.__.onclick();
			}
		});
		player.addListener('hsproxyout', function(event) {
			if (event.id=='poly01') {
				me._text_otkritie_dveri.onmouseleave();
			}
		});
		player.addListener('hsproxyover', function(event) {
			if (event.id=='poly01') {
				me._text_otkritie_dveri.onmouseenter();
			}
		});
		player.addListener('playerclick', function(event) {
			player.setMediaVisibility(player.hotspot.description,"1",500);
			player.setMediaVisibility(player.hotspot.description,"1",500);
		});
		player.addListener('playerdblclick', function(event) {
			player.setMediaVisibility("shkaf.*","0",500);
			player.setMediaVisibility("shkaf_tualet","0",500);
		});
		player.addListener('playerstatechanged', function(event) {
			player.setVariableValue('pos_menu_button', Number("0.00"));
			player.setVariableValue('pos_menu_button_vert', Number("0.00"));
			player.setVariableValue('num_button_rows', Number("1.00"));
			if (
				(
					((player.getVariableValue('opt_fullscreen') == true)) && 
					((player.getVariableValue('has_fullscreen') == true))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("52.00"));
			}
			me._audio_toggle.style.transition='none';
			me._audio_toggle.ggParameter.rx=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._audio_toggle.ggParameter.ry=0;
			me._audio_toggle.style.transform=parameterToTransform(me._audio_toggle.ggParameter);
			if (
				(
					((player.getHasSounds() == true))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("52.00"));
			}
			me._hotspots_toggle.style.transition='none';
			me._hotspots_toggle.ggParameter.rx=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._hotspots_toggle.ggParameter.ry=0;
			me._hotspots_toggle.style.transform=parameterToTransform(me._hotspots_toggle.ggParameter);
			player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("52.00"));
			me._btn_languages.style.transition='none';
			me._btn_languages.ggParameter.rx=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._btn_languages.ggParameter.ry=0;
			me._btn_languages.style.transform=parameterToTransform(me._btn_languages.ggParameter);
			if (
				(
					((player.getProjectTranslations().length > 1))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("52.00"));
			}
			if (
				(
					((player.getVariableValue('pos_menu_button') > Number("156"))) && 
					((player.getVariableValue('resp_phone_landscape') == false))
				)
			) {
				player.setVariableValue('pos_menu_button_vert', player.getVariableValue('pos_menu_button_vert') - Number("42.00"));
			}
			if (
				(
					((player.getVariableValue('pos_menu_button') > Number("156")))
				)
			) {
				player.setVariableValue('pos_menu_button', Number("0.00"));
			}
			me._btn_vr.style.transition='none';
			me._btn_vr.ggParameter.rx=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._btn_vr.ggParameter.ry=player.getVariableValue('pos_menu_button_vert', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._btn_vr.style.transform=parameterToTransform(me._btn_vr.ggParameter);
			if (
				(
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("52.00"));
			}
			if (
				(
					((player.getVariableValue('pos_menu_button') > Number("156"))) && 
					((player.getVariableValue('resp_phone_landscape') == false))
				)
			) {
				player.setVariableValue('pos_menu_button_vert', player.getVariableValue('pos_menu_button_vert') - Number("42.00"));
			}
			if (
				(
					((player.getVariableValue('pos_menu_button') > Number("156")))
				)
			) {
				player.setVariableValue('pos_menu_button', Number("0.00"));
			}
			me._gyro_toggle.style.transition='none';
			me._gyro_toggle.ggParameter.rx=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._gyro_toggle.ggParameter.ry=player.getVariableValue('pos_menu_button_vert', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._gyro_toggle.style.transform=parameterToTransform(me._gyro_toggle.ggParameter);
			if (
				(
					((player.getGyroAvailable() == true)) && 
					((player.getVariableValue('opt_gyro') == true))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("52.00"));
			}
			if (
				(
					((player.getVariableValue('pos_menu_button_vert') < Number("0"))) && 
					((player.getVariableValue('pos_menu_button') > Number("0")))
				)
			) {
				player.setVariableValue('num_button_rows', player.getVariableValue('num_button_rows') + Number("1.00"));
			}
			if (
				(
					((player.getVariableValue('num_button_rows') > Number("1")))
				)
			) {
				me._button_container.style.transition='none';
				me._button_container.style.width = '188px';
				me._button_container.style.height = '74px';
				me._button_container.ggUpdatePosition();
				skin.updateSize(me._button_container);
			}
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_desktop.logicBlock();
			me._variable_resp_tablet.logicBlock();
			me._variable_resp_phone.logicBlock();
			me._variable_resp_phone_landscape.logicBlock();
			me._loader_bar.logicBlock_scaling();
			me._gallery_display.logicBlock_size();
		});
		player.addListener('soundspermittedchanged', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_has_categories', function(event) {
			me._nodes_menu_phone_landscape.logicBlock_visible();
			me._nodes_menu.logicBlock_visible();
			me._categories_menu_phone_landscape.logicBlock_visible();
			me._categories_menu.logicBlock_visible();
		});
		player.addListener('varchanged_has_fullscreen', function(event) {
			me._fullscreen_toggle.logicBlock_visible();
			me._bg_full_screen_on.logicBlock_visible();
		});
		player.addListener('varchanged_hide_lottie_index', function(event) {
			me._menu_toggle_back.logicBlock_visible();
			me._menu_toggle_off_active.logicBlock_visible();
			me._menu_toggle_on_active.logicBlock_visible();
		});
		player.addListener('varchanged_num_button_rows', function(event) {
			me._languages_scroller.logicBlock_position();
			me._languages_scroller.logicBlock_size();
			me._nodes_menu.logicBlock_size();
			me._categories_menu.logicBlock_size();
		});
		player.addListener('varchanged_open_image_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_open_image_hotspots();
				}
			}
		});
		player.addListener('varchanged_open_info_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_open_info_hotspots();
				}
			}
		});
		player.addListener('varchanged_open_video_file_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_open_video_file_hotspots();
				}
			}
		});
		player.addListener('varchanged_open_video_url_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_varchanged_open_video_url_hotspots();
				}
			}
		});
		player.addListener('varchanged_open_video_vimeo_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_varchanged_open_video_vimeo_hotspots();
				}
			}
		});
		player.addListener('varchanged_open_video_youtube_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_open_video_youtube_hotspots();
				}
			}
		});
		player.addListener('varchanged_opt_fullscreen', function(event) {
			me._fullscreen_toggle.logicBlock_visible();
			me._bg_full_screen_on.logicBlock_visible();
		});
		player.addListener('varchanged_opt_gyro', function(event) {
			me._giro.logicBlock_visible();
		});
		player.addListener('varchanged_opt_proj_title', function(event) {
			me._node_title.logicBlock_visible();
		});
		player.addListener('varchanged_resp_phone', function(event) {
			me._node_title.logicBlock_visible();
		});
		player.addListener('varchanged_resp_phone_landscape', function(event) {
			me._menu.logicBlock_size();
			me._nodes_menu_phone_landscape.logicBlock_visible();
			me._nodes_menu.logicBlock_visible();
			me._categories_menu_phone_landscape.logicBlock_visible();
			me._categories_menu.logicBlock_visible();
			me._menu_toggle.logicBlock_position();
		});
		player.addListener('varchanged_sounds_splashscreen_accepted', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_toggle_audio', function(event) {
			me._sound_off.logicBlock_visible();
			me._sound_on.logicBlock_visible();
			me._on.logicBlock_visible();
			me._off.logicBlock_visible();
			me._on1.logicBlock_visible();
			me._off1.logicBlock_visible();
		});
		player.addListener('varchanged_vis_gallery', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_gallery')) {
				for(var i = 0; i < hotspotTemplates['ht_gallery'].length; i++) {
					hotspotTemplates['ht_gallery'][i].ggEvent_varchanged_vis_gallery();
				}
			}
			me._size_show.logicBlock_visible();
			me._screentint.logicBlock_visible();
			me._gallery_display.logicBlock_visible();
		});
		player.addListener('varchanged_vis_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			me._hs_on.logicBlock_visible();
			me._hs_off.logicBlock_visible();
		});
		player.addListener('varchanged_vis_languages', function(event) {
			me._languages_scroller.logicBlock_visible();
			me._nodes_menu_phone_landscape.logicBlock_visible();
			me._nodes_menu.logicBlock_visible();
			me._categories_menu_phone_landscape.logicBlock_visible();
			me._categories_menu.logicBlock_visible();
			me._menu_toggle.logicBlock_visible();
		});
		player.addListener('varchanged_vis_menu', function(event) {
			me._menu.logicBlock_position();
			me._menu.logicBlock_alpha();
			me._menu_toggle_bg.logicBlock_alpha();
			me._menu_toggle.logicBlock_position();
		});
		player.addListener('varchanged_vis_nodes', function(event) {
			me._nodes_menu_phone_landscape.logicBlock_visible();
			me._nodes_menu.logicBlock_visible();
			me._categories_menu_phone_landscape.logicBlock_visible();
			me._categories_menu.logicBlock_visible();
		});
		player.addListener('varchanged_vis_pdf_popup', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_visible();
			me._pdf_popup.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_phone_image', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._image_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_info', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_pdf', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._pdf_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_file', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._video_controller_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_url', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._video_controller_phone.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_vimeo', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._vimeo_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_youtube', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._youtube_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_skin', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_skin();
				}
			}
			me._node_title.logicBlock_visible();
			me._node_title.logicBlock_alpha();
			me._menu.logicBlock_position();
			me._menu.logicBlock_visible();
			me._menu.logicBlock_alpha();
			me._menu_toggle_bg.logicBlock_visible();
			me._menu_toggle_bg.logicBlock_alpha();
			me._menu_toggle.logicBlock_visible();
			me._menu_toggle.logicBlock_alpha();
			me._bg_sound.logicBlock_visible();
			me._bg_full_screen_on.logicBlock_visible();
			me._close_pop_up.logicBlock_visible();
		});
		player.addListener('varchanged_vis_sounds_splashscreen', function(event) {
			me._variable_vis_skin.logicBlock();
			me._sounds_splashscreen.logicBlock_visible();
		});
		player.addListener('varchanged_vis_url_popup', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_visible();
			me._url_popup.logicBlock_visible();
			if (
				(
					((player.getVariableValue('vis_url_popup') == false))
				)
			) {
					me._url_popup_iframe.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me._url_popup_iframe.ggUpdateText();
				me._url_popup_iframe.ggTextDiv.scrollTop = 0;
			}
		});
		player.addListener('varchanged_window', function(event) {
			me._size_show.logicBlock_scaling();
			me._rectangle_1.logicBlock_visible();
			me._image_6.logicBlock_visible();
			me._triangle.logicBlock_visible();
			me._triangle.logicBlock_alpha();
			if (
				(
					((player.getVariableValue('window') == true))
				)
			) {
				me._timer_1.ggTimeout=Number("3") * 1000.0;
				me._timer_1.ggTimestamp=skin.ggCurrentTime;
			}
			me._glavnii_container.logicBlock_position();
			me._glavnii_container.logicBlock_size();
			me._description.logicBlock_visible();
			me._description.logicBlock_alpha();
			me._bg_sound.logicBlock_visible();
			me._bg_sound.logicBlock_alpha();
			me._bg_full_screen_on.logicBlock_visible();
			me._bg_full_screen_on.logicBlock_alpha();
			me._close_pop_up.logicBlock_visible();
			me._close_pop_up.logicBlock_alpha();
		});
		player.addListener('viewerinit', function(event) {
			me._languages_cloner.ggUpdate();
			me._node_cloner_pl.ggUpdate();
			me._node_cloner.ggUpdate();
			me._categories_cloner_pl.ggUpdate();
			me._categories_cloner.ggUpdate();
		});
		player.addListener('vrchanged', function(event) {
			me._btn_vr.logicBlock_visible();
		});
	};
	function SkinCloner_categories_cloner_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggDescription = item['description'];
		me.ggNodeCount = item['nodecount'];
		me.ggNodeId=item['firstnode'];
		let nodeId=item['firstnode'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='calc(100% - 15px)';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				var tags = player.userdata.tags;
				if (tags.indexOf(me.ggTag) == -1) return false;
				for(var i=0;i<me.ggParent.ggCurrentFilter.length;i++) {
					if (tags.indexOf(me.ggParent.ggCurrentFilter[i])==-1) return false;
				}
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._category_container=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_container;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="category_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 140px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._category_container.ggIsActive=function() {
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
		me._category_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._category_thumbnail=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_thumbnail;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._category_thumbnail__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		if (nodeId) els.setAttribute('src',basePath + "images/category_thumbnail_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="category_thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._category_thumbnail.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._category_thumbnail.onclick=function (e) {
			if (me._category_thumbnail.isDragging()) return;
			skin._node_cloner.ggText=me.ggTag;
			if (skin._node_cloner.ggText=='') {
				skin._node_cloner.ggUpdate([]);
			} else {
				skin._node_cloner.ggUpdate(skin._node_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
			skin._node_cloner_pl.ggText=me.ggTag;
			if (skin._node_cloner_pl.ggText=='') {
				skin._node_cloner_pl.ggUpdate([]);
			} else {
				skin._node_cloner_pl.ggUpdate(skin._node_cloner_pl.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
			player.setVariableValue('vis_nodes', true);
			skin._close_to_menu_anim.style.transition='none';
			skin._close_to_menu_anim.style.visibility='hidden';
			skin._close_to_menu_anim.ggVisible=false;
			skin._close_to_back_anim.style.transition='none';
			skin._close_to_back_anim.style.visibility=(Number(skin._close_to_back_anim.style.opacity)>0||!skin._close_to_back_anim.style.opacity)?'inherit':'hidden';
			skin._close_to_back_anim.ggVisible=true;
			skin._close_to_back_anim.ggLottie.loop = 0;
			skin._close_to_back_anim.ggLottie.play();
			skin._back_to_close_anim.ggLottie.goToAndStop(skin._back_to_close_anim.ggLottie.getDuration(true), true);
			player.setVariableValue('hide_lottie_index', Number("3.00"));
			skin._menu_toggle_timer.ggTimeout=Number("0.5") * 1000.0;
			skin._menu_toggle_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._category_thumbnail.ggUpdatePosition=function (useTransition) {
		}
		el=me._category_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._category_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="category_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._category_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._category_title.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._category_title.ggUpdateText();
		});
		el.appendChild(els);
		me._category_title.ggIsActive=function() {
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
		me._category_title.ggUpdatePosition=function (useTransition) {
		}
		me._category_thumbnail.appendChild(me._category_title);
		me._category_container.appendChild(me._category_thumbnail);
		me.__div.appendChild(me._category_container);
	};
	function SkinCloner_categories_cloner_pl_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggDescription = item['description'];
		me.ggNodeCount = item['nodecount'];
		me.ggNodeId=item['firstnode'];
		let nodeId=item['firstnode'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='calc(100% - 15px)';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				var tags = player.userdata.tags;
				if (tags.indexOf(me.ggTag) == -1) return false;
				for(var i=0;i<me.ggParent.ggCurrentFilter.length;i++) {
					if (tags.indexOf(me.ggParent.ggCurrentFilter[i])==-1) return false;
				}
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._category_container0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_container0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="category_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 140px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._category_container0.ggIsActive=function() {
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
		me._category_container0.ggUpdatePosition=function (useTransition) {
		}
		el=me._category_thumbnail0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_thumbnail0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._category_thumbnail0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		if (nodeId) els.setAttribute('src',basePath + "images/category_thumbnail_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="category_thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._category_thumbnail0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._category_thumbnail0.onclick=function (e) {
			if (me._category_thumbnail0.isDragging()) return;
			skin._node_cloner.ggText=me.ggTag;
			if (skin._node_cloner.ggText=='') {
				skin._node_cloner.ggUpdate([]);
			} else {
				skin._node_cloner.ggUpdate(skin._node_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
			skin._node_cloner_pl.ggText=me.ggTag;
			if (skin._node_cloner_pl.ggText=='') {
				skin._node_cloner_pl.ggUpdate([]);
			} else {
				skin._node_cloner_pl.ggUpdate(skin._node_cloner_pl.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
			player.setVariableValue('vis_nodes', true);
			skin._close_to_menu_anim.style.transition='none';
			skin._close_to_menu_anim.style.visibility='hidden';
			skin._close_to_menu_anim.ggVisible=false;
			skin._close_to_back_anim.style.transition='none';
			skin._close_to_back_anim.style.visibility=(Number(skin._close_to_back_anim.style.opacity)>0||!skin._close_to_back_anim.style.opacity)?'inherit':'hidden';
			skin._close_to_back_anim.ggVisible=true;
			skin._close_to_back_anim.ggLottie.loop = 0;
			skin._close_to_back_anim.ggLottie.play();
			skin._back_to_close_anim.ggLottie.goToAndStop(skin._back_to_close_anim.ggLottie.getDuration(true), true);
			player.setVariableValue('hide_lottie_index', Number("3.00"));
			skin._menu_toggle_timer.ggTimeout=Number("0.5") * 1000.0;
			skin._menu_toggle_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._category_thumbnail0.ggUpdatePosition=function (useTransition) {
		}
		el=me._category_title0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_title0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._category_title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="category_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._category_title0.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._category_title0.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._category_title0.ggUpdateText();
		});
		el.appendChild(els);
		me._category_title0.ggIsActive=function() {
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
		me._category_title0.ggUpdatePosition=function (useTransition) {
		}
		me._category_thumbnail0.appendChild(me._category_title0);
		me._category_container0.appendChild(me._category_thumbnail0);
		me.__div.appendChild(me._category_container0);
	};
	function SkinCloner_node_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='calc(100% - 15px)';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._node_container=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_container;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="node_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 140px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_container.ggIsActive=function() {
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
		me._node_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_thumbnail=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_thumbnail;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_thumbnail__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/category_thumbnail_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_thumbnail.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_thumbnail.onclick=function (e) {
			if (me._node_thumbnail.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			if (
				(
					((player.getVariableValue('resp_phone') == true)) && 
					((player.getVariableValue('has_categories') == true))
				)
			) {
				skin._back_to_close_anim.style.transition='none';
				skin._back_to_close_anim.style.visibility='hidden';
				skin._back_to_close_anim.ggVisible=false;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true)) && 
					((player.getVariableValue('has_categories') == true))
				)
			) {
				skin._close_to_menu_anim.style.transition='none';
				skin._close_to_menu_anim.style.visibility=(Number(skin._close_to_menu_anim.style.opacity)>0||!skin._close_to_menu_anim.style.opacity)?'inherit':'hidden';
				skin._close_to_menu_anim.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._close_to_menu_anim.onclick.call(skin._close_to_menu_anim);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_nodes', false);
			}
		}
		me._node_thumbnail.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_cloner_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_cloner_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_cloner_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._node_cloner_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_cloner_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._node_cloner_title.ggUpdateText();
		});
		el.appendChild(els);
		me._node_cloner_title.ggIsActive=function() {
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
		me._node_cloner_title.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me._node_cloner_title.ggIsActive() == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._node_cloner_title.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._node_cloner_title.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._node_cloner_title.style.transition='color 0s';
				if (me._node_cloner_title.ggCurrentLogicStateTextColor == 0) {
					me._node_cloner_title.style.color="rgba(223,224,54,1)";
				}
				else {
					me._node_cloner_title.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._node_cloner_title.logicBlock_textcolor();
		me._node_cloner_title.ggUpdatePosition=function (useTransition) {
		}
		me._node_thumbnail.appendChild(me._node_cloner_title);
		me._node_container.appendChild(me._node_thumbnail);
		me.__div.appendChild(me._node_container);
		me._node_cloner_title.logicBlock_textcolor();
			me.ggEvent_changenode=function(event) {
				me._node_cloner_title.logicBlock_textcolor();
			};
	};
	function SkinCloner_node_cloner_pl_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='calc(100% - 15px)';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._node_container0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_container0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="node_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 140px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_container0.ggIsActive=function() {
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
		me._node_container0.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_thumbnail0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_thumbnail0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_thumbnail0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/category_thumbnail_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_thumbnail0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_thumbnail0.onclick=function (e) {
			if (me._node_thumbnail0.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			if (
				(
					((player.getVariableValue('resp_phone') == true)) && 
					((player.getVariableValue('has_categories') == true))
				)
			) {
				skin._back_to_close_anim.style.transition='none';
				skin._back_to_close_anim.style.visibility='hidden';
				skin._back_to_close_anim.ggVisible=false;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true)) && 
					((player.getVariableValue('has_categories') == true))
				)
			) {
				skin._close_to_menu_anim.style.transition='none';
				skin._close_to_menu_anim.style.visibility=(Number(skin._close_to_menu_anim.style.opacity)>0||!skin._close_to_menu_anim.style.opacity)?'inherit':'hidden';
				skin._close_to_menu_anim.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._close_to_menu_anim.onclick.call(skin._close_to_menu_anim);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_nodes', false);
			}
		}
		me._node_thumbnail0.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_cloner_title0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_title0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_cloner_title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_cloner_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._node_cloner_title0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_cloner_title0.ggUpdateText();
		player.addListener('changenode', function() {
			me._node_cloner_title0.ggUpdateText();
		});
		el.appendChild(els);
		me._node_cloner_title0.ggIsActive=function() {
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
		me._node_cloner_title0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me._node_cloner_title0.ggIsActive() == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._node_cloner_title0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._node_cloner_title0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._node_cloner_title0.style.transition='color 0s';
				if (me._node_cloner_title0.ggCurrentLogicStateTextColor == 0) {
					me._node_cloner_title0.style.color="rgba(223,224,54,1)";
				}
				else {
					me._node_cloner_title0.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._node_cloner_title0.logicBlock_textcolor();
		me._node_cloner_title0.ggUpdatePosition=function (useTransition) {
		}
		me._node_thumbnail0.appendChild(me._node_cloner_title0);
		me._node_container0.appendChild(me._node_thumbnail0);
		me.__div.appendChild(me._node_container0);
		me._node_cloner_title0.logicBlock_textcolor();
			me.ggEvent_changenode=function(event) {
				me._node_cloner_title0.logicBlock_textcolor();
			};
	};
	function SkinCloner_languages_cloner_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._language_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._language_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._language_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="language_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._language_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._language_title.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._language_title.ggUpdateText();
		});
		el.appendChild(els);
		me._language_title.ggIsActive=function() {
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
		me._language_title.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['language_title'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._language_title.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._language_title.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._language_title.style.transition='color 0s';
				if (me._language_title.ggCurrentLogicStateTextColor == 0) {
					me._language_title.style.color="rgba(223,224,54,1)";
				}
				else {
					me._language_title.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._language_title.logicBlock_textcolor();
		me._language_title.onclick=function (e) {
			if (me._language_title.isDragging()) return;
			player.setLanguage(me.ggTag);
			player.setVariableValue('vis_languages', false);
		}
		me._language_title.onmouseenter=function (e) {
			me.elementMouseOver['language_title']=true;
			me._language_title.logicBlock_textcolor();
		}
		me._language_title.onmouseleave=function (e) {
			me.elementMouseOver['language_title']=false;
			me._language_title.logicBlock_textcolor();
		}
		me._language_title.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._language_title);
		me._language_title.logicBlock_textcolor();
		me.elementMouseOver['language_title']=false;
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image.style.transition='opacity 500ms ease 0ms';
				if (me._ht_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image.style.visibility=(Number(me._ht_image.style.opacity)>0||!me._ht_image.style.opacity)?'inherit':'hidden';
					me._ht_image.ggVisible=true;
				}
				else {
					me._ht_image.style.visibility="hidden";
					me._ht_image.ggVisible=false;
				}
			}
		}
		me._ht_image.logicBlock_visible();
		me._ht_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image.style.transition='opacity 500ms ease 0ms';
				if (me._ht_image.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_image.style.opacity == 0.0) { me._ht_image.style.visibility="hidden"; } }, 505);
					me._ht_image.style.opacity=0;
				}
				else {
					me._ht_image.style.visibility=me._ht_image.ggVisible?'inherit':'hidden';
					me._ht_image.style.opacity=1;
				}
			}
		}
		me._ht_image.logicBlock_alpha();
		me._ht_image.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			me._ht_image_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseleave=function (e) {
			me.elementMouseOver['ht_image']=false;
			me._ht_image_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_popup=document.createElement('div');
		el.ggId="ht_image_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -40px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(((player.getVariableValue('open_image_hotspots') !== null) && (player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_image_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_image_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_image_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_image_popup.ggCurrentLogicStateSize == 0) {
					me._ht_image_popup.style.width='600px';
					me._ht_image_popup.style.height='375px';
					setTimeout(function() {skin.updateSize(me._ht_image_popup);}, 550);
				}
				else {
					me._ht_image_popup.style.width='60px';
					me._ht_image_popup.style.height='60px';
					setTimeout(function() {skin.updateSize(me._ht_image_popup);}, 550);
				}
			}
		}
		me._ht_image_popup.logicBlock_size();
		me._ht_image_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_image_hotspots') !== null) && (player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_image_popup.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_popup.style.visibility=me._ht_image_popup.ggVisible?'inherit':'hidden';
					me._ht_image_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_image_popup.style.opacity == 0.0) { me._ht_image_popup.style.visibility="hidden"; } }, 405);
					me._ht_image_popup.style.opacity=0;
				}
			}
		}
		me._ht_image_popup.logicBlock_alpha();
		me._ht_image_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_popup_description=document.createElement('div');
		els=me._ht_image_popup_description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_image_popup_description";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((600px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 600px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,20,34,0.392157);';
		hs+='border : 0px solid rgba(0,16,26,0.0392157);';
		hs+='border-radius : 7px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_image_popup_description.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_image_popup_description.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_image_popup_description.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_image_popup_description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_popup_description.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_popup.appendChild(me._ht_image_popup_description);
		el=me._ht_image_popup_title=document.createElement('div');
		els=me._ht_image_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_image_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -64px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 24px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_image_popup_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_image_popup_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_image_popup_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_image_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_popup_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player._(me.hotspot.description) == ""))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_image_popup_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_image_popup_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_image_popup_title.style.transition='left 0s, top 0s';
				if (me._ht_image_popup_title.ggCurrentLogicStatePosition == 0) {
					me._ht_image_popup_title.style.left = 'calc(50% - (0px / 2))';
					me._ht_image_popup_title.style.top='-30px';
				}
				else {
					me._ht_image_popup_title.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_image_popup_title.style.top='-64px';
				}
			}
		}
		me._ht_image_popup_title.logicBlock_position();
		me._ht_image_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_popup.appendChild(me._ht_image_popup_title);
		el=me._ht_image_popup_img=document.createElement('div');
		els=me._ht_image_popup_img__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_image_popup_img.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_image_popup_img.ggSubElement.setAttribute('alt', player._(me._ht_image_popup_img.ggAltText));
			me._ht_image_popup_img.ggUpdateImagePlaceholder();
		}
		el.ggSetImage = function(img) {
			me._ht_image_popup_img.ggText_untranslated = img;
			me._ht_image_popup_img.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_image_popup_img.ggSubElement.style.width = '0px';
			me._ht_image_popup_img.ggSubElement.style.height = '0px';
			me._ht_image_popup_img.ggSubElement.src='';
			me._ht_image_popup_img.ggSubElement.src=me._ht_image_popup_img.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_image_popup_img.ggText != player._(me._ht_image_popup_img.ggText_untranslated)) {
				me._ht_image_popup_img.ggText = player._(me._ht_image_popup_img.ggText_untranslated);
				me._ht_image_popup_img.ggUpdateImage()
			}
		}
		player.addListener('changenode', function() {
			me._ht_image_popup_img.ggUpdateImagePlaceholder();
		});
		el.ggUpdateImagePlaceholder = function() {
			if (me._ht_image_popup_img.ggText != ""+player.getBasePath()+""+player._(me.hotspot.url)+"") {
				me._ht_image_popup_img.ggText=""+player.getBasePath()+""+player._(me.hotspot.url)+"";
				me._ht_image_popup_img.ggUpdateImage()
			}
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_image_popup_img";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_popup_img.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_popup_img.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_image_popup_img.clientWidth;
			var parentHeight = me._ht_image_popup_img.clientHeight;
			var img = me._ht_image_popup_img__img;
			var aspectRatioDiv = me._ht_image_popup_img.clientWidth / me._ht_image_popup_img.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._ht_image_popup_img.ggScrollbars || currentWidth < me._ht_image_popup_img.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_image_popup_img.scrollLeft=currentWidth / 2 - me._ht_image_popup_img.clientWidth / 2;
			}
			if (!me._ht_image_popup_img.ggScrollbars || currentHeight < me._ht_image_popup_img.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_image_popup_img.scrollTop=currentHeight / 2 - me._ht_image_popup_img.clientHeight / 2;
			}
		}
		me._ht_image_popup.appendChild(me._ht_image_popup_img);
		me._ht_image.appendChild(me._ht_image_popup);
		el=me._ht_image_tooltip=document.createElement('div');
		els=me._ht_image_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_image_tooltip";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_image_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_image_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_image_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_image_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_image'] == true)) && 
				(((player.getVariableValue('open_image_hotspots') !== null) && (player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") == -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_tooltip.style.transition='opacity 200ms ease 0ms';
				if (me._ht_image_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_tooltip.style.visibility=me._ht_image_tooltip.ggVisible?'inherit':'hidden';
					me._ht_image_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_image_tooltip.style.opacity == 0.0) { me._ht_image_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_image_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_image_tooltip.logicBlock_alpha();
		me._ht_image_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._ht_image_tooltip);
		el=me._ht_image_popup_close=document.createElement('div');
		els=me._ht_image_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IndoaXRlIiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTguMyA1LjcxYy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMEwxMiAxMC41OSA3LjExIDUuN2MtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDAtLjM5LjM5LS4zOSAxLjAyIDAgMS40MUwxMC41OSAxMiA1LjcgMTYuODljLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDEuMzkuMzkgMS4wMi4zOSAxLjQxIDBMMTIgMTMuNDFsNC44OSA0Ljg5Yy'+
			'4zOS4zOSAxLjAyLjM5IDEuNDEgMCAuMzktLjM5LjM5LTEuMDIgMC0xLjQxTDEzLjQxIDEybDQuODktNC44OWMuMzgtLjM4LjM4LTEuMDIgMC0xLjR6Ii8+Cjwvc3ZnPgo=';
		me._ht_image_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiNkZmUwMzYiIGZpbGwtb3BhY2l0eT0iMSIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIxOHB4Ij4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPgogPHBhdGggZD0iTTE4LjMgNS43MWMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBMMTIgMTAuNTkgNy4xMSA1LjdjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFMMTAuNTkgMTIgNS43IDE2Ljg5Yy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxLjM5LjM5IDEuMDIuMzkgMS40MSAwTD'+
			'EyIDEzLjQxbDQuODkgNC44OWMuMzkuMzkgMS4wMi4zOSAxLjQxIDAgLjM5LS4zOS4zOS0xLjAyIDAtMS40MUwxMy40MSAxMmw0Ljg5LTQuODljLjM4LS4zOC4zOC0xLjAyIDAtMS40eiIvPgo8L3N2Zz4K';
		me._ht_image_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_image_popup_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(2px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_popup_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_image_hotspots') !== null) && (player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_popup_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_popup_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_popup_close.style.transition='opacity 300ms ease 0ms';
				if (me._ht_image_popup_close.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_popup_close.style.visibility=me._ht_image_popup_close.ggVisible?'inherit':'hidden';
					me._ht_image_popup_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_image_popup_close.style.opacity == 0.0) { me._ht_image_popup_close.style.visibility="hidden"; } }, 305);
					me._ht_image_popup_close.style.opacity=0;
				}
			}
		}
		me._ht_image_popup_close.logicBlock_alpha();
		me._ht_image_popup_close.onclick=function (e) {
			player.setVariableValue('open_image_hotspots', player.getVariableValue('open_image_hotspots').replace("<"+me.hotspot.id+">", ''));
			if (player.transitionsDisabled) {
				me._ht_image_popup_img.style.transition='none';
			} else {
				me._ht_image_popup_img.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_image_popup_img.style.opacity='0';
			me._ht_image_popup_img.style.visibility='hidden';
			me._ht_image_popup_img.ggSubElement.src='';
			if (player.transitionsDisabled) {
				me._ht_image_popup_title.style.transition='none';
			} else {
				me._ht_image_popup_title.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_image_popup_title.style.opacity='0';
			me._ht_image_popup_title.style.visibility='hidden';
			me._ht_image.style.zIndex='-1';
		}
		me._ht_image_popup_close.onmouseenter=function (e) {
			me._ht_image_popup_close__img.style.visibility='hidden';
			me._ht_image_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_image_popup_close']=true;
		}
		me._ht_image_popup_close.onmouseleave=function (e) {
			me._ht_image_popup_close__img.style.visibility='inherit';
			me._ht_image_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_image_popup_close']=false;
		}
		me._ht_image_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._ht_image_popup_close);
		el=me._ht_image_icon_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="ht_image_icon_container";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_icon_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_icon_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_image_hotspots') !== null) && (player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_icon_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_icon_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_icon_container.style.transition='opacity 300ms ease 0ms';
				if (me._ht_image_icon_container.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_image_icon_container.style.opacity == 0.0) { me._ht_image_icon_container.style.visibility="hidden"; } }, 305);
					me._ht_image_icon_container.style.opacity=0;
				}
				else {
					me._ht_image_icon_container.style.visibility=me._ht_image_icon_container.ggVisible?'inherit':'hidden';
					me._ht_image_icon_container.style.opacity=1;
				}
			}
		}
		me._ht_image_icon_container.logicBlock_alpha();
		me._ht_image_icon_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('open_image_hotspots', player.getVariableValue('open_image_hotspots') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_image_popup_img.style.transition='none';
				} else {
					me._ht_image_popup_img.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_image_popup_img.style.opacity='1';
				me._ht_image_popup_img.style.visibility=me._ht_image_popup_img.ggVisible?'inherit':'hidden';
				me._ht_image_popup_img.ggSubElement.src=me._ht_image_popup_img.ggText;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_image_popup_title.style.transition='none';
				} else {
					me._ht_image_popup_title.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_image_popup_title.style.opacity='1';
				me._ht_image_popup_title.style.visibility=me._ht_image_popup_title.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_image_popup_description.style.transition='none';
				} else {
					me._ht_image_popup_description.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_image_popup_description.style.opacity='1';
				me._ht_image_popup_description.style.visibility=me._ht_image_popup_description.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_image.style.zIndex='0';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					skin._image_title_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._image_title_phone.ggUpdateText();
				skin._image_title_phone.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					skin._image_description_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.description)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._image_description_phone.ggUpdateText();
				skin._image_description_phone.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._image_popup_phone.ggSetImage(player._(player.getBasePath()+""+player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', true);
			}
		}
		me._ht_image_icon_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_icon=document.createElement('div');
		els=me._ht_image_icon__img=document.createElement('img');
		els.className='ggskin ggskin_ht_image_icon';
		hs=basePath + 'images/ht_image_icon.gif';
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
		el.ggId="ht_image_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 27px;';
		hs+='left : calc(50% - ((27px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((27px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 27px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_icon.style.transition='';
				if (me._ht_image_icon.ggCurrentLogicStateVisible == 0) {
					me._ht_image_icon.style.visibility="hidden";
					me._ht_image_icon.ggVisible=false;
				}
				else {
					me._ht_image_icon.style.visibility=(Number(me._ht_image_icon.style.opacity)>0||!me._ht_image_icon.style.opacity)?'inherit':'hidden';
					me._ht_image_icon.ggVisible=true;
				}
			}
		}
		me._ht_image_icon.logicBlock_visible();
		me._ht_image_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_icon_container.appendChild(me._ht_image_icon);
		el=me._ht_image_custom=document.createElement('div');
		els=me._ht_image_custom__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_image_custom.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_image_custom.ggSubElement.setAttribute('alt', player._(me._ht_image_custom.ggAltText));
			me._ht_image_custom.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_image_custom.ggText_untranslated = img;
			me._ht_image_custom.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_image_custom.ggSubElement.style.width = '0px';
			me._ht_image_custom.ggSubElement.style.height = '0px';
			me._ht_image_custom.ggSubElement.src='';
			me._ht_image_custom.ggSubElement.src=me._ht_image_custom.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_image_custom.ggText != player._(me._ht_image_custom.ggText_untranslated)) {
				me._ht_image_custom.ggText = player._(me._ht_image_custom.ggText_untranslated);
				me._ht_image_custom.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_image_custom";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_custom.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_custom.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_custom.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_custom.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_custom.style.transition='';
				if (me._ht_image_custom.ggCurrentLogicStateVisible == 0) {
					me._ht_image_custom.style.visibility=(Number(me._ht_image_custom.style.opacity)>0||!me._ht_image_custom.style.opacity)?'inherit':'hidden';
					me._ht_image_custom.ggSubElement.src=me._ht_image_custom.ggText;
					me._ht_image_custom.ggVisible=true;
				}
				else {
					me._ht_image_custom.style.visibility="hidden";
					me._ht_image_custom.ggSubElement.src='';
					me._ht_image_custom.ggVisible=false;
				}
			}
		}
		me._ht_image_custom.logicBlock_visible();
		me._ht_image_custom.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_image_custom.clientWidth;
			var parentHeight = me._ht_image_custom.clientHeight;
			var img = me._ht_image_custom__img;
			var aspectRatioDiv = me._ht_image_custom.clientWidth / me._ht_image_custom.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_image_custom.ggScrollbars || currentWidth < me._ht_image_custom.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._ht_image_custom.ggScrollbars || currentHeight < me._ht_image_custom.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me._ht_image_icon_container.appendChild(me._ht_image_custom);
		me._ht_image.appendChild(me._ht_image_icon_container);
		me._ht_image.logicBlock_visible();
		me._ht_image.logicBlock_alpha();
		me.elementMouseOver['ht_image']=false;
		me._ht_image_popup.logicBlock_size();
		me._ht_image_popup.logicBlock_alpha();
		me._ht_image_popup_title.logicBlock_position();
		me._ht_image_tooltip.logicBlock_alpha();
		me._ht_image_popup_close.logicBlock_alpha();
		me.elementMouseOver['ht_image_popup_close']=false;
		me._ht_image_icon_container.logicBlock_alpha();
		me._ht_image_icon.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_image_custom.style.width=hotspot.customimagewidth + 'px';
			me._ht_image_custom.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_image_custom.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_image_custom.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_image_custom.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_image_popup_title.logicBlock_position();
				me._ht_image_icon.logicBlock_visible();
				me._ht_image_custom.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_image.logicBlock_visible();
				me._ht_image.logicBlock_alpha();
				me._ht_image_popup.logicBlock_size();
				me._ht_image_popup.logicBlock_alpha();
				me._ht_image_popup_title.logicBlock_position();
				me._ht_image_tooltip.logicBlock_alpha();
				me._ht_image_popup_close.logicBlock_alpha();
				me._ht_image_icon_container.logicBlock_alpha();
				player.setVariableValue('open_image_hotspots', "");
				me._ht_image_icon.logicBlock_visible();
				me._ht_image_custom.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_image.logicBlock_visible();
				me._ht_image.logicBlock_alpha();
				me._ht_image_popup.logicBlock_size();
				me._ht_image_popup.logicBlock_alpha();
				me._ht_image_popup_title.logicBlock_position();
				me._ht_image_tooltip.logicBlock_alpha();
				me._ht_image_popup_close.logicBlock_alpha();
				me._ht_image_icon_container.logicBlock_alpha();
				me._ht_image_icon.logicBlock_visible();
				me._ht_image_custom.logicBlock_visible();
			};
			me.ggEvent_varchanged_open_image_hotspots=function() {
				me._ht_image_popup.logicBlock_size();
				me._ht_image_popup.logicBlock_alpha();
				me._ht_image_tooltip.logicBlock_alpha();
				me._ht_image_popup_close.logicBlock_alpha();
				me._ht_image_icon_container.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_image.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_image.logicBlock_visible();
				me._ht_image.logicBlock_alpha();
			};
			me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_gallery(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_gallery=document.createElement('div');
		el.ggId="ht_gallery";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 99px;';
		hs+='position : absolute;';
		hs+='top : 83px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_gallery.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_gallery.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_gallery') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_gallery.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_gallery.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_gallery.style.transition='';
				if (me._ht_gallery.ggCurrentLogicStateVisible == 0) {
					me._ht_gallery.style.visibility="hidden";
					me._ht_gallery.ggVisible=false;
				}
				else {
					me._ht_gallery.style.visibility=(Number(me._ht_gallery.style.opacity)>0||!me._ht_gallery.style.opacity)?'inherit':'hidden';
					me._ht_gallery.ggVisible=true;
				}
			}
		}
		me._ht_gallery.logicBlock_visible();
		me._ht_gallery.onclick=function (e) {
			player.setVariableValue('vis_gallery', true);
				skin._gallery_display.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.description)));
					var hs = player._("<iframe src=\"assets\/%1\/index.html\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._gallery_display.ggUpdateText();
			skin._gallery_display.ggTextDiv.scrollTop = 0;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_gallery.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_gallery.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_gallery']=true;
			me._ht_gallery_tooltip.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_gallery.onmouseleave=function (e) {
			me.elementMouseOver['ht_gallery']=false;
			me._ht_gallery_tooltip.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_gallery.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_galley_image=document.createElement('div');
		els=me._ht_galley_image__img=document.createElement('img');
		els.className='ggskin ggskin_ht_galley_image';
		hs=basePath + 'images/ht_galley_image.gif';
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
		el.ggId="ht_galley_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 29px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_galley_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_galley_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_galley_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_galley_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_galley_image.style.transition='';
				if (me._ht_galley_image.ggCurrentLogicStateVisible == 0) {
					me._ht_galley_image.style.visibility="hidden";
					me._ht_galley_image.ggVisible=false;
				}
				else {
					me._ht_galley_image.style.visibility=(Number(me._ht_galley_image.style.opacity)>0||!me._ht_galley_image.style.opacity)?'inherit':'hidden';
					me._ht_galley_image.ggVisible=true;
				}
			}
		}
		me._ht_galley_image.logicBlock_visible();
		me._ht_galley_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_gallery.appendChild(me._ht_galley_image);
		el=me._ht_gallery_tooltip=document.createElement('div');
		els=me._ht_gallery_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_gallery_tooltip";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_gallery_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_gallery_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_gallery_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_gallery_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_gallery_tooltip.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_gallery'] == true)) && 
				((player._(me.hotspot.title) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_gallery_tooltip.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_gallery_tooltip.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_gallery_tooltip.style.transition='';
				if (me._ht_gallery_tooltip.ggCurrentLogicStateVisible == 0) {
					me._ht_gallery_tooltip.style.visibility=(Number(me._ht_gallery_tooltip.style.opacity)>0||!me._ht_gallery_tooltip.style.opacity)?'inherit':'hidden';
					me._ht_gallery_tooltip.ggVisible=true;
				}
				else {
					me._ht_gallery_tooltip.style.visibility="hidden";
					me._ht_gallery_tooltip.ggVisible=false;
				}
			}
		}
		me._ht_gallery_tooltip.logicBlock_visible();
		me._ht_gallery_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_gallery.appendChild(me._ht_gallery_tooltip);
		el=me._ht_gallery_custom_image=document.createElement('div');
		els=me._ht_gallery_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_gallery_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_gallery_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_gallery_custom_image.ggAltText));
			me._ht_gallery_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_gallery_custom_image.ggText_untranslated = img;
			me._ht_gallery_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_gallery_custom_image.ggSubElement.style.width = '0px';
			me._ht_gallery_custom_image.ggSubElement.style.height = '0px';
			me._ht_gallery_custom_image.ggSubElement.src='';
			me._ht_gallery_custom_image.ggSubElement.src=me._ht_gallery_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_gallery_custom_image.ggText != player._(me._ht_gallery_custom_image.ggText_untranslated)) {
				me._ht_gallery_custom_image.ggText = player._(me._ht_gallery_custom_image.ggText_untranslated);
				me._ht_gallery_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_gallery_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_gallery_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_gallery_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_gallery_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_gallery_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_gallery_custom_image.style.transition='';
				if (me._ht_gallery_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_gallery_custom_image.style.visibility=(Number(me._ht_gallery_custom_image.style.opacity)>0||!me._ht_gallery_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_gallery_custom_image.ggSubElement.src=me._ht_gallery_custom_image.ggText;
					me._ht_gallery_custom_image.ggVisible=true;
				}
				else {
					me._ht_gallery_custom_image.style.visibility="hidden";
					me._ht_gallery_custom_image.ggSubElement.src='';
					me._ht_gallery_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_gallery_custom_image.logicBlock_visible();
		me._ht_gallery_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_gallery_custom_image.clientWidth;
			var parentHeight = me._ht_gallery_custom_image.clientHeight;
			var img = me._ht_gallery_custom_image__img;
			var aspectRatioDiv = me._ht_gallery_custom_image.clientWidth / me._ht_gallery_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_gallery_custom_image.ggScrollbars || currentWidth < me._ht_gallery_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._ht_gallery_custom_image.ggScrollbars || currentHeight < me._ht_gallery_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me._ht_gallery.appendChild(me._ht_gallery_custom_image);
		me._ht_gallery.logicBlock_visible();
		me.elementMouseOver['ht_gallery']=false;
		me._ht_galley_image.logicBlock_visible();
		me._ht_gallery_tooltip.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_gallery_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_gallery_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_gallery_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_gallery_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_gallery_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_galley_image.logicBlock_visible();
				me._ht_gallery_tooltip.logicBlock_visible();
				me._ht_gallery_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_gallery.logicBlock_visible();
				me._ht_galley_image.logicBlock_visible();
				me._ht_gallery_tooltip.logicBlock_visible();
				me._ht_gallery_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_gallery.logicBlock_visible();
				me._ht_galley_image.logicBlock_visible();
				me._ht_gallery_tooltip.logicBlock_visible();
				me._ht_gallery_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_gallery=function() {
				me._ht_gallery.logicBlock_visible();
			};
			me.__div = me._ht_gallery;
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 100px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url.style.transition='opacity 500ms ease 0ms';
				if (me._ht_url.ggCurrentLogicStateVisible == 0) {
					me._ht_url.style.visibility=(Number(me._ht_url.style.opacity)>0||!me._ht_url.style.opacity)?'inherit':'hidden';
					me._ht_url.ggVisible=true;
				}
				else {
					me._ht_url.style.visibility="hidden";
					me._ht_url.ggVisible=false;
				}
			}
		}
		me._ht_url.logicBlock_visible();
		me._ht_url.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_url.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_url.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_url.style.transition='opacity 500ms ease 0ms';
				if (me._ht_url.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_url.style.opacity == 0.0) { me._ht_url.style.visibility="hidden"; } }, 505);
					me._ht_url.style.opacity=0;
				}
				else {
					me._ht_url.style.visibility=me._ht_url.ggVisible?'inherit':'hidden';
					me._ht_url.style.opacity=1;
				}
			}
		}
		me._ht_url.logicBlock_alpha();
		me._ht_url.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url_popup') == false)) || 
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._url_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._url_popup_title.ggUpdateText();
				skin._url_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._url_popup_iframe.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.url)));
						var hs = player._("<iframe src=\"%1\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._url_popup_iframe.ggUpdateText();
				skin._url_popup_iframe.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_popup', true);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			me._ht_url_tooltip.logicBlock_alpha();
			me._ht_url_icon.logicBlock_visible();
			me._ht_url_icon_active.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseleave=function (e) {
			me.elementMouseOver['ht_url']=false;
			me._ht_url_tooltip.logicBlock_alpha();
			me._ht_url_icon.logicBlock_visible();
			me._ht_url_icon_active.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_tooltip=document.createElement('div');
		els=me._ht_url_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_url_tooltip";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_url_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_url_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_url_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_url_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_tooltip.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_url_tooltip.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_url_tooltip.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_url_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_url_tooltip.ggCurrentLogicStatePosition == 0) {
					me._ht_url_tooltip.style.left = 'calc(50% - (0px / 2))';
					me._ht_url_tooltip.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -40px)';
				}
				else {
					me._ht_url_tooltip.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_url_tooltip.style.top='calc(50% - ((0px + 0px) / 2) - 40px)';
				}
			}
		}
		me._ht_url_tooltip.logicBlock_position();
		me._ht_url_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_url'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_url_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_url_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_url_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_url_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_url_tooltip.style.visibility=me._ht_url_tooltip.ggVisible?'inherit':'hidden';
					me._ht_url_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_url_tooltip.style.opacity == 0.0) { me._ht_url_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_url_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_url_tooltip.logicBlock_alpha();
		me._ht_url_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_tooltip);
		el=me._ht_url_bg=document.createElement('div');
		el.ggId="ht_url_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(223,224,54,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_bg.style.transition='';
				if (me._ht_url_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_url_bg.style.visibility="hidden";
					me._ht_url_bg.ggVisible=false;
				}
				else {
					me._ht_url_bg.style.visibility=(Number(me._ht_url_bg.style.opacity)>0||!me._ht_url_bg.style.opacity)?'inherit':'hidden';
					me._ht_url_bg.ggVisible=true;
				}
			}
		}
		me._ht_url_bg.logicBlock_visible();
		me._ht_url_bg.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_bg);
		el=me._ht_url_icon=document.createElement('div');
		els=me._ht_url_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiMzYzNjM2MiIGZpbGwtb3BhY2l0eT0iMSIgd2lkdGg9IjE4cHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCwwaDI0djI0SDBWMHoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGQ9Ik0xMS45OSwyQzYuNDcsMiwyLDYuNDgsMiwxMnM0LjQ3LDEwLDkuOTksMTBDMTcuNTIsMjIsMjIsMTcuNTIsMjIsMTJTMTcuNTIsMiwxMS45OSwyeiBNMTguOTIsOGgtMi45NSBjLTAuMzItMS4yNS0wLj'+
			'c4LTIuNDUtMS4zOC0zLjU2QzE2LjQzLDUuMDcsMTcuOTYsNi4zNSwxOC45Miw4eiBNMTIsNC4wNGMwLjgzLDEuMiwxLjQ4LDIuNTMsMS45MSwzLjk2aC0zLjgyIEMxMC41Miw2LjU3LDExLjE3LDUuMjQsMTIsNC4wNHogTTQuMjYsMTRDNC4xLDEzLjM2LDQsMTIuNjksNCwxMnMwLjEtMS4zNiwwLjI2LTJoMy4zOGMtMC4wOCwwLjY2LTAuMTQsMS4zMi0wLjE0LDIgczAuMDYsMS4zNCwwLjE0LDJINC4yNnogTTUuMDgsMTZoMi45NWMwLjMyLDEuMjUsMC43OCwyLjQ1LDEuMzgsMy41NkM3LjU3LDE4LjkzLDYuMDQsMTcuNjYsNS4wOCwxNnogTTguMDMsOEg1LjA4IGMwLjk2LTEuNjYsMi40OS0yLjkz'+
			'LDQuMzMtMy41NkM4LjgxLDUuNTUsOC4zNSw2Ljc1LDguMDMsOHogTTEyLDE5Ljk2Yy0wLjgzLTEuMi0xLjQ4LTIuNTMtMS45MS0zLjk2aDMuODIgQzEzLjQ4LDE3LjQzLDEyLjgzLDE4Ljc2LDEyLDE5Ljk2eiBNMTQuMzQsMTRIOS42NmMtMC4wOS0wLjY2LTAuMTYtMS4zMi0wLjE2LTJzMC4wNy0xLjM1LDAuMTYtMmg0LjY4YzAuMDksMC42NSwwLjE2LDEuMzIsMC4xNiwyIFMxNC40MywxMy4zNCwxNC4zNCwxNHogTTE0LjU5LDE5LjU2YzAuNi0xLjExLDEuMDYtMi4zMSwxLjM4LTMuNTZoMi45NUMxNy45NiwxNy42NSwxNi40MywxOC45MywxNC41OSwxOS41NnogTTE2LjM2LDE0IGMwLjA4LTAuNj'+
			'YsMC4xNC0xLjMyLDAuMTQtMnMtMC4wNi0xLjM0LTAuMTQtMmgzLjM4QzE5LjksMTAuNjQsMjAsMTEuMzEsMjAsMTJzLTAuMSwxLjM2LTAuMjYsMkgxNi4zNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_url'] == true)) || 
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_icon.style.transition='';
				if (me._ht_url_icon.ggCurrentLogicStateVisible == 0) {
					me._ht_url_icon.style.visibility="hidden";
					me._ht_url_icon.ggVisible=false;
				}
				else {
					me._ht_url_icon.style.visibility=(Number(me._ht_url_icon.style.opacity)>0||!me._ht_url_icon.style.opacity)?'inherit':'hidden';
					me._ht_url_icon.ggVisible=true;
				}
			}
		}
		me._ht_url_icon.logicBlock_visible();
		me._ht_url_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_icon);
		el=me._ht_url_icon_active=document.createElement('div');
		els=me._ht_url_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgd2lkdGg9IjE4cHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCwwaDI0djI0SDBWMHoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGQ9Ik0xMS45OSwyQzYuNDcsMiwyLDYuNDgsMiwxMnM0LjQ3LDEwLDkuOTksMTBDMTcuNTIsMjIsMjIsMTcuNTIsMjIsMTJTMTcuNTIsMiwxMS45OSwyeiBNMTguOTIsOGgtMi45NSBjLTAuMzItMS4yNS0wLj'+
			'c4LTIuNDUtMS4zOC0zLjU2QzE2LjQzLDUuMDcsMTcuOTYsNi4zNSwxOC45Miw4eiBNMTIsNC4wNGMwLjgzLDEuMiwxLjQ4LDIuNTMsMS45MSwzLjk2aC0zLjgyIEMxMC41Miw2LjU3LDExLjE3LDUuMjQsMTIsNC4wNHogTTQuMjYsMTRDNC4xLDEzLjM2LDQsMTIuNjksNCwxMnMwLjEtMS4zNiwwLjI2LTJoMy4zOGMtMC4wOCwwLjY2LTAuMTQsMS4zMi0wLjE0LDIgczAuMDYsMS4zNCwwLjE0LDJINC4yNnogTTUuMDgsMTZoMi45NWMwLjMyLDEuMjUsMC43OCwyLjQ1LDEuMzgsMy41NkM3LjU3LDE4LjkzLDYuMDQsMTcuNjYsNS4wOCwxNnogTTguMDMsOEg1LjA4IGMwLjk2LTEuNjYsMi40OS0yLjkz'+
			'LDQuMzMtMy41NkM4LjgxLDUuNTUsOC4zNSw2Ljc1LDguMDMsOHogTTEyLDE5Ljk2Yy0wLjgzLTEuMi0xLjQ4LTIuNTMtMS45MS0zLjk2aDMuODIgQzEzLjQ4LDE3LjQzLDEyLjgzLDE4Ljc2LDEyLDE5Ljk2eiBNMTQuMzQsMTRIOS42NmMtMC4wOS0wLjY2LTAuMTYtMS4zMi0wLjE2LTJzMC4wNy0xLjM1LDAuMTYtMmg0LjY4YzAuMDksMC42NSwwLjE2LDEuMzIsMC4xNiwyIFMxNC40MywxMy4zNCwxNC4zNCwxNHogTTE0LjU5LDE5LjU2YzAuNi0xLjExLDEuMDYtMi4zMSwxLjM4LTMuNTZoMi45NUMxNy45NiwxNy42NSwxNi40MywxOC45MywxNC41OSwxOS41NnogTTE2LjM2LDE0IGMwLjA4LTAuNj'+
			'YsMC4xNC0xLjMyLDAuMTQtMnMtMC4wNi0xLjM0LTAuMTQtMmgzLjM4QzE5LjksMTAuNjQsMjAsMTEuMzEsMjAsMTJzLTAuMSwxLjM2LTAuMjYsMkgxNi4zNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_url'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_icon_active.style.transition='';
				if (me._ht_url_icon_active.ggCurrentLogicStateVisible == 0) {
					me._ht_url_icon_active.style.visibility=(Number(me._ht_url_icon_active.style.opacity)>0||!me._ht_url_icon_active.style.opacity)?'inherit':'hidden';
					me._ht_url_icon_active.ggVisible=true;
				}
				else {
					me._ht_url_icon_active.style.visibility="hidden";
					me._ht_url_icon_active.ggVisible=false;
				}
			}
		}
		me._ht_url_icon_active.logicBlock_visible();
		me._ht_url_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_icon_active);
		el=me._ht_url_custom_image=document.createElement('div');
		els=me._ht_url_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_url_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_url_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_url_custom_image.ggAltText));
			me._ht_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_url_custom_image.ggText_untranslated = img;
			me._ht_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_url_custom_image.ggSubElement.style.width = '0px';
			me._ht_url_custom_image.ggSubElement.style.height = '0px';
			me._ht_url_custom_image.ggSubElement.src='';
			me._ht_url_custom_image.ggSubElement.src=me._ht_url_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_url_custom_image.ggText != player._(me._ht_url_custom_image.ggText_untranslated)) {
				me._ht_url_custom_image.ggText = player._(me._ht_url_custom_image.ggText_untranslated);
				me._ht_url_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_url_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_custom_image.style.transition='';
				if (me._ht_url_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_url_custom_image.style.visibility=(Number(me._ht_url_custom_image.style.opacity)>0||!me._ht_url_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_url_custom_image.ggSubElement.src=me._ht_url_custom_image.ggText;
					me._ht_url_custom_image.ggVisible=true;
				}
				else {
					me._ht_url_custom_image.style.visibility="hidden";
					me._ht_url_custom_image.ggSubElement.src='';
					me._ht_url_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_url_custom_image.logicBlock_visible();
		me._ht_url_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_url_custom_image.clientWidth;
			var parentHeight = me._ht_url_custom_image.clientHeight;
			var img = me._ht_url_custom_image__img;
			var aspectRatioDiv = me._ht_url_custom_image.clientWidth / me._ht_url_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_url_custom_image.ggScrollbars || currentWidth < me._ht_url_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_url_custom_image.scrollLeft=currentWidth / 2 - me._ht_url_custom_image.clientWidth / 2;
			}
			if (!me._ht_url_custom_image.ggScrollbars || currentHeight < me._ht_url_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_url_custom_image.scrollTop=currentHeight / 2 - me._ht_url_custom_image.clientHeight / 2;
			}
		}
		me._ht_url.appendChild(me._ht_url_custom_image);
		me._ht_url.logicBlock_visible();
		me._ht_url.logicBlock_alpha();
		me.elementMouseOver['ht_url']=false;
		me._ht_url_tooltip.logicBlock_position();
		me._ht_url_tooltip.logicBlock_alpha();
		me._ht_url_bg.logicBlock_visible();
		me._ht_url_icon.logicBlock_visible();
		me._ht_url_icon_active.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_url_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_url_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_url_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_url_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_url_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_url_tooltip.logicBlock_alpha();
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_icon.logicBlock_visible();
				me._ht_url_icon_active.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url.logicBlock_alpha();
				me._ht_url_tooltip.logicBlock_alpha();
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_icon.logicBlock_visible();
				me._ht_url_icon_active.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url.logicBlock_alpha();
				me._ht_url_tooltip.logicBlock_position();
				me._ht_url_tooltip.logicBlock_alpha();
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_icon.logicBlock_visible();
				me._ht_url_icon_active.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_url_tooltip.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_url.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url.logicBlock_alpha();
			};
			me.__div = me._ht_url;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node.style.transition='opacity 500ms ease 0ms';
				if (me._ht_node.ggCurrentLogicStateVisible == 0) {
					me._ht_node.style.visibility=(Number(me._ht_node.style.opacity)>0||!me._ht_node.style.opacity)?'inherit':'hidden';
					me._ht_node.ggVisible=true;
				}
				else {
					me._ht_node.style.visibility="hidden";
					me._ht_node.ggVisible=false;
				}
			}
		}
		me._ht_node.logicBlock_visible();
		me._ht_node.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node.style.transition='opacity 500ms ease 0ms';
				if (me._ht_node.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_node.style.opacity == 0.0) { me._ht_node.style.visibility="hidden"; } }, 505);
					me._ht_node.style.opacity=0;
				}
				else {
					me._ht_node.style.visibility=me._ht_node.ggVisible?'inherit':'hidden';
					me._ht_node.style.opacity=1;
				}
			}
		}
		me._ht_node.logicBlock_alpha();
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._ht_node_tooltip.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._ht_node_tooltip.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_tooltip=document.createElement('div');
		els=me._ht_node_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_node_tooltip";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -55px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_node_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_node_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_node_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_node_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_tooltip.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_node_tooltip.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_node_tooltip.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_node_tooltip.style.transition='left 0s, top 0s';
				if (me._ht_node_tooltip.ggCurrentLogicStatePosition == 0) {
					me._ht_node_tooltip.style.left = 'calc(50% - (0px / 2))';
					me._ht_node_tooltip.style.top='-50px';
				}
				else {
					me._ht_node_tooltip.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_node_tooltip.style.top='-55px';
				}
			}
		}
		me._ht_node_tooltip.logicBlock_position();
		me._ht_node_tooltip.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_tooltip.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_tooltip.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_tooltip.style.transition='left 0s, top 0s';
				if (me._ht_node_tooltip.ggCurrentLogicStateVisible == 0) {
					me._ht_node_tooltip.style.visibility=(Number(me._ht_node_tooltip.style.opacity)>0||!me._ht_node_tooltip.style.opacity)?'inherit':'hidden';
					me._ht_node_tooltip.ggVisible=true;
				}
				else {
					me._ht_node_tooltip.style.visibility="hidden";
					me._ht_node_tooltip.ggVisible=false;
				}
			}
		}
		me._ht_node_tooltip.logicBlock_visible();
		me._ht_node_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._ht_node_tooltip);
		el=me._ht_node_lottie=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/ht_node_lottie.json',
			autoplay: true,
			loop: true,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggId="ht_node_lottie";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='left : calc(50% - ((27px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((27px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 27px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_lottie.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_lottie.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_lottie.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_lottie.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_lottie.style.transition='';
				if (me._ht_node_lottie.ggCurrentLogicStateVisible == 0) {
					me._ht_node_lottie.style.visibility="hidden";
					me._ht_node_lottie.ggVisible=false;
				}
				else {
					me._ht_node_lottie.style.visibility=(Number(me._ht_node_lottie.style.opacity)>0||!me._ht_node_lottie.style.opacity)?'inherit':'hidden';
					me._ht_node_lottie.ggVisible=true;
				}
			}
		}
		me._ht_node_lottie.logicBlock_visible();
		me._ht_node_lottie.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._ht_node_lottie);
		el=me._ht_node_custom_image=document.createElement('div');
		els=me._ht_node_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image.ggAltText));
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_custom_image.ggText_untranslated = img;
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_custom_image.ggSubElement.style.width = '0px';
			me._ht_node_custom_image.ggSubElement.style.height = '0px';
			me._ht_node_custom_image.ggSubElement.src='';
			me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_custom_image.ggText != player._(me._ht_node_custom_image.ggText_untranslated)) {
				me._ht_node_custom_image.ggText = player._(me._ht_node_custom_image.ggText_untranslated);
				me._ht_node_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_custom_image.style.transition='';
				if (me._ht_node_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_node_custom_image.style.visibility=(Number(me._ht_node_custom_image.style.opacity)>0||!me._ht_node_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
					me._ht_node_custom_image.ggVisible=true;
				}
				else {
					me._ht_node_custom_image.style.visibility="hidden";
					me._ht_node_custom_image.ggSubElement.src='';
					me._ht_node_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_node_custom_image.logicBlock_visible();
		me._ht_node_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image.clientWidth;
			var parentHeight = me._ht_node_custom_image.clientHeight;
			var img = me._ht_node_custom_image__img;
			var aspectRatioDiv = me._ht_node_custom_image.clientWidth / me._ht_node_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentWidth < me._ht_node_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_custom_image.scrollLeft=currentWidth / 2 - me._ht_node_custom_image.clientWidth / 2;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentHeight < me._ht_node_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_custom_image.scrollTop=currentHeight / 2 - me._ht_node_custom_image.clientHeight / 2;
			}
		}
		me._ht_node.appendChild(me._ht_node_custom_image);
		me._ht_node.logicBlock_visible();
		me._ht_node.logicBlock_alpha();
		me.elementMouseOver['ht_node']=false;
		me._ht_node_tooltip.logicBlock_position();
		me._ht_node_tooltip.logicBlock_visible();
		me._ht_node_lottie.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_node_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_lottie.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node.logicBlock_alpha();
				me._ht_node_lottie.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node.logicBlock_alpha();
				me._ht_node_tooltip.logicBlock_position();
				me._ht_node_lottie.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_node_tooltip.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_node.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node.logicBlock_alpha();
			};
			me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 150px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info.style.transition='opacity 500ms ease 0ms';
				if (me._ht_info.ggCurrentLogicStateVisible == 0) {
					me._ht_info.style.visibility=(Number(me._ht_info.style.opacity)>0||!me._ht_info.style.opacity)?'inherit':'hidden';
					me._ht_info.ggVisible=true;
				}
				else {
					me._ht_info.style.visibility="hidden";
					me._ht_info.ggVisible=false;
				}
			}
		}
		me._ht_info.logicBlock_visible();
		me._ht_info.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info.style.transition='opacity 500ms ease 0ms';
				if (me._ht_info.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_info.style.opacity == 0.0) { me._ht_info.style.visibility="hidden"; } }, 505);
					me._ht_info.style.opacity=0;
				}
				else {
					me._ht_info.style.visibility=me._ht_info.ggVisible?'inherit':'hidden';
					me._ht_info.style.opacity=1;
				}
			}
		}
		me._ht_info.logicBlock_alpha();
		me._ht_info.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			me._ht_info_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseleave=function (e) {
			me.elementMouseOver['ht_info']=false;
			me._ht_info_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_popup=document.createElement('div');
		el.ggId="ht_info_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -40px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(((player.getVariableValue('open_info_hotspots') !== null) && (player.getVariableValue('open_info_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_info_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_info_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_info_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_info_popup.ggCurrentLogicStateSize == 0) {
					me._ht_info_popup.style.width='600px';
					me._ht_info_popup.style.height='375px';
					setTimeout(function() {skin.updateSize(me._ht_info_popup);}, 550);
				}
				else {
					me._ht_info_popup.style.width='60px';
					me._ht_info_popup.style.height='60px';
					setTimeout(function() {skin.updateSize(me._ht_info_popup);}, 550);
				}
			}
		}
		me._ht_info_popup.logicBlock_size();
		me._ht_info_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_info_hotspots') !== null) && (player.getVariableValue('open_info_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_info_popup.ggCurrentLogicStateAlpha == 0) {
					me._ht_info_popup.style.visibility=me._ht_info_popup.ggVisible?'inherit':'hidden';
					me._ht_info_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_info_popup.style.opacity == 0.0) { me._ht_info_popup.style.visibility="hidden"; } }, 405);
					me._ht_info_popup.style.opacity=0;
				}
			}
		}
		me._ht_info_popup.logicBlock_alpha();
		me._ht_info_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_popup_text=document.createElement('div');
		el.ggId="ht_info_popup_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 50px);';
		hs+='left : 75px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_popup_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_popup_text.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_popup_text_body=document.createElement('div');
		els=me._ht_info_popup_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_info_popup_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='line-height: 1.4';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._ht_info_popup_text_body.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_info_popup_text_body.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_info_popup_text_body.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_info_popup_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_popup_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_popup_text.appendChild(me._ht_info_popup_text_body);
		el=me._ht_info_popup_text_headline=document.createElement('div');
		els=me._ht_info_popup_text_headline__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_info_popup_text_headline";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 26px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_info_popup_text_headline.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_info_popup_text_headline.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_info_popup_text_headline.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_info_popup_text_headline.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_popup_text_headline.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_popup_text.appendChild(me._ht_info_popup_text_headline);
		me._ht_info_popup.appendChild(me._ht_info_popup_text);
		me._ht_info.appendChild(me._ht_info_popup);
		el=me._ht_info_tooltip=document.createElement('div');
		els=me._ht_info_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_info_tooltip";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_info_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_info_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_info_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_info_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_tooltip.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_info_tooltip.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_info_tooltip.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_info_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_info_tooltip.ggCurrentLogicStatePosition == 0) {
					me._ht_info_tooltip.style.left = 'calc(50% - (0px / 2))';
					me._ht_info_tooltip.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -40px)';
				}
				else {
					me._ht_info_tooltip.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_info_tooltip.style.top='calc(50% - ((0px + 0px) / 2) - 40px)';
				}
			}
		}
		me._ht_info_tooltip.logicBlock_position();
		me._ht_info_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_info'] == true)) && 
				(((player.getVariableValue('open_info_hotspots') !== null) && (player.getVariableValue('open_info_hotspots')).indexOf("<"+me.hotspot.id+">") == -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_info_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_info_tooltip.style.visibility=me._ht_info_tooltip.ggVisible?'inherit':'hidden';
					me._ht_info_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_info_tooltip.style.opacity == 0.0) { me._ht_info_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_info_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_info_tooltip.logicBlock_alpha();
		me._ht_info_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_info_tooltip);
		el=me._ht_info_popup_close=document.createElement('div');
		els=me._ht_info_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IndoaXRlIiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTguMyA1LjcxYy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMEwxMiAxMC41OSA3LjExIDUuN2MtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDAtLjM5LjM5LS4zOSAxLjAyIDAgMS40MUwxMC41OSAxMiA1LjcgMTYuODljLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDEuMzkuMzkgMS4wMi4zOSAxLjQxIDBMMTIgMTMuNDFsNC44OSA0Ljg5Yy'+
			'4zOS4zOSAxLjAyLjM5IDEuNDEgMCAuMzktLjM5LjM5LTEuMDIgMC0xLjQxTDEzLjQxIDEybDQuODktNC44OWMuMzgtLjM4LjM4LTEuMDIgMC0xLjR6Ii8+Cjwvc3ZnPgo=';
		me._ht_info_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiNkZmUwMzYiIGZpbGwtb3BhY2l0eT0iMSIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIxOHB4Ij4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPgogPHBhdGggZD0iTTE4LjMgNS43MWMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBMMTIgMTAuNTkgNy4xMSA1LjdjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFMMTAuNTkgMTIgNS43IDE2Ljg5Yy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxLjM5LjM5IDEuMDIuMzkgMS40MSAwTD'+
			'EyIDEzLjQxbDQuODkgNC44OWMuMzkuMzkgMS4wMi4zOSAxLjQxIDAgLjM5LS4zOS4zOS0xLjAyIDAtMS40MUwxMy40MSAxMmw0Ljg5LTQuODljLjM4LS4zOC4zOC0xLjAyIDAtMS40eiIvPgo8L3N2Zz4K';
		me._ht_info_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_info_popup_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(2px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_popup_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_info_hotspots') !== null) && (player.getVariableValue('open_info_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info_popup_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info_popup_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info_popup_close.style.transition='opacity 300ms ease 0ms';
				if (me._ht_info_popup_close.ggCurrentLogicStateAlpha == 0) {
					me._ht_info_popup_close.style.visibility=me._ht_info_popup_close.ggVisible?'inherit':'hidden';
					me._ht_info_popup_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_info_popup_close.style.opacity == 0.0) { me._ht_info_popup_close.style.visibility="hidden"; } }, 305);
					me._ht_info_popup_close.style.opacity=0;
				}
			}
		}
		me._ht_info_popup_close.logicBlock_alpha();
		me._ht_info_popup_close.onclick=function (e) {
			player.setVariableValue('open_info_hotspots', player.getVariableValue('open_info_hotspots').replace("<"+me.hotspot.id+">", ''));
			if (player.transitionsDisabled) {
				me._ht_info_popup_text.style.transition='none';
			} else {
				me._ht_info_popup_text.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_info_popup_text.style.opacity='0';
			me._ht_info_popup_text.style.visibility='hidden';
			me._ht_info.style.zIndex='-1';
		}
		me._ht_info_popup_close.onmouseenter=function (e) {
			me._ht_info_popup_close__img.style.visibility='hidden';
			me._ht_info_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_info_popup_close']=true;
		}
		me._ht_info_popup_close.onmouseleave=function (e) {
			me._ht_info_popup_close__img.style.visibility='inherit';
			me._ht_info_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_info_popup_close']=false;
		}
		me._ht_info_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_info_popup_close);
		el=me._ht_info_icon_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="ht_info_icon_container";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_icon_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_icon_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_info_hotspots') !== null) && (player.getVariableValue('open_info_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info_icon_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info_icon_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info_icon_container.style.transition='opacity 300ms ease 0ms';
				if (me._ht_info_icon_container.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_info_icon_container.style.opacity == 0.0) { me._ht_info_icon_container.style.visibility="hidden"; } }, 305);
					me._ht_info_icon_container.style.opacity=0;
				}
				else {
					me._ht_info_icon_container.style.visibility=me._ht_info_icon_container.ggVisible?'inherit':'hidden';
					me._ht_info_icon_container.style.opacity=1;
				}
			}
		}
		me._ht_info_icon_container.logicBlock_alpha();
		me._ht_info_icon_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('open_info_hotspots', player.getVariableValue('open_info_hotspots') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_info_popup_text.style.transition='none';
				} else {
					me._ht_info_popup_text.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_info_popup_text.style.opacity='1';
				me._ht_info_popup_text.style.visibility=me._ht_info_popup_text.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_info.style.zIndex='0';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					skin._info_popup_title_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_popup_title_phone.ggUpdateText();
				skin._info_popup_title_phone.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					skin._info_popup_text_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.description)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_popup_text_phone.ggUpdateText();
				skin._info_popup_text_phone.ggTextDiv.scrollTop = 0;
			}
		}
		me._ht_info_icon_container.onmouseenter=function (e) {
			me.elementMouseOver['ht_info_icon_container']=true;
			me._ht_info_icon.logicBlock_visible();
		}
		me._ht_info_icon_container.onmouseleave=function (e) {
			me.elementMouseOver['ht_info_icon_container']=false;
			me._ht_info_icon.logicBlock_visible();
		}
		me._ht_info_icon_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_icon=document.createElement('div');
		els=me._ht_info_icon__img=document.createElement('img');
		els.className='ggskin ggskin_ht_info_icon';
		hs=basePath + 'images/ht_info_icon.gif';
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
		el.ggId="ht_info_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info_icon_container'] == true)) && 
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_icon.style.transition='';
				if (me._ht_info_icon.ggCurrentLogicStateVisible == 0) {
					me._ht_info_icon.style.visibility="hidden";
					me._ht_info_icon.ggVisible=false;
				}
				else {
					me._ht_info_icon.style.visibility=(Number(me._ht_info_icon.style.opacity)>0||!me._ht_info_icon.style.opacity)?'inherit':'hidden';
					me._ht_info_icon.ggVisible=true;
				}
			}
		}
		me._ht_info_icon.logicBlock_visible();
		me._ht_info_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_icon_container.appendChild(me._ht_info_icon);
		el=me._ht_info_custom=document.createElement('div');
		els=me._ht_info_custom__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_info_custom.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_info_custom.ggSubElement.setAttribute('alt', player._(me._ht_info_custom.ggAltText));
			me._ht_info_custom.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_info_custom.ggText_untranslated = img;
			me._ht_info_custom.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_info_custom.ggSubElement.style.width = '0px';
			me._ht_info_custom.ggSubElement.style.height = '0px';
			me._ht_info_custom.ggSubElement.src='';
			me._ht_info_custom.ggSubElement.src=me._ht_info_custom.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_info_custom.ggText != player._(me._ht_info_custom.ggText_untranslated)) {
				me._ht_info_custom.ggText = player._(me._ht_info_custom.ggText_untranslated);
				me._ht_info_custom.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_info_custom";
		el.ggDx=50;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 50px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_custom.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_custom.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_custom.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_custom.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_custom.style.transition='';
				if (me._ht_info_custom.ggCurrentLogicStateVisible == 0) {
					me._ht_info_custom.style.visibility=(Number(me._ht_info_custom.style.opacity)>0||!me._ht_info_custom.style.opacity)?'inherit':'hidden';
					me._ht_info_custom.ggSubElement.src=me._ht_info_custom.ggText;
					me._ht_info_custom.ggVisible=true;
				}
				else {
					me._ht_info_custom.style.visibility="hidden";
					me._ht_info_custom.ggSubElement.src='';
					me._ht_info_custom.ggVisible=false;
				}
			}
		}
		me._ht_info_custom.logicBlock_visible();
		me._ht_info_custom.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_info_custom.clientWidth;
			var parentHeight = me._ht_info_custom.clientHeight;
			var img = me._ht_info_custom__img;
			var aspectRatioDiv = me._ht_info_custom.clientWidth / me._ht_info_custom.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_info_custom.ggScrollbars || currentWidth < me._ht_info_custom.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._ht_info_custom.ggScrollbars || currentHeight < me._ht_info_custom.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me._ht_info_icon_container.appendChild(me._ht_info_custom);
		me._ht_info.appendChild(me._ht_info_icon_container);
		me._ht_info.logicBlock_visible();
		me._ht_info.logicBlock_alpha();
		me.elementMouseOver['ht_info']=false;
		me._ht_info_popup.logicBlock_size();
		me._ht_info_popup.logicBlock_alpha();
		me._ht_info_tooltip.logicBlock_position();
		me._ht_info_tooltip.logicBlock_alpha();
		me._ht_info_popup_close.logicBlock_alpha();
		me.elementMouseOver['ht_info_popup_close']=false;
		me._ht_info_icon_container.logicBlock_alpha();
		me.elementMouseOver['ht_info_icon_container']=false;
		me._ht_info_icon.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_info_custom.style.width=hotspot.customimagewidth + 'px';
			me._ht_info_custom.style.height=hotspot.customimageheight + 'px';
			let d = 50;
			me._ht_info_custom.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_info_custom.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_info_custom.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_info_icon.logicBlock_visible();
				me._ht_info_custom.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_info.logicBlock_visible();
				me._ht_info.logicBlock_alpha();
				me._ht_info_popup.logicBlock_size();
				me._ht_info_popup.logicBlock_alpha();
				me._ht_info_tooltip.logicBlock_alpha();
				me._ht_info_popup_close.logicBlock_alpha();
				me._ht_info_icon_container.logicBlock_alpha();
				player.setVariableValue('open_info_hotspots', "");
				me._ht_info_icon.logicBlock_visible();
				me._ht_info_custom.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_info.logicBlock_visible();
				me._ht_info.logicBlock_alpha();
				me._ht_info_popup.logicBlock_size();
				me._ht_info_popup.logicBlock_alpha();
				me._ht_info_tooltip.logicBlock_position();
				me._ht_info_tooltip.logicBlock_alpha();
				me._ht_info_popup_close.logicBlock_alpha();
				me._ht_info_icon_container.logicBlock_alpha();
				me._ht_info_icon.logicBlock_visible();
				me._ht_info_custom.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_info_tooltip.logicBlock_position();
			};
			me.ggEvent_varchanged_open_info_hotspots=function() {
				me._ht_info_popup.logicBlock_size();
				me._ht_info_popup.logicBlock_alpha();
				me._ht_info_tooltip.logicBlock_alpha();
				me._ht_info_popup_close.logicBlock_alpha();
				me._ht_info_icon_container.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_info.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_info.logicBlock_visible();
				me._ht_info.logicBlock_alpha();
			};
			me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_pdf(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_pdf=document.createElement('div');
		el.ggId="ht_pdf";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_pdf.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf.style.transition='opacity 500ms ease 0ms';
				if (me._ht_pdf.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf.style.visibility=(Number(me._ht_pdf.style.opacity)>0||!me._ht_pdf.style.opacity)?'inherit':'hidden';
					me._ht_pdf.ggVisible=true;
				}
				else {
					me._ht_pdf.style.visibility="hidden";
					me._ht_pdf.ggVisible=false;
				}
			}
		}
		me._ht_pdf.logicBlock_visible();
		me._ht_pdf.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_pdf.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_pdf.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_pdf.style.transition='opacity 500ms ease 0ms';
				if (me._ht_pdf.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_pdf.style.opacity == 0.0) { me._ht_pdf.style.visibility="hidden"; } }, 505);
					me._ht_pdf.style.opacity=0;
				}
				else {
					me._ht_pdf.style.visibility=me._ht_pdf.ggVisible?'inherit':'hidden';
					me._ht_pdf.style.opacity=1;
				}
			}
		}
		me._ht_pdf.logicBlock_alpha();
		me._ht_pdf.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._pdf_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._pdf_popup_title.ggUpdateText();
				skin._pdf_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._pdf_popup_pdf.ggInitPdf(player._(player.getBasePath()+""+player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				let pdfInterval_1 = setInterval(() => {
					if (skin._pdf_popup_pdf__pdf.contentWindow.PDFViewerApplication && skin._pdf_popup_pdf__pdf.contentWindow.PDFViewerApplication.initialized && skin._pdf_popup_pdf__pdf.contentWindow.PDFViewerApplication.downloadComplete && skin._pdf_popup_pdf__pdf.contentWindow.PDFViewerApplication.pdfViewer._pageViewsReady) {
						skin._pdf_popup_pdf.ggSetCurrentPage(Number(player._(me.hotspot.target)));
						clearInterval(pdfInterval_1);
					}
				}, 50);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._pdf_popup_phone.ggInitPdf(player._(player.getBasePath()+""+player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				let pdfInterval_2 = setInterval(() => {
					if (skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.initialized && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.downloadComplete && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.pdfViewer._pageViewsReady) {
						skin._pdf_popup_phone.ggSetCurrentPage(Number(player._(me.hotspot.target)));
						clearInterval(pdfInterval_2);
					}
				}, 50);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_pdf']=true;
			me._ht_pdf_tooltip.logicBlock_alpha();
			me._ht_pdf_icon.logicBlock_visible();
			me._ht_pdf_icon_active.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.onmouseleave=function (e) {
			me.elementMouseOver['ht_pdf']=false;
			me._ht_pdf_tooltip.logicBlock_alpha();
			me._ht_pdf_icon.logicBlock_visible();
			me._ht_pdf_icon_active.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_pdf.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_pdf_tooltip=document.createElement('div');
		els=me._ht_pdf_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_pdf_tooltip";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_pdf_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_pdf_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_pdf_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_pdf_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_tooltip.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_pdf_tooltip.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_pdf_tooltip.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_pdf_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_pdf_tooltip.ggCurrentLogicStatePosition == 0) {
					me._ht_pdf_tooltip.style.left = 'calc(50% - (0px / 2))';
					me._ht_pdf_tooltip.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -40px)';
				}
				else {
					me._ht_pdf_tooltip.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_pdf_tooltip.style.top='calc(50% - ((0px + 0px) / 2) - 40px)';
				}
			}
		}
		me._ht_pdf_tooltip.logicBlock_position();
		me._ht_pdf_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_pdf'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_pdf_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_pdf_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_pdf_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_pdf_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_pdf_tooltip.style.visibility=me._ht_pdf_tooltip.ggVisible?'inherit':'hidden';
					me._ht_pdf_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_pdf_tooltip.style.opacity == 0.0) { me._ht_pdf_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_pdf_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_pdf_tooltip.logicBlock_alpha();
		me._ht_pdf_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf.appendChild(me._ht_pdf_tooltip);
		el=me._ht_pdf_bg=document.createElement('div');
		el.ggId="ht_pdf_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(223,224,54,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_bg.style.transition='';
				if (me._ht_pdf_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_bg.style.visibility="hidden";
					me._ht_pdf_bg.ggVisible=false;
				}
				else {
					me._ht_pdf_bg.style.visibility=(Number(me._ht_pdf_bg.style.opacity)>0||!me._ht_pdf_bg.style.opacity)?'inherit':'hidden';
					me._ht_pdf_bg.ggVisible=true;
				}
			}
		}
		me._ht_pdf_bg.logicBlock_visible();
		me._ht_pdf_bg.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf.appendChild(me._ht_pdf_bg);
		el=me._ht_pdf_icon=document.createElement('div');
		els=me._ht_pdf_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiMzYzNjM2MiIGZpbGwtb3BhY2l0eT0iMSIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIxOHB4Ij4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPgogPHBhdGggZD0iTTIwIDJIOGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxMmMxLjEgMCAyLS45IDItMlY0YzAtMS4xLS45LTItMi0yem0tOC41IDcuNWMwIC44My0uNjcgMS41LTEuNSAxLjVIOXYxLjI1YzAgLjQxLS4zNC43NS0uNzUuNzVzLS43NS0uMzQtLjc1LS43NVY4YzAtLjU1LjQ1LTEgMS'+
			'0xSDEwYy44MyAwIDEuNS42NyAxLjUgMS41djF6bTUgMmMwIC44My0uNjcgMS41LTEuNSAxLjVoLTJjLS4yOCAwLS41LS4yMi0uNS0uNXYtNWMwLS4yOC4yMi0uNS41LS41aDJjLjgzIDAgMS41LjY3IDEuNSAxLjV2M3ptNC0zLjc1YzAgLjQxLS4zNC43NS0uNzUuNzVIMTl2MWguNzVjLjQxIDAgLjc1LjM0Ljc1Ljc1cy0uMzQuNzUtLjc1Ljc1SDE5djEuMjVjMCAuNDEtLjM0Ljc1LS43NS43NXMtLjc1LS4zNC0uNzUtLjc1VjhjMC0uNTUuNDUtMSAxLTFoMS4yNWMuNDEgMCAuNzUuMzQuNzUuNzV6TTkgOS41aDF2LTFIOXYxek0zIDZjLS41NSAwLTEgLjQ1LTEgMXYxM2MwIDEuMS45IDIgMiAyaDEz'+
			'Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xSDVjLS41NSAwLTEtLjQ1LTEtMVY3YzAtLjU1LS40NS0xLTEtMXptMTEgNS41aDF2LTNoLTF2M3oiLz4KPC9zdmc+Cg==';
		me._ht_pdf_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_pdf_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_pdf'] == true)) || 
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_icon.style.transition='';
				if (me._ht_pdf_icon.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_icon.style.visibility="hidden";
					me._ht_pdf_icon.ggVisible=false;
				}
				else {
					me._ht_pdf_icon.style.visibility=(Number(me._ht_pdf_icon.style.opacity)>0||!me._ht_pdf_icon.style.opacity)?'inherit':'hidden';
					me._ht_pdf_icon.ggVisible=true;
				}
			}
		}
		me._ht_pdf_icon.logicBlock_visible();
		me._ht_pdf_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf.appendChild(me._ht_pdf_icon);
		el=me._ht_pdf_icon_active=document.createElement('div');
		els=me._ht_pdf_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IndoaXRlIiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMjAgMkg4Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS04LjUgNy41YzAgLjgzLS42NyAxLjUtMS41IDEuNUg5djEuMjVjMCAuNDEtLjM0Ljc1LS43NS43NXMtLjc1LS4zNC0uNzUtLjc1VjhjMC0uNTUuNDUtMSAxLTFIMTBjLjgzIDAgMS41LjY3ID'+
			'EuNSAxLjV2MXptNSAyYzAgLjgzLS42NyAxLjUtMS41IDEuNWgtMmMtLjI4IDAtLjUtLjIyLS41LS41di01YzAtLjI4LjIyLS41LjUtLjVoMmMuODMgMCAxLjUuNjcgMS41IDEuNXYzem00LTMuNzVjMCAuNDEtLjM0Ljc1LS43NS43NUgxOXYxaC43NWMuNDEgMCAuNzUuMzQuNzUuNzVzLS4zNC43NS0uNzUuNzVIMTl2MS4yNWMwIC40MS0uMzQuNzUtLjc1Ljc1cy0uNzUtLjM0LS43NS0uNzVWOGMwLS41NS40NS0xIDEtMWgxLjI1Yy40MSAwIC43NS4zNC43NS43NXpNOSA5LjVoMXYtMUg5djF6TTMgNmMtLjU1IDAtMSAuNDUtMSAxdjEzYzAgMS4xLjkgMiAyIDJoMTNjLjU1IDAgMS0uNDUgMS0xcy0u'+
			'NDUtMS0xLTFINWMtLjU1IDAtMS0uNDUtMS0xVjdjMC0uNTUtLjQ1LTEtMS0xem0xMSA1LjVoMXYtM2gtMXYzeiIvPgo8L3N2Zz4K';
		me._ht_pdf_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_pdf_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_pdf'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_icon_active.style.transition='';
				if (me._ht_pdf_icon_active.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_icon_active.style.visibility=(Number(me._ht_pdf_icon_active.style.opacity)>0||!me._ht_pdf_icon_active.style.opacity)?'inherit':'hidden';
					me._ht_pdf_icon_active.ggVisible=true;
				}
				else {
					me._ht_pdf_icon_active.style.visibility="hidden";
					me._ht_pdf_icon_active.ggVisible=false;
				}
			}
		}
		me._ht_pdf_icon_active.logicBlock_visible();
		me._ht_pdf_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf.appendChild(me._ht_pdf_icon_active);
		el=me._ht_pdf_custom_image=document.createElement('div');
		els=me._ht_pdf_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_pdf_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_pdf_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_pdf_custom_image.ggAltText));
			me._ht_pdf_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_pdf_custom_image.ggText_untranslated = img;
			me._ht_pdf_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_pdf_custom_image.ggSubElement.style.width = '0px';
			me._ht_pdf_custom_image.ggSubElement.style.height = '0px';
			me._ht_pdf_custom_image.ggSubElement.src='';
			me._ht_pdf_custom_image.ggSubElement.src=me._ht_pdf_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_pdf_custom_image.ggText != player._(me._ht_pdf_custom_image.ggText_untranslated)) {
				me._ht_pdf_custom_image.ggText = player._(me._ht_pdf_custom_image.ggText_untranslated);
				me._ht_pdf_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_pdf_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_custom_image.style.transition='';
				if (me._ht_pdf_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_custom_image.style.visibility=(Number(me._ht_pdf_custom_image.style.opacity)>0||!me._ht_pdf_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_pdf_custom_image.ggSubElement.src=me._ht_pdf_custom_image.ggText;
					me._ht_pdf_custom_image.ggVisible=true;
				}
				else {
					me._ht_pdf_custom_image.style.visibility="hidden";
					me._ht_pdf_custom_image.ggSubElement.src='';
					me._ht_pdf_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_pdf_custom_image.logicBlock_visible();
		me._ht_pdf_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_pdf_custom_image.clientWidth;
			var parentHeight = me._ht_pdf_custom_image.clientHeight;
			var img = me._ht_pdf_custom_image__img;
			var aspectRatioDiv = me._ht_pdf_custom_image.clientWidth / me._ht_pdf_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_pdf_custom_image.ggScrollbars || currentWidth < me._ht_pdf_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_pdf_custom_image.scrollLeft=currentWidth / 2 - me._ht_pdf_custom_image.clientWidth / 2;
			}
			if (!me._ht_pdf_custom_image.ggScrollbars || currentHeight < me._ht_pdf_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_pdf_custom_image.scrollTop=currentHeight / 2 - me._ht_pdf_custom_image.clientHeight / 2;
			}
		}
		me._ht_pdf.appendChild(me._ht_pdf_custom_image);
		me._ht_pdf.logicBlock_visible();
		me._ht_pdf.logicBlock_alpha();
		me.elementMouseOver['ht_pdf']=false;
		me._ht_pdf_tooltip.logicBlock_position();
		me._ht_pdf_tooltip.logicBlock_alpha();
		me._ht_pdf_bg.logicBlock_visible();
		me._ht_pdf_icon.logicBlock_visible();
		me._ht_pdf_icon_active.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_pdf_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_pdf_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_pdf_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_pdf_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_pdf_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_pdf_tooltip.logicBlock_alpha();
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_icon.logicBlock_visible();
				me._ht_pdf_icon_active.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_pdf.logicBlock_visible();
				me._ht_pdf.logicBlock_alpha();
				me._ht_pdf_tooltip.logicBlock_alpha();
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_icon.logicBlock_visible();
				me._ht_pdf_icon_active.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_pdf.logicBlock_visible();
				me._ht_pdf.logicBlock_alpha();
				me._ht_pdf_tooltip.logicBlock_position();
				me._ht_pdf_tooltip.logicBlock_alpha();
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_icon.logicBlock_visible();
				me._ht_pdf_icon_active.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_pdf_tooltip.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_pdf.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_pdf.logicBlock_visible();
				me._ht_pdf.logicBlock_alpha();
			};
			me.__div = me._ht_pdf;
	};
	function SkinHotspotClass_ht_video_file(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_file=document.createElement('div');
		el.ggId="ht_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_file.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file.style.visibility=(Number(me._ht_video_file.style.opacity)>0||!me._ht_video_file.style.opacity)?'inherit':'hidden';
					me._ht_video_file.ggVisible=true;
				}
				else {
					me._ht_video_file.style.visibility="hidden";
					me._ht_video_file.ggVisible=false;
				}
			}
		}
		me._ht_video_file.logicBlock_visible();
		me._ht_video_file.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_file.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_file.style.opacity == 0.0) { me._ht_video_file.style.visibility="hidden"; } }, 505);
					me._ht_video_file.style.opacity=0;
				}
				else {
					me._ht_video_file.style.visibility=me._ht_video_file.ggVisible?'inherit':'hidden';
					me._ht_video_file.style.opacity=1;
				}
			}
		}
		me._ht_video_file.logicBlock_alpha();
		me._ht_video_file.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_file']=true;
			me._ht_video_file_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_file']=false;
			me._ht_video_file_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_file_popup=document.createElement('div');
		el.ggId="ht_video_file_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -40px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(((player.getVariableValue('open_video_file_hotspots') !== null) && (player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_video_file_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_video_file_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_video_file_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_file_popup.ggCurrentLogicStateSize == 0) {
					me._ht_video_file_popup.style.width='600px';
					me._ht_video_file_popup.style.height='375px';
					setTimeout(function() {skin.updateSize(me._ht_video_file_popup);}, 550);
				}
				else {
					me._ht_video_file_popup.style.width='60px';
					me._ht_video_file_popup.style.height='60px';
					setTimeout(function() {skin.updateSize(me._ht_video_file_popup);}, 550);
				}
			}
		}
		me._ht_video_file_popup.logicBlock_size();
		me._ht_video_file_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_file_hotspots') !== null) && (player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_file_popup.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_file_popup.style.visibility=me._ht_video_file_popup.ggVisible?'inherit':'hidden';
					me._ht_video_file_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_file_popup.style.opacity == 0.0) { me._ht_video_file_popup.style.visibility="hidden"; } }, 405);
					me._ht_video_file_popup.style.opacity=0;
				}
			}
		}
		me._ht_video_file_popup.logicBlock_alpha();
		me._ht_video_file_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_file_controller=document.createElement('div');
		el.ggId="video_file_controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 30px;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((350px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_file_controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_file_controller_seekbar=document.createElement('div');
		me._video_file_controller_seekbar__playhead=document.createElement('div');
		me._video_file_controller_seekbar.mediaEl = null;
		me._video_file_controller_seekbar.fromBufferSource = false;
		me._video_file_controller_seekbar.ggMediaId = 'ht_video_file_popup_video';
		el.ggId="video_file_controller_seekbar";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_controller_seekbar.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_file_controller_seekbar.mediaEl != null) {
					if (e.target == me._video_file_controller_seekbar) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_file_controller_seekbar.fromBufferSource) {
							let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.bufferSoundDuration();
							me._video_file_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_file_controller_seekbar.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_file_controller_seekbar || e.target == me._video_file_controller_seekbar__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_file_controller_seekbar.getBoundingClientRect().x;
							if (me._video_file_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_file_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_file_controller_seekbar.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_file_controller_seekbar.getBoundingClientRect().x;
							if (me._video_file_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_file_controller_seekbar.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_file_controller_seekbar.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_file_controller_seekbar.onmousedown = me._video_file_controller_seekbar.ontouchstart = me._video_file_controller_seekbar.mouseTouchHandling;
		me._video_file_controller_seekbar.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_file_controller_seekbar__playhead.style.visibility = 'hidden';
				me._video_file_controller_seekbar.style.background = 'rgba(0,0,0,0)';
				me._video_file_controller_seekbar.ggConnected = false;
			}
			if (me._video_file_controller_seekbar.mediaEl != null) {
				if (me._video_file_controller_seekbar.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_file_controller_seekbar.updatePlayback);
					if (me._video_file_controller_seekbar.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_file_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_file_controller_seekbar.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_file_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_file_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_file_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_file_controller_seekbar.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_file_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_file_controller_seekbar.mediaEl.removeEventListener('progress', me._video_file_controller_seekbar.updatePlayback);
					me._video_file_controller_seekbar.mediaEl.removeEventListener('canplay', me._video_file_controller_seekbar.updatePlayback);
					me._video_file_controller_seekbar.mediaEl.removeEventListener('timeupdate', me._video_file_controller_seekbar.updatePlayback);
					if (me._video_file_controller_seekbar.ggActivate) {
						me._video_file_controller_seekbar.mediaEl.removeEventListener('play', me._video_file_controller_seekbar.ggActivate);
					}
					if (me._video_file_controller_seekbar.ggDeactivate) {
						me._video_file_controller_seekbar.mediaEl.removeEventListener('ended', me._video_file_controller_seekbar.ggDeactivate);
						me._video_file_controller_seekbar.mediaEl.removeEventListener('pause', me._video_file_controller_seekbar.ggDeactivate);
					}
					if (me._video_file_controller_seekbar.ggMediaEnded) {
						me._video_file_controller_seekbar.mediaEl.removeEventListener('ended', me._video_file_controller_seekbar.ggMediaEnded);
					}
				}
			}
			me._video_file_controller_seekbar.mediaEl = player.getMediaObject(me._video_file_controller_seekbar.ggMediaId);
			if (me._video_file_controller_seekbar.mediaEl) {
				me._video_file_controller_seekbar.fromBufferSource = false;
			} else {
				me._video_file_controller_seekbar.mediaEl = player.getMediaBufferSourceObject('ht_video_file_popup_video');
				me._video_file_controller_seekbar.fromBufferSource = true;
			}
			if (me._video_file_controller_seekbar.mediaEl != null) {
				me._video_file_controller_seekbar__playhead.style.visibility = 'inherit';
				me._video_file_controller_seekbar__playhead.style.left = '-9px';
				if (me._video_file_controller_seekbar.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_file_controller_seekbar.updatePlayback);
					if (me._video_file_controller_seekbar.ggActivate) {
						me._video_file_controller_seekbar.bufferSoundActivate = function(args) { if (args['id'] == me._video_file_controller_seekbar.mediaEl.id) me._video_file_controller_seekbar.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_file_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_file_controller_seekbar.ggDeactivate) {
						me._video_file_controller_seekbar.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_file_controller_seekbar.mediaEl.id) me._video_file_controller_seekbar.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_file_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_file_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_file_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_file_controller_seekbar.ggMediaEnded) {
						me._video_file_controller_seekbar.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_file_controller_seekbar.mediaEl.id) me._video_file_controller_seekbar.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_file_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_file_controller_seekbar.mediaEl.addEventListener('progress', me._video_file_controller_seekbar.updatePlayback);
					me._video_file_controller_seekbar.mediaEl.addEventListener('canplay', me._video_file_controller_seekbar.updatePlayback);
					me._video_file_controller_seekbar.mediaEl.addEventListener('timeupdate', me._video_file_controller_seekbar.updatePlayback);
					if (me._video_file_controller_seekbar.ggActivate) {
						me._video_file_controller_seekbar.mediaEl.addEventListener('play', me._video_file_controller_seekbar.ggActivate);
					}
					if (me._video_file_controller_seekbar.ggDeactivate) {
						me._video_file_controller_seekbar.mediaEl.addEventListener('ended', me._video_file_controller_seekbar.ggDeactivate);
						me._video_file_controller_seekbar.mediaEl.addEventListener('pause', me._video_file_controller_seekbar.ggDeactivate);
					}
					if (me._video_file_controller_seekbar.ggMediaEnded) {
						me._video_file_controller_seekbar.mediaEl.addEventListener('ended', me._video_file_controller_seekbar.ggMediaEnded);
					}
				}
				me._video_file_controller_seekbar.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_file_controller_seekbar.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_file_controller_seekbar.updatePlayback = function(args) {
			if (!me._video_file_controller_seekbar.ggConnected) return;
			if (me._video_file_controller_seekbar.mediaEl != null) {
				if (me._video_file_controller_seekbar.mediaEl.readyState || (me._video_file_controller_seekbar.fromBufferSource && args && args['id'] == me._video_file_controller_seekbar.mediaEl.id)) {
					if (me._video_file_controller_seekbar.fromBufferSource) {
						var percent = me._video_file_controller_seekbar.mediaEl.bufferSoundCurrentTime() / me._video_file_controller_seekbar.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_file_controller_seekbar.mediaEl.currentTime / me._video_file_controller_seekbar.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_file_controller_seekbar.clientWidth - 2 * 4 + 0) * percent);
					playheadpos += -9;
					me._video_file_controller_seekbar__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (4 / me._video_file_controller_seekbar.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_file_controller_seekbar.fromBufferSource) {
						gradientString += ', rgba(0,0,0,0.392157) ' + currPos +'%, rgba(0,0,0,0.392157) 100%';
					} else {
						for (var i = 0; i < me._video_file_controller_seekbar.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_file_controller_seekbar.mediaEl.buffered.start(i) / me._video_file_controller_seekbar.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_file_controller_seekbar.mediaEl.buffered.end(i) / me._video_file_controller_seekbar.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(0,0,0,0.392157) ' + currPos + '%';
								} else {
									gradientString += ', rgba(0,0,0,0) ' + currPos + '%, rgba(0,0,0,0) ' + rangeStart + '%';
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeStart + '%';
								}
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(0,0,0,0) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_file_controller_seekbar.style.background = gradientString;
				}
			}
		}
		me._video_file_controller_seekbar.appendChild(me._video_file_controller_seekbar__playhead);
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 4px;';
		var hs_playhead = 'height: 25px;';
		hs_playhead += 'width: 25px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -9px;';
		hs_playhead += 'top: -7.5px;';
		hs_playhead += 'border-radius: 13px;';
		hs_playhead += cssPrefix + 'border-radius: 13px;';
		hs_playhead += 'background-color: rgba(223,224,54,1);';
		me._video_file_controller_seekbar.setAttribute('style', hs);
		me._video_file_controller_seekbar__playhead.setAttribute('style', hs_playhead);
		me._video_file_controller_seekbar.ggIsActive=function() {
			if (me._video_file_controller_seekbar.mediaEl != null) {
				return (me._video_file_controller_seekbar.mediaEl.paused == false && me._video_file_controller_seekbar.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_file_controller_seekbar.ggActivate=function () {
			me._video_file_controller_button_pause.style.transition='none';
			me._video_file_controller_button_pause.style.visibility=(Number(me._video_file_controller_button_pause.style.opacity)>0||!me._video_file_controller_button_pause.style.opacity)?'inherit':'hidden';
			me._video_file_controller_button_pause.ggVisible=true;
			me._video_file_controller_button_play.style.transition='none';
			me._video_file_controller_button_play.style.visibility='hidden';
			me._video_file_controller_button_play.ggVisible=false;
		}
		me._video_file_controller_seekbar.ggDeactivate=function () {
			me._video_file_controller_button_play.style.transition='none';
			me._video_file_controller_button_play.style.visibility=(Number(me._video_file_controller_button_play.style.opacity)>0||!me._video_file_controller_button_play.style.opacity)?'inherit':'hidden';
			me._video_file_controller_button_play.ggVisible=true;
			me._video_file_controller_button_pause.style.transition='none';
			me._video_file_controller_button_pause.style.visibility='hidden';
			me._video_file_controller_button_pause.ggVisible=false;
		}
		me._video_file_controller_seekbar.ggUpdatePosition=function (useTransition) {
			me._video_file_controller_seekbar.updatePlayback();
		}
		me._video_file_controller.appendChild(me._video_file_controller_seekbar);
		el=me._video_file_controller_button_pause=document.createElement('div');
		els=me._video_file_controller_button_pause__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMThweCI+CiA8cGF0aCBkPSJNOCAxOWMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyem02LTEydjEwYzAgMS4xLjkgMiAyIDJzMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJ6Ii8+Cjwvc3ZnPgo=';
		me._video_file_controller_button_pause__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_file_controller_button_pause__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZpZXdCb3g9IjAgMCAxOCAxOCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDE0LjJjMC44LDAsMS41LTAuNywxLjUtMS41VjUuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVTNC41LDQuNCw0LjUsNS4ydjcuNUM0LjUsMTMuNiw1LjIsMTQuMiw2LDE0LjJ6JiN4ZDsmI3hhOyYjeDk7IE0xMC41LDUuMnY3LjVjMCwwLjgsMC43LDEuNSwxLjUsMS41czEuNS0wLjcsMS41LTEuNVY1LjJjMC0wLjgtMC43LTEuNS0xLjUtMS41UzEwLjUsNC40LDEwLjUsNS4yeiIvPgo8L3N2Zz4K';
		me._video_file_controller_button_pause__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_file_controller_button_pause";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_controller_button_pause.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_file_controller_button_pause.onclick=function (e) {
			if (me._ht_video_file_popup_video.ggApiPlayer) {
				if (me._ht_video_file_popup_video.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._ht_video_file_popup_video.ggApiPlayer.pauseVideo();
					};
					if (me._ht_video_file_popup_video.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_file_popup_video.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_file_popup_video.ggApiPlayerType == 'vimeo') {
					me._ht_video_file_popup_video.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("ht_video_file_popup_video");
			}
			me._video_file_controller_button_pause.style.transition='none';
			me._video_file_controller_button_pause.style.visibility='hidden';
			me._video_file_controller_button_pause.ggVisible=false;
			me._video_file_controller_button_play.style.transition='none';
			me._video_file_controller_button_play.style.visibility=(Number(me._video_file_controller_button_play.style.opacity)>0||!me._video_file_controller_button_play.style.opacity)?'inherit':'hidden';
			me._video_file_controller_button_play.ggVisible=true;
		}
		me._video_file_controller_button_pause.onmouseenter=function (e) {
			me._video_file_controller_button_pause__img.style.visibility='hidden';
			me._video_file_controller_button_pause__imgo.style.visibility='inherit';
			me.elementMouseOver['video_file_controller_button_pause']=true;
		}
		me._video_file_controller_button_pause.onmouseleave=function (e) {
			me._video_file_controller_button_pause__img.style.visibility='inherit';
			me._video_file_controller_button_pause__imgo.style.visibility='hidden';
			me.elementMouseOver['video_file_controller_button_pause']=false;
		}
		me._video_file_controller_button_pause.ggUpdatePosition=function (useTransition) {
		}
		me._video_file_controller.appendChild(me._video_file_controller_button_pause);
		el=me._video_file_controller_button_play=document.createElement('div');
		els=me._video_file_controller_button_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMThweCI+CiA8cGF0aCBkPSJNOCA2LjgydjEwLjM2YzAgLjc5Ljg3IDEuMjcgMS41NC44NGw4LjE0LTUuMThjLjYyLS4zOS42Mi0xLjI5IDAtMS42OUw5LjU0IDUuOThDOC44NyA1LjU1IDggNi4wMyA4IDYuODJ6Ii8+Cjwvc3ZnPgo=';
		me._video_file_controller_button_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_file_controller_button_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZpZXdCb3g9IjAgMCAxOCAxOCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDUuMXY3LjhjMCwwLjYsMC43LDEsMS4yLDAuNmw2LjEtMy45YzAuNS0wLjMsMC41LTEsMC0xLjNMNy4yLDQuNUM2LjcsNC4yLDYsNC41LDYsNS4xeiIvPgo8L3N2Zz4K';
		me._video_file_controller_button_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_file_controller_button_play";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_controller_button_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_file_controller_button_play.onclick=function (e) {
			if (me._ht_video_file_popup_video.ggApiPlayer) {
				if (me._ht_video_file_popup_video.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._ht_video_file_popup_video.ggApiPlayer.playVideo();
					};
					if (me._ht_video_file_popup_video.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_file_popup_video.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_file_popup_video.ggApiPlayerType == 'vimeo') {
					me._ht_video_file_popup_video.ggApiPlayer.play();
				}
			} else {
				player.playSound("ht_video_file_popup_video","1");
			}
			me._video_file_controller_button_play.style.transition='none';
			me._video_file_controller_button_play.style.visibility='hidden';
			me._video_file_controller_button_play.ggVisible=false;
			me._video_file_controller_button_pause.style.transition='none';
			me._video_file_controller_button_pause.style.visibility=(Number(me._video_file_controller_button_pause.style.opacity)>0||!me._video_file_controller_button_pause.style.opacity)?'inherit':'hidden';
			me._video_file_controller_button_pause.ggVisible=true;
		}
		me._video_file_controller_button_play.onmouseenter=function (e) {
			me._video_file_controller_button_play__img.style.visibility='hidden';
			me._video_file_controller_button_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_file_controller_button_play']=true;
		}
		me._video_file_controller_button_play.onmouseleave=function (e) {
			me._video_file_controller_button_play__img.style.visibility='inherit';
			me._video_file_controller_button_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_file_controller_button_play']=false;
		}
		me._video_file_controller_button_play.ggUpdatePosition=function (useTransition) {
		}
		me._video_file_controller.appendChild(me._video_file_controller_button_play);
		me._ht_video_file_popup.appendChild(me._video_file_controller);
		el=me._ht_video_file_popup_title=document.createElement('div');
		els=me._ht_video_file_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_file_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 24px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_video_file_popup_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_file_popup_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_file_popup_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_file_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_popup.appendChild(me._ht_video_file_popup_title);
		el=me._ht_video_file_popup_video=document.createElement('div');
		me._ht_video_file_popup_video.seekbars = [];
		me._ht_video_file_popup_video.seekbars.push('video_file_controller_seekbar');
		me._ht_video_file_popup_video.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._ht_video_file_popup_video.seekbars.length; i++) {
					var seekbar = me.findElements(me._ht_video_file_popup_video.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._ht_video_file_popup_video.hasChildNodes()) {
				me._ht_video_file_popup_video.removeChild(me._ht_video_file_popup_video.lastChild);
			}
			if (me._ht_video_file_popup_video__vid) {
				me._ht_video_file_popup_video__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._ht_video_file_popup_video.ggVideoNotLoaded == false && me._ht_video_file_popup_video.ggDeactivate && player.isPlaying('ht_video_file_popup_video')) { me._ht_video_file_popup_video.ggDeactivate(); }
				me._ht_video_file_popup_video.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('ht_video_file_popup_video');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._ht_video_file_popup_video.ggVideoNotLoaded = false;
			me._ht_video_file_popup_video__vid=document.createElement('video');
			me._ht_video_file_popup_video__vid.className='ggskin ggskin_video';
			me._ht_video_file_popup_video__vid.setAttribute('width', '100%');
			me._ht_video_file_popup_video__vid.setAttribute('height', '100%');
			me._ht_video_file_popup_video__vid.setAttribute('crossOrigin', 'anonymous');
			me._ht_video_file_popup_video__vid.setAttribute('controlsList', 'nodownload');
			me._ht_video_file_popup_video__vid.setAttribute('disablepictureinpicture', 'true');
			me._ht_video_file_popup_video__vid.setAttribute('oncontextmenu', 'return false;');
			me._ht_video_file_popup_video__vid.setAttribute('autoplay', '');
			me._ht_video_file_popup_video__source=document.createElement('source');
			me._ht_video_file_popup_video__source.setAttribute('src', media);
			me._ht_video_file_popup_video__vid.setAttribute('playsinline', 'playsinline');
			me._ht_video_file_popup_video__vid.setAttribute('style', ';');
			me._ht_video_file_popup_video__vid.style.outline = 'none';
			me._ht_video_file_popup_video__vid.appendChild(me._ht_video_file_popup_video__source);
			me._ht_video_file_popup_video.appendChild(me._ht_video_file_popup_video__vid);
			var videoEl = player.registerVideoElement('ht_video_file_popup_video', me._ht_video_file_popup_video__vid);
			videoEl.autoplay = true;
			player.changeVolume('ht_video_file_popup_video', 0.0);
			notifySeekbars();
			me._ht_video_file_popup_video.ggVideoSource = media;
		}
		el.ggId="ht_video_file_popup_video";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 100px);';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_popup_video.ggIsActive=function() {
			if (me._ht_video_file_popup_video__vid != null) {
				return (me._ht_video_file_popup_video__vid.paused == false && me._ht_video_file_popup_video__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_popup_video.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('open_video_file_hotspots') !== null) && (player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_popup_video.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_popup_video.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_popup_video.style.transition='';
				if (me._ht_video_file_popup_video.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_popup_video.style.visibility=(Number(me._ht_video_file_popup_video.style.opacity)>0||!me._ht_video_file_popup_video.style.opacity)?'inherit':'hidden';
					if (me._ht_video_file_popup_video.ggVideoNotLoaded) {
						me._ht_video_file_popup_video.ggInitMedia(me._ht_video_file_popup_video.ggVideoSource);
					}
					me._ht_video_file_popup_video.ggVisible=true;
				}
				else {
					me._ht_video_file_popup_video.style.visibility="hidden";
					me._ht_video_file_popup_video.ggInitMedia('');
					me._ht_video_file_popup_video.ggVisible=false;
				}
			}
		}
		me._ht_video_file_popup_video.logicBlock_visible();
		me._ht_video_file_popup_video.onclick=function (e) {
			if (me._ht_video_file_popup_video.ggApiPlayer) {
				if (me._ht_video_file_popup_video.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._ht_video_file_popup_video.ggApiPlayer.getPlayerState() == 1) {
							me._ht_video_file_popup_video.ggApiPlayer.pauseVideo();
						} else {
							me._ht_video_file_popup_video.ggApiPlayer.playVideo();
						}
					};
					if (me._ht_video_file_popup_video.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_file_popup_video.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_file_popup_video.ggApiPlayerType == 'vimeo') {
					var promise = me._ht_video_file_popup_video.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._ht_video_file_popup_video.ggApiPlayer.play();
						} else {
							me._ht_video_file_popup_video.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("ht_video_file_popup_video","1");
			}
		}
		me._ht_video_file_popup_video.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_popup.appendChild(me._ht_video_file_popup_video);
		me._ht_video_file.appendChild(me._ht_video_file_popup);
		el=me._ht_video_file_tooltip=document.createElement('div');
		els=me._ht_video_file_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_file_tooltip";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_file_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_file_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_file_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_file_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_tooltip.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_video_file_tooltip.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_video_file_tooltip.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_video_file_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_video_file_tooltip.ggCurrentLogicStatePosition == 0) {
					me._ht_video_file_tooltip.style.left = 'calc(50% - (0px / 2))';
					me._ht_video_file_tooltip.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -40px)';
				}
				else {
					me._ht_video_file_tooltip.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_video_file_tooltip.style.top='calc(50% - ((0px + 0px) / 2) - 40px)';
				}
			}
		}
		me._ht_video_file_tooltip.logicBlock_position();
		me._ht_video_file_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_file'] == true)) && 
				(((player.getVariableValue('open_video_file_hotspots') !== null) && (player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") == -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_video_file_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_file_tooltip.style.visibility=me._ht_video_file_tooltip.ggVisible?'inherit':'hidden';
					me._ht_video_file_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_file_tooltip.style.opacity == 0.0) { me._ht_video_file_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_video_file_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_video_file_tooltip.logicBlock_alpha();
		me._ht_video_file_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._ht_video_file_tooltip);
		el=me._ht_video_file_popup_close=document.createElement('div');
		els=me._ht_video_file_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IndoaXRlIiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_file_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_file_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZpZXdCb3g9IjAgMCAxOCAxOCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_file_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_file_popup_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(2px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_popup_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_file_hotspots') !== null) && (player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file_popup_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file_popup_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file_popup_close.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_file_popup_close.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_file_popup_close.style.visibility=me._ht_video_file_popup_close.ggVisible?'inherit':'hidden';
					me._ht_video_file_popup_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_file_popup_close.style.opacity == 0.0) { me._ht_video_file_popup_close.style.visibility="hidden"; } }, 305);
					me._ht_video_file_popup_close.style.opacity=0;
				}
			}
		}
		me._ht_video_file_popup_close.logicBlock_alpha();
		me._ht_video_file_popup_close.onclick=function (e) {
			player.setVariableValue('open_video_file_hotspots', player.getVariableValue('open_video_file_hotspots').replace("<"+me.hotspot.id+">", ''));
			if (player.transitionsDisabled) {
				me._ht_video_file_popup_video.style.transition='none';
			} else {
				me._ht_video_file_popup_video.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_file_popup_video.style.opacity='0';
			me._ht_video_file_popup_video.style.visibility='hidden';
			me._ht_video_file_popup_video.ggInitMedia('');
			if (player.transitionsDisabled) {
				me._ht_video_file_popup_title.style.transition='none';
			} else {
				me._ht_video_file_popup_title.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_file_popup_title.style.opacity='0';
			me._ht_video_file_popup_title.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._video_file_controller.style.transition='none';
			} else {
				me._video_file_controller.style.transition='all 200ms ease-out 0ms';
			}
			me._video_file_controller.style.opacity='0';
			me._video_file_controller.style.visibility='hidden';
			me._ht_video_file.style.zIndex='-1';
		}
		me._ht_video_file_popup_close.onmouseenter=function (e) {
			me._ht_video_file_popup_close__img.style.visibility='hidden';
			me._ht_video_file_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_file_popup_close']=true;
		}
		me._ht_video_file_popup_close.onmouseleave=function (e) {
			me._ht_video_file_popup_close__img.style.visibility='inherit';
			me._ht_video_file_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_file_popup_close']=false;
		}
		me._ht_video_file_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._ht_video_file_popup_close);
		el=me._ht_video_file_icon_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="ht_video_file_icon_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_icon_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_icon_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_file_hotspots') !== null) && (player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file_icon_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file_icon_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file_icon_container.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_file_icon_container.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_file_icon_container.style.opacity == 0.0) { me._ht_video_file_icon_container.style.visibility="hidden"; } }, 305);
					me._ht_video_file_icon_container.style.opacity=0;
				}
				else {
					me._ht_video_file_icon_container.style.visibility=me._ht_video_file_icon_container.ggVisible?'inherit':'hidden';
					me._ht_video_file_icon_container.style.opacity=1;
				}
			}
		}
		me._ht_video_file_icon_container.logicBlock_alpha();
		me._ht_video_file_icon_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('open_video_file_hotspots', player.getVariableValue('open_video_file_hotspots') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_file_popup_video.style.transition='none';
				} else {
					me._ht_video_file_popup_video.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_file_popup_video.style.opacity='1';
				me._ht_video_file_popup_video.style.visibility=me._ht_video_file_popup_video.ggVisible?'inherit':'hidden';
				if (me._ht_video_file_popup_video.ggVideoNotLoaded) {
					me._ht_video_file_popup_video.ggInitMedia(me._ht_video_file_popup_video.ggVideoSource);
				}
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_file_popup_title.style.transition='none';
				} else {
					me._ht_video_file_popup_title.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_file_popup_title.style.opacity='1';
				me._ht_video_file_popup_title.style.visibility=me._ht_video_file_popup_title.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._video_file_controller.style.transition='none';
				} else {
					me._video_file_controller.style.transition='all 200ms ease-out 500ms';
				}
				me._video_file_controller.style.opacity='1';
				me._video_file_controller.style.visibility=me._video_file_controller.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_file_popup_video.ggInitMedia(player._(player.getBasePath()+""+player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_file.style.zIndex='0';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_file_popup_phone.ggInitMedia(player._(player.getBasePath()+""+player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_controller_seekbar_phone.ggMediaId = "video_file_popup_phone";
				skin._video_controller_seekbar_phone.ggConnectToMediaEl();
				skin._video_controller_seekbar_phone.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', true);
			}
		}
		me._ht_video_file_icon_container.onmouseenter=function (e) {
			me.elementMouseOver['ht_video_file_icon_container']=true;
			me._ht_video_youtube_icon.logicBlock_visible();
			me._ht_video_youtube_icon_active.logicBlock_visible();
		}
		me._ht_video_file_icon_container.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_file_icon_container']=false;
			me._ht_video_youtube_icon.logicBlock_visible();
			me._ht_video_youtube_icon_active.logicBlock_visible();
		}
		me._ht_video_file_icon_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_bg=document.createElement('div');
		el.ggId="ht_video_youtube_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(223,224,54,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_bg.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_icon_container.appendChild(me._ht_video_youtube_bg);
		el=me._ht_video_youtube_icon=document.createElement('div');
		els=me._ht_video_youtube_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiMzYzNjM2MiIGZpbGwtb3BhY2l0eT0iMSIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIxOHB4Ij4KIDxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxMy41di03YzAtLjQxLjQ3LS42NS44LS40bDQuNjcgMy41Yy4yNy4yLjI3LjYgMCAuOGwtNC42NyAzLjVjLS4zMy4yNS0uOC4wMS0uOC0uNHoiLz4KPC9zdmc+Cg==';
		me._ht_video_youtube_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_file_icon_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_icon.style.transition='';
				if (me._ht_video_youtube_icon.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_icon.style.visibility="hidden";
					me._ht_video_youtube_icon.ggVisible=false;
				}
				else {
					me._ht_video_youtube_icon.style.visibility=(Number(me._ht_video_youtube_icon.style.opacity)>0||!me._ht_video_youtube_icon.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_icon.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube_icon.logicBlock_visible();
		me._ht_video_youtube_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_icon_container.appendChild(me._ht_video_youtube_icon);
		el=me._ht_video_youtube_icon_active=document.createElement('div');
		els=me._ht_video_youtube_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IndoaXRlIiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bS0yIDEzLjV2LTdjMC0uNDEuNDctLjY1LjgtLjRsNC42NyAzLjVjLjI3LjIuMjcuNiAwIC44bC00LjY3IDMuNWMtLjMzLjI1LS44LjAxLS44LS40eiIvPgo8L3N2Zz4K';
		me._ht_video_youtube_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_icon_active";
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
		me._ht_video_youtube_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_file_icon_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_icon_active.style.transition='';
				if (me._ht_video_youtube_icon_active.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_icon_active.style.visibility=(Number(me._ht_video_youtube_icon_active.style.opacity)>0||!me._ht_video_youtube_icon_active.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_icon_active.ggVisible=true;
				}
				else {
					me._ht_video_youtube_icon_active.style.visibility="hidden";
					me._ht_video_youtube_icon_active.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube_icon_active.logicBlock_visible();
		me._ht_video_youtube_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_icon_container.appendChild(me._ht_video_youtube_icon_active);
		me._ht_video_file.appendChild(me._ht_video_file_icon_container);
		me._ht_video_file.logicBlock_visible();
		me._ht_video_file.logicBlock_alpha();
		me.elementMouseOver['ht_video_file']=false;
		me._ht_video_file_popup.logicBlock_size();
		me._ht_video_file_popup.logicBlock_alpha();
		me.elementMouseOver['video_file_controller_button_pause']=false;
		me.elementMouseOver['video_file_controller_button_play']=false;
		me._ht_video_file_popup_video.logicBlock_visible();
		me._ht_video_file_popup_video.ggVideoSource = 'media/';
		me._ht_video_file_popup_video.ggVideoNotLoaded = true;
		me._ht_video_file_tooltip.logicBlock_position();
		me._ht_video_file_tooltip.logicBlock_alpha();
		me._ht_video_file_popup_close.logicBlock_alpha();
		me.elementMouseOver['ht_video_file_popup_close']=false;
		me._ht_video_file_icon_container.logicBlock_alpha();
		me.elementMouseOver['ht_video_file_icon_container']=false;
		me._ht_video_youtube_icon.logicBlock_visible();
		me._ht_video_youtube_icon_active.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_video_file.logicBlock_alpha();
				me._ht_video_file_popup.logicBlock_size();
				me._ht_video_file_popup.logicBlock_alpha();
				me._video_file_controller_seekbar.ggConnectToMediaEl();
				me._ht_video_file_popup_video.logicBlock_visible();
				me._ht_video_file_tooltip.logicBlock_alpha();
				me._ht_video_file_popup_close.logicBlock_alpha();
				me._ht_video_file_icon_container.logicBlock_alpha();
				player.setVariableValue('open_video_file_hotspots', "");
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_video_file.logicBlock_alpha();
				me._ht_video_file_popup.logicBlock_size();
				me._ht_video_file_popup.logicBlock_alpha();
				me._ht_video_file_popup_video.logicBlock_visible();
				me._ht_video_file_tooltip.logicBlock_position();
				me._ht_video_file_tooltip.logicBlock_alpha();
				me._ht_video_file_popup_close.logicBlock_alpha();
				me._ht_video_file_icon_container.logicBlock_alpha();
			};
			me.ggEvent_hastouch=function() {
				me._ht_video_file_tooltip.logicBlock_position();
			};
			me.ggEvent_varchanged_open_video_file_hotspots=function() {
				me._ht_video_file_popup.logicBlock_size();
				me._ht_video_file_popup.logicBlock_alpha();
				me._ht_video_file_popup_video.logicBlock_visible();
				me._ht_video_file_tooltip.logicBlock_alpha();
				me._ht_video_file_popup_close.logicBlock_alpha();
				me._ht_video_file_icon_container.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_video_file.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_video_file.logicBlock_alpha();
			};
			me.__div = me._ht_video_file;
	};
	function SkinHotspotClass_ht_video_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_url=document.createElement('div');
		el.ggId="ht_video_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_url.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url.style.visibility=(Number(me._ht_video_url.style.opacity)>0||!me._ht_video_url.style.opacity)?'inherit':'hidden';
					me._ht_video_url.ggVisible=true;
				}
				else {
					me._ht_video_url.style.visibility="hidden";
					me._ht_video_url.ggVisible=false;
				}
			}
		}
		me._ht_video_url.logicBlock_visible();
		me._ht_video_url.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_url.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_url.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_url.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_url.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_url.style.opacity == 0.0) { me._ht_video_url.style.visibility="hidden"; } }, 505);
					me._ht_video_url.style.opacity=0;
				}
				else {
					me._ht_video_url.style.visibility=me._ht_video_url.ggVisible?'inherit':'hidden';
					me._ht_video_url.style.opacity=1;
				}
			}
		}
		me._ht_video_url.logicBlock_alpha();
		me._ht_video_url.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_url']=true;
			me._ht_video_url_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_url']=false;
			me._ht_video_url_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_video_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_url_popup=document.createElement('div');
		el.ggId="ht_video_url_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -40px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(((player.getVariableValue('open_video_url_hotspots') !== null) && (player.getVariableValue('open_video_url_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_video_url_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_video_url_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_video_url_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_url_popup.ggCurrentLogicStateSize == 0) {
					me._ht_video_url_popup.style.width='600px';
					me._ht_video_url_popup.style.height='375px';
					setTimeout(function() {skin.updateSize(me._ht_video_url_popup);}, 550);
				}
				else {
					me._ht_video_url_popup.style.width='60px';
					me._ht_video_url_popup.style.height='60px';
					setTimeout(function() {skin.updateSize(me._ht_video_url_popup);}, 550);
				}
			}
		}
		me._ht_video_url_popup.logicBlock_size();
		me._ht_video_url_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_url_hotspots') !== null) && (player.getVariableValue('open_video_url_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_url_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_url_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_url_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_url_popup.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_url_popup.style.visibility=me._ht_video_url_popup.ggVisible?'inherit':'hidden';
					me._ht_video_url_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_url_popup.style.opacity == 0.0) { me._ht_video_url_popup.style.visibility="hidden"; } }, 405);
					me._ht_video_url_popup.style.opacity=0;
				}
			}
		}
		me._ht_video_url_popup.logicBlock_alpha();
		me._ht_video_url_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_url_controller=document.createElement('div');
		el.ggId="video_url_controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 30px;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((350px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_url_controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_url_controller_seekbar=document.createElement('div');
		me._video_url_controller_seekbar__playhead=document.createElement('div');
		me._video_url_controller_seekbar.mediaEl = null;
		me._video_url_controller_seekbar.fromBufferSource = false;
		me._video_url_controller_seekbar.ggMediaId = 'ht_video_url_popup_video';
		el.ggId="video_url_controller_seekbar";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_controller_seekbar.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_url_controller_seekbar.mediaEl != null) {
					if (e.target == me._video_url_controller_seekbar) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_url_controller_seekbar.fromBufferSource) {
							let seekpos = (mouseX / me._video_url_controller_seekbar.clientWidth) * me._video_url_controller_seekbar.mediaEl.bufferSoundDuration();
							me._video_url_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_url_controller_seekbar.clientWidth) * me._video_url_controller_seekbar.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_url_controller_seekbar.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_url_controller_seekbar || e.target == me._video_url_controller_seekbar__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_url_controller_seekbar.getBoundingClientRect().x;
							if (me._video_url_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_url_controller_seekbar.clientWidth) * me._video_url_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_url_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_url_controller_seekbar.clientWidth) * me._video_url_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_url_controller_seekbar.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_url_controller_seekbar.getBoundingClientRect().x;
							if (me._video_url_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_url_controller_seekbar.clientWidth) * me._video_url_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_url_controller_seekbar.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_url_controller_seekbar.clientWidth) * me._video_url_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_url_controller_seekbar.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_url_controller_seekbar.onmousedown = me._video_url_controller_seekbar.ontouchstart = me._video_url_controller_seekbar.mouseTouchHandling;
		me._video_url_controller_seekbar.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_url_controller_seekbar__playhead.style.visibility = 'hidden';
				me._video_url_controller_seekbar.style.background = 'rgba(0,0,0,0)';
				me._video_url_controller_seekbar.ggConnected = false;
			}
			if (me._video_url_controller_seekbar.mediaEl != null) {
				if (me._video_url_controller_seekbar.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_url_controller_seekbar.updatePlayback);
					if (me._video_url_controller_seekbar.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_url_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_url_controller_seekbar.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_url_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_url_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_url_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_url_controller_seekbar.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_url_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_url_controller_seekbar.mediaEl.removeEventListener('progress', me._video_url_controller_seekbar.updatePlayback);
					me._video_url_controller_seekbar.mediaEl.removeEventListener('canplay', me._video_url_controller_seekbar.updatePlayback);
					me._video_url_controller_seekbar.mediaEl.removeEventListener('timeupdate', me._video_url_controller_seekbar.updatePlayback);
					if (me._video_url_controller_seekbar.ggActivate) {
						me._video_url_controller_seekbar.mediaEl.removeEventListener('play', me._video_url_controller_seekbar.ggActivate);
					}
					if (me._video_url_controller_seekbar.ggDeactivate) {
						me._video_url_controller_seekbar.mediaEl.removeEventListener('ended', me._video_url_controller_seekbar.ggDeactivate);
						me._video_url_controller_seekbar.mediaEl.removeEventListener('pause', me._video_url_controller_seekbar.ggDeactivate);
					}
					if (me._video_url_controller_seekbar.ggMediaEnded) {
						me._video_url_controller_seekbar.mediaEl.removeEventListener('ended', me._video_url_controller_seekbar.ggMediaEnded);
					}
				}
			}
			me._video_url_controller_seekbar.mediaEl = player.getMediaObject(me._video_url_controller_seekbar.ggMediaId);
			if (me._video_url_controller_seekbar.mediaEl) {
				me._video_url_controller_seekbar.fromBufferSource = false;
			} else {
				me._video_url_controller_seekbar.mediaEl = player.getMediaBufferSourceObject('ht_video_url_popup_video');
				me._video_url_controller_seekbar.fromBufferSource = true;
			}
			if (me._video_url_controller_seekbar.mediaEl != null) {
				me._video_url_controller_seekbar__playhead.style.visibility = 'inherit';
				me._video_url_controller_seekbar__playhead.style.left = '-9px';
				if (me._video_url_controller_seekbar.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_url_controller_seekbar.updatePlayback);
					if (me._video_url_controller_seekbar.ggActivate) {
						me._video_url_controller_seekbar.bufferSoundActivate = function(args) { if (args['id'] == me._video_url_controller_seekbar.mediaEl.id) me._video_url_controller_seekbar.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_url_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_url_controller_seekbar.ggDeactivate) {
						me._video_url_controller_seekbar.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_url_controller_seekbar.mediaEl.id) me._video_url_controller_seekbar.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_url_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_url_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_url_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_url_controller_seekbar.ggMediaEnded) {
						me._video_url_controller_seekbar.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_url_controller_seekbar.mediaEl.id) me._video_url_controller_seekbar.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_url_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_url_controller_seekbar.mediaEl.addEventListener('progress', me._video_url_controller_seekbar.updatePlayback);
					me._video_url_controller_seekbar.mediaEl.addEventListener('canplay', me._video_url_controller_seekbar.updatePlayback);
					me._video_url_controller_seekbar.mediaEl.addEventListener('timeupdate', me._video_url_controller_seekbar.updatePlayback);
					if (me._video_url_controller_seekbar.ggActivate) {
						me._video_url_controller_seekbar.mediaEl.addEventListener('play', me._video_url_controller_seekbar.ggActivate);
					}
					if (me._video_url_controller_seekbar.ggDeactivate) {
						me._video_url_controller_seekbar.mediaEl.addEventListener('ended', me._video_url_controller_seekbar.ggDeactivate);
						me._video_url_controller_seekbar.mediaEl.addEventListener('pause', me._video_url_controller_seekbar.ggDeactivate);
					}
					if (me._video_url_controller_seekbar.ggMediaEnded) {
						me._video_url_controller_seekbar.mediaEl.addEventListener('ended', me._video_url_controller_seekbar.ggMediaEnded);
					}
				}
				me._video_url_controller_seekbar.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_url_controller_seekbar.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_url_controller_seekbar.updatePlayback = function(args) {
			if (!me._video_url_controller_seekbar.ggConnected) return;
			if (me._video_url_controller_seekbar.mediaEl != null) {
				if (me._video_url_controller_seekbar.mediaEl.readyState || (me._video_url_controller_seekbar.fromBufferSource && args && args['id'] == me._video_url_controller_seekbar.mediaEl.id)) {
					if (me._video_url_controller_seekbar.fromBufferSource) {
						var percent = me._video_url_controller_seekbar.mediaEl.bufferSoundCurrentTime() / me._video_url_controller_seekbar.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_url_controller_seekbar.mediaEl.currentTime / me._video_url_controller_seekbar.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_url_controller_seekbar.clientWidth - 2 * 4 + 0) * percent);
					playheadpos += -9;
					me._video_url_controller_seekbar__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (4 / me._video_url_controller_seekbar.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_url_controller_seekbar.fromBufferSource) {
						gradientString += ', rgba(0,0,0,0.392157) ' + currPos +'%, rgba(0,0,0,0.392157) 100%';
					} else {
						for (var i = 0; i < me._video_url_controller_seekbar.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_url_controller_seekbar.mediaEl.buffered.start(i) / me._video_url_controller_seekbar.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_url_controller_seekbar.mediaEl.buffered.end(i) / me._video_url_controller_seekbar.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(0,0,0,0.392157) ' + currPos + '%';
								} else {
									gradientString += ', rgba(0,0,0,0) ' + currPos + '%, rgba(0,0,0,0) ' + rangeStart + '%';
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeStart + '%';
								}
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(0,0,0,0) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_url_controller_seekbar.style.background = gradientString;
				}
			}
		}
		me._video_url_controller_seekbar.appendChild(me._video_url_controller_seekbar__playhead);
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 4px;';
		var hs_playhead = 'height: 25px;';
		hs_playhead += 'width: 25px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -9px;';
		hs_playhead += 'top: -7.5px;';
		hs_playhead += 'border-radius: 13px;';
		hs_playhead += cssPrefix + 'border-radius: 13px;';
		hs_playhead += 'background-color: rgba(223,224,54,1);';
		me._video_url_controller_seekbar.setAttribute('style', hs);
		me._video_url_controller_seekbar__playhead.setAttribute('style', hs_playhead);
		me._video_url_controller_seekbar.ggIsActive=function() {
			if (me._video_url_controller_seekbar.mediaEl != null) {
				return (me._video_url_controller_seekbar.mediaEl.paused == false && me._video_url_controller_seekbar.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_url_controller_seekbar.ggActivate=function () {
			me._video_url_controller_button_pause.style.transition='none';
			me._video_url_controller_button_pause.style.visibility=(Number(me._video_url_controller_button_pause.style.opacity)>0||!me._video_url_controller_button_pause.style.opacity)?'inherit':'hidden';
			me._video_url_controller_button_pause.ggVisible=true;
			me._video_url_controller_button_play.style.transition='none';
			me._video_url_controller_button_play.style.visibility='hidden';
			me._video_url_controller_button_play.ggVisible=false;
		}
		me._video_url_controller_seekbar.ggDeactivate=function () {
			me._video_url_controller_button_play.style.transition='none';
			me._video_url_controller_button_play.style.visibility=(Number(me._video_url_controller_button_play.style.opacity)>0||!me._video_url_controller_button_play.style.opacity)?'inherit':'hidden';
			me._video_url_controller_button_play.ggVisible=true;
			me._video_url_controller_button_pause.style.transition='none';
			me._video_url_controller_button_pause.style.visibility='hidden';
			me._video_url_controller_button_pause.ggVisible=false;
		}
		me._video_url_controller_seekbar.ggUpdatePosition=function (useTransition) {
			me._video_url_controller_seekbar.updatePlayback();
		}
		me._video_url_controller.appendChild(me._video_url_controller_seekbar);
		el=me._video_url_controller_button_pause=document.createElement('div');
		els=me._video_url_controller_button_pause__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMThweCI+CiA8cGF0aCBkPSJNOCAxOWMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyem02LTEydjEwYzAgMS4xLjkgMiAyIDJzMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJ6Ii8+Cjwvc3ZnPgo=';
		me._video_url_controller_button_pause__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_url_controller_button_pause__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZpZXdCb3g9IjAgMCAxOCAxOCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDE0LjJjMC44LDAsMS41LTAuNywxLjUtMS41VjUuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVTNC41LDQuNCw0LjUsNS4ydjcuNUM0LjUsMTMuNiw1LjIsMTQuMiw2LDE0LjJ6JiN4ZDsmI3hhOyYjeDk7IE0xMC41LDUuMnY3LjVjMCwwLjgsMC43LDEuNSwxLjUsMS41czEuNS0wLjcsMS41LTEuNVY1LjJjMC0wLjgtMC43LTEuNS0xLjUtMS41UzEwLjUsNC40LDEwLjUsNS4yeiIvPgo8L3N2Zz4K';
		me._video_url_controller_button_pause__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_url_controller_button_pause";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_controller_button_pause.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_url_controller_button_pause.onclick=function (e) {
			if (me._ht_video_url_popup_video.ggApiPlayer) {
				if (me._ht_video_url_popup_video.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._ht_video_url_popup_video.ggApiPlayer.pauseVideo();
					};
					if (me._ht_video_url_popup_video.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_url_popup_video.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_url_popup_video.ggApiPlayerType == 'vimeo') {
					me._ht_video_url_popup_video.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("ht_video_url_popup_video");
			}
			me._video_url_controller_button_pause.style.transition='none';
			me._video_url_controller_button_pause.style.visibility='hidden';
			me._video_url_controller_button_pause.ggVisible=false;
			me._video_url_controller_button_play.style.transition='none';
			me._video_url_controller_button_play.style.visibility=(Number(me._video_url_controller_button_play.style.opacity)>0||!me._video_url_controller_button_play.style.opacity)?'inherit':'hidden';
			me._video_url_controller_button_play.ggVisible=true;
		}
		me._video_url_controller_button_pause.onmouseenter=function (e) {
			me._video_url_controller_button_pause__img.style.visibility='hidden';
			me._video_url_controller_button_pause__imgo.style.visibility='inherit';
			me.elementMouseOver['video_url_controller_button_pause']=true;
		}
		me._video_url_controller_button_pause.onmouseleave=function (e) {
			me._video_url_controller_button_pause__img.style.visibility='inherit';
			me._video_url_controller_button_pause__imgo.style.visibility='hidden';
			me.elementMouseOver['video_url_controller_button_pause']=false;
		}
		me._video_url_controller_button_pause.ggUpdatePosition=function (useTransition) {
		}
		me._video_url_controller.appendChild(me._video_url_controller_button_pause);
		el=me._video_url_controller_button_play=document.createElement('div');
		els=me._video_url_controller_button_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiNGRkZGRkYiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMThweCI+CiA8cGF0aCBkPSJNOCA2LjgydjEwLjM2YzAgLjc5Ljg3IDEuMjcgMS41NC44NGw4LjE0LTUuMThjLjYyLS4zOS42Mi0xLjI5IDAtMS42OUw5LjU0IDUuOThDOC44NyA1LjU1IDggNi4wMyA4IDYuODJ6Ii8+Cjwvc3ZnPgo=';
		me._video_url_controller_button_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_url_controller_button_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZpZXdCb3g9IjAgMCAxOCAxOCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDUuMXY3LjhjMCwwLjYsMC43LDEsMS4yLDAuNmw2LjEtMy45YzAuNS0wLjMsMC41LTEsMC0xLjNMNy4yLDQuNUM2LjcsNC4yLDYsNC41LDYsNS4xeiIvPgo8L3N2Zz4K';
		me._video_url_controller_button_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_url_controller_button_play";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_controller_button_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_url_controller_button_play.onclick=function (e) {
			if (me._ht_video_url_popup_video.ggApiPlayer) {
				if (me._ht_video_url_popup_video.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._ht_video_url_popup_video.ggApiPlayer.playVideo();
					};
					if (me._ht_video_url_popup_video.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_url_popup_video.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_url_popup_video.ggApiPlayerType == 'vimeo') {
					me._ht_video_url_popup_video.ggApiPlayer.play();
				}
			} else {
				player.playSound("ht_video_url_popup_video","1");
			}
			me._video_url_controller_button_play.style.transition='none';
			me._video_url_controller_button_play.style.visibility='hidden';
			me._video_url_controller_button_play.ggVisible=false;
			me._video_url_controller_button_pause.style.transition='none';
			me._video_url_controller_button_pause.style.visibility=(Number(me._video_url_controller_button_pause.style.opacity)>0||!me._video_url_controller_button_pause.style.opacity)?'inherit':'hidden';
			me._video_url_controller_button_pause.ggVisible=true;
		}
		me._video_url_controller_button_play.onmouseenter=function (e) {
			me._video_url_controller_button_play__img.style.visibility='hidden';
			me._video_url_controller_button_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_url_controller_button_play']=true;
		}
		me._video_url_controller_button_play.onmouseleave=function (e) {
			me._video_url_controller_button_play__img.style.visibility='inherit';
			me._video_url_controller_button_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_url_controller_button_play']=false;
		}
		me._video_url_controller_button_play.ggUpdatePosition=function (useTransition) {
		}
		me._video_url_controller.appendChild(me._video_url_controller_button_play);
		me._ht_video_url_popup.appendChild(me._video_url_controller);
		el=me._ht_video_url_popup_title=document.createElement('div');
		els=me._ht_video_url_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_url_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 24px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_video_url_popup_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_url_popup_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_url_popup_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_url_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url_popup.appendChild(me._ht_video_url_popup_title);
		el=me._ht_video_url_popup_video=document.createElement('div');
		me._ht_video_url_popup_video.seekbars = [];
		me._ht_video_url_popup_video.seekbars.push('video_url_controller_seekbar');
		me._ht_video_url_popup_video.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._ht_video_url_popup_video.seekbars.length; i++) {
					var seekbar = me.findElements(me._ht_video_url_popup_video.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._ht_video_url_popup_video.hasChildNodes()) {
				me._ht_video_url_popup_video.removeChild(me._ht_video_url_popup_video.lastChild);
			}
			if (me._ht_video_url_popup_video__vid) {
				me._ht_video_url_popup_video__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._ht_video_url_popup_video.ggVideoNotLoaded == false && me._ht_video_url_popup_video.ggDeactivate && player.isPlaying('ht_video_url_popup_video')) { me._ht_video_url_popup_video.ggDeactivate(); }
				me._ht_video_url_popup_video.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('ht_video_url_popup_video');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._ht_video_url_popup_video.ggVideoNotLoaded = false;
			me._ht_video_url_popup_video__vid=document.createElement('video');
			me._ht_video_url_popup_video__vid.className='ggskin ggskin_video';
			me._ht_video_url_popup_video__vid.setAttribute('width', '100%');
			me._ht_video_url_popup_video__vid.setAttribute('height', '100%');
			me._ht_video_url_popup_video__vid.setAttribute('crossOrigin', 'anonymous');
			me._ht_video_url_popup_video__vid.setAttribute('controlsList', 'nodownload');
			me._ht_video_url_popup_video__vid.setAttribute('disablepictureinpicture', 'true');
			me._ht_video_url_popup_video__vid.setAttribute('oncontextmenu', 'return false;');
			me._ht_video_url_popup_video__vid.setAttribute('autoplay', '');
			me._ht_video_url_popup_video__source=document.createElement('source');
			me._ht_video_url_popup_video__source.setAttribute('src', media);
			me._ht_video_url_popup_video__vid.setAttribute('playsinline', 'playsinline');
			me._ht_video_url_popup_video__vid.setAttribute('style', ';');
			me._ht_video_url_popup_video__vid.style.outline = 'none';
			me._ht_video_url_popup_video__vid.appendChild(me._ht_video_url_popup_video__source);
			me._ht_video_url_popup_video.appendChild(me._ht_video_url_popup_video__vid);
			var videoEl = player.registerVideoElement('ht_video_url_popup_video', me._ht_video_url_popup_video__vid);
			videoEl.autoplay = true;
			player.changeVolume('ht_video_url_popup_video', 0.0);
			notifySeekbars();
			me._ht_video_url_popup_video.ggVideoSource = media;
		}
		el.ggId="ht_video_url_popup_video";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 100px);';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_popup_video.ggIsActive=function() {
			if (me._ht_video_url_popup_video__vid != null) {
				return (me._ht_video_url_popup_video__vid.paused == false && me._ht_video_url_popup_video__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_popup_video.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('open_video_url_hotspots') !== null) && (player.getVariableValue('open_video_url_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url_popup_video.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url_popup_video.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url_popup_video.style.transition='';
				if (me._ht_video_url_popup_video.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url_popup_video.style.visibility=(Number(me._ht_video_url_popup_video.style.opacity)>0||!me._ht_video_url_popup_video.style.opacity)?'inherit':'hidden';
					if (me._ht_video_url_popup_video.ggVideoNotLoaded) {
						me._ht_video_url_popup_video.ggInitMedia(me._ht_video_url_popup_video.ggVideoSource);
					}
					me._ht_video_url_popup_video.ggVisible=true;
				}
				else {
					me._ht_video_url_popup_video.style.visibility="hidden";
					me._ht_video_url_popup_video.ggInitMedia('');
					me._ht_video_url_popup_video.ggVisible=false;
				}
			}
		}
		me._ht_video_url_popup_video.logicBlock_visible();
		me._ht_video_url_popup_video.onclick=function (e) {
			if (me._ht_video_url_popup_video.ggApiPlayer) {
				if (me._ht_video_url_popup_video.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._ht_video_url_popup_video.ggApiPlayer.getPlayerState() == 1) {
							me._ht_video_url_popup_video.ggApiPlayer.pauseVideo();
						} else {
							me._ht_video_url_popup_video.ggApiPlayer.playVideo();
						}
					};
					if (me._ht_video_url_popup_video.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_url_popup_video.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_url_popup_video.ggApiPlayerType == 'vimeo') {
					var promise = me._ht_video_url_popup_video.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._ht_video_url_popup_video.ggApiPlayer.play();
						} else {
							me._ht_video_url_popup_video.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("ht_video_url_popup_video","1");
			}
		}
		me._ht_video_url_popup_video.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url_popup.appendChild(me._ht_video_url_popup_video);
		me._ht_video_url.appendChild(me._ht_video_url_popup);
		el=me._ht_video_url_tooltip=document.createElement('div');
		els=me._ht_video_url_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_url_tooltip";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_url_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_url_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_url_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_url_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_tooltip.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_video_url_tooltip.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_video_url_tooltip.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_video_url_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_video_url_tooltip.ggCurrentLogicStatePosition == 0) {
					me._ht_video_url_tooltip.style.left = 'calc(50% - (0px / 2))';
					me._ht_video_url_tooltip.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -40px)';
				}
				else {
					me._ht_video_url_tooltip.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_video_url_tooltip.style.top='calc(50% - ((0px + 0px) / 2) - 40px)';
				}
			}
		}
		me._ht_video_url_tooltip.logicBlock_position();
		me._ht_video_url_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_url'] == true)) && 
				(((player.getVariableValue('open_video_url_hotspots') !== null) && (player.getVariableValue('open_video_url_hotspots')).indexOf("<"+me.hotspot.id+">") == -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_url_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_url_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_url_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_video_url_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_url_tooltip.style.visibility=me._ht_video_url_tooltip.ggVisible?'inherit':'hidden';
					me._ht_video_url_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_url_tooltip.style.opacity == 0.0) { me._ht_video_url_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_video_url_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_video_url_tooltip.logicBlock_alpha();
		me._ht_video_url_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url.appendChild(me._ht_video_url_tooltip);
		el=me._ht_video_url_popup_close=document.createElement('div');
		els=me._ht_video_url_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IndoaXRlIiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_url_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_url_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZpZXdCb3g9IjAgMCAxOCAxOCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_url_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_url_popup_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(2px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_popup_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_url_hotspots') !== null) && (player.getVariableValue('open_video_url_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_url_popup_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_url_popup_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_url_popup_close.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_url_popup_close.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_url_popup_close.style.visibility=me._ht_video_url_popup_close.ggVisible?'inherit':'hidden';
					me._ht_video_url_popup_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_url_popup_close.style.opacity == 0.0) { me._ht_video_url_popup_close.style.visibility="hidden"; } }, 305);
					me._ht_video_url_popup_close.style.opacity=0;
				}
			}
		}
		me._ht_video_url_popup_close.logicBlock_alpha();
		me._ht_video_url_popup_close.onclick=function (e) {
			player.setVariableValue('open_video_url_hotspots', player.getVariableValue('open_video_url_hotspots').replace("<"+me.hotspot.id+">", ''));
			if (player.transitionsDisabled) {
				me._ht_video_url_popup_video.style.transition='none';
			} else {
				me._ht_video_url_popup_video.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_url_popup_video.style.opacity='0';
			me._ht_video_url_popup_video.style.visibility='hidden';
			me._ht_video_url_popup_video.ggInitMedia('');
			if (player.transitionsDisabled) {
				me._ht_video_url_popup_title.style.transition='none';
			} else {
				me._ht_video_url_popup_title.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_url_popup_title.style.opacity='0';
			me._ht_video_url_popup_title.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._video_url_controller.style.transition='none';
			} else {
				me._video_url_controller.style.transition='all 200ms ease-out 0ms';
			}
			me._video_url_controller.style.opacity='0';
			me._video_url_controller.style.visibility='hidden';
			me._ht_video_url.style.zIndex='-1';
		}
		me._ht_video_url_popup_close.onmouseenter=function (e) {
			me._ht_video_url_popup_close__img.style.visibility='hidden';
			me._ht_video_url_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_url_popup_close']=true;
		}
		me._ht_video_url_popup_close.onmouseleave=function (e) {
			me._ht_video_url_popup_close__img.style.visibility='inherit';
			me._ht_video_url_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_url_popup_close']=false;
		}
		me._ht_video_url_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url.appendChild(me._ht_video_url_popup_close);
		el=me._ht_video_url_icon_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="ht_video_url_icon_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_icon_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_icon_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_url_hotspots') !== null) && (player.getVariableValue('open_video_url_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_url_icon_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_url_icon_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_url_icon_container.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_url_icon_container.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_url_icon_container.style.opacity == 0.0) { me._ht_video_url_icon_container.style.visibility="hidden"; } }, 305);
					me._ht_video_url_icon_container.style.opacity=0;
				}
				else {
					me._ht_video_url_icon_container.style.visibility=me._ht_video_url_icon_container.ggVisible?'inherit':'hidden';
					me._ht_video_url_icon_container.style.opacity=1;
				}
			}
		}
		me._ht_video_url_icon_container.logicBlock_alpha();
		me._ht_video_url_icon_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('open_video_url_hotspots', player.getVariableValue('open_video_url_hotspots') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_url_popup_video.style.transition='none';
				} else {
					me._ht_video_url_popup_video.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_url_popup_video.style.opacity='1';
				me._ht_video_url_popup_video.style.visibility=me._ht_video_url_popup_video.ggVisible?'inherit':'hidden';
				if (me._ht_video_url_popup_video.ggVideoNotLoaded) {
					me._ht_video_url_popup_video.ggInitMedia(me._ht_video_url_popup_video.ggVideoSource);
				}
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_url_popup_title.style.transition='none';
				} else {
					me._ht_video_url_popup_title.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_url_popup_title.style.opacity='1';
				me._ht_video_url_popup_title.style.visibility=me._ht_video_url_popup_title.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._video_url_controller.style.transition='none';
				} else {
					me._video_url_controller.style.transition='all 200ms ease-out 500ms';
				}
				me._video_url_controller.style.opacity='1';
				me._video_url_controller.style.visibility=me._video_url_controller.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_url_popup_video.ggInitMedia(player._(player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_url.style.zIndex='0';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_url_popup_phone.ggInitMedia(player._(player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_controller_seekbar_phone.ggMediaId = "video_url_popup_phone";
				skin._video_controller_seekbar_phone.ggConnectToMediaEl();
				skin._video_controller_seekbar_phone.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', true);
			}
		}
		me._ht_video_url_icon_container.onmouseenter=function (e) {
			me.elementMouseOver['ht_video_url_icon_container']=true;
			me._ht_video_youtube_icon0.logicBlock_visible();
			me._ht_video_youtube_icon_active0.logicBlock_visible();
		}
		me._ht_video_url_icon_container.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_url_icon_container']=false;
			me._ht_video_youtube_icon0.logicBlock_visible();
			me._ht_video_youtube_icon_active0.logicBlock_visible();
		}
		me._ht_video_url_icon_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_bg0=document.createElement('div');
		el.ggId="ht_video_youtube_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(223,224,54,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_bg0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_bg0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url_icon_container.appendChild(me._ht_video_youtube_bg0);
		el=me._ht_video_youtube_icon0=document.createElement('div');
		els=me._ht_video_youtube_icon0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiMzYzNjM2MiIGZpbGwtb3BhY2l0eT0iMSIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIxOHB4Ij4KIDxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxMy41di03YzAtLjQxLjQ3LS42NS44LS40bDQuNjcgMy41Yy4yNy4yLjI3LjYgMCAuOGwtNC42NyAzLjVjLS4zMy4yNS0uOC4wMS0uOC0uNHoiLz4KPC9zdmc+Cg==';
		me._ht_video_youtube_icon0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_url_icon_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_icon0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_icon0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_icon0.style.transition='';
				if (me._ht_video_youtube_icon0.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_icon0.style.visibility="hidden";
					me._ht_video_youtube_icon0.ggVisible=false;
				}
				else {
					me._ht_video_youtube_icon0.style.visibility=(Number(me._ht_video_youtube_icon0.style.opacity)>0||!me._ht_video_youtube_icon0.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_icon0.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube_icon0.logicBlock_visible();
		me._ht_video_youtube_icon0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url_icon_container.appendChild(me._ht_video_youtube_icon0);
		el=me._ht_video_youtube_icon_active0=document.createElement('div');
		els=me._ht_video_youtube_icon_active0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IndoaXRlIiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bS0yIDEzLjV2LTdjMC0uNDEuNDctLjY1LjgtLjRsNC42NyAzLjVjLjI3LjIuMjcuNiAwIC44bC00LjY3IDMuNWMtLjMzLjI1LS44LjAxLS44LS40eiIvPgo8L3N2Zz4K';
		me._ht_video_youtube_icon_active0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_icon_active";
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
		me._ht_video_youtube_icon_active0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon_active0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_url_icon_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_icon_active0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_icon_active0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_icon_active0.style.transition='';
				if (me._ht_video_youtube_icon_active0.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_icon_active0.style.visibility=(Number(me._ht_video_youtube_icon_active0.style.opacity)>0||!me._ht_video_youtube_icon_active0.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_icon_active0.ggVisible=true;
				}
				else {
					me._ht_video_youtube_icon_active0.style.visibility="hidden";
					me._ht_video_youtube_icon_active0.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube_icon_active0.logicBlock_visible();
		me._ht_video_youtube_icon_active0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url_icon_container.appendChild(me._ht_video_youtube_icon_active0);
		me._ht_video_url.appendChild(me._ht_video_url_icon_container);
		me._ht_video_url.logicBlock_visible();
		me._ht_video_url.logicBlock_alpha();
		me.elementMouseOver['ht_video_url']=false;
		me._ht_video_url_popup.logicBlock_size();
		me._ht_video_url_popup.logicBlock_alpha();
		me.elementMouseOver['video_url_controller_button_pause']=false;
		me.elementMouseOver['video_url_controller_button_play']=false;
		me._ht_video_url_popup_video.logicBlock_visible();
		me._ht_video_url_popup_video.ggVideoSource = '';
		me._ht_video_url_popup_video.ggVideoNotLoaded = true;
		me._ht_video_url_tooltip.logicBlock_position();
		me._ht_video_url_tooltip.logicBlock_alpha();
		me._ht_video_url_popup_close.logicBlock_alpha();
		me.elementMouseOver['ht_video_url_popup_close']=false;
		me._ht_video_url_icon_container.logicBlock_alpha();
		me.elementMouseOver['ht_video_url_icon_container']=false;
		me._ht_video_youtube_icon0.logicBlock_visible();
		me._ht_video_youtube_icon_active0.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._ht_video_url.logicBlock_visible();
				me._ht_video_url.logicBlock_alpha();
				me._ht_video_url_popup.logicBlock_size();
				me._ht_video_url_popup.logicBlock_alpha();
				me._video_url_controller_seekbar.ggConnectToMediaEl();
				me._ht_video_url_popup_video.logicBlock_visible();
				me._ht_video_url_tooltip.logicBlock_alpha();
				me._ht_video_url_popup_close.logicBlock_alpha();
				me._ht_video_url_icon_container.logicBlock_alpha();
				player.setVariableValue('open_video_url_hotspots', "");
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_url.logicBlock_visible();
				me._ht_video_url.logicBlock_alpha();
				me._ht_video_url_popup.logicBlock_size();
				me._ht_video_url_popup.logicBlock_alpha();
				me._ht_video_url_popup_video.logicBlock_visible();
				me._ht_video_url_tooltip.logicBlock_position();
				me._ht_video_url_tooltip.logicBlock_alpha();
				me._ht_video_url_popup_close.logicBlock_alpha();
				me._ht_video_url_icon_container.logicBlock_alpha();
			};
			me.ggEvent_hastouch=function() {
				me._ht_video_url_tooltip.logicBlock_position();
			};
			me.ggEvent_varchanged_open_video_url_hotspots=function() {
				me._ht_video_url_popup.logicBlock_size();
				me._ht_video_url_popup.logicBlock_alpha();
				me._ht_video_url_popup_video.logicBlock_visible();
				me._ht_video_url_tooltip.logicBlock_alpha();
				me._ht_video_url_popup_close.logicBlock_alpha();
				me._ht_video_url_icon_container.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_video_url.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_url.logicBlock_visible();
				me._ht_video_url.logicBlock_alpha();
			};
			me.__div = me._ht_video_url;
	};
	function SkinHotspotClass_ht_video_vimeo(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_vimeo=document.createElement('div');
		el.ggId="ht_video_vimeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_vimeo.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo.style.visibility=(Number(me._ht_video_vimeo.style.opacity)>0||!me._ht_video_vimeo.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo.ggVisible=true;
				}
				else {
					me._ht_video_vimeo.style.visibility="hidden";
					me._ht_video_vimeo.ggVisible=false;
				}
			}
		}
		me._ht_video_vimeo.logicBlock_visible();
		me._ht_video_vimeo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_vimeo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_vimeo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_vimeo.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_vimeo.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_vimeo.style.opacity == 0.0) { me._ht_video_vimeo.style.visibility="hidden"; } }, 505);
					me._ht_video_vimeo.style.opacity=0;
				}
				else {
					me._ht_video_vimeo.style.visibility=me._ht_video_vimeo.ggVisible?'inherit':'hidden';
					me._ht_video_vimeo.style.opacity=1;
				}
			}
		}
		me._ht_video_vimeo.logicBlock_alpha();
		me._ht_video_vimeo.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_vimeo']=true;
			me._ht_video_vimeo_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_vimeo']=false;
			me._ht_video_vimeo_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_vimeo_popup=document.createElement('div');
		el.ggId="ht_video_vimeo_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -40px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(((player.getVariableValue('open_video_vimeo_hotspots') !== null) && (player.getVariableValue('open_video_vimeo_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_video_vimeo_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_video_vimeo_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_video_vimeo_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_vimeo_popup.ggCurrentLogicStateSize == 0) {
					me._ht_video_vimeo_popup.style.width='600px';
					me._ht_video_vimeo_popup.style.height='375px';
					setTimeout(function() {skin.updateSize(me._ht_video_vimeo_popup);}, 550);
				}
				else {
					me._ht_video_vimeo_popup.style.width='60px';
					me._ht_video_vimeo_popup.style.height='60px';
					setTimeout(function() {skin.updateSize(me._ht_video_vimeo_popup);}, 550);
				}
			}
		}
		me._ht_video_vimeo_popup.logicBlock_size();
		me._ht_video_vimeo_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_vimeo_hotspots') !== null) && (player.getVariableValue('open_video_vimeo_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_vimeo_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_vimeo_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_vimeo_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_vimeo_popup.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_vimeo_popup.style.visibility=me._ht_video_vimeo_popup.ggVisible?'inherit':'hidden';
					me._ht_video_vimeo_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_vimeo_popup.style.opacity == 0.0) { me._ht_video_vimeo_popup.style.visibility="hidden"; } }, 405);
					me._ht_video_vimeo_popup.style.opacity=0;
				}
			}
		}
		me._ht_video_vimeo_popup.logicBlock_alpha();
		me._ht_video_vimeo_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_vimeo_popup_title=document.createElement('div');
		els=me._ht_video_vimeo_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_vimeo_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 24px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_video_vimeo_popup_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_vimeo_popup_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_vimeo_popup_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_vimeo_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo_popup.appendChild(me._ht_video_vimeo_popup_title);
		el=me._ht_video_vimeo_popup_video=document.createElement('div');
		me._ht_video_vimeo_popup_video.seekbars = [];
		me._ht_video_vimeo_popup_video.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._ht_video_vimeo_popup_video.seekbars.length; i++) {
					var seekbar = me.findElements(me._ht_video_vimeo_popup_video.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._ht_video_vimeo_popup_video.hasChildNodes()) {
				me._ht_video_vimeo_popup_video.removeChild(me._ht_video_vimeo_popup_video.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._ht_video_vimeo_popup_video.ggVideoNotLoaded == false && me._ht_video_vimeo_popup_video.ggDeactivate && player.isPlaying('ht_video_vimeo_popup_video')) { me._ht_video_vimeo_popup_video.ggDeactivate(); }
				me._ht_video_vimeo_popup_video.ggVideoNotLoaded = true;
				return;
			}
			me._ht_video_vimeo_popup_video.ggVideoNotLoaded = false;
			me._ht_video_vimeo_popup_video__vid=document.createElement('iframe');
			me._ht_video_vimeo_popup_video__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._ht_video_vimeo_popup_video__vid.setAttribute('src', ggVideoUrl);
			me._ht_video_vimeo_popup_video__vid.setAttribute('width', '100%');
			me._ht_video_vimeo_popup_video__vid.setAttribute('height', '100%');
			me._ht_video_vimeo_popup_video__vid.setAttribute('allow', 'autoplay');
			me._ht_video_vimeo_popup_video__vid.setAttribute('allowfullscreen', 'true');
			me._ht_video_vimeo_popup_video__vid.setAttribute('style', 'border:none; ; ;');
			me._ht_video_vimeo_popup_video.appendChild(me._ht_video_vimeo_popup_video__vid);
			me._ht_video_vimeo_popup_video.ggApiPlayerType = 'vimeo';
			me._ht_video_vimeo_popup_video.ggApiPlayer = new Vimeo.Player(me._ht_video_vimeo_popup_video__vid);
			if (player.getPlayerMuted()) me._ht_video_vimeo_popup_video.ggApiPlayer.setVolume(0);
			player.addListener('elementmuted', function(args) {
				if (args.id == 'ht_video_vimeo_popup_video' || args.id == '_all' || args.id == '_main') {
					if (args.state == 0) skin._ht_video_vimeo_popup_video.ggApiPlayer.setVolume(1);
					if (args.state == 1) skin._ht_video_vimeo_popup_video.ggApiPlayer.setVolume(0);
					if (args.state == -1) { if (skin._ht_video_vimeo_popup_video.ggApiPlayer.getVolume() > 0.0) skin._ht_video_vimeo_popup_video.ggApiPlayer.setVolume(0); else skin._ht_video_vimeo_popup_video.ggApiPlayer.setVolume(1); }
				}
			});
			player.addListener('elementvolume', function(args) {
				if (args.id == 'ht_video_vimeo_popup_video' || args.id == '_main') {
					if (args.type == 'set') skin._ht_video_vimeo_popup_video.ggApiPlayer.setVolume(args.volume);
					if (args.type == 'change') skin._ht_video_vimeo_popup_video.ggApiPlayer.getVolume().then(function(volume) { skin._ht_video_vimeo_popup_video.ggApiPlayer.setVolume(volume + args.volume); });
				}
			});
			me._ht_video_vimeo_popup_video.ggVideoSource = media;
		}
		el.ggId="ht_video_vimeo_popup_video";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 60px);';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_popup_video.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_popup_video.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('open_video_vimeo_hotspots') !== null) && (player.getVariableValue('open_video_vimeo_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo_popup_video.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo_popup_video.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo_popup_video.style.transition='';
				if (me._ht_video_vimeo_popup_video.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo_popup_video.style.visibility=(Number(me._ht_video_vimeo_popup_video.style.opacity)>0||!me._ht_video_vimeo_popup_video.style.opacity)?'inherit':'hidden';
					if (me._ht_video_vimeo_popup_video.ggVideoNotLoaded) {
						me._ht_video_vimeo_popup_video.ggInitMedia(me._ht_video_vimeo_popup_video.ggVideoSource);
					}
					me._ht_video_vimeo_popup_video.ggVisible=true;
				}
				else {
					me._ht_video_vimeo_popup_video.style.visibility="hidden";
					me._ht_video_vimeo_popup_video.ggInitMedia('');
					me._ht_video_vimeo_popup_video.ggVisible=false;
				}
			}
		}
		me._ht_video_vimeo_popup_video.logicBlock_visible();
		me._ht_video_vimeo_popup_video.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo_popup.appendChild(me._ht_video_vimeo_popup_video);
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_popup);
		el=me._ht_video_vimeo_tooltip=document.createElement('div');
		els=me._ht_video_vimeo_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_vimeo_tooltip";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_vimeo_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_vimeo_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_vimeo_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_vimeo_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_tooltip.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_video_vimeo_tooltip.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_video_vimeo_tooltip.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_video_vimeo_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_video_vimeo_tooltip.ggCurrentLogicStatePosition == 0) {
					me._ht_video_vimeo_tooltip.style.left = 'calc(50% - (0px / 2))';
					me._ht_video_vimeo_tooltip.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -40px)';
				}
				else {
					me._ht_video_vimeo_tooltip.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_video_vimeo_tooltip.style.top='calc(50% - ((0px + 0px) / 2) - 40px)';
				}
			}
		}
		me._ht_video_vimeo_tooltip.logicBlock_position();
		me._ht_video_vimeo_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_vimeo'] == true)) && 
				(((player.getVariableValue('open_video_vimeo_hotspots') !== null) && (player.getVariableValue('open_video_vimeo_hotspots')).indexOf("<"+me.hotspot.id+">") == -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_vimeo_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_vimeo_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_vimeo_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_video_vimeo_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_vimeo_tooltip.style.visibility=me._ht_video_vimeo_tooltip.ggVisible?'inherit':'hidden';
					me._ht_video_vimeo_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_vimeo_tooltip.style.opacity == 0.0) { me._ht_video_vimeo_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_video_vimeo_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_video_vimeo_tooltip.logicBlock_alpha();
		me._ht_video_vimeo_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_tooltip);
		el=me._ht_video_vimeo_popup_close=document.createElement('div');
		els=me._ht_video_vimeo_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IndoaXRlIiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_vimeo_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_vimeo_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZpZXdCb3g9IjAgMCAxOCAxOCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_vimeo_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_vimeo_popup_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(2px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_popup_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_vimeo_hotspots') !== null) && (player.getVariableValue('open_video_vimeo_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_vimeo_popup_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_vimeo_popup_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_vimeo_popup_close.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_vimeo_popup_close.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_vimeo_popup_close.style.visibility=me._ht_video_vimeo_popup_close.ggVisible?'inherit':'hidden';
					me._ht_video_vimeo_popup_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_vimeo_popup_close.style.opacity == 0.0) { me._ht_video_vimeo_popup_close.style.visibility="hidden"; } }, 305);
					me._ht_video_vimeo_popup_close.style.opacity=0;
				}
			}
		}
		me._ht_video_vimeo_popup_close.logicBlock_alpha();
		me._ht_video_vimeo_popup_close.onclick=function (e) {
			player.setVariableValue('open_video_vimeo_hotspots', player.getVariableValue('open_video_vimeo_hotspots').replace("<"+me.hotspot.id+">", ''));
			if (player.transitionsDisabled) {
				me._ht_video_vimeo_popup_video.style.transition='none';
			} else {
				me._ht_video_vimeo_popup_video.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_vimeo_popup_video.style.opacity='0';
			me._ht_video_vimeo_popup_video.style.visibility='hidden';
			me._ht_video_vimeo_popup_video.ggInitMedia('');
			if (player.transitionsDisabled) {
				me._ht_video_vimeo_popup_title.style.transition='none';
			} else {
				me._ht_video_vimeo_popup_title.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_vimeo_popup_title.style.opacity='0';
			me._ht_video_vimeo_popup_title.style.visibility='hidden';
			me._ht_video_vimeo.style.zIndex='-1';
		}
		me._ht_video_vimeo_popup_close.onmouseenter=function (e) {
			me._ht_video_vimeo_popup_close__img.style.visibility='hidden';
			me._ht_video_vimeo_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_vimeo_popup_close']=true;
		}
		me._ht_video_vimeo_popup_close.onmouseleave=function (e) {
			me._ht_video_vimeo_popup_close__img.style.visibility='inherit';
			me._ht_video_vimeo_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_vimeo_popup_close']=false;
		}
		me._ht_video_vimeo_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_popup_close);
		el=me._ht_video_vimeo_icon_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="ht_video_vimeo_icon_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_icon_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_icon_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_vimeo_hotspots') !== null) && (player.getVariableValue('open_video_vimeo_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_vimeo_icon_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_vimeo_icon_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_vimeo_icon_container.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_vimeo_icon_container.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_vimeo_icon_container.style.opacity == 0.0) { me._ht_video_vimeo_icon_container.style.visibility="hidden"; } }, 305);
					me._ht_video_vimeo_icon_container.style.opacity=0;
				}
				else {
					me._ht_video_vimeo_icon_container.style.visibility=me._ht_video_vimeo_icon_container.ggVisible?'inherit':'hidden';
					me._ht_video_vimeo_icon_container.style.opacity=1;
				}
			}
		}
		me._ht_video_vimeo_icon_container.logicBlock_alpha();
		me._ht_video_vimeo_icon_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('open_video_vimeo_hotspots', player.getVariableValue('open_video_vimeo_hotspots') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_vimeo_popup_video.style.transition='none';
				} else {
					me._ht_video_vimeo_popup_video.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_vimeo_popup_video.style.opacity='1';
				me._ht_video_vimeo_popup_video.style.visibility=me._ht_video_vimeo_popup_video.ggVisible?'inherit':'hidden';
				if (me._ht_video_vimeo_popup_video.ggVideoNotLoaded) {
					me._ht_video_vimeo_popup_video.ggInitMedia(me._ht_video_vimeo_popup_video.ggVideoSource);
				}
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_vimeo_popup_title.style.transition='none';
				} else {
					me._ht_video_vimeo_popup_title.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_vimeo_popup_title.style.opacity='1';
				me._ht_video_vimeo_popup_title.style.visibility=me._ht_video_vimeo_popup_title.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_vimeo_popup_video.ggInitMedia(player._(player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_vimeo.style.zIndex='0';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._vimeo_popup_phone.ggInitMedia(player._(player._(me.hotspot.url)));
			}
		}
		me._ht_video_vimeo_icon_container.onmouseenter=function (e) {
			me.elementMouseOver['ht_video_vimeo_icon_container']=true;
			me._ht_video_youtube_icon1.logicBlock_visible();
			me._ht_video_youtube_icon_active1.logicBlock_visible();
		}
		me._ht_video_vimeo_icon_container.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_vimeo_icon_container']=false;
			me._ht_video_youtube_icon1.logicBlock_visible();
			me._ht_video_youtube_icon_active1.logicBlock_visible();
		}
		me._ht_video_vimeo_icon_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_bg1=document.createElement('div');
		el.ggId="ht_video_youtube_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(223,224,54,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_bg1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_bg1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo_icon_container.appendChild(me._ht_video_youtube_bg1);
		el=me._ht_video_youtube_icon1=document.createElement('div');
		els=me._ht_video_youtube_icon1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiMzYzNjM2MiIGZpbGwtb3BhY2l0eT0iMSIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIxOHB4Ij4KIDxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxMy41di03YzAtLjQxLjQ3LS42NS44LS40bDQuNjcgMy41Yy4yNy4yLjI3LjYgMCAuOGwtNC42NyAzLjVjLS4zMy4yNS0uOC4wMS0uOC0uNHoiLz4KPC9zdmc+Cg==';
		me._ht_video_youtube_icon1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_vimeo_icon_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_icon1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_icon1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_icon1.style.transition='';
				if (me._ht_video_youtube_icon1.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_icon1.style.visibility="hidden";
					me._ht_video_youtube_icon1.ggVisible=false;
				}
				else {
					me._ht_video_youtube_icon1.style.visibility=(Number(me._ht_video_youtube_icon1.style.opacity)>0||!me._ht_video_youtube_icon1.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_icon1.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube_icon1.logicBlock_visible();
		me._ht_video_youtube_icon1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo_icon_container.appendChild(me._ht_video_youtube_icon1);
		el=me._ht_video_youtube_icon_active1=document.createElement('div');
		els=me._ht_video_youtube_icon_active1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IndoaXRlIiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bS0yIDEzLjV2LTdjMC0uNDEuNDctLjY1LjgtLjRsNC42NyAzLjVjLjI3LjIuMjcuNiAwIC44bC00LjY3IDMuNWMtLjMzLjI1LS44LjAxLS44LS40eiIvPgo8L3N2Zz4K';
		me._ht_video_youtube_icon_active1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_icon_active";
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
		me._ht_video_youtube_icon_active1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon_active1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_vimeo_icon_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_icon_active1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_icon_active1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_icon_active1.style.transition='';
				if (me._ht_video_youtube_icon_active1.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_icon_active1.style.visibility=(Number(me._ht_video_youtube_icon_active1.style.opacity)>0||!me._ht_video_youtube_icon_active1.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_icon_active1.ggVisible=true;
				}
				else {
					me._ht_video_youtube_icon_active1.style.visibility="hidden";
					me._ht_video_youtube_icon_active1.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube_icon_active1.logicBlock_visible();
		me._ht_video_youtube_icon_active1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo_icon_container.appendChild(me._ht_video_youtube_icon_active1);
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_icon_container);
		me._ht_video_vimeo.logicBlock_visible();
		me._ht_video_vimeo.logicBlock_alpha();
		me.elementMouseOver['ht_video_vimeo']=false;
		me._ht_video_vimeo_popup.logicBlock_size();
		me._ht_video_vimeo_popup.logicBlock_alpha();
		me._ht_video_vimeo_popup_video.logicBlock_visible();
		me._ht_video_vimeo_popup_video.ggVideoSource = '';
		me._ht_video_vimeo_popup_video.ggVideoNotLoaded = true;
		me._ht_video_vimeo_tooltip.logicBlock_position();
		me._ht_video_vimeo_tooltip.logicBlock_alpha();
		me._ht_video_vimeo_popup_close.logicBlock_alpha();
		me.elementMouseOver['ht_video_vimeo_popup_close']=false;
		me._ht_video_vimeo_icon_container.logicBlock_alpha();
		me.elementMouseOver['ht_video_vimeo_icon_container']=false;
		me._ht_video_youtube_icon1.logicBlock_visible();
		me._ht_video_youtube_icon_active1.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._ht_video_vimeo.logicBlock_visible();
				me._ht_video_vimeo.logicBlock_alpha();
				me._ht_video_vimeo_popup.logicBlock_size();
				me._ht_video_vimeo_popup.logicBlock_alpha();
				me._ht_video_vimeo_popup_video.logicBlock_visible();
				me._ht_video_vimeo_tooltip.logicBlock_alpha();
				me._ht_video_vimeo_popup_close.logicBlock_alpha();
				me._ht_video_vimeo_icon_container.logicBlock_alpha();
				player.setVariableValue('open_video_vimeo_hotspots', "");
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_vimeo.logicBlock_visible();
				me._ht_video_vimeo.logicBlock_alpha();
				me._ht_video_vimeo_popup.logicBlock_size();
				me._ht_video_vimeo_popup.logicBlock_alpha();
				me._ht_video_vimeo_popup_video.logicBlock_visible();
				me._ht_video_vimeo_tooltip.logicBlock_position();
				me._ht_video_vimeo_tooltip.logicBlock_alpha();
				me._ht_video_vimeo_popup_close.logicBlock_alpha();
				me._ht_video_vimeo_icon_container.logicBlock_alpha();
			};
			me.ggEvent_hastouch=function() {
				me._ht_video_vimeo_tooltip.logicBlock_position();
			};
			me.ggEvent_varchanged_open_video_vimeo_hotspots=function() {
				me._ht_video_vimeo_popup.logicBlock_size();
				me._ht_video_vimeo_popup.logicBlock_alpha();
				me._ht_video_vimeo_popup_video.logicBlock_visible();
				me._ht_video_vimeo_tooltip.logicBlock_alpha();
				me._ht_video_vimeo_popup_close.logicBlock_alpha();
				me._ht_video_vimeo_icon_container.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_video_vimeo.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_vimeo.logicBlock_visible();
				me._ht_video_vimeo.logicBlock_alpha();
			};
			me.__div = me._ht_video_vimeo;
	};
	function SkinHotspotClass_ht_video_youtube(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_youtube=document.createElement('div');
		el.ggId="ht_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube.style.visibility=(Number(me._ht_video_youtube.style.opacity)>0||!me._ht_video_youtube.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube.ggVisible=true;
				}
				else {
					me._ht_video_youtube.style.visibility="hidden";
					me._ht_video_youtube.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube.logicBlock_visible();
		me._ht_video_youtube.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_youtube.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_youtube.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_youtube.style.transition='opacity 500ms ease 0ms';
				if (me._ht_video_youtube.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_youtube.style.opacity == 0.0) { me._ht_video_youtube.style.visibility="hidden"; } }, 505);
					me._ht_video_youtube.style.opacity=0;
				}
				else {
					me._ht_video_youtube.style.visibility=me._ht_video_youtube.ggVisible?'inherit':'hidden';
					me._ht_video_youtube.style.opacity=1;
				}
			}
		}
		me._ht_video_youtube.logicBlock_alpha();
		me._ht_video_youtube.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_youtube']=true;
			me._ht_video_youtube_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_youtube']=false;
			me._ht_video_youtube_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_popup=document.createElement('div');
		el.ggId="ht_video_youtube_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -40px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(((player.getVariableValue('open_video_youtube_hotspots') !== null) && (player.getVariableValue('open_video_youtube_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_video_youtube_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_video_youtube_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_video_youtube_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_youtube_popup.ggCurrentLogicStateSize == 0) {
					me._ht_video_youtube_popup.style.width='600px';
					me._ht_video_youtube_popup.style.height='375px';
					setTimeout(function() {skin.updateSize(me._ht_video_youtube_popup);}, 550);
				}
				else {
					me._ht_video_youtube_popup.style.width='60px';
					me._ht_video_youtube_popup.style.height='60px';
					setTimeout(function() {skin.updateSize(me._ht_video_youtube_popup);}, 550);
				}
			}
		}
		me._ht_video_youtube_popup.logicBlock_size();
		me._ht_video_youtube_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_youtube_hotspots') !== null) && (player.getVariableValue('open_video_youtube_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_youtube_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_youtube_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_youtube_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_youtube_popup.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_youtube_popup.style.visibility=me._ht_video_youtube_popup.ggVisible?'inherit':'hidden';
					me._ht_video_youtube_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_youtube_popup.style.opacity == 0.0) { me._ht_video_youtube_popup.style.visibility="hidden"; } }, 405);
					me._ht_video_youtube_popup.style.opacity=0;
				}
			}
		}
		me._ht_video_youtube_popup.logicBlock_alpha();
		me._ht_video_youtube_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_popup_title=document.createElement('div');
		els=me._ht_video_youtube_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_youtube_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 24px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_video_youtube_popup_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_youtube_popup_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_youtube_popup_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_youtube_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube_popup.appendChild(me._ht_video_youtube_popup_title);
		el=me._ht_video_youtube_popup_video=document.createElement('div');
		me._ht_video_youtube_popup_video.seekbars = [];
			me._ht_video_youtube_popup_video.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._ht_video_youtube_popup_video.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._ht_video_youtube_popup_video.seekbars.length; i++) {
					var seekbar = me.findElements(me._ht_video_youtube_popup_video.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._ht_video_youtube_popup_video.hasChildNodes()) {
				me._ht_video_youtube_popup_video.removeChild(me._ht_video_youtube_popup_video.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._ht_video_youtube_popup_video.ggVideoNotLoaded == false && me._ht_video_youtube_popup_video.ggDeactivate && player.isPlaying('ht_video_youtube_popup_video')) { me._ht_video_youtube_popup_video.ggDeactivate(); }
				me._ht_video_youtube_popup_video.ggVideoNotLoaded = true;
				return;
			}
			me._ht_video_youtube_popup_video.ggVideoNotLoaded = false;
			me._ht_video_youtube_popup_video__vid=document.createElement('iframe');
			me._ht_video_youtube_popup_video__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=1&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._ht_video_youtube_popup_video__vid.setAttribute('src', ggVideoUrl);
			me._ht_video_youtube_popup_video__vid.setAttribute('width', '100%');
			me._ht_video_youtube_popup_video__vid.setAttribute('height', '100%');
			me._ht_video_youtube_popup_video__vid.setAttribute('allow', 'autoplay');
			me._ht_video_youtube_popup_video__vid.setAttribute('allowfullscreen', 'true');
			me._ht_video_youtube_popup_video__vid.setAttribute('style', 'border:none; ; ;');
			me._ht_video_youtube_popup_video.appendChild(me._ht_video_youtube_popup_video__vid);
			me._ht_video_youtube_popup_video__vid.id = 'youtube-video';
			me._ht_video_youtube_popup_video.ggYoutubeApiReady = function() {
				me._ht_video_youtube_popup_video.ggApiPlayerType = 'youtube';
				me._ht_video_youtube_popup_video.ggApiPlayerReady = false;
				me._ht_video_youtube_popup_video.ggApiPlayer = new YT.Player('youtube-video', {
					events: {
						'onReady': function(event) {
							me._ht_video_youtube_popup_video.ggApiPlayerReady = true;
							if (player.getPlayerMuted()) me._ht_video_youtube_popup_video.ggApiPlayer.mute();
						},
						'onStateChange': function(event) {
							if (event.data == 0 && me._ht_video_youtube_popup_video.ggMediaEnded) {
								me._ht_video_youtube_popup_video.ggMediaEnded();
							}
							if (event.data == 1 && me._ht_video_youtube_popup_video.ggActivate) {
								me._ht_video_youtube_popup_video.ggActivate();
							}
							if ((event.data == 0 || event.data == 2) && me._ht_video_youtube_popup_video.ggDeactivate) {
								me._ht_video_youtube_popup_video.ggDeactivate();
							}
						}
					}
				});
				player.addListener('elementmuted', function(args) {
					if (args.id == 'ht_video_youtube_popup_video' || args.id == '_all' || args.id == '_main') {
						if (args.state == 0) skin._ht_video_youtube_popup_video.ggApiPlayer.unMute();
						if (args.state == 1) skin._ht_video_youtube_popup_video.ggApiPlayer.mute();
						if (args.state == -1) { if (skin._ht_video_youtube_popup_video.ggApiPlayer.isMuted()) skin._ht_video_youtube_popup_video.ggApiPlayer.unMute(); else skin._ht_video_youtube_popup_video.ggApiPlayer.mute(); }
					}
				});
				player.addListener('elementvolume', function(args) {
					if (args.id == 'ht_video_youtube_popup_video' || args.id == '_main') {
						if (args.type == 'set') skin._ht_video_youtube_popup_video.ggApiPlayer.setVolume(args.volume * 100);
						if (args.type == 'change') skin._ht_video_youtube_popup_video.ggApiPlayer.setVolume(skin._ht_video_youtube_popup_video.ggApiPlayer.getVolume() + args.volume * 100);
					}
				});
			}
			me._ht_video_youtube_popup_video.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._ht_video_youtube_popup_video.ggYoutubeApiReady();}
		}
		el.ggId="ht_video_youtube_popup_video";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 60px);';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_popup_video.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_popup_video.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('open_video_youtube_hotspots') !== null) && (player.getVariableValue('open_video_youtube_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_popup_video.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_popup_video.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_popup_video.style.transition='';
				if (me._ht_video_youtube_popup_video.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_popup_video.style.visibility=(Number(me._ht_video_youtube_popup_video.style.opacity)>0||!me._ht_video_youtube_popup_video.style.opacity)?'inherit':'hidden';
					if (me._ht_video_youtube_popup_video.ggVideoNotLoaded) {
						me._ht_video_youtube_popup_video.ggInitMedia(me._ht_video_youtube_popup_video.ggVideoSource);
					}
					me._ht_video_youtube_popup_video.ggVisible=true;
				}
				else {
					me._ht_video_youtube_popup_video.style.visibility="hidden";
					me._ht_video_youtube_popup_video.ggInitMedia('');
					me._ht_video_youtube_popup_video.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube_popup_video.logicBlock_visible();
		me._ht_video_youtube_popup_video.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube_popup.appendChild(me._ht_video_youtube_popup_video);
		me._ht_video_youtube.appendChild(me._ht_video_youtube_popup);
		el=me._ht_video_youtube_tooltip=document.createElement('div');
		els=me._ht_video_youtube_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_youtube_tooltip";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_youtube_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_youtube_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_youtube_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_youtube_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_tooltip.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_video_youtube_tooltip.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_video_youtube_tooltip.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_video_youtube_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_video_youtube_tooltip.ggCurrentLogicStatePosition == 0) {
					me._ht_video_youtube_tooltip.style.left = 'calc(50% - (0px / 2))';
					me._ht_video_youtube_tooltip.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -40px)';
				}
				else {
					me._ht_video_youtube_tooltip.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_video_youtube_tooltip.style.top='calc(50% - ((0px + 0px) / 2) - 40px)';
				}
			}
		}
		me._ht_video_youtube_tooltip.logicBlock_position();
		me._ht_video_youtube_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_youtube'] == true)) && 
				(((player.getVariableValue('open_video_youtube_hotspots') !== null) && (player.getVariableValue('open_video_youtube_hotspots')).indexOf("<"+me.hotspot.id+">") == -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_youtube_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_youtube_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_youtube_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_video_youtube_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_youtube_tooltip.style.visibility=me._ht_video_youtube_tooltip.ggVisible?'inherit':'hidden';
					me._ht_video_youtube_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_youtube_tooltip.style.opacity == 0.0) { me._ht_video_youtube_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_video_youtube_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_video_youtube_tooltip.logicBlock_alpha();
		me._ht_video_youtube_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_tooltip);
		el=me._ht_video_youtube_popup_close=document.createElement('div');
		els=me._ht_video_youtube_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IndoaXRlIiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_youtube_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_youtube_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZpZXdCb3g9IjAgMCAxOCAxOCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_youtube_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_youtube_popup_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(2px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_popup_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_youtube_hotspots') !== null) && (player.getVariableValue('open_video_youtube_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_youtube_popup_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_youtube_popup_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_youtube_popup_close.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_youtube_popup_close.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_youtube_popup_close.style.visibility=me._ht_video_youtube_popup_close.ggVisible?'inherit':'hidden';
					me._ht_video_youtube_popup_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_youtube_popup_close.style.opacity == 0.0) { me._ht_video_youtube_popup_close.style.visibility="hidden"; } }, 305);
					me._ht_video_youtube_popup_close.style.opacity=0;
				}
			}
		}
		me._ht_video_youtube_popup_close.logicBlock_alpha();
		me._ht_video_youtube_popup_close.onclick=function (e) {
			player.setVariableValue('open_video_youtube_hotspots', player.getVariableValue('open_video_youtube_hotspots').replace("<"+me.hotspot.id+">", ''));
			if (player.transitionsDisabled) {
				me._ht_video_youtube_popup_video.style.transition='none';
			} else {
				me._ht_video_youtube_popup_video.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_youtube_popup_video.style.opacity='0';
			me._ht_video_youtube_popup_video.style.visibility='hidden';
			me._ht_video_youtube_popup_video.ggInitMedia('');
			if (player.transitionsDisabled) {
				me._ht_video_youtube_popup_title.style.transition='none';
			} else {
				me._ht_video_youtube_popup_title.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_youtube_popup_title.style.opacity='0';
			me._ht_video_youtube_popup_title.style.visibility='hidden';
			me._ht_video_youtube.style.zIndex='-1';
		}
		me._ht_video_youtube_popup_close.onmouseenter=function (e) {
			me._ht_video_youtube_popup_close__img.style.visibility='hidden';
			me._ht_video_youtube_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_youtube_popup_close']=true;
		}
		me._ht_video_youtube_popup_close.onmouseleave=function (e) {
			me._ht_video_youtube_popup_close__img.style.visibility='inherit';
			me._ht_video_youtube_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_youtube_popup_close']=false;
		}
		me._ht_video_youtube_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_popup_close);
		el=me._ht_video_youtube_icon_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="ht_video_youtube_icon_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_youtube_hotspots') !== null) && (player.getVariableValue('open_video_youtube_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_youtube_icon_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_youtube_icon_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_youtube_icon_container.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_youtube_icon_container.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_youtube_icon_container.style.opacity == 0.0) { me._ht_video_youtube_icon_container.style.visibility="hidden"; } }, 305);
					me._ht_video_youtube_icon_container.style.opacity=0;
				}
				else {
					me._ht_video_youtube_icon_container.style.visibility=me._ht_video_youtube_icon_container.ggVisible?'inherit':'hidden';
					me._ht_video_youtube_icon_container.style.opacity=1;
				}
			}
		}
		me._ht_video_youtube_icon_container.logicBlock_alpha();
		me._ht_video_youtube_icon_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('open_video_youtube_hotspots', player.getVariableValue('open_video_youtube_hotspots') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_youtube_popup_video.style.transition='none';
				} else {
					me._ht_video_youtube_popup_video.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_youtube_popup_video.style.opacity='1';
				me._ht_video_youtube_popup_video.style.visibility=me._ht_video_youtube_popup_video.ggVisible?'inherit':'hidden';
				if (me._ht_video_youtube_popup_video.ggVideoNotLoaded) {
					me._ht_video_youtube_popup_video.ggInitMedia(me._ht_video_youtube_popup_video.ggVideoSource);
				}
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_youtube_popup_title.style.transition='none';
				} else {
					me._ht_video_youtube_popup_title.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_youtube_popup_title.style.opacity='1';
				me._ht_video_youtube_popup_title.style.visibility=me._ht_video_youtube_popup_title.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_youtube_popup_video.ggInitMedia(player._(player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_youtube.style.zIndex='0';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._youtube_popup_phone.ggInitMedia(player._(player._(me.hotspot.url)));
			}
		}
		me._ht_video_youtube_icon_container.onmouseenter=function (e) {
			me.elementMouseOver['ht_video_youtube_icon_container']=true;
			me._ht_video_youtube_icon2.logicBlock_visible();
			me._ht_video_youtube_icon_active2.logicBlock_visible();
		}
		me._ht_video_youtube_icon_container.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_youtube_icon_container']=false;
			me._ht_video_youtube_icon2.logicBlock_visible();
			me._ht_video_youtube_icon_active2.logicBlock_visible();
		}
		me._ht_video_youtube_icon_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_bg2=document.createElement('div');
		el.ggId="ht_video_youtube_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(223,224,54,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_bg2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_bg2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube_icon_container.appendChild(me._ht_video_youtube_bg2);
		el=me._ht_video_youtube_icon2=document.createElement('div');
		els=me._ht_video_youtube_icon2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiMzYzNjM2MiIGZpbGwtb3BhY2l0eT0iMSIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIxOHB4Ij4KIDxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxMy41di03YzAtLjQxLjQ3LS42NS44LS40bDQuNjcgMy41Yy4yNy4yLjI3LjYgMCAuOGwtNC42NyAzLjVjLS4zMy4yNS0uOC4wMS0uOC0uNHoiLz4KPC9zdmc+Cg==';
		me._ht_video_youtube_icon2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_youtube_icon_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_icon2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_icon2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_icon2.style.transition='';
				if (me._ht_video_youtube_icon2.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_icon2.style.visibility="hidden";
					me._ht_video_youtube_icon2.ggVisible=false;
				}
				else {
					me._ht_video_youtube_icon2.style.visibility=(Number(me._ht_video_youtube_icon2.style.opacity)>0||!me._ht_video_youtube_icon2.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_icon2.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube_icon2.logicBlock_visible();
		me._ht_video_youtube_icon2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube_icon_container.appendChild(me._ht_video_youtube_icon2);
		el=me._ht_video_youtube_icon_active2=document.createElement('div');
		els=me._ht_video_youtube_icon_active2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IndoaXRlIiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bS0yIDEzLjV2LTdjMC0uNDEuNDctLjY1LjgtLjRsNC42NyAzLjVjLjI3LjIuMjcuNiAwIC44bC00LjY3IDMuNWMtLjMzLjI1LS44LjAxLS44LS40eiIvPgo8L3N2Zz4K';
		me._ht_video_youtube_icon_active2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_icon_active";
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
		me._ht_video_youtube_icon_active2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon_active2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_youtube_icon_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_icon_active2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_icon_active2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_icon_active2.style.transition='';
				if (me._ht_video_youtube_icon_active2.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_icon_active2.style.visibility=(Number(me._ht_video_youtube_icon_active2.style.opacity)>0||!me._ht_video_youtube_icon_active2.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_icon_active2.ggVisible=true;
				}
				else {
					me._ht_video_youtube_icon_active2.style.visibility="hidden";
					me._ht_video_youtube_icon_active2.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube_icon_active2.logicBlock_visible();
		me._ht_video_youtube_icon_active2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube_icon_container.appendChild(me._ht_video_youtube_icon_active2);
		me._ht_video_youtube.appendChild(me._ht_video_youtube_icon_container);
		me._ht_video_youtube.logicBlock_visible();
		me._ht_video_youtube.logicBlock_alpha();
		me.elementMouseOver['ht_video_youtube']=false;
		me._ht_video_youtube_popup.logicBlock_size();
		me._ht_video_youtube_popup.logicBlock_alpha();
		me._ht_video_youtube_popup_video.logicBlock_visible();
		me._ht_video_youtube_popup_video.ggVideoSource = '';
		me._ht_video_youtube_popup_video.ggVideoNotLoaded = true;
		me._ht_video_youtube_tooltip.logicBlock_position();
		me._ht_video_youtube_tooltip.logicBlock_alpha();
		me._ht_video_youtube_popup_close.logicBlock_alpha();
		me.elementMouseOver['ht_video_youtube_popup_close']=false;
		me._ht_video_youtube_icon_container.logicBlock_alpha();
		me.elementMouseOver['ht_video_youtube_icon_container']=false;
		me._ht_video_youtube_icon2.logicBlock_visible();
		me._ht_video_youtube_icon_active2.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._ht_video_youtube.logicBlock_visible();
				me._ht_video_youtube.logicBlock_alpha();
				me._ht_video_youtube_popup.logicBlock_size();
				me._ht_video_youtube_popup.logicBlock_alpha();
				me._ht_video_youtube_popup_video.logicBlock_visible();
				me._ht_video_youtube_tooltip.logicBlock_alpha();
				me._ht_video_youtube_popup_close.logicBlock_alpha();
				me._ht_video_youtube_icon_container.logicBlock_alpha();
				player.setVariableValue('open_video_youtube_hotspots', "");
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_youtube.logicBlock_visible();
				me._ht_video_youtube.logicBlock_alpha();
				me._ht_video_youtube_popup.logicBlock_size();
				me._ht_video_youtube_popup.logicBlock_alpha();
				me._ht_video_youtube_popup_video.logicBlock_visible();
				me._ht_video_youtube_tooltip.logicBlock_position();
				me._ht_video_youtube_tooltip.logicBlock_alpha();
				me._ht_video_youtube_popup_close.logicBlock_alpha();
				me._ht_video_youtube_icon_container.logicBlock_alpha();
			};
			me.ggEvent_hastouch=function() {
				me._ht_video_youtube_tooltip.logicBlock_position();
			};
			me.ggEvent_varchanged_open_video_youtube_hotspots=function() {
				me._ht_video_youtube_popup.logicBlock_size();
				me._ht_video_youtube_popup.logicBlock_alpha();
				me._ht_video_youtube_popup_video.logicBlock_visible();
				me._ht_video_youtube_tooltip.logicBlock_alpha();
				me._ht_video_youtube_popup_close.logicBlock_alpha();
				me._ht_video_youtube_icon_container.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_video_youtube.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_youtube.logicBlock_visible();
				me._ht_video_youtube.logicBlock_alpha();
			};
			me.__div = me._ht_video_youtube;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_video_youtube') {
				hotspot.skinid = 'ht_video_youtube';
				hsinst = new SkinHotspotClass_ht_video_youtube(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_vimeo') {
				hotspot.skinid = 'ht_video_vimeo';
				hsinst = new SkinHotspotClass_ht_video_vimeo(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_url') {
				hotspot.skinid = 'ht_video_url';
				hsinst = new SkinHotspotClass_ht_video_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_file') {
				hotspot.skinid = 'ht_video_file';
				hsinst = new SkinHotspotClass_ht_video_file(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_pdf') {
				hotspot.skinid = 'ht_pdf';
				hsinst = new SkinHotspotClass_ht_pdf(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_info') {
				hotspot.skinid = 'ht_info';
				hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_url') {
				hotspot.skinid = 'ht_url';
				hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_gallery') {
				hotspot.skinid = 'ht_gallery';
				hsinst = new SkinHotspotClass_ht_gallery(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_image';
				hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._timer_2.ggUpdateConditionTimer();
		var hs='';
		if (me._text_otkritie_dveri.ggParameter) {
			hs+=parameterToTransform(me._text_otkritie_dveri.ggParameter) + ' ';
		}
		hs+='translate(' + (1 * player.mouse.x + 0) + 'px,0px) ';
		hs+='translate(0px,' + (1 * player.mouse.y + 0) + 'px) ';
		me._text_otkritie_dveri.style.transform=hs;
		me._menu_toggle_timer.ggUpdateConditionTimer();
		if (me._menu_toggle_timer.ggLastIsActive!=me._menu_toggle_timer.ggIsActive()) {
			me._menu_toggle_timer.ggLastIsActive=me._menu_toggle_timer.ggIsActive();
			if (me._menu_toggle_timer.ggLastIsActive) {
			} else {
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("1")))
					)
				) {
					me._close_to_menu_anim.style.transition='none';
					me._close_to_menu_anim.style.visibility=(Number(me._close_to_menu_anim.style.opacity)>0||!me._close_to_menu_anim.style.opacity)?'inherit':'hidden';
					me._close_to_menu_anim.ggVisible=true;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("1")))
					)
				) {
					me._menu_to_close_anim.style.transition='none';
					me._menu_to_close_anim.style.visibility='hidden';
					me._menu_to_close_anim.ggVisible=false;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("2")))
					)
				) {
					me._menu_to_close_anim.style.transition='none';
					me._menu_to_close_anim.style.visibility=(Number(me._menu_to_close_anim.style.opacity)>0||!me._menu_to_close_anim.style.opacity)?'inherit':'hidden';
					me._menu_to_close_anim.ggVisible=true;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("2")))
					)
				) {
					me._close_to_menu_anim.style.transition='none';
					me._close_to_menu_anim.style.visibility='hidden';
					me._close_to_menu_anim.ggVisible=false;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("3")))
					)
				) {
					me._back_to_close_anim.style.transition='none';
					me._back_to_close_anim.style.visibility=(Number(me._back_to_close_anim.style.opacity)>0||!me._back_to_close_anim.style.opacity)?'inherit':'hidden';
					me._back_to_close_anim.ggVisible=true;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("3")))
					)
				) {
					me._close_to_back_anim.style.transition='none';
					me._close_to_back_anim.style.visibility='hidden';
					me._close_to_back_anim.ggVisible=false;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("4")))
					)
				) {
					me._close_to_menu_anim.style.transition='none';
					me._close_to_menu_anim.style.visibility=(Number(me._close_to_menu_anim.style.opacity)>0||!me._close_to_menu_anim.style.opacity)?'inherit':'hidden';
					me._close_to_menu_anim.ggVisible=true;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("4")))
					)
				) {
					me._back_to_close_anim.style.transition='none';
					me._back_to_close_anim.style.visibility='hidden';
					me._back_to_close_anim.ggVisible=false;
				}
			}
		}
		me._timer_1.ggUpdateConditionTimer();
		var hs='';
		if (me._barfill.ggParameter) {
			hs+=parameterToTransform(me._barfill.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._barfill.style.transform=hs;
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; -webkit-text-size-adjust: 100%; } .ggmarkdown p { margin-top: 0px; } .ggmarkdown a { color: #aaa; } .ggdefaulthotspot { font-family: "Montserrat", sans-serif; font-size: 16px; -webkit-filter: drop-shadow( 0px 0px 3px black); filter: drop-shadow( 0px 0px 3px black); } .ggmarkdown h1:first-child, .ggmarkdown h2:first-child, .ggmarkdown h3:first-child, .ggmarkdown h4:first-child { margin-top: 0px; } .ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 1em; margin-bottom: 0.2em; } .ggmarkdown { white-space: normal; } .shadow { -webkit-filter: drop-shadow( 0px 0px 3px black); filter: drop-shadow( 0px 0px 3px black); will-change: transform; } .shadow_title { -webkit-filter: drop-shadow( 0px 0px 5px rgba(0, 0, 0, 0.6)); filter: drop-shadow( 0px 0px 5px rgba(0, 0, 0, 0.6)); will-change: transform; } .montserrat { font-family: "Montserrat", sans-serif; } .ggskin_text>div::-webkit-scrollbar { width: 5px; } .ggskin_text>div { scrollbar-width: thin; }@font-face { font-family: "Montserrat"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/montserrat-latin-regular.woff2") format("woff2"); } @font-face { font-family: "Montserrat"; font-style: normal; font-weight: 600; src: local(""), url("$(skinbase)fonts/montserrat-latin-600.woff2") format("woff2"); }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
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
function onYouTubeIframeAPIReady() {
	setTimeout(function(){
		var videoElements = document.querySelectorAll('.ggskin_video');
		for (var i=0; i<videoElements.length; i++) {
			if (videoElements[i].ggYoutubeApiReady) {
				videoElements[i].ggYoutubeApiReady();
			}
		}
	}, 1000);
}