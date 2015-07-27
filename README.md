# Analiz generic module template
Generic template for creating a module for the application Analiz

## Documentation
### config : _Object_
The config property is an object with the following values.

#### config.name : _String_
The module name that will be display in Analiz

#### config.category : _String_
The module category. Choose one of the following :
- html
- css
- js
- medias
- accessibility
- misc

#### config.fileTypes : _Array_
List of the files the module will analize

```
fileTypes: [
  '.html',
  '.php'
]
```

#### config.options :  _Array_
Options the module allows for the user. Available types are :
- list

```
options: [
 {
    name: 'inputName',
    label: 'Label name',
    type: 'list',
    data: [
      {
        name: 'Name',
        value: 'value'
      },
      ...
    ]
  },
  ...
]
```

### run : _Function_
The _run()_ function has to pass to the callback as result an array of objects. This is the function where you analyze files.

The parameters are :
- **files :** An array of the files send by Analiz (contains only the files types that are passed to _config.fileTypes_)
- **options :** Options chosen by the user
- **callback :** Callback function to send the results

#### Array to pass to the callback

```
[
  {
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

#### Object.type : _String_
The data type available are
- _file-list_
- _one-file_

#### Object.data : _Array_
An array of _analyzedObject_ with this structure :

```
{
  file: 'path/to/the/file.ext',
  type: 'notification/warning/error',
  message: 'error message for the user',
  line: (optional)
}
```
