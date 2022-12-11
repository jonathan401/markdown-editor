import { useEditorContext } from "../../contexts/EditorContext";
import ButtonList from "../btn/ButtonList";

const EditorConfig = () => {
  const {
    addBold,
    addItalics,
    addBulletList,
    addNumList,
    addCodeSnippet,
    addLink,
    addQuote,
  } = useEditorContext();
  return (
    <div>
      <span>hi</span>
      {ButtonList.map((btn) => (
        <button>{btn.titleText}</button>
      ))}
    </div>
  );
};

export default EditorConfig;
