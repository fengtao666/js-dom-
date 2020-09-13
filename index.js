// 创建元素
function createElement(el, params, tf, father) {
    for (var i = 0; i < params.length; i++) { 
        var attribute = params[i],
            ele = document.createElement(attribute.type),
            children = attribute.children || null;
        for (var key in attribute.props) { 
            switch (key) {
                case "class": { 
                    ele.className = attribute.props[key];
                    break;
                } 
                case "style": {
                    for (var styles in attribute.props[key]) { 
                        ele.style[styles] = attribute.props[key][styles];
                    } 
                    break;
                } 
                default: { 
                    for (var attr in attribute.props) {
                        ele.setAttribute(attr, attribute.props[attr]);
                    }   
                } 
            }
        }
        children &&
            (typeof children === "string"
                ? ele.appendChild(document.createTextNode(children))
                : createElement(ele, attribute.children, !0, el)),
            tf ? (el.appendChild(ele), father.appendChild(el)) : el.appendChild(ele);
    }
}

// 更新元素
function updateElement(className, props, url) {
    var Ele = document.querySelector(className);
    Ele[props] = url;
} 

// 移除元素
function removeElement(el) {
    el.parentNode.removeChild(el);
}


// 创建dom
function renderHead(headerInfo) {
    var headerUrl = headerInfo.bg_img;   
        shareUrl = headerInfo.share_img;
    var headerWrapper = document.getElementById("cpt_triviny7f2");
    var dropContent = [];
    for(var i = 0; i < seePastContent.length; i++) {
        var res = {
            type: "div",
            props: {
                class: "sel",
                style: {
                    backgroundImage: 'url(' + seePastContent[i].pic + ')',
                    backgroundSize: "100% 100%"
                }
            }
        };
        dropContent.push(res);
    }
    var headerParams = [
        {
            type: "img",
            props: {
                class: "header-img",
                src: headerUrl,
                style: {
                    width: "7.5",
                    margin: "0 auto",
                    display: "none"
                },
                children: dropContent
            }
        }
    ];
    var shareParams = [
        {
            type: "img",
            props: {
                class: "share-img",
                src: shareUrl,
            }
        }
    ];
    
    if(init){
        createElement(headerWrapper, headerParams);
        createElement(headerWrapper, shareParams);
    } else {
        updateElement(".header-img", "src", headerUrl);
    }
}