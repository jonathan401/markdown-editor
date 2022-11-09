import { useState } from "react";
import ReactMarkdown from "react-markdown";

import "./editor.css";

// styles
// import style from "./markdown-styles.module.css";

const Editor = () => {
  const [editorContent, seteditorContent] = useState("");
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

  return (
    <div className="markdown-wrap">
      <div className="btn-wrap">
        <button
          className={selectedTab === "write" ? "btn active" : "btn"}
          onClick={() => setSelectedTab("write")}
        >
          Write
        </button>
        <button
          className={selectedTab === "preview" ? "btn active" : "btn"}
          onClick={() => setSelectedTab("preview")}
        >
          Preview
        </button>
      </div>
      {selectedTab === "write" ? (
        <textarea
          className="editor"
          placeholder="Tell your story..."
          value={editorContent}
          onChange={(e) => seteditorContent(e.target.value)}
        />
      ) : (
        <ReactMarkdown className="preview">
          {editorContent ? editorContent : "Nothing to see here 🌵"}
        </ReactMarkdown>
      )}
    </div>
  );
};

export default Editor;
