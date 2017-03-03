# typewriter (Kirby CMS minimal theme)

My personal website [ilmente.com](http://ilmente.com) is based on Kirby CMS 
and **this is the minimal theme I'm using there**. 

The theme is fully responsive.

### Requirements
- `node.js` 6.0.0 or above
- Kirby CMS 2.4.1 or above

### Setup
Download this repo on your local machine.
Move this repo content into your Kirby site root.
Then:

``` bash
# install the dependencies
npm install

# build the theme
npm run build 

# build the theme in developmente mode
# watching for changes over the assets 
npm run build:dev

# build the theme in production mode
# optimising and compressing the code
npm run build:prod
```

### Blog (notes)
If you want te enable the blog in this theme, create a page called `notes` with no parents.
Then go edit it and add as many notes as you want: each one of them is a blog post, shown in the homepage.

### Image viewer
This theme provides a simple image viewer (with a little grid system).
When you create a page, add this tag: 

```
(viewer: all columns: 4 last: 2)
```

where:

- `viewer` enable the viewer
- `columns` create a grid with columns of <n> (1-4) elements
- `last` creates a grid with the **last** column of <n> (1-4) elements

Automatically, when you'll click on these images, you'll get a full page viewer to see/navigate them.

---

*Enjoy! :)*
