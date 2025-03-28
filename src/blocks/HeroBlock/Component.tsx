import { Media } from '@/payload-types'

type Props = {
  headline: string
  highlight?: string
  subheadline?: string
  image: Media
  badgeText?: string
}

export const HeroBlock = ({
  headline,
  highlight,
  subheadline,
  image,
  badgeText = 'Real Estate',
}: Props) => {
  const [before, after] = highlight ? headline.split(highlight) : [headline, null]

  return (
    <section className="px-4 py-24 text-center bg-base-100 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Метка */}
        <span className="inline-block px-4 py-1 text-sm rounded-full bg-[hsl(145,74%,90%)] text-primary font-medium">
          {badgeText}
        </span>

        {/* Заголовок */}
        <h1 className="text-[48px] md:text-[60px] leading-[1.1] font-bold text-base-content">
          {before}
          {highlight && <span className="text-primary"> {highlight}</span>}
          {after}
        </h1>

        {/* Подзаголовок */}
        {subheadline && <p className="text-lg text-base-content/70">{subheadline}</p>}
      </div>

      {/* Картинка */}
      <div className="mt-12 max-w-5xl mx-auto overflow-hidden rounded-[2rem] shadow-xl">
        <img src={image?.url ?? undefined} alt="Hero" className="w-full h-auto object-cover" />
      </div>
    </section>
  )
}
