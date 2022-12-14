import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGm from "remark-gfm";

// icons
import { BiPencil } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

// context stuff
import { useEditorContext } from "../../contexts/EditorContext";

// components
import { CodeBlock } from "../codeblock";
import { Tab } from "../tab";
import { Toolbar } from "../Toolbar";

// styles
import "./editor.style.css";

const Editor = () => {
  const { addTab } = useEditorContext();
  const { content, setContent } = useEditorContext();
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

  const handleKey = (e: any) => {
    if (e.code === "Tab") {
      e.preventDefault();
      addTab();
      console.log("content");
    }
  };

  return (
    <div className="markdown-wrap">
      <div className="toolbar-wrap">
        <Tab
          tabName="write"
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        >
          <span className="tab-icon">
            <BiPencil />
          </span>
          <span>Write</span>
        </Tab>
        <Tab
          tabName="preview"
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        >
          <span className="tab-icon">
            <AiOutlineEye />
          </span>
          <span>Preview</span>
        </Tab>
        {selectedTab === "write" ? <Toolbar /> : ""}
      </div>
      {selectedTab === "write" ? (
        <textarea
          onKeyDown={handleKey}
          className="editor"
          placeholder="Tell your story..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      ) : (
        <ReactMarkdown
          components={CodeBlock}
          linkTarget="_blank"
          remarkPlugins={[remarkGm]}
          className="preview"
        >
          {content ? content : "Nothing to see here 🌵"}
        </ReactMarkdown>
      )}
    </div>
  );
};

export default Editor;
