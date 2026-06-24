export const SITE_TITLE = 'WANG YULUN';
export const SITE_DESCRIPTION = 'Frontend & Full-stack Developer — Building polished, performant web experiences';

export const NAME = '王雨伦';
export const NAME_EN = 'Wang Yulun';
export const TAGLINE = '软件工程 · 前端 / 全栈开发';
export const TAGLINE_EN = 'Crafting software with precision and taste';

export const INTRO = `湖北理工学院软件工程本科（2026届）。深入理解 JS 核心机制与浏览器渲染原理，能从底层定位性能瓶颈。独立完成过从数据库设计到前端页面的完整链路交付，涵盖微信小程序、React 桌面客户端、Vue3 管理后台。热衷开源，项目在 GitHub 发布并提供完整文档与安装包。`;

export interface NavItem {
  label: string;
  labelEn: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: '首页', labelEn: 'Home', href: '/' },
  { label: '技术栈', labelEn: 'Skills', href: '/skills' },
  { label: '项目', labelEn: 'Projects', href: '/projects' },
  { label: '代码片段', labelEn: 'Snippets', href: '/snippets' },
  { label: '读过', labelEn: 'Books', href: '/books' },
  { label: '兴趣', labelEn: 'Interests', href: '/interests' },
];

export const PROJECTS = [
  {
    name: 'YueEasy / 乐易',
    subtitle: '在线音乐平台 · 开源桌面客户端',
    role: '独立开发',
    period: '2025.09 — 至今',
    stack: 'React · Tauri 2.0 · Rust (Axum + SQLite) · Zustand · TailwindCSS v4',
    link: 'https://github.com/kongbai/yueeasy',
    linkLabel: 'github.com/kongbai/yueeasy',
    image: '',
    highlights: [
      '领域驱动分层设计：核心播放领域层（纯 TS，含音频引擎、状态机、歌词解析器）与 UI 层完全解耦，Web/Tauri 双端零成本复用',
      '实现 60fps 逐字歌词：基于 rAF 封装高频时间更新（~16ms），突破浏览器原生 timeupdate 250ms 瓶颈',
      '虚拟滚动渲染播放列表（500+ 首 DOM 节点降至 ~20 个），IndexedDB + Rust 双层缓存使二次播放延迟降 60%',
      'Windows SMTC 集成，CSS 变量运行时主题系统，GitHub Actions 自动化构建与发布',
    ],
  },
  {
    name: '黄石二中校友会系统',
    subtitle: '校友注册认证 · 活动管理 · 入校核销',
    role: '团队负责人（3人）',
    period: '2024.12 — 2025.03',
    stack: '微信小程序 · Vue3 + TDesign · NestJS · MySQL',
    image: '',
    highlights: [
      '主导与校方需求沟通与 UI 方案展示，独立完成数据库概念建模与前後端接口规范制定',
      'JWT 时效令牌（5分钟过期）+ 动态加密二维码入校鉴权方案，防范截图复用与重放攻击',
      '校友 / 组织负责人 / 校方管理员三级 RBAC 权限控制，路由 + 组件 + 接口三重校验',
      'Canvas 客户端图片压缩（3-5MB → 200KB），上传并发控制保障弱网体验',
    ],
  },
  {
    name: '在线书店',
    subtitle: '前后端分离购书平台',
    role: '前端开发',
    period: '2025.04 — 2025.05',
    stack: 'React · SpringBoot',
    image: '',
    highlights: [
      '首屏性能优化：路由级代码分割 + 图片懒加载 + 按需引入，Lighthouse 评分 55 → 91，加载 3.8s → 0.8s',
      '全局消息通知系统：观察者模式封装，支持多消息队列管理、自动消失倒计时与进出场动画',
      '搜索防抖 300ms + AbortController 取消竞态请求，支持拼音前缀匹配与关键词高亮',
      'IntersectionObserver 无限滚动替代传统 scroll 方案，避免频繁滚动距离计算',
    ],
  },
];

export const SKILLS = [
  {
    category: '核心',
    accent: '#d94a3d',
    items: [
      { name: 'TypeScript', level: 'expert' },
      { name: 'JavaScript', level: 'expert' },
      { name: 'React', level: 'advanced' },
      { name: 'Vue 3', level: 'advanced' },
      { name: 'Node.js', level: 'advanced' },
    ],
  },
  {
    category: '框架 & 工具',
    accent: '#c7782e',
    items: [
      { name: 'Tauri 2.0', level: 'advanced' },
      { name: 'NestJS', level: 'advanced' },
      { name: 'Zustand', level: 'advanced' },
      { name: 'TailwindCSS', level: 'expert' },
      { name: 'Shadcn/ui', level: 'advanced' },
      { name: 'TDesign', level: 'intermediate' },
    ],
  },
  {
    category: '后端 & 数据',
    accent: '#3b7d6e',
    items: [
      { name: 'Rust (Axum)', level: 'intermediate' },
      { name: 'MySQL', level: 'advanced' },
      { name: 'SQLite', level: 'advanced' },
      { name: 'RESTful API', level: 'expert' },
      { name: 'JWT / RBAC', level: 'advanced' },
    ],
  },
  {
    category: '工程化',
    accent: '#5b6e9e',
    items: [
      { name: 'Vite', level: 'expert' },
      { name: 'Git', level: 'expert' },
      { name: 'GitHub Actions', level: 'intermediate' },
      { name: '性能优化', level: 'advanced' },
      { name: 'Linux', level: 'intermediate' },
    ],
  },
];

export interface Snippet {
  title: string;
  lang: string;
  code: string;
  desc: string;
}

export const SNIPPETS: Snippet[] = [
  {
    title: '60fps 时间引擎',
    lang: 'typescript',
    desc: '封装 rAF 实现高频时间更新，突破浏览器原生 timeupdate 250ms 瓶颈，驱动逐字歌词与频谱可视化',
    code: `class FrameClock {
  private rafId = 0;
  private lastTime = 0;

  start(onTick: (elapsed: number) => void) {
    const tick = (now: number) => {
      const delta = now - this.lastTime;
      this.lastTime = now;
      onTick(delta);
      this.rafId = requestAnimationFrame(tick);
    };
    this.rafId = requestAnimationFrame(tick);
  }

  stop() {
    cancelAnimationFrame(this.rafId);
  }
}

const clock = new FrameClock();
clock.start((dt) => {
  audioEl.currentTime += dt / 1000;
  lyricsRenderer.sync(audioEl.currentTime);
});`,
  },
  {
    title: 'JWT 时效鉴权 + 动态加密二维码',
    lang: 'typescript',
    desc: '5分钟过期令牌 + 动态二维码加密，防范截图复用与重放攻击',
    code: `@Injectable()
export class QRCodeService {
  generateToken(userId: string, salt: string) {
    const payload = {
      sub: userId,
      salt,
      iat: Date.now(),
    };
    return this.jwt.sign(payload, {
      secret: process.env.QR_SECRET,
      expiresIn: '5m',
    });
  }

  verify(token: string) {
    try {
      const decoded = this.jwt.verify(token);
      const elapsed = Date.now() - decoded.iat;
      if (elapsed > 5 * 60 * 1000) throw new UnauthorizedException();
      return decoded;
    } catch {
      throw new UnauthorizedException('二维码已失效');
    }
  }
}`,
  },
  {
    title: '双指针 LRC 歌词解析器',
    lang: 'typescript',
    desc: '从零实现行级歌词格式解析，O(n) 时间复杂度，支持多时间标签与偏移量',
    code: `export function parseLRC(raw: string): LyricLine[] {
  const timeTagRe = /\\[(\\d{2}):(\\d{2}(?:\\.\\d+)?)\\]/g;
  const lines: LyricLine[] = [];

  for (const line of raw.split('\\n')) {
    const tags: number[] = [];
    let match: RegExpExecArray | null;
    while ((match = timeTagRe.exec(line)) !== null) {
      tags.push(+match[1] * 60 + +match[2]);
    }
    const text = line.replace(timeTagRe, '').trim();
    if (text) {
      for (const t of tags) lines.push({ time: t, text });
    }
  }
  return lines.sort((a, b) => a.time - b.time);
}`,
  },
  {
    title: '全局消息通知系统（观察者模式）',
    lang: 'typescript',
    desc: '挂载在根节点的全局 Message 组件，支持队列管理与进出场动画',
    code: `type Listener = (msg: Message) => void;

class MessageBus {
  private listeners = new Set<Listener>();

  subscribe(fn: Listener) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  emit(msg: Message) {
    for (const fn of this.listeners) fn(msg);
  }
}

export const messageBus = new MessageBus();

export function useMessage() {
  return {
    info: (text: string) =>
      messageBus.emit({ type: 'info', text, id: nanoid() }),
    success: (text: string) =>
      messageBus.emit({ type: 'success', text, id: nanoid() }),
  };
}`,
  },
];

export interface Book {
  title: string;
  author: string;
  cover: string;
  note: string;
  spine: string;
}

export const BOOKS: Book[] = [
  {
    title: '你不知道的 JavaScript（上中下）',
    author: 'Kyle Simpson',
    cover: '',
    spine: '#e8b339',
    note: '深入理解作用域、闭包、原型链与异步编程。对 JS 底层机制的认知转折点。',
  },
  {
    title: '代码整洁之道',
    author: 'Robert C. Martin',
    cover: '',
    spine: '#3b7d6e',
    note: '函数短小、命名有意义的变量、注释即谎言——影响代码审美的关键一本书。',
  },
  {
    title: '重构：改善既有代码的设计',
    author: 'Martin Fowler',
    cover: '',
    spine: '#d94a3d',
    note: '学会识别代码坏味道，掌握提炼函数、内联变量等核心重构手法。',
  },
  {
    title: '深入理解计算机系统 (CSAPP)',
    author: 'Randal E. Bryant',
    cover: '',
    spine: '#5b6e9e',
    note: '从内存、缓存到指令流水线，建立对计算机系统的完整认知模型。',
  },
  {
    title: '设计模式：可复用面向对象软件的基础',
    author: 'GoF',
    cover: '',
    spine: '#7b4d8c',
    note: '策略模式、状态机、观察者——在音乐播放器与书店项目中反复验证。',
  },
  {
    title: 'Rust 程序设计',
    author: 'Jim Blandy',
    cover: '',
    spine: '#c7782e',
    note: '所有权、生命周期、trait 系统。借助 Rust 重新理解内存管理。',
  },
  {
    title: '图解 HTTP',
    author: '上野宣',
    cover: '',
    spine: '#4a90a4',
    note: '从状态码到头字段，从缓存机制到 HTTPS 握手。前端必读网络基础。',
  },
  {
    title: '高性能 MySQL',
    author: 'Baron Schwartz',
    cover: '',
    spine: '#508d69',
    note: '索引优化、查询执行计划、Schema 设计——从 CRUD 到真正理解数据库。',
  },
];

export interface Interest {
  icon: string;
  title: string;
  desc: string;
  color: string;
}

export const INTERESTS: Interest[] = [
  {
    icon: '',
    title: '🎵 音乐与音频技术',
    desc: '热爱音乐，从播放器开发出发深入音频编解码、波形可视化和歌词渲染。乐易项目就是对音乐 + 技术的融合实践。',
    color: '#d94a3d',
  },
  {
    icon: '',
    title: '🖥️ 桌面应用开发',
    desc: '着迷于 Tauri 带来的轻量桌面体验。享受从 Web 技术栈构建原生应用的跨界感，追求 60fps 的流畅交互。',
    color: '#c7782e',
  },
  {
    icon: '',
    title: '📐 软件架构与设计模式',
    desc: '偏爱领域驱动设计（DDD），享受将复杂业务抽象为纯逻辑层的过程。在实际项目中反复实践策略、观察者、状态机等模式。',
    color: '#3b7d6e',
  },
  {
    icon: '',
    title: '🚀 性能优化',
    desc: '从 Lighthouse 评分优化到虚拟滚动实现，从首屏加载分析到帧率调优。将"快"作为产品的第一体验指标。',
    color: '#5b6e9e',
  },
  {
    icon: '',
    title: '🤖 AI 辅助开发',
    desc: '日常深度使用 Copilot、Cursor、Claude Code。善于编排 AI 工作流——从代码生成到重构，从文档撰写到问题诊断。',
    color: '#7b4d8c',
  },
  {
    icon: '',
    title: '📖 技术阅读与写作',
    desc: '习惯通过读书建立系统知识框架，通过博客和笔记整理思维。认为没有记录就没有真正的理解。',
    color: '#4a90a4',
  },
];
