import type { ImageMetadata } from 'astro';
import thumbnail from '../../assets/images/projects/far-manor.png';
import before01 from '../../assets/images/projects/far-manor/01-before.webp';
import after01 from '../../assets/images/projects/far-manor/01-after.webp';
import before02 from '../../assets/images/projects/far-manor/02-before.webp';
import after02 from '../../assets/images/projects/far-manor/02-after.webp';
import before03 from '../../assets/images/projects/far-manor/03-before.webp';
import after03 from '../../assets/images/projects/far-manor/03-after.webp';
import type { GalleryItem, Project } from './types';

const comparison = (before: ImageMetadata, after: ImageMetadata): GalleryItem[] => [
  { caption: 'Предыдущий дизайн', layout: 'single', images: [{ src: before, width: 370, height: 206 }] },
  {
    caption: 'Скриншот нового реализованного интерфейса',
    layout: 'single',
    images: [{ src: after, width: 370, height: 209 }],
  },
];

export const farManor: Project = {
  slug: 'far-manor',
  title: 'Far Manor',
  description: [
    'Редизайн интерфейса игры инди-разработчика. Механики опережали интерфейс: сильные системы подавались без обратной связи, игрок не понимал, что происходит.',
    'Переработала ключевые экраны, собрала дизайн-систему. Собрала параметры в группы и развела их по вкладкам. Благодаря такой переработке в игре появились видимые состояния, счётчики прогресса и явные условия.',
  ],
  tags: ['Web', 'Game Interface', 'B2C', 'UX/UI design'],
  thumbnail,
  crop: { top: 0, left: -0.12, width: 140.02, height: 100 },

  company: 'Indie developer',
  meta: {
    tags: 'game interface, web, ux/ui design, b2c',
    about:
      'Игра инди-разработчика, находящаяся на https://itch.io/ в открытом доступе. Разработка игры продолжается.',
  },
  sections: [
    {
      title: 'Моя роль',
      blocks: [
        {
          list: [
            'Аудит интерфейса: разбор игровых механик и сбор списка проблем до отрисовки',
            'Информационная архитектура экранов и переработка навигации',
            'UI-дизайн ключевых экранов: создание героя, профиль героя, бой, сборы участников свидания',
            'Проектирование состояний: активные, выбранные, заблокированные, недоступные элементы',
            'Дизайн-система: цвета, отступы, типографика, компоненты',
            'Разработка набора игровых иконок',
            'Инструменты: Figma (+ Figma Agents), Claude Design',
          ],
        },
      ],
    },
    {
      title: 'Результаты работы',
      blocks: [
        {
          paragraphs: [
            'Редизайн интерфейса игры, работа продолжается. Переработана структура некоторых ключевых экранов, выстроена визуальная иерархия, введена система индикаторов и состояний вместо числовых значений и формул.',
            'Создан набор игровых иконок. Собрана дизайн-система, на которой строятся новые экраны проекта.',
          ],
        },
      ],
    },
  ],
  gallery: [comparison(before01, after01), comparison(before02, after02), comparison(before03, after03)],
};
