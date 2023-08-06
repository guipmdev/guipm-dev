import { CardItem, Project } from '@/components/CardItem'
import { api } from '@/libs/wretch'
import { CardList } from '@/theme/recipes/cardListRecipe'

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
