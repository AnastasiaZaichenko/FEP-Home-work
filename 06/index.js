const CATEGORY = 'category';
const PRODUCT = 'product';
const menu = [
  {
    type: CATEGORY,
    name: 'Mac',
    menu: [
      {
        type: PRODUCT,
        name: 'MacBook Pro 16”',
      },
      {
        type: PRODUCT,
        name: 'iMac 24”',
      },
      {
        type: PRODUCT,
        name: 'iMac 27”',
      },
      {
        type: CATEGORY,
        name: 'Accessories',
        menu: [
          {
            type: CATEGORY,
            name: 'Featured Magic',
            menu: [
              {
                type: PRODUCT,
                name: 'Magic Keyboard',
              },
              {
                type: PRODUCT,
                name: 'Magic Trackpad',
              },
            ],
          },
          {
            type: CATEGORY,
            name: 'Audio',
            menu: [
              {
                type: PRODUCT,
                name: 'AirPods Pro',
              },
              {
                type: PRODUCT,
                name: 'AirPods Max',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: CATEGORY,
    name: 'Ipad',
    menu: [
      {
        type: PRODUCT,
        name: 'iPad Pro 11”',
      },
      {
        type: PRODUCT,
        name: 'iPad Pro 12.9”',
      },
      {
        type: CATEGORY,
        name: 'Accessories',
        menu: [
          {
            type: PRODUCT,
            name: 'Apple Pencil',
          },
          {
            type: PRODUCT,
            name: 'Smart Keyboard',
          },
        ],
      },
    ],
  },
  {
    type: CATEGORY,
    name: 'Empty Category',
    menu: [],
  },
]

function printMenu(menu, level = 0) {
  let res = ''
  let indent = new Array(level).fill(' ').join('')

  for (const item of menu) {
    if (item.type === PRODUCT) {
      res += indent + item.name + '\n'
  } else {
      res += indent + item.name + '\n' + printMenu(item.menu, level + 1)
    }
  }
  return res;
}

const menuStr = printMenu(menu);
console.log(menuStr)

// function printMenu(menu, level = 0) {
//   let res = ''
//   let indent = new Array(level).fill(' ').join('')

//   for (const menuItem of menu) {
//     if (menuItem.type === PRODUCT) {
//       res += `${indent}- ${menuItem.name}\n`
//     } else {
//       res += `${indent}* ${menuItem.name}\n` + printMenu(menuItem.menu, level + 1)
//     }
//   }

//   return res;
// }

// const menuStr = printMenu(menu);

// console.log(menuStr);