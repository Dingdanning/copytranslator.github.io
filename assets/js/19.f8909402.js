(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{170:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("ul",[t._m(2),t._v(" "),a("li",[t._v("dist_locales: the locale files")]),t._v(" "),a("li",[t._v("src\n"),a("ul",[a("li",[t._v("core: anything about translation and string process")]),t._v(" "),a("li",[t._v("tools: anything")]),t._v(" "),a("li",[t._v("views: vue view")]),t._v(" "),a("li",[t._v("components: vue components")]),t._v(" "),a("li",[t._v("docs: source of documentation "),a("a",{attrs:{href:"https://copytranslator.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("copytranslator.github.io"),a("OutboundLink")],1)])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("Using my own l10n module, for memory saving purpose.")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("If you want to add a new locale, follow the instructions below.")]),t._v(" "),a("blockquote",[a("p",[t._v("view "),a("code",[t._v("json")]),t._v(" files under "),a("code",[t._v("dist_locales")]),t._v(" to see the format of the locale file, fork the repo and add a new "),a("code",[t._v(t._s(t.locale)+".json")]),t._v(" file under the directory, and create a pull request.")])]),t._v(" "),a("p",[t._v("Welcome to join the "),a("code",[t._v("gitter")]),t._v(" chat room at "),a("a",{attrs:{href:"https://gitter.im/CopyTranslator/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(", so you can get notified before new version release. You can create a pull request at any time as "),a("strong",[t._v("the out of date locale file won't cause any error")]),t._v(", the program will go back to English for the missing words.")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("As I can't maintain all the locales myself, so the latest locales(except "),a("code",[t._v("en")]),t._v(" and "),a("code",[t._v("zh-cn")]),t._v(") may not be released with the new version of "),a("code",[t._v("CopyTranslator")]),t._v(". For now, you can download the latest "),a("code",[t._v(t._s(t.locale)+".json")]),t._v(" file from "),a("code",[t._v("dist_locales")]),t._v(", and place it under "),a("code",[t._v(t._s(t.userDir)+"/copytranslator/locales")]),t._v("，"),a("code",[t._v("CopyTranslator")]),t._v(" will detect them on startup, then you can choose them on settings panel.")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("In main process")]),t._v(" "),t._m(11),a("p",[t._v("In render process")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("In vue.config.js")]),t._v(" "),t._m(16),a("p",[t._v("In main process")]),t._v(" "),t._m(17),a("p",[t._v("You need to first install the application once for further develop.")]),t._v(" "),t._m(18),t._v(" "),a("p",[t._v("Make sure you are Elliott Zheng")]),t._v(" "),t._m(19)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"参与贡献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参与贡献","aria-hidden":"true"}},[this._v("#")]),this._v(" 参与贡献")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"project-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-structure","aria-hidden":"true"}},[this._v("#")]),this._v(" Project structure")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("dist_electron: the output of "),s("code",[this._v("npm run electron:build")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"build-from-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-from-source","aria-hidden":"true"}},[this._v("#")]),this._v(" Build from source")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You need to install "),s("code",[this._v("node-gyp")]),this._v(" and "),s("code",[this._v("windows-build-tools")]),this._v("(for windows users) globally first.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --recursive https://github.com/copytranslator/CopyTranslator.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" CopyTranslator\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run rebuild\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run electron:build \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"locale-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#locale-settings","aria-hidden":"true"}},[this._v("#")]),this._v(" Locale settings")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"for-locale-maintainers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for-locale-maintainers","aria-hidden":"true"}},[this._v("#")]),this._v(" For locale maintainers")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"for-normal-users"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for-normal-users","aria-hidden":"true"}},[this._v("#")]),this._v(" For normal users")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#components","aria-hidden":"true"}},[this._v("#")]),this._v(" Components")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"browserwindow-control-system"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#browserwindow-control-system","aria-hidden":"true"}},[this._v("#")]),this._v(" BrowserWindow Control System")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" windowController "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../tools/windowController"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindowController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("dblclick")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("minify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("mousedown")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bindDrag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" WindowController "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./WindowController"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mixins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("WindowController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"context-menu-system"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#context-menu-system","aria-hidden":"true"}},[this._v("#")]),this._v(" Context menu system")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("For both focus mode, contrast mode, and tray, we generate menu on real time. they share the same "),s("code",[this._v("BaseMenu")]),this._v(" object, but the content of the menu can be different according to the context.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"notification-on-windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notification-on-windows","aria-hidden":"true"}},[this._v("#")]),this._v(" Notification on Windows")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("builderOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  appId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.copytranslator.copytranslator"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAppUserModelId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.copytranslator.copytranslator"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"publish-documentation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#publish-documentation","aria-hidden":"true"}},[this._v("#")]),this._v(" Publish Documentation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" run docs:build\n"),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" run docs:deploy\n")])])])}],!1,null,null,null);s.default=n.exports}}]);