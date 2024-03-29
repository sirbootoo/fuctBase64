# fuctBase64
Converting File Uploads To Base64

[![Rate this package](https://badges.openbase.com/js/rating/fuctbase64.svg?token=X4KjCr6gNPfoE2rnwVyfYHe+eZ6voQzL71IGx1uXkfM=)](https://openbase.com/js/fuctbase64?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)

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

let fileResult = await fileUpload(fileInput, true);

console.log(fileResult);

```


Enjoying fuctbase64? Please rate it on Openbase: https://openbase.com/js/fuctbase64#rate


## Open Issues / Contributions

You can open issues for things which you thing I did wrong. Or better you can contribute to this project. We will happy to have your contributions. Thank you

## License

