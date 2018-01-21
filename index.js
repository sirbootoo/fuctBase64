module.exports = function(event, vanilla=false){
    let reader = new FileReader();
    if(vanilla === true){
      if(event.files && event.files.length > 0) {
        let file = event.files[0];
        reader.readAsDataURL(file);
        reader.onload = () => {
          let base64 = reader.result.split(',')[1];
          file.base64 = base64; 
          return file;
        };
      }
    }else{
      if(event.target.files && event.target.files.length > 0) {
        let file = event.target.files[0];
        reader.readAsDataURL(file);
        reader.onload = () => {
          let base64 = reader.result.split(',')[1];
          file.base64 = base64; 
          return file;
        };
      }
    }
}