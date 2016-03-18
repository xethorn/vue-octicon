<template>
  <a href="//github.com/Justineo/vue-octicon" title="View on GitHub"><figure id="logo"><octicon name="mark-github" scale="8"></octicon></figure></a>
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

  <h2>Label<br><small>(<code>aria-label</code>)</small></h2>
  <p><octicon name="repo-forked" label="Forked Repository"></octicon></p>
  <figure><pre><code>&lt;octicon <span class="attr">name</span>=<span class="val">"repo-forked"</span> <span class="attr">label</span>=<span class="val">"Forked Repository"</span>&gt;&lt;/octicon&gt;</code></pre></figure>

  <footer>
    <a href="//github.com/Justineo">@Justineo</a>|<a href="//github.com/Justineo/vue-octicon/blob/master/LICENSE">MIT License</a>|<a href="//github.com/Justineo/vue-octicon">View on GitHub</a>
  </footer>
</template>

<style>
body {
  margin-top: 4em;
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  color: #666;
  text-align: center;
}
</style>

<style scoped>
#logo {
  display: inline-block;
  margin: 20px;
  padding: 10px;
  border-radius: 50%;
  background-color: #35495e;
  color: #41b883;
  transition: all .3s;
}

#logo:hover {
  background-color: #41b883;
  color: #35495e;
  margin: 0;
  padding: 30px;
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

h2 small {
  font-size: 0.6em;
  color: #7f8c8d;
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
}

pre code {
  font-size: 0.8em;
}

.attr {
  color: #e96900;
}

.val {
  color: #42b983;
}

footer {
  margin: 5em 0 3em;
  font-size: 0.5em;
  vertical-align: middle;
}

footer a {
  display: inline-block;
  margin: 0 5px;
  padding: 3px 0 6px;
  color: #7f8c8d;
  font-size: 2em;
  text-decoration: none;
}

footer a:hover {
  padding-bottom: 3px;
  border-bottom: 3px solid #42b983;
}
</style>
