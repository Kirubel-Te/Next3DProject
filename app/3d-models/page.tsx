import React from 'react'
import { getAllModels } from '../lib/models'
import PageCard from './PageCard'
import CategoryNav from './CategoryNav'

const page = async () => {
    const models = await getAllModels();
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex max-w-[90%] flex-col gap-8 px-6 py-10">
        <CategoryNav activeSlug="all" variant="mobile" />
        <div className="flex flex-col gap-8 lg:flex-row">
          <CategoryNav activeSlug="all" variant="sidebar" />
          <div className="flex min-w-0 flex-1 flex-col gap-8 lg:flex-[1_1_0%]">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-semibold text-slate-900">3D Models</h1>
              <p className="max-w-2xl text-sm text-slate-600">
                Browse the latest community uploads and find your next print.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {models.map((model) => (
                <PageCard
                  key={model.id}
                  id={model.id}
                  name={model.name}
                  description={model.description}
                  category={model.category}
                  likes={model.likes}
                  imageSrc='/hero-image 1.png'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
