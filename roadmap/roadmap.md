---
title: 路线图
---

## 大致打算

先做CSGO Hud Generator的v1.0，建立网站的整体框架，实现击杀生成的功能，静态部署到pages上（gitee和github都部署，后者用hud.hlae.site），并尝试用wails打包分发桌面端应用；同时开发ReleaseDelivr，用于搬运归档加速各种软件Release的下载，为HLAE Studio作准备。

然后做HLAE Studio的v1.0，先复现HLAE Updater的功能并加上GUI，检查HLAE和FFmpeg的更新、是否已经安装，自动下载更新这些工具，快捷打开HLAE的安装位置；再加上软件自我更新的功能，1.0版本形成一整套应用框架（包括UI风格+框架），`先造个地基`，为后面的项目做准备（套用）。

做One Encoder的v1.0的版本，可能会有点简陋，类似于高级版的高级工厂/小丸工具箱/handbrake，跨平台，并且后期加入avs/vs支持。1.0版本解决要调用到的ffmpeg/x264/x265的下载/安装/更新问题，支持拖拽视频文件显示媒体信息，然后指定导出位置，加个文本框输入压制参数，和按钮用于开始压制/转码，要求OE能够调用cmd -> ffmpeg/x264/x265实时读取log，然后判断压制的进度。

下一阶段同时维护前面三个项目，做v2.0版本的改进，目前暂不展开了。

## 时间轴

<template>
  <a-timeline>
    <a-timeline-item>
      v0.0.x 示例
      <a-tag color="blue">xx版</a-tag>
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="orange">新增</a-tag> 添加了鸽食；<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 优化了鸽食的投喂方式；<br/>
        &emsp;- <a-tag color="purple">修复</a-tag> 修复了找不到鸽食的问题。<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      v0.0.x 示例2
      <a-tag color="blue">xx版</a-tag>
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="orange">新增</a-tag> 添加了鸽食；<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 优化了鸽食的投喂方式；<br/>
        &emsp;- <a-tag color="purple">修复</a-tag> 修复了找不到鸽食的问题。<br/>
      </p>
    </a-timeline-item>
  </a-timeline>
</template>