type Item = {
  icon: string // можно будет заменить на иконку из phosphor-icons или media
  title: string
  description: string
}

export type VisionBlockType = {
  blockType: 'vision'
  title: string
  subtitle?: string
  buttonText?: string
  buttonLink?: string
  items: Item[]
}

export const VisionBlock: React.FC<VisionBlockType> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  items,
}) => {
  return (
    <section className="py-24 px-4 bg-base-100 text-base-content">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Левая часть */}
        <div className="space-y-6">
          {subtitle && (
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <div className="w-2 h-2 rounded-full bg-primary" />
              {subtitle}
            </div>
          )}
          <h2 className="text-4xl font-bold leading-tight">{title}</h2>

          {buttonText && buttonLink && (
            <a href={buttonLink} className="btn btn-neutral rounded-full">
              {buttonText}
            </a>
          )}
        </div>

        {/* Правая часть – список */}
        <div className="space-y-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 hover:transform hover:translate-x-2 transition-transform"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-primary text-primary-content flex items-center justify-center text-xl font-semibold shadow-lg">
                {item.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-base text-base-content/70 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
