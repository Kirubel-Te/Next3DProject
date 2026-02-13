import Link from 'next/link'
import React from 'react'
import { getAllCategories } from '../lib/categories'

type CategoryNavProps = {
  activeSlug?: string
  variant?: 'mobile' | 'sidebar'
}

const CategoryNav = ({ activeSlug, variant = 'mobile' }: CategoryNavProps) => {
  const categories = getAllCategories()
  const isAllActive = !activeSlug || activeSlug === 'all'

  if (variant === 'sidebar') {
    return (
      <aside className="hidden lg:block lg:w-44 lg:shrink-0">
        <div className="sticky top-24 flex flex-col items-start">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Categories
          </p>
          <ul className="mt-4 flex flex-col items-start gap-5">
            <li>
              <Link
                className={`flex items-center gap-3 text-base font-semibold uppercase tracking-wide transition-colors ${
                  isAllActive
                    ? 'text-orange-500'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
                href="/3d-models"
              >
                <span
                  className={`h-4 w-0.5 rounded-full ${
                    isAllActive ? 'bg-orange-500' : 'bg-transparent'
                  }`}
                />
                All Models
              </Link>
            </li>
            {categories.map((category) => {
              const isActive = category.slug === activeSlug
              return (
                <li key={category.slug}>
                  <Link
                    className={`flex items-center gap-3 text-base font-semibold uppercase tracking-wide transition-colors ${
                      isActive
                        ? 'text-orange-500'
                        : 'text-slate-700 hover:text-slate-900'
                    }`}
                    href={`/3d-models/category/${category.slug}`}
                  >
                    <span
                      className={`h-4 w-0.5 rounded-full ${
                        isActive ? 'bg-orange-500' : 'bg-transparent'
                      }`}
                    />
                    {category.displayName}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </aside>
    )
  }

  return (
    <div className="lg:hidden">
      <div className="simple-scrollbar flex items-center gap-4 overflow-x-auto pb-2">
        <Link
          className={`whitespace-nowrap text-sm font-semibold transition-colors ${
            isAllActive
              ? 'text-orange-500'
              : 'text-slate-700 hover:text-slate-900'
          }`}
          href="/3d-models"
        >
          All Models
        </Link>
        {categories.map((category) => {
          const isActive = category.slug === activeSlug
          return (
            <Link
              key={category.slug}
              className={`whitespace-nowrap text-sm font-semibold transition-colors ${
                isActive
                  ? 'text-orange-500'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
              href={`/3d-models/category/${category.slug}`}
            >
              {category.displayName}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryNav
