<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

include_once('./head.sub.php');
include_once(G5_LIB_PATH.'/latest.lib.php');
include_once(G5_LIB_PATH.'/outlogin.lib.php');
include_once(G5_LIB_PATH.'/poll.lib.php');
include_once(G5_LIB_PATH.'/visit.lib.php');
include_once(G5_LIB_PATH.'/connect.lib.php');
include_once(G5_LIB_PATH.'/popular.lib.php');


/*웹아이콘*/
add_stylesheet('<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">');
/*웹아이콘*/

add_javascript('<script src="https://cdn.tailwindcss.com"></script>');

$MENUM = array();
$sql = "select * from {$g5['menu_table']} where CHAR_LENGTH(me_code)=2 and me_use=1 order by me_order";
$result = sql_query($sql);
while($tmp = sql_fetch_array($result)) {
    $MENUM[$tmp['me_code']] = $tmp;
}
foreach($MENUM as $k=>$v) {
    $sql = "select * from {$g5['menu_table']} where me_code like '{$k}%' and CHAR_LENGTH(me_code)=4 and me_use=1 order by me_order";
    $result = sql_query($sql);
    while($tmp = sql_fetch_array($result)) {
        $MENUM[$k]['ms'][$tmp['me_code']] = $tmp;
    }
}
?>
<!-- 상단 시작 { -->

<!-- } 상단 끝 -->