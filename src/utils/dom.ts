type CreateElementArgs<T extends keyof HTMLElementTagNameMap> = {
  window: Document;
  tag: T;
  id?: string;
  text?: string;
};

export const createElement = <T extends keyof HTMLElementTagNameMap>({
  window,
  tag,
  id,
  text,
}: CreateElementArgs<T>): HTMLElementTagNameMap[T] => {
  const element = window.createElement(tag);

  if (id) {
    element.setAttribute('id', id);
  }

  if (text) {
    const textNode = window.createTextNode(text);

    element.appendChild(textNode);
  }

  return element;
};
