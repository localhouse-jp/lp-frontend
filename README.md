# LOCALHOUSE Landing Page

[English](#english) | [日本語](#japanese)

## English

### Overview

This is the official landing page for LOCALHOUSE, a 24/7 open community space for student IT engineers in Japan. The website showcases the community's mission to unleash the creativity of student engineers and provides information about features, members, pricing, and access.

### Features

- **Bilingual Support**: Japanese and English language toggle
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI Components**: Built with Radix UI and custom components
- **Smooth Animations**: Framer Motion for enhanced user experience
- **SEO Optimized**: Next.js App Router with proper metadata and structured data
- **Analytics Integration**: Google Analytics and Google Tag Manager support

### Tech Stack

- **Framework**: Next.js 14.2.16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Icons**: Lucide React

### Getting Started

#### Prerequisites

- Node.js 18.0 or later
- npm or pnpm package manager

#### Installation

1. Clone the repository:
```bash
git clone https://github.com/localhouse-jp/lp-frontend.git
cd lp-frontend
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

#### Build and Deployment

```bash
# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main landing page
│   ├── globals.css        # Global styles
│   ├── privacy/           # Privacy policy page
│   └── terms/             # Terms of service page
├── components/            # Reusable UI components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections (Hero, Features, etc.)
│   └── ui/               # Base UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Additional stylesheets
└── types/                # TypeScript type definitions
```

### Key Sections

- **Hero**: Main banner with community introduction
- **Features**: Highlights of what LOCALHOUSE offers
- **Members**: Community member profiles
- **Gallery**: Visual showcase of the space
- **Sponsors**: Partner organizations
- **Pricing**: Membership plans and pricing
- **Access**: Location and contact information
- **FAQ**: Frequently asked questions

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### License

This project is proprietary software owned by LOCALHOUSE. All rights reserved.

---

## Japanese

### 概要

このプロジェクトは、日本の学生ITエンジニアのための24時間365日オープンなコミュニティスペース「LOCALHOUSE」の公式ランディングページです。学生エンジニアの創造力を解き放つという使命を紹介し、機能、メンバー、料金、アクセス情報を提供しています。

### 特徴

- **多言語対応**: 日本語と英語の切り替え機能
- **レスポンシブデザイン**: Tailwind CSSを使用したモバイルファースト設計
- **モダンUIコンポーネント**: Radix UIとカスタムコンポーネントで構築
- **スムーズなアニメーション**: Framer Motionによる優れたユーザー体験
- **SEO最適化**: Next.js App Routerによる適切なメタデータと構造化データ
- **アナリティクス統合**: Google AnalyticsとGoogle Tag Managerサポート

### 技術スタック

- **フレームワーク**: Next.js 14.2.16
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **UIコンポーネント**: Radix UI
- **アニメーション**: Framer Motion
- **フォーム処理**: React Hook Form with Zod validation
- **チャート**: Recharts
- **アイコン**: Lucide React

### はじめに

#### 前提条件

- Node.js 18.0以上
- npmまたはpnpmパッケージマネージャー

#### インストール

1. リポジトリをクローン:
```bash
git clone https://github.com/localhouse-jp/lp-frontend.git
cd lp-frontend
```

2. 依存関係をインストール:
```bash
npm install --legacy-peer-deps
# または
pnpm install
```

3. 開発サーバーを起動:
```bash
npm run dev
# または
pnpm dev
```

4. ブラウザで [http://localhost:3000](http://localhost:3000) を開く

#### ビルドとデプロイ

```bash
# 本番用ビルド
npm run build

# 本番サーバー起動
npm start

# リンティング実行
npm run lint
```

### プロジェクト構造

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # メタデータを含むルートレイアウト
│   ├── page.tsx           # メインランディングページ
│   ├── globals.css        # グローバルスタイル
│   ├── privacy/           # プライバシーポリシーページ
│   └── terms/             # 利用規約ページ
├── components/            # 再利用可能なUIコンポーネント
│   ├── layout/           # レイアウトコンポーネント（ヘッダー、フッター）
│   ├── sections/         # ページセクション（ヒーロー、機能など）
│   └── ui/               # ベースUIコンポーネント
├── hooks/                # カスタムReactフック
├── lib/                  # ユーティリティ関数
├── public/               # 静的アセット
├── styles/               # 追加スタイルシート
└── types/                # TypeScript型定義
```

### 主要セクション

- **ヒーロー**: コミュニティ紹介のメインバナー
- **機能**: LOCALHOUSEの提供内容のハイライト
- **メンバー**: コミュニティメンバープロフィール
- **ギャラリー**: スペースの視覚的ショーケース
- **スポンサー**: パートナー組織
- **料金**: メンバーシッププランと料金
- **アクセス**: 場所と連絡先情報
- **FAQ**: よくある質問

### 貢献

1. リポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

### ライセンス

このプロジェクトはLOCALHOUSEが所有する専有ソフトウェアです。すべての権利は留保されています。