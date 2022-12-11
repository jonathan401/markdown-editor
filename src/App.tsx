import { FC } from "react";
import Editor from "./components/editor/Editor";

// context
import { EditorProvider } from "./contexts/EditorContext";

const App: FC = () => {
  return (
    <div>
      <EditorProvider>
        <Editor />
      </EditorProvider>
    </div>
  );
};

export default App;
