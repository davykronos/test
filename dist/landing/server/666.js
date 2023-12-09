"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=666,exports.ids=[666],exports.modules={8666:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{VideoPresentationModule:()=>VideoPresentationModule});var common=__webpack_require__(69808),router=__webpack_require__(74202),shared_module=__webpack_require__(63478);const videosConfig=[{label:"video-pt.intro",url:"https://www.youtube.com/embed/sjaOWyhjHL0"},{label:"video-pt.students",url:"https://www.youtube.com/embed/nwfcGmeMrGo"},{label:"video-pt.youth-skills",url:"https://www.youtube.com/embed/57qI-mRH9Cw"},{label:"video-pt.employees",url:"https://www.youtube.com/embed/B4By3hmtrw8"},{label:"video-pt.farmers",url:"https://www.youtube.com/embed/BUmi7u2JuMM"},{label:"video-pt.public-grievances",url:"https://www.youtube.com/embed/Y_f0HwJ7hfs"},{label:"video-pt.culture",url:"https://www.youtube.com/embed/x3iReMW3lRg"},{label:"video-pt.health",url:"https://www.youtube.com/embed/aZhI0MTUtYA"},{label:"video-pt.police-legal",url:"https://www.youtube.com/embed/z12uPR-B0iI"},{label:"video-pt.women-child",url:"https://www.youtube.com/embed/CxYW_VJunIg"},{label:"video-pt.passport",url:"https://www.youtube.com/embed/xUaeZwVmEOI"},{label:"video-pt.finance",url:"https://www.youtube.com/embed/03E8eOOnzPg"},{label:"video-pt.transport",url:"https://www.youtube.com/embed/q8NgjqgpIqM"},{label:"video-pt.general",url:"https://www.youtube.com/embed/QTvKnNkO-sY"},{label:"video-pt.conclusion",url:"https://www.youtube.com/embed/7uTtDsYtoDk"}];var core=__webpack_require__(5e3),ngx_translate_core=__webpack_require__(51062),safe_resource_url_pipe=__webpack_require__(90836);function VideoPresentationComponent_li_16_Template(rf,ctx){if(1&rf){const _r4=core.EpF();core.TgZ(0,"li",12),core.NdJ("click",__name(function(){const i_r2=core.CHM(_r4).index,ctx_r3=core.oxw();return ctx_r3.selectedIndex=i_r2,core.KtG(ctx_r3.isMenuOpen=!1)},"VideoPresentationComponent_li_16_Template_li_click_0_listener")),core._uU(1),core.ALo(2,"translate"),core.qZA()}if(2&rf){const video_r1=ctx.$implicit,i_r2=ctx.index,ctx_r0=core.oxw();core.Q6J("ngClass",ctx_r0.selectedIndex==i_r2?"active":""),core.xp6(1),core.hij(" ",core.lcZ(2,2,video_r1.label)," ")}}__name(VideoPresentationComponent_li_16_Template,"VideoPresentationComponent_li_16_Template");class VideoPresentationComponent{constructor(){this.selectedIndex=0,this.isMenuOpen=!1,this.videosConfig=videosConfig}ngOnInit(){}}__name(VideoPresentationComponent,"VideoPresentationComponent"),VideoPresentationComponent.\u0275fac=__name(function(t){return new(t||VideoPresentationComponent)},"VideoPresentationComponent_Factory"),VideoPresentationComponent.\u0275cmp=core.Xpm({type:VideoPresentationComponent,selectors:[["app-video-presentation"]],decls:20,vars:12,consts:[[1,"know-wrapper"],[1,"inner-page-header",2,"margin-bottom","var(--mb-40)"],[1,"container"],[1,"row"],[1,"col-md-3","menu-wrapper"],[1,"menu-toggler",3,"ngClass","click"],[1,"toggle-button"],[1,"menu-label"],[3,"ngClass"],[3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col-md-9","video-section"],["frameborder","0","allowfullscreen","",3,"src"],[3,"ngClass","click"]],template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"div",0)(1,"div",1)(2,"h1"),core._uU(3),core.ALo(4,"translate"),core.qZA()(),core.TgZ(5,"div",2)(6,"div",3)(7,"div",4)(8,"div",5),core.NdJ("click",__name(function(){return ctx.isMenuOpen=!ctx.isMenuOpen},"VideoPresentationComponent_Template_div_click_8_listener")),core.TgZ(9,"div",6),core._UZ(10,"span"),core.qZA(),core.TgZ(11,"div",7),core._uU(12),core.ALo(13,"translate"),core.qZA()(),core.TgZ(14,"nav")(15,"ul",8),core.YNc(16,VideoPresentationComponent_li_16_Template,3,4,"li",9),core.qZA()()(),core.TgZ(17,"div",10),core._UZ(18,"iframe",11),core.ALo(19,"safeUrl"),core.qZA()()()()),2&rf&&(core.xp6(3),core.Oqu(core.lcZ(4,6,"video-pt.head")),core.xp6(5),core.Q6J("ngClass",ctx.isMenuOpen?"opened":"closed"),core.xp6(4),core.Oqu(core.lcZ(13,8,"video-pt.sections")),core.xp6(3),core.Q6J("ngClass",ctx.isMenuOpen?"closed":"opened"),core.xp6(1),core.Q6J("ngForOf",ctx.videosConfig),core.xp6(2),core.Q6J("src",core.lcZ(19,10,ctx.videosConfig[ctx.selectedIndex].url),core.uOi))},"VideoPresentationComponent_Template"),dependencies:[common.mk,common.sg,ngx_translate_core.X$,safe_resource_url_pipe.n],styles:['@font-face{font-family:poppinsbold;src:local("poppins-bold-webfont"),url(https://media.umangapp.in/cdn/landing/fonts/poppins-bold-webfont.woff2) format("woff2"),url(https://media.umangapp.in/cdn/landing/fonts/poppins-bold-webfont.woff) format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:poppinslight;src:local("poppins-light-webfont"),url(https://media.umangapp.in/cdn/landing/fonts/poppins-light-webfont.woff2) format("woff2"),url(https://media.umangapp.in/cdn/landing/fonts/poppins-light-webfont.woff) format("woff");font-weight:400;font-display:swap;font-style:normal}@font-face{font-family:poppinsmedium;src:local("poppins-medium-webfont"),url(https://media.umangapp.in/cdn/landing/fonts/poppins-medium-webfont.woff2) format("woff2"),url(https://media.umangapp.in/cdn/landing/fonts/poppins-medium-webfont.woff) format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:poppinsregular;src:local("poppins-regular-webfont"),url(https://media.umangapp.in/cdn/landing/fonts/poppins-regular-webfont.woff2) format("woff2"),url(https://media.umangapp.in/cdn/landing/fonts/poppins-regular-webfont.woff) format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:poppinssemibold;src:local("poppins-semibold-webfont"),url(https://media.umangapp.in/cdn/landing/fonts/poppins-semibold-webfont.woff2) format("woff2"),url(https://media.umangapp.in/cdn/landing/fonts/poppins-semibold-webfont.woff) format("woff");font-weight:400;font-style:normal;font-display:swap}.menu-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;height:400px;transition:max-height .5s ease-in-out;border:1px solid #DDDEE3;border-radius:8px;overflow-y:auto;transition:all .2s ease-in-out}@media (max-width: 767px){.menu-wrapper[_ngcontent-%COMP%]   ul.opened[_ngcontent-%COMP%]{max-height:0;height:auto;transition:max-height .5s ease-in-out;transition:all .2s ease-in-out}}@media (max-width: 767px){.menu-wrapper[_ngcontent-%COMP%]   ul.closed[_ngcontent-%COMP%]{max-height:1000px;transition:max-height .5s ease-in-out;transition:all .2s ease-in-out}}.menu-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:block;font-size:1rem;line-height:1.4;color:#1a1a1a;cursor:pointer;padding:10px}.menu-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid #DDDEE3}.menu-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:rgba(0,90,159,.1);color:#00599f}.video-section[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;height:400px}.menu-toggler[_ngcontent-%COMP%]{width:100%;border-radius:8px;align-items:center;margin-bottom:10px;display:none}@media (max-width: 767px){.menu-toggler[_ngcontent-%COMP%]{display:flex}}.menu-toggler[_ngcontent-%COMP%]   .menu-label[_ngcontent-%COMP%]{font-size:1.375rem;line-height:1.4}.menu-toggler[_ngcontent-%COMP%]   .toggle-button[_ngcontent-%COMP%]{width:25px;height:30px;position:relative;margin-right:10px;cursor:pointer}.menu-toggler[_ngcontent-%COMP%]   .toggle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%;height:2px;background:#4c4c4c;position:absolute;display:block;top:0;bottom:0;margin:auto}.menu-toggler[_ngcontent-%COMP%]   .toggle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;width:100%;height:2px;top:-8px;background:#4c4c4c;display:block;transition:all .2s ease-in-out}.menu-toggler[_ngcontent-%COMP%]   .toggle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"";position:absolute;width:100%;height:2px;bottom:-8px;background:#4c4c4c;display:block;transition:all .2s ease-in-out}.menu-toggler.opened[_ngcontent-%COMP%]   .toggle-button[_ngcontent-%COMP%]{width:30px;height:30px;position:relative;margin-left:0}.menu-toggler.opened[_ngcontent-%COMP%]   .toggle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:#ffffff}.menu-toggler.opened[_ngcontent-%COMP%]   .toggle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{transform:rotate(135deg);inset:0;margin:auto;transition:all .2s ease-in-out}.menu-toggler.opened[_ngcontent-%COMP%]   .toggle-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{transform:rotate(-135deg);inset:0;margin:auto;transition:all .2s ease-in-out}']});const videoPtnRoutes=[{path:"",component:VideoPresentationComponent}];class VideoPresentationModule{}__name(VideoPresentationModule,"VideoPresentationModule"),VideoPresentationModule.\u0275fac=__name(function(t){return new(t||VideoPresentationModule)},"VideoPresentationModule_Factory"),VideoPresentationModule.\u0275mod=core.oAB({type:VideoPresentationModule}),VideoPresentationModule.\u0275inj=core.cJS({imports:[router.Bz.forChild(videoPtnRoutes),common.ez,shared_module.m]})}};