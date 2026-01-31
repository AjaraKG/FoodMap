// Пример рецептов (можно добавить больше)
const recipes = {
  breakfast: [
    {name:"Омлет с сыром", difficulty:"Легко", text:"1) Взбей яйца с молоком\n2) Вылей на сковороду\n3) Добавь сыр\n4) Готовь 3-4 мин"},
    {name:"Овсянка с бананом", difficulty:"Легко", text:"1) Вскипяти молоко\n2) Добавь овсянку\n3) Варить 5 мин\n4) Добавь банан и мёд"},
    {name:"Тост с авокадо", difficulty:"Средне", text:"1) Поджарь хлеб\n2) Намажь авокадо\n3) Обжарь яйцо\n4) Положи на тост"},
    {name:"Сырники", difficulty:"Средне", text:"1) Смешай творог, яйцо, сахар\n2) Добавь муку\n3) Сформируй лепёшки\n4) Обжарь с двух сторон"},
    {name:"Йогурт с гранолой", difficulty:"Легко", text:"1) Насыпь гранолу\n2) Добавь йогурт\n3) Перемешай\n4) Подавай"},
    {name:"Блинчики с ягодами", difficulty:"Средне", text:"1) Приготовь тесто\n2) Испеки блины\n3) Добавь ягоды\n4) Сверни и подавай"}
  ],
  lunch: [
    {name:"Курица с овощами", difficulty:"Средне", text:"1) Нарежь курицу\n2) Обжарь с овощами\n3) Добавь специи\n4) Готовь 10 мин"},
    {name:"Паста с соусом", difficulty:"Легко", text:"1) Сварить пасту\n2) Сделать соус\n3) Смешать\n4) Подавай"},
    {name:"Ризотто с грибами", difficulty:"Трудно", text:"1) Нарежь грибы\n2) Обжарь\n3) Добавь рис\n4) Варить с бульоном 20 мин"},
    {name:"Салат с киноа", difficulty:"Легко", text:"1) Сварить киноа\n2) Нарежь овощи\n3) Смешай\n4) Добавь соус"},
    {name:"Суп-пюре из тыквы", difficulty:"Средне", text:"1) Нарежь тыкву\n2) Варить с луком и морковью\n3) Измельчи блендером\n4) Добавь специи"}
  ],
  snack: [
    {name:"Йогурт с фруктами", difficulty:"Легко", text:"1) Нарежь фрукты\n2) Добавь йогурт\n3) Перемешай"},
    {name:"Банановые маффины", difficulty:"Средне", text:"1) Смешай ингредиенты\n2) Выпекай 20 мин"},
    {name:"Фруктовый смузи", difficulty:"Легко", text:"1) Нарежь фрукты\n2) Смешай в блендере\n3) Подавай"},
    {name:"Овощные чипсы", difficulty:"Средне", text:"1) Нарежь овощи тонко\n2) Запеки 15 мин\n3) Остуди"},
    {name:"Орехи с медом", difficulty:"Легко", text:"1) Смешай орехи с медом\n2) Запеки 5 мин\n3) Остуди"}
  ],
  dinner: [
    {name:"Рыба на пару", difficulty:"Средне", text:"1) Подготовь рыбу\n2) Приправь\n3) Готовь на пару 10-12 мин"},
    {name:"Салат с курицей", difficulty:"Легко", text:"1) Нарежь курицу и овощи\n2) Смешай\n3) Полей соусом"},
    {name:"Тушёные овощи", difficulty:"Легко", text:"1) Нарежь овощи\n2) Туши 10 мин\n3) Добавь специи"},
    {name:"Паста с креветками", difficulty:"Средне", text:"1) Сварить пасту\n2) Обжарь креветки\n3) Добавь соус и перемешай"},
    {name:"Запечённый картофель с сыром", difficulty:"Средне", text:"1) Нарежь картофель\n2) Запеки 20 мин\n3) Посыпь сыром и готово"}
  ]
};


// открыть список блюд
function openCategory(category) {
  const modal = document.getElementById('listModal');
  const title = document.getElementById('listTitle');
  const list = document.getElementById('foodList');

  title.textContent = category.toUpperCase();
  list.innerHTML = '';

  const foods = recipes[category];
  foods.forEach(food => {
    const div = document.createElement('div');
    div.className = 'food-item';
    div.textContent = food.name;
    div.onclick = () => openRecipe(food);
    list.appendChild(div);
  });

  modal.style.display = 'block';
  setTimeout(() => modal.classList.add('show'), 10);
}

// открыть рецепт
function openRecipe(food) {
  const modal = document.getElementById('recipeModal');
  document.getElementById('recipeTitle').textContent = food.name;
  document.getElementById('recipeDifficulty').textContent = "Сложность: " + food.difficulty;
  document.getElementById('recipeText').textContent = food.text;

  modal.style.display = 'block';
  setTimeout(() => modal.classList.add('show'), 10);
}

// закрыть модалку
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 350);
}

   

  

