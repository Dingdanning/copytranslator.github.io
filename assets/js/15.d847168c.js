(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{205:function(t,v,_){"use strict";_.r(v);var r=_(0),o=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"v0-0-6"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v0-0-6","aria-hidden":"true"}},[t._v("#")]),t._v(" v0.0.6")]),t._v(" "),_("h2",{attrs:{id:"v0-0-6-1"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v0-0-6-1","aria-hidden":"true"}},[t._v("#")]),t._v(" v0.0.6.1")]),t._v(" "),_("ol",[_("li",[t._v("修复了v0.0.6.0的无法手动翻译bug")]),t._v(" "),_("li",[t._v("现在专注模式的结果框的状态栏颜色会指示其状态，根据你的设置会变换颜色。提示你当前是否监听剪贴板，或者现在正在请求服务器翻译等等。具体颜色自行体验。"),_("strong",[t._v("暂时不能自己设置颜色")]),t._v("。")])]),t._v(" "),_("h2",{attrs:{id:"v0-0-6-0"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v0-0-6-0","aria-hidden":"true"}},[t._v("#")]),t._v(" v0.0.6.0")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://github.com/elliottzheng/CopyTranslator/wiki/Downloads-%E4%B8%8B%E8%BD%BD%E4%B8%8E%E5%AE%89%E8%A3%85",target:"_blank",rel:"noopener noreferrer"}},[t._v("点此下载"),_("OutboundLink")],1)]),t._v(" "),_("ol",[_("li",[_("p",[_("strong",[t._v("智能互译")]),t._v("，"),_("code",[t._v("CopyTranslator")]),t._v("会自动识别所复制的文字，根据所设置的"),_("code",[t._v("source")]),t._v("和"),_("code",[t._v("target")]),t._v("进行自动智能互译，也就是说，如果您复制的是"),_("code",[t._v("source")]),t._v("，会翻译为"),_("code",[t._v("target")]),t._v("，复制"),_("code",[t._v("target")]),t._v("则会翻译为"),_("code",[t._v("source")]),t._v("。（不用担心，"),_("code",[t._v("Auto Copy")]),t._v("不会与此机制相互影响。"),_("strong",[t._v("但是如果同时还打开了"),_("code",[t._v("Detect Language")]),t._v("智能互译不会生效，只会将您的原文翻译成target语言。")]),t._v("，"),_("strong",[t._v("注意，刚发现问题，由于检测语言会自动将"),_("code",[t._v("source")]),t._v("设置为目标语言，所以可能在接触检测语言后，source会发生改变，这个问题在下一版本会得到修复")]),t._v("详细解释见Q&A）")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("智能词典")]),t._v("（基于"),_("a",{attrs:{href:"https://github.com/longcw/youdao",target:"_blank",rel:"noopener noreferrer"}},[t._v("Youdao"),_("OutboundLink")],1),t._v("提供的API）")]),t._v(" "),_("p",[t._v("单词少于3的"),_("strong",[t._v("外语句子")]),t._v("将被视为短语或单词，您将在专注模式上看到更详细的解释。勾选"),_("code",[t._v("Smart Dict")]),t._v("选项以启用它。"),_("strong",[t._v("注：查词限于有Youdao支持的语言，但是您无需也无法手动选择语言。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://s1.ax1x.com/2018/09/26/iManhV.png",alt:"iManhV.png"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://s1.ax1x.com/2018/09/26/iMaM1U.png",alt:"iMaM1U.png"}})])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("快捷菜单")]),t._v("，通过专注模式结果框的右键菜单基本可以实现全部设置及快捷操作，无需返回主模式。注意这个clear会连剪贴板一起清空\n"),_("img",{attrs:{src:"https://s1.ax1x.com/2018/09/27/iQphkT.png",alt:"menu"}})])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("字体可调整大小")]),t._v("，使用"),_("code",[t._v("shift + F3")]),t._v("和"),_("code",[t._v("shift + F4")]),t._v("缩小或增大专注模式的字体大小")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://s1.ax1x.com/2018/09/26/iMaKpT.png",alt:"iMaKpT.png"}})])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("设置记忆")]),t._v("，您的设置将自动保存在磁盘中，并在下次启动时自动重新加载。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("增量复制")]),t._v(", 将复制的文本附加到原文而不是替换它，"),_("strong",[t._v("当段落在不同页面中分隔时尤其有用。用来解决一句话被页面断成两句，一次复制不全的场景")]),t._v("。勾选"),_("code",[t._v("Incremental Copy")]),t._v("选项以启用它。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("复制原文")]),t._v("，您可以通过任务栏图标的菜单点击"),_("code",[t._v("Copy Source")]),t._v("以在"),_("code",[t._v("Auto Copy")]),t._v("模式下暂时复制原文，而不是译文。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://s1.ax1x.com/2018/09/26/iMamt0.png",alt:"1537871871793"}})])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("降低灵敏度")]),t._v("，将点按复制的响应时间变为0.3秒。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("加入自动及检查更新的机制")]),t._v("，但仍需手动下载安装更新。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("现在主模式的关闭即为退出，不再像以前一样是最小化。")])])])])])}),[],!1,null,null,null);v.default=o.exports}}]);