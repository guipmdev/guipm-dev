'use client'

import { useEffect, useRef, useState } from 'react'
import { useIsMounted } from 'usehooks-ts'

import { ParagraphCardItemContainer } from './styles'

interface DescriptionCardItemProps {
  description: string[]
}

export function DescriptionCardItem({ description }: DescriptionCardItemProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [hasOverflow, setHasOverflow] = useState(false)

  const isMounted = useIsMounted()

  useEffect(() => {
    if (ref?.current) {
      setHasOverflow(ref.current.scrollHeight > ref.current.clientHeight)
    }
  }, [description, isMounted])

  return (
    <ParagraphCardItemContainer>
      <div ref={ref}>
        {description.map((paragraph, index) =>
          paragraph.length ? (
            <p key={paragraph + index}>{paragraph}</p>
          ) : (
            <br key={index} />
          ),
        )}
      </div>

      {hasOverflow && <button>Expandir</button>}
    </ParagraphCardItemContainer>
  )
}
