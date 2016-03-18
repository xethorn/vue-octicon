<template>
  <figure id="logo"><octicon name="mark-github" scale="8"></octicon></figure>
  <h1>Vue-Octicon</h1>
  <p class="desc">Octicon component for Vue.js, using inline SVG.</p>

  <h2>Basic</h2>
  <p><octicon name="git-pull-request"></octicon></p>
  <figure><pre><code>&lt;octicon <span class="attr">name</span>=<span class="val">"git-pull-request"</span>&gt;&lt;/octicon&gt;</code></pre></figure>

  <h2>Scale</h2>
  <p><octicon name="repo" scale="2"></octicon></p>
  <figure><pre><code>&lt;octicon <span class="attr">name</span>=<span class="val">"repo"</span> <span class="attr">scale</span>=<span class="val">"3"</span>&gt;&lt;/octicon&gt;</code></pre></figure>

  <h2>Spin</h2>
  <p><octicon name="sync" spin></octicon></p>
  <figure><pre><code>&lt;octicon <span class="attr">name</span>=<span class="val">"sync"</span> <span class="attr">spin</span>&gt;&lt;/octicon&gt;</code></pre></figure>

  <h2>Flip</h2>
  <p><octicon name="zap" flip="vertical"></octicon></p>
  <figure><pre><code>&lt;octicon <span class="attr">name</span>=<span class="val">"zap"</span> <span class="attr">flip</span>=<span class="val">"vertical"</span>&gt;&lt;/octicon&gt;</code></pre></figure>
</template>

<style>
body {
  margin-top: 5em;
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  color: #666;
  text-align: center;
}
</style>

<style scoped>
#logo {
  display: inline-block;
  padding: 10px;
  border-radius: 50%;
  background-color: #35495e;
  color: #41b883;
}

h1 {
  margin-bottom: 1em;
  font-family: Dosis, "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
}

h1, h2 {
  color: #2c3e50;
  font-weight: 300;
}

h2 {
  margin-top: 2em;
  font-size: 1.2em;
}

.desc {
  margin-bottom: 4em;
  color: #7f8c8d;
}

figure svg {
  display: block;
}

p .octicon {
  vertical-align: middle;
}

pre {
  display: inline-block;
  padding: 0.8em;
  background-color: #f9f9f9;
  box-shadow: 0 1px 2px rgba(0,0,0,0.125);
  line-height: 1.1;
  color: #2973b7;
}

pre, code {
  font-family: "Roboto Mono", Monaco, courier, monospace;
  font-size: 0.8em;
}

.attr {
  color: #e96900;
}

.val {
  color: #42b983;
}
</style>
