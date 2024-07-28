import React from "react";
import List from "./List/List";

function Content() {
  return (
    <div>
      <section className="main">
        <input
          property="toggle_all"
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked="[todo_left = 0]"
        />
        <label htmlFor="toggle-all" mv-action="set(done, !toggle_all)">
        </label>
        <List />
      </section>
    </div>
  );
}

export default Content;
