# Junhui Li - Portfolio Website

一个现代化的个人作品展示网站，使用 React + TypeScript + Tailwind CSS 构建。

## 🚀 特性

- **响应式设计** - 完美适配桌面端和移动端
- **现代化 UI** - 使用 Tailwind CSS 构建的美丽界面
- **流畅动画** - 平滑的页面过渡和交互效果
- **性能优化** - 使用 Vite 构建，加载速度快
- **SEO 友好** - 包含完整的元数据和结构化数据
- **无障碍访问** - 符合 WCAG 2.1 标准

## 🛠️ 技术栈

- **前端框架**: React 18 + TypeScript
- **样式**: Tailwind CSS
- **构建工具**: Vite
- **字体**: Inter (Google Fonts)
- **图标**: Heroicons (SVG)

## 📁 项目结构

```
src/
├── components/          # React 组件
│   ├── Header.tsx      # 导航栏
│   ├── Hero.tsx        # 首页横幅
│   ├── About.tsx       # 关于我
│   ├── Skills.tsx      # 技能展示
│   ├── Projects.tsx    # 项目展示
│   ├── Contact.tsx     # 联系表单
│   └── Footer.tsx      # 页脚
├── App.tsx             # 主应用组件
├── main.tsx           # 应用入口
└── index.css          # 全局样式
```

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:5173](http://localhost:5173) 查看网站。

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 🎨 自定义

### 修改个人信息

1. 更新 `src/components/Header.tsx` 中的姓名
2. 修改 `src/components/Hero.tsx` 中的介绍文字
3. 更新 `src/components/About.tsx` 中的个人描述
4. 修改 `src/components/Contact.tsx` 中的联系信息

### 更换颜色主题

在 `tailwind.config.js` 中修改 `primary` 颜色：

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... 其他色阶
  },
}
```

### 添加新项目

在 `src/components/Projects.tsx` 中的 `projects` 数组中添加新项目：

```javascript
{
  id: 7,
  title: '新项目名称',
  description: '项目描述',
  image: '项目图片URL',
  category: 'web', // 或 'mobile', 'design'
  technologies: ['React', 'Node.js'],
  liveUrl: '项目链接',
  githubUrl: 'GitHub链接',
}
```

## 📱 响应式断点

- **移动端**: < 768px
- **平板**: 768px - 1024px
- **桌面端**: > 1024px

## 🌐 部署

### Vercel (推荐)

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署完成

### Netlify

1. 构建项目: `npm run build`
2. 将 `dist` 文件夹上传到 Netlify

### 其他静态托管

构建后上传 `dist` 文件夹到任何静态文件托管服务。

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系

如有问题，请通过以下方式联系：

- Email: junhui.li@example.com
- GitHub: [@junhuili](https://github.com/junhuili)
- LinkedIn: [Junhui Li](https://linkedin.com/in/junhuili)
