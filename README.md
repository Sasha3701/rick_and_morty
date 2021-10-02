# Rick and Morty Widget

## Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build:widget`

Builds the app-widget for using to another application to the `docs` folder.

## Installation widget to another application 

Step 1:
```console
yarn build:widget
```
Step 2:
Copy all files in the docs folder and put them on the same level with your html file

Step 3:
```bash
// Your html-file
...
<body>
  // The block where the widget will be rendered
  <div class="rick_and_morty" data-open="bottom-right"></div>
  // index.js from folder docs
  <script scr="./index.js"></script>
</body>
```
Step 4:
We determine the position of the widget and configure its opening.
Opening options:
- bottom-left;
- bottom-right;
- top-left;
- top-right;


For example:
```bash
// Your html-file
...
  <style>
    .wrapper {
      // Your css 
    }
  </style>
...
<body>
  <div class="wrapper">
    <div class="rick_and_morty" data-open="bottom-right"></div>
  </div>
  <script scr="./index.js"></script>
</body>
```
