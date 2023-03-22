export type RightMenuItemComplete = {
  id: number;
  label: string;
  referTo: string;
  element?: HTMLElement;
}

export const scrollHandler = (rightMenuItems: RightMenuItemComplete[],
  setSelectedItem: React.Dispatch<React.SetStateAction<number>>) => {

  if (rightMenuItems.length === 0) return;
  let menu: HTMLElement | null = document.querySelector(".section-container");
  if (menu === null) return;

  const rightMenuItemsWithIdSec = rightMenuItems.map((x) => {
    return {
      ...x,
      idSec: x.referTo.split("#")[1],
    };
  });

  const arrElements = rightMenuItemsWithIdSec.map((x) => {
    return { ...x, element: document.getElementById(x.idSec) };
  });

  let pos_menu = window.pageYOffset + menu.offsetHeight;

  const arrElementsEnhanced = arrElements.map((x) => {
    const element = x.element;
    const postElement = element ? element.offsetTop + element.offsetHeight : Infinity;
    const distance = Math.round(postElement - pos_menu);
    return { ...x, distance };
  });

  let min = Math.min(
    ...arrElementsEnhanced
      .map((x) => Math.round(x.distance))
      .filter((x) => x > 0)
  );

  arrElementsEnhanced.forEach((x) => {
    if (x.distance === min) {
      setSelectedItem((_id) => {
        return x.id;
      });
    }
  });
};
