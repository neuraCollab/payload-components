import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { NavbarBlock } from '@/blocks/Navbar/Component'
import { HeroBlock } from './HeroBlock/Component'
import { VisionBlock } from './VisionBlock/Component'
import { PropertiesBlock } from './PropertiesBlock/component'
import { FeatureBlock } from './FeatureBlock/component'
import { HowItWorksBlock } from './HowItWorksBlock/component'
import { BlogBlock } from './BlogBlock/component'
import { AboutHeroBlock } from './AboutHero/component'
import { VisionMissionBlock } from './VisionMission/component'
import { AmenitiesBlock } from './Amenities/component'
import { AgentsBlock } from './Agents/component'
import { TestimonialsBlock } from './Testimonials/component'
import { CallToActionNewBlock } from './CallToActionNew/component'
import { ContactHeroBlock } from './ContactHero/component'
import { ContactUsFormBlock } from './ContactUsForm/component'
import { FAQBlock } from './FAQ/component'

const blockComponents = {
  properties: PropertiesBlock,
  vision: VisionBlock,
  hero: HeroBlock,
  navbar: NavbarBlock,
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  feature: FeatureBlock,
  'how-it-works': HowItWorksBlock,
  blog: BlogBlock,
  'about-hero': AboutHeroBlock,
  'vision-mission': VisionMissionBlock,
  amenities: AmenitiesBlock,
  agents: AgentsBlock,
  testimonials: TestimonialsBlock,
  'call-to-action-new': CallToActionNewBlock,
  'contact-hero': ContactHeroBlock,
  'contact-us-form': ContactUsFormBlock,
  faq: FAQBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
