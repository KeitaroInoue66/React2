import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "yellow"
};

// このmemoというのはpropsが変更されない限り再レンダリングされないよという意味になる
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  return (
    <>
      {/* 参考演算子 */}
      {/* openがtrueであれば?の横をレンダリング falseであれば : の横川をレンダリング */}
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
