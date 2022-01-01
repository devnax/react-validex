import React, {useState, useEffect} from 'react'
import {withValidator, ValidField} from 'react-validex'

const App = ({validator}) => {

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
      min={10}
      showError
    >
      <input type="text" value={state.user_name} onChange={(e) => setState({...state, user_name: e.target.value})}/>
    </ValidField>
  </div>
}

export default withValidator(App)
