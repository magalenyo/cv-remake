export type ProjectLink = {
  label: string
  url: string
}

export type ProjectSection = {
  title: string
  content: string[]
  list?: { label?: string; description: string }[]
  grid?: boolean
}

export type ProjectDetails = {
  id: string
  title: string
  subtitle: string
  heroImage: string
  sections: ProjectSection[]
  links: ProjectLink[]
  media: { type: 'image' | 'video'; url: string; alt?: string }[]
}

export const projectsData: Record<string, ProjectDetails> = {
  boundead: {
    id: 'boundead',
    title: 'BOUNDEAD',
    subtitle: '2.5D ADVENTURE / PLATFORMER IN UNITY',
    heroImage: 'https://lh3.googleusercontent.com/aida/AP1WRLvTVTrewRwlgVrQm8qRPJheOauoK4GFPgQsZj9G6yvwQ5AaxcxNStRVXNCxO836mDTVcxHL6DY9zOtGM3TqPyWLZvsC4Im8ng8Gy-uEyoBUOrb174tpzrSfysrbNwgWgX_7foW0IunRsAk1F2IrY3fESOqgjqqEYYlz-HbskSFMkYTUDAT-Lp3hLFpxEt1muMx1Nn8hkZbT0FlJrF7A6D3XK5Mw7qBkOipGWVVV_9rOWnDukdgwRZfLxP0q',
    sections: [
      {
        title: 'DESCRIPTION',
        content: [
          'As a final project of the Computer Engineering degree, my friend Narcís Bustins Núñez and I made a 2.5D adventure/platform videogame in Unity. We worked for 6 months, spending all available hours on the project, and we are really proud and satisfied with the final result.',
          'The game is composed by two levels, one that acted as an introduction and as a tutorial, and a final one with a final boss to conclude the game.',
          'We modeled some of the objects we used, like the main player or the following buddy, but we mostly used assets from the Unity Store or other websites.'
        ]
      },
      {
        title: 'SYSTEMS_PROGRAMMED',
        content: ['We programmed all the behaviors and systems of this game, that include:'],
        list: [
          { label: 'Player', description: 'This system allows the control of the player in a 2.5D Space, with a horizontal and vertical movement. This includes all the main mechanics of movement: move, jump, crouch and dash.' },
          { label: 'Combat System', description: 'A system that would allow different entitites (player and enemies) to make, recieve damage and die. This system includes features to make damage with melee weapons, or throw damaging projectiles.' },
          { label: 'Enemies', description: 'Melee enemy, Ranged enemy, Slime enemy, and a Final boss with different attacks and abilities based on health phases.' },
          { label: 'Experience System', description: 'A full system that allowed the player to earn experience points when killing enemies, and then a system that would allow the player to spend these points on unlockable abilities and upgrading player stats.' },
          { label: 'Other', description: 'Animations, Traps, Consumables, Maskarea System (the entity that follows the player), etc.' }
        ]
      }
    ],
    links: [
      { label: 'DOWNLOAD GAME', url: 'https://drive.google.com/file/d/1sUCAhD_6wuYjUpBIHrZGFuriDXJ2NQUn/view' },
      { label: 'DOCUMENTATION & CODE', url: 'https://drive.google.com/drive/folders/1QNWSwwthEgOeo9RyIHBumBHh4TkzlaZw?usp=sharing' },
      { label: 'VIDEO PLAYLIST', url: 'https://youtube.com/playlist?list=PLqL7Y-7Sr4iVxBafXM63IY3DBSXzyIoYY' }
    ],
    media: [
      { type: 'video', url: 'https://www.youtube.com/embed/XNsSLHtClBM' }
    ]
  },
  'real-disunity': {
    id: 'real-disunity',
    title: 'REAL DISUNITY',
    subtitle: 'CUSTOM C++ / OPENGL GAME ENGINE',
    heroImage: 'https://lh3.googleusercontent.com/aida/AP1WRLuyybmvBnfV89PPgxIZ26MyKJW2mcLmGKMRrbVX_ooGnY9Hwjtgt2b3FYnNV0AffDvP_3Q1Q1tGaseuA1Vh5KxeVMM7mCpNe9hyswE75p_FzAmSaEikx9yVyGfNriDr-paJPxy7mPdQXhKIKaxBuUbXujT6FJ8KiFPCdujVRxuDT1ej6Uq0ngdwI4HtQoQQTxcqYX1OqPwKHO9_lB2tYzaWbUmcnO-IMPPVY6PIK0gKkTMgauawmda0tFs',
    sections: [
      {
        title: 'DESCRIPTION',
        content: [
          "As part of our Master's Degree program, we developed a small video game engine individually made from scratch in C++ and OpenGL. Mine was named IsItRealEngine and it could render 2D images and 3D models, as well as importing new models, allowed camera movement and management, configuration and monitoring panels.",
          "Once we developed our own video game engines, we grouped in pairs and created a more advanced engine. Ours was named RealDisunity Engine and it introduced frustum culling, scene management (save and load), game objects hierarchies, components management, materials creation, phong shader, panels docking, etc."
        ]
      }
    ],
    links: [
      { label: 'ISITREALENGINE REPO', url: 'https://github.com/magalenyo/RealDisunity/releases/tag/v1.1' },
      { label: 'REALDISUNITY REPO', url: 'https://github.com/magalenyo/RealDisunity/releases/tag/2.0' }
    ],
    media: [
      { type: 'image', url: 'images/engines/RealDisunityEngine/RealDisunity1.png' },
      { type: 'image', url: 'images/engines/RealDisunityEngine/RealDisunity2.png' }
    ]
  },
  'tesseract': {
    id: 'tesseract',
    title: 'TESSERACT',
    subtitle: 'ADVANCED C++ GAME ENGINE',
    heroImage: 'https://lh3.googleusercontent.com/aida/AP1WRLsIM7YiwCKQSPUkXp79p4HRl71KLBuQN-QPsYJ0KLI28upvsmbENszsSsCgP24PaSDmLCWSRR4MPlv2aB01QV8dy1PniH7_xU9UXYCGTXy55PvpvwMlWs65hvkFzRM7u8hp33rk3sR_Iw7Nl_16G3NUKbxFjHnjd5XVc-2KZyP-UYIvkvzBTjKyQcGrR-h8kjwwNNrrbA3KaxgpwT7GO_coQtji_lwg6S86L_i7hxx8XQkkYnhtRyAfBItW',
    sections: [
      {
        title: 'DESCRIPTION',
        content: [
          "In the Master's degree, after the release of RealDisunity, we had to create a video game engine in collaboration with all the students of the masters, and we ended up creating an advanced engine called Tesseract Engine.",
          "This engine would be the final engine that we would use for the creation of our own video game in the Master's degree."
        ]
      },
      {
        title: 'MODULES_DEVELOPED',
        content: ['These are the features I worked on:'],
        list: [
          { label: '2D Components', description: 'Transform 2D, Image, and Text components for UI rendering.' },
          { label: 'Graphics', description: 'MSAA anti-aliasing, Unlit Shader, Dissolve Shader (Simplex Noise Map), and Chromatic aberration effect.' },
          { label: 'Navigation Module', description: 'Integrated Recast & Detour libraries to generate a Navigable Mesh. Created NavAgent component for pathfinding and Obstacle component for dynamic NavMesh modification.' }
        ]
      }
    ],
    links: [
      { label: 'TESSERACT REPO', url: 'https://github.com/PenteractStudios/Tesseract' }
    ],
    media: [
      { type: 'image', url: 'images/engines/TesseractEngine/tesseract.png' },
      { type: 'image', url: 'images/engines/TesseractEngine/nav_1.gif' },
      { type: 'image', url: 'images/engines/TesseractEngine/nav_2.gif' },
      { type: 'image', url: 'images/engines/TesseractEngine/nav_3.gif' },
      { type: 'image', url: 'images/engines/TesseractEngine/nav_4.gif' }
    ]
  },
  'shutdown': {
    id: 'shutdown',
    title: 'SHUTDOWN',
    subtitle: 'TOP-DOWN ACTION SHOOTER',
    heroImage: 'https://lh3.googleusercontent.com/aida/AP1WRLvTVTrewRwlgVrQm8qRPJheOauoK4GFPgQsZj9G6yvwQ5AaxcxNStRVXNCxO836mDTVcxHL6DY9zOtGM3TqPyWLZvsC4Im8ng8Gy-uEyoBUOrb174tpzrSfysrbNwgWgX_7foW0IunRsAk1F2IrY3fESOqgjqqEYYlz-HbskSFMkYTUDAT-Lp3hLFpxEt1muMx1Nn8hkZbT0FlJrF7A6D3XK5Mw7qBkOipGWVVV_9rOWnDukdgwRZfLxP0q',
    sections: [
      {
        title: 'DESCRIPTION',
        content: [
          "In the Master's degree, as part of our final project, with our Tesseract Engine, we created a top down action shooter video game called Shutdown."
        ]
      }
    ],
    links: [
      { label: 'OFFICIAL WEBSITE', url: 'https://shutdown-github-io.vercel.app/' },
      { label: 'SHUTDOWN REPO', url: 'https://github.com/PenteractStudios/Penteract' }
    ],
    media: [
      { type: 'video', url: 'https://www.youtube.com/embed/hq4AP1z1QZ8' },
      { type: 'video', url: 'https://www.youtube.com/embed/qf6j_g3qYKc' }
    ]
  },
  'returnal-unreal-engine': {
    id: 'returnal-unreal-engine',
    title: 'RETURNAL UNREAL ENGINE',
    subtitle: 'HOUSEMARQUE\'S RETURNAL IN UNREAL ENGINE 5',
    heroImage: 'https://lh3.googleusercontent.com/aida/AP1WRLvTVTrewRwlgVrQm8qRPJheOauoK4GFPgQsZj9G6yvwQ5AaxcxNStRVXNCxO836mDTVcxHL6DY9zOtGM3TqPyWLZvsC4Im8ng8Gy-uEyoBUOrb174tpzrSfysrbNwgWgX_7foW0IunRsAk1F2IrY3fESOqgjqqEYYlz-HbskSFMkYTUDAT-Lp3hLFpxEt1muMx1Nn8hkZbT0FlJrF7A6D3XK5Mw7qBkOipGWVVV_9rOWnDukdgwRZfLxP0q',
    sections: [
      {
        title: 'DESCRIPTION',
        content: [
          "This project is an attempt to recreate some of the bosses from Returnal, a third-person action shooter that was a PS5 launch exclusive developed by Housemarque, in Unreal Engine 5 and C++.",
          "Since behavior trees have become the industry standard for AI behaviors, I will be implementing the enemies' AI with BTs instead of more traditional programming.",
          "Everything has been made from scratch except the audio, models and animations."
        ]
      },
      {
        title: 'IXION_BOSS_PHASE_1',
        content: [
          "This boss has 3 different phases: it starts grounded, then immediately flies off into the sky, initiating the game loop, and firing various bullet patterns and attacks. Each phase adds a level of difficulty by introducing new complex attacks."
        ],
        list: [
          { label: 'Fly to', description: 'Flies to a target location above the ground.' },
          { label: 'Exit Attack', description: 'Performs a 360-degree burst of bullets that decelerate drastically using a curve.' },
          { label: 'Machine Gun Attack', description: 'Shoots at a predicted position of where the player will go, with a certain spread behavior.' },
          { label: 'Burst Attack', description: 'Shoots towards the player in a cone.' },
          { label: 'Vortex Attack', description: 'Shoots a cone of bullets towards the player, creating a beautiful pattern.' }
        ]
      },
      {
        title: 'IXION_BOSS_PHASE_2',
        content: [
          "This Behavior Tree is divided into two main branches: the first branch handles the phase change actions, and the second branch controls the game loop. The second branch executes once all tasks in the first branch are completed."
        ],
        list: [
          { label: 'Drop', description: 'Shoots a raycast toward the ground and drops to that position.' },
          { label: 'Add Offset Position', description: 'Adds an offset to the selected blackboard key.' },
          { label: 'Shockwave Bullets', description: 'An attack repeated 4 times, consisting of three components: Shockwave, Bullet Waves, and Burst.' },
          { label: 'Descend Rush', description: 'Once the boss is high in the sky, it follows a spline in a descending direction, firing two sideways-moving shockwaves and creating a vortex attack.' }
        ]
      }
    ],
    links: [
      { label: 'RETURNAL UE5 REPO', url: 'https://github.com/magalenyo/UE5-BulletHell' }
    ],
    media: [
      { type: 'video', url: 'https://www.youtube.com/embed/GBGyvQ0MmYU' },
      { type: 'video', url: 'https://www.youtube.com/embed/R4kpB3jB7HE' },
      { type: 'image', url: 'images/projects/returnal/bt_ixion_general.png' },
      { type: 'image', url: 'images/projects/returnal/bt_ixion_phase_1.png' },
      { type: 'image', url: 'images/projects/returnal/bt_ixion_phase_2.png' },
      { type: 'image', url: 'images/projects/returnal/bt_ixion_phase_2_1.png' },
      { type: 'image', url: 'images/projects/returnal/bt_ixion_phase_2_2.png' }
    ]
  },
  'unreal-engine-materials': {
    id: 'unreal-engine-materials',
    title: 'UE5 MATERIALS',
    subtitle: 'UNREAL ENGINE 5 SHADERS & MATERIALS',
    heroImage: 'images/ue-materials/magic/cardview.mp4',
    sections: [
      {
        title: 'DESCRIPTION',
        content: [
          'This is an Unreal Engine 5 project to learn more about materials and experiment with rendering techniques. You can find all the materials in the same Github repository.'
        ]
      },
      {
        title: 'MATERIALS_COLLECTION',
        content: ['The collection includes:'],
        grid: true,
        list: [
          { label: 'Dragon', description: 'Animated dragon material.' },
          { label: 'Morphing', description: 'Geometry morphing effect.' },
          { label: 'Volumetric Ice', description: 'Deep volumetric ice shader.' },
          { label: 'Glitter Ball', description: 'Sparkling glitter material.' },
          { label: 'Magic Sphere', description: 'Magical energy sphere effect.' },
          { label: 'Slime', description: 'Viscous slime material.' },
          { label: 'Glass', description: 'Refractive glass shader.' },
          { label: 'Bubble', description: 'Iridescent soap bubble effect.' },
          { label: 'Sun', description: 'Solar surface material.' },
          { label: 'TV Screen', description: 'CRT/LCD screen effect.' }
        ]
      }
    ],
    links: [
      { label: 'UE5 SHADERS REPO', url: 'https://github.com/magalenyo/ShadersUE5' }
    ],
    media: [
      { type: 'video', url: 'images/ue-materials/dragon/video.mp4' },
      { type: 'video', url: 'images/ue-materials/volumetric-ice/video.mp4' },
      { type: 'video', url: 'images/ue-materials/glitter/video.mp4' },
      { type: 'video', url: 'images/ue-materials/magic/video.mp4' },
      { type: 'video', url: 'images/ue-materials/slime/video.mp4' },
      { type: 'video', url: 'images/ue-materials/glass/video.mp4' },
      { type: 'video', url: 'images/ue-materials/bubble/video.mp4' },
      { type: 'video', url: 'images/ue-materials/sun/video.mp4' },
      { type: 'video', url: 'images/ue-materials/screen/video.mp4' }
    ]
  },
  'node-express-api': {
    id: 'node-express-api',
    title: 'NODE EXPRESS API',
    subtitle: 'NODE.JS + EXPRESS + MONGODB',
    heroImage: 'images/node/node.png',
    sections: [
      {
        title: 'DESCRIPTION',
        content: [
          'Since my expertise on backend development is with Java and SpringBoot, to learn more about other technologies, I decided to create an API Rest on Node and Express.',
          'The API Rest has several endpoints developed and is connected to an external MongoDB database with the use of Mongoose.'
        ]
      }
    ],
    links: [
      { label: 'NODE API REPO', url: 'https://github.com/magalenyo/NodeAPI' }
    ],
    media: []
  },
  'motion-graphics': {
    id: 'motion-graphics',
    title: 'MOTION GRAPHICS',
    subtitle: 'BLENDER INFINITE LOOPS',
    heroImage: 'images/node/node.png',
    sections: [
      {
        title: 'DESCRIPTION',
        content: [
          'This is a series of motion graphics renders made in Blender. I enjoy learning and doing infinite loops.'
        ]
      }
    ],
    links: [
      { label: 'MOTION GRAPHICS REPO', url: 'https://github.com/magalenyo/InfiniteLoops' }
    ],
    media: []
  }
}
