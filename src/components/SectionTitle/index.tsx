import { SectionTitleContainer } from './styles'

interface SectionTitleProps {
  title: string
}

export function SectionTitle({ title }: SectionTitleProps) {
  return <SectionTitleContainer>{title}</SectionTitleContainer>
}
