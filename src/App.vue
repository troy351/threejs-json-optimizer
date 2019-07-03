<template>
  <div id="app">
    <div style="float:left;width:70%">
      <h3>Optimizer</h3>
      <h5>
        This tool was designed to optimize json file exported by
        <a href="https://threejs.org/editor"
           target="_blank">threejs editor</a>
        to reduce its size and improve performance.
      </h5>
      <p>
        STEP 1:
        <input type="file"
               multiple
               accept="application/json"
               @change="fileChange" />
        Choose
        <code>app.json</code>
        file that in editor published
        <code>zip</code>
        file (note: all json files will be merged when multiple file selected)
      </p>

      <p v-if="s2Visible">STEP 2: <button @click="analyse">Analyse</button></p>

      <template v-if="s3Visible">
        <p>STEP 3: Choose optimize options</p>
        <ul>
          <li><input type="checkbox"
                   v-model="config.ignoreName">ignore name (<code>name</code> will be ignored while comparing two jsons)</li>
          <li><input type="checkbox"
                   v-model="config.toJPG">convert png to jpg to reduce size</li>
          <li><input type="checkbox"
                   v-model="config.resizeImage">reduce image resolution to less than 2048x2048</li>
          <li><input type="checkbox"
                   v-model="config.removeInvisible">remove invisible objects</li>
          <li><input type="checkbox"
                   v-model="config.removeObjects">remove duplicate objects</li>
          <li><input type="checkbox"
                   v-model="config.removeUserData">remove userData objects</li>
          <li><button @click="optimize">Optimize</button></li>

        </ul>
      </template>

      <p v-if="s4Visible">STEP 4: <button @click="download">download</button></p>

      <hr>
      <h3>Utility</h3>
      <p>Find UUID Usage</p>
      <p>
        <input type="text"
               placeholder="input the uuid here"
               v-model="searchUUID">
        <button style="margin-left:10px;"
                @click="search">Search</button>
      </p>
      <p>
        <pre>{{searchResult}}</pre>
      </p>
      <hr>
      <p>Compress via <a href="https://github.com/msgpack/msgpack-javascript"
           target="_blank">msgpack</a></p>
      <p>
        <input type="file"
               accept="application/json"
               @change="compressChange" />
        Choose JSON file</p>
    </div>
    <div style="float:left;width:30%">
      <p>logs</p>
      <ul v-if="logs.length"
          class="log">
        <li v-for="(log,index) in logs"
            :key="index">{{log}}</li>
      </ul>
    </div>
  </div>
</template>

<script src="./App.js">
</script>
