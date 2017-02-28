/**
 *
 * @name: typewriter
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict';

import $ from 'jquery';
import Component from 'component';
import { register } from 'lib/app';

class Viewer extends Component {

    init() {
        this.$body = $('body');
        this.$previews = $('.grid figure', this.$el);
        this.$image = $('.viewer-image', this.$el);
        this.$caption = $('.viewer-caption', this.$el);

        this.mapEvents();
    }

    mapEvents() {
        this.$previews.on('click', showImageHandler)
        $('.viewer').on('click', closeViewerHandler)
        $('.viewer-prev').on('click', getChangeImageHandler(false))
        $('.viewer-next').on('click', getChangeImageHandler(true))
    }

    showImage($preview){
        let $previewImage = $preview.children('img')
        $previews.removeClass('is-current')
        $preview.addClass('is-current')
        $image.attr('src', $previewImage.attr('src'))
        $caption.text('').text($previewImage.next().text())
        $body.addClass('is-viewer-mode')
    }

    showImageHandler() {
        showImage($(this))
        return false
    }

    closeViewerHandler() {
        $previews.removeClass('is-current')
        $body.removeClass('is-viewer-mode')
        return false
    }

    getChangeImageHandler(showNext) {
        return () => {
            let index = $previews.index($('.grid figure.is-current')) + (showNext ? 1 : -1)
            index = (index < 0) ? $previews.length - 1 : index
            index = (index >= $previews.length) ? 0 : index
            showImage($previews.eq(index))
            return false
        }
    }

}

export default register('viewer', Viewer);
