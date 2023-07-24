import { SectionTitle } from '../SectionTitle'
import { AboutMeContainer } from './styles'

export function AboutMe() {
  return (
    <AboutMeContainer>
      <SectionTitle title="SOBRE" />

      <div>
        <p>
          Com experiência em React.js, Node.js, TypeScript, Express.js e
          PostgreSQL, e sempre buscando seguir as melhores práticas de
          programação para oferecer resultados de alta qualidade.
        </p>

        <p>
          Acredito que não sou apenas um digitador de códigos, mas um criador de
          soluções. Atualmente, estou em busca de novas oportunidades que me
          permitam aplicar minha paixão pela programação e meu compromisso em
          oferecer soluções inovadoras.
        </p>

        <p>
          Se você está à procura um programador criativo, orientado a resultados
          e com habilidades interpessoais sólidas, estou pronto para embarcar em
          novos desafios e criar algo extraordinário. Vamos juntos desbravar
          novos horizontes nesse universo da programação!
        </p>
      </div>
    </AboutMeContainer>
  )
}
