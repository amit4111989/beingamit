<?php
$file = "json/".$course."/".$chapterName.".json";

$json = json_decode(file_get_contents($file), true);

echo $json[0]['article'] ;

?>