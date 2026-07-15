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
  {
    id: 'unreal-engine-materials',
    title: 'UE5 MATERIALS',
    description:
      'A collection of Unreal Engine 5 materials and shaders exploring various rendering techniques.',
    imageUrl: 'images/ue-materials/magic/cardview.mp4',
    imageAlt: 'Unreal Engine 5 Materials',
  },
  {
    id: 'node-express-api',
    title: 'NODE EXPRESS API',
    description:
      'REST API built with Node.js and Express, connected to an external MongoDB database using Mongoose.',
    imageUrl: 'images/node/node.png',
    imageAlt: 'Node Express API',
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
    href: 'https://www.linkedin.com/in/magalenyo',
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
