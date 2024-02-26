import easy from "@/public/difficulties/easy.png"
import normal from "@/public/difficulties/normal.png"
import heroic from "@/public/difficulties/heroic.png"
import prisma from "@/public/workphotos/prisma.jpg"
import vertico from "@/public/workphotos/vertico.png"
import demande from "@/public/workphotos/demande.png"

export const experiences = [
  {
    title: "Prisma Olari",
    description: "Worked at the local grocery store as a cashier and a stocker",
    image: prisma,
    time: "2018-2020",
    url: "https://hok-elanto.fi/",
    difficulty: normal,
  },
  {
    title: "Vertico Oy",
    description: "Part time work in various roles in a grocery store",
    image: vertico,
    time: "2020-2021",
    url: "https://www.henkilostopartneri.fi/",
    difficulty: heroic,
  },
  {
    title: "Demande Oy",
    description: "Work in various roles in events and such",
    image: demande,
    time: "2023-ongoing",
    url: "https://www.demande.fi/",
    difficulty: easy,
  },
]
