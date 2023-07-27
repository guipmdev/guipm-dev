import Image from 'next/image'

import backgroundImage from '@/assets/background-image.jpeg'

import { CursorGradient } from '../CursorGradient'
import { BackgroundContainer, Grid } from './styles'

export function Background() {
  return (
    <BackgroundContainer>
      <CursorGradient />

      <Grid />
      <Image src={backgroundImage} alt="" priority={false} placeholder="blur" />
    </BackgroundContainer>
  )
}
