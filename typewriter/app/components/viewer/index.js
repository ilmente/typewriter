'use strict';

import $ from 'jquery';
import Component from 'component';
import { register } from 'lib/app';

const PREVIEW_HASH = '/display/'

class Viewer extends Component {

    init() {
        this.$window = $(window);
        this.$hide = $('.js-viewer-hide', this.$el);
        this.$previews = $('.js-viewer-preview', this.$el);
        this.$target = $('.js-viewer-target', this.$el);
        this.index = 0;
        
        this.mapEvents();
        this.routing();
    }

    mapEvents() {
        this.$window.on('hashchange', this.onHashChange.bind(this));
        this.$hide.on('click', this.onHide.bind(this));
    }

    onHashChange() {
        this.routing();
    }

    onHide() {
        window.history.back();
        return false;
    }

    routing() {
        this.index = this.getCurrentIndex();

        if (this.index >= 0) {
            this.loadPreview();
            this.showPreview();
            return;
        }

        this.hidePreview();
    }

    getCurrentIndex() {
        return parseInt(this.hash.replace(PREVIEW_HASH, ''));
    }

    showPreview() {
        this.$el.addClass('is-display');
    }

    hidePreview() {
        this.$el.removeClass('is-display');
    }

    loadPreview() {
        let preview = this.$previews[this.index];
        this.$target.attr('src', preview.src);
    }

    get hash() {
        return window.location.hash.replace('#', '');
    }

}

export default register('viewer', Viewer);
