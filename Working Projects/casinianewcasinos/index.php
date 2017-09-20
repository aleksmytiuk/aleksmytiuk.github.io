<?php

function strReplaceAssoc(array $replace, $subject) {
    return str_replace(array_keys($replace), array_values($replace), $subject);
}

if (!$mirror = @$_COOKIE['mirror']) {
    $list    = file_get_contents('http://casinia100.com/api/mirrors');
    $mirrors = json_decode($list, true);
    $mirror  = $mirrors[array_rand($mirrors)];
    setcookie('mirror', $mirror, time() + 3600 * 5);
}

if (isset($_REQUEST['btag'])) {
    setcookie('btag', $_REQUEST['btag'], time() + 3600 * 5);
}
if (isset($_REQUEST['a_aid'])) {
    setcookie('affiliate', $_REQUEST['a_aid'], time() + 3600, '/');
}

$site = 'https://' . $mirror;
//if (isset($_REQUEST['btag'])) $site .= '?btag='. $_REQUEST['btag'];

$btag = (isset($_REQUEST['btag'])) ? '?btag='. $_REQUEST['btag'] : '/';
$_btag = (isset($_REQUEST['btag'])) ? $_REQUEST['btag'] : '';


$clickid = (isset($_REQUEST['clickid'])) ? '&clickid='. $_REQUEST['clickid'] : '';
$_clickid = (isset($_REQUEST['clickid'])) ? $_REQUEST['clickid'] : '';
/*   |   */

$index = file_get_contents('template.html');

$_config = [
    'lang' => ''
];

preg_match_all( '/{%\s*config_(.*?)\s*=\s*(.*?)\s*%}/i', $index, $config );
foreach( $config[0] as $key => $val ){
    $_config[ $config[1][$key] ] = $config[2][$key];
    $index = str_replace( $val, '', $index );
}

$_lang = $_config['lang'] != '' ? $_config['lang'].'' : '';


$links = [
    '{%btag%}' => $btag,
    '{%_btag%}' => $_btag,

    '{%clickid%}' => $clickid,
    '{%_clickid%}' => $_clickid,

    '{%mirror%}' => $site.'/'.$_lang,
    '{%link%}' => $site.'/'. $_lang.$btag,
    '{%regLink%}' => $site.'/'.$_lang.$btag.'#popup-reg',
    '{%loginLink%}' => $site.'/'.$_lang.$btag.'#popup-login',
    '{%lang%}'      => $_lang
];

$index = strReplaceAssoc( $links, $index );

echo $index;

