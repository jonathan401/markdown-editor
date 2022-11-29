import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGm from "remark-gfm";

import { AiOutlineBold, AiOutlineItalic, AiOutlineEye } from "react-icons/ai";
import { HiOutlineCode } from "react-icons/hi";
import { BsLink45Deg, BsBlockquoteLeft } from "react-icons/bs";
import {
  MdOutlineFormatListBulleted,
  MdOutlineFormatListNumbered,
} from "react-icons/md";
import { BiPencil } from "react-icons/bi";

import CodeBlock from "./components/codeblock/CodeBlock";
import "./editor.css";

const Editor = () => {
  const [editorContent, seteditorContent] = useState("");
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

  const handleKey = (e: any) => {
    if (e.code === "Tab") {
      e.preventDefault();
      console.log("tabbed");
      seteditorContent((prevState) => prevState + "\t");
    }
  };

  return (
    <div className="markdown-wrap">
      <div className="btn-wrap">
        <button
          className={selectedTab === "write" ? "btn active" : "btn"}
          onClick={() => setSelectedTab("write")}
        >
          <BiPencil />
          <span>Write</span>
        </button>
        <button
          className={selectedTab === "preview" ? "btn active" : "btn"}
          onClick={() => setSelectedTab("preview")}
        >
          <AiOutlineEye />
          <span>Preview</span>
        </button>
        {selectedTab === "write" ? (
          <div className="controls">
            <button
              onClick={() =>
                seteditorContent((prevState) => prevState + "****")
              }
              className="btn"
            >
              <AiOutlineBold />
            </button>
            <button
              onClick={() => seteditorContent((prevState) => prevState + "**")}
              className="btn"
            >
              <AiOutlineItalic />
            </button>
            <button
              onClick={() => seteditorContent((prevState) => prevState + "\n-")}
              className="btn"
            >
              <MdOutlineFormatListBulleted />
            </button>
            <button
              onClick={() =>
                seteditorContent((prevState) => prevState + "\n1.")
              }
              className="btn"
            >
              <MdOutlineFormatListNumbered />
            </button>
            <button
              onClick={() =>
                seteditorContent((prevState) => prevState + "\n```\n```")
              }
              className="btn"
            >
              <HiOutlineCode />
            </button>
            <button
              onClick={() =>
                seteditorContent((prevState) => prevState + "[Text](Link)")
              }
              className="btn"
            >
              <BsLink45Deg />
            </button>
            <button
              onClick={() => seteditorContent((prevState) => prevState + "\n>")}
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
          placeholder="Tell your story..."
          value={editorContent}
          onChange={(e) => seteditorContent(e.target.value)}
        />
      ) : (
        <ReactMarkdown
          components={CodeBlock}
          remarkPlugins={[remarkGm]}
          className="preview"
        >
          {editorContent ? editorContent : "Nothing to see here 🌵"}
        </ReactMarkdown>
      )}
    </div>
  );
};

export default Editor;
