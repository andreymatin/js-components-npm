# js-components-npm
JavaScript utils collection with import feature


- domready.js - DOM ready
- no-js.js - remove 'no-js' flag-class from html tag
- parallax.js - background parallax

### Installation

```javascript
import domReady from 'js-components-npm/src/utils/domready'
import Parallax from 'js-components-npm/src/utils/parallax'
import NoJs from 'js-components-npm/src/utils/no-js'

domReady(() => {

  Parallax('.intro')
  NoJs()
})
```
