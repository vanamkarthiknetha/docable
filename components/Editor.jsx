'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Placeholder.configure({ placeholder: 'Type something here...',emptyEditorClass: 'is-editor-empty', })],
    content: '',
    editorProps: {
      attributes: {
        class: 'p-4 focus:outline-none',
      },
    },
  })

  return (
    <>
      <style jsx global>{`
        .is-editor-empty:first-child::before {
          color: rgba(255, 255, 255, 0.2);
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }
      `}</style>
      <EditorContent editor={editor} />
    </>
  )
}

export default Editor
