(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{477:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"v2-0-3-2020-05-24-knife4j-2-0-3发布-支持springdoc和i18n"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v2-0-3-2020-05-24-knife4j-2-0-3发布-支持springdoc和i18n"}},[t._v("#")]),t._v(" [v2.0.3-2020/05/24 Knife4j 2.0.3发布,支持springdoc和i18n]")]),t._v(" "),s("p",[s("code",[t._v("Knife4j")]),t._v("前身是"),s("code",[t._v("swagger-bootstrap-ui")]),t._v(",是一个为Swagger接口文档赋能的工具")]),t._v(" "),s("p",[s("strong",[t._v("文档")]),t._v("："),s("a",{attrs:{href:"https://doc.xiaominfo.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://doc.xiaominfo.com"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("效果(旧版)")]),t._v("：http://swagger-bootstrap-ui.xiaominfo.com/doc.html")]),t._v(" "),s("p",[s("strong",[t._v("效果(2.X版)")]),t._v("："),s("a",{attrs:{href:"http://knife4j.xiaominfo.com/doc.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://knife4j.xiaominfo.com/doc.html"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("Gitee")]),t._v("：https://gitee.com/xiaoym/knife4j")]),t._v(" "),s("p",[s("strong",[t._v("GitHub")]),t._v("：https://github.com/xiaoymin/swagger-bootstrap-ui")]),t._v(" "),s("p",[s("strong",[t._v("示例")]),t._v("：https://gitee.com/xiaoym/swagger-bootstrap-ui-demo")]),t._v(" "),s("h2",{attrs:{id:"特性-优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特性-优化"}},[t._v("#")]),t._v(" 特性 & 优化")]),t._v(" "),s("h3",{attrs:{id:"knife4j"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#knife4j"}},[t._v("#")]),t._v(" knife4j")]),t._v(" "),s("p",[t._v("1、读取Markdown文件时,当文件不存在时日志错误信息简化打印,开发者可以忽略该错误"),s("a",{attrs:{href:"https://gitee.com/xiaoym/knife4j/issues/I1E1S1",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee #I1E1S1"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"knife4j-spring-ui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#knife4j-spring-ui"}},[t._v("#")]),t._v(" knife4j-spring-ui")]),t._v(" "),s("p",[t._v("1、移除Vue中的pwa机制,解决service-work.js引起的各种问题"),s("a",{attrs:{href:"https://github.com/xiaoymin/swagger-bootstrap-ui/issues/206",target:"_blank",rel:"noopener noreferrer"}},[t._v("github #206"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("2、支持UiConfiguration中方法调试的配置,如并未配置任何支持的方法,在ui界面中不会出现调试栏Tab，代码如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UiConfiguration")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uiConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UiConfigurationBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("builder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("supportedSubmitMethods")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("界面中的显示效果如下(仅显示文档)：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/debug-1.png",alt:""}})]),t._v(" "),s("p",[t._v("3、GET请求出现参数未填的情况下发送Null的bug"),s("a",{attrs:{href:"https://gitee.com/xiaoym/knife4j/issues/I1BG4O",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee #I1BG4O"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://github.com/xiaoymin/swagger-bootstrap-ui/issues/213",target:"_blank",rel:"noopener noreferrer"}},[t._v("github #213"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("4、针对开发者在调试时更改接口地址,在接口地址中添加参数的情况,出现发送请求失败的bug"),s("a",{attrs:{href:"https://gitee.com/xiaoym/knife4j/issues/I1C5OQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee #I1C5OQ"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("5、解决集成文档时各种basePath问题导致Ui的logo不显示的问题,通过Base64将logo图片转换处理,"),s("code",[t._v("img")]),t._v("标签直接显示base64字符串"),s("a",{attrs:{href:"https://gitee.com/xiaoym/knife4j/issues/I1CQ1F",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee #1CQ1F "),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("6、左侧菜单栏在收缩状态下显示版本控制的标识导致菜单异常的问题,在收缩状态下禁用该项"),s("a",{attrs:{href:"https://gitee.com/xiaoym/knife4j/issues/I1CCXT",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee #I1CCXT"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://gitee.com/xiaoym/knife4j/issues/I1DBDF",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee #I1DBDF"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("7、增强功能忽略参数不完全的问题"),s("a",{attrs:{href:"https://gitee.com/xiaoym/knife4j/pulls/18",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee PR#18"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("8、服务端在没有Write任何数据的情况下,针对非200状态码不显示状态的异常问题"),s("a",{attrs:{href:"https://gitee.com/xiaoym/knife4j/issues/I1BKRH",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee #I1BKRH"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("9、针对raw类型的请求接口类型,全局参数中只能是header参数的问题,支持query类型的全局参数"),s("a",{attrs:{href:"https://gitee.com/xiaoym/knife4j/issues/I1C86F",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee #I1C86F"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("10、增加对Xml请求的适配支持,服务端"),s("code",[t._v("consumes")]),t._v("属性设为"),s("code",[t._v("application/xml")]),t._v("接口"),s("a",{attrs:{href:"https://gitee.com/xiaoym/knife4j/issues/I1BCKB",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee #I1BCKB"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/xml.png",alt:""}})]),t._v(" "),s("p",[t._v("11、增加"),s("code",[t._v("@ApiSupport")]),t._v("注解，分组Controller下可以设置全局author属性，或者order排序属性")]),t._v(" "),s("p",[t._v("12、剔除webjar文件中的"),s("code",[t._v("favicon.ico")]),t._v("文件,以避免和主项目产生冲突"),s("a",{attrs:{href:"https://gitee.com/xiaoym/knife4j/issues/I1ELHN",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee #I1ELHN"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://github.com/xiaoymin/swagger-bootstrap-ui/issues/215",target:"_blank",rel:"noopener noreferrer"}},[t._v("github #215"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("13、新增"),s("code",[t._v("includeParameters")]),t._v("属性,开发者可以在文档的参数中新增一种选择,该特性是和"),s("code",[t._v("ignoreParameters")]),t._v("对立,具体可以参考"),s("a",{attrs:{href:"https://doc.xiaominfo.com/knife4j/includeParameter.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("14、优化在editor编辑器中的属性字段显示效果"),s("a",{attrs:{href:"https://gitee.com/xiaoym/knife4j/issues/I1G3G9",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee #I1G3G9"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("15、导出的Html、Markdown离线文件添加作者属性"),s("a",{attrs:{href:"https://gitee.com/xiaoym/knife4j/issues/I1EXXO",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee #I1EXXO"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("16、在Ui的全局参数配置中添加Header类型的请求参数后,非空情况下会自动合并每个接口的Header请求参数,接口中的Header如果和全局参数配置中的Header同名但是为空的情况下,Ui会使用全局参数配置中的Header参数"),s("a",{attrs:{href:"https://gitee.com/xiaoym/knife4j/issues/I1GD87",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee #I1GD87"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("17、优化请求数据类型的显示问题,Ui自动根据参数的类型识别出当前接口的请求类型并进行展示,解决springfox等框架始终解析为json请求的bug"),s("a",{attrs:{href:"https://gitee.com/xiaoym/knife4j/issues/I1EMJ9",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee #I1EMJ9"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://gitee.com/xiaoym/knife4j/issues/I1903T",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee #I1903T"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("18、修复请求头Content-Type在调试时被忽略的问题,该问题具体参考"),s("a",{attrs:{href:"https://gitee.com/xiaoym/knife4j/issues/I18HGS",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee #I18HGS"),s("OutboundLink")],1),t._v(",knife4j在2.x版本使用的是axios组件,axios针对发送的请求头data属性如果没有传递的情况下会忽略Content-Type请求头,具体可参考"),s("a",{attrs:{href:"https://github.com/axios/axios/issues/86",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/axios/axios/issues/86"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("19、添加I18n的支持,目前支持的语言：中文、English")]),t._v(" "),s("p",[t._v("20、请求头携带Cookie的情况,如果要使用Cookie,请求头的名称请确保为"),s("code",[t._v("Cookie")]),t._v(",不能有小写或其他.")]),t._v(" "),s("p",[t._v("21、添加对springdoc框架的集成支持，非常感谢"),s("a",{attrs:{href:"https://gitee.com/teddygong",target:"_blank",rel:"noopener noreferrer"}},[t._v("teddygong"),s("OutboundLink")],1),t._v("提交的PR")]),t._v(" "),s("p",[t._v("如果你后端是Java+Spring的技术栈，在使用springfox的同时，想换一个Swagger的Ui皮肤，通过在pom.xml中直接引入即可,如下：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.github.xiaoymin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("knife4j-spring-ui"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.0.3"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("后端渲染OpenAPI的解析框架是springdoc，则添加如下依赖引用：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.github.xiaoymin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("knife4j-springdoc-ui"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.0.3"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"knife4j-spring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#knife4j-spring"}},[t._v("#")]),t._v(" Knife4j-Spring")]),t._v(" "),s("p",[t._v("使用Spring Boot的技术栈可以通过引用starter的方式快速引入使用,注意该starter组件是包含Ui的,如下：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.github.xiaoymin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("knife4j-spring-boot-starter"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.0.3"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("如果是微服务的情况下,微服务其实不需要引用Ui的jar包，只需要在网关引用Ui的jar包依赖,所以在微服务情况下,使用增强属性只需要引用微服务版本的starter依赖,如下：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.github.xiaoymin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("knife4j-micro-spring-boot-starter"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.0.3"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),s("h3",{attrs:{id:"knife4j-admin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#knife4j-admin"}},[t._v("#")]),t._v(" Knife4j-Admin")]),t._v(" "),s("p",[s("code",[t._v("knife4j-admin")]),t._v("是一个基于Spring Cloud Gateway网关,通过网关的特性,结合"),s("code",[t._v("knife4j")]),t._v("对Swagger的文档进行动态聚合的管理平台")]),t._v(" "),s("p",[t._v("平台特点：")]),t._v(" "),s("ul",[s("li",[t._v("跨语言、跨平台")]),t._v(" "),s("li",[t._v("任意聚合Swagger文档,动态发布,调试")]),t._v(" "),s("li",[t._v("文档个性化配置、权限等")]),t._v(" "),s("li",[t._v("彻底告别聚合网关文档等由于软件版本等造成的技术集成问题")]),t._v(" "),s("li",[t._v("独立部署")])]),t._v(" "),s("p",[t._v("如果你有以上的需求的话,可以考虑使用一下knife4j-admin这个产品，产品文档点"),s("a",{attrs:{href:"https://doc.xiaominfo.com/solution/admin.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),s("ul",[s("li",[t._v("基于Vue+Ant Design构建的文档，更强大、清晰的接口文档说明能力以及接口调试能力")]),t._v(" "),s("li",[t._v("左右布局,基于Tabs组件的多文档查阅风格")]),t._v(" "),s("li",[t._v("支持在线导出Html、Markdown、Word、PDF等多种格式的离线文档")]),t._v(" "),s("li",[t._v("接口排序,支持分组及接口的排序功能")]),t._v(" "),s("li",[t._v("支持接口全局在线搜索功能")]),t._v(" "),s("li",[t._v("提供Swagger资源保护策略,保护文档安全")]),t._v(" "),s("li",[t._v("接口调试支持无限参数,开发者调试非常灵活，动态增加、删除参数")]),t._v(" "),s("li",[t._v("全局缓存调试信息,页面刷新后依然存在,方便开发者调试")]),t._v(" "),s("li",[t._v("以更人性化的table树组件展示Swagger Models功能")]),t._v(" "),s("li",[t._v("文档以多tab方式可显示多个接口文档")]),t._v(" "),s("li",[t._v("请求参数栏请求类型、是否必填着颜色区分")]),t._v(" "),s("li",[t._v("主页中粗略统计接口不同类型数量")]),t._v(" "),s("li",[t._v("支持自定义全局参数功能，主页包括header及query两种类型")]),t._v(" "),s("li",[t._v("JSR-303 annotations 注解的支持")]),t._v(" "),s("li",[t._v("更多个性化设置功能")])]),t._v(" "),s("h2",{attrs:{id:"界面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#界面"}},[t._v("#")]),t._v(" 界面")]),t._v(" "),s("p",[t._v("接口文档显示界面如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/blog/knife4j2.0.2/1.png",alt:""}})]),t._v(" "),s("p",[t._v("接口调试界面如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/blog/knife4j2.0.2/8.png",alt:""}})]),t._v(" "),s("p",[t._v("Swagger Models功能")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/blog/knife4j2.0.2/6.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/blog/knife4j2.0.2/7.png",alt:""}})]),t._v(" "),s("p",[t._v("支持导出离线Markdown、Html功能，markdown的表格较原先版本通过缩减显示为树形结构,"),s("a",{attrs:{href:"https://doc.xiaominfo.com/html/knife4j-export-html.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击预览导出离线Html效果"),s("OutboundLink")],1),t._v("，效果图如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/blog/knife4j2.0.2/3.png",alt:""}})]),t._v(" "),s("p",[t._v("通过第三方Markdown软件导出的PDF效果如下图:")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/blog/knife4j2.0.2/4.png",alt:""}})]),t._v(" "),s("p",[t._v("同时提供了导出离线Html功能,Html功能界面风格和在线几乎没有区别,美观、大方、简洁,"),s("a",{attrs:{href:"https://doc.xiaominfo.com/Knife4j-Offline-Html.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击在线预览效果"),s("OutboundLink")],1),t._v("，")]),t._v(" "),s("p",[t._v("界面效果如下图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/blog/knife4j2.0.2/5.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"star-issue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#star-issue"}},[t._v("#")]),t._v(" Star & Issue")]),t._v(" "),s("p",[t._v("感谢各位朋友的支持,前往"),s("a",{attrs:{href:"https://gitee.com/xiaoym/knife4j",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/xiaoym/knife4j"),s("OutboundLink")],1),t._v("点个Star吧~~ ：）")]),t._v(" "),s("comment-comment")],1)}),[],!1,null,null,null);a.default=n.exports}}]);