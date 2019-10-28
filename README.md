

# Child Component-Preload Issue

When a sub-component is loaded through a resource-root mapping, ui5 won't recoginize that it's content has already been loaded as part of a preload file.

#### Steps to Reproduce


1. Build project and serve build result

```bash
npm run build && serve ./dist
```


2. In browser dev console, observe loaded preload file
* The loaded `Component-preload.js` file contains the sub-component

3. Click on Load Child Component and observe request history
* The sub-component files are loaded once again.
