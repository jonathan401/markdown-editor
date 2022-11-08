import { useState } from "react";
import ReactMarkdown from "react-markdown";

// styles
// import style from "./markdown-styles.module.css";

const Editor = () => {
  const [text, setText] = useState("");
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");
  return (
    <div>
      <div>
        <button onClick={() => setSelectedTab("write")}>Write</button>
        <button onClick={() => setSelectedTab("preview")}>Preview</button>
      </div>
      {selectedTab === "write" ? (
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      ) : (
        <ReactMarkdown>{text}</ReactMarkdown>
      )}
    </div>
  );
};

export default Editor;
