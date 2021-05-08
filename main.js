const e = React.createElement;
const root = document.getElementById('root');

function Button({ increaseNumber }) {
  return e('button', {
    type: 'button',
    onClick: increaseNumber
  }, 
  'Count')
}

function App() {
  const [number, setNumber] = React.useState(1)

  function increaseNumber() {
    setNumber(number + 1)
  }

  return e(
    'div',
    null,
    e('div', {  datatarget: 1 }, number),
    e(Button, { increaseNumber })
  )
}


ReactDOM.render(React.createElement(App), root)


// babels: https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQG9ETIzoAmATqmAL4CUiuAUIohVCGUtk4gJAA8JGADcAfN2b9BogBIYsiAO5wypAIR8A9FLHNdvPgCMQUKAkRQAngAdUAXgBERkwnsiAyiAMBbGFE1PTMB09ekJickoqcURNbW4aBiigA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.14.1&externalPlugins=

