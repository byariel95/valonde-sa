export const getReverseText = async (inputValue) => {
    const url = `http://localhost:4500/iecho?text=${encodeURI(inputValue)}`;
    const resp = await fetch(url);
    const data = await resp.json();
    const texts = data.map(({ text }) => {
      return { text };
    });

   return texts;
  };