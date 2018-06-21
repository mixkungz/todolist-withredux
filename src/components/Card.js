import React from 'react'

export const Card = props => (
  <div className='card text-center'>
    <div className='card-header'>{props.header}</div>
    <div className='card-body'>List here</div>
    <div className='card-footer text-muted'>Amount : 1</div>
  </div>
)
