## astro-icon v1.1.0 issue

### 問題の内容

ローカルのSVGアイコンが一部欠けた状態で表示されることがあります。

特に、[SVG Crop](https://svgcrop.com/)などでviewBoxを調整したSVGアイコンでこの問題が発生します。

- [問題を再現したデモ](https://tetracalibers.github.io/astro-icon-symbol-viewbox-test)

### 考えられる解決策

開発者ツールで試したところ、astro-iconによって埋め込まれたSVGコードを次のように編集することで、この問題を解消することができました。

1. すべてのsvg要素からviewBoxを削除する
2. 代わりにsymbol要素にviewBoxを設定する

```html
<!-- svg要素からviewBoxを削除した -->
<svg width="100" height="100" data-icon="astro-cropped">
  <!-- 代わりにsymbol要素にviewBoxを指定した -->
  <symbol id="ai:local:astro-cropped" viewBox="4.93 2 22.15 28">
    <!-- ... -->
  </symbol>
  <use xlink:href="#ai:local:astro-cropped"></use>
</svg>
<!-- svg要素からviewBoxを削除した -->
<svg width="100" height="100" data-icon="astro-cropped">
  <use xlink:href="#ai:local:astro-cropped"></use>
</svg>
```

### 参考：一時的な回避策

#### `is:inline`を使用

Iconコンポーネントに`is:inline`を指定すると、この問題を回避できます。

- [is:inlineを使ったデモ](https://tetracalibers.github.io/astro-icon-symbol-viewbox-test/is-inline)

#### `symbol`タグに`overflow: visible`を指定

次のようなCSSを追加することで、この問題を回避できます。

```css
[data-icon] :global(symbol) {
  overflow: visible;
}
```

- [このCSSを適用したデモ](https://tetracalibers.github.io/astro-icon-symbol-viewbox-test/symbol-overflow-visible)
