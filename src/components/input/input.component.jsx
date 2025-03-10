import './input.style.css'
import { useRef } from 'react' 

export function Text({
  cPreffix,
  cSuffix,
  sPlaceholder = "",
  sValue = "",
  onChange = () => null
})
{
  const input = useRef( null )

  const handleClick = () => input.current.focus()

  return (
    <div className="input text" onClick={ handleClick }>
      { cPreffix }
      <input
        type="text"
        ref={ input }
        placeholder={ sPlaceholder }
        value={ sValue }
        onChange={ e => onChange(e.target.value) }
      />
      { cSuffix }
    </div>
  )
}

export function Select({
  sPlaceholder = "",
  aOptions = [],
  sValue = "",
  onChange = () => null
})
{
  return (
    <div className="input select">
      <select value={ sValue } onChange={ onChange }>
        <option>{ sPlaceholder }</option>
        { aOptions.map( (e , i) => <option value={ e } key={ i }>{ e }</option>) }
      </select>
    </div>
  )
}
