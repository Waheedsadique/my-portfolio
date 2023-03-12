import Aboutme from "./components/About-me";

import Project from "./components/project";
import { aboutMe, skills, ProjectData} from "./data/date";

export default function Home() {
  return (
    <div>
      <Aboutme data={aboutMe}/>
      <Project data={ProjectData}/>
    </div>
  )
}