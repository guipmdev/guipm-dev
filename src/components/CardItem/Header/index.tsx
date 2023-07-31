import Image from 'next/image'

import { Experience, Project } from '..'
import { HeaderCardItemContainer } from './styles'

type HeaderCardItemProps =
  | { type: 'experience'; data: Experience }
  | { type: 'project'; data: Project }

function getMonthName(monthNumber: number) {
  const date = new Date()
  date.setMonth(monthNumber - 1)

  return date.toLocaleString('pt-BR', { month: 'short' }).replace('.', '')
}

export function HeaderCardItem({ type, data }: HeaderCardItemProps) {
  switch (type) {
    case 'experience': {
      let headerContent = `${getMonthName(data.startMonthYear.month)} de ${
        data.startMonthYear.year
      }`

      if (data.endMonthYear !== null) {
        headerContent += ` — ${getMonthName(data.endMonthYear.month)} de ${
          data.endMonthYear.year
        }`
      }

      return (
        <HeaderCardItemContainer>
          <span>{headerContent}</span>
        </HeaderCardItemContainer>
      )
    }

    case 'project':
      return (
        <HeaderCardItemContainer>
          <Image
            src={process.env.API_BASE_URL + data.imagePath}
            alt=""
            width={200}
            height={112.5}
          />
        </HeaderCardItemContainer>
      )
  }
}
