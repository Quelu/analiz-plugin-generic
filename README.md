# Analiz generic module template
Generic template for creating a module for the application Analiz

## Documentation
All the **visible** strings like a label in the main application have to be a language selector object.
```
{
  'en': 'English label',
  'fr': 'French label'
}
```

### `config` : _Object_
The config property is an object with the following values.

#### `config.name` : _String_ **(must be translatable)**
The module name that will be display in Analiz

#### `config.category` : _String_
The module category. Choose one of the following :
- html
- css
- js
- medias
- accessibility
- misc

#### `config.fileTypes` : _Array_
List of the files the module will analize
```
fileTypes: [
  '.html',
  '.php'
]
```

#### `config.options` :  _Array_
Options the module allows for the user. Available types are :
- list
- boolean

```
options: [ {
  name: 'inputName',
  label: {
    'en': 'Label name',
    'fr': 'Label name'
  },
  type: 'list',
  data: [
    {
      name:  {
        'en': 'Label name',
        'fr': 'Label name'
      },
      value: 'value'
    }, ...
  ]
}, ... ]
```

### `run` : _Function_
The _run()_ function is asynchronous, so you have to pass the result of each analyzed files to the callback while analysis is performed.

The parameters are :
- `files` : An array of the files send by _Analiz_ (contains only the files types that are passed to `config.fileTypes`)
- `options` : Options chosen by the user
- `callback` : Callback to call after analyzing each file, take 2 parameters : `error` & `result`

#### Example of array to pass to the callback
```
[
  {
    file: 'path/to/the/file.ext'
    type: 'file-list',
    data: [
      analyzedObject1,
      analyzedObject2,
      analyzedObject3
    ]
  },
  {
    type: 'one-file',
    data: analyzedObject4
  }
]
```

#### `callback.file` : _String_
The path of the file

#### `callback.type` : _String_
The data type available are
- _file-list_

#### `callback.data` : _Array_
An array of `analyzedObject` with this structure :

```
{
  type: 'notification/warning/error',
  message: 'error message for the user',
  line: 1,
  character: 5
}
```
