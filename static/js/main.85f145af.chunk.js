(this.webpackJsonpgameoflife=this.webpackJsonpgameoflife||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(2),i=n.n(o),r=(n(12),n(3)),s=n(4),d=n(6),l=n(5),u=(n(13),function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).pupulateArray=function(t,e){for(var n=[],o={backgroundColor:"white"},i={backgroundColor:"black"},r=function(t){for(var r=[],s=function(e){r.push({id:"".concat(t).concat(e),state:0,alive:function(){return c.a.createElement("div",{className:"node div".concat(t).concat(e),style:o})},dead:function(){return c.a.createElement("div",{className:"node div".concat(t).concat(e),style:i})}})},d=0;d<e;d++)s(d);n.push(r),a.setState({gridStart:n})},s=0;s<t;s++)r(s)},a.randomStart=function(){for(var t=a.state.gridStart,e=[],n={backgroundColor:"white"},o={backgroundColor:"black"},i=function(a){for(var i=[],r=function(t){var e=Math.floor(2*Math.random());0===e&&i.push({id:"".concat(a).concat(t),state:0,alive:function(){return c.a.createElement("div",{className:"node div".concat(a).concat(t),style:n})},dead:function(){return c.a.createElement("div",{className:"node div".concat(a).concat(t),style:o})}}),1===e&&i.push({id:"".concat(a).concat(t),state:1,alive:function(){return c.a.createElement("div",{className:"node div".concat(a).concat(t),style:n})},dead:function(){return c.a.createElement("div",{className:"node div".concat(a).concat(t),style:o})}})},s=0;s<t[a].length;s++)r(s);e.push(i)},r=0;r<t.length;r++)i(r);a.setState({gridInitialState:e})},a.playLife=function(){var t=a.state.gridInitialState,e=[];function n(e,n){var a=[void 0===t[e-1]||void 0===t[e-1][n-1]?0:t[e-1][n-1].state,void 0===t[e-1]||void 0===t[e-1][n]?0:t[e-1][n].state,void 0===t[e-1]||void 0===t[e-1][n+1]?0:t[e-1][n+1].state,void 0===t[e]||void 0===t[e][n-1]?0:t[e][n-1].state,void 0===t[e]||void 0===t[e][n+1]?0:t[e][n+1].state,void 0===t[e+1]||void 0===t[e+1][n-1]?0:t[e+1][n-1].state,void 0===t[e+1]||void 0===t[e+1][n]?0:t[e+1][n].state,void 0===t[e+1]||void 0===t[e+1][n+1]?0:t[e+1][n+1].state],c=0;a.filter((function(t){return void 0!==t}));for(var o=0;o<a.length;o++)c+=a[o];return c}for(var o={backgroundColor:"white"},i={backgroundColor:"black"},r=function(r){for(var s=[],d=function(e){n(r,e)<2&&s.push({id:"".concat(r).concat(e),state:0,alive:function(){return c.a.createElement("div",{className:"node div".concat(r).concat(e),style:o})},dead:function(){return c.a.createElement("div",{className:"node div".concat(r).concat(e),style:i})}}),3===n(r,e)&&s.push({id:"".concat(r).concat(e),state:1,alive:function(){return c.a.createElement("div",{className:"node div".concat(r).concat(e),style:o})},dead:function(){return c.a.createElement("div",{className:"node div".concat(r).concat(e),style:i})}}),2===n(r,e)&&1===t[r][e].state&&s.push({id:"".concat(r).concat(e),state:1,alive:function(){return c.a.createElement("div",{className:"node div".concat(r).concat(e),style:o})},dead:function(){return c.a.createElement("div",{className:"node div".concat(r).concat(e),style:i})}}),n(r,e)>3&&s.push({id:"".concat(r).concat(e),state:0,alive:function(){return c.a.createElement("div",{className:"node div".concat(r).concat(e),style:o})},dead:function(){return c.a.createElement("div",{className:"node div".concat(r).concat(e),style:i})}}),2===n(r,e)&&0===t[r][e].state&&s.push({id:"".concat(r).concat(e),state:0,alive:function(){return c.a.createElement("div",{className:"node div".concat(r).concat(e),style:o})},dead:function(){return c.a.createElement("div",{className:"node div".concat(r).concat(e),style:i})}})},l=0;l<t[r].length;l++)d(l);e.push(s),a.setState({gridInitialState:e})},s=0;s<t.length;s++)r(s);a.grid(e)},a.grid=function(t){for(var e=[],n=0;n<t.length;n++){for(var c=[],o=0;o<t[n].length;o++)1===t[n][o].state&&c.push(t[n][o].alive()),0===t[n][o].state&&c.push(t[n][o].dead());e.push(c)}a.setState({gridRun:e})},a.start=function(){a.continuousPlay=setInterval(a.playLife,1e3)},a.stop=function(){clearInterval(a.continuousPlay)},a.state={gridStart:[],gridInitialState:[],gridRun:[],screenHeight:null,screenWidth:null},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=window.innerHeight,e=window.innerWidth,n=function(){return e/t>1.5?Math.floor((window.innerHeight-150)/10):Math.floor((e-20)/10)},a=function(){return e/t>1.5?Math.floor((e-100)/10):n()};this.setState({screenHeight:10*n(),screenWidth:10*a()}),this.pupulateArray(n(),a()),console.log(n(),a())}},{key:"render",value:function(){var t={width:this.state.screenWidth,height:this.state.screenHeight};return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"John Conway's Game of Life"),c.a.createElement("div",{className:"buttonsContainer"},c.a.createElement("button",{className:"randomStart",onClick:this.randomStart}," Random State "),c.a.createElement("button",{onClick:this.start}," Start "),c.a.createElement("button",{onClick:this.stop}," Stop "),c.a.createElement("button",{onClick:this.playLife}," Step ")),c.a.createElement("div",{className:"gridContainer",style:t},this.state.gridRun))}}]),n}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.85f145af.chunk.js.map