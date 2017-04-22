# object-retain
  Retains elements in object that matches filter

```shell
npm install --save object-retain
```

## Examples

```js
var retain = require('object-retain');

var obj =
{
	1: 'a',
	2: 'b',
	3: 'c',
	4: 'd'
}

retain(obj, (val, key) => key % 2 === 0);
// => returns obj
//a: { 2: 'b', 4: 'd' }
```
Object-Retain can be used to be called directly by Arrays
```js
Object.prototype.retain = require('object-retain');

var obj =
{
	1: 'a',
	2: 'b',
	3: 'c',
	4: 'd'
}

obj.retain((val, key) => key % 2 === 0);
// => returns obj
//a: { 2: 'b', 4: 'd' 
```

## API

### `retain(object, filter)`

#### arguments

- `object: (object)`
- `filter: function(value, key, object)`

#### returns

- `array`

### `retain(filter)` (if `this` is an object)

#### arguments

- `filter: function(value, key, object)`

#### returns

- `this`