<?php

$spreadsheetId = '11BCnspCt2Mut3nhc4WMY6CYTd0zF9C3eCzsk1AEpKLM';
$ranges = 'sales!A1:E6';
$apiKey = '';

$url = "https://sheets.googleapis.com/v4/spreadsheets/{$spreadsheetId}/values/{$ranges}?key={$apiKey}";
$json = file_get_contents($url);
$json_decode = json_decode($json);

ob_start(function($buf){ return mb_convert_encoding($buf, 'SJIS', 'UTF-8'); });
foreach ($json_decode->values as $value) {
    echo "'".implode("','", $value)."'";
    echo "\n";
}

?>
