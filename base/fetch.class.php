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
    public $table = '';
    public $tablecount = 0;
    public $limit = 1; //一次取1条处理
    public $contable = 'airport_con';
    public $flycontable = 'flight_con';
    public function  __construct($table, $ari,$flight){
        $this->contable = $ari;
        $this->flycontable = $flight;
        parent::__construct();
        $this->table =  $table;
        $this->lastday = strtotime(date("Y-m-d"));
        $this->log =  PATH . '/log/log.txt';
        $this->cookie =  PATH . '/cookie/cookie.txt';
        $this->record=  intval(file_get_contents(PATH . '/record/record.txt'));
        if($this->record && $this->record > 0 && $this->jsxu == 1){
            echo '检测到上次执行未完成,将继续从断点开始,如果想重新开始,请删除record.txt中的内容' . "\n";
            sleep(1);
        }else{
            file_put_contents(PATH . '/record/record.txt', '');
        }
        $this->jscookie =   time() - 2 * 3600 * 24 - mt_rand(1, 9);
        $this->checkread($this->log);
        //$this->checkread($this->cookie);
        file_put_contents($this->log, '');
        $this->getMysql();
        $this->tablecount = $this->fetchCount();
        if(!$this->tablecount){
            echo 'empty talbe ,exit' . "\n";
        }

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
    public function fetchCount(){
        $this->getMysql();
        $sql = "select *  from " . $this->table;
        $sth = self::$mysql->prepare($sql);
        $sth->execute();
        return $sth->rowCount();
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

    public function fetchtable($offset){
        $this->getMysql();
        $sql  = "select * from " . $this->table . " limit $offset, 1 ";
        $sth = self::$mysql->prepare($sql);
        $sth->execute();
        $row = $sth->fetch(PDO::FETCH_ASSOC);
        return $row;

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

    public function tfetch(){
        $url = 'http://www.umetrip.com/mskyweb/fs/fc.do?&channel=&flightNo=KY9581&date=2016-03-30';
        $con = $this->http($url, '','',80, 'www.umetrip.com');
        var_dump($con);
        file_put_contents('tmp.txt', $con);
    }

    public function  getp3($con){
        preg_match('/主飞航班：(.*?)(.*?)<\/p>/is', $con, $maint);
        $main = explode(',', $maint[2]);
        $mainflight= trim($main[0]);
        preg_match('/<div class="p_info">(.*?)<\/div>(.*?)<\!\-\-机场\-\-\->/is', $con,$infot);
        preg_match_all('/<ul>(.*?)<\/ul>/is',$infot[0], $infom);
        $return = array();
        foreach($infom[0] as  $k=>$v){
            $tmp = '';
            preg_match_all('/<li (.*?)>(.*?)<span>(.*?)<\/span>/is', $v, $tmp);
            $return[$k][]= str_replace('公里','', $tmp[3][1]);
            preg_match('/(.*?)小时(.*?)分/', $tmp[3][2], $ptime);
            $return[$k][]= intval($ptime[1]) * 60 + intval($ptime[2]);
            list($type, $age) = explode('/', $tmp[3][3]);
            $age = str_replace('月', '', $age);
            $age = str_replace('年', '', $age);
            $return[$k][] =$type;
            $return[$k][] =$age;
            $return[$k][] =$mainflight;
        }
        return $return;
    }

    public function tofetch($comdata){

        $date = $date;
        $flightnum = $flight;
        $date = date("Y-m-d" ,strtotime($comdata['date']));
        $flightnum = $comdata['flightnum'];
        $url = "http://www.umetrip.com/mskyweb/fs/fc.do?&channel=&flightNo={$flightnum}&date={$date}";
        $con = '';
        while(!$con){
            $con = $this->http($url, '','',80, 'www.umetrip.com');
            if(!$con)sleep(1);

        }
        if(preg_match('/谁把你的网线拔了吧/', $con, $check)){
            echo '已经被封,waiting!' . "\n";
            return 1;
            //exit;
        }
        $p3arr = $this->getp3($con);
        preg_match('/<\!\-\-机场\-\-\->(.*?)<div id="footer">/is', $con, $tmp);
        preg_match_all('/<div class="fly_box">(.*?)<\/p>(.*?)<div class="clear"><\/div>/is', $tmp[0], $mm);
        $res[1] = $mm[0];
        if($res[1]) {
            $tnum = count($res[1]);
            $fnumus = $tnum - 1;
            for ($i = 0; $i < $tnum; ++$i) {
                $txt = '';
                $ahead = '';
                $aheadt = '';
                $visiablet = '';
                $flowt = '';
                $tw = '';
                $airportpre = '';
                $airport = '';
                $aheadflight ='';
                $aheadtime = '';
                $visiable = '';
                $flow = '';
                $tem = '';
                $weather = '';
                preg_match('/机场(.*)\((.*)\)/is', $res[1][$i], $txt);
                $airport = trim($txt[2]);
                preg_match('/前序航班(.*?)\[/is', $res[1][$i], $ahead);
                $aheadflight = trim($ahead[1]);
                preg_match('/已于(.*?)到达/is', $res[1][$i], $aheadt);
                if($aheadt[1])
                $aheadtime  = $date . " {$aheadt[1]}";
                preg_match('/能见度\：(.*?)<\/p>/is', $res[1][$i], $visiablet);
                $visiable = trim(str_replace('m','', $visiablet[1]));
                preg_match('/流量：(.*?)<\/p>/is', $res[1][$i], $flowt);
                $flow = trim($flowt[1]);
                preg_match('/<div class="f_r">(.*?)<p>(.*)℃(.*?)<b>(.*?)<\/b>/is', $res[1][$i], $tw);
                $tem = trim($tw[2]);
                $weather = trim($tw[4]);
                if($i < $fnumus){
                    preg_match('/机场(.*)\((.*)\)/is', $res[1][$i+1], $txtpre);
                    $airportpre = trim($txtpre[2]);
                    $this->addflightcon($airport, $airportpre,$p3arr[$i],0, $comdata);
                }
                $this->addairprot($tem, $weather, $airport, $aheadflight, $aheadtime, $visiable,$flow,$date, $flightnum,$date, $flightnum);
        }
            if($fnumus >= 2){
                $totaltime = 0;
                $totalkm = 0;
                $newdata = array();
                foreach($p3arr as $v){
                    $totalkm += $v[0];
                    $totaltime += $v[1];
                }
                $newdata[0] = $totalkm;
                $newdata[1] = $totaltime;
                $newdata[2] = $p3arr[0][2];
                $newdata[3] = $p3arr[0][3];
                $newdata[4] = $p3arr[0][4];
                $this->addflightcon($comdata['flyairport'], $comdata['destination'], $newdata, 1, $comdata);
            }
        }
    }

    public function addflightcon($start, $end, $data,$type =0, $comdata){
        $this->getMysql();
        $sql = "insert into {$this->flycontable}(`date`,flightnum,fly,arrived,totalmileage,totaltime,planetype,planeage,mainflight,createtime,`type`) values (?,?,?,?,?,?,?,?,?,?,?)";
        $sth = self::$mysql->prepare($sql);
        $sth->bindParam(1,$comdata['date']);
        $sth->bindParam(2,$comdata['flightnum']);
        $sth->bindParam(3,$start);
        $sth->bindParam(4,$end);
        $sth->bindParam(5,$data[0]);
        $sth->bindParam(6,$data[1]);
        $sth->bindParam(7,$data[2]);
        $sth->bindParam(8,$data[3]);
        if($type == 0) {
            $data[4] = '';
        }
        $sth->bindParam(9, $data[4]);
        $sth->bindParam(10,time());
        $sth->bindParam(11,$type);
        $res = $sth->execute();
        $this->dologaircon($sql, $res);

    }
    //参数就这样吧,不整理了
    public function addairprot($tem, $weather, $airport, $aheadflight, $aheadtime, $visiable,$flow, $date, $flightnum){

        $this->getMysql();
        $sql = "insert into {$this->contable}(flightnum,airport,temperature,weather,visibility,flow,aheadflight,aheadarrive,`date`,createtime) values (?,?,?,?,?,?,?,?,?,?)";
        $sth = self::$mysql->prepare($sql);
        $sth->bindParam(1,$flightnum);
        $sth->bindParam(2,$airport);
        $sth->bindParam(3,$tem);
        $sth->bindParam(4,$weather);
        $sth->bindParam(5,$visiable);
        $sth->bindParam(6,$flow);
        $sth->bindParam(7,$aheadflight);
        if(!$aheadtime){
            $aheadtime = null;
        }
        $sth->bindParam(8,$aheadtime);
        $sth->bindParam(9,$date);
        $sth->bindParam(10,time());
        $res = $sth->execute();
        $this->dologaircon($sql, $res);
    }
    public function dologaircon($data, $res){
        if($res == 1) $res = 'succeed!';
        $str = "sql:{$data} 执行:". $res . "\n";
        echo $str;
        file_put_contents($this->log, $str, FILE_APPEND);
    }

    public function start(){
        $url = '';
        $num = 0;
        while($num < $this->tablecount){
            if(intval($this->record) > 0 && $this->record > $num && $this->jsxu == 1) {
                ++$num;
            }else{
                $data = $this->fetchtable($num);
                $r = $this->tofetch($data);
                while($r === 1){
                    $r = $this->tofetch($data);
                    echo 'just waiting unlock!'. "\n";
                    sleep(1);
                }
                ++$num;
                file_put_contents(PATH . '/record/record.txt', $num);
            }
        }

        /*
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
                            var_dump($r);
                            die;
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
        */
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