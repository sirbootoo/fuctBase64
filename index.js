module.exports = function (event) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    let files = event.target.files;
    let len = files.length;
    if (len > 1) {
      reject(new DOMException("Only one file can be uploaded at a time"));
    } else {
      reader.onerror = () => {
        reader.abort();
        reject(new DOMException("Problem parsing input file."));
      };
      let file = files[0]
      reader.onload = () => {
        let base64 = reader.result.split(',')[1];
        file.base64 = base64;
        resolve(file);
      };
      reader.readAsDataURL(file);
    }
  });
}