<?php

include 'jobTime.class.php';
include 'conf.php';



if(isset($_POST['startD'])){
 
    $job = new JobTime($_POST['startD'],$_POST['endD'],$_POST['startT'],$_POST['endT'], $_POST['project'], $db);

    $job->sendToDb();

    if($job->db->affected_rows > 0){
        echo "הנתונים נשמרו בהצלחה";
    }

}else if(isset($_GET['getData'])){
    $result = $db->query("SELECT * FROM jobs");

    $arr = $result->fetch_all(MYSQLI_ASSOC);
    
    ?>

    <table>
        <tr>
            <th>פרויקט</th>
            <th>תאריך התחלה</th>
            <th>שעת התחלה</th>
            <th>תאריך סיום</th>
            <th>שעת סיום</th>
        </tr>

    <?php

    foreach($arr AS $job){
        ?>
        <tr>
            <td><?=$job['project']?></td>
            <td><?=$job['start_date']?></td>
            <td><?=$job['start_time']?></td>
            <td><?=$job['end_date']?></td>
            <td><?=$job['end_time']?></td>
        </tr>
     <?php
    }
}



//echo $job->getTimes();
