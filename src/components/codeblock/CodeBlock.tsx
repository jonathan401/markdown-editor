import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { shadesOfPurple } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CodeProps } from "react-markdown/lib/ast-to-react";

import { CopyBtn } from "../copybtn";

// styles
import "./code.style.css";

const Pre = ({ children }: any) => (
  <pre>
    <CopyBtn>{children}</CopyBtn>
    {children}
  </pre>
);

const CodeBlock = {
  pre: Pre,
  code({ node, inline, className, children, style, ...props }: CodeProps) {
    const match = /language-(\w+)/.exec(className || "");

    return !inline && match ? (
      <SyntaxHighlighter
        style={shadesOfPurple}
        PreTag="div"
        className="code-block"
        language={match[1]}
        children={String(children).replace(/\n$/, "")}
        {...props}
      />
    ) : (
      <code className={className ? className : ""} {...props}>
        {children}
      </code>
    );
  },
};

export default CodeBlock;
