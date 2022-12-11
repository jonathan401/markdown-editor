// button should have a function
// when clicked called that function from the context
// props: func, title, icon,

// styles
import { IconType } from "react-icons/lib";
import "./btn.style.css";

type BtnProps = {
  titleText: string;
  icon: IconType;
  f: () => void;
};

const Btn = () => {
  return <button className="control-btn">some text</button>;
};

export default Btn;
