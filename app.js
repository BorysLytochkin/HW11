"use strict"

// Базовий клас - Футболіст
class FootballPlayer {
    constructor(name, age, speed, endurance) {
      this.name = name; // Ім'я футболіста
      this.age = age; // Вік футболіста
      this.speed = speed; // Швидкість
      this.endurance = endurance; // Витривалість
    }

    train() {
      this.endurance++;
      console.log(`${this.name} тренується.`);
    }
  
    scoreGoal() {
      console.log(`${this.name} забиває гол!`);
    }
  
    rest() {
      console.log(`${this.name} відпочиває після важкого матчу. Витривалість збільшилася до ${this.endurance}.`);
    }
  }
  
  // Клас для Воротаря
  class Goalkeeper extends FootballPlayer {
    #secretSave
    constructor(name, age, speed, endurance, reflexes) {
      super(name, age, speed, endurance);
      this.reflexes = reflexes; // Унікальна властивість воротаря - рефлекси
      this.#secretSave = "відбиває одинадцятиметровий"; 
    }
  
    #useSecretSave() {
      console.log(`${this.name} використовує секретний прийом: ${this.#secretSave}.`);
    }
  
    makeSave() {
      console.log(`${this.name} робить сейв завдяки своїм рефлексам ${this.reflexes}.`);
    }
  
    applySecretSave() {
      this.#useSecretSave();
    }
  }

  // Спільний предок для класів Midfielder і Defender
  class OutfieldPlayer extends FootballPlayer {
    constructor(name, age, speed, endurance, passing) {
      super(name, age, speed, endurance);
      this.passing = passing; // Унікальна властивість - гарні паси 
    }
  
    // Спільний метод для OutfieldPlayer
    passBall(targetPlayer) {
      console.log(`${this.name} передає м'яч ${targetPlayer.name} з точністю ${this.passing}.`);
    }
  }
  
  // Клас для Захисника
  class Defender extends OutfieldPlayer {
    #secretTactic
    constructor(name, age, speed, endurance, passing, tackling) {
      super(name, age, speed, endurance, passing);
      this.tackling = tackling; // Унікальна властивість захисника - відбір м'яча
      this.#secretTactic = "Притримує суперника руками"; 
    }
  
    #useSecretTactic() {
      console.log(`${this.name} використовує секретний тактичний маневр: ${this.#secretTactic}.`);
    }
  
    performTackle() {
      console.log(`${this.name} робить підкат з майстерністю ${this.tackling}.`);
    }
  
    applySecretTactic() {
      this.#useSecretTactic();
    }
  }
  

  // Клас для Півзахисника
  class Midfielder extends OutfieldPlayer {
    #secretStrategy
    constructor(name, age, speed, endurance, passing, vision) {
      super(name, age, speed, endurance, passing);
      this.vision = vision; // Унікальна властивість півзахисника - бачення поля
      this.#secretStrategy = "Закидання м'яча за спину захисту суперника"; 
    }
  
    #useSecretStrategy() {
      console.log(`${this.name} використовує секретну стратегію: ${this.#secretStrategy}.`);
    }
  
    createChance() {
      console.log(`${this.name} створює гольовий момент завдяки своєму баченню ${this.vision}.`);
    }
  
    applySecretStrategy() {
      this.#useSecretStrategy();
    }
  }
  
  // Клас для Нападника
  class Striker extends FootballPlayer {
    #secretMove;
    constructor(name, age, speed, endurance, finishing) {
      super(name, age, speed, endurance);
      this.finishing = finishing; // Унікальна властивість нападника - завершення атак
      this.#secretMove = "Точний удар у дев'ятку"; 
    }
  
    #useSecretMove() {
      console.log(`${this.name} використовує секретний прийом: ${this.#secretMove}.`);
    }
  
    shoot() {
      console.log(`${this.name} пробиває по воротах з точністю ${this.finishing}.`);
    }
  
    applySecretMove() {
      this.#useSecretMove();
    }
  }
  
  // Створення об'єктів на основі класів
  const modric = new Midfielder('Лука Модрич', 39, 72, 63, 86, 87);
  const ramos = new Defender('Серхіо Рамос', 38, 57, 76, 83, 73);
  const benzema = new Striker('Карім Бензема', 36, 81, 77, 85);
  const lunin = new Goalkeeper('Андрій Лунін', 25, 37, 78, 82);
  

  lunin.train();
  lunin.makeSave();
  lunin.applySecretSave();
  lunin.rest();

  ramos.performTackle();
  ramos.applySecretTactic();
  ramos.passBall(modric);

  modric.train();
  modric.passBall(benzema);
  modric.createChance();
  modric.applySecretStrategy();
  
  benzema.shoot();
  benzema.applySecretMove();
  benzema.rest();
  

  