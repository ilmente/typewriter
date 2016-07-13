<?php snippet('header') ?>

<div class="viewer-container">
    <a class="viewer-close">close (x)</a>
    <figure>
        <img class="viewer-image"><figcaption class="viewer-image-caption"></figcaption>
    </figure>
</div>

<?php snippet('frame') ?>

<section class="content note">
    <article class="note-full">
        <?php echo $page->text()->kirbytext() ?> 

        <p class="meta">
            <time class="date" datetime="<?php echo $page->date('c') ?>" pubdate="pubdate">
                <?php echo $page->date('d.m.y') ?>
            </time>
            <?php $tags = implode(', ', explode(',', $page->tags())) ?>
            <?php echo $tags ?>
        </p>
    </article>
</section>

<?php snippet('footer') ?>
