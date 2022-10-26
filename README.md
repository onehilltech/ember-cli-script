ember-cli-script
==============================================================================

An EmberJS add-on for dynamically loading scripts


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-script
```


Usage
------------------------------------------------------------------------------

First, inject the `script` service into the corresponding EmberJS entity. Then,
call the `script.load(src)` method. If the script has not been loaded into the
document, then it will be loaded. If it has been loaded, then the currently loaded
script is used.

```javascript
import { inject as service } from '@ember/service';

export default SomeService extends Service {
    @service
    script;
    
    constructor () {
        super (...arguments);
        
        this.script.load ('https://cdn.somescript.com').then (script => {
            // The script has been loaded. We can now use it contents.
        });
    }
}
```

### Reason for this add-on

This add-on is intended to be used within applications and add-ons that need
to control when and how a script is dynamically loaded. It is an alternative
to using the `<script>` tag.

```html
<script src="https://cdn.somescript.com" async defer />
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
