<?php

class JobTime {

    public $stertDate;
    public $endDate;
    public $startTime;
    public $endTime;
    public $project;
    public $db;

    public function __construct($sd, $ed, $st, $et, $pro ,$db){
        $this->stertDate = $sd;
        $this->endDate = $ed;
        $this->startTime = $st;
        $this->endTime = $et;
        $this->project = $pro;
        $this->db = $db;
    }

    function sendToDb(){
        $this->db->query("INSERT INTO `jobs`
        (`id`, `start_date`, `end_date`, `start_time`, `end_time` ,`project`)
         VALUES
        (NULL, '{$this->stertDate}', '{$this->endDate}', '{$this->startTime}', '{$this->endTime}' ,{$this->project});");
    }

    public function getTimes(){
        return "you start the job at {$this->startTime} and finish at {$this->endTime}";
    }
}