<?php error_reporting(E_ERROR | E_WARNING | E_PARSE);

class App {

  public function __construct() {

  /*==============================================*==============================================*==============================================
  | Global defines - edit to your heart's content.
  |-----------------------------------------------
  |
  */
      /*-------------------------
        These config vars should probably always be changed for projects
      */
          // Project strings
          $this->PUBLISHER      = "SwitchMyBusiness";
          $this->PROJECTNAME    = "Energy Saving Tips for Businesses";
          $this->DESCRIPTION    = "Little hints and tips for different SME’s to save money on their energy bills."; // No longer than 155 characters.
          $this->DESCRIPTION_LONG = $this->DESCRIPTION; // 200 chars
          // URLS
          $this->BASEURL        =  ""; // "http://switchmybusiness.com/energysavingtips"; // This should be set to an absolute value on deployment, for social media linking purposes.
          $this->SHARE_IMG      = "logo.png"; // For social media
          // Analytics
          $this->SCHEMAROOT     = "WebPage";
          // Social Media
          $this->TWITTER_PUBLISHER = ""; // @XYZ
          $this->TWITTER_AUTHOR = ""; // @XYZ

      /*-------------------------
        These config vars can normally be left alone
      */
          // HTML
          $this->PAGETITLE      = $this->PROJECTNAME; // Page Title. Maximum length 60-70 characters, though pixel width is important
          $this->BODYINJECT     = "";
          $this->HTMLINJECT     = "";
          $this->COPYRIGHT      = $this->PUBLISHER." &copy; ".date("Y");
          // Filepaths
          $this->ASSETURL       = $this->BASEURL; // Where img/css/js/libraries are held on server
          $this->BOWER          = $this->ASSETURL."bower_components";
          $this->CSSURL         = $this->ASSETURL."public/styles";
          $this->JSURL          = $this->ASSETURL."public/scripts";
          $this->IMGURL         = $this->ASSETURL."public/images";
  }

  /*==============================================*==============================================*==============================================
  | Document head template, include through $app->document_head();
  */

  public function document_head() { echo <<<HTML

      <!DOCTYPE html>
      <!--[if lt IE 7]>      <html lang="en" {$this->HTMLINJECT} xmlns:og="http://opengraphprotocol.org/schema/" itemscope itemtype="http://schema.org/{$this->SCHEMAROOT}" class="no-js lt-ie9 lt-ie8 lt-ie7" > <![endif]-->
      <!--[if IE 7]>         <html lang="en" {$this->HTMLINJECT} xmlns:og="http://opengraphprotocol.org/schema/" itemscope itemtype="http://schema.org/{$this->SCHEMAROOT}" class="no-js lt-ie9 lt-ie8" > <![endif]-->
      <!--[if IE 8]>         <html lang="en" {$this->HTMLINJECT} xmlns:og="http://opengraphprotocol.org/schema/" itemscope itemtype="http://schema.org/{$this->SCHEMAROOT}" class="no-js lt-ie9" > <![endif]-->
      <!--[if gt IE 8]><!--> <html lang="en" {$this->HTMLINJECT} xmlns:og="http://opengraphprotocol.org/schema/" itemscope itemtype="http://schema.org/{$this->SCHEMAROOT}" class="no-js" > <!--<![endif]-->
      <head>

          <!-- ********************************
          *
          *   Powered by cynicism and hayfever.
          *
          ********************************* -->

          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
          <meta name="viewport" content="width=device-width, initial-scale=1">

          <!-- Metadata -->
          <title>{$this->DESCRIPTION}</title>
          <meta itemprop="name" content="{$this->PROJECTNAME}">
          <meta itemprop="description" content="{$this->DESCRIPTION}" name="description">
          <meta itemprop="image" content="{$this->IMGURL}social.png" name="image">

          <!-- Social \ Twitter Card -->
          <meta name="twitter:title" content="{$this->PAGETITLE}">
          <meta name="twitter:image" content="{$this->IMGURL}social.png">
          <meta name="twitter:description" content="{$this->DESCRIPTION}">
          <meta name="twitter:site" content="{$this->TWITTER_PUBLISHER}">
          <meta name="twitter:creator" content="{$this->TWITTER_AUTHOR}">

          <!-- Social \ Opengraph/Facebook -->
          <meta property="og:title" content="{$this->PAGETITLE}" />
          <meta property="og:site_name" content="{$this->PUBLISHER}" />
          <meta property="og:description" content="{$this->DESCRIPTION}" />
          <meta property="og:image" content="{$this->IMGURL}social.png" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="{$this->BASEURL}" />

      <!-- Font Icon set: font awesome from BootstrapCDN
          Example: https://fortawesome.github.io/Font-Awesome/examples/
          Library: https://fortawesome.github.io/Font-Awesome/icons/
       --><link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css?#iefix" rel="stylesheet">

      <!-- Assets -->
          <link rel="stylesheet" type="text/css" href="{$this->CSSURL}/app.min.css">
          <script src='{$this->JSURL}/libs.min.js'></script>
          <script src='{$this->JSURL}/app.min.js'></script>

      </head>
      <body {$this->BODYINJECT}>
      <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-54af9d6678f1771e" async="async"></script>

      <!-- ===============
      BEGIN CONTENT VIEW
      ================ -->
HTML;
  }

  /*==============================================*==============================================*==============================================
  | Document Foot template, include through $this->document_head();
  */

  public function document_foot() { echo <<<HTML
      <!-- ===============
      END CONTENT VIEW
      ================ -->
      <!-- Google Analytics -->
      <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-55295226-1', 'auto');
        ga('send', 'pageview');
      </script>
    </body>
    </html>
HTML;
  }

}
