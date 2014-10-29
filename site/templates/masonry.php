<?php snippet('header') ?>


<?php snippet('drawer_nav') ?>
  <div class="masonry">
      
      <?php foreach($page->images()->shuffle() as $image): ?>

      <?php if($image->height() > $image->width()) { ?>

        <li class='block'>
          <a rel='gallery' href='<?php echo $image->url() ?>'><img class='vertical' src="<?php echo thumb($image, array('height' => 500), false) ?>" /></a>
        </li>

      <?php } else { ?>
        <li class='block'>
          <a rel='gallery' href='<?php echo $image->url() ?>'><img class='horizontal' src="<?php echo thumb($image, array('width' => 500), false) ?>" /></a>
        </li>
      <?php } ?>

      <?php endforeach ?>

  </div>