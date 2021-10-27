# Atom

- 細かく分けられた state、redux とは違い state が小分けにされている
- アトムはどのコンポーネントからでも読み書きできる
- アトムを参照しているコンポーネントは、アトムの状態が変わった時に再レンダリングされる

# Selector

- アトムの state を加工して値を返す
- state からどんな形で値を取得するのか定義できる

# recoil を接続する

値を読み取るだけでいい -> useRecoilValue
値を set するだけでいい -> useSetRecoilState
どちらもする必要がある -> useRecoilState

- useRecoilValue を使っているコンポーネントはアトムをサブスク(アトムの状態が変わるとコンポーネントを再レンダリング)する

# まとめ

- useRecoilValue で atom をサブスク
- useSetRecoilValue で atom を更新
- 別々の RecoilRoot の子コンポーネント同士のやりとりがどうなるか気になる
- コンポーネントのネストの深さに関わらず、直接グローバルステートを参照できるのは相変わらず便利
- redux と比べて action や reducer を作るめんどくささがなくなった。その分、どの値をどう更新するのかわかりにくくなった。useSetRecoilState は hooks のためコンポーネント内に、 今までの redux の reducer の責務を押し付けてしまう印象
- そういった側面からチュートリアルだけでは大規模開発で使われるイメージが湧かなかった
- とはいえグローバルステートを useState のノリで管理できるのはよかった(zustand でいいのではとも思ったけど、zustand も recoil もどっちもチュートリアルでしか使ったことないため、現状自分の中では差別化できていない)
