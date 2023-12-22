document.addEventListener('DOMContentLoaded', function() {
    // 查找所有 .highlight 元素
    const highlights = document.querySelectorAll('.highlight');
  
    highlights.forEach(function(highlight) {
      // 创建复制按钮
      const copyBtn = document.createElement('button');
      copyBtn.textContent = '复制';
      copyBtn.classList.add('copy-btn');
  
      // 将按钮添加到每个 .highlight 元素中
      highlight.appendChild(copyBtn);
  
      // 添加点击事件监听器
      copyBtn.addEventListener('click', function() {
        // 假设 .highlight 下的第一个 <code> 元素包含要复制的代码
        const code = highlight.querySelector('code') ? highlight.querySelector('code').textContent : '';
  
        navigator.clipboard.writeText(code).then(() => {
          // 显示复制成功信息
          copyBtn.textContent = '已复制!';
          setTimeout(() => {
            copyBtn.textContent = '复制';
          }, 2000);
        }).catch(err => {
          console.error('复制失败: ', err);
        });
      });
    });
  });
  