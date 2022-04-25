import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  // 子コンポーネントの閉じるボタンんを押したら非表示にする
  // 　この中でsetOpenという関数をfalseにする関数を作成する
  // アロー関数は毎回新しい関数を生成していることにあんる
  const onClickClose = useCallback(() => setOpen(false), []);

  // 変数に対してのmemo化になる 最初に読み込まれた時にだけ行われる その後はtempという変数は4という値を持ったまま使いまわされる
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
