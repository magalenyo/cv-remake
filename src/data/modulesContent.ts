export type Project = {
  id: string
  title: string
  description: string
  imageUrl: string
  imageAlt: string
}

export const projects: Project[] = [
  {
    id: 'shutdown',
    title: 'SHUTDOWN',
    description:
      'Top-down action shooter video game created using the custom Tesseract Engine.',
    imageUrl: 'videos/cards/shutdown-trimmed-2.mp4',
    imageAlt: 'Shutdown',
  },
  {
    id: 'returnal-unreal-engine',
    title: 'RETURNAL UE5',
    description:
      'Recreation of Housemarque\'s Returnal bosses in Unreal Engine 5 using C++ and Behavior Trees.',
    imageUrl: 'videos/cards/returnal-ue-trimmed.mp4',
    imageAlt: 'Returnal UE5',
  },
  {
    id: 'boundead',
    title: 'BOUNDEAD',
    description:
      '2.5D adventure/platform videogame in Unity featuring combat, experience systems, and multiple enemy types.',
    imageUrl: 'images/carousel-boundead/1.png',
    imageAlt: 'Boundead',
  },
  {
    id: 'bullet-heaven',
    title: 'BULLET HEAVEN',
    description:
      'Action top-down shooter with intense bullet heaven gameplay, custom rewards, and abilities.',
    imageUrl: 'videos/cards/bullet-heaven-trimmed.mp4',
    imageAlt: 'Bullet Heaven Devlog',
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
    id: 'other-unreal-engine-projects',
    title: 'OTHER UE5 PROJECTS',
    description:
      'Various Unreal Engine 5 projects including shooters, physics puzzles, and parkour mechanics.',
    imageUrl: 'videos/cards/simple-shooter-trimmed.mp4',
    imageAlt: 'Other Unreal Engine Projects',
  },
  {
    id: 'unreal-engine-materials',
    title: 'UE5 MATERIALS',
    description:
      'A collection of Unreal Engine 5 materials and shaders exploring various rendering techniques.',
    imageUrl: 'images/ue-materials/magic/cardview.mp4',
    imageAlt: 'Unreal Engine 5 Materials',
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
    id: 'motion-graphics',
    title: 'MOTION GRAPHICS',
    description:
      'A series of motion graphics and infinite loops rendered in Blender.',
    imageUrl: 'videos/InfiniteLoops/ILRetro.mp4',
    imageAlt: 'Motion Graphics',
  },
]

export type UplinkChannel = {
  label: string
  href?: string
  icon: string
  trailingIcon: string
  multiline?: boolean
  download?: boolean
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
    href: 'https://www.linkedin.com/in/miguel-angel-bueno-rivera/',
    icon: 'hub',
    trailingIcon: 'open_in_new',
  },
  {
    label: 'FETCH CREDENTIALS',
    href: 'CV_MiguelAngelBuenoRivera.pdf',
    icon: 'download',
    trailingIcon: 'description',
    multiline: true,
    download: true,
  },
  {
    label: 'SEND EMAIL',
    href: 'mailto:magalenyo7@gmail.com',
    icon: 'mail',
    trailingIcon: 'send',
  },
]
