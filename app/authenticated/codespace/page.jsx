'use client'
import AuthenticatedNavbar from "app/Components/AuthenticatedNavbar"
import { useCallback, useEffect, useState } from "react";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import CodespaceResult from "app/Components/CodespaceResult";
import CodeMirror from "@uiw/react-codemirror";



export default function Codespace() {

    //* create three usestate 
  const [html_edit, setHtml_Edit] = useState("");
  const [css_edit, setCss_Edit] = useState("");
  const [js_edit, setJs_Edit] = useState("");

  //* Html onchange handler
  const onChangeHtml = useCallback((value) => {
    setHtml_Edit(value);
  }, []);

  //* Css onchange handler
  const onChangeCss = useCallback((value) => {
    setCss_Edit(value);
  }, []);

  //* JavaScript onchange handler
  const onChangeJavaScript = useCallback((value) => {
    setJs_Edit(value);
  }, []);

  //* Create Html Document
    const srcCode = `
    <html>
      <body>${html_edit}</body>
      <style>${css_edit}</style>
      <script>${js_edit}</script>
    </html>
    ` 

    return (
      <>
        <AuthenticatedNavbar />
        {/* main content  */}
        {/* main content  */}
        <div className=" p-2">
          {/* Editor  */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            {/* Html Editor */}
            <div className="bg-[#282c34] p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2 text-white">HTML</h2>
              <CodeMirror
                className="text-xl border-gray-700 border"
                value={html_edit}
                height="342px"
                theme="dark"
                extensions={[html(true)]}
                onChange={onChangeHtml}
              />
            </div>
            {/* Css Editor  */}
            <div className="bg-[#282c34] p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2 text-white">CSS</h2>
              <CodeMirror
                className="text-xl border-gray-700 border"
                value={css_edit}
                height="342px"
                theme="dark"
                extensions={[css(true)]}
                onChange={onChangeCss}
              />
            </div>
            {/* JavaScript Editor  */}
            <div className="bg-[#282c34] p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2 text-white">
                JavaScript
              </h2>
              <CodeMirror
                className="text-xl border-gray-700 border"
                value={js_edit}
                height="342px"
                theme="dark"
                extensions={[javascript(true)]}
                onChange={onChangeJavaScript}
              />
            </div>
          </div>
          {/* Result  */}
          <CodespaceResult srcCode={srcCode} />
        </div>
      </>
    );
}