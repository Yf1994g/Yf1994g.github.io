// 获取页面元素引用
const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');

// 点击按钮时切换导航菜单的显示/隐藏状态
toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show-nav');
});

// 把侧边栏固定在窗口顶部
window.addEventListener('scroll', () => {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) { // 如果存在侧边栏元素
    const topOffset = sidebar.offsetTop;
    if (window.pageYOffset >= topOffset) {
      sidebar.classList.add('sticky');
    } else {
      sidebar.classList.remove('sticky');
    }
  }
});

// 滑动到指定位置时添加动画效果
const animElems = document.querySelectorAll('.anim');
if (animElems.length > 0) { // 如果存在可动画元素
  window.addEventListener('scroll', () => {
    animElems.forEach(elem => {
      // 如果元素已经出现在视口中且未播放动画，则播放动画
      if (isElemVisible(elem) && !elem.classList.contains('played')) {
        elem.classList.add('played');
      }
    });
  });
}

// 返回顶部按钮
const topBtn = document.querySelector('.top-btn');
if (topBtn) { // 如果存在返回顶部按钮
  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 判断元素是否出现在视口中
function isElemVisible(elem) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

