module.exports = function(event){
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        let base64 = reader.result.split(',')[1];
        return base64;
      };
    }
}