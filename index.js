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
      reader.onload = (evt) => {
        const uint = new Uint8Array(evt.target.result);
        let bytes = [];
        uint.map(byte => {
          bytes.push(byte.toString(16));
        });
        const hex = bytes.join('').toUpperCase();
        let base64 = reader.result.split(',')[1];
        file.base64 = base64;
        file.binaryFileType = getMimetype(hex);
        resolve(file);
      };
      reader.readAsDataURL(file);
    }
  });
}


const getMimetype = (signature) => {
  switch (signature) {
      case '89504E47':
          return 'image/png'
      case '47494638':
          return 'image/gif'
      case '25504446':
          return 'application/pdf'
      case 'FFD8FFDB':
      case 'FFD8FFE0':
          return 'image/jpeg'
      case '504B0304':
          return 'application/zip'
      default:
          return 'Unknown filetype'
  }
}