import { CardList } from '@/theme/recipes/cardListRecipe'

import { CardItem, Project } from './CardItem'

async function getProjects(): Promise<Project[]> {
  const response = await fetch(`${process.env.API_BASE_URL}/projects`)

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}

export async function ProjectList() {
  const projects = await getProjects().catch(() => [])

  return (
    <CardList>
      {projects.map((project) => (
        <CardItem key={project.id} type="project" data={project} />
      ))}
    </CardList>
  )
}
