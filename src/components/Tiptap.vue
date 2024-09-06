<template>
    <div v-if="editor" style="background-color:yellow;padding: 10px;"> 
        
        <button
  :class="{ 'is-active': editor.isActive('bold') }"
  @click="editor.chain().focus().toggleBold().run()"
>
  Bold
</button>

    </div>
    <editor-content :editor="editor" />
  </template>
  
  <script>
    import { Editor, EditorContent } from '@tiptap/vue-3'
    import StarterKit from '@tiptap/starter-kit'
  
    export default {
      components: {
        EditorContent,
      },
  
      data() {
        return {
          editor: null,
        }
      },
  
      mounted() {
        this.editor = new Editor({
          content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
          extensions: [StarterKit],
        })
      },
  
      beforeUnmount() {
        this.editor.destroy()
      },
    }
  </script>
  