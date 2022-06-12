# invictus-tv
Een prachtig tv scherm voor het colosseum!

### Start

 1. Maak fotos folder

  ```sh
  cd public
  mkdir photos
  ```
   Gooi nu al je fotos er in
<br><br>

 2. Voor alle fotos toe

  - Linux:
  Voeg handmatig alle fotos toe aan index.html in #right
  ```html
  <span><img src="./fotos/<naam>.<jpg/jpeg/png>"></span>
  ```
  
  - Windows:
  Uncomment loadPhotos() in scripts/app.js
<br>

 3. Run

   - Linux:
  ```sh
  node index.js
  open http://localhost:8080/
  ```
  
   - Windows:
  ```sh
  node index.js
  explorer "http://localhost:8080/"
  ```
