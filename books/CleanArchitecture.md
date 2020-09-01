---
isbn: "4048930656"
---

毎日 15 分読んで、読み切る。

### 21.　叫ぶアーキテクチャ

- 優れたアーキテクチャは usecase を中心
  - これを最初に考えて、詳細(DB/Framework)はあとから考える
- Web は I/O である
- アーキテクチャがシステムそのものについて、情報を与える。Framework についてではない。

### 22. Clean Architecture

- ヘキサゴナルアーキテクチャ
- DCI アーキテクチャ
- BCE

「関心事の分離」が目的

- フレームワークの非依存
- テスト可能
- UI 非依存
- データベース非依存
- 外部エージェント非依存

エンティティ

- ビジネスロジック

ユースケース

- アプリケーション固有ロジック

インターフェースアダプター

- 便利なフォーマットに変換する
- Presenter, View, Controller (Model = Controller -> Usecase -> Presenter)

フレームワークとドライバ

- 一番外側の円
- 最小のコードになるように、グルーコードぐらい

境界線を超えるデータは単純なオブジェクトであるべき、DB Framework の行構造のデータ構造を利用して、依存性のルールに違反してしまう可能性もあるから、注意が必要

### 23. プレゼンターと Humble Object

View は Humble Object である。Presenter はテスト可能なコンポーネントでそれらを分離する。

### 24. 部分的な境界

- Strategy Pattern
- Facade

YAGNI (You Aren't Going to Need It)

### 25. レイヤーと境界
