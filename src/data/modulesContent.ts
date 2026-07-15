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
    imageUrl:
      'https://lh3.googleusercontent.com/aida/AP1WRLvTVTrewRwlgVrQm8qRPJheOauoK4GFPgQsZj9G6yvwQ5AaxcxNStRVXNCxO836mDTVcxHL6DY9zOtGM3TqPyWLZvsC4Im8ng8Gy-uEyoBUOrb174tpzrSfysrbNwgWgX_7foW0IunRsAk1F2IrY3fESOqgjqqEYYlz-HbskSFMkYTUDAT-Lp3hLFpxEt1muMx1Nn8hkZbT0FlJrF7A6D3XK5Mw7qBkOipGWVVV_9rOWnDukdgwRZfLxP0q',
    imageAlt: 'Boundead',
  },
  {
    id: 'real-disunity',
    title: 'REAL DISUNITY',
    description:
      'Custom C++ and OpenGL video game engines developed from scratch, featuring 3D rendering and scene management.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/AP1WRLuyybmvBnfV89PPgxIZ26MyKJW2mcLmGKMRrbVX_ooGnY9Hwjtgt2b3FYnNV0AffDvP_3Q1Q1tGaseuA1Vh5KxeVMM7mCpNe9hyswE75p_FzAmSaEikx9yVyGfNriDr-paJPxy7mPdQXhKIKaxBuUbXujT6FJ8KiFPCdujVRxuDT1ej6Uq0ngdwI4HtQoQQTxcqYX1OqPwKHO9_lB2tYzaWbUmcnO-IMPPVY6PIK0gKkTMgauawmda0tFs',
    imageAlt: 'Real Disunity',
  },
  {
    id: 'tesseract',
    title: 'TESSERACT',
    description:
      'Advanced C++ video game engine featuring 2D components, MSAA, and a complete Navigation Module.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/AP1WRLsIM7YiwCKQSPUkXp79p4HRl71KLBuQN-QPsYJ0KLI28upvsmbENszsSsCgP24PaSDmLCWSRR4MPlv2aB01QV8dy1PniH7_xU9UXYCGTXy55PvpvwMlWs65hvkFzRM7u8hp33rk3sR_Iw7Nl_16G3NUKbxFjHnjd5XVc-2KZyP-UYIvkvzBTjKyQcGrR-h8kjwwNNrrbA3KaxgpwT7GO_coQtji_lwg6S86L_i7hxx8XQkkYnhtRyAfBItW',
    imageAlt: 'Tesseract',
  },
  {
    id: 'shutdown',
    title: 'SHUTDOWN',
    description:
      'Top-down action shooter video game created using the custom Tesseract Engine.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/AP1WRLvTVTrewRwlgVrQm8qRPJheOauoK4GFPgQsZj9G6yvwQ5AaxcxNStRVXNCxO836mDTVcxHL6DY9zOtGM3TqPyWLZvsC4Im8ng8Gy-uEyoBUOrb174tpzrSfysrbNwgWgX_7foW0IunRsAk1F2IrY3fESOqgjqqEYYlz-HbskSFMkYTUDAT-Lp3hLFpxEt1muMx1Nn8hkZbT0FlJrF7A6D3XK5Mw7qBkOipGWVVV_9rOWnDukdgwRZfLxP0q',
    imageAlt: 'Shutdown',
  },
  {
    id: 'returnal-unreal-engine',
    title: 'RETURNAL UE5',
    description:
      'Recreation of Housemarque\'s Returnal bosses in Unreal Engine 5 using C++ and Behavior Trees.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/AP1WRLvTVTrewRwlgVrQm8qRPJheOauoK4GFPgQsZj9G6yvwQ5AaxcxNStRVXNCxO836mDTVcxHL6DY9zOtGM3TqPyWLZvsC4Im8ng8Gy-uEyoBUOrb174tpzrSfysrbNwgWgX_7foW0IunRsAk1F2IrY3fESOqgjqqEYYlz-HbskSFMkYTUDAT-Lp3hLFpxEt1muMx1Nn8hkZbT0FlJrF7A6D3XK5Mw7qBkOipGWVVV_9rOWnDukdgwRZfLxP0q',
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
