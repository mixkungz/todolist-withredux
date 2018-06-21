import React from 'react'
import { Card } from './Card'
class SeperateList extends React.Component {
  render () {
    const type = ['Todo', 'Doing', 'Done']
    return (
      <div className='row'>
        {type.map(item => (
          <div className='col-4'>
            <Card header={item} />
          </div>
        ))}
      </div>
    )
  }
}

export default SeperateList
