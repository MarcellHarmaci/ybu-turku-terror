import { useEffect, useState } from "react"

import { RichTextProvider } from "reactjs-tiptap-editor"

// Base Kit
import { Document } from "@tiptap/extension-document"
import { HardBreak } from "@tiptap/extension-hard-break"
import { ListItem } from "@tiptap/extension-list"
import { Paragraph } from "@tiptap/extension-paragraph"
import { Text } from "@tiptap/extension-text"
import { TextStyle } from "@tiptap/extension-text-style"
import {
  Dropcursor,
  Gapcursor,
  Placeholder,
  TrailingNode,
} from "@tiptap/extensions"

// build extensions
import { RichTextAttachment } from "reactjs-tiptap-editor/attachment"
import {
  Blockquote,
  RichTextBlockquote,
} from "reactjs-tiptap-editor/blockquote"
import { Bold, RichTextBold } from "reactjs-tiptap-editor/bold"
import {
  BulletList,
  RichTextBulletList,
} from "reactjs-tiptap-editor/bulletlist"
import { Callout, RichTextCallout } from "reactjs-tiptap-editor/callout"
import { Clear, RichTextClear } from "reactjs-tiptap-editor/clear"
import { Color, RichTextColor } from "reactjs-tiptap-editor/color"
import {
  Column,
  ColumnNode,
  MultipleColumnNode,
  RichTextColumn,
} from "reactjs-tiptap-editor/column"
import { Emoji, RichTextEmoji } from "reactjs-tiptap-editor/emoji"
import {
  FontFamily,
  RichTextFontFamily,
} from "reactjs-tiptap-editor/fontfamily"
import { FontSize, RichTextFontSize } from "reactjs-tiptap-editor/fontsize"
import { Heading, RichTextHeading } from "reactjs-tiptap-editor/heading"
import { Highlight, RichTextHighlight } from "reactjs-tiptap-editor/highlight"
import {
  History,
  RichTextRedo,
  RichTextUndo,
} from "reactjs-tiptap-editor/history"
import {
  HorizontalRule,
  RichTextHorizontalRule,
} from "reactjs-tiptap-editor/horizontalrule"
import { Iframe, RichTextIframe } from "reactjs-tiptap-editor/iframe"
import { Indent, RichTextIndent } from "reactjs-tiptap-editor/indent"
import { Italic, RichTextItalic } from "reactjs-tiptap-editor/italic"
import { Katex, RichTextKatex } from "reactjs-tiptap-editor/katex"
import {
  LineHeight,
  RichTextLineHeight,
} from "reactjs-tiptap-editor/lineheight"
import { Link, RichTextLink } from "reactjs-tiptap-editor/link"
import { MoreMark, RichTextMoreMark } from "reactjs-tiptap-editor/moremark"
import {
  OrderedList,
  RichTextOrderedList,
} from "reactjs-tiptap-editor/orderedlist"
import {
  RichTextSearchAndReplace,
  SearchAndReplace,
} from "reactjs-tiptap-editor/searchandreplace"
import { RichTextStrike, Strike } from "reactjs-tiptap-editor/strike"
import { RichTextTable, Table } from "reactjs-tiptap-editor/table"
import { RichTextTaskList, TaskList } from "reactjs-tiptap-editor/tasklist"
import { RichTextAlign, TextAlign } from "reactjs-tiptap-editor/textalign"
import {
  RichTextUnderline,
  TextUnderline,
} from "reactjs-tiptap-editor/textunderline"

// Bubble
import {
  RichTextBubbleCallout,
  RichTextBubbleColumns,
  RichTextBubbleIframe,
  RichTextBubbleKatex,
  RichTextBubbleLink,
  RichTextBubbleMenuDragHandle,
  RichTextBubbleTable,
  RichTextBubbleText,
  RichTextBubbleVideo,
} from "reactjs-tiptap-editor/bubble"

import "katex/dist/katex.min.css"
import "reactjs-tiptap-editor/style.css"

import { Spinner } from "@/components/ui/spinner"
import { useDebounce } from "@/hooks/useDebounce"
import { CharacterCount } from "@tiptap/extensions"
import { EditorContent, useEditor } from "@tiptap/react"
import "katex/contrib/mhchem"
import { EMOJI_LIST } from "./emojis"

// custom document to support columns
const DocumentColumn = /* @__PURE__ */ Document.extend({
  content: "(block|columns)+",
})

const BaseKit = [
  DocumentColumn,
  Text,
  Dropcursor.configure({
    class: "reactjs-tiptap-editor-theme",
    color: "hsl(var(--primary))",
    width: 2,
  }),
  Gapcursor,
  HardBreak,
  Paragraph,
  TrailingNode,
  ListItem,
  TextStyle,
  Placeholder.configure({
    placeholder: "Enter text...",
  }),
]

const LIMIT = 10000

const extensions = [
  ...BaseKit,
  CharacterCount.configure({
    limit: LIMIT,
  }),

  History,
  SearchAndReplace,
  Clear,
  FontFamily,
  Heading,
  FontSize,
  Bold,
  Italic,
  TextUnderline,
  Strike,
  MoreMark,
  Emoji.configure({
    suggestion: {
      items: async ({ query }) => {
        const lowerCaseQuery = query?.toLowerCase()

        return EMOJI_LIST.filter(({ name }) =>
          name.toLowerCase().includes(lowerCaseQuery)
        )
      },
    },
  }),
  Color,
  Highlight,
  BulletList,
  OrderedList,
  TextAlign,
  Indent,
  LineHeight,
  TaskList,
  Link,
  Blockquote,
  HorizontalRule,
  Column,
  ColumnNode,
  MultipleColumnNode,
  Table,
  Iframe,
  Katex,
  Callout,
]

const RichTextToolbar = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 border-b! border-solid! border-border! p-1!">
      <RichTextUndo />
      <RichTextRedo />
      <RichTextSearchAndReplace />
      <RichTextClear />
      <RichTextFontFamily />
      <RichTextHeading />
      <RichTextFontSize />
      <RichTextBold />
      <RichTextItalic />
      <RichTextUnderline />
      <RichTextStrike />
      <RichTextMoreMark />
      <RichTextEmoji />
      <RichTextColor />
      <RichTextHighlight />
      <RichTextBulletList />
      <RichTextOrderedList />
      <RichTextAlign />
      <RichTextIndent />
      <RichTextLineHeight />
      <RichTextTaskList />
      <RichTextLink />
      <RichTextBlockquote />
      <RichTextHorizontalRule />
      <RichTextColumn />
      <RichTextTable />
      <RichTextIframe />
      <RichTextAttachment />
      <RichTextKatex />
      <RichTextCallout />
    </div>
  )
}

interface RichTextEditorProps {
  id?: string
  defaultValue?: string
  onChange?: (value: string) => void
}

function RichTextEditor({
  id,
  defaultValue = "",
  onChange,
}: RichTextEditorProps) {
  const [content, setContent] = useState(defaultValue)

  const onValueChange = useDebounce<string, void>((value) => {
    onChange?.(value)
    setContent(value)
  }, 300)

  const editor = useEditor({
    // shouldRerenderOnTransaction:  false,
    textDirection: "auto", // global text direction
    content,
    extensions,
    // content,
    immediatelyRender: false, // error duplicate plugin key
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      onValueChange(html)
    },
  })

  useEffect(() => {
    window["editor"] = editor
  }, [editor])

  if (!editor) {
    return <Spinner className="size-8" />
  }

  return (
    <div id={id} className="h-full w-full">
      <RichTextProvider editor={editor}>
        <div className="overflow-hidden rounded-[0.5rem] border! border-border! bg-background">
          <div className="flex max-h-full w-full flex-col">
            <RichTextToolbar />

            <EditorContent editor={editor} />

            {/* Bubble */}
            <RichTextBubbleColumns />
            <RichTextBubbleIframe />
            <RichTextBubbleKatex />
            <RichTextBubbleLink />
            <RichTextBubbleVideo />
            <RichTextBubbleTable />
            <RichTextBubbleText />
            <RichTextBubbleCallout />

            {/* Command List */}
            <RichTextBubbleMenuDragHandle />
          </div>
        </div>
      </RichTextProvider>

      {/* {typeof content === "string" && (
          <textarea
            style={{
              marginTop: 20,
              height: 500,
            }}
            className="w-full rounded-md border border-border bg-background p-4 font-mono text-sm outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            readOnly
            value={content}
          />
        )} */}
    </div>
  )
}

export default RichTextEditor
