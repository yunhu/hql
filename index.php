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
$start = new fetch('2016-03-29');//日期 例如 2015-03-30如果不填,则会默认跑前一天的.
//$start = new fetch();//日期则会默认跑前一天的.
$start->start('zl.txt');
