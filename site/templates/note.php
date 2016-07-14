<?php snippet('header') ?>

<div class="viewer">
    <figure class="viewer-container">
        <img class="viewer-image">
    </figure>
    <div class="viewer-footer">
        <a href="#prev" class="viewer-command viewer-prev">
            < <span class="viewer-command-text">prev</span>
        </a>
        <span class="viewer-caption"></span>
        <a href="#next" class="viewer-command viewer-next">
            <span class="viewer-command-text">next</span> >
        </a>
    </div>
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
