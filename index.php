<?php
/**
 * Created by PhpStorm.
 * User: zhangyunhu
 * Date: 2016/3/24
 * Time: 15:11
 */
date_default_timezone_set('Asia/Harbin');
define('PATH', __DIR__);
$msg = array(
    'code'=>1,
    'msg' => '参数错误'
);
include PATH  .'/base/base.class.php';
include PATH  .'/base/fetch.class.php';
$start = new fetch();
$start->start();
