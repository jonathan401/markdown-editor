import { useState } from "react";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { TiTick } from "react-icons/ti";

// styles
import "./copybtn.style.css";

const CopyBtn = ({ children }: any) => {
  const [isCopied, setIsCopied] = useState<true | false>(false);

  const copyIcon = isCopied ? <TiTick /> : <HiOutlineClipboardCopy />;
  const iconColor = isCopied ? "active" : "inactive";

  const handleClick = (e: any) => {
    navigator.clipboard.writeText(children[0].props.children[0]);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2400);
  };

  return (
    <button className={`copy-btn ${iconColor}`} onClick={handleClick}>
      <div className="copy-text">{isCopied ? "COPIED" : "COPY"} </div>
      <span className="copy-btn-icon">{copyIcon}</span>
    </button>
  );
};

export default CopyBtn;
