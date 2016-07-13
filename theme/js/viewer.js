/**
 *
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

import dom from 'jquery'

let viewerFigure = dom('.viewer figure')
let viewerContainer = dom('.viewer-container')
let viewerImage = dom('.viewer-image')

viewerFigure.on('click', e => {
    viewerImage.get().setAttribute('src', e.target.getAttribute('src'))
    viewerImage.get().nextSibling.innerText = ''
    
    if (e.target.nextSibling) {
        viewerImage.get().nextSibling.innerText = e.target.nextSibling.innerText
    }
    
    viewerContainer.addClass('is-visible')
})

viewerContainer.on('click', e => viewerContainer.removeClass('is-visible'))
