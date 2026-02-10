import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Heart } from 'lucide-react'
import type { ModelDetailPageProps } from '../../types'
import { getModelById } from '@/app/lib/models'

const page = async ({ params }: ModelDetailPageProps) => {
    const id = await params.then(p => p.id)
  const model = await getModelById(id)
  const likesLabel = Number.isFinite(model?.likes) ? model.likes.toLocaleString() : '0'
  const addedDate = model?.dateAdded
    ? new Date(model.dateAdded).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Unknown date'
  const categoryLabel = model?.category
    ? model.category.replace(/-/g, ' ')
    : 'Uncategorized'

  return (
    <div className="bg-slate-50 flex flex-col justify-center items-center w-full min-h-[calc(100dvh-64px)]">
      <div className='w-[85%] mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div>
          <Image
            src = '/hero-image 1.png'
            alt = 'Model Image'
            width = {600}
            height = {400}
            className='rounded-xl'
          />
        </div>
        <div className='another-div flex h-full flex-col'>
          <div className='mb-6 md:mb-0'>
            <Link
              href='/3d-models'
              className='text-sm font-semibold uppercase tracking-[0.01em] text-slate-500 transition-colors hover:text-slate-700 md:text-base'
            >
              Back to overview
            </Link>
          </div>
          <div className='flex flex-1 flex-col justify-center gap-4'>
            <div className='flex items-center gap-2 text-base font-semibold text-slate-600 md:text-lg'>
              <Heart className='h-5 w-5' />
              <span>{likesLabel} likes</span>
            </div>
            <h1 className='text-4xl font-bold text-slate-900 md:text-5xl'>
              {model?.name ?? 'Unknown model'}
            </h1>
            <div>
              <span className='inline-flex items-center rounded-full border border-slate-300 px-3 py-1 text-sm font-semibold text-slate-700 md:text-base'>
                {categoryLabel}
              </span>
            </div>
            <div className='flex flex-wrap items-center mt-4 gap-4 text-base text-slate-600 md:text-lg'>
              <span>Added {addedDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
