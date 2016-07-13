        <div class="frame">
            <header class="header" role="header">
                <ul class="is-plain"> 
                    <li class="title"><?php echo $site->title()->html() ?></li>
                    <li class="description"><?php echo $site->description()->html() ?></li>
                </ul>
                <nav class="navigation" role="navigation">
                    <ul class="right is-plain">
                        <?php foreach($pages->visible() as $p): ?>
                        <li <?php e($p->isOpen(), 'class="is-active"') ?>>
                            <a href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a>
                        </li>
                        <?php endforeach ?>
                    </ul>
                </nav>
                <div class="clearfix"></div>
            </header>
            <main class="main" role="main">
