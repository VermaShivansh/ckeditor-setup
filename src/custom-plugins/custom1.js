import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";

import imageIcon from "./custom1.svg";

// create plugin
export default class Custom1 extends Plugin {
  init() {
    console.log("custom1.js");
    const editor = this.editor;
    // create button
    editor.ui.componentFactory.add("custom1", (locale) => {
      const view = new ButtonView(locale);
      view.set({
        label: "Custom1",
        icon: imageIcon,
        tooltip: true,
      });
      // listen to click event
      view.on("execute", () => {
        alert("custom button clicked");
        // insert custom element
        // this.editor.model.insertContent("custom1");
      });
      return view;
    });
  }
}
