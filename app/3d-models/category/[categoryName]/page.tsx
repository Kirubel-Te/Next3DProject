import React from 'react'
import { getCategoryBySlug } from '@/app/lib/categories'
import type { CategoryPageProps } from '@/app/types'
import CategoryNav from '../../CategoryNav'
import { getAllModels } from '@/app/lib/models'
import PageCard from '../../PageCard'
const page = async({params}:CategoryPageProps) => {
    const { categoryName } = await params
    const category = getCategoryBySlug(categoryName)
    const models = await getAllModels()
    const filteredModels = models.filter(model => model.category.toLowerCase() === category.slug.toLowerCase())

  return (
    <div className="min-h-[calc(100dvh-64px)] bg-slate-50">
      <div className="mx-auto flex max-w-[90%] flex-col gap-8 px-6 py-10">
        <CategoryNav activeSlug={categoryName} variant="mobile" />
        <div className="flex flex-col gap-8 lg:flex-row">
          <CategoryNav activeSlug={categoryName} variant="sidebar" />
          <div className="flex min-w-0 flex-1 flex-col gap-6 lg:flex-[1_1_0%]">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-semibold text-slate-900">{category.displayName}</h1>
              <p className="max-w-2xl text-sm text-slate-600">
                Browse the latest community uploads and find your next print.
              </p>
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
