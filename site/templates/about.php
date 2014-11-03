<?php snippet('header') ?>


<?php snippet('drawer_nav') ?>

  <div class="aboutwrapper">
    <div class="imagewrapper">
      <img src="<?php echo $page->image()->url() ?>" alt="Willie"/>
    </div>
    <div class="textwrapper">
      <?php echo $page->text()->kirbytext() ?>
    </div>
  </div>
