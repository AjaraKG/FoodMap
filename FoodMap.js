// Пример рецептов (можно добавить больше)
const recipes = {
  breakfast: [
    {
      name: "Омлет с сыром",
      difficulty: "Легко",
      text: 
`1) Взбей 2 яйца с 50 мл молока.
2) Посоли и поперчи по вкусу.
3) Разогрей сковороду с 1 ч.л. масла.
4) Вылей смесь на сковороду.
5) Добавь 50 г тёртого сыра.
6) Готовь на среднем огне 3-4 минуты до золотистой корочки.
7) Сверни омлет и подавай.`
    },
    {
      name: "Овсянка с бананом",
      difficulty: "Легко",
      text:
`1) Вскипятите 200 мл молока.
2) Добавьте 50 г овсяных хлопьев.
3) Варите 5 минут, помешивая.
4) Нарежьте 1 банан и добавьте в кашу.
5) Добавьте 1 ч.л. мёда и перемешайте.
6) Подавайте горячей.`
    },
    {
      name: "Сырники",
      difficulty: "Средне",
      text:
`1) Смешайте 200 г творога, 1 яйцо, 2 ст.л. сахара.
2) Добавьте 3 ст.л. муки.
3) Сформируйте лепёшки.
4) Разогрейте сковороду с 1 ч.л. масла.
5) Обжарьте сырники с двух сторон 3-4 минуты.
6) Подавайте с мёдом или сметаной.`
    }
  ],

  lunch: [
    {
      name: "Курица с овощами",
      difficulty: "Средне",
      text:
`1) Нарежьте 200 г куриного филе.
2) Нарежьте 1 морковь и 1 сладкий перец.
3) Разогрейте сковороду с 1 ст.л. масла.
4) Обжарьте курицу 5 минут.
5) Добавьте овощи и готовьте ещё 7 минут.
6) Посолите, поперчите и подавайте.`
    },
    {
      name: "Паста с соусом",
      difficulty: "Легко",
      text:
`1) Сварите 150 г пасты согласно инструкции.
2) Нарежьте 1 помидор и 50 г сыра.
3) Сделайте соус: обжарьте помидоры с чесноком 3 минуты.
4) Смешайте пасту с соусом.
5) Посыпьте сыром и подавайте.`
    }
  ],

  snack: [
    {
      name: "Фруктовый смузи",
      difficulty: "Легко",
      text:
`1) Нарежьте 1 банан и 100 г клубники.
2) Выложите фрукты в блендер.
3) Добавьте 150 мл йогурта.
4) Взбейте до однородной массы.
5) Перелейте в стакан и подавайте.`
    },
    {
      name: "Овощные чипсы",
      difficulty: "Средне",
      text:
`1) Нарежьте 1 морковь и 1 свёклу тонкими ломтиками.
2) Разогрейте духовку до 180°C.
3) Выложите овощи на противень, смазанной маслом.
4) Запекайте 15 минут.
5) Остудите и подавайте.`
    }
  ],

  dinner: [
    {
      name: "Рыба на пару",
      difficulty: "Средне",
      text:
`1) Подготовьте 200 г филе рыбы.
2) Посолите и поперчите по вкусу.
3) Добавьте лимонный сок 1 ч.л.
4) Готовьте на пару 10-12 минут.
5) Подавайте с зеленью и овощами.`
    },
    {
      name: "Салат с курицей",
      difficulty: "Легко",
      text:
`1) Нарежьте 100 г курицы отварной или жареной.
2) Нарежьте 50 г огурцов и 50 г помидоров.
3) Смешайте ингредиенты в миске.
4) Добавьте 1 ст.л. оливкового масла.
5) Перемешайте и подавайте.`
    }
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

   

  


