import GradientBackground from "../../components/GradientBackground"
import Carousel from "@/components/Carousel"
import { projects } from "@/public/data/projects"

const Projects = () => {
  return (
    <GradientBackground text="PROJECTS">
      <Carousel items={projects} />
    </GradientBackground>
  )
}

export default Projects
