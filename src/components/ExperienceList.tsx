import { memo } from 'react'

import { CardList } from '@/theme/recipes/cardListRecipe'

import { CardItem } from './CardItem'

interface Experience {
  id: string
  startDate: string
  endDate: string
}

async function getExperiences(): Promise<Experience[]> {
  const response = await fetch(`${process.env.API_BASE_URL}/experiences`)

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}

export async function ExperienceList() {
  const experiences = await getExperiences().catch(() => [])

  return (
    <CardList>
      {experiences.map((experience) => (
        <CardItem type="experience" key={experience.id} />
      ))}

      <CardItem type="experience" />
      <CardItem type="experience" />
      <CardItem type="experience" />
    </CardList>
  )
}
