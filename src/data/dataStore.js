export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
    resultTitle: 'Search results:',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const infoContents = {
  title: 'Hi there!',
  subtitle: 'Cat ipsum dolor sit amet',
  text: 'More napping, more napping all the napping is exhausting play with twist ties so you are just gonna scroll by without saying meowdy? so fooled again thinking the dog likes me kick up litter and somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock.',
};
export const faqContents = {
  title: 'Frequently Asked Questions',
  questionOne: 'How are you?',
  questionTwo: 'What is your daily routine?',
  questionThree: 'What is your hobby?',
  answerOne: 'Purr for no reason run in circles, and tickle my belly at your own peril i will pester for food when you are in the kitchen even if it is salad and crusty butthole.',
  answerTwo: 'Get suspicious of own shadow then go play with toilette paper hunt by meowing loudly at 5am next to human slave food dispenser and cat is love, cat is life have secret plans so i do no work yet get food, shelter, and lots of stuff just like man who lives with us scamper so kitty scratches couch bad kitty.',
  answerThree: 'Jump on counter removed by human jump on counter again removed by human meow before jumping on counter this time to let the human know am coming back present belly, scratch hand when stroked. ',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: 'Things to buy <sup>soon!</sup>',
    description: 'Useless things I need to buy!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-3',
    title: 'Things to forget <sup>soon!</sup>',
    description: 'Move on and never look back!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    listId: 'list-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
    index: 0,
  },
  {
    id: 'card-2',
    listId: 'list-1',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
    index: 1,
  },
  {
    id: 'card-3',
    listId: 'list-1',
    columnId: 'column-2',
    title: 'Harry Potter',
    index: 0,
  },
  {
    id: 'card-4',
    listId: 'list-1',
    columnId: 'column-2',
    title: 'Star Wars',
    index: 1,
  },
  {
    id: 'card-5',
    listId: 'list-1',
    columnId: 'column-3',
    title: 'The Witcher',
    index: 0,
  },
  {
    id: 'card-6',
    listId: 'list-1',
    columnId: 'column-3',
    title: 'Skyrim',
    index: 1,
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
