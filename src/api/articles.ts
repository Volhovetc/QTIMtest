import type {IArticles} from "@/types/articles"

// функция получения данных по всем статьям
export const getArticles = async (): Promise<IArticles[]> => {
  try {
    const fetchResponse = await fetch(
      "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/"
    );
    const articles:IArticles[] = await fetchResponse.json();

    return articles;
  } catch (err) {
    throw new Error('кажется нет статей');
  }
};

// функция получения данных по одной статьи
export const getArticle = async (id: number): Promise<IArticles[]> => {
  try {
       const fetchResponse = await fetch(
      `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`
    );
    const article:IArticles = await fetchResponse.json();

    return article;
  } catch (err) {
    throw new Error('кажется статьи с таким номером нет');
  }
};
