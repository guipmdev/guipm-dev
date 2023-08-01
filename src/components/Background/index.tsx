import Image from 'next/image'

import backgroundImage from '@/assets/background-image.jpeg'

import { CursorGradient } from '../CursorGradient'
import { BackgroundContainer, BiggerGrid, SmallerGrid } from './styles'

export function Background() {
  return (
    <BackgroundContainer>
      <CursorGradient />

      <SmallerGrid />
      <BiggerGrid />
      <Image src={backgroundImage} alt="" priority={false} placeholder="blur" />
    </BackgroundContainer>
  )
}
