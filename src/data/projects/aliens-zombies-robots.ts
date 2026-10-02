import thumbnail from '../../assets/images/projects/aliens-zombies-robots.png';
import screen01 from '../../assets/images/projects/aliens-zombies-robots/01.webp';
import screen02 from '../../assets/images/projects/aliens-zombies-robots/02.webp';
import screen03 from '../../assets/images/projects/aliens-zombies-robots/03.webp';
import screen04 from '../../assets/images/projects/aliens-zombies-robots/04.png';
import screen05 from '../../assets/images/projects/aliens-zombies-robots/05.png';
import qr from '../../assets/images/projects/aliens-zombies-robots/qr-google-play.png';
import type { Project } from './types';

export const aliensZombiesRobots: Project = {
  slug: 'aliens-zombies-robots',
  title: 'Aliens, Zombies, Robots',
  description: [
    'Мобильная игра инди-разработчика, находящаяся на этапе открытого бета-тестирования.',
    'В проекте я работала над интерфейсами и элементами игры в составе небольшой команды в условиях строгих ограничений.',
    'Разработала ключевые экраны, поп-апы, а также создала нейроиллюстрации для промо.',
  ],
  tags: ['Game Interface', 'Mobile', 'B2C', 'UX/UI design'],
  thumbnail,

  company: 'AKPublish ltd',
  meta: {
    tags: 'game interface, mobile, ux/ui design, B2C',
    about: 'Мобильная игра Idle Tower Defense, находящаяся на этапе открытого бета-тестирования.',
  },
  sections: [
    {
      title: 'Моя роль',
      blocks: [
        {
          list: [
            'Разработка и совершенствование цветовой палитры',
            'Создание вайрфреймов',
            'UI дизайн основных экранов, pop-up окон и игровых иконок',
            'Генерация и доработка иллюстраций с помощью нейросетей',
            'Инструменты: Figma, Unity, Nano Banana, Flux, ChatGPT, Gemini, Photoshop',
          ],
        },
      ],
    },
    {
      title: 'Результаты работы',
      blocks: [
        {
          list: [
            'Разработала UI для основных игровых экранов',
            'Создала дизайн pop-up окон для промо-предложений и специальных игровых режимов',
            'Сгенерировала и доработала серию иллюстраций для использования в игре и маркетинговых кампаниях.',
          ],
        },
      ],
    },
  ],
  gallery: [
    [
      {
        caption: 'Скриншоты из игры',
        layout: 'list',
        images: [screen01, screen02, screen03, screen04, screen05].map((src) => ({ src, width: 259, height: 532 })),
      },
    ],
  ],
  link: {
    label: 'Игра на Google Play',
    href: 'https://play.google.com/store/apps/details?id=com.akpublish.survival.idle.td',
    qr,
  },
};
