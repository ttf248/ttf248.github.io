function addCopyButtons(clipboard) {
    // 遍历所有<pre>内的<code>元素
    document.querySelectorAll("pre > code").forEach(function(codeBlock) {
        // 创建一个按钮元素
        var button = document.createElement("button");
        button.className = "copy-code-button"; // 设置按钮的类名
        button.type = "button"; // 按钮类型为"button"
        button.innerText = "Copy"; // 按钮上显示的文本为"Copy"

        // 添加点击事件监听器
        button.addEventListener("click", function() {
            // 复制代码块的文本内容到剪贴板
            clipboard.writeText(codeBlock.textContent).then(function() {
                button.blur(); // 复制完成后移除按钮的焦点
                button.innerText = "Copied!"; // 按钮文本更改为"Copied!"
                setTimeout(function() {
                    button.innerText = "Copy"; // 2秒后将按钮文本还原为"Copy"
                }, 2000); // 2秒的延迟
            }, function(error) {
                button.innerText = "Error"; // 如果复制出现错误，将按钮文本设置为"Error"
                console.error(error); // 在控制台打印错误信息
            });
        });

        // 获取代码块的父节点<pre>
        var pre = codeBlock.parentNode;

        // 检查代码块是否位于包含类名"highlight"的父元素内
        if (pre.parentNode.classList.contains("highlight")) {
            // 确保在同一个 div 内部
            var highlight = pre;
            // 创建一个自定义的insertAfter函数插入按钮到highlight之后
            function insertAfter(newNode, referenceNode) {
                referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
            }
            insertAfter(button, highlight);
        } else {
            pre.parentNode.insertBefore(button, pre); // 在<pre>之前插入按钮
        }
    });
}


var script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js";
script.integrity = "sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=";
script.crossOrigin = "anonymous";
script.onload = function() {
    addCopyButtons(clipboard)
};
document.body.appendChild(script)