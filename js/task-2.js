(() => {
  const calculateEngravingPrice = function (message = '', pricePerWord = 0) {
    const messageArray = message.split(' ');
    return messageArray * pricePerWord;
  };
})();
