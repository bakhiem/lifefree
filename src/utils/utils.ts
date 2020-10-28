
const utils = {
  getDataFromDoc: (res: any) => {
    console.log(res)
    const data = res.data()
    data.id = res.id
    return data
  },
  getDataFromDocs: (docs: any) => {
    return docs.docs.map(utils.getDataFromDoc)
  }
}

export default utils
