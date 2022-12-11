import { IconType } from "react-icons";
import { AiOutlineBold, AiOutlineItalic } from "react-icons/ai";
import { HiOutlineCode } from "react-icons/hi";
import { BsLink45Deg, BsBlockquoteLeft } from "react-icons/bs";
import {
  MdOutlineFormatListBulleted,
  MdOutlineFormatListNumbered,
} from "react-icons/md";

interface BtnListType {
  key: string;
  titleText: string;
  icon: IconType;
  f: string;
}

const ButtonList: BtnListType[] = [
  {
    key: "bold",
    titleText: "Bold text",
    icon: AiOutlineBold,
    f: "addBold",
  },
  {
    key: "text",
    titleText: "Italic text",
    icon: AiOutlineItalic,
    f: "addItalics",
  },
  {
    key: "bulletlist",
    titleText: "Unordered List",
    icon: MdOutlineFormatListBulleted,
    f: "addBulletList",
  },
  {
    key: "numberedlist",
    titleText: "Ordered List",
    icon: MdOutlineFormatListNumbered,
    f: "addNumList",
  },
  {
    key: "code-snippet",
    titleText: "Code snippet",
    icon: HiOutlineCode,
    f: "addCodeSnippet",
  },
  {
    key: "link",
    titleText: "Link",
    icon: BsLink45Deg,
    f: "addLink",
  },
  {
    key: "quote",
    titleText: "Block quote",
    icon: BsBlockquoteLeft,
    f: "addQuote",
  },
];

export default ButtonList;
