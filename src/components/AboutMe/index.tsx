import { AboutMeContainer } from './styles'

type About = string[]

async function getAbout(): Promise<About> {
  const response = await fetch(`${process.env.API_BASE_URL}/about`)

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}

export async function AboutMe() {
  const about = await getAbout()

  return (
    <AboutMeContainer>
      {about.map((paragraph, index) => {
        return <p key={index}>{paragraph}</p>
      })}
    </AboutMeContainer>
  )
}
