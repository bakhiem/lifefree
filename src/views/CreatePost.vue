<template>
 <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col>
          <v-sheet class="pr-5 pl-5 pt-2" min-height="70vh" rounded="lg" >
            <div class="pb-5">
              <v-text-field
                v-model="title"
                label="Đặt tiêu đề cho bài viết"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
            </div>
            <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
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
import { mapActions , mapGetters} from 'vuex'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/vi';
import CKEditor from '@ckeditor/ckeditor5-vue';
// import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
export default {
  name: "CreatePost",
  components: {
    ckeditor: CKEditor.component
  },
  data: () => ({
    editor: ClassicEditor,
    editorData: '',
    editorConfig: {
      language: 'vi',
      //  plugins: [
      //   ImageInsert
      // ],
       toolbar: {
        items: [
            'bold',
            'italic',
            'link',
            'undo',
            'redo',
            'imageInsert'
        ]
      }
    },
    title: '',
    rules: [
        value => !!value || 'Bắt buộc.'
    ],
  }),
  computed: {
  },
  mounted() {
    // this.init()
  },
  methods: {
    ...mapActions('post', ['submit']),
    save() {
      const dataToSubmit = {
        content: this.editorData,
        author: 'khiemnb2705@gmail.com',
        createdAt: new Date().toISOString(),
        title: this.title
      }
      console.log(dataToSubmit)
      this.submit(dataToSubmit)
    }
  }
};
</script>
