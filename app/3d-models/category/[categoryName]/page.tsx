import React from 'react'
import { getCategoryBySlug } from '@/app/lib/categories'
import type { CategoryPageProps } from '@/app/types'
import CategoryNav from '../../CategoryNav'

const page = async({params}:CategoryPageProps) => {
    const { categoryName } = await params
    const models = getCategoryBySlug(categoryName)
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex max-w-[90%] flex-col gap-8 px-6 py-10">
        <CategoryNav activeSlug={categoryName} variant="mobile" />
        <div className="flex flex-col gap-8 lg:flex-row">
          <CategoryNav activeSlug={categoryName} variant="sidebar" />
          <div className="flex min-w-0 flex-1 flex-col gap-6 lg:flex-[1_1_0%]">
            <h1 className="text-3xl font-semibold text-slate-900">
              {models.displayName}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
