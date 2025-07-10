# 🎭 你来比划我来猜 (Cloudflare 版本) 🎭

这是一个基于 Cloudflare Pages 和 Functions 构建的“你来比划我来猜”网页小游戏。它拥有一个动态的、可通过网页直接管理的在线词库。

## ✨ 功能特色

*   **动态词库**: 词库存储在 Cloudflare KV 中，可随时通过管理页面更新。
*   **在线词库管理**: 提供一个完整的管理页面，可以轻松添加、删除和查看所有词卡（包括词语、提示和难度）。
*   **随机词语抽取**: 在游戏主页，可以按“全部”、“简单”、“中等”、“困难”四种难度筛选并随机抽取词语。
*   **丰富的卡片信息**: 抽中的卡片会清晰地显示词语、表演提示和难度图标。
*   **无服务器架构**: 完全基于 Cloudflare 的无服务器平台，无需管理传统服务器，具备高可用性和全球加速能力。

## 🛠️ 技术栈

*   **前端**: HTML, CSS, JavaScript (ESM)
*   **后端**: Cloudflare Functions
*   **数据存储**: Cloudflare KV
*   **托管/部署**: Cloudflare Pages

## 📂 项目结构

```
. 
├── functions/          # 存放后端 Cloudflare Functions 的代码
│   └── api/
│       └── words.js    # 处理所有与词库相关的 API 请求
├── public/             # 存放所有前端静态文件
│   ├── index.html      # 游戏主页
│   ├── manage.html     # 词库管理页
│   ├── rules.html      # 游戏规则页
│   └── cards.js        # 前端用于获取词库数据的模块
└── README.md           # 本说明文件
```

## 🚀 本地开发

要在本地运行此项目进行开发和测试，您需要安装 Node.js 和 Cloudflare 的命令行工具 `wrangler`。

1.  **安装 Wrangler**:
    ```bash
    npm install -g wrangler
    ```

2.  **克隆项目**:
    ```bash
    git clone <your-repo-url>
    cd <project-directory>
    ```

3.  **启动本地开发服务器**:
    `wrangler` 可以在本地模拟 Cloudflare 环境，包括 Functions 和 KV。
    ```bash
    # 这条命令会启动一个本地服务器，并自动为你创建本地的 KV 存储
    wrangler pages dev public
    ```
    该命令会告诉 Wrangler：
    *   `pages dev`: 以 Pages 的模式进行本地开发。
    *   `public`: 你的前端静态文件存放在 `public` 目录中。

    启动后，你就可以在浏览器中打开 `http://localhost:8788` 来访问和测试你的应用了。

## ☁️ 部署指南

本项目可以非常方便地部署到 Cloudflare Pages。

1.  **上传到 Git 仓库**: 将您的项目代码上传到一个 GitHub, GitLab, 或 Bitbucket 仓库。

2.  **创建 Pages 项目**:
    *   登录到您的 Cloudflare 仪表板。
    *   在左侧导航栏中，进入 **Workers & Pages**。
    *   点击 **Create application** -> **Pages** -> **Connect to Git**。
    *   选择您刚刚上传代码的 Git 仓库。

3.  **配置构建设置**:
    *   **项目名称**: 给您的项目起一个名字。
    *   **生产分支**: 选择您希望部署的分支（例如 `main`）。
    *   **框架预设**: 选择 `None`。
    *   **构建命令**: *留空即可*。
    *   **构建输出目录**: 设置为 `/public`。
    *   **根目录**: 保持为 `/` (默认)。

4.  **绑定 KV 命名空间 (关键步骤!)**:
    *   点击 **Save and Deploy** 完成初步部署。
    *   部署完成后，进入您项目的 **Settings** -> **Functions** -> **KV namespace bindings**。
    *   点击 **Add binding**。
    *   **变量名称 (Variable name)**: 输入 `WORDS_KV` (这必须与 `functions/api/words.js` 中的 `env.WORDS_KV` 完全匹配)。
    *   **KV 命名空间 (KV namespace)**: 点击下拉菜单，选择一个您已经创建的 KV 命名空间，或者当场 **Create a new namespace** (例如，可以命名为 `show-and-guess-words`)。

5.  **重新部署**:
    *   绑定完成后，回到您项目的 **Deployments** 页面，找到最新的那条部署记录，点击 **Retry deployment**。这次的部署将会带着 KV 绑定信息一起生效。

部署成功后，您的应用就可以通过 Cloudflare 提供的域名在全球访问了！