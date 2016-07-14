# typewriter
## Kirby CMS minimal theme (ilmente.com)

My personal website [ilmente.com](http://ilmente.com) is based on Kirby CMS 
and **this is the minimal theme I'm using there**.

### Requirements
- `node.js` 6.0.0 or above
- Kirby CMS 2.3.0 or above

### Setup
Download this repo on your local machine.
Move this repo content into your Kirby site root.
Then:

``` bash
# install the dependencies
npm install

# build the theme in developmente mode
# watching for changes over the assets 
npm run dev 

# build the theme in production mode
# optimising and compressing the code
npm run prod 
```

### Blog (notes)
If you want te enable the blog in this theme, create a page called `notes` with no parents.
Then go edit it and add as many notes as you want: each one of them is a blog post, shown in the homepage.

### Images
This theme provides a little grid system (mainly for images).
When you create a page/note, add something like this: 

``` html
<div class="grid rows-3 last-2">
    (image: 1.jpg caption: some text)
    (image: 2.jpg)
    (image: 3.jpg)
    (image: 4.jpg)
    (image: 5.jpg)
</div>
```

where:

- `grid` enables the grid system;
- `rows-<n>` creates grid rows of <n> elements;
- `last-<n>` creates the **last** grid row of <n> elements;
- `<n>` can be 1, 2, 3 or 4.

Automatically, when you'll click on these images, you'll get a full page viewer to see/navigate them.

---

*Enjoy! :)*
