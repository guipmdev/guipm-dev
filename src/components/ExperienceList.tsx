import { CardList } from '@/theme/recipes/cardListRecipe'

import { CardItem, Experience } from './CardItem'

async function getExperiences(): Promise<Experience[]> {
  const response = await fetch(
    `${process.env.API_BASE_URL}/experiences?_sort=id&_order=desc&_limit=2`,
  )

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
        <CardItem key={experience.id} type="experience" data={experience} />
      ))}
    </CardList>
  )
}
