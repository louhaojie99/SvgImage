/**
 * @file 自适应组件
 * 可以让图片像作为背景底图保持原有的尺寸, 开发时可以无缝参考设计稿通过 ps 进行测量尺寸做好精准布局
 */
import React from "react";
import styles from "./AdaptiveComponent.less";

const AdaptiveComponent = React.memo(() => {
  return (
    <div className={styles.adaptiveComponentContainer}>
      <div
        className={styles.adaptiveContent}
        style={{ transform: `scale(${屏幕宽度 / 图像宽度})` }}
      >
        <img className={styles.img} src="https://xxxxxxxxxxxxx.png" />
        <div className={styles.layoutContainer}></div>
      </div>
    </div>
  );
});

export default AdaptiveComponent;
