(() => {
  function formatString(string, maxLength = 40) {
    // Write code under this line
    const stringLength = string.split('');

    if (string.length > maxLength) {
      stringLength.length = maxLength;
      return stringLength.join('') + '...';
    } else if (stringLength.length <= maxLength) {
      return stringLength.join('');
    }
  }
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // 'Curabitur ligula sapien, tincidunt non.'

  console.log(
    formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'),
  );
  // 'Vestibulum facilisis, purus nec pulvinar...'

  console.log(
    formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
  );
})();
