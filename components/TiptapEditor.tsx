'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useState } from 'react'

interface TiptapEditorProps {
  content: string
  onChange: (content: string) => void
}

export default function TiptapEditor({ content, onChange }: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  if (!editor) {
    return null
  }

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <div className="bg-gray-100 border-b border-gray-300 p-2 flex gap-1 flex-wrap">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded ${
            editor.isActive('bold') ? 'bg-primary-600 text-white' : 'bg-white border border-gray-300'
          } hover:bg-gray-50 disabled:opacity-50`}
        >
          <strong>B</strong>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded ${
            editor.isActive('italic') ? 'bg-primary-600 text-white' : 'bg-white border border-gray-300'
          } hover:bg-gray-50 disabled:opacity-50`}
        >
          <em>I</em>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-3 py-1 rounded ${
            editor.isActive('heading', { level: 2 }) ? 'bg-primary-600 text-white' : 'bg-white border border-gray-300'
          } hover:bg-gray-50`}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-1 rounded ${
            editor.isActive('bulletList') ? 'bg-primary-600 text-white' : 'bg-white border border-gray-300'
          } hover:bg-gray-50`}
        >
          • List
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className="px-3 py-1 rounded bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
        >
          ↶
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          className="px-3 py-1 rounded bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
        >
          ↷
        </button>
      </div>
      <EditorContent
        editor={editor}
        className="prose prose-sm max-w-none p-4 min-h-60 focus:outline-none"
      />
    </div>
  )
}
