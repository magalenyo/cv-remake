const TECH_BADGE_VARIANTS: Record<string, string> = {
  'c++': 'tech-badge--cpp',
  'c#': 'tech-badge--csharp',
  unity: 'tech-badge--unity',
  'unreal engine 5': 'tech-badge--ue5',
  blueprints: 'tech-badge--blueprints',
  blender: 'tech-badge--blender',
  'in-house engine': 'tech-badge--inhouse',
}

export function getTechBadgeClass(tech: string) {
  const variant = TECH_BADGE_VARIANTS[tech.toLowerCase()] ?? 'tech-badge--default'
  return `tech-badge ${variant}`
}
