<?php
/**
 * Created by PhpStorm.
 * User: zhangyunhu
 * Date: 16/3/15
 * Time: 下午6:20
 */
class base{
    public $code = 0;
    public $msg = 'ok';
    public $conf = '';
    public $call = '';
    public function __construct()
    {
        $this->conf = include PATH. '/conf/conf.php';
    }

    public function http($url,$cookie='',$proip='', $proport=80, $referer='', $host='' ){
        $url = 'http://www.umetrip.com/mskyweb/fs/fa.do?dep=TSN&arr=PVG&date=2016-03-28&channel=';
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_HEADER, 0);
            if($referer)
            curl_setopt($ch, CURLOPT_REFERER, $referer);
            curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36');
            if($cookie)
            curl_setopt($ch,CURLOPT_COOKIE,$cookie);
            if($host)
                curl_setopt($ch,CURLOPT_HTTPHEADER,$host);
            if($proip) {
             curl_setopt($ch, CURLOPT_PROXY, $proip);
             if($proport)
                    curl_setopt($ch, CURLOPT_PROXYPORT, $proport);
                curl_setopt($ch, CURLOPT_PROXYTYPE, CURLPROXY_HTTP);
            }
            $return = curl_exec($ch);
        curl_close($ch);
        return $return;
    }

    public function  __call($name, $args)
    {
        echo json_encode(array('msg'=>'参数错误', 'code'=>1));

    }
    public function index(){

    }
    public  function output($ext = ''){
        $arr = array(
            'code' => $this->code,
            'msg' => $this->msg,
        );
        if($ext){
            $arr['data'] = $ext;
        }
        $str = json_encode($arr);
        if($this->call) echo $this->call . "($str)";
        else echo $str;
    }
}