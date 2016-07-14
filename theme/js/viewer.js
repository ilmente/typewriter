/**
 *
 * @name: typewriter
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

import $ from 'jquery'

let $body = $('body')
let $previews = $('.grid figure')
let $image = $('.viewer-image')
let $caption = $('.viewer-caption')

function showImage($preview){
    let $previewImage = $preview.children('img')
    $previews.removeClass('is-current')
    $preview.addClass('is-current')
    $image.attr('src', $previewImage.attr('src'))
    $caption.text('').text($previewImage.next().text())
    $body.addClass('is-viewer-mode')
}

function showImageHandler() {
    showImage($(this))
    return false
}

function closeViewerHandler() {
    $previews.removeClass('is-current')
    $body.removeClass('is-viewer-mode')
    return false
}

function getChangeImageHandler(showNext) {
    return () => {
        let index = $previews.index($('.grid figure.is-current')) + (showNext ? 1 : -1)
        index = (index < 0) ? $previews.length - 1 : index
        index = (index >= $previews.length) ? 0 : index
        showImage($previews.eq(index))
        return false
    }
}

$previews.on('click', showImageHandler)
$('.viewer').on('click', closeViewerHandler)
$('.viewer-prev').on('click', getChangeImageHandler(false))
$('.viewer-next').on('click', getChangeImageHandler(true))
