import { ReactNode } from 'react'

import { Experience, Project } from '..'
import { HeadingCardItemContainer } from './styles'

interface CommonProps {
  children?: ReactNode
}

type ConditionalProps =
  | {
      type: 'experience'
      data: Experience
    }
  | {
      type: 'project'
      data: Project
    }

type HeadingCardItemProps = CommonProps & ConditionalProps

interface Location {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}

async function getLocation(cep: string): Promise<Location> {
  const response = await fetch(`${process.env.VIACEP_BASE_URL}/${cep}/json`)

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}

function getStateName(stateAbbr: string) {
  const states = {
    AC: 'Acre',
    AL: 'Alagoas',
    AP: 'Amapá',
    AM: 'Amazonas',
    BA: 'Bahia',
    CE: 'Ceará',
    DF: 'Distrito Federal',
    ES: 'Espírito Santo',
    GO: 'Goiás',
    MA: 'Maranhão',
    MT: 'Mato Grosso',
    MS: 'Mato Grosso do Sul',
    MG: 'Minas Gerais',
    PA: 'Pará',
    PB: 'Paraíba',
    PR: 'Paraná',
    PE: 'Pernambuco',
    PI: 'Piauí',
    RJ: 'Rio de Janeiro',
    RN: 'Rio Grande do Norte',
    RS: 'Rio Grande do Sul',
    RO: 'Rondônia',
    RR: 'Roraima',
    SC: 'Santa Catarina',
    SP: 'São Paulo',
    SE: 'Sergipe',
    TO: 'Tocantins',
  } as const

  type States = typeof states

  return states[stateAbbr as keyof States]
}

function getCountryName(countryCode: string) {
  const regionNames = new Intl.DisplayNames(['pt-BR'], { type: 'region' })

  return regionNames.of(countryCode)
}

export async function HeadingCardItem({
  children,
  type,
  data,
}: HeadingCardItemProps) {
  switch (type) {
    case 'experience': {
      const headingSubtitleArray = []

      if (data.location) {
        const detailedLocation = await getLocation(data.location.postalCode)

        const headingLocation = `${detailedLocation.localidade}, ${getStateName(
          detailedLocation.uf,
        )}, ${getCountryName(data.location.countryCode)}`

        headingSubtitleArray.push(headingLocation)
      }

      if (data.locationName) {
        headingSubtitleArray.push(data.locationName)
      }

      const headingSubtitleText = headingSubtitleArray.join(' · ')
      const hasHeadingSubtitle = headingSubtitleText.length > 0

      return (
        <HeadingCardItemContainer>
          {children}

          {hasHeadingSubtitle && <p>{headingSubtitleText}</p>}
        </HeadingCardItemContainer>
      )
    }

    case 'project':
      return <HeadingCardItemContainer>{children}</HeadingCardItemContainer>
  }
}
