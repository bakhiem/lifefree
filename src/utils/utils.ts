
const utils = {
  getDataFromDoc: (res: any) => {
    const data = res.data()
    data.id = res.id
    return data
  },
  getDataFromDocs: (docs: any) => {
    return docs.docs.map(utils.getDataFromDoc)
  }
}

export default utils
