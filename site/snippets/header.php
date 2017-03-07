<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <meta name="description" content="<?php echo $site->description()->html() ?>">
        <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">

        <?php echo css('assets/css/typewriter.css') ?>

        <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
    </head>
    
    <body class="c-viewer" data-component="viewer">
        <div class="c-viewer__main-view">
            <header class="c-header" role="header">
                <ul class="c-header__info"> 
                    <li class="c-header__title"><?php echo $site->title()->html() ?></li>
                    <li class="c-header__tagline"><?php echo $site->description()->html() ?></li>
                </ul>

                <nav class="c-navigation" role="navigation">
                    <ul class="c-navigation__menu">
                        <?php foreach($pages->visible() as $p): ?>
                            <li class="c-navigation__item">
                                <a class="c-navigation__link <?php e($p->isOpen(), 'is-active') ?>" href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a>
                            </li>
                        <?php endforeach ?>
                    </ul>
                </nav>
            </header>
