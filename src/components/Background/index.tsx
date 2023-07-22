import Image from 'next/image'

import backgroundImage from '@/assets/background-image.jpeg'

import { BackgroundContainer, Grid } from './styles'

export function Background() {
  return (
    <BackgroundContainer>
      <Grid />
      <Image src={backgroundImage} alt="" priority={false} placeholder="blur" />
    </BackgroundContainer>
  )
}
