import Link from 'next/dist/client/link'
import Image from 'next/image'
import React from 'react'
import categories from "../data/categories.json"
import { Category } from '../types'

type PageCardProps = {
  imageSrc: string
  imageAlt?: string
  name: string
  description: string
  category: string
  likes: number
  id: string | number
}

const PageCard = ({
  imageSrc,
  imageAlt = '3D model preview',
  name,
  description,
  category,
  likes,
  id,
}: PageCardProps) => {
  const likesLabel = Number.isFinite(likes) ? likes.toLocaleString() : '0'
  const categorySlug = categories.find(c => c.displayName === category)?.slug || 'uncategorized'

  return (
    <Link href={`/3d-models/${id}`}><article className="group flex h-full w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold tracking-tight text-slate-900">{name}</h3>
        <p className="line-clamp-3 text-sm leading-6 text-slate-600">{description}</p>
        <div className="mt-auto flex flex-col gap-4 text-xs font-medium uppercase tracking-wider">
          <span className="w-fit rounded-full bg-slate-100 px-2.5 py-1 text-slate-700">
            {category}
          </span>
          <span className="flex items-center gap-1.5 text-slate-500">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
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
          </span>
        </div>
      </div>
    </article></Link>
  )
}

export default PageCard
