CSRF cross-site request forgery 跨站点请求伪造
XSS cross-site Scripting 跨站点脚本
协议+域名+端口
但是有三个标签 允许跨域加载资源
img  link script 

解决方案
1.  JSONP (JSON with padding)
    由两部分组成：回调函数和数据

http状态码
    2XX 代表成功
    200 
    204 该状态码代表服务器接收的请求已成功处理，但在返回的响应报文中 不含实体的主体部分
    206 该状态码表示客户端进行了范围请求，而服务器成功执行了这部分的 GET 请求

    3XX 响应结果表明浏览器需要执行某些特殊的处理以正确处理请求
    301 永久重定向
    302 临时重定向
    307 临时重定向 307 会遵照浏览器标准，不会从 POST 变成 GET。但是，对于处理响
应时的行为，每种浏览器有可能出现不同的情况。

    4XX 的响应结果表明客户端是发生错误的原因所在。
    401 Unauthorized
    403 Forbidden
    404 Not Found

    5XX 的响应结果表明服务器本身发生错误。
    500 Internal Server Error
    503 Service Unavailable  该状态码表明服务器暂时处于超负载或正在进行停机维护，现在无法 处理请求。如果事先得知解除以上状况需要的时间，最好写入 RetryAfter 首部字段再返回给客户端。

    constructor
    getDerivedFromProps
    render
    componentdidmount

    getDerivedFromProps
    shouldComponentupdate
    render
    getsnapbeforeupdate
    compoenntdidupdate


