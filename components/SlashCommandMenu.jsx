import React from "react";

export default function SlashCommandMenu({ editor, slashPos, setSlashPos }) {
  const items = [
    {
      label: "Heading 1",
      command: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    },
    {
      label: "Heading 2",
      command: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
      label: "Heading 3",
      command: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    },
    {
      label: "Bullet List",
      command: () => editor.chain().focus().toggleBulletList().run(),
    },
    {
      label: "Paragraph",
      command: () => editor.chain().focus().setParagraph().run(),
    },
  ];
  const onSelect = (command) => {
    if (!editor || !slashPos) return;
    editor
      .chain()
      .focus()
      .deleteRange({ from: slashPos.from, to: slashPos.to })
      .run();

    command();
    setSlashPos(null);
  };
  return (
    <div
      className="absolute z-50 bg-white border border-gray-300 shadow-md rounded-md w-56"
      style={{
        top: slashPos?.coords?.top + 20 || 0,  
    left: slashPos?.coords?.left || 0,
      }}
    >
      <div className="bg-black rounded-md border border-white/30">
        {items.map((item, index) => (
          <div
            key={index}
            className="px-4 py-2 hover:bg-white/30 cursor-pointer rounded"
            onClick={() => onSelect(item.command)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
