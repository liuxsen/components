/*
 * @Author: gaoqiming
 * 弹窗实现
 * @Date: 2020-03-05 20:17:12
 * @Last Modified by: jianhui
 * @Last Modified time: 2020-03-06 15:36:41
 */

import html from './template-dialog.html';
console.log(html);

const Dialog = class {
  constructor(option = {}) {
    // 节点类型
    this.elem = option.elem;
    this.dialog = option.dialog;
    this.cancel = option.cancelBtn;
    this.confirmBtn = option.confirmBtn;
    // 动画函数数组
    this.animaArr = ['fadeIn', 'fadeOut'], ['slideDown', 'slideUp'], ['scaleIn', 'scaleOut'];
    // 当前动画类型
    this.currAnimation = option.currAnimation;
  }
  /**
   * @method getNeedElement 获取所需要的节点
   */
  getNeedElement() {
    // 一家人最重要是整整齐齐
    this.elem = document.querySelector('.dialog-wrapper');
    this.dialog = elem.querySelector('.dialog');
    this.cancelBtn = elem.querySelector('.cancel-btn');
    this.confirmBtn = elem.querySelector('.confirm-btn');
  }
  /**
   * @method show 显示dialog组件
   * @param {Object} options 一系列参数
   * @returns {Object} 当前dialog节点
   */
  // show(options = {}) {
  //   // 默认参数
  //   let { title = '', content = 'content', skin = '', btns = ['确定'], confirm = null, cancel = null, shadeClose = true, animation = 1 } = options;
  //   // 皮肤类名
  //   let skinClass = skin ? ` ${skin}` : '';

  //   // 给当前动画类型赋值
  //   currAnimation = animation;

  //   // 生成按钮
  //   let btnTemp = '';
  //   btns.forEach((item, index) => {
  //     if (index == 2) return;
  //     let btnClass = index === 0 ? 'confirm-btn' : 'cancel-btn';
  //     let temp = `<div class="btn ${btnClass}">${item}</div>`;
  //     btnTemp += temp;
  //   });

  //   // 最终生成的HTML
  //   let html = `
  //     <div class="dialog-wrapper fadeIn">
  //       <!-- 居中主要层 -->
  //       <div class="dialog${skinClass} ${animaArr[currAnimation][0]}">
  //         <!-- 标题 -->
  //         <div class="title">
  //           <div>${title}</div>
  //           <span class="close"></span>
  //         </div>
  //         <!--输入框 -->
  //         <div class="search">
  //           <span>名称：</span>
  //           <div class="input-box">
  //             <input type="text" placeholder="请输入模版名称" />
  //           </div>
  //         </div>
  //         <!-- 筛选区 -->
  //         <div class="select-group">
  //           <div class="select-option">
  //             <select>
  //               <option value="volvo">Volvo</option>
  //               <option value="saab">Saab</option>
  //               <option value="opel">Opel</option>
  //               <option value="audi">Audi</option>
  //             </select>
  //           </div>
  //           <div class="select-option">
  //             <select>
  //               <option value="volvo">Volvo</option>
  //               <option value="saab">Saab</option>
  //               <option value="opel">Opel</option>
  //               <option value="audi">Audi</option>
  //             </select>
  //           </div>
  //           <div class="select-option">
  //             <select>
  //               <option value="volvo">Volvo</option>
  //               <option value="saab">Saab</option>
  //               <option value="opel">Opel</option>
  //               <option value="audi">Audi</option>
  //             </select>
  //           </div>
  //         </div>
  //         <!-- 主要内容 -->
  //         <div class="content">
  //           <div style="height:500px;background:red"></div>
  //         </div>
  //         <!-- 按钮组 -->
  //         <div class="buttons">${btnTemp}</div>
  //       </div>
  //     </div>
  //   `;

  //   // 添加到Body
  //   document.body.innerHTML += html;
  //   // 获取所需要的节点
  //   this.getNeedElement();
  //   // 绑定事件
  //   this.bindEvent(confirm, cancel, shadeClose);
  //   return elem;
  // }

  hide() {
    // 最外层执行显示动画(固定)
    this.elem.classList.add('fadeOut');
    // 内容层执行关闭动画
    this.dialog.classList.add(`${animaArr[currAnimation][1]}`);
    // // 最终移除
    // let elems = document.querySelector('.dialog-wrapper');
    // elems.remove();
  }

  /**
   * @method bindEvent 给dialog绑定事件
   * @param {Object} confirm 确认回调
   * @param {Object} cancel 取消回调
   * @param {Boolean} shadeClose shade 关闭
   */
  bindEvent(confirm, cancel, shadeClose) {
    // confirm按钮的回调
    this.confirmBtn &&
      this.confirmBtn.addEventListener('click', e => {
        this.hide();
        confirm && confirm();
      });

    // cancel按钮的回调
    this.cancelBtn &&
      this.cancelBtn.addEventListener('click', e => {
        this.hide();
        cancel && cancel();
      });

    // 是否开启点击遮罩关闭
    if (shadeClose) {
      this.elem.addEventListener('click', e => {
        let target = e.target || e.srcElement;
        if (/dialog-wrapper/.test(target.className)) {
          this.hide();
        }
      });
    }
  }
}
debugger
var dialog = new Dialog();
var clickMe = document.getElementById('clickMe');
clickMe.addEventListener('click', e => {
  dialog.show({
    title: '新建 Book',
    content: [], // 展示内容
    option: {}, // 搜索条件 {title: '',select_option: []}
    btns: ['下一步', '取消']
  });
});

export default Dialog;