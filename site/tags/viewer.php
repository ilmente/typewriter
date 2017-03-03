<?php

kirbytext::$tags['viewer'] = array(
    'attr' => array(
        'columns',
        'last'
    ),
    'html' => function($tag) {
        $images = $tag->attr('viewer', 'all');
        $columns = $tag->attr('columns', 2);
        $last = $tag->attr('last', 0);
        $class = 'c-grid__row c-grid--cols-' . $columns;

        if ($last > 0) {
            $class .= ' c-grid--last-' . $last;
        }

        $html = '<div class="c-viewer c-grid" data-component="viewer">';
        $html .= '<div class="' . $class . '">';

        foreach($tag->page()->images() as $image) {
            $html .= '<figure class="c-grid__figure">';
            $html .= '<img src="' . $image->url() . '" alt="' . $image->filename() . '">';
            $html .= '</figure>';
        }

        $html .= '</div></div>';

        return $html;
    }
);