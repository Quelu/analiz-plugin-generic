# Analiz generic module template
Generic template for creating a module for the application Analiz

## Documentation

- [`config` - _Object_](#config-object)
	- [`config.name` - _String_ **(must be translatable)**](#configname-string-must-be-translatable)
	- [`config.category` - _String_](#configcategory-string)
	- [`config.fileTypes` - _Array_](#configfiletypes-array)
	- [`config.renderType` - _String_](#configrendertype-string)
	- [`config.options` :  _Array_](#configoptions-array)
		- [`optionArray.name` - _String_](#optionarrayname-string)
		- [`optionArray.label` - _String_ **(must be translatable)**](#optionarraylabel-string-must-be-translatable)
		- [`optionArray.type` - _String_](#optionarraytype-string)
		- [`optionArray.data` - _String_](#optionarraydata-string)
- [`run` - _Function_](#run-function)
	- [Example of the result object to pass to the callback](#example-of-the-result-object-to-pass-to-the-callback)
	- [`result.file` - _String_](#resultfile-string)
	- [`result.data`](#resultdata)

All the **visible** strings like a label in the main application have to be a language selector object.
```
{
  'en': 'English label',
  'fr': 'French label'
}
```

### `config` - _Object_
The config property is an object with the following values.

#### `config.name` - _String_ **(must be translatable)**
The module name that will be display in Analiz

#### `config.category` - _String_
The module category. Choose one of the following :
- html
- css
- js
- medias
- accessibility
- misc

#### `config.fileTypes` - _Array_
List of the files the module will analize
```
fileTypes: [
  '.html',
  '.css'
]
```

#### `config.renderType` - _String_
Type of rendering for the results. Available render types are :
- errors
- raw

#### `config.options` :  _Array_
Options the module allows for the user.

```
options: [
  {
    name: 'inputName',
    label: {  // Optional
      'en': 'Label name',
      'fr': 'Label name'
    },
    type: '', // choose one of the data types
    data:     // data depend on type
    }, ...
]
```

##### `optionArray.name` - _String_
The input name of the options, use the same as the plugin

##### `optionArray.label` - _String_ **(must be translatable)**
Optional, the label for the option that will be display in Analiz
##### `optionArray.type` - _String_
Available types are :
- list
- boolean
- separator
- documentation-link

##### `optionArray.data` - _String_
- `type` is separator or documentation-link, `data` a string with the desired value
- `type` is a boolean, `data` is a boolean.
- `type` is a list, `data` is an array of objects like that :

```
{
  name: 'List item name',
  value: 'listItemValue'
}

```


### `run` - _Function_
The _run()_ function is asynchronous, so you have to pass the result of each analyzed files to the callback while analysis is performed.

The parameters are :
- `files` : An array of the files send by _Analiz_ (contains only the files types that are passed to `config.fileTypes`)
- `options` : Options chosen by the user
- `callback` : Callback to call after analyzing each file, take 2 parameters : `error` & `result`

#### Example of the result object to pass to the callback
```
{
  file: 'path/to/the/file.ext'
  data: // depend on config.type
}
```

#### `result.file` - _String_
The path of the file

#### `result.data`
The result data of the analyze.
- If `config.renderType` is errors, data is an array of errors objects with this structure :

```
{
  type: 'notification/warning/error',
  message: 'error message for the user',
  line: 1,
  character: 5 (Optional)
}
```

- If `config.renderType` is raw, data is a string of html content
