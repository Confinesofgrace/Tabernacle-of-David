<template>
  <div id="tiptap-editor" style="width:100%; height:350px; margin-top:20px;">
    <div v-if="editor" style="padding: 10px;"> 
      <button
        :class="{ 'is-active': editor.isActive('bold') }"
        @click="editor.chain().focus().toggleBold().run()">
          Bold
      </button>

      <button
        :class="{ 'is-active': editor.isActive('italic') }"
        @click="editor.chain().focus().toggleItalic().run()">
          Italics
      </button>
    </div>
    <editor-content :editor="editor" />
  </div>
</template>
  
<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

export default {
  components: {
    EditorContent,
  },
  props: ['modelValue'], // Add prop for v-model binding
  watch: {
    modelValue(value) {
      if (this.editor && value !== this.editor.getHTML()) {
        this.editor.commands.setContent(value);
      }
    }
  },
  data() {
    return {
      editor: null,
    }
  },
  mounted() {
    this.editor = new Editor({
      content: this.modelValue || '<p>Enter your lyrics...</p>', // Initialize with the bound model value
      extensions: [StarterKit],
      onUpdate: ({ editor }) => {
        this.$emit('update:modelValue', editor.getHTML()); // Emit the updated content
      }
    });
  },
  beforeUnmount() {
    this.editor.destroy();
  },
}
</script>

<style >
  .ProseMirror
  {
    height: 300px;
    padding: 14px;
    border-style: none;
    border: 1px solid rgba(66, 7, 228, 0.26);
    border-radius: 16px;
    box-shadow: 2px 2px 4px rgba(14, 13, 13, 0.062);
    outline: none;

    overflow-y: auto;
  }
</style>
