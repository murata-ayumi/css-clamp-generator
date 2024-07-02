document
  .getElementById('clampForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const minValue = parseFloat(document.getElementById('minValue').value);
    const maxValue = parseFloat(document.getElementById('maxValue').value);
    const minViewport = parseFloat(
      document.getElementById('minViewport').value
    );
    const maxViewport = parseFloat(
      document.getElementById('maxViewport').value
    );

    const minValueRem = minValue / 16;
    const maxValueRem = maxValue / 16;

    const variablePart = (maxValue - minValue) / (maxViewport - minViewport);
    const constantPart = (minValue - minViewport * variablePart) / 16;

    const result = `clamp(${minValueRem.toFixed(3)}rem, ${constantPart.toFixed(
      3
    )}rem + ${(100 * variablePart).toFixed(2)}vw, ${maxValueRem.toFixed(
      3
    )}rem)`;

    document.getElementById('result').textContent = result;
  });

document.getElementById('copyButton').addEventListener('click', function () {
  const resultText = document.getElementById('result').textContent;
  navigator.clipboard
    .writeText(resultText)
    .then(() => {
      alert('クリップボードにコピーしました🎉');
    })
    .catch((err) => {
      console.error('コピーできませんでした😭: ', err);
    });
});
