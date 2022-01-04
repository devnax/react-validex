# react-validex

> Fast and simple data validator for React

[![NPM](https://img.shields.io/npm/v/react-validex.svg)](https://www.npmjs.com/package/react-validex) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-validex
```

## Usage

```jsx
import {withValidator, ValidField, validex} from 'react-validex'

const Form = ({validator}) => {

  const [state, setState] = useState({
    user_name: ''
  })

  useEffect(() => {
    validator.validate()
  }, [state])

  return <div>
    <ValidField
      nameAlias="User Name"
      name="user_name"
      value={state.user_name}
      validator={validator}
      showError
      min={6}
      max={15}
    >
      <input type="text" value={state.user_name} onChange={(e) => setState({...state, user_name: e.target.value})}/>
    </ValidField>
  </div>
}

export default withValidator(Form)
```


## Props

|Name| Description|
| --- | --- |
|`children`| `element required`|
|`validator`| validator instance `required`|
|`name`| field name `required` |
|`value`| field value `required` |
|`showError`| show the error bellow `boolean` |



> Please flow the [validex](https://www.npmjs.com/package/validex) for the validator props