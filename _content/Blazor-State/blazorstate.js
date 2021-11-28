(()=>{"use strict";var e={136:function(e,o,t){var s=this&&this.__awaiter||function(e,o,t,s){return new(t||(t=Promise))((function(n,a){function i(e){try{r(s.next(e))}catch(e){a(e)}}function l(e){try{r(s.throw(e))}catch(e){a(e)}}function r(e){var o;e.done?n(e.value):(o=e.value,o instanceof t?o:new t((function(e){e(o)}))).then(i,l)}r((s=s.apply(e,o||[])).next())}))};Object.defineProperty(o,"__esModule",{value:!0}),o.BlazorState=void 0;const n=t(738);o.BlazorState=class{DispatchRequest(e,o){return s(this,void 0,void 0,(function*(){const t=JSON.stringify(o);console.log(`Dispatching request of Type ${e}: ${t}`),yield window[n.JsonRequestHandlerName].invokeMethodAsync(n.JsonRequestHandlerMethodName,e,t)}))}}},738:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.ReduxExtensionName=o.ReduxDevToolsName=o.ReduxDevToolsFactoryName=o.JsonRequestHandlerName=o.JsonRequestHandlerMethodName=o.InitializeJavaScriptInteropName=o.DevToolsName=o.BlazorStateName=void 0,o.BlazorStateName="BlazorState",o.DevToolsName="devTools",o.InitializeJavaScriptInteropName="InitializeJavaScriptInterop",o.JsonRequestHandlerMethodName="Handle",o.JsonRequestHandlerName="jsonRequestHandler",o.ReduxDevToolsFactoryName="ReduxDevToolsFactory",o.ReduxDevToolsName="reduxDevTools",o.ReduxExtensionName="__REDUX_DEVTOOLS_EXTENSION__"},79:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.ReduxDevTools=void 0;const s=t(738);o.ReduxDevTools=class{constructor(){this.MessageHandler=e=>{console.log("ReduxDevTools.MessageHandler"),console.log(e);const o=this.MapRequestType(e);o?this.BlazorState.DispatchRequest(o,e):console.log("messages of this type are currently not supported")},this.BlazorState=window[s.BlazorStateName],this.Config={name:"Blazor State",features:{pause:!1,lock:!1,persist:!1,export:!1,import:!1,jump:!1,skip:!1,reorder:!1,dispatch:!1,test:!1}},this.Extension=this.GetExtension(),this.DevTools=this.GetDevTools(),this.IsEnabled=!!this.DevTools,this.Init()}Init(){this.IsEnabled&&(this.DevTools.subscribe(this.MessageHandler),window[s.DevToolsName]=this.DevTools)}GetExtension(){const e=window[s.ReduxExtensionName];return e||console.log("Redux DevTools are not installed."),e}GetDevTools(){const e=this.Extension&&this.Extension.connect(this.Config);return e||console.log("Unable to connect to Redux DevTools."),e}MapRequestType(e){var o;switch(e.type){case"START":o="BlazorState.Pipeline.ReduxDevTools.StartRequest";break;case"STOP":break;case"DISPATCH":o={COMMIT:void 0,IMPORT_STATE:void 0,JUMP_TO_ACTION:"BlazorState.Pipeline.ReduxDevTools.JumpToStateRequest",JUMP_TO_STATE:"BlazorState.Pipeline.ReduxDevTools.JumpToStateRequest",RESET:void 0,ROLLBACK:void 0,TOGGLE_ACTION:void 0}[e.payload.type]}return o&&console.log(`Redux Dev tools type: ${e.type} maps to ${o}`),o}ReduxDevToolsDispatch(e,o){return"init"===e?window[s.DevToolsName].init(o):window[s.DevToolsName].send(e,o)}}}},o={};function t(s){var n=o[s];if(void 0!==n)return n.exports;var a=o[s]={exports:{}};return e[s].call(a.exports,a,a.exports,t),a.exports}(()=>{const e=t(136),o=t(79),s=t(738);console.log("Initialize BlazorState"),"undefined"==typeof window||window[s.BlazorStateName]||(window[s.BlazorStateName]=new e.BlazorState,window[s.InitializeJavaScriptInteropName]=function(e){console.log("InitializeJavaScriptInterop"),window[s.JsonRequestHandlerName]=e},window[s.ReduxDevToolsFactoryName]=function(){const e=new o.ReduxDevTools;return window[s.ReduxDevToolsName]=e,e.IsEnabled})})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBcUNtRCxHQUNuQzNELFFBQVFDLElBQUksK0JBQ1pDLE9BQU8sRUFBQUMsd0JBQTBCd0QsR0FTL0J6RCxPQUFPLEVBQUFPLDBCQUlYLFdBQ0UsTUFBTW1ELEVBQWdCLElBQUksRUFBQUMsY0FFMUIsT0FEQTNELE9BQU8sRUFBQVEsbUJBQXFCa0QsRUFDckJBLEVBQWN4QixhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxhem9yc3RhdGUvLi9zcmMvQmxhem9yU3RhdGUudHMiLCJ3ZWJwYWNrOi8vYmxhem9yc3RhdGUvLi9zcmMvQ29uc3RhbnRzLnRzIiwid2VicGFjazovL2JsYXpvcnN0YXRlLy4vc3JjL1JlZHV4RGV2VG9vbHMudHMiLCJ3ZWJwYWNrOi8vYmxhem9yc3RhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmxhem9yc3RhdGUvLi9zcmMvSW5pdGlhbGl6ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyAgSnNvblJlcXVlc3RIYW5kbGVyTWV0aG9kTmFtZSwgSnNvblJlcXVlc3RIYW5kbGVyTmFtZSB9IGZyb20gJy4vQ29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCbGF6b3JTdGF0ZSB7XHJcbiAgYXN5bmMgRGlzcGF0Y2hSZXF1ZXN0KHJlcXVlc3RUeXBlRnVsbE5hbWU6IHN0cmluZywgcmVxdWVzdDogYW55ICkge1xyXG4gICAgY29uc3QgcmVxdWVzdEFzSnNvbiA9IEpTT04uc3RyaW5naWZ5KHJlcXVlc3QpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBEaXNwYXRjaGluZyByZXF1ZXN0IG9mIFR5cGUgJHtyZXF1ZXN0VHlwZUZ1bGxOYW1lfTogJHtyZXF1ZXN0QXNKc29ufWApO1xyXG4gICAgYXdhaXQgd2luZG93W0pzb25SZXF1ZXN0SGFuZGxlck5hbWVdLmludm9rZU1ldGhvZEFzeW5jKEpzb25SZXF1ZXN0SGFuZGxlck1ldGhvZE5hbWUsIHJlcXVlc3RUeXBlRnVsbE5hbWUsIHJlcXVlc3RBc0pzb24pO1xyXG4gIH1cclxufSIsImV4cG9ydCBjb25zdCBCbGF6b3JTdGF0ZU5hbWU6IHN0cmluZyA9IFwiQmxhem9yU3RhdGVcIjtcclxuZXhwb3J0IGNvbnN0IERldlRvb2xzTmFtZTogc3RyaW5nID0gXCJkZXZUb29sc1wiXHJcbmV4cG9ydCBjb25zdCBJbml0aWFsaXplSmF2YVNjcmlwdEludGVyb3BOYW1lOiBzdHJpbmcgPSBcIkluaXRpYWxpemVKYXZhU2NyaXB0SW50ZXJvcFwiO1xyXG5leHBvcnQgY29uc3QgSnNvblJlcXVlc3RIYW5kbGVyTWV0aG9kTmFtZTogc3RyaW5nID0gXCJIYW5kbGVcIjtcclxuZXhwb3J0IGNvbnN0IEpzb25SZXF1ZXN0SGFuZGxlck5hbWU6IHN0cmluZyA9IFwianNvblJlcXVlc3RIYW5kbGVyXCI7XHJcbmV4cG9ydCBjb25zdCBSZWR1eERldlRvb2xzRmFjdG9yeU5hbWU6IHN0cmluZyA9IFwiUmVkdXhEZXZUb29sc0ZhY3RvcnlcIjtcclxuZXhwb3J0IGNvbnN0IFJlZHV4RGV2VG9vbHNOYW1lOiBzdHJpbmcgPSBcInJlZHV4RGV2VG9vbHNcIjtcclxuZXhwb3J0IGNvbnN0IFJlZHV4RXh0ZW5zaW9uTmFtZTogc3RyaW5nID0gXCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fXCI7XHJcbiIsImltcG9ydCB7IEJsYXpvclN0YXRlIH0gZnJvbSAnLi9CbGF6b3JTdGF0ZSc7XHJcbmltcG9ydCB7IEJsYXpvclN0YXRlTmFtZSwgUmVkdXhFeHRlbnNpb25OYW1lLCBEZXZUb29sc05hbWUsIFJlZHV4RGV2VG9vbHNOYW1lIH0gZnJvbSAnLi9Db25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlZHV4RGV2VG9vbHMge1xyXG4gIElzRW5hYmxlZDogYm9vbGVhbjtcclxuICBEZXZUb29sczogYW55O1xyXG4gIEV4dGVuc2lvbjogYW55O1xyXG4gIENvbmZpZzogeyBuYW1lOiBzdHJpbmc7IGZlYXR1cmVzOiB7IHBhdXNlOiBib29sZWFuOyBsb2NrOiBib29sZWFuOyBwZXJzaXN0OiBib29sZWFuOyBleHBvcnQ6IGJvb2xlYW47IGltcG9ydDogYm9vbGVhbjsganVtcDogYm9vbGVhbjsgc2tpcDogYm9vbGVhbjsgcmVvcmRlcjogYm9vbGVhbjsgZGlzcGF0Y2g6IGJvb2xlYW47IHRlc3Q6IGJvb2xlYW47IH07IH07XHJcbiAgQmxhem9yU3RhdGU6IEJsYXpvclN0YXRlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuQmxhem9yU3RhdGUgPSB3aW5kb3dbQmxhem9yU3RhdGVOYW1lXTsgLy8gRGVwZW5kcyBvbiB0aGlzIGZ1bmN0aW9uYWxpdHlcclxuICAgIHRoaXMuQ29uZmlnID0ge1xyXG4gICAgICBuYW1lOiAnQmxhem9yIFN0YXRlJyxcclxuICAgICAgZmVhdHVyZXM6IHtcclxuICAgICAgICBwYXVzZTogZmFsc2UsIC8vIHN0YXJ0L3BhdXNlIHJlY29yZGluZyBvZiBkaXNwYXRjaGVkIGFjdGlvbnNcclxuICAgICAgICBsb2NrOiBmYWxzZSwgLy8gbG9jay91bmxvY2sgZGlzcGF0Y2hpbmcgYWN0aW9ucyBhbmQgc2lkZSBlZmZlY3RzXHJcbiAgICAgICAgcGVyc2lzdDogZmFsc2UsIC8vIHBlcnNpc3Qgc3RhdGVzIG9uIHBhZ2UgcmVsb2FkaW5nXHJcbiAgICAgICAgZXhwb3J0OiBmYWxzZSwgLy8gZXhwb3J0IGhpc3Rvcnkgb2YgYWN0aW9ucyBpbiBhIGZpbGVcclxuICAgICAgICBpbXBvcnQ6IGZhbHNlLCAvLyBpbXBvcnQgaGlzdG9yeSBvZiBhY3Rpb25zIGZyb20gYSBmaWxlXHJcbiAgICAgICAganVtcDogZmFsc2UsIC8vIGp1bXAgYmFjayBhbmQgZm9ydGggKHRpbWUgdHJhdmVsaW5nKVxyXG4gICAgICAgIHNraXA6IGZhbHNlLCAvLyBza2lwIChjYW5jZWwpIGFjdGlvbnNcclxuICAgICAgICByZW9yZGVyOiBmYWxzZSwgLy8gZHJhZyBhbmQgZHJvcCBhY3Rpb25zIGluIHRoZSBoaXN0b3J5IGxpc3RcclxuICAgICAgICBkaXNwYXRjaDogZmFsc2UsIC8vIGRpc3BhdGNoIGN1c3RvbSBhY3Rpb25zIG9yIGFjdGlvbiBjcmVhdG9yc1xyXG4gICAgICAgIHRlc3Q6IGZhbHNlIC8vIGdlbmVyYXRlIHRlc3RzIGZvciB0aGUgc2VsZWN0ZWQgYWN0aW9uc1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhpcy5FeHRlbnNpb24gPSB0aGlzLkdldEV4dGVuc2lvbigpO1xyXG4gICAgdGhpcy5EZXZUb29scyA9IHRoaXMuR2V0RGV2VG9vbHMoKTtcclxuICAgIHRoaXMuSXNFbmFibGVkID0gdGhpcy5EZXZUb29scyA/IHRydWUgOiBmYWxzZTtcclxuICAgIHRoaXMuSW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLklzRW5hYmxlZCkge1xyXG4gICAgICB0aGlzLkRldlRvb2xzLnN1YnNjcmliZSh0aGlzLk1lc3NhZ2VIYW5kbGVyKTtcclxuICAgICAgd2luZG93W0RldlRvb2xzTmFtZV0gPSB0aGlzLkRldlRvb2xzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgR2V0RXh0ZW5zaW9uKCkge1xyXG4gICAgY29uc3QgZXh0ZW5zaW9uID0gd2luZG93W1JlZHV4RXh0ZW5zaW9uTmFtZV07XHJcblxyXG4gICAgaWYgKCFleHRlbnNpb24pIHtcclxuICAgICAgY29uc29sZS5sb2coJ1JlZHV4IERldlRvb2xzIGFyZSBub3QgaW5zdGFsbGVkLicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV4dGVuc2lvbjtcclxuICB9XHJcblxyXG4gIEdldERldlRvb2xzKCkge1xyXG4gICAgY29uc3QgZGV2VG9vbHMgPSB0aGlzLkV4dGVuc2lvbiAmJiB0aGlzLkV4dGVuc2lvbi5jb25uZWN0KHRoaXMuQ29uZmlnKTtcclxuICAgIGlmICghZGV2VG9vbHMpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1VuYWJsZSB0byBjb25uZWN0IHRvIFJlZHV4IERldlRvb2xzLicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRldlRvb2xzO1xyXG4gIH1cclxuXHJcbiAgTWFwUmVxdWVzdFR5cGUobWVzc2FnZSkge1xyXG4gICAgdmFyIGRpc3BhdGNoUmVxdWVzdHMgPSB7XHJcbiAgICAgICdDT01NSVQnOiB1bmRlZmluZWQsXHJcbiAgICAgICdJTVBPUlRfU1RBVEUnOiB1bmRlZmluZWQsXHJcbiAgICAgICdKVU1QX1RPX0FDVElPTic6ICdCbGF6b3JTdGF0ZS5QaXBlbGluZS5SZWR1eERldlRvb2xzLkp1bXBUb1N0YXRlUmVxdWVzdCcsXHJcbiAgICAgICdKVU1QX1RPX1NUQVRFJzogJ0JsYXpvclN0YXRlLlBpcGVsaW5lLlJlZHV4RGV2VG9vbHMuSnVtcFRvU3RhdGVSZXF1ZXN0JyxcclxuICAgICAgJ1JFU0VUJzogdW5kZWZpbmVkLFxyXG4gICAgICAnUk9MTEJBQ0snOiB1bmRlZmluZWQsXHJcbiAgICAgICdUT0dHTEVfQUNUSU9OJzogdW5kZWZpbmVkXHJcbiAgICB9O1xyXG4gICAgdmFyIGJsYXpvclJlcXVlc3RUeXBlO1xyXG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcclxuICAgICAgY2FzZSAnU1RBUlQnOlxyXG4gICAgICAgIGJsYXpvclJlcXVlc3RUeXBlID0gJ0JsYXpvclN0YXRlLlBpcGVsaW5lLlJlZHV4RGV2VG9vbHMuU3RhcnRSZXF1ZXN0JztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnU1RPUCc6XHJcbiAgICAgICAgLy9ibGF6b3JSZXF1ZXN0VHlwZSA9ICdCbGF6b3JTdGF0ZS5QaXBlbGluZS5SZWR1eERldlRvb2xzLlN0b3BSZXF1ZXN0JztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnRElTUEFUQ0gnOlxyXG4gICAgICAgIGJsYXpvclJlcXVlc3RUeXBlID0gZGlzcGF0Y2hSZXF1ZXN0c1ttZXNzYWdlLnBheWxvYWQudHlwZV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBibGF6b3JSZXF1ZXN0VHlwZSAmJlxyXG4gICAgICBjb25zb2xlLmxvZyhgUmVkdXggRGV2IHRvb2xzIHR5cGU6ICR7bWVzc2FnZS50eXBlfSBtYXBzIHRvICR7Ymxhem9yUmVxdWVzdFR5cGV9YCk7XHJcblxyXG4gICAgcmV0dXJuIGJsYXpvclJlcXVlc3RUeXBlO1xyXG4gIH1cclxuXHJcbiAgTWVzc2FnZUhhbmRsZXIgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1JlZHV4RGV2VG9vbHMuTWVzc2FnZUhhbmRsZXInKTtcclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgdmFyIGpzb25SZXF1ZXN0O1xyXG4gICAgY29uc3QgcmVxdWVzdFR5cGUgPSB0aGlzLk1hcFJlcXVlc3RUeXBlKG1lc3NhZ2UpO1xyXG4gICAgaWYgKHJlcXVlc3RUeXBlKSB7IC8vIElmIHdlIGRvbid0IG1hcCB0aGlzIHR5cGUgdGhlbiB0aGVyZSBpcyBub3RoaW5nIHRvIGRpc3BhdGNoIGp1c3QgaWdub3JlLlxyXG4gICAgICBqc29uUmVxdWVzdCA9IHtcclxuICAgICAgICAvLyBUT0RPOiBtYWtlIHN1cmUgbm9uIFJlcXVlc3RzIGZyb20gYXNzZW1ibGllcyBvdGhlciB0aGFuIEJsYXpvclN0YXRlIGFsc28gd29yay5cclxuICAgICAgICBSZXF1ZXN0VHlwZTogcmVxdWVzdFR5cGUsXHJcbiAgICAgICAgUGF5bG9hZDogbWVzc2FnZVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5CbGF6b3JTdGF0ZS5EaXNwYXRjaFJlcXVlc3QocmVxdWVzdFR5cGUsIG1lc3NhZ2UpO1xyXG4gICAgfSBlbHNlXHJcbiAgICAgIGNvbnNvbGUubG9nKGBtZXNzYWdlcyBvZiB0aGlzIHR5cGUgYXJlIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgfVxyXG5cclxuICBSZWR1eERldlRvb2xzRGlzcGF0Y2goYWN0aW9uLCBzdGF0ZSkge1xyXG4gICAgaWYgKGFjdGlvbiA9PT0gJ2luaXQnKSB7XHJcbiAgICAgIHJldHVybiB3aW5kb3dbRGV2VG9vbHNOYW1lXS5pbml0KHN0YXRlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gd2luZG93W0RldlRvb2xzTmFtZV0uc2VuZChhY3Rpb24sIHN0YXRlKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgQmxhem9yU3RhdGUgfSBmcm9tICcuL0JsYXpvclN0YXRlJztcclxuaW1wb3J0IHsgUmVkdXhEZXZUb29sc30gZnJvbSAnLi9SZWR1eERldlRvb2xzJztcclxuaW1wb3J0IHtcclxuICBCbGF6b3JTdGF0ZU5hbWUsXHJcbiAgSW5pdGlhbGl6ZUphdmFTY3JpcHRJbnRlcm9wTmFtZSxcclxuICBKc29uUmVxdWVzdEhhbmRsZXJOYW1lLFxyXG4gIFJlZHV4RGV2VG9vbHNGYWN0b3J5TmFtZSxcclxuICBSZWR1eERldlRvb2xzTmFtZSxcclxufSBmcm9tICcuL0NvbnN0YW50cyc7XHJcblxyXG5mdW5jdGlvbiBJbml0aWFsaXplSmF2YVNjcmlwdEludGVyb3AoSnNvblJlcXVlc3RIYW5kbGVyKSB7XHJcbiAgY29uc29sZS5sb2coXCJJbml0aWFsaXplSmF2YVNjcmlwdEludGVyb3BcIik7XHJcbiAgd2luZG93W0pzb25SZXF1ZXN0SGFuZGxlck5hbWVdID0gSnNvblJlcXVlc3RIYW5kbGVyO1xyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIEluaXRpYWxpemUoKSB7XHJcbiAgY29uc29sZS5sb2coXCJJbml0aWFsaXplIEJsYXpvclN0YXRlXCIpO1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhd2luZG93W0JsYXpvclN0YXRlTmFtZV0pIHtcclxuICAgIHdpbmRvd1tCbGF6b3JTdGF0ZU5hbWVdID0gbmV3IEJsYXpvclN0YXRlKCk7XHJcbiAgICB3aW5kb3dbSW5pdGlhbGl6ZUphdmFTY3JpcHRJbnRlcm9wTmFtZV0gPSBJbml0aWFsaXplSmF2YVNjcmlwdEludGVyb3A7XHJcbiAgICB3aW5kb3dbUmVkdXhEZXZUb29sc0ZhY3RvcnlOYW1lXSA9IFJlZHV4RGV2VG9vbHNGYWN0b3J5O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUmVkdXhEZXZUb29sc0ZhY3RvcnkoKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgcmVkdXhEZXZUb29scyA9IG5ldyBSZWR1eERldlRvb2xzKCk7XHJcbiAgd2luZG93W1JlZHV4RGV2VG9vbHNOYW1lXSA9IHJlZHV4RGV2VG9vbHM7XHJcbiAgcmV0dXJuIHJlZHV4RGV2VG9vbHMuSXNFbmFibGVkO1xyXG59XHJcblxyXG5Jbml0aWFsaXplKCk7Il0sIm5hbWVzIjpbIkRpc3BhdGNoUmVxdWVzdCIsInJlcXVlc3RUeXBlRnVsbE5hbWUiLCJyZXF1ZXN0IiwicmVxdWVzdEFzSnNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiSnNvblJlcXVlc3RIYW5kbGVyTmFtZSIsImludm9rZU1ldGhvZEFzeW5jIiwiSnNvblJlcXVlc3RIYW5kbGVyTWV0aG9kTmFtZSIsIkJsYXpvclN0YXRlTmFtZSIsIkRldlRvb2xzTmFtZSIsIkluaXRpYWxpemVKYXZhU2NyaXB0SW50ZXJvcE5hbWUiLCJSZWR1eERldlRvb2xzRmFjdG9yeU5hbWUiLCJSZWR1eERldlRvb2xzTmFtZSIsIlJlZHV4RXh0ZW5zaW9uTmFtZSIsImNvbnN0cnVjdG9yIiwiTWVzc2FnZUhhbmRsZXIiLCJtZXNzYWdlIiwicmVxdWVzdFR5cGUiLCJ0aGlzIiwiTWFwUmVxdWVzdFR5cGUiLCJCbGF6b3JTdGF0ZSIsIkNvbmZpZyIsIm5hbWUiLCJmZWF0dXJlcyIsInBhdXNlIiwibG9jayIsInBlcnNpc3QiLCJleHBvcnQiLCJpbXBvcnQiLCJqdW1wIiwic2tpcCIsInJlb3JkZXIiLCJkaXNwYXRjaCIsInRlc3QiLCJFeHRlbnNpb24iLCJHZXRFeHRlbnNpb24iLCJEZXZUb29scyIsIkdldERldlRvb2xzIiwiSXNFbmFibGVkIiwiSW5pdCIsInN1YnNjcmliZSIsImV4dGVuc2lvbiIsImRldlRvb2xzIiwiY29ubmVjdCIsImJsYXpvclJlcXVlc3RUeXBlIiwidHlwZSIsInVuZGVmaW5lZCIsInBheWxvYWQiLCJSZWR1eERldlRvb2xzRGlzcGF0Y2giLCJhY3Rpb24iLCJzdGF0ZSIsImluaXQiLCJzZW5kIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJjYWxsIiwiSnNvblJlcXVlc3RIYW5kbGVyIiwicmVkdXhEZXZUb29scyIsIlJlZHV4RGV2VG9vbHMiXSwic291cmNlUm9vdCI6IiJ9