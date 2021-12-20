import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function EntryCr(ent){
  return(
    <Entry
    key={ent.id}
    emoji={ent.emoji}
    name={ent.name}
    meaning={ent.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
<dl className="dictionary">
{emojipedia.map(EntryCr)}
  </dl>
    </div>
  );
}

export default App;
