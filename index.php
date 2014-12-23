<?php require("config.php");

$app = new App();
$app->HTMLINJECT = "xmlns:ng='http://angularjs.org' id='ng-app' ng-app='app'";
$app->BODYINJECT = 'ng-controller="AppController"';
// $app->PAGETITLE;

$app->document_head(); ?>

<header class="app__header app__content"></header>

<div ui-view='app'></div>

<div class="clearfix"></div>
<footer class="app__footer app__content">
  Brought to you by SwitchMyBusiness
  <div class="copyright"><?=$app->COPYRIGHT?></div>
</footer>

<? $app->document_foot() ?>
