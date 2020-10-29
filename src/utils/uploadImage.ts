
import firebase from 'firebase'
export default class MyUploadImage {
  loader: any;
  constructor(loader : any) {
    this.loader = loader
  }

  upload() {
      return this.loader.file.then((file: any) => new Promise( ( resolve, reject ) => {
        if (file.type.startsWith('image')) {
          this.uploadFile(file, resolve)
        } else {
          reject('Upload failed')
        }
      }))
  }
  uploadFile = (file: any, resolve: any) => {
    const fileName = file.name
    const filePath = `images/${fileName}`
    const fileRef = firebase.storage().ref().child(filePath)
    fileRef.put(file).then(res => {
      resolve({default: this.getFileUrl(fileRef)})
    })
  }
  
  getFileUrl = (fileRef: any) => {
    return `https://firebasestorage.googleapis.com/v0/b/${fileRef.bucket}/o/${encodeURIComponent(fileRef.fullPath)}?alt=media`
  }
}
