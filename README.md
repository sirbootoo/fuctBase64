
[![Made in Nigeria](https://img.shields.io/badge/made%20in-nigeria-008751.svg?style=flat-square)](https://github.com/acekyd/made-in-nigeria)

# fuctBase64
Converting File Uploads To Base64

# Using the library.

## Installation

install the library using 

```js
npm install fuctbase64
```
or 

```js
npm install fuctbase64 --save
```
to save to your package.json.

## Usage

### In Angular 2+

```ts

// Imports
import { Component } from '@angular/core';

let fileUpload = require('fuctbase64');

// Component Decorator
@Component({
  selector: 'app-file-upload-to-base64',
  template: `<input type="file" name="fileInput" (change)="onFileChange($event)" #fileInput formControlName="fileUpload" />
  <br>
  <div>
    {{fileResult}}  
  </div>`
})

// Component Class
export class FileUploadToBase64Component {
  title = 'app works!';
  fileResult: any;
  constructor(){

  }

  onFileChange(event){
      let result = fileUpload(event).then(result => {
        this.fileResult = result;
      });
      
  }
}


```
Check out the [Plunkr](https://plnkr.co/edit/PiAFMiiveFch4tee6CbL?p=preview)

### In Vanilla Javascript

```html

<input id="the-file" name="file" type="file">

```


```js
let fileUpload = require('fuctbase64');

var fileInput = document.getElementById('the-file');
fileInput.addEventListener('change', function(en){
  fileUpload(en,true).then(pay => {
    console.log(pay);
  })
})

```

Would really love contributions on this projects. You can visit the github repo and fork the project and modify.

Thanks.