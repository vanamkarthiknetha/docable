import React from "react";

const ExportMarkdown = ({ editor }) => {
  const exportMarkdown = () => {
    const markdown = editor.storage.markdown.getMarkdown();

    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "document.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  if (!editor) return null;
  return (
    <div>
      <button className="bg-white/10 rounded px-1" onClick={exportMarkdown}>
        Export as Markdown
      </button>
    </div>
  );
};

export default ExportMarkdown;
