<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col>
          <v-sheet class="pr-5 pl-5 pt-2 pb-2" min-height="80vh" rounded="lg">
            <div class="pb-5">
              <v-text-field
                v-model="title"
                label="Đặt tiêu đề cho bài viết"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
            </div>
            <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" @ready="onReady" />
            <div class="d-flex justify-end">
              <v-btn class="mt-2" depressed color="primary" @click="save">
                Đăng bài
              </v-btn>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import { mapActions, mapGetters } from "vuex";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/vi";
import CKEditor from "@ckeditor/ckeditor5-vue";
// import MyUploadImage from '@/utils/uploadImage';
export default {
  name: "CreatePost",
  components: {
    ckeditor: CKEditor.component
  },
  data: () => ({
    editor: ClassicEditor,
    editorData: "",
    editorConfig: {
      language: "vi",
      alignment: {
        options: ["left", "right", "center", "justify"]
      },
      toolbar: [
        "heading",
        "|",
        "fontfamily",
        "fontsize",
        "fontColor",
        "fontBackgroundColor",
        "|",
        "insertTable",
        "|",
        "bold",
        "italic",
        "link",
        "bulletedList",
        "numberedList",
        "|",
        "alignment",
        "|",
        "indent",
        "outdent",
        "|",
        "imageInsert",
        "blockQuote",
        "mediaEmbed"
      ],
      heading: {
        options: [
          {
            model: "paragraph",
            title: "Paragraph",
            class: "ck-heading_paragraph"
          },
          {
            model: "heading1",
            view: "h1",
            title: "Heading 1",
            class: "ck-heading_heading1"
          },
          {
            model: "heading2",
            view: "h2",
            title: "Heading 2",
            class: "ck-heading_heading2"
          },
          {
            model: "heading3",
            view: "h3",
            title: "Heading 3",
            class: "ck-heading_heading3"
          },
          {
            model: "heading4",
            view: "h4",
            title: "Heading 4",
            class: "ck-heading_heading4"
          },
          {
            model: "heading5",
            view: "h5",
            title: "Heading 5",
            class: "ck-heading_heading5"
          }
        ]
      },
      fontSize: {
        options: [8, 9, 10, 11, 12, 13, 14, 15, "default", 17, 18, 19, 20, 21]
      },
      indentBlock: {
        offset: 1,
        unit: "em"
      },
      image: {
        styles: ["full", "alignLeft", "alignRight"],
        toolbar: [
          "imageStyle:alignLeft",
          "imageStyle:full",
          "imageStyle:alignRight",
          "|",
          "imageTextAlternative"
        ]
      },
      table: {
        contentToolbar: [
          "tableColumn",
          "tableRow",
          "mergeTableCells",
          "tableProperties",
          "tableCellProperties"
        ]
      }
      // extraPlugins: [this.iamgeUploader]
    },
    title: "",
    rules: [value => !!value || "Bắt buộc."]
  }),
  computed: {},
  mounted() {
    // this.init()
  },
  methods: {
    ...mapActions("post", ["submit", "getAllPost"]),
    save() {
      const div = document.createElement("div");
      div.innerHTML = this.editorData;
      const firstImage = div.getElementsByTagName("img")[0];
      const imgSrc = firstImage ? firstImage.src : "";
      const dataToSubmit = {
        content: this.editorData,
        author: "khiemnb2705@gmail.com",
        createdAt: new Date().toISOString(),
        title: this.title,
        thumbnail: imgSrc
      };
      this.submit(dataToSubmit).then(async res => {
        Vue.$toast.success("Thêm bài viết thành công!");
        await this.getAllPost();
        this.$router
          .push({
            name: "home",
            params: {
              id: res
            }
          });
      });
    },
    onReady(editor) {
      // Insert the toolbar before the editable area.
      editor.ui
        .getEditableElement()
        .parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
        );
    }
    // iamgeUploader(editor) { 
    // editor.plugins.get('FileRepository').createUploadAdapter = function(loader) {
    //   // Configure the URL to the upload script in your back-end here!
    //   return new MyUploadImage(loader)
    // }
    // }
  }
};
</script>
