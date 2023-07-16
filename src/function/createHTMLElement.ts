export const createDiv = (className: string): HTMLElement => {
  const newDiv: HTMLElement = document.createElement("div");
  newDiv.setAttribute("class", className);

  return newDiv;
};

/**
 * @param {string | null} className
 */
export const createUl = (className?: any): HTMLElement => {
  const newUl: HTMLElement = document.createElement("ul");

  newUl.setAttribute("class", className);

  return newUl;
};

export const createLi = (
  className: string,
  id: string,
  content: Text
): HTMLElement => {
  const newLi = document.createElement("li");

  newLi.setAttribute("id", id);
  newLi.setAttribute("class", className);
  newLi.appendChild(content);

  return newLi;
};

export const createBtn = (id: string): HTMLElement => {
  const newBtn: HTMLElement = document.createElement("button");

  newBtn.setAttribute("id", id);
  newBtn.textContent = "Open";

  return newBtn;
};
