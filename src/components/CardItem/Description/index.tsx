'use client'

import { useEffect, useRef, useState } from 'react'
import { useIsMounted } from 'usehooks-ts'

import { Button } from '@/components/Button'
import { css } from '@/styled-system/css'

import { ParagraphCardItemContainer } from './styles'

interface DescriptionCardItemProps {
  description: string[]
}

export function DescriptionCardItem({ description }: DescriptionCardItemProps) {
  const divRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const [hasOverflow, setHasOverflow] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const isMounted = useIsMounted()

  const lineHeightInRem = 1.25
  const initialVisibleLinesNumber = 10

  const defaultDivMaxHeight = `calc(${lineHeightInRem}rem * ${initialVisibleLinesNumber})`
  const defaultDivMaskPosition = 'center 100%'
  const defaultButtonMarginTop = 'calc((2.625rem + 0.75rem) * -1)'

  function handleToggleDescription() {
    if (divRef?.current) {
      const remSizeInPx = parseInt(
        getComputedStyle(document.documentElement).fontSize,
      )

      const divHeightInPx = divRef.current.scrollHeight
      const lineHeightInPx = lineHeightInRem * remSizeInPx

      const linesNumber = Math.ceil(divHeightInPx / lineHeightInPx)

      divRef.current.style.maxHeight = isExpanded
        ? defaultDivMaxHeight
        : `calc(${lineHeightInRem}rem * ${linesNumber})`

      divRef.current.style.maskPosition = isExpanded
        ? defaultDivMaskPosition
        : 'center 0%'

      setIsExpanded(!isExpanded)
    }

    if (buttonRef?.current) {
      buttonRef.current.style.marginTop = isExpanded
        ? defaultButtonMarginTop
        : '0'
    }
  }

  useEffect(() => {
    if (divRef?.current) {
      divRef.current.className = css({
        maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
        maskSize: 'auto 200%',
      })

      divRef.current.style.maxHeight = defaultDivMaxHeight
      divRef.current.style.maskPosition = defaultDivMaskPosition

      setHasOverflow(divRef.current.scrollHeight > divRef.current.clientHeight)
    }
  }, [defaultDivMaxHeight, isMounted])

  return (
    <ParagraphCardItemContainer>
      <div ref={divRef}>
        {description.map((paragraph, index) =>
          paragraph.length ? (
            <p key={paragraph + index}>{paragraph}</p>
          ) : (
            <br key={index} />
          ),
        )}
      </div>

      {hasOverflow && (
        <Button
          onClick={handleToggleDescription}
          ref={buttonRef}
          style={{ marginTop: defaultButtonMarginTop }}
          text={isExpanded ? 'Ocultar' : 'Expandir'}
        />
      )}
    </ParagraphCardItemContainer>
  )
}
