---
title: 「Gatsby」gatsby-plugin-sitemapを使ってサイトマップを生成する
date: 2020-09-12 19:10:56
description: gatsby-plugin-sitemapを使ってサイトマップを生成する
---
SEO対策のためにgatsby-plugin-sitemapを使ってXMLサイトマップを生成してみる。

## インストール&設定
```sh
yarn add gatsby-plugin-sitemap
```

```javascript
// gatsby.config.js
siteMetadata: {
  siteUrl: `https://www.example.com`,
},
plugins: [`gatsby-plugin-sitemap`]
```
siteMetadataが設定されていないとエラーが出るらしいので注意。

## オプション
詳しくは公式サイト[参照](https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/)
```javascript
plugins: {
  resolve: `gatsby-plugin-sitemap`,
  options: {
    query: site.siteMetadata.siteUrl //データーを生成するためのクエリー
    output: '/sitemap.xml' //サイトマップの置き場所
    exclude: '/exclude_path' //サイトマップから除外するパス
    createLinkInHead: true //headタグにサイトマップのリンクを記載するか
    serialize: serialize()//クエリを受け取ってサイトマップエントリの配列を返す関数を設定
    resolveSiteUrl: resolveSiteUrl() //クエルを受け取ってサイトマップのurlを返す関数を設定
    sitemapSize: 5000 //サイトマップ内のURLが設定した値を超えた場合に分割する
  }
}
```

## まとめ
サイトマップはgatsbyがproductionモードで起動したときのみに生成されるらしいので注意
