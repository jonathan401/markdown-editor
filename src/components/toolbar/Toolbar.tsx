import { AiOutlineBold, AiOutlineItalic } from "react-icons/ai";
import { HiOutlineCode } from "react-icons/hi";
import { BsLink45Deg, BsBlockquoteLeft } from "react-icons/bs";
import {
  MdOutlineFormatListBulleted,
  MdOutlineFormatListNumbered,
} from "react-icons/md";

// context stuff
import { useEditorContext } from "../../contexts/EditorContext";

// styles
import "./toolbar.style.css";

const Toolbar = () => {
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
    <div className="toolbar">
      <button onClick={addBold} className="btn">
        <AiOutlineBold />
      </button>
      <button onClick={addItalics} className="btn">
        <AiOutlineItalic />
      </button>
      <button onClick={addBulletList} className="btn">
        <MdOutlineFormatListBulleted />
      </button>
      <button onClick={addNumList} className="btn">
        <MdOutlineFormatListNumbered />
      </button>
      <button onClick={addCodeSnippet} className="btn">
        <HiOutlineCode />
      </button>
      <button onClick={addLink} className="btn">
        <BsLink45Deg />
      </button>
      <button onClick={addQuote} className="btn">
        <BsBlockquoteLeft />
      </button>
    </div>
  );
};

export default Toolbar;
