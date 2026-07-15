export type Project = {
  id: string
  title: string
  description: string
  imageUrl: string
  imageAlt: string
}

export const projects: Project[] = [
  {
    id: 'boundead',
    title: 'BOUNDEAD',
    description:
      '2.5D adventure/platform videogame in Unity featuring combat, experience systems, and multiple enemy types.',
    imageUrl: 'images/carousel-boundead/1.png',
    imageAlt: 'Boundead',
  },
  {
    id: 'real-disunity',
    title: 'REAL DISUNITY',
    description:
      'Custom C++ and OpenGL video game engines developed from scratch, featuring 3D rendering and scene management.',
    imageUrl: 'images/engines/RealDisunityEngine/RealDisunity1.png',
    imageAlt: 'Real Disunity',
  },
  {
    id: 'tesseract',
    title: 'TESSERACT',
    description:
      'Advanced C++ video game engine featuring 2D components, MSAA, and a complete Navigation Module.',
    imageUrl: 'images/engines/TesseractEngine/tesseract.png',
    imageAlt: 'Tesseract',
  },
  {
    id: 'shutdown',
    title: 'SHUTDOWN',
    description:
      'Top-down action shooter video game created using the custom Tesseract Engine.',
    imageUrl: 'images/cards/shutdown.png',
    imageAlt: 'Shutdown',
  },
  {
    id: 'returnal-unreal-engine',
    title: 'RETURNAL UE5',
    description:
      'Recreation of Housemarque\'s Returnal bosses in Unreal Engine 5 using C++ and Behavior Trees.',
    imageUrl: 'images/projects/returnal/bt_ixion_general.png',
    imageAlt: 'Returnal UE5',
  },
]

export type UplinkChannel = {
  label: string
  href?: string
  icon: string
  trailingIcon: string
  multiline?: boolean
}

export const uplinkChannels: UplinkChannel[] = [
  {
    label: 'GITHUB',
    href: 'https://github.com/magalenyo',
    icon: 'code',
    trailingIcon: 'open_in_new',
  },
  {
    label: 'LINKEDIN',
    href: 'https://www.linkedin.com/in/magalenyo',
    icon: 'hub',
    trailingIcon: 'open_in_new',
  },
  {
    label: 'FETCH CREDENTIALS',
    href: 'https://miguelangelbuenorivera.com/',
    icon: 'download',
    trailingIcon: 'description',
    multiline: true,
  },
]
