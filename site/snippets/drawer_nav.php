<div id="drawer">
  <div class="tab">
  </div>
  

  <?php

  // main menu items
  $items = $pages->visible();

  // only show the menu if items are available
  if($items->count() > 0):

  ?>
  
    <ul id="navigation">
      <?php foreach($pages->visible() as $item): ?>
      <li><a<?php ecco($item->isOpen(), ' class="active"') ?> href="<?php echo $item->url() ?>"><?php echo html($item->title()) ?></a></li>
      <?php endforeach ?>
    </ul>

  <?php endif ?>


  <ul id="social_icons">
    <li id="facebook"><a href="https://www.facebook.com/pages/Willie-Kessel-Photography/387163017963959"></a></li>
    <li id="instagram"><a href="http://instagram.com/williekessel"></a></li>
    <li id="tumblr"><a href="http://wjameskessel.tumblr.com/"></a></li>
  </ul>
</div>
<div id="title_bar"></div>
<div id="title"><a href="<?php echo url('/') ?>">
    <span id="willie">Willie</span><span id="kessel">Kessel</span>
</a></div>
<div id="content">
  <div class="tab">
  </div>