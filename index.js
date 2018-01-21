module.exports = function (event, vanilla = false) {
  let reader = new FileReader();
  let files = (vanilla === false) ? event.target.files : event.files,
    len = files.length,
    result = [];
  if (files && files.length > 0) {
    if (files.length > 1) {
      for (let i = files.length; i > 0; i--) {
        let file = files[i]
        reader.readAsDataURL(file);
        reader.onload = () => {
          let base64 = reader.result.split(',')[1];
          file.base64 = base64;
          result.push(file);
        };
      }
      return result;
    } else {
      let file = files[0]
      reader.readAsDataURL(file);
      reader.onload = () => {
        let base64 = reader.result.split(',')[1];
        file.base64 = base64;
        return file;
      };
    }
  }
}