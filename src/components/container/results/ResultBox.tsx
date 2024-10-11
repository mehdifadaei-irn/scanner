import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

interface ResProps {
  header: string;
  url: string;
  reqRes: any;
  subHead: string;
  severity: "low" | "high" | "medium" | "info";
  extractedResults: string[];
  port: string;
  scheme: string;
}

export const stat = {
  html: `<html>
<!-- Hello World in HTML -->
<head>
<title>Hello World!</title>
</head>
<body>
Hello World!
</body>
</html>
`,
  anotherhtml: ` GET / HTTP/1.1\r\nHost: wide.ir\r\nUser-Agent: Mozilla/5.0 (ZZ; Linux i686; rv:125.0) Gecko/20100101 Firefox/125.0\r\nConnection: close\r\nAccept-Encoding: gzip\r\n\r\n","response":"HTTP/1.1 200 OK\r\nConnection: close\r\nTransfer-Encoding: chunked\r\nCache-Control: private\r\nContent-Security-Policy: upgrade-insecure-requests\r\nContent-Type: text/html; charset=utf-8\r\nDate: Wed, 25 Sep 2024 12:28:04 GMT\r\nServer: ArvanCloud\r\nServer-Timing: total;dur=7\r\nSet-Cookie: ASP.NET_SessionId=vdfdqxlyxczj5vvc22nq4tur; path=/; HttpOnly; SameSite=Lax\r\nVary: Accept-Encoding\r\nX-Aspnet-Version: 4.0.30319\r\nX-Cache: BYPASS\r\nX-Powered-By: ASP.NET\r\nX-Request-Id: 36708bc4b9425f68006263c7335f45ae\r\nX-Sid: 2061\r\nX-Xss-Protection: 1; mode=block\r\n\r\n\r\n\r\n\u003c!DOCTYPE html\u003e\r\n\r\n\u003chtml xmlns=\"http://www.w3.org/1999/xhtml\" lang=\"fa-IR\" dir=\"rtl\"\u003e\r\n\u003chead\u003e\r\n     \u003c!-- Powered By AFE Ver 1.1.1703131043 [master-dec361c]  --\u003e\r\n    \u003cmeta charset=\"utf-8\" /\u003e\r\n    \u003c!--[if IE]\u003e\r\n        \u003cmeta http-equiv=\"X-UA-Compatible\" content=\"IE=9,chrome=1\" /\u003e\r\n    \u003c![endif]--\u003e\r\n    \u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1\" /\u003e\u003cmeta name=\"developers\" content=\"Sadegh Mehrdadi,Saeed Torabi,Javad Gholami,Mohammad Reza Shariatzade\" /\u003e\u003cmeta name=\"version\" content=\"1.1.1703131043\" /\u003e\u003cmeta name=\"branch\" content=\"master\" /\u003e\u003cmeta name=\"commit\" content=\"dec361c\" /\u003e\r\n\r\n\r\n    \u003c!-- Chrome, Firefox OS, Opera and Vivaldi --\u003e\r\n    \u003cmeta name=\"theme-color\" content=\"#3498DB\" /\u003e\r\n    \u003c!-- Windows Phone --\u003e\r\n    \u003cmeta name=\"msapplication-navbutton-color\" content=\"#3498DB\" /\u003e\r\n    \u003c!-- iOS Safari --\u003e\r\n    \u003cmeta name=\"apple-mobile-web-app-status-bar-style\" content=\"#3498DB\" /\u003e\u003ctitle\u003e\r\n\tسامانه ارسال پیام کوتاه\r\n\u003c/title\u003e\u003clink href=\"Assets/css/panel.min.css?ver=2.1.2\" rel=\"stylesheet\" /\u003e\r\n    \u003cscript src=\"../Assets/js/html5shiv.js\" type=\"text/javascript\"\u003e\u003c/script\u003e\r\n    \r\n    \u003cscript type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js\"\u003e\u003c/script\u003e\r\n    \u003cscript type=\"text/javascript\" src=\"https://www.google.com/recaptcha/api.js?onload=onloadCallback\u0026render=explicit\"\r\n        async defer\u003e\u003c/script\u003e\r\n    --%\u003e\r\n    \u003cscript type=\"text/javascript\"\u003e\r\n        var onloadCallback = function () {\r\n            grecaptcha.render('dvCaptcha', {\r\n                'sitekey': '6LfzJ7gUAAAAANO1KhGe7TYBa4WgdYKZmCJBOycu',\r\n                'callback': function (response) {\r\n                    $(\"[id*=fortest]\").text(response);\r\n                    $(\"[id*=rfvCaptcha]\").show();\r\n                }\r\n            });\r\n        };\r\n\t\twindow.addEventListener('load', function () {\r\n            var close = document.getElementById(\"close\");\r\n            close.onclick = function () {\r\n                document.getElementById(\"popup1\").className = \"overlay2\";\r\n            };\r\n        })\r\n    \u003c/script\u003e\r\n\r\n    \u003cstyle\u003e\r\n         .rightAlign { float: left; width: 128px; height:128px;}\r\n        ::-webkit-input-placeholder {\r\n            text-align: right;\r\n        }\r\n\r\n        input:-moz-placeholder {\r\n            text-align: right;\r\n        }\r\n\r\n        input {\r\n            text-align: left;\r\n        }\r\n\t\t\t.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  transition: opacity 500ms;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n}\r\n.overlay2 {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.popup {\r\n  margin: 70px auto;\r\n  padding: 20px;\r\n  background: #fff;\r\n  border-radius: 5px;\r\n  width: 30%;\r\n  position: relative;\r\n  transition: all 5s ease-in-out;\r\n}\r\n\r\n.popup h2 {\r\n    margin-top: 0;\r\n    color: #ff0808;\r\n    font-family: Tahoma, Arial, sans-serif;\r\n    font-weight: bolder;\r\n    text-align: center;\r\n}\r\n.popup .close {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 30px;\r\n  transition: all 200ms;\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n  color: #333;\r\n}\r\n.popup .close:hover {\r\n  color: #06D85F;\r\n}\r\n.popup .content {\r\n  color: black;\r\n    text-align: justify;\r\n    font-size: large;\r\n}\r\n\r\n@media screen and (max-width: 700px){\r\n  .box{\r\n    width: 70%;\r\n  }\r\n  .popup{\r\n    width: 70%;\r\n  }\r\n}\r\n    \u003c/style\u003e\r\n\u003c/head\u003e\r\n\u003cbody class=\"external-page\"\u003e\r\n    \u003cform method=\"post\" action=\"./\" id=\"form1\"\u003e\r\n\u003cdiv class=\"aspNetHidden\"\u003e\r\n\u003cinput type=\"hidden\" name=\"__VIEWSTATE\" id=\"__VIEWSTATE\" value=\"kqphchYxNAXqWGyvdqpVMkS1Kvq5nxS5/W+jQYdRkl09XbxBMztVVTqxz9Dah0xqKUERMHADCb6IpuXHH62fQjRTYB9VUmKSdzOFISC3ooA=\" /\u003e\r\n\u003c/div\u003e\r\n\r\n\u003cdiv class=\"aspNetHidden\"\u003e\r\n\r\n\t\u003cinput type=\"hidden\" name=\"__VIEWSTATEGENERATOR\" id=\"__VIEWSTATEGENERATOR\" value=\"ECDA716A\" /\u003e\r\n\u003c/div\u003e\r\n\r\n      \r\n\r\n        \u003cheader id=\"header\"\u003e\r\n            \r\n        \u003cdiv class=\"leftCol\"\u003e\r\n        \r\n    \u003c/div\u003e\r\n    \u003ch1\u003e\u003ca href=\"#\"\u003eواید(سامانه ارسال پیام کوتاه)\u003c/a\u003e\u003c/h1\u003e\r\n\r\n        \u003c/header\u003e\r\n\r\n        \u003csection id=\"ext-content\"\u003e\r\n            \u003cdiv class=\"ext-content\"\u003e\r\n                \u003cdiv class=\"row\"\u003e\r\n                    \r\n                    \r\n\r\n    \u003cdiv class=\"col-lg-3 col-md-4 col-sm-5 col-xs-11\"\u003e\r\n        \u003cdiv class=\"ext-panel\" style=\"min-width: 350px; display: flex\"\u003e\r\n            \u003csection class=\"external-wrapper login\"\u003e\r\n                \u003cdiv class=\"login-wrapper\" id=\"frm-login\"\u003e\r\n\r\n                    \u003c!-- \u003cdiv class=\"row alert-box\"\u003e\r\n\t\t\t\t\t\t\u003cdiv class=\"col-md-12\"\u003e\r\n\t\t\t\t\t\t\t\u003cp class=\"text-center\"\u003e\r\n\t\t\t\t\t\t\t\tکاربر گرامی\r\n\t\t\t\t\t\t\t\t\u003cbr /\u003e\r\n\t\t\t\t\t\t\t\tبا توجه به بروز اختلال در اپراتور برای ارسال به شماره های ایرانسل و رایتل، ارسال به این شماره ها با تاخیر انجام خواهد شد.\r\n\t\t\t\t\t\t\t\u003c/p\u003e\r\n\t\t\t\t\t\t\u003c/div\u003e\r\n                    \u003c/div\u003e --\u003e\r\n\r\n                    \u003cdiv class=\"form-group\"\u003e\r\n                        \u003cinput id=\"login-username\" type=\"text\" class=\"ltr form-control val-check val-require\" placeholder=\"نام کاربری\" tabindex=\"1\" /\u003e\r\n                    \u003c/div\u003e\r\n                    \u003cdiv class=\"form-group\"\u003e\r\n                        \u003cinput id=\"login-password\" type=\"password\" class=\"ltr form-control val-check val-require\" placeholder=\"کلمه عبور\" tabindex=\"2\" /\u003e\r\n                    \u003c/div\u003e\r\n                    \u003cdiv id=\"login-submit\" class=\"form-group res-loader\"\u003e\r\n                        ورود \u003cspan\u003e\u003c/span\u003e\r\n                    \u003c/div\u003e\r\n                    \u003cdiv id=\"dvCaptcha\"\u003e\u003c/div\u003e\r\n                    \u003cspan id=\"fortest\" hidden\u003e\u003c/span\u003e\r\n                \u003c/div\u003e\r\n                \u003cp class=\"text-center ext-links\"\u003e\r\n                    \u003ca href=\"ForgotPassword.aspx\" id=\"forgot-password\" tabindex=\"4\"\u003eکلمه عبور خود را فراموش کرده اید؟\u003c/a\u003e\r\n                    \u003ca href=\"SelectProduct.aspx\" tabindex=\"5\" id=\"register-link\"\u003eثبت نـام کـنید\u003c/a\u003e\r\n                \u003c/p\u003e\r\n            \u003c/section\u003e\r\n        \u003c/div\u003e\r\n\t\t\u003cdiv id=\"popup1\" class=\"overlay\"\u003e\r\n\t        \u003cdiv class=\"popup\"\u003e\r\n\t\t    \u003ch2\u003eاطلاعیه\u003c/h2\u003e\r\n\t\t    \u003cspan id=\"close\" class=\"close\"\u003e\u0026times;\u003c/span\u003e\r\n\t\t\u003cdiv class=\"content\"\u003e\r\n\t\t\tکاربر گرامی به استحضار میرسانیم، بنا به درخواست شرکت مخابرات،  «امکان ارسال پیامک‌» از ساعت 12 ظهر روز پنجشنبه 10 اسفند ماه  تا پایان زمان انتخابات وجود ندارد و تخلف محسوب خواهد شد. بنابراین شما می‌توانید از روز شنبه 12 اسفند ماه ساعت 9 صبح، مجددا پیامک‌های خود را ارسال نمایید.\r\n\r\n\r\n            \u003cbr\u003e\r\nپیشاپیش از همراهی شما سپاسگزاریم.\r\n\t\t\u003c/div\u003e\r\n\t\u003c/div\u003e\r\n\u003c/div\u003e\r\n    \u003c/div\u003e\r\n\r\n    \u003cfooter id=\"footer\"\u003e\r\n        \u003cp\u003e\r\n            تمام حقوق این وب سایت متعلق به عصر فرا ارتباط می باشد\r\n            \u003cbr /\u003e\r\n            \u003cspan\u003eCopyright © 2015 Wide.ir. All rights reserved\u003c/span\u003e\r\n        \u003c/p\u003e\r\n    \u003c/footer\u003e\r\n\r\n\r\n\r\n                \u003c/div\u003e\r\n            \u003c/div\u003e\r\n        \u003c/section\u003e \r\n        \u003cscript src=\"../Assets/js/panel.min.js?ver=2.1.3\"\u003e\u003c/script\u003e\r\n        \u003cscript type=\"text/javascript\"\u003e\r\n            Waves.displayEffect();\r\n            $(window).load(function () {\r\n                sms.utils.initICheck();\r\n            });\r\n        \u003c/script\u003e\r\n        \r\n        \r\n        \r\n\r\n    \u003c/form\u003e\r\n\u003c/body\u003e\r\n\u003c/html\u003e\r\n","ip":"185.143.233.87","timestamp":"2024-09-25T15:58:04.521342893+03:30","curl-command":"curl -X 'GET' -d '' -H 'Host: wide.ir' -H 'User-Agent: Mozilla/5.0 (ZZ; Linux i686; rv:125.0) Gecko/20100101 Firefox/125.0' 'https://wide.ir'","matcher-status":true},{"template-id":"waf-detect","template-path":"/root/nuclei-templates/http/technologies/waf-detect.yaml","info":{"name":"WAF Detection","author":["dwisiswant0","lu4nx"],"tags":["waf","tech","misc"],"description":"A web application firewall was detected.","reference":["https://github.com/Ekultek/WhatWaf"],"severity":"info","metadata":{"max-request":1},"classification":{"cve-id":null,"cwe-id":["cwe-200"]}},"matcher-name":"aspgeneric","type":"http","host":"wide.ir","port":"443","scheme":"https","url":"https://wide.ir","matched-at":"https://wide.ir","request":"POST / HTTP/1.1\r\nHost: wide.ir\r\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36\r\nConnection: close\r\nContent-Length: 27\r\nContent-Type: application/x-www-form-urlencoded\r\nAccept-Encoding: gzip\r\n\r\n_=\u003cscript\u003ealert(1)\u003c/script\u003e","response":"HTTP/1.1 200 OK\r\nConnection: close\r\nTransfer-Encoding: chunked\r\nCache-Control: private\r\nContent-Security-Policy: upgrade-insecure-requests\r\nContent-Type: text/html; charset=utf-8\r\nDate: Wed, 25 Sep 2024 12:28:07 GMT\r\nServer: ArvanCloud\r\nServer-Timing: total;dur=6\r\nSet-Cookie: ASP.NET_SessionId=c55xoc4wppnbgkq5apbe5nih; path=/; HttpOnly; SameSite=Lax\r\nVary: Accept-Encoding\r\nX-Aspnet-Version: 4.0.30319\r\nX-Powered-By: ASP.NET\r\nX-Request-Id: 64d85d97fb85a3f5b8ac263daf499202\r\nX-Sid: 2061\r\nX-Xss-Protection: 1; mode=block\r\n\r\n\r\n\r\n\u003c!DOCTYPE html\u003e\r\n\r\n\u003chtml xmlns=\"http://www.w3.org/1999/xhtml\" lang=\"fa-IR\" dir=\"rtl\"\u003e\r\n\u003chead\u003e\r\n     \u003c!-- Powered By AFE Ver 1.1.1703131043 [master-dec361c]  --\u003e\r\n    \u003cmeta charset=\"utf-8\" /\u003e\r\n    \u003c!--[if IE]\u003e\r\n        \u003cmeta http-equiv=\"X-UA-Compatible\" content=\"IE=9,chrome=1\" /\u003e\r\n    \u003c![endif]--\u003e\r\n    \u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1\" /\u003e\u003cmeta name=\"developers\" content=\"Sadegh Mehrdadi,Saeed Torabi,Javad Gholami,Mohammad Reza Shariatzade\" /\u003e\u003cmeta name=\"version\" content=\"1.1.1703131043\" /\u003e\u003cmeta name=\"branch\" content=\"master\" /\u003e\u003cmeta name=\"commit\" content=\"dec361c\" /\u003e\r\n\r\n\r\n    \u003c!-- Chrome, Firefox OS, Opera and Vivaldi --\u003e\r\n    \u003cmeta name=\"theme-color\" content=\"#3498DB\" /\u003e\r\n    \u003c!-- Windows Phone --\u003e\r\n    \u003cmeta name=\"msapplication-navbutton-color\" content=\"#3498DB\" /\u003e\r\n    \u003c!-- iOS Safari --\u003e\r\n    \u003cmeta name=\"apple-mobile-web-app-status-bar-style\" content=\"#3498DB\" /\u003e\u003ctitle\u003e\r\n\tسامانه ارسال پیام کوتاه\r\n\u003c/title\u003e\u003clink href=\"Assets/css/panel.min.css?ver=2.1.2\" rel=\"stylesheet\" /\u003e\r\n    \u003cscript src=\"../Assets/js/html5shiv.js\" type=\"text/javascript\"\u003e\u003c/script\u003e\r\n    \r\n    \u003cscript type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js\"\u003e\u003c/script\u003e\r\n    \u003cscript type=\"text/javascript\" src=\"https://www.google.com/recaptcha/api.js?onload=onloadCallback\u0026render=explicit\"\r\n        async defer\u003e\u003c/script\u003e\r\n    --%\u003e\r\n    \u003cscript type=\"text/javascript\"\u003e\r\n        var onloadCallback = function () {\r\n            grecaptcha.render('dvCaptcha', {\r\n                'sitekey': '6LfzJ7gUAAAAANO1KhGe7TYBa4WgdYKZmCJBOycu',\r\n                'callback': function (response) {\r\n                    $(\"[id*=fortest]\").text(response);\r\n                    $(\"[id*=rfvCaptcha]\").show();\r\n                }\r\n            });\r\n        };\r\n\t\twindow.addEventListener('load', function () {\r\n            var close = document.getElementById(\"close\");\r\n            close.onclick = function () {\r\n                document.getElementById(\"popup1\").className = \"overlay2\";\r\n            };\r\n        })\r\n    \u003c/script\u003e\r\n\r\n    \u003cstyle\u003e\r\n         .rightAlign { float: left; width: 128px; height:128px;}\r\n        ::-webkit-input-placeholder {\r\n            text-align: right;\r\n        }\r\n\r\n        input:-moz-placeholder {\r\n            text-align: right;\r\n        }\r\n\r\n        input {\r\n            text-align: left;\r\n        }\r\n\t\t\t.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  transition: opacity 500ms;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n}\r\n.overlay2 {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.popup {\r\n  margin: 70px auto;\r\n  padding: 20px;\r\n  background: #fff;\r\n  border-radius: 5px;\r\n  width: 30%;\r\n  position: relative;\r\n  transition: all 5s ease-in-out;\r\n}\r\n\r\n.popup h2 {\r\n    margin-top: 0;\r\n    color: #ff0808;\r\n    font-family: Tahoma, Arial, sans-serif;\r\n    font-weight: bolder;\r\n    text-align: center;\r\n}\r\n.popup .close {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 30px;\r\n  transition: all 200ms;\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n  color: #333;\r\n}\r\n.popup .close:hover {\r\n  color: #06D85F;\r\n}\r\n.popup .content {\r\n  color: black;\r\n    text-align: justify;\r\n    font-size: large;\r\n}\r\n\r\n@media screen and (max-width: 700px){\r\n  .box{\r\n    width: 70%;\r\n  }\r\n  .popup{\r\n    width: 70%;\r\n  }\r\n}\r\n    \u003c/style\u003e\r\n\u003c/head\u003e\r\n\u003cbody class=\"external-page\"\u003e\r\n    \u003cform method=\"post\" action=\"./\" id=\"form1\"\u003e\r\n\u003cdiv class=\"aspNetHidden\"\u003e\r\n\u003cinput type=\"hidden\" name=\"__VIEWSTATE\" id=\"__VIEWSTATE\" value=\"Nr2Fk0iqjwRjLmZefXrS7WjNyas1EvkK+ILqAbIqB54390m3yYOZ2AslZU80yD5ISMFlvC4aU74Zpx0LVizLxmVvRkHlkryT2Qxj8Kblfd4=\" /\u003e\r\n\u003c/div\u003e\r\n\r\n\u003cdiv class=\"aspNetHidden\"\u003e\r\n\r\n\t\u003cinput type=\"hidden\" name=\"__VIEWSTATEGENERATOR\" id=\"__VIEWSTATEGENERATOR\" value=\"ECDA716A\" /\u003e\r\n\u003c/div\u003e\r\n\r\n      \r\n\r\n        \u003cheader id=\"header\"\u003e\r\n            \r\n        \u003cdiv class=\"leftCol\"\u003e\r\n        \r\n    \u003c/div\u003e\r\n    \u003ch1\u003e\u003ca href=\"#\"\u003eواید(سامانه ارسال پیام کوتاه)\u003c/a\u003e\u003c/h1\u003e\r\n\r\n        \u003c/header\u003e\r\n\r\n        \u003csection id=\"ext-content\"\u003e\r\n            \u003cdiv class=\"ext-content\"\u003e\r\n                \u003cdiv class=\"row\"\u003e\r\n                    \r\n                    \r\n\r\n    \u003cdiv class=\"col-lg-3 col-md-4 col-sm-5 col-xs-11\"\u003e\r\n        \u003cdiv class=\"ext-panel\" style=\"min-width: 350px; display: flex\"\u003e\r\n            \u003csection class=\"external-wrapper login\"\u003e\r\n                \u003cdiv class=\"login-wrapper\" id=\"frm-login\"\u003e\r\n\r\n                    \u003c!-- \u003cdiv class=\"row alert-box\"\u003e\r\n\t\t\t\t\t\t\u003cdiv class=\"col-md-12\"\u003e\r\n\t\t\t\t\t\t\t\u003cp class=\"text-center\"\u003e\r\n\t\t\t\t\t\t\t\tکاربر گرامی\r\n\t\t\t\t\t\t\t\t\u003cbr /\u003e\r\n\t\t\t\t\t\t\t\tبا توجه به بروز اختلال در اپراتور برای ارسال به شماره های ایرانسل و رایتل، ارسال به این شماره ها با تاخیر انجام خواهد شد.\r\n\t\t\t\t\t\t\t\u003c/p\u003e\r\n\t\t\t\t\t\t\u003c/div\u003e\r\n                    \u003c/div\u003e --\u003e\r\n\r\n                    \u003cdiv class=\"form-group\"\u003e\r\n                        \u003cinput id=\"login-username\" type=\"text\" class=\"ltr form-control val-check val-require\" placeholder=\"نام کاربری\" tabindex=\"1\" /\u003e\r\n                    \u003c/div\u003e\r\n                    \u003cdiv class=\"form-group\"\u003e\r\n                        \u003cinput id=\"login-password\" type=\"password\" class=\"ltr form-control val-check val-require\" placeholder=\"کلمه عبور\" tabindex=\"2\" /\u003e\r\n                    \u003c/div\u003e\r\n                    \u003cdiv id=\"login-submit\" class=\"form-group res-loader\"\u003e\r\n                        ورود \u003cspan\u003e\u003c/span\u003e\r\n                    \u003c/div\u003e\r\n                    \u003cdiv id=\"dvCaptcha\"\u003e\u003c/div\u003e\r\n                    \u003cspan id=\"fortest\" hidden\u003e\u003c/span\u003e\r\n                \u003c/div\u003e\r\n                \u003cp class=\"text-center ext-links\"\u003e\r\n                    \u003ca href=\"ForgotPassword.aspx\" id=\"forgot-password\" tabindex=\"4\"\u003eکلمه عبور خود را فراموش کرده اید؟\u003c/a\u003e\r\n                    \u003ca href=\"SelectProduct.aspx\" tabindex=\"5\" id=\"register-link\"\u003eثبت نـام کـنید\u003c/a\u003e\r\n                \u003c/p\u003e\r\n            \u003c/section\u003e\r\n        \u003c/div\u003e\r\n\t\t\u003cdiv id=\"popup1\" class=\"overlay\"\u003e\r\n\t        \u003cdiv class=\"popup\"\u003e\r\n\t\t    \u003ch2\u003eاطلاعیه\u003c/h2\u003e\r\n\t\t    \u003cspan id=\"close\" class=\"close\"\u003e\u0026times;\u003c/span\u003e\r\n\t\t\u003cdiv class=\"content\"\u003e\r\n\t\t\tکاربر گرامی به استحضار میرسانیم، بنا به درخواست شرکت مخابرات،  «امکان ارسال پیامک‌» از ساعت 12 ظهر روز پنجشنبه 10 اسفند ماه  تا پایان زمان انتخابات وجود ندارد و تخلف محسوب خواهد شد. بنابراین شما می‌توانید از روز شنبه 12 اسفند ماه ساعت 9 صبح، مجددا پیامک‌های خود را ارسال نمایید.\r\n\r\n\r\n            \u003cbr\u003e\r\nپیشاپیش از همراهی شما سپاسگزاریم.\r\n\t\t\u003c/div\u003e\r\n\t\u003c/div\u003e\r\n\u003c/div\u003e\r\n    \u003c/div\u003e\r\n\r\n    \u003cfooter id=\"footer\"\u003e\r\n        \u003cp\u003e\r\n            تمام حقوق این وب سایت متعلق به عصر فرا ارتباط می باشد\r\n            \u003cbr /\u003e\r\n            \u003cspan\u003eCopyright © 2015 Wide.ir. All rights reserved\u003c/span\u003e\r\n        \u003c/p\u003e\r\n    \u003c/footer\u003e\r\n\r\n\r\n\r\n                \u003c/div\u003e\r\n            \u003c/div\u003e\r\n        \u003c/section\u003e \r\n        \u003cscript src=\"../Assets/js/panel.min.js?ver=2.1.3\"\u003e\u003c/script\u003e\r\n        \u003cscript type=\"text/javascript\"\u003e\r\n            Waves.displayEffect();\r\n            $(window).load(function () {\r\n                sms.utils.initICheck();\r\n            });\r\n        \u003c/script\u003e\r\n        \r\n        \r\n        \r\n\r\n    \u003c/form\u003e\r\n\u003c/body\u003e\r\n\u003c/html\u003e\r\n","ip":"185.143.233.87","timestamp":"2024-09-25T15:58:07.598758568+03:30","curl-command":"curl -X 'POST' -d '_=\u003cscript\u003ealert(1)\u003c/script\u003e' -H 'Content-Type: application/x-www-form-urlencoded' -H 'Host: wide.ir' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36' 'https://wide.ir'","matcher-status":true `,
};

const ResultBox = ({
  header,
  reqRes,
  url,
  subHead,
  severity,
  port,
  scheme,
  extractedResults,
}: ResProps) => {
  return (
    <div className="bg-[#F5F5F5] flex flex-col rounded-lg font-[family-name:var(--font-geist-sans)]">
      <div className="flex justify-between ml-5 mr-4 h-20 items-center">
        <div className="flex gap-x-3">
          <div
            style={{
              backgroundColor:
                severity === "low"
                  ? "#38bdf8"
                  : severity === "high"
                  ? "#dc2626"
                  : severity === "info"
                  ? "#4ade80"
                  : "#fb923c",
            }}
            className="font-bold text-sm flex justify-center items-center pt-1 text-white  rounded-full w-8 h-6"
          >
            {severity === "low"
              ? "L"
              : severity === "high"
              ? "H"
              : severity === "info"
              ? "I"
              : "M"}
          </div>
          <h3 className="font-medium font-[family-name:var(--font-geist-sans)]">
            {header}
          </h3>
        </div>

        <div className="border-2 px-2 border-green-600 h-6 rounded-xl flex justify-center items-center tracking-wide">
          <span className="text-xs">Confirmed</span>
        </div>
      </div>
      <div className="bg-white m-[3px]">
        <h3 className="mt-7 ml-7 ">Evidence</h3>
        <div className="flex gap-x-5 mt-7 ml-7 ">
          <span>Port:</span>
          <p>{port}</p>
        </div>
        <div className="bg-[#F5F5F5] flex flex-col py-3  rounded-lg justify-center px-3 mx-7 mt-7">
          <span className="text-muted-foreground text-sm">URL</span>
          <a className="font-medium font-[family-name:var(--font-geist-sans)] text-blue-500">
            {url}
          </a>
        </div>
        <div className="mt-7 mb-8 ml-8 flex flex-col gap-y-2">
          <div className="flex gap-x-5 ">
            <span>Scheme:</span>
            <p>{scheme}</p>
          </div>
          <div className="flex gap-x-5 ">
            <span>extracted results:</span>
            {extractedResults.map((res, i) => (
              <span key={res}>
                {i}-{res}
              </span>
            ))}
          </div>
          <p>{subHead}</p>
        </div>
        <div>
          <div className="border-b-2 my-3 border-blue-500 w-fit ml-9 ">
            <p>Request/Response</p>
          </div>
          <div className=" rounded-lg  mx-9 mt-6 mb-8">
            {/* HTMLBOX */}
            <CopyBlock
              language={"html"}
              text={reqRes}
              showLineNumbers={true}
              theme={dracula}
              // wrapLines={true}
              // codeBlock
            />
          </div>
          <div className="border-t-2 border-slate-200 flex items-center px-3 h-16 cursor-pointer transition-all duration-150 hover:bg-slate-50">
            <p>Detail</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultBox;
