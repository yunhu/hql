<?php
/**
 * Created by PhpStorm.
 * User: zhangyunhu
 * Date: 2016/3/24
 * Time: 17:33
 */
class fetch extends  base{
    public  $url = 'http://www.umetrip.com/mskyweb/fs/fa.do?';
    public $initurl = 'http://www.umetrip.com/mskyweb/main/index.html';
    public $referer = 'http://www.umetrip.com/';
    public $ips = '';
    public $cookie = '';
    public static  $mysql = null;
    public $log = '';
    public $days = 1;//抓取提前多少天的数据
    public $autocheck = 5; //cookie检测时间5分
    public $jscookie = '';
    public $record = '';
    public $jsxu = 1; //是否开启断点 0关,1开
    public $regurl = 'http://122.119.123.62:86/piwik/piwik.php?action_name=%E8%88%AA%E6%97%85%E7%BA%B5%E6%A8%AA&idsite=2&rec=1';
    public $jsession = '';
    public $lastday = '';
    public function  __construct($day=1){
        parent::__construct();
        $this->lastday = strtotime(date("Y-m-d"));
        $this->log =  PATH . '/log/log.txt';
        $this->cookie =  PATH . '/cookie/cookie.txt';
        $this->record=  intval(file_get_contents(PATH . '/record/record.txt'));
        $this->days = $day;//抓取提前多少天的数据
        if($this->record && $this->record > 0 && $this->jsxu == 1){
            echo '检测到上次执行未完成,将继续从断点开始,如果想重新开始,请删除record.txt中的内容' . "\n";
            sleep(3);
        }else{
            file_put_contents(PATH . '/record/record.txt', '');
        }
        $this->jscookie =   time() - 2 * 3600 * 24 - mt_rand(1, 9);
        $this->checkread($this->log);
        //$this->checkread($this->cookie);
        file_put_contents($this->log, '');
        $this->getMysql();

    }


    public function getMysql(){
        if(self::$mysql == null){
            try{
                $mysqlconf = $this->conf['mysql'];
                $host = $mysqlconf['host'];
                $db= $mysqlconf['db'];
                $port = $mysqlconf['port'];
                $pass = $mysqlconf['pass'];
                $user = $mysqlconf['user'];
                self::$mysql = new PDO("mysql:host=$host;dbname=$db;port=$port;charset=utf8",$user,$pass);
            }catch (Exception $e){
                $this->code = $e->getCode();
                $this->msg = $e->getMessage();
                $this->output();
                exit('mysql error!');
            }
        }
    }


    public function checkread($path){
        if(!is_writable($path)){
            echo "路径：" .$path . "该文件不可写!";
            exit();
        }
    }




    public function match($str){
        preg_match('/<span class=\'w125\'>(.*?)<\/span>/is', $str, $t);
        $m = trim($t[1]);
        $k = trim($m,"\+\"");
        $k = str_replace('"', '', $k);
        return trim($k);
    }
    public function dolog($data, $date, $start, $end, $res){
        if($res == 1) $res = '成功';
        $str = "时间：" . date("Y-m-d H:i:s")  . "data:" . json_encode($data) . "日期：" .$date . "起飞:" . $start . "结束：" . $end ."插入结果：" .$res ."\n";
        echo $str;
        file_put_contents($this->log, $str, FILE_APPEND);

    }
    public function insert($data, $date, $start, $end){
        $this->getMysql();
        $sql = "insert into list_flight(date, flyairport, destination, flightnum,planfly, actualfly,flybuilding,desbuilding,plandes,actualdes,flightstatus,create_time ) values (?,?,?,?,?,?,?,?,?,?,?,?)";
        $sth = self::$mysql->prepare($sql);
        $sth->bindParam(1,$date);
        $sth->bindParam(2,$start);
        $sth->bindParam(3,$end);
        $sth->bindParam(4,$data[0]);
        $sth->bindParam(5,$data[1]);
        $sth->bindParam(6,$data[2]);
        $sth->bindParam(7,$data[3]);
        $sth->bindParam(8,$data[7]);
        $sth->bindParam(9,$data[4]);
        $sth->bindParam(10,$data[5]);
        $sth->bindParam(11,$data[6]);
        $sth->bindParam(12,time());
        $res = $sth->execute();
        $this->dolog($data, $date, $start, $end, $res);
    }

    public function getCookie($url = ''){
        if(!$url) $url = $this->initurl;
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HEADER, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $content = curl_exec($ch);
        curl_close($ch);
        list($header, $body) = explode("\r\n\r\n", $content);
        preg_match("/set\-cookie:([^\r\n]*)/i", $header, $matches);
        list($cookie,$_) = explode(';', $matches[1]);
        //return $cookie .';JSESSIONID=3F3B5E79861FDE6C5C80ADDF29F6CA5C.umeDProductServer12044;' . $this->jsCookie() . ';_pk_ses.2.134a=*;' .'all=http%3A//www.umetrip.com/img/index/h_pic_3.jpg%2Chttp%3A//www.umetrip.com/img/index/h_pic_1.jpg%2Chttp%3A//www.umetrip.com/img/index/h_pic_2.jpg%2C0;isCheck=true0;';
        return $cookie;

    }
    public function toreg($url, $cookie){
        return $this->http($url, $cookie,'',80,'http://www.umetrip.com/mskyweb/inc/flySearch.html','122.119.123.62:86');
    }

    public function reg(){
        $h =abs(date("H") -  8);
        $str = substr(md5(uniqid()), 16);
        $vtime = time() - rand(0,20);
        $this->regurl .= '&r=' . mt_rand(111111, 599999);
        $this->regurl .= '&h=' . date("H");
        $this->regurl .= '&m=' . date("i");
        $this->regurl .= '&s=' . date("s");
        $this->regurl .= '&url=http%3A%2F%2Fwww.umetrip.com%2Fmskyweb%2Finc%2FflySearch.html&urlref=http%3A%2F%2Fwww.umetrip.com%2F';
        $this->regurl .= '&_id='  . $str;
        $this->regurl .= '&_idts=' . $this->jscookie;
        $this->regurl .= '&_idvc=' . $h;
        $this->regurl .= '&_idn=0' ;
        $this->regurl .= '&_refts=0' ;
        $this->regurl .= '&_viewts=' . $vtime;
        $this->regurl .= '&send_image=0&pdf=1&qt=0&realp=0&wma=0&dir=0&fla=1&java=0&gears=0&ag=0&cookie=1&res=2880x1800&gt_ms=1';

        return array($this->getCookie(),$str, $this->jscookie, $h, time(), $vtime);
        //return  $this->getCookie() . ';' . '_pk_id.2.134a=' . $str .';'.$this->jscookie . '.'  .$h . '.' .time() . '.' . $vtime;
    }

    public function start($t){
        $file = PATH . '/source/' . $t;
        if(!file_exists($file)){
             exit('file error!');
        }
        $file2 = PATH . '/source/hb2.txt';
        $fp = fopen($file, 'r');
        $i = 1;
        while(($line = fgets($fp)) !== false){
            $line = trim($line);
            $fp2 = fopen($file2, 'r');
            while(($line2 = fgets($fp2)) !== false) {
                $line2 = trim($line2);
                if($line != $line2){
                    $time = time();
                    $day = $this->days;
                    while($day > 0){
                        if(intval($this->record) > 0 && $this->record >= $i && $this->jsxu == 1) {
                        }else{
                            $date = date("Y-m-d", time() - $day * 24 * 3600);
                            if(strtotime($date) >= $this->lastday){
                                $date = date("Y-m-d", $this->lastday);
                            }
                            $r = $this->todo($date, $line, $line2, $i);
                        }
                        if($r !== 1) {
                            --$day;
                            ++$i;
                        }
                    }
                }

            }
            fclose($fp2);
        }
        file_put_contents(PATH . '/record/record.txt', '');
    }

    public function todo($date, $start, $end, $x){
        $url = $this->url . 'dep=' . $start. '&arr=' .$end. '&date=' . $date . '&channel=';
        /*
        $this->ips = include PATH .'/source/ip.conf.php';
        $reg = $this->reg();
        $comcookie = $reg[0] . ';_pk_id.2.134a=' . $reg[1] . '.' . $reg[2] . '.' . $reg[3] . '.'. $reg[4] . '.' . $reg[5] .  ';all=http%3A//www.umetrip.com/img/index/h_pic_3.jpg%2Chttp%3A//www.umetrip.com/img/index/h_pic_1.jpg%2Chttp%3A//www.umetrip.com/img/index/h_pic_2.jpg%2C0;isCheck=true0;';
        if($x == 1){
            $this->jsession = $this->getCookie($url) . ';';
        }
        if($this->jsession)
            $comcookie = trim($this->jsession) . trim($comcookie);
        */
        //$con = $this->http($url,$comcookie,'',80, 'www.umetrip.com');
        $con = '';
        while(!$con){
            $con = $this->http($url,$comcookie,'',80, 'www.umetrip.com');
            if(!$con)sleep(1);

        }
        /*
        if($this->ips) {
            $rand = array_rand($this->ips, 1);
            list($ip, $port) = explode(':', $tihs->ips[$rand]);
            $con = $this->http($url,$comcookie, $ip, $port,'www.umetrip.com');
        }else{
            $con = $this->http($url,$comcookie,'',80, 'www.umetrip.com');
        }
        */
        if(preg_match('/谁把你的网线拔了吧/', $con, $check)){
            file_put_contents(PATH . '/record/record.txt', --$x);
            echo '已经被封,waiting!' . "\n";
            return 1;
            //exit;
        }
        if(preg_match('/未找到您搜索的航班/', $con, $checkagain)) {
            echo '当前第' . $x . '次抓取' . ';抓取的url为:' . $url . ';未找到您搜索的航班！' . "\n";
        }else {
            preg_match('/temp.push\((.*)\)/is', $con, $match);
            if ($match[0]) {
                preg_match_all('/<span (.*?)>(.*?)<\/span>/is', $match[0], $title);
                //8行一个
                if ($title[0]) {
                    echo '当前第' . $x . '次抓取' . ';抓取的url为:' . $url . ';抓取成功正在处理数据！' . "\n";

                    $num = count($title[0]);
                    for ($i = 0; $i <= $num; ++$i) {
                        $type = $i % 8;
                        switch ($type) {
                            case 0:
                                $data = array();
                                $name = '';
                                preg_match_all('/<a href(.*?)>(.*?)<\/a>/is', $title[0][$i], $name);
                                $data[0] = $name[2][0];
                                break;
                            case 1:
                                $data[1] = $this->match($title[0][$i]);
                                break;
                            case 2:
                                $data[2] = $this->match($title[0][$i]);
                                break;
                            case 3:
                                list($data[3], $data[7]) = explode('/', $this->match($title[0][$i]));
                                break;
                            case 4:
                                $data[4] = $this->match($title[0][$i]);
                                break;
                            case 5:
                                $data[5] = $this->match($title[0][$i]);
                                break;
                            case 6:
                                $data[6] = $this->match($title[0][$i]);
                                break;
                            case 7:
                                if ($data[0])
                                    $this->insert($data, $date, $start, $end);

                                break;
                            default:
                                break;
                        }

                    }
                } else {
                    $this->msg = 'cannot match span ';
                    $this->code = 3;
                    $this->output();
                }
            } else {
                echo '当前第' . $x . '次抓取' . ';抓取的url为:' . $url . ';未获得数据，尝试下一条！' . "\n";
            }
        }



        file_put_contents(PATH . '/record/record.txt', $x);





    }


}