# json-to-csv

## Description
A quick and easy way to turn json data into a csv file.

## Usage

1. add your json to `src/input.js`
    ```js
    module.exports = [
      { 
        "fieldOne": "foo",
        "fieldTwo": "bar",
        "fieldThree": "baz",
      },
      { 
        "fieldOne": "qux",
        "fieldTwo": "quux",
        "fieldThree": "corge",
      },
      ...
    ]
    ```
2. In `src/fields.js`
  - If you want csv to conation all fields:
    ```js
    module.exports = null
    ```
  - If you only want specified fields:
    ```js
    module.exports = ['fieldNameOne', 'fieldNameTwo']
    ```

3. Run `node index.js` or `npm start`

4. Find csv in dist directory: `dist/data.csv`

