import { api } from '@/libs/wretch'
import { CardList } from '@/theme/recipes/cardListRecipe'

import { CardItem, Experience } from './CardItem'

export async function ExperienceList() {
  const experiences: Experience[] = await api
    .query({ _sort: 'id', _order: 'desc', _limit: 2 })
    .get('/experiences')
    .json()

  return (
    <CardList>
      {experiences.map((experience) => (
        <CardItem key={experience.id} type="experience" data={experience} />
      ))}
    </CardList>
  )
}
