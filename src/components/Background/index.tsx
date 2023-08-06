import Image from 'next/image'

import backgroundImage from '@/assets/background-image.jpeg'

import { CursorGradient } from '../(cursor)/CursorGradient'
import { BackgroundContainer, Grid } from './styles'

export function Background() {
  return (
    <BackgroundContainer>
      <CursorGradient />

      <Grid size="big" />
      <Grid size="small" />

      <Image src={backgroundImage} alt="" priority={false} placeholder="blur" />
    </BackgroundContainer>
  )
}
