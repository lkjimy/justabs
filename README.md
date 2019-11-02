# justabs

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/lkjimy/justabs/blob/master/LICENSE)
[![npm](https://img.shields.io/badge/npm-v0.1.0-red.svg?style=flat&logo=npm)](https://www.npmjs.com/package/justabs)
[![Releases](https://img.shields.io/badge/releases-none-red.svg?style=flat)](https://github.com/lkjimy/justabs/releases)

> Just tabs... Nothing else.


## Getting Started

Install in your project
```
npm i justabs
```

Import it
```
// JS
import justabs from 'justabs'

// css
import 'justabs/dist/css/justabs.min.css'
```

## The sctructure
The ideia of this plugin is it to be as lightweight as possible, and do the job easily. All you have to do is separate the ``tabs`` and ``panels``.

```
// Tabs
<div data-tab="myJusTabs" class="justabs">
...
</div>

// Panels
<div data-panel="myJusTabs" class="justabs-panels">
...
</div>

```

Notice that ``data-tab`` and ``data-panel`` have the same name, therefor they are bound to each other. And also remember to use the justabs classes as shown in the example.

Now you can create the tabs and panels.

```
// Tabs
<div data-tab="myJusTabs" class="justabs">
  <div data-target="panel1" class="active">Tab 1</div>
  <div data-target="panel2">Tab 2</div>
  ...
</div>

// Panels
<div data-panel="myJusTabs" class="justabs-panels">
  <div data-name="panel1" class="active">Panel 1</div>
  <div data-name="panel2">Panel 2</div>
  ...
</div>

```

Now that each tab is targeting a panel, go ahead and run the function passing the ``data-tab/data-panel`` name to give it life.

```
justabs('myJusTabs')
```
