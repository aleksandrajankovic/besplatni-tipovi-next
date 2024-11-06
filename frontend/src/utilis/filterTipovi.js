"use client";
const filterTips = (tips, filter) => {
  if (filter === "Svi") {
    return [...tips];
  } else if (filter === "Aktivni") {
    return tips.filter((tip) => new Date() < new Date(tip.tipDate));
  } else if (filter === "Istekli") {
    return tips.filter((tip) => new Date() >= new Date(tip.tipDate));
  }
  console.log(new Date(tip.tipDate), new Date());
  return [];
};

export default filterTips;
