document.addEventListener("DOMContentLoaded", function() {

      document.getElementById('mapWidthPx').addEventListener('input', calculate);
      document.getElementById('desiredMapWidth').addEventListener('input', calculate);
      document.getElementById('maxZoom').addEventListener('input', calculate);


      calculate();
    });

    function calculate() {
          const mapWidthPx = parseFloat(document.getElementById('mapWidthPx').value) || 0;
          const desiredMapWidth = parseFloat(document.getElementById('desiredMapWidth').value) || 0;
          const maxZoom = parseFloat(document.getElementById('maxZoom').value) || 0;

          const zoomFactor = maxZoom < 2 ? 2 : maxZoom;
          let result = (desiredMapWidth * zoomFactor) / (mapWidthPx * Math.pow(2, zoomFactor));
          result = parseFloat(result.toFixed(4));

          if (isNaN(result)) {
            result = 0.0000;
          }

          document.getElementById('output').textContent = result;
        }

        function copyResult() {
          const result = document.getElementById('output').textContent;
          navigator.clipboard.writeText(result).then(function() {
            console.log('Result copied to clipboard');
          }).catch(function() {
            console.log('Failed to copy result');
          });
        }
