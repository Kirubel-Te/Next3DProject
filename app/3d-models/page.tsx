import React from 'react'
import Form from 'next/form'
import { getAllModels } from '../lib/models'
import PageCard from './PageCard'
import CategoryNav from './CategoryNav'

const page = async ({searchParams}: {searchParams: object}) => {
    const models = await getAllModels();
    const {query} = await searchParams as {query?: string}
    const filteredModels = query ? models.filter(model => model.name.toLowerCase().includes(query.toLowerCase()) || model.description.toLowerCase().includes(query.toLowerCase())) : models;
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
              <Form action="/3d-models">
                <input type='text' placeholder='Search models...' className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" name='query' autoComplete='off'/>
              </Form>
            </div>
            <div className="mx-auto w-[96%]">
              <div className="grid w-full justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {filteredModels.map((model) => (
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
    </div>
  )
}

export default page
