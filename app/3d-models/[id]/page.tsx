import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
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

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="relative aspect-[5/4] min-h-[500px] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.15)] md:min-h-[420px]">
          <Image
            src="/hero-image 1.png"
            alt={model?.name ?? '3D model preview'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 55vw"
            priority
          />
          </div>
          <div className="flex flex-col gap-8">
            <Link
              href="/3d-models"
              className="inline-flex items-center gap-2 text-base font-semibold text-slate-600 transition-colors hover:text-slate-900"
            >
              <span aria-hidden="true">←</span>
              Back to overview
            </Link>
            <div className="flex flex-1 flex-col justify-center gap-5">
              <div className="flex items-center gap-3 text-base font-medium text-slate-500">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s-6.716-4.682-9.072-7.038A5.5 5.5 0 0 1 10.5 5.5l1.5 1.5 1.5-1.5a5.5 5.5 0 0 1 7.572 7.462C18.716 16.318 12 21 12 21z"
                  />
                </svg>
                {likesLabel} likes
              </div>
              <h1 className="text-4xl font-semibold text-slate-900">{model?.name ?? 'Model'}</h1>
              <div className="inline-flex w-fit rounded-full bg-slate-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-slate-700">
                {model?.category ?? 'uncategorized'}
              </div>
              <p className="text-base leading-7 text-slate-600">
                {model?.description ?? 'No description available.'}
              </p>
              <div className="text-sm uppercase tracking-widest text-slate-500">
                Added {addedDate}
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default page
