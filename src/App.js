import React, { Component } from 'react'
import './App.css'
import FormInput from './components/FormInput'
import SeperateList from './components/SeperateList'
class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={require('./logo.svg')} className='App-logo' alt='logo' />
          <h1 className='App-title'>Powered by React</h1>
        </header>
        <div className='container'>
          <div className='row'>
            <div className='col-12 mt-4'>
              <FormInput />
            </div>
          </div>
          <SeperateList />
        </div>
      </div>
    )
  }
}

export default App
