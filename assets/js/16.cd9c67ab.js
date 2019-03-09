(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{158:function(t,s,n){"use strict";n.r(s);var a=n(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("CopyTranslator 提供了丰富的自定义功能，但是需要用户有一定的动手能力。")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("由于我无法自己维护所有界面语言文件，因此最新版本的最新的界面语言文件可能不会和"),n("code",[t._v("CopyTranslator")]),t._v("一同发布（除了"),n("code",[t._v("en")]),t._v("和"),n("code",[t._v("zh-cn")]),t._v("）。现在，您可以下载本仓库目录"),n("a",{attrs:{href:"https://github.com/CopyTranslator/CopyTranslator/tree/phoenix/dist_locales",target:"_blank",rel:"noopener noreferrer"}},[t._v("dist_locales"),n("OutboundLink")],1),t._v("下的语言文件 "),n("code",[t._v("{locale}.json")]),t._v("，并将其放在"),n("code",[t._v("{userDir}/copytranslator/locales")]),t._v("下面，"),n("code",[t._v("CopyTranslator")]),t._v("将在启动时检测它们，然后您可以在设置面板上选择它们。、")]),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("您可以通过修改"),n("code",[t._v(t._s(t.userDir)+"/copytranslator/styles.css")]),t._v("文件来自定义"),n("code",[t._v("CopyTranslator")]),t._v("的界面风格，样式。")]),t._v(" "),n("p",[t._v("可以修改的属性包括但不限于：字体，颜色，背景，边框。")]),t._v(" "),n("p",[t._v("可以自定义的部分包括但不限于：两大模式的结果框，设置框，状态栏的样式。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("CSS文件的编写可以参考"),n("a",{attrs:{href:"https://www.html.cn/book/css/all-properties.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML中文网"),n("OutboundLink")],1),t._v("。欢迎大家分享自己编写的"),n("code",[t._v("style.css")]),t._v("文件。")])]),t._v(" "),t._m(5),t._v(" "),n("p",[t._v("以下是目前所有可用动作的列表。动作系统统一了界面设置，菜单设置，按钮等等。")]),t._v(" "),t._m(6),t._m(7),t._v(" "),n("p",[t._v("对于大多数"),n("a",{attrs:{href:"#%E5%8A%A8%E4%BD%9C%E7%B3%BB%E7%BB%9F"}},[t._v("动作")]),t._v("，您可以通过修改"),n("code",[t._v(t._s(t.userDir)+"/copytranslator/shortcut.json")]),t._v("来绑定全局快捷键。")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),n("p",[t._v("以下为一个例子")]),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),n("p",[t._v("所有可用的快捷键，请查看"),n("a",{attrs:{href:"https://electronjs.org/docs/api/accelerator",target:"_blank",rel:"noopener noreferrer"}},[t._v("Electron Accelerator"),n("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(13),t._v(" "),n("p",[t._v("当然！您可以自定义"),n("code",[t._v("CopyTranslator")]),t._v("的上下文菜单。只要改变"),n("code",[t._v(t._s(t.userDir)+"/copytranslator/copytranslator.json")]),t._v("中的"),n("code",[t._v("contrastMenu")]),t._v("，"),n("code",[t._v("focusMenu")]),t._v("，"),n("code",[t._v("trayMenu")]),t._v("的值;所有"),n("a",{attrs:{href:"#%E5%8A%A8%E4%BD%9C%E7%B3%BB%E7%BB%9F"}},[t._v("动作")]),t._v("几乎都可以用作菜单项。")]),t._v(" "),t._m(14),n("Valine")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"进阶教程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进阶教程","aria-hidden":"true"}},[this._v("#")]),this._v(" 进阶教程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"自定义界面语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义界面语言","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义界面语言")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"自定义界面样式-风格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义界面样式-风格","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义界面样式/风格")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("参考文件中的注释，您可以更改"),s("code",[this._v("CopyTranslator")]),this._v("的部分外观。以下是一个例子。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".focusText")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*modify the style of the focus result textarea*/")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Monaco"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*设置专注模式的字体为 Monaco*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".contrastText")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*modify the style of the contrast src and result textarea*/")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".contrast")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*modify the style of the contrast mode panel*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".statusBar")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"动作系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动作系统","aria-hidden":"true"}},[this._v("#")]),this._v(" 动作系统")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[t._v("//下面是切换选项的动作\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"switchActions"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"autoCopy"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"autoPaste"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"autoFormat"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tapCopy"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"detectLanguage"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"incrementalCopy"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"autoHide"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"autoShow"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stayTop"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"listenClipboard"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"translatorType"')]),t._v("//|"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("|"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("|"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" change translator，"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" means Google"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" means Youdao"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" means Baidu\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hideDirect"')]),t._v("//|"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("|"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("|"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("|"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("|"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" //set the hide direction when double click on status bar. "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("-"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" means Up"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("None"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Minify.\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n//以下是做一个特定的事的动作\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"normalAction"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copySource"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copyResult"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clear"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"focusMode"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"contrastMode"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"settings"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"helpAndUpdate"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exit"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"retryTranslate"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n//以下是Electron 原生角色\n\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"roles"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"undo"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"redo"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cut"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copy"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paste"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pasteAndMatchStyle"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"selectAll"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"delete"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"minimize"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"close"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"quit"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"reload"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forcereload"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"toggledevtools"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"toggleFullScreen"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resetzoom"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zoomin"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zoomout"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"editMenu"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"windowMenu"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"自定义全局快捷键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义全局快捷键","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义全局快捷键")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),s("p",[this._v("当快捷键已被其他应用程序占用时，绑定将失败。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("每条记录的形式为："),s("code",[this._v("action:accelerator")]),this._v("。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"listenClipboard"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CommandOrControl+J"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"translatorType|0"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CommandOrControl+T"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("它将切换监听剪贴板的动作绑定到快捷键"),s("code",[this._v("CommandOrControl+J")]),this._v("。并将切换为Google翻译器的操作绑定到快捷键"),s("code",[this._v("CommandOrControl+T")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("对于所有可用操作，请参看 "),s("a",{attrs:{href:"#%E5%8A%A8%E4%BD%9C%E7%B3%BB%E7%BB%9F"}},[this._v("动作")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"自定义右键菜单-面板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义右键菜单-面板","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义右键菜单/面板")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contrastMenu"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copySource"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copyResult"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clear"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"retryTranslate"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"focusMode"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"settings"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exit"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"focusMenu"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copySource"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copyResult"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clear"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"retryTranslate"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"contrastMode"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"settings"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exit"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"trayMenu"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"translatorType"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copySource"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copyResult"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clear"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"retryTranslate"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"contrastMode"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"focusMode"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"settings"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"helpAndUpdate"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exit"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])}],!1,null,null,null);s.default=r.exports}}]);