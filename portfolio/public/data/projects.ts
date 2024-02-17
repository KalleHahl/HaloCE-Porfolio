import muvico from "@/public/muvico.jpeg"
import tetris from "@/public/tetris.png"
import shunting from "@/public/shunting.jpg"
import bibtex from "@/public/bibtex.png"
import halo1 from "@/public/halo1.jpg"

import easy from "@/public/easy.png"
import normal from "@/public/normal.png"
import heroic from "@/public/heroic.png"
import legendary from "@/public/legendary.png"

export const projects = [
  {
    title: "Tetris",
    description: "Desktop application of the classic game Tetris",
    image: tetris,
    technologies: "Python, Pygame, Pytest, Poetry",
    difficulty: heroic,
  },
  {
    title: "Shunting Yard Calculator",
    description:
      "Command line application that evaluates mathematical expressions using the shunting yard algorithm",
    image: shunting,
    technologies: "Python, Pytest, Poetry",
    difficulty: normal,
  },
  {
    title: "MuViCo",
    description: "Music visualization for concerts",
    image: muvico,
    technologies: "React, Node.js, Express, MongoDB, Docker",
    difficulty: legendary,
  },
  {
    title: "BibTex cite controller",
    description: "Command line application that manages BibTex citations",
    image: bibtex,
    technologies: "Python, Pytest, Poetry, Robot Framework",
    difficulty: easy,
  },
  {
    title: "Halo CE -Portfolio",
    description:
      "Portfolio website created in the spirit of the game Halo: Combat Evolved",
    image: halo1,
    technologies: "React, Next.js, Tailwind CSS, Framer Motion, Vercel",
    difficulty: legendary,
  },
]
