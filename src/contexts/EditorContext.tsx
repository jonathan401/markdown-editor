import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type EditorContextType = {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
  addBold: () => void;
  addItalics: () => void;
  addBulletList: () => void;
  addNumList: () => void;
  addCodeSnippet: () => void;
  addLink: () => void;
  addQuote: () => void;
  addTab: () => void;
};

type Props = {
  children: React.ReactNode;
};

const EditorContext = createContext<EditorContextType | null>(null);

export const EditorProvider = ({ children }: Props) => {
  const [content, setContent] = useState("");

  // bold text
  const addBold = () => setContent((prevState) => prevState + "****");

  // italize text
  const addItalics = () => setContent((prevState) => prevState + "**");

  // bullet list
  const addBulletList = () => setContent((prevState) => prevState + "\n-");

  // numbered list
  const addNumList = () => setContent((prevState) => prevState + "\n1.");

  // code block
  const addCodeSnippet = () =>
    setContent((prevState) => prevState + "\n```\n```");

  // link text
  const addLink = () => setContent((prevState) => prevState + "[Text](Link)");

  // block quote
  const addQuote = () => {
    setContent((prevState) => prevState + "\n>");
  };

  // tab
  const addTab = () => {
    setContent((prevState) => prevState + "\t");
  };

  return (
    <EditorContext.Provider
      value={{
        content,
        setContent,
        addBold,
        addItalics,
        addBulletList,
        addNumList,
        addCodeSnippet,
        addLink,
        addQuote,
        addTab,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => {
  const content = useContext(EditorContext);
  if (!content) {
    throw new Error("editor content state not found");
  }
  return content;
};

export default EditorContext;
