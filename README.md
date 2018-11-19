# Build custom React step by step

## Setup
* Fork repo 
* Clone forked repo
```
git clone https://github.com/<username>/learn-react.git
```
* Open project's folder in terminal
```
cd ./learn-react
```
* Make sure you have Node.js installed
* Install project's dependencies:
```
npm install
```

## Run 
* Open project's folder in terminal
* Run babel to transform JSX to JS:
```
npx babel app.jsx --plugins=@babel/plugin-transform-react-jsx,@babel/plugin-proposal-class-properties --out-file app.js
```
* Open index.html in your browser

## Run on device (smartphone or tablet)
* Make sure your device and your computer is on same wi-fi network
* Install Node.js
* Install npm module `serve` globally:
```
npm install --global serve
```
* Start serving static files:
```
serve ./learn-react
```
* Open displayed address on your device (e.g. http://192.168.0.151:5000)
