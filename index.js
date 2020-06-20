var plat = platform.name;
        var version = platform.version;
        var osString = platform.os.toString();
        var ref = document.referrer;
        var mod = document.lastModified;
        var date = new Date(mod);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var date_sub = date.getDate();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var second = date.getSeconds();
        setInterval(refresh,1000)
        function refresh(){
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var date_sub = date.getDate();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var second = date.getSeconds();
        document.getElementById("now").innerHTML = year + "年" 
                                                       + month + "月"
                                                       + date_sub + "日"
                                                       + hour + "時"
                                                       + minutes + "分"
                                                       + second + "秒";
        }
        onload = show;
        onresize = setPx;
        function show(){
            var jscript = document.getElementById("jscript");
            jscript.innerHTML = "有効です"
            jscript.style.color = "blue";
            document.getElementById("browser").innerHTML = plat;
            document.getElementById("version").innerHTML = version;
            document.getElementById("os").innerHTML = osString;
            var dom_ref = document.getElementById("ref");
            if(ref == ""){
                ref = "データがありません";
                dom_ref.innerHTML =ref;
            }else{
                dom_ref.innerHTML = "<a href=\"" + ref +"\">" + ref + "</a>";
            }
            document.getElementById("ua").innerHTML = navigator.userAgent;
            document.getElementById("mod").innerHTML = year + "年" 
                                                       + month + "月"
                                                       + date_sub + "日"
                                                       + hour + "時"
                                                       + minutes + "分"
                                                       + second + "秒";
            document.getElementById("size").innerHTML = "幅:" + screen.width + "ピクセル" + 
                                                        "、高さ:" + screen.height + "ピクセル" ;
            setPx();
            getGlobalData();
            loadEnd();
        }
        function setPx(){
            document.getElementById("px").innerHTML = "幅:" + window.innerWidth + "ピクセル" + 
                                                      "、高さ:" + window.innerHeight + "ピクセル";                                            
        }
        function getGlobalData(){
            $.getJSON('https://ipapi.co/json/', function(data) {
            var ip = data.ip;
            var country = data.country_name;
            var countryCode = data.country;
            var regionName = data.region;
            var city = data.city;
            var timezone = data.timezone;
            var organization = data.org;
            var dom_ip = document.getElementById("ip");
            dom_ip.innerHTML = ip;
            dom_ip.style.color = "blue";
            dom_ip.style.fontSize = "x-large";
            document.getElementById("country").innerHTML = country;
            document.getElementById("countryCode").innerHTML = countryCode;
            document.getElementById("regionName").innerHTML = regionName;
            document.getElementById("city").innerHTML = city;
            document.getElementById("timezone").innerHTML = timezone;
            document.getElementById("organization").innerHTML = organization;
            });
        }