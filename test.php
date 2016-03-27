<?php
/**
 * Created by PhpStorm.
 * User: zhangyunhu
 * Date: 2016/3/25
 * Time: 11:25
 */
/*
include __DIR__ . '/js/jq.js';
include __DIR__ . '/js/cookie.js';
include __DIR__ . '/js/common.js';
include __DIR__ . '/js/b.js';
include __DIR__ . '/js/a.js';
include __DIR__ . '/js/d.js';
*/

$ch = curl_init();
$path = __DIR__ . '/cookie/cookie.txt';
curl_setopt($ch, CURLOPT_URL,'http://www.yunhublog.com/a.php');
curl_setopt($ch, CURLOPT_HEADER, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch,CURLOPT_COOKIE," BIGipServerpool_hlzh_122.119.120.20_80=209221498.20480.0000;_pk_id.2.134a=85fada3d79095860.1458730320.10.1458903121.1458903105;_pk_ses.2.134a=*;all=http%3A//www.umetrip.com/img/index/h_pic_3.jpg%2Chttp%3A//www.umetrip.com/img/index/h_pic_1.jpg%2Chttp%3A//www.umetrip.com/img/index/h_pic_2.jpg%2C0;");
$content = curl_exec($ch);
curl_close($ch);
var_dump($content);
/*
die;
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,'');
curl_setopt($ch, CURLOPT_HEADER, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$con= curl_exec($ch);
curl_close($ch);
var_dump($con);
*/
