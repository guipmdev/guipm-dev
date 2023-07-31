import { api } from '@/libs/wretch'
import { CardList } from '@/theme/recipes/cardListRecipe'

import { CardItem, Project } from './CardItem'

export async function ProjectList() {
  const projects: Project[] = await api
    .query({ _sort: 'id', _order: 'desc', _limit: 2 })
    .get('/projects')
    .json()

  return (
    <CardList>
      {projects.map((project) => (
        <CardItem key={project.id} type="project" data={project} />
      ))}
    </CardList>
  )
}
