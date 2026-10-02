import type { ImageMetadata } from 'astro';
import figma from '../assets/images/tools/figma.png';
import photoshop from '../assets/images/tools/photoshop.png';
import illustrator from '../assets/images/tools/illustrator.png';
import afterEffects from '../assets/images/tools/after-effects.png';
import unity from '../assets/images/tools/unity.png';
import claude from '../assets/images/ai/claude.png';
import chatgpt from '../assets/images/ai/chatgpt.png';
import gemini from '../assets/images/ai/gemini.png';
import perplexity from '../assets/images/ai/perplexity.png';

export interface Tool {
  name: string;
  /** Proficiency shown by the ring, 0–100. */
  level: number;
  icon: ImageMetadata;
  /** Icon box size in px, as in Figma. */
  width: number;
  height: number;
  /** Vertical nudge of the icon inside the circle, px. */
  offsetY?: number;
}

export const mainTools: Tool[] = [
  { name: 'Figma', level: 75, icon: figma, width: 63.46, height: 60.25 },
  { name: 'Photoshop', level: 75, icon: photoshop, width: 67.94, height: 67.94, offsetY: -3.24 },
  { name: 'Illustrator', level: 50, icon: illustrator, width: 70.13, height: 69.59 },
  { name: 'After Effects', level: 50, icon: afterEffects, width: 64.75, height: 64.75 },
  { name: 'Unity', level: 25, icon: unity, width: 64.75, height: 64.75 },
];

export const languageModels = [
  { name: 'Claude', icon: claude },
  { name: 'ChatGPT', icon: chatgpt },
  { name: 'Gemini', icon: gemini },
  { name: 'Perplexity', icon: perplexity },
];

export const generativeModels = ['Flux', 'Midjourney', 'Nano Banana', 'Seedream'];

export const workflowTools = ['Claude Design', 'Figma MCP', 'Figma agents', 'Claude Code'];

export const uxuiSkills = [
  'UX-исследования',
  'Пользовательские сценарии',
  'Вайрфреймы',
  'Прототипирование',
  'Мокапы',
  'Игровой интерфейс (меню, HUD, поп-апы)',
  'Разработка дизайн-систем',
  'Визуальная иерархия',
];

export const softSkills = [
  'Фокус на бизнес-целях: дизайн-решения направлены на достижение конкретных задач.',
  'Работа в ограничениях: сохраняю качество при жестких сроках и технических рамках.',
  'Открытость к фидбеку: использую критику как инструмент улучшения продукта.',
  'Непрерывное развитие: регулярно развиваю навыки и углубляю экспертизу.',
];

export const softSkillsNote =
  'Кроме того, я обладаю более чем семилетним опытом в профессиональной фотографии, благодаря которому умею работать с композицией, цветами, визуальными приемами.';
