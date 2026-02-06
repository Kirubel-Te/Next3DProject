import React from 'react'
import { getAllModels } from '../lib/models'

const page = async () => {
    const models = await getAllModels();
  return (
    <div>
      {models.map(model=><p key={model.id}>{model.name}</p>)}
    </div>
  )
}

export default page
