(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{207:function(module,exports,__webpack_require__){var content=__webpack_require__(762);"string"==typeof content&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};__webpack_require__(769)(content,options);content.locals&&(module.exports=content.locals)},208:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Background}));__webpack_require__(9),__webpack_require__(17),__webpack_require__(18),__webpack_require__(14),__webpack_require__(96),__webpack_require__(1),__webpack_require__(70),__webpack_require__(97),__webpack_require__(8),__webpack_require__(19),__webpack_require__(20);var react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);__webpack_require__(207);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}var Background=function(_Component){function Background(){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Background),_possibleConstructorReturn(this,_getPrototypeOf(Background).apply(this,arguments))}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Background,_Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Background,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",{className:"rounded-container"},this.props.titleText)}}]),Background}(react__WEBPACK_IMPORTED_MODULE_11__.Component);Background.displayName="Background",Background.__docgenInfo={description:"",methods:[],displayName:"Background"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\Background\\Background.jsx"]={name:"Background",docgenInfo:Background.__docgenInfo,path:"src\\Background\\Background.jsx"})},209:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Container}));__webpack_require__(9),__webpack_require__(17),__webpack_require__(18),__webpack_require__(14),__webpack_require__(96),__webpack_require__(1),__webpack_require__(70),__webpack_require__(97),__webpack_require__(8),__webpack_require__(19),__webpack_require__(20);var react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__),_Button_Button__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(44);__webpack_require__(207);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}var Container=function(_Component){function Container(){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Container),_possibleConstructorReturn(this,_getPrototypeOf(Container).apply(this,arguments))}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Container,_Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Container,[{key:"render",value:function render(){var onClick=this.props.onClick;return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("nav",{className:"navigation-tab"},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_12__.a,{iconClass:"listIcon",tabText:"List",onClick:onClick,btnClass:"navigation-tab-item",active:1==this.props.active}),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_12__.a,{iconClass:"tagIcon",tabText:"Tags",onClick:onClick,btnClass:"navigation-tab-item",active:2==this.props.active}),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_12__.a,{iconClass:"bagIcon",tabText:"Bag",onClick:onClick,btnClass:"navigation-tab-item",active:3==this.props.active}),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_12__.a,{iconClass:"bellIcon",tabText:"Notifications",onClick:onClick,btnClass:"navigation-tab-item",active:4==this.props.active}))}}]),Container}(react__WEBPACK_IMPORTED_MODULE_11__.Component);Container.displayName="Container",Container.__docgenInfo={description:"",methods:[],displayName:"Container"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\Container\\Container.jsx"]={name:"Container",docgenInfo:Container.__docgenInfo,path:"src\\Container\\Container.jsx"})},346:function(module,__webpack_exports__,__webpack_require__){"use strict";var _storybook_theming__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(145);__webpack_exports__.a=Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_0__.create)({base:"dark",colorPrimary:"#212626",colorSecondary:"#c9fdd7",appBg:"#212626",appContentBg:"#181c1c",appBorderColor:"grey",appBorderRadius:4,fontBase:'"Open Sans", sans-serif',fontCode:"monospace",textColor:"white",textInverseColor:"rgba(0,0,0,0.9)",barTextColor:"#4d5c70",barSelectedColor:"#c9fdd7",barBg:"#222831",inputBg:"white",inputBorder:"#c9fdd7",inputTextColor:"black",inputBorderRadius:4,brandTitle:"My custom storybook",brandUrl:"https://example.com",brandImage:"https://placehold.it/350x150"})},347:function(module,exports,__webpack_require__){__webpack_require__(348),__webpack_require__(460),module.exports=__webpack_require__(461)},369:function(module,exports){},44:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Button}));__webpack_require__(9),__webpack_require__(17),__webpack_require__(18),__webpack_require__(23),__webpack_require__(14),__webpack_require__(96),__webpack_require__(1),__webpack_require__(70),__webpack_require__(97),__webpack_require__(8),__webpack_require__(19),__webpack_require__(20);var react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);__webpack_require__(207);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}var Button=function(_Component){function Button(){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Button),_possibleConstructorReturn(this,_getPrototypeOf(Button).call(this))}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Button,_Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Button,[{key:"render",value:function render(){var _this$props=this.props,_onClick=_this$props.onClick,active=_this$props.active;return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"".concat(this.props.btnClass," ").concat(active?"active":""),onClick:function onClick(e){return _onClick(e)}},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span",{className:"navigation-tab__icon"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:this.props.iconClass})),active?react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span",{className:"navigation-tab__txt"},this.props.tabText):null)}}]),Button}(react__WEBPACK_IMPORTED_MODULE_12__.Component);Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\Button\\Button.jsx"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src\\Button\\Button.jsx"})},461:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(38),_yourTheme__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(145),__webpack_require__(346));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(714),module),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({options:{theme:_yourTheme__WEBPACK_IMPORTED_MODULE_2__.a}})}.call(this,__webpack_require__(110)(module))},714:function(module,exports,__webpack_require__){var map={"./Background/Background.stories.js":715,"./Button/Button.stories.js":770,"./Container/Container.stories.js":771};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=714},715:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(48),_Background__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(146),__webpack_require__(208)),_storybook_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(38),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Background__WEBPACK_IMPORTED_MODULE_3__.a,{titleText:"React Nav Bar"});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.storiesOf)("TitleBar",module).add("Renders normally",(function(){return _ref}),{notes:"a very simple component"}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.storiesOf)("TitleBar",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs).add("With adjustable text",(function(){var name=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Name","Nav Bar Title"),content="".concat(name);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Background__WEBPACK_IMPORTED_MODULE_3__.a,{titleText:content})}),{notes:"a very simple component with text that can be changed"})}.call(this,__webpack_require__(110)(module))},762:function(module,exports,__webpack_require__){(exports=module.exports=__webpack_require__(763)(!1)).push([module.i,"@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap);",""]);var getUrl=__webpack_require__(764),___CSS_LOADER_URL___0___=getUrl(__webpack_require__(765)),___CSS_LOADER_URL___1___=getUrl(__webpack_require__(766)),___CSS_LOADER_URL___2___=getUrl(__webpack_require__(767)),___CSS_LOADER_URL___3___=getUrl(__webpack_require__(768));exports.push([module.i,'*{font-family:"Roboto Condensed", sans-serif}html,body{height:100%}body{margin:0;padding:0;background-color:#282b2e;display:flex;align-items:center;justify-content:center}.navigation-tab{height:150px;width:600px;background-color:#fff;box-shadow:0 50px 30px 0 rgba(0,0,0,0.175);border-radius:20px 20px 90px 90px;overflow:hidden;border:15px solid #fff;display:flex;position:relative;flex-shrink:0}.navigation-tab-item{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;width:130px;flex-shrink:0;cursor:pointer;transition:0.3s;position:relative;z-index:2}.navigation-tab-item.active{width:210px}.navigation-tab-item.active .navigation-tab__icon{transform:translate(0px, -10px)}.navigation-tab-item.active .navigation-tab__txt{opacity:1;transform:translate(0, 10px)}.navigation-tab-item.active::before{content:"";border-radius:20px;background-color:#a7b1bb;height:100%;width:210px;position:absolute;left:0;top:0;transition:0.3s}.navigation-tab__icon{display:block;color:#282b2e;transition-duration:0.3s;line-height:1;transform:translate(0, 11px)}.navigation-tab__txt{display:block;font-weight:400;font-size:20px;color:black;opacity:0;transition-duration:0.3s;transform:translate(0, 20px);user-select:none}.rounded-container{border-radius:100px;background-color:white;border:0px white;margin-bottom:1em;text-align:center}.listIcon{background-image:url('+___CSS_LOADER_URL___0___+");width:32px;height:32px}.tagIcon{background:url("+___CSS_LOADER_URL___1___+");width:32px;height:32px}.bagIcon{background:url("+___CSS_LOADER_URL___2___+");width:32px;height:32px}.bellIcon{background:url("+___CSS_LOADER_URL___3___+");width:32px;height:32px}\n",""])},765:function(module,exports){module.exports="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-list'%3E %3Cline x1='8' y1='6' x2='21' y2='6'%3E%3C/line%3E %3Cline x1='8' y1='12' x2='21' y2='12'%3E%3C/line%3E %3Cline x1='8' y1='18' x2='21' y2='18'%3E%3C/line%3E %3Cline x1='3' y1='6' x2='3' y2='6'%3E%3C/line%3E %3Cline x1='3' y1='12' x2='3' y2='12'%3E%3C/line%3E %3Cline x1='3' y1='18' x2='3' y2='18'%3E%3C/line%3E %3C/svg%3E"},766:function(module,exports){module.exports="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-tag'%3E %3Cpath d='M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z'%3E%3C/path%3E %3Cline x1='7' y1='7' x2='7' y2='7'%3E%3C/line%3E %3C/svg%3E"},767:function(module,exports){module.exports="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-shopping-bag'%3E %3Cpath d='M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z'%3E%3C/path%3E %3Cline x1='3' y1='6' x2='21' y2='6'%3E%3C/line%3E %3Cpath d='M16 10a4 4 0 0 1-8 0'%3E%3C/path%3E %3C/svg%3E"},768:function(module,exports){module.exports="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-bell'%3E %3Cpath d='M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9'%3E%3C/path%3E %3Cpath d='M13.73 21a2 2 0 0 1-3.46 0'%3E%3C/path%3E %3C/svg%3E"},770:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(146),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(44),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(48),_storybook_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(38),C=function(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{width:"300px",height:"200px"}},props.children)};C.displayName="C";var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{iconClass:"listIcon",tabText:"List",btnClass:"navigation-tab-item",active:0}),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(C,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{iconClass:"listIcon",tabText:"List",btnClass:"navigation-tab-item",active:1}));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.storiesOf)("Button",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs).add("Renders normally",(function(){return _ref}),{notes:"a very simple component"}).add("Renders normally with active",(function(){return _ref2}),{notes:"a very simple component"}).add("Renders normally with active and has a dummy click",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(C,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{iconClass:"listIcon",onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked"),tabText:"List",btnClass:"navigation-tab-item",active:1}))}),{notes:"a very simple component"}).add("With adjustable text",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(C,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{iconClass:"listIcon",tabText:"List",btnClass:"navigation-tab-item",active:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("is active")}))}),{notes:"a very simple component with text that can be changed"})}.call(this,__webpack_require__(110)(module))},771:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(146),__webpack_require__(48)),_Container__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(209),_storybook_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(38),options={range:!0,min:1,max:4,step:1},_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_3__.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.storiesOf)("Container",module).add("Renders normally",(function(){return _ref}),{notes:"a very simple container component"}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.storiesOf)("Container",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs).add("Renders normally with togglable buttons",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_3__.a,{active:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("which one is active",1,options,"Group-ID1")})}),{notes:"a very simple container component"})}.call(this,__webpack_require__(110)(module))}},[[347,1,2]]]);
//# sourceMappingURL=main.91baf3255ab36622d2cb.bundle.js.map