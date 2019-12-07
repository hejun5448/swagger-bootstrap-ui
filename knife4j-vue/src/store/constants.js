/***
 * knife4j常量
 */
const constants = {
  //全局离线参数
  globalParameter: "Knife4jOfficeParameter",
  //全局离线参数表头
  globalParameterTableColumns: [{
      title: "参数名称",
      dataIndex: "name",
      width: "20%",
      scopedSlots: {
        customRender: "name"
      }
    },
    {
      title: "参数值",
      className: "column-money",
      dataIndex: "value",
      width: "40%"
    },
    {
      title: "参数类型",
      dataIndex: "in",
      width: "20%"
    },
    {
      title: "操作",
      dataIndex: "operation",
      scopedSlots: {
        customRender: "operation"
      }
    }
  ],
  globalSecurityParamPrefix: "Knife4jSecurityParams",
  //个性化设置名称
  globalSettingsKey: "Knife4jGlobalSettings",
  defaultSettings: {
    showApiUrl: false, //接口api地址不显示
    showTagStatus: false, //分组tag显示description属性,针对@Api注解没有tags属性值的情况
    enableSwaggerBootstrapUi: false, //是否开启swaggerBootstrapUi增强
    treeExplain: true,
    enableFilterMultipartApis: false, //针对RequestMapping的接口请求类型,在不指定参数类型的情况下,如果不过滤,默认会显示7个类型的接口地址参数,如果开启此配置,默认展示一个Post类型的接口地址
    enableFilterMultipartApiMethodType: "POST", //默认保存类型
    enableRequestCache: true, //是否开启请求参数缓存
    enableCacheOpenApiTable: false, //是否开启缓存已打开的api文档
    language: "zh" //默认语言版本
  },
  debugRequestHeaders: ["Accept",
    "Accept-Charset",
    "Accept-Encoding",
    "Accept-Language",
    "Accept-Ranges",
    "Authorization",
    "Cache-Control",
    "Connection",
    "Cookie",
    "Content-Length",
    "Content-Type",
    "Content-MD5",
    "Date",
    "Expect",
    "From",
    "Host",
    "If-Match",
    "If-Modified-Since",
    "If-None-Match",
    "If-Range",
    "If-Unmodified-Since",
    "Max-Forwards",
    "Origin",
    "Pragma",
    "Proxy-Authorization",
    "Range",
    "Referer",
    "TE",
    "Upgrade",
    "User-Agent",
    "Via",
    "Warning"
  ],
  debugRequestHeaderOptions: [{
      value: "Accept",
      label: "Accept"
    },
    {
      value: "Accept-Charset",
      label: "Accept-Charset"
    },
    {
      value: "Accept-Encoding",
      label: "Accept-Encoding"
    },
    {
      value: "Accept-Language",
      label: "Accept-Language"
    },
    {
      value: "Accept-Ranges",
      label: "Accept-Ranges"
    },
    {
      value: "Authorization",
      label: "Authorization"
    },
    {
      value: "Cache-Control",
      label: "Cache-Control"
    },
    {
      value: "Connection",
      label: "Connection"
    },
    {
      value: "Cookie",
      label: "Cookie"
    },
    {
      value: "Content-Length",
      label: "Content-Length"
    },
    {
      value: "Content-Type",
      label: "Content-Type"
    },
    {
      value: "Content-MD5",
      label: "Content-MD5"
    },
    {
      value: "Date",
      label: "Date"
    },
    {
      value: "Expect",
      label: "Expect"
    },
    {
      value: "From",
      label: "From"
    },
    {
      value: "Host",
      label: "Host"
    },
    {
      value: "If-Match",
      label: "If-Match"
    },
    {
      value: "If-Modified-Since",
      label: "If-Modified-Since"
    },
    {
      value: "If-None-Match",
      label: "If-None-Match"
    },
    {
      value: "If-Range",
      label: "If-Range"
    },
    {
      value: "If-Unmodified-Since",
      label: "If-Unmodified-Since"
    },
    {
      value: "Max-Forwards",
      label: "Max-Forwards"
    },
    {
      value: "Origin",
      label: "Origin"
    },
    {
      value: "Pragma",
      label: "Pragma"
    },
    {
      value: "Proxy-Authorization",
      label: "Proxy-Authorization"
    },
    {
      value: "Range",
      label: "Range"
    },
    {
      value: "Referer",
      label: "Referer"
    },
    {
      value: "TE",
      label: "TE"
    },
    {
      value: "Upgrade",
      label: "Upgrade"
    },
    {
      value: "User-Agent",
      label: "User-Agent"
    },
    {
      value: "Via",
      label: "Via"
    },
    {
      value: "Warning",
      label: "Warning"
    }
  ],
  debugRequestHeaderColumn: [{
      title: "请求头",
      dataIndex: "name",
      width: "20%",
      scopedSlots: {
        customRender: "headerName"
      }
    },
    {
      title: "内容",
      dataIndex: "content",
      scopedSlots: {
        customRender: "headerValue"
      }
    },
    {
      title: "操作",
      dataIndex: "operation",
      width: "10%",
      scopedSlots: {
        customRender: "operation"
      }
    }
  ],
  debugFormRequestHeader: [{
      title: "参数名称",
      dataIndex: "name",
      width: "20%",
      scopedSlots: {
        customRender: "formName"
      }
    },
    {
      title: "类型",
      dataIndex: "type",
      width: "12%",
      scopedSlots: {
        customRender: "formType"
      }
    },
    {
      title: "参数值",
      dataIndex: "content",
      scopedSlots: {
        customRender: "formValue"
      }
    },
    {
      title: "操作",
      dataIndex: "operation",
      width: "10%",
      scopedSlots: {
        customRender: "operation"
      }
    }
  ],
  debugUrlFormRequestHeader: [{
      title: "参数名称",
      dataIndex: "name",
      width: "20%",
      scopedSlots: {
        customRender: "urlFormName"
      }
    },
    {
      title: "参数值",
      dataIndex: "content",
      scopedSlots: {
        customRender: "urlFormValue"
      }
    },
    {
      title: "操作",
      dataIndex: "operation",
      width: "10%",
      scopedSlots: {
        customRender: "operation"
      }
    }
  ],
  i18n: {
    zh: {
      title: "swagger-bootstrap-ui-前后端api接口文档",
      markdown: {
        title: "其他文档"
      },
      message: {
        success: "保存成功",
        unsupportstore: "当前浏览器不支持localStorage对象,无法使用该功能",
        copy: {
          success: "复制成功",
          fail: "复制失败,您当前浏览器版本不兼容,请手动复制."
        },
        layer: {
          title: "信息",
          yes: "确定",
          no: "取消"
        },
        auth: {
          invalid: "值无效",
          confirm: "确定注销吗?",
          success: "注销成功"
        },
        global: {
          iptname: "请输入全局参数名称",
          iptvalue: "请输入全局参数值",
          deleteSuccess: "删除成功"
        },
        settings: {
          plusFail: "无法开启Knife4j增强功能,请确保后端启用注解@EnableKnife4j",
          plusError: "无法开启Knife4j增强功能,错误原因:",
          success: "保存成功,请刷新该文档页"
        },
        offline: {
          copy: "拷贝文档",
          toomany: "当前接口数量超出限制,请使用第三方markdown转换软件进行转换以查看效果.",
          note: "swagger-bootstrap-ui 提供markdwon格式类型的离线文档,开发者可拷贝该内容通过其他markdown转换工具进行转换为html或pdf."
        },
        debug: {
          urlNotEmpty: "请求url地址不能为空",
          fieldNotEmpty: "不能为空",
          networkErr: "服务器正在重启或者已经挂了:(~~~~"
        },
        sys: {
          loadErr: "请确保swagger资源接口正确."
        }
      },
      home: {
        des: "简介",
        author: "作者",
        version: "版本",
        serviceUrl: "服务Url",
        groupName: "分组名称",
        groupUrl: "分组url",
        groupLocation: "分组Location",
        apiCount: "接口统计信息",
        searchText: "请输入搜索内容"
      },
      swaggerModel: {
        nodata: "暂无Swagger Models",
        tableHeader: {
          name: "名称",
          des: "说明",
          type: "类型"
        }
      },
      global: {
        tab: "全局参数设置",
        add: "添加参数",
        tableHeader: {
          name: "参数名称",
          value: "参数值",
          type: "参数类型",
          operator: "操作"
        },
        save: "保存",
        delete: "删除",
        note: "swagger-bootstrap-ui 提供全局参数Debug功能,目前默认提供header(请求头)、query(form)两种方式的入参.<br /><br />在此添加全局参数后,默认Debug调试tab页会带上该参数,该全局参数只在该分组下有效,不同的分组需要分别设置"

      },
      settings: {
        title: "个性化设置",
        openCache: "开启请求参数缓存",
        showApi: "菜单Api地址显示",
        tagDes: "分组tag显示dsecription说明属性",
        apiFilter: "开启RequestMapping接口过滤,默认只显示",
        openCacheApi: "开启缓存已打开的api文档",
        plus: "启用Knife4j提供的增强功能",
        save: "保存内容",
        copy: "复制",
        fastTitle: "<h5>通过 <kbd>ctrl + c</kbd> 复制以下地址,打开浏览器快速个性化设置</h5>"
      },
      auth: {
        cancel: "注销",
        save: "保存",
        tableHeader: {
          key: "参数key",
          name: "参数名称",
          in: "in",
          value: "参数值",
          operator: "操作"
        },
        valueInvalid: "值无效"
      },
      menu: {
        home: "主页",
        manager: "文档管理",
        globalsettings: "全局参数设置",
        officeline: "离线文档(MD)",
        selfSettings: "个性化设置"
      },
      offline: {
        des: "简介",
        contact: "联系人",
        url: "接口路径",
        note: "简介",
        schemaDes: "schema属性说明"
      },
      doc: {
        title: "文档",
        note: "接口说明",
        copy: "复制文档",
        copyHash: "复制地址",
        author: "开发者",
        url: "接口地址",
        method: "请求方式",
        des: "接口描述",
        params: "请求参数",
        requestExample: "请求示例",
        paramsHeader: {
          name: "参数名称",
          des: "参数说明",
          require: "是否必须",
          type: "数据类型",
          requestType: "请求类型"

        },
        responseHeaderParams: "响应Header",
        response: "响应状态",
        responseHeader: {
          code: "状态码",
          des: "说明"

        },
        responseParams: "响应参数",
        responseParamsHeader: {
          name: "参数名称",
          des: "参数说明",
          type: "类型"
        },
        responseExample: "响应示例",
        nodata: "暂无"

      },
      debug: {
        title: "调试",
        send: " 发 送 ",
        params: "请求参数列表",
        tableHeader: {
          selectAll: "全选",
          type: "参数类型",
          name: "参数名称",
          value: "参数值"
        },
        response: {
          content: "响应内容",
          showDes: "显示说明",
          code: "响应码",
          cost: "耗时",
          size: "大小",
          header: "请求头",
          download: "下载文件"
        }

      },
      tab: {
        closeCurrent: "关闭当前标签页",
        closeOther: "关闭其它标签页",
        closeAll: "关闭全部标签页"
      }

    },
    en: {
      title: "swagger-bootstrap-ui RESTful Api Docs",
      markdown: {
        title: "Other Document"
      },
      message: {
        success: "Save successfully",
        unsupportstore: "Current browsers do not support localStorage objects and cannot use this feature",
        copy: {
          success: "Copy Success",
          fail: "Copy failed. Your current browser version is incompatible. Please copy manually."
        },
        layer: {
          title: "message",
          yes: "Yes",
          no: "No"
        },
        auth: {
          invalid: "Invalid value",
          confirm: "Are you sure you want to logout?",
          success: "Logout Success"
        },
        global: {
          iptname: "Please enter the global parameter name",
          iptvalue: "Please enter the global parameter value",
          deleteSuccess: "Delete Success"
        },
        settings: {
          plusFail: "Knife4j enhancements cannot be turned on. Make sure that the annotation @EnableKnife4j is enabled on the back end",
          plusError: "Unable to turn on Swagger BootstrapUi Enhancement, Error Cause:",
          success: "Save successfully, please refresh the document page"
        },
        offline: {
          copy: "Copy",
          toomany: "The current number of interfaces exceeds the limit. Please use the third-party markdown conversion software for conversion to see the effect.",
          note: "swagger-bootstrap-ui provides markdwon-formatted offline documents that developers can copy and convert to HTML or PDF through other markdown conversion tools.."
        },
        debug: {
          urlNotEmpty: "Request URL address cannot be empty",
          fieldNotEmpty: "cannot be empty",
          networkErr: "The server is restarting or hanging up:(~~~~"
        },
        sys: {
          loadErr: "Make sure the swagger resource interface is correct."
        }
      },
      home: {
        des: "Description",
        author: "Author",
        version: "Version",
        serviceUrl: "serviceUrl",
        groupName: "Group Name",
        groupUrl: "Group url",
        groupLocation: "Group Location",
        apiCount: "Api Counts",
        searchText: "Search..."
      },
      swaggerModel: {
        nodata: "No Swagger Models",
        tableHeader: {
          name: "name",
          des: "description",
          type: "type"
        }
      },
      global: {
        tab: "Global Parameter Settings",
        add: "Add",
        tableHeader: {
          name: "name",
          value: "value",
          type: "type",
          operator: "operate"
        },
        save: "Save",
        delete: "Delete",
        note: "swagger-bootstrap-ui Provide global parameter Debug function, currently default to provide header (request header), query (form) two ways of entry.<br /><br />After adding the global parameter here, the default Debug debug tab page will take this parameter, which is valid only under this group, and different groups need to be set separately."

      },
      settings: {
        title: "Personalized Settings",
        openCache: "Enable request parameter cache",
        showApi: "Enable Menu Api Address Display",
        tagDes: "Enable Grouping tag displays dsecription description properties",
        apiFilter: "Open RequestMapping Interface Filtering,Default",
        openCacheApi: "Enable Open cached open API documents",
        plus: "Enabling enhancements provided by Swagger BootstrapUi",
        save: "Save",
        copy: "copy",
        fastTitle: "<h5>Copy the following address through <kbd>ctrl + c</kbd> to open the browser's quick personalization settings</h5>"
      },
      auth: {
        cancel: "Logout",
        save: "Save",
        tableHeader: {
          key: "key",
          name: "name",
          in: "in",
          value: "value",
          operator: "operate"
        },
        valueInvalid: "Invalid Value"
      },
      menu: {
        home: "Home",
        manager: "Doc Manager",
        globalsettings: "Global Parameter Settings",
        officeline: "Offline document(MD)",
        selfSettings: "Settings"
      },
      doc: {
        title: "Doc",
        note: "Description",
        copy: "Copy",
        copyHash: "Copy Url",
        author: "Developer",
        url: "url",
        method: "method",
        des: "note",
        params: "Request Params",
        requestExample: "Request Example",
        paramsHeader: {
          name: "name",
          des: "description",
          require: "require",
          type: "data type",
          requestType: "request type"

        },
        responseHeaderParams: "Response Header",
        response: "Response Status",
        responseHeader: {
          code: "code",
          des: "description"
        },
        responseParams: "Response Params",
        responseParamsHeader: {
          name: "name",
          des: "description",
          type: "type"
        },
        responseExample: "Response Example",
        nodata: "No data"

      },
      offline: {
        des: "Description",
        contact: "Contact",
        url: "api url",
        note: "Description",
        schemaDes: "schema Description"
      },
      debug: {
        title: "Debug",
        send: "Send",
        params: "Request parameter list",
        tableHeader: {
          selectAll: "Select All",
          type: "type",
          name: "name",
          value: "value"
        },
        response: {
          content: "Response",
          showDes: "Show Description",
          code: "code",
          cost: "cost",
          size: "size",
          header: "Request Header",
          download: "Download File"
        }

      },
      tab: {
        closeCurrent: "Close Current Tab",
        closeOther: "Close Other Tab",
        closeAll: "Close All Tab"
      }
    }
  }

}

export default constants
