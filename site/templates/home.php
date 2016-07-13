<?php snippet('header') ?>
<?php snippet('frame') ?>

<section class="content home">
    <?php echo $page->text()->kirbytext() ?>
</section>

<section class="content notes">
    <?php foreach(page('notes')->children()->visible()->flip() as $note) : ?>

    <article class="note-preview">
        <h1><a href="<?php echo $note->url() ?>"><?php echo $note->title()->html() ?></a></h1>
        <p>
            <?php echo $note->text()->excerpt(50, 'words') ?>
            <a href="<?php echo $note->url() ?>">Read more</a>
            <span class="meta">
                <time datetime="<?php echo $note->date('c') ?>" pubdate="pubdate">
                    <?php echo $note->date('d.m.y') ?>
                </time>
                <?php $tags = implode(', ', explode(',', $note->tags())) ?>
                <?php if ($tags) : echo ' - '; endif ?>
                <?php echo $tags ?>
            </span>
        </p>
        
    </article>

    <?php endforeach ?>
</section>

<?php snippet('footer') ?>
