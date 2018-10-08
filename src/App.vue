<template>
  <div id="app">
    <h3>
      This tool was designed to optimize json file exported by
      <a href="https://threejs.org/editor"
         target="_blank">threejs editor</a>
      to reduce its size and improve performance.
    </h3>
    <p>step 1: please choose <code>app.json</code> file below
      <input type="file"
             id="fileInput"
             accept="application/json"></p>
  </div>
</template>

<script src="./App.ts">
</script>
