            <footer class="c-footer" role="contentinfo"> 
                <?php echo $site->copyright()->kirbytext() ?>
            </footer>
        </div>

        <div class="c-viewer__display-view">
            <a href="#" class="c-viewer__image js-viewer-hide">
                <img class="js-viewer-target">
            </a>

            <div class="c-viewer__text">
                <a href="#" class="js-viewer-hide">close (x)</a>
            </div>
        </div>

        <div data-component="log"></div>

        <?php echo js('assets/js/typewriter.js') ?>
    </body>
</html>
