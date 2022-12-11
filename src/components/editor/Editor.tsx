import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGm from "remark-gfm";

// context stuff
import { useEditorContext } from "../../contexts/EditorContext";

// config buttons
import EditorConfig from "./EditorConfig";

import { AiOutlineBold, AiOutlineItalic, AiOutlineEye } from "react-icons/ai";
import { HiOutlineCode } from "react-icons/hi";
import { BsLink45Deg, BsBlockquoteLeft } from "react-icons/bs";
import {
  MdOutlineFormatListBulleted,
  MdOutlineFormatListNumbered,
} from "react-icons/md";
import { BiPencil } from "react-icons/bi";

import { CodeBlock } from "../codeblock";
import "./editor.style.css";

const Editor = () => {
  const { content, setContent } = useEditorContext();
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

  const handleKey = (e: any) => {
    if (e.code === "Tab") {
      e.preventDefault();
      setContent((prevState) => prevState + "\t");
      console.log("content");
    }
  };

  return (
    <div className="markdown-wrap">
      <div className="btn-wrap">
        <button
          className={selectedTab === "write" ? "btn active" : "btn"}
          onClick={() => setSelectedTab("write")}
        >
          <span className="tab-icon">
            <BiPencil />
          </span>
          <span>Write</span>
        </button>
        <button
          className={selectedTab === "preview" ? "btn active" : "btn"}
          onClick={() => setSelectedTab("preview")}
        >
          <span className="tab-icon">
            <AiOutlineEye />
          </span>
          <span>Preview</span>
        </button>
        {selectedTab === "write" ? (
          <div className="controls">
            <button
              onClick={() => setContent((prevState) => prevState + "****")}
              className="btn"
            >
              <AiOutlineBold />
            </button>
            <button
              onClick={() => setContent((prevState) => prevState + "**")}
              className="btn"
            >
              <AiOutlineItalic />
            </button>
            <button
              onClick={() => setContent((prevState) => prevState + "\n-")}
              className="btn"
            >
              <MdOutlineFormatListBulleted />
            </button>
            <button
              onClick={() => setContent((prevState) => prevState + "\n1.")}
              className="btn"
            >
              <MdOutlineFormatListNumbered />
            </button>
            <button
              onClick={() =>
                setContent((prevState) => prevState + "\n```\n```")
              }
              className="btn"
            >
              <HiOutlineCode />
            </button>
            <button
              onClick={() =>
                setContent((prevState) => prevState + "[Text](Link)")
              }
              className="btn"
            >
              <BsLink45Deg />
            </button>
            <button
              onClick={() => setContent((prevState) => prevState + "\n>")}
              className="btn"
            >
              <BsBlockquoteLeft />
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      {selectedTab === "write" ? (
        <textarea
          onKeyDown={handleKey}
          className="editor"
          placeholder="Tell your stor"
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
