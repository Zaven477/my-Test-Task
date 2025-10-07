export const getDayWord = (term = 0) => {
  const plural = new Intl.PluralRules("ru-RU");

  const dayWordVariants = {
    zero: "дней",
    one: "день",
    two: "дня",
    few: "дня",
    many: "дней",
    other: "дней",
  };

  return dayWordVariants[plural.select(term)];
};
